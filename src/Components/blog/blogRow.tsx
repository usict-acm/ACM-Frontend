import DeleteIcon from "@mui/icons-material/Delete";
import { Blog } from ".";
import VisibilityIcon from "@mui/icons-material/Visibility";

type props = {
    blog: Blog;
    handleDeleteClick(id: number): void;
    handleStatusChangeClick(id: number, isApprove: boolean): void;
};

function onEyeButtonClick(id: number) {
    const url = `https://usict.acm.org/test_acm/singleBlog.php?Id=${id}`;
    window.open(url, '_blank')!.focus();
}
function BlogRow(props: props) {
    return (
        <tr>
            <td data-label="id">{props.blog.id}</td>
            <td data-label="name">{props.blog.blogTitle} </td>
            <td data-label="author">{props.blog.userName} </td>
            {props.blog.isDraft ? (
                <td data-label="status">
                    <button
                        className="two-buttons"
                        onClick={() =>
                            props.handleStatusChangeClick(props.blog.id, true)
                        }
                    >
                        Approve
                    </button>
                    <button
                        className="two-buttons"
                        onClick={() =>
                            props.handleStatusChangeClick(props.blog.id, false)
                        }
                    >
                        Reject
                    </button>
                </td>
            ) : (
                <td data-label="status">
                    {props.blog.approved ? "Approved" : "Rejected"}{" "}
                </td>
            )}

            <td data-label="">
                <VisibilityIcon className="new-icons" onClick={() => onEyeButtonClick(props.blog.id)} />
                <DeleteIcon
                    onClick={() => props.handleDeleteClick(props.blog.id)}
                    className="new-icons"
                />{" "}
            </td>
        </tr>
    );
}

export default BlogRow;
