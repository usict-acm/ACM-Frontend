import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SweetAlert from "react-bootstrap-sweetalert";

const JoinUsTableDesktop = function (props) {
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
        <td data-label="NAME">{props.contact.fullName} </td>
        <td data-label="NAME">0 </td>
        <td>20022</td>
        <td>Demo Message</td>
        <td>Demo Message</td>
        <td>Demo Message</td>
      </tr>
    </>
  );
};
export default JoinUsTableDesktop;
