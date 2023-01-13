import React, { useState, useEffect } from "react";
import "./Assests/CSS/Table.css";

import data from "./mock-data.json";
import JoinUsTableDesktop from "./JoinUsTableDesktop";
import EditableRows from "./EditableRows";
import ReactPaginate from "react-paginate";
import Title from "./Title";

const JoinUsTable = function () {
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

  return (
    <React.Fragment>
      <Title title="JoinUS"></Title>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>ACM Membership Number</th>
              <th>Enrollment Number</th>
              <th>Course</th>
              <th>Clubs</th>
            </tr>
          </thead>
          <tbody>
            {contacts.slice(itemOffset, endOffset).map((contact) => (
              <>
                {editContactId === contact.id ? (
                  <EditableRows
                    editFormDatas={editFormData}
                    // handleEditFormChange={handleEditFormChange}
                    // handleCancelClicker={handleCancelClick}
                  />
                ) : (
                  <JoinUsTableDesktop contact={contact} />
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
export default JoinUsTable;
