import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";

const CertificateTableRows = function (props) {
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
        <td data-label="Unique Number">{props.contact.id}</td>
        <td data-label="Participant Name">{props.contact.fullName} </td>

        {showMobile && (
          <React.Fragment>
            <td data-label="EMAIL">{props.contact.email}</td>
            {/* <td data-label="PHONE">{props.contact.phoneNumber}</td> */}
            <td data-label="Start Date">20/12/22</td>
            <td data-label="End Date">21/12/22</td>
            {/* <td data-label="ADDRESS">{props.contact.address}</td> */}
            <div className="icons-div">
              <td data-label="">
                {" "}
                <DeleteIcon className="new-icons" onClick={showModal} />{" "}
              </td>
              <td data-label="">
                {" "}
                <EmailIcon className="new-icons" />{" "}
                <DownloadIcon className="new-icons" />{" "}
              </td>
              <td data-label="">
                {" "}
                <EditIcon
                  className="new-icons"
                  // onClick={(event) =>
                  //   props.handleEditClick(event, props.contact)
                  // }
                />{" "}
              </td>
              {/* <td data-label="">
              </td> */}
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
export default CertificateTableRows;
