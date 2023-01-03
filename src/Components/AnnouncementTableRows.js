import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";

const AnnouncementTableRows = function (props) {
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
        <td data-label="Title">{props.contact.fullName} </td>

        {showMobile && (
          <React.Fragment>
            <div className="icons-div">
              <td data-label="">
                {" "}
                <VisibilityIcon className="new-icons" />{" "}
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
export default AnnouncementTableRows;
