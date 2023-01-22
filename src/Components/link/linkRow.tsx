import { Link } from ".";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

type Props = {
    link: Link;
    onDelete: (id: number) => any;
};
function LinkRow(props: Props) {
    const [showCopied, setShowCopied] = useState(false);
    const handleCopyClick = (code:string) =>{
        navigator.clipboard.writeText(`https://usict.acm.org/link/${code}`)
        setShowCopied(true);
        setTimeout(() => {
            setShowCopied(false)
        }, 500);
    }

    return (
        <tr>
            <td data-label="id">{props.link.id}</td>
            <td data-label="Link For">{props.link.linkFor}</td>
            <td data-label="Original Link">
                <a href={props.link.originalLink} target="_blank" rel="noopener noreferrer">{props.link.originalLink}</a>
            </td>
            <td data-label="Shortened Link">
                <a href={`https://usict.acm.org/link/${props.link.code}`} target="_blank" rel="noopener noreferrer">{`https://usict.acm.org/link/${props.link.code}`}</a>
            </td>
            <td data-label="actions">
                <ContentCopyIcon className="new-icons" onClick={() => handleCopyClick(props.link.code)}/>
                <EditIcon className="new-icons" />
                <DeleteIcon
                    className="new-icons"
                    onClick={() => props.onDelete(props.link.id)}
                />
                {showCopied && <div>Copied</div>}
            </td>
        </tr>
    );
}
export default LinkRow;
