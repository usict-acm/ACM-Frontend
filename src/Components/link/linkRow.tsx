import React from "react";
import { Store } from 'react-notifications-component';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import 'react-notifications-component/dist/theme.css'
import { useState } from "react";

type Props = {
    link: Link;
    onDelete: (id: number) => any;
};

function LinkRow(props: Props) {

    const handleCopyClick = (code: string) => {
        navigator.clipboard.writeText(`https://usict.acm.org/link/${code}`);
        Store.addNotification({
            title: "Link Copied",
            message: "The link has been copied to the clipboard",
            type: "info",
            container: "top-right",
            dismiss: {
                duration: 3000,
                onScreen: true
            }
        });
    };

    const handleDeleteClick = (id: number) => {
        props.onDelete(id);
        Store.addNotification({
            title: "Link Deleted",
            message: "The link has been deleted successfully",
            type: "danger",
            container: "top-right",
            dismiss: {
                duration: 3000,
                onScreen: true
            }
        });
    };

    return (
        <tr>
            <td data-label="ID">{props.link.id}</td>
            <td data-label="Link For">{props.link.linkFor}</td>
            <td data-label="Original Link">
                <a href={props.link.originalLink} target="_blank" rel="noopener noreferrer">
                    {props.link.originalLink.replace("https://", "")}
                </a>
            </td>
            <td data-label="Shortened Link">
                <a href={`https://usict.acm.org/link/${props.link.code}`} target="_blank" rel="noopener noreferrer">
                    {`usict.acm.org/link/${props.link.code}`}
                </a>
            </td>
            <td data-label="actions">
                <ContentCopyIcon className="new-icons" onClick={() => handleCopyClick(props.link.code)} />
                <EditIcon className="new-icons" />
                <DeleteIcon className="new-icons" onClick={() => handleDeleteClick(props.link.id)} />
            </td>
        </tr>
    );
}

export default LinkRow;
