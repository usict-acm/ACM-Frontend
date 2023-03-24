import { Dispatch, Fragment, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SweetAlert from "react-bootstrap-sweetalert";
import ReactPaginate from "react-paginate";
import { ContactUs } from ".";
import { doFetch } from "../../api/fetchData";
import wrapPromise from "../../api/wrapPromise";
import Title from "../Title";

type Props = {
    data: { read(): ContactUs[] };
};

async function handleDelete(
    id: number,
    data: ContactUs[],
    setData: Dispatch<ContactUs[]>
) {
    const newCertificates = [...data];
    const index = newCertificates.findIndex((x) => x.id === id);
    await doFetch(`/contactus/${data[index].id}`, "DELETE");
    newCertificates.splice(index, 1);
    setData(newCertificates);
}

export default function ContactUsTable(props: Props) {
    const [data, setData] = useState(props.data.read());
    const itemsPerPage = 10;
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    const [deleteReq, setDeleteReq] = useState({ read() {} });
    const [deleteId, setDeleteId] = useState<number | null>(null);

    deleteReq.read();

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    const handleDeleteClick = (id: number) => {
        setDeleteId(id);
    };

    useEffect(() => {
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, []);
    return (
        <>
            {deleteId && (
                // using this because sweetalert types.ts is not updated
                /* @ts-ignore */
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={() => {
                        setDeleteId(null);
                        setDeleteReq(
                            wrapPromise(handleDelete(deleteId, data, setData))
                        );
                    }}
                    cancelBtnBsStyle="default"
                    onCancel={() => setDeleteId(null)}
                    focusCancelBtn
                >
                    This row would be deleted!
                </SweetAlert>
            )}
            <Title title="Contact Us"></Title>
            <table>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>College Name</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(itemOffset, endOffset).map((contactUs) => (
                        <Fragment key={contactUs.id}>
                            <ContactUsRow
                                item={contactUs}
                                handleDeleteClick={handleDeleteClick}
                            />
                        </Fragment>
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
        </>
    );
}

function ContactUsRow(props: {
    item: ContactUs;
    handleDeleteClick(id: number): void;
}) {
    return (
        <tr>
            <td>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td>{props.item.email}</td>
            <td>{props.item.mobile}</td>
            <td>{props.item.college}</td>
            <td>{props.item.message}</td>
            <td data-label="actions">
                <DeleteIcon
                    onClick={() => props.handleDeleteClick(props.item.id)}
                    className="new-icons"
                />
            </td>
        </tr>
    );
}
