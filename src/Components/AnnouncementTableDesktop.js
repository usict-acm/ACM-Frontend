import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SweetAlert from "react-bootstrap-sweetalert";
const AnnouncementTableDesktop = function(props) {
    const [isModal, setModal] = useState(false);

    const hideModal = () => {
        setModal(false);
    };

    const showModal = () => {
        setModal(true);
    };
    let startDate = new Date(props.contact.startDate);

    return (
        <>
            <tr key={props.contact.sno}>
                {isModal && (
                    <td>
                        <SweetAlert
                            warning
                            showCancel
                            confirmBtnText="Yes, delete it!"
                            confirmBtnBsStyle="danger"
                            title="Are you sure?"
                            onConfirm={() => {
                                props.handleDeleteClicker(props.contact.sno);
                                setModal(false);
                            }}
                            cancelBtnBsStyle="default"
                            onCancel={hideModal}
                            focusCancelBtn
                        >
                            This row would be deleted!
                        </SweetAlert>
                    </td>
                )}

                <td data-label="S.No">{props.contact.sno}</td>
                <td data-label="NAME">{props.contact.name} </td>

                <td data-label="Start Date">{startDate.getDate()}/{startDate.getMonth()}/{startDate.getFullYear()} </td>

                <td data-label="Actions">
                    <VisibilityIcon className="new-icons" />
                    <DeleteIcon className="new-icons" onClick={showModal} />
                </td>
            </tr>
        </>
    );
};
export default AnnouncementTableDesktop;
