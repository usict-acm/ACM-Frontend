import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SweetAlert from "react-bootstrap-sweetalert";
import Title from "./Title";
const TableDesktop = function (props) {
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
            props.handleDeleteClicker(props.contact.id);
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
        <td data-label="NAME">{props.contact.fullName} </td>

        <td data-label="PHONE">{props.contact.phoneNumber}</td>
        <td data-label="ADDRESS">{props.contact.address}</td>
        <td data-label="EMAIL">{props.contact.email}</td>

        <td data-label="">
          <button className="icons">
            {" "}
            <VisibilityIcon className="icon"/>{" "}
          </button>
        </td>
        <td data-label="">
          <button
            className="icons"
            onClick={(event) => props.handleEditClicker(event, props.contact)}
          >
            {" "}
            <EditIcon /><br></br>{" "}
          </button>
        </td>
        <td data-label="">
          <button className="icons" onClick={showModal}>
            {" "}
            <DeleteIcon />{" "}
          </button>
        </td>
      </tr>
    </>
  );
};
export default TableDesktop;
