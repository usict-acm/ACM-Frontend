import DeleteIcon from "@mui/icons-material/Delete";
import { Certificate } from ".";

type props = {
    certificate: Certificate;
    handleDeleteClick(id: number): void;
};
function CertificateRow(props: props) {
    return (
        <tr>
            <td data-label="Unique Number">{props.certificate.uniqueNo}</td>
            <td data-label="name">{props.certificate.nameParticipant} </td>
            <td data-label="email">{props.certificate.email} </td>
            <td data-label="startDate">
                {props.certificate.startDate.getDate()}
                /{props.certificate.startDate.getMonth()}
                /{props.certificate.startDate.getFullYear()}
            </td>
            <td data-label="endDate">
                {props.certificate.endDate.getDate()}
                /{props.certificate.endDate.getMonth()}
                /{props.certificate.endDate.getFullYear()} 
            </td>
            <td data-label="actions">
                <DeleteIcon
                    onClick={() => props.handleDeleteClick(props.certificate.id)}
                    className="new-icons"
                />{" "}
            </td>
        </tr>
    );
}

export default CertificateRow;
