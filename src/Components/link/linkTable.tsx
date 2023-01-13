import React, { useState, useEffect, Dispatch } from "react";
import "../Assests/CSS/Table.css";
import Title from "../Title";
import ReactPaginate from "react-paginate";
import SweetAlert from "react-bootstrap-sweetalert";
import { doFetch } from "../../api/fetchData";
import wrapPromise from "../../api/wrapPromise";
import { Link } from ".";
import LinkRow from "./linkRow";


type Props = {
    data: { read(): Link[]; };
}

async function handleDelete(id: number, links: Link[], setLinks: Dispatch<Link[]>) {
    const newLinks = [...links];
    const index = links.findIndex((blog) => blog.id === id);
    await doFetch(`/link/${links[index].id}`, "DELETE");
    newLinks.splice(index, 1);
    setLinks(newLinks);
};


const LinkTable = function(props: Props) {
    const [links, setLinks] = useState(props.data.read());
    const itemsPerPage = 7;
    const [pageCount, setPageCount] = useState(0);
    const [deleteId, setDeleteId] = useState(0);
    const [showModal, setModal] = useState(false);
    const [deleteReq, setDeleteReq] = useState({ read() { } });
    deleteReq.read();
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    useEffect(() => {
        setPageCount(Math.ceil(links.length / itemsPerPage));
    }, []);
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % links.length;
        setItemOffset(newOffset);
    };
    const handleDeleteClick = (id: number) => {
        setDeleteId(id);
        setModal(true);
    }

    return (
        <React.Fragment>
            {showModal && (
                // using this because sweetalert types.ts is not updated
                /* @ts-ignore */
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={() => {
                        setModal(false);
                        setDeleteReq(wrapPromise(handleDelete(deleteId, links, setLinks)));
                    }}
                    cancelBtnBsStyle="default"
                    onCancel={() => setModal(false)}
                    focusCancelBtn
                >
                    This row would be deleted!
                </SweetAlert>
            )}
            <Title title="Link"></Title>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Link for</th>
                        <th>Original Link</th>
                        <th>Shortened Link</th>
                        <th>Clicks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {links.slice(itemOffset, endOffset).map((link) => (
                        <React.Fragment key={link.id}>
                            <LinkRow link={link} />
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                containerClassName={"paginationBttns"}
                nextLinkClassName={"nextBttn"}
                previousLinkClassName={"previousBttn"}
                pageCount={pageCount}
                previousLabel="<"
            />
        </React.Fragment>
    );
};
export default LinkTable;
