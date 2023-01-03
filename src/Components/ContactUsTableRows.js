import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";

const ContactUsTableRows = function (props) {
  const [showMobile, setShowMobile] = useState(false);
  const showMobileHandler = () => {
    setShowMobile(!showMobile);
  };
  const [isModal, setModal] = useState(false);

  const hideModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  return (
    <>
      {isModal && (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Yes, delete it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={() => {
            props.handleDeleteClick(props.contact.id);
            setModal(false);
          }}
          cancelBtnBsStyle="default"
          onCancel={hideModal}
          focusCancelBtn
        >
          This row would be deleted!
        </SweetAlert>
      )}
      <tr>
        <td data-label="S.No">{props.contact.id}</td>
        <td data-label="Name">{props.contact.fullName} </td>

        {showMobile && (
          <React.Fragment>
            <td data-label="Email">{props.contact.email}</td>
            {/* <td data-label="PHONE">{props.contact.phoneNumber}</td> */}
            <td data-label="Mobile">1515</td>
            <td data-label="College Name">USSR</td>
            <td data-label="Message">Siuu</td>
            <td>
              <DeleteIcon className="new-icons" />
            </td>
          </React.Fragment>
        )}
        <td data-label="">
          <button className="icons-add" onClick={showMobileHandler}>
            {" "}
            {!showMobile ? <AddCircleIcon /> : <RemoveCircleIcon />}{" "}
          </button>
        </td>
      </tr>
    </>
  );
};
export default ContactUsTableRows;
