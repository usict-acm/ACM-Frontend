import React, { useState, useEffect } from "react";
import "./Assests/CSS/Table.css";
import Title from "./Title";
import AnnouncementTableDesktop from "./AnnouncementTableDesktop";
import ReactPaginate from "react-paginate";


const AnnouncementTable = function(props) {
    const data = props.data.read();
    const [events, setEvents] = useState(data.event);
    const itemsPerPage = 7;
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    useEffect(() => {
        setPageCount(Math.ceil(events.length / itemsPerPage));
    }, []);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % events.length;
        setItemOffset(newOffset);
    };


    const handleDelete = async (contactId) => {
        const newContacts = [...events];
        const index = events.findIndex((contact) => contact.sno === contactId);
        newContacts.splice(index, 1);
        setEvents(newContacts);
    };

    return (
        <React.Fragment>
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
                                handleDeleteClicker={handleDelete}
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
        </React.Fragment>
    );
};
export default AnnouncementTable;
