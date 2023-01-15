import React, { useState, useEffect, Dispatch } from "react";
import "../Assests/CSS/Table.css";
import Title from "../Title";
import AnnouncementRow from "./announcementRow";
import ReactPaginate from "react-paginate";
import SweetAlert from "react-bootstrap-sweetalert";
import { doFetch } from "../../api/fetchData";
import wrapPromise from "../../api/wrapPromise";
import { Event } from ".";

const handleDelete = async (
    id: number,
    events: Event[],
    setEvents: Dispatch<Event[]>
) => {
    const newEvents = [...events];
    const index = events.findIndex((event) => event.id === id);
    await doFetch(`/event/${events[index].id}`, "DELETE");
    newEvents.splice(index, 1);
    setEvents(newEvents);
};

type Props = {
    data: { read(): Event[] };
};

const AnnouncementTable = function (props: Props) {
    const data = props.data.read();
    const itemsPerPage = 10;
    const [events, setEvents] = useState(data);
    const [pageCount, setPageCount] = useState(0);
    const [showModal, setModal] = useState(false);
    const [deleteId, setDeleteId] = useState(0);
    const [postReq, setPostReq] = useState({ read() {} });
    postReq.read();
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    useEffect(() => {
        setPageCount(Math.ceil(events.length / itemsPerPage));
    }, []);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % events.length;
        setItemOffset(newOffset);
    };
    const handleDeleteClicker = (id: number) => {
        setDeleteId(id);
        setModal(true);
    };

    return (
        <React.Fragment>
            {showModal && (
                /* @ts-ignore */
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={() => {
                        setModal(false);
                        setPostReq(
                            wrapPromise(
                                handleDelete(deleteId, events, setEvents)
                            )
                        );
                    }}
                    cancelBtnBsStyle="default"
                    onCancel={() => setModal(false)}
                    focusCancelBtn
                >
                    This row would be deleted!
                </SweetAlert>
            )}
            <Title title="Announcement"></Title>
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
                    {events.slice(itemOffset, endOffset).map((event) => (
                        <React.Fragment key={event.id}>
                            <AnnouncementRow
                                event={event}
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
            />
        </React.Fragment>
    );
};
export default AnnouncementTable;
