import React, { useState } from "react";
import "./Assests/CSS/Table.css";
import TableRows from "./TableRows";
import EditableRows from "./EditableRows";
import Title from "./Title";


const AnnouncementMobileTable = function (props) {
  const data = props.data.read();
  const [contacts, setContact] = useState(data.event);
  const [editContactId, setEditContactId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

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
    <>
      <Title title="Announcements" />
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>NAME</th>
              <th>PHONE</th>
              <th>ADDRESS</th>
              <th>EMAIL</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <React.Fragment key = { contact.sno}>
                {editContactId === contact.sno ? (
                  <EditableRows
                    editFormDatas={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClicker={handleCancelClick}
                  />
                ) : (
                  <TableRows
                    contact={contact}
                    handleDeleteClick={handleDelete}
                  />
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </>
  );
};
export default AnnouncementMobileTable;