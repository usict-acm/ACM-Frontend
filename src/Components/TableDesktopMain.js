import React, { useState, useEffect } from "react";
import "./Assests/CSS/Table.css";
import data from "./mock-data.json";
import TableDesktop from "./TableDesktop";
import EditableRows from "./EditableRows";
import Badge from "react-bootstrap/Badge";
import Title from "./Title";
import ReactPaginate from "react-paginate";

const TableDesktopMain = function () {
  const [contacts, setContact] = useState(data);
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

  const handleEditClick = function (event, contact) {
    event.preventDefault();
    setEditContactId(contact.id);
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
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;

    setContact(newContacts);
    setEditContactId(null);
  };

  const handleDelete = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContact(newContacts);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  return (
    <React.Fragment>
      <Title title="Announcements"></Title>
      <form className="table-form" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>NAME</th>
              <th>PHONE</th>
              <th>ADDRESS</th>
              <th>EMAIL</th>
              <th></th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.slice(itemOffset, endOffset).map((contact) => (
              <>
                {editContactId === contact.id ? (
                  <EditableRows
                    editFormDatas={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClicker={handleCancelClick}
                  />
                ) : (
                  <TableDesktop
                    contact={contact}
                    handleDeleteClicker={handleDelete}
                    handleEditClicker={handleEditClick}
                  />
                )}
              </>
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
export default TableDesktopMain;
