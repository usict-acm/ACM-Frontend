import React, { useState, useEffect } from "react";
import "./Assests/CSS/Table.css";
import EditableRows from "./EditableRows";
import Title from "./Title";
import AnnouncementTableDesktop from "./AnnouncementTableDesktop";
import ReactPaginate from "react-paginate";
import { fetchData } from "../api/fetchData";


const AnnouncementTable = function() {
    const someData = fetchData("/displayAnnouncement");
    const [contacts, setContact] = useState(someData.event);
    const [editContactId, setEditContactId] = useState(null);
    const itemsPerPage = 7;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(contacts.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(contacts.length / itemsPerPage));
    }, []);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % contacts.length;
        setItemOffset(newOffset);
    };

    const [editFormData, setEditFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });

    const handleEditClick = function(event, contact) {
        event.preventDefault();
        setEditContactId(contact.sno);
        const formValues = {
            fullName: contact.fullName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
        };

        setEditFormData(formValues);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = {
            ...editFormData,
        };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
        };

        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.sno === editContactId);
        newContacts[index] = editedContact;

        setContact(newContacts);
        setEditContactId(null);
    };

    const handleDelete = async (contactId) => {
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.sno === contactId);
        newContacts.splice(index, 1);
        setContact(newContacts);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    return (
        <React.Fragment>
            <Title title="Announcements"></Title>
            <form onSubmit={handleEditFormSubmit}>
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
                        {contacts.slice(itemOffset, endOffset).map((contact) => (
                            <React.Fragment key = { contact.sno}>
                                {editContactId === contact.sno ? (
                                    <EditableRows
                                        editFormDatas={editFormData}
                                        handleCancelClicker={handleCancelClick}
                                        handleEditFormChange={handleEditFormChange}
                                    />
                                ) : (
                                    <AnnouncementTableDesktop
                                        contact={contact}
                                        handleDeleteClicker={handleDelete}
                                        handleEditClicker={handleEditClick}
                                    />
                                )}
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
            </form>
        </React.Fragment>
    );
};
export default AnnouncementTable;
