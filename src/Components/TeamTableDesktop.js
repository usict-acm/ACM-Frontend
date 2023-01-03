import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import SweetAlert from "react-bootstrap-sweetalert";
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

        <td data-label="S.No">Name</td>
        <td data-label="NAME">{props.contact.fullName} </td>
        <td data-label="NAME">{props.contact.fullName} </td>
        <td data-label="NAME">0 </td>
        <td>20022</td>
        <td>20022</td>

        <td data-label="">
          {" "}
          <EditIcon className="new-icons" />{" "}
          <DeleteIcon className="new-icons" onClick={showModal} />{" "}
        </td>
      </tr>
    </>
  );
};
export default TableDesktop;
