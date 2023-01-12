import React, { useState, useEffect } from "react";
import "./Assests/CSS/Table.css";
import Title from "./Title";
import AnnouncementTableDesktop from "./AnnouncementTableDesktop";
import ReactPaginate from "react-paginate";
import SweetAlert from "react-bootstrap-sweetalert";
import { doFetch } from "../api/fetchData";
import wrapPromise from "../api/wrapPromise";


const handleDelete = async (id, events, setEvents) => {
    const newContacts = [...events];
    const index = events.findIndex((contact) => contact.sno === id);
    await doFetch(`/announcement/${events[index].sno}`,  "DELETE");
    newContacts.splice(index, 1);
    setEvents(newContacts);
};

const AnnouncementTable = function(props) {
    const data = props.data.read();
    const itemsPerPage = 10;
    const [events, setEvents] = useState(data.event);
    const [pageCount, setPageCount] = useState(0);
    const [showModal, setModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [postReq, setPostReq] = useState({ read() { return null } });
    postReq.read();
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    useEffect(() => {
        setPageCount(Math.ceil(events.length / itemsPerPage));
    }, []);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % events.length;
        setItemOffset(newOffset);
    };
    const handleDeleteClicker = (id) => {
        setDeleteId(id);
        setModal(true);
    }

    return (
        <React.Fragment>
            {showModal && (
                < SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={() => {
                        setModal(false);
                        setPostReq(wrapPromise(handleDelete(deleteId, events, setEvents)));
                    }}
                    cancelBtnBsStyle="default"
                    onCancel={() => setModal(false)}
                    focusCancelBtn
                >
                    This row would be deleted!
                </SweetAlert>
            )}
            <Title title="Announcements"></Title>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {events.slice(itemOffset, endOffset).map((contact) => (
                        <React.Fragment key={contact.sno}>
                            <AnnouncementTableDesktop
                                contact={contact}
                                handleDeleteClicker={handleDeleteClicker}
                            />
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
                renderOnZeroPageCount={null}
            />
        </React.Fragment >
    );
};
export default AnnouncementTable;
