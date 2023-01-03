import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

const TeamTableRows = function (props) {
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
        <td data-label="Name">Jack</td>
        <td data-label="Designation">Leader</td>

        {showMobile && (
          <React.Fragment>
            <td data-label="Linkedin">Jack Bliss</td>
            {/* <td data-label="PHONE">{props.contact.phoneNumber}</td> */}
            <td data-label="Github">Jb@git</td>
            <td data-label="Instagram">Jb@insta</td>
            <td data-label="Year">{props.contact.id}</td>
            <div className="icons-div">
              <td data-label="">
                {" "}
                <EditIcon className="new-icons" />{" "}
              </td>
              <td data-label="">
                {" "}
                <DeleteIcon className="new-icons" onClick={showModal} />{" "}
              </td>
            </div>
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
export default TeamTableRows;
