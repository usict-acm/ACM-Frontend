import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Event } from ".";

type Props = {
    event : Event; 
    handleDeleteClicker(id : number) : any;
};


const AnnouncementRow = function(props : Props) {
    let startDate = new Date(props.event.startDate);
    return (
        <tr key={props.event.id}>
            <td data-label="S.No">{props.event.id}</td>
            <td data-label="NAME">{props.event.name} </td>

            <td data-label="Start Date">{startDate.getDate()}/{startDate.getMonth()}/{startDate.getFullYear()} </td>

            <td data-label="Actions">
                <VisibilityIcon className="new-icons" />
                <DeleteIcon className="new-icons" onClick={() => props.handleDeleteClicker(props.event.id)} />
            </td>
        </tr>
    );
};
export default AnnouncementRow;
