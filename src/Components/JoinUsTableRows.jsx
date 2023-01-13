import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const JoinUsTableRows = function (props) {
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
        <td data-label="First Name">Jack</td>
        <td data-label="Last Name">Bliss</td>

        {showMobile && (
          <React.Fragment>
            <td data-label="Email">Jack Bliss</td>
            <td data-label="Mobile">{props.contact.phoneNumber}</td>
            <td data-label="ACM Number">Jb@git</td>
            <td data-label="Enrollment Number">Jb@insta</td>
            <td data-label="Course">B.Tech</td>
            <td data-label="Clubs">ACM</td>
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
export default JoinUsTableRows;
