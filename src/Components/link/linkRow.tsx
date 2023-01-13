import { Link } from ".";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type Props = {
    link: Link;
};
function LinkRow(props: Props) {
    return (<tr>
        <td data-label="id">{props.link.id}</td>
        <td data-label="Link FOr">{props.link.linkFor}</td>
        <td data-label="Original Link">{props.link.originalLink} </td>
        <td data-label="Shortened Link">{props.link.code} </td>
        <td data-label="clicks">{props.link.count}</td>
        <td data-label="actions">
            <ContentCopyIcon className="new-icons" />
            <EditIcon
                className="new-icons"
            />
            <DeleteIcon className="new-icons" /> </td>
    </tr>);
}
export default LinkRow;
