import React, { useState, useEffect, Dispatch } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import "../Assests/CSS/Table.css";
import Title from "../Title";
import ReactPaginate from "react-paginate";
import { Certificate } from ".";
import CertificateRow from "./certificateRow";
import wrapPromise from "../../api/wrapPromise";
import { doFetch } from "../../api/fetchData";

type Props = {
    data: { read(): Certificate[] };
};

async function handleDelete(
    id: number,
    certificates: Certificate[],
    setCertificates: Dispatch<Certificate[]>
) {
    const newCertificates = [...certificates];
    const index = newCertificates.findIndex((x) => x.id === id);
    await doFetch(`/certificate/${certificates[index].id}`, "DELETE");
    newCertificates.splice(index, 1);
    setCertificates(newCertificates);
}

export default function CertificateTable(props: Props) {
    const [certificates, setCertificates] = useState(props.data.read());
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [deleteReq, setDeleteReq] = useState({ read() { } });
    const [deleteId, setDeleteId] = useState<number | null>(null);

    deleteReq.read();
    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;

    useEffect(() => {
        setPageCount(Math.ceil(certificates.length / itemsPerPage));
    }, []);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % certificates.length;
        setItemOffset(newOffset);
    };
    const handleDeleteClick = (id: number) => {
        setDeleteId(id);
    };
    return (
        <React.Fragment>
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
                            wrapPromise(handleDelete(deleteId, certificates, setCertificates))
                        );
                    }}
                    cancelBtnBsStyle="default"
                    onCancel={() => setDeleteId(null)}
                    focusCancelBtn
                >
                    This row would be deleted!
                </SweetAlert>
            )}
            <Title title="Certificate"></Title>
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>Unique Number</th>
                            <th>Participant Name</th>
                            <th>Email</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            certificates.slice(itemOffset, endOffset).map((certificate) => (
                                <React.Fragment key={certificate.uniqueNo}>
                                    <CertificateRow certificate={certificate}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                </React.Fragment>
                            ))
                        }
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
            </form>
        </React.Fragment>
    );
};
