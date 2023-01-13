import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

type props = {
    blog: {
        blogId: number;
        blogTitle: number;
        userName: string;
    }
    handleDeleteClicker: Function;
};
function BlogRow(props: props) {
    const [postReq, setPostReq] = useState({ read() { return null } });
    postReq.read();
    return (
        <tr>
            <td data-label="S.No">{props.blog.blogId}</td>
            <td data-label="NAME">{props.blog.blogTitle} </td>
            <td data-label="NAME">{props.blog.userName} </td>
            <td>
                <button className="two-buttons">Approve</button>{" "}
                <button className="two-buttons">Reject</button>{" "}
            </td>

            <td data-label="">
                <VisibilityIcon className="new-icons" />{" "}
                <DeleteIcon onClick={() => props.handleDeleteClicker()} className="new-icons" />{" "}
            </td>
        </tr>
    );
};



export default BlogRow;
