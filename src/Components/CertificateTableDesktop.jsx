import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import SweetAlert from "react-bootstrap-sweetalert";

const CertificateTableDesktop = function (props) {
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

        <td data-label="">
          {" "}
          <DeleteIcon className="new-icons" onClick={showModal} />
          <br />
          <EmailIcon className="new-icons" />
          <EditIcon className="new-icons" />
          <DownloadIcon className="new-icons" />
        </td>
      </tr>
    </>
  );
};
export default CertificateTableDesktop;
