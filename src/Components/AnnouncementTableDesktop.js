import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
const AnnouncementTableDesktop = function(props) {
    let startDate = new Date(props.contact.startDate);
    return (
        <tr key={props.contact.sno}>
            <td data-label="S.No">{props.contact.sno}</td>
            <td data-label="NAME">{props.contact.name} </td>

            <td data-label="Start Date">{startDate.getDate()}/{startDate.getMonth()}/{startDate.getFullYear()} </td>

            <td data-label="Actions">
                <VisibilityIcon className="new-icons" />
                <DeleteIcon className="new-icons" onClick={() => props.handleDeleteClicker(props.contact.sno)} />
            </td>
        </tr>
    );
};
export default AnnouncementTableDesktop;
