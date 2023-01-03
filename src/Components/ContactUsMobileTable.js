import React, { useState } from "react";
import "./Assests/CSS/Table.css";
import data from "./mock-data.json";
import ContactUsTableRows from "./ContactUsTableRows";
import EditableRows from "./EditableRows";

const ContactUsMobileTable = function () {
  const [contacts, setContact] = useState(data);
  const [editContactId, setEditContactId] = useState(null);
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
    <>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>College Name</th>
              <th>Message</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <>
                {/* {editContactId === contact.id ? (
                  <EditableRows
                    editFormDatas={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClicker={handleCancelClick}
                  />
                ) : (
                  
                )} */}
                <ContactUsTableRows
                  contact={contact}
                  handleEditClick={handleEditClick}
                />
              </>
            ))}
          </tbody>
        </table>
      </form>
    </>
  );
};
export default ContactUsMobileTable;
