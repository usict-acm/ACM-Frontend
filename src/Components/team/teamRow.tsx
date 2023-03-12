import DeleteIcon from "@mui/icons-material/Delete";
import { Team } from ".";

type Props = {
    team: Team,
    onDelete: (id: number) => any;
}

export default function TeamRow(props: Props) {
    return (
        <tr>
            <td data-label="id">{props.team.id}</td>
            <td data-label="name">{props.team.name} </td>
            <td data-label="designation">{props.team.designation}</td>
            <td data-label="linkedin">{props.team.linkedin}</td>
            <td data-label="github">{props.team.github}</td>
            <td data-label="instragram">{props.team.instagram}</td>
            <td data-label="year">{props.team.year}</td>
            <td data-label="actions">
                <DeleteIcon className="new-icons" onClick={() => props.onDelete(props.team.id)} />{" "}
            </td>
        </tr>
    );
}
