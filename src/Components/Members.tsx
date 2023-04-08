import { useState, Suspense } from "react";
import "./Assests/CSS/Members.css";
import { Link } from "react-router-dom";
import { fetchData } from "../api/fetchData";
import { ErrorBoundary } from "./errorBoundary";
import { Spinner } from "react-bootstrap";

export type Team = {
  id: number
  image: string
  name: string
  designation: string
  linkedin: string | null
  github: string | null
  instagram: string | null
  year: number
  category: string
  added_on: Date
  techStack: string | null
  dob: Date | null
  active: boolean
}

function MemberTable(props: { data: { read(): Team[] } }) {
    const data = props.data.read();
    console.log(data);
    return (
        <table className="table-container">
            <thead className="heading-table">
                <tr>
                    <th>SNo</th>
                    <th>Name</th>
                    <th>Membership Number</th>
                    <th>Batch</th>
                </tr>
            </thead>
            <tbody className="body-table">
                {data.map((item) => {
                    return <MemberRow item={item} key={item.id} />;
                })}
            </tbody>
        </table>
    );
}

function MemberRow(props: { item: Team }) {
    return (
        <tr className="table-row" key={props.item.id}>
            <>
                <td data-label="S.No">
                    <Link to={`/User/${props.item.id}`}>
                        <img className="image-person" src="https://t3.ftcdn.net/jpg/02/90/89/76/360_F_290897614_7RdAsk2GmumcGWZ2qklmV74hKlNmznSx.jpg" alt="profile-photo" />
                    </Link>
                </td>
                <td data-label="Name">{props.item.name}</td>
                <td data-label="Membership Number">{props.item.id}</td>
                <td data-label="Batch">{props.item.year}</td>
            </>
        </tr>
    );
}

export default function Members() {
    const [resource, setResource] = useState(fetchData<Team[]>("/team", "GET"));
    return (
        <ErrorBoundary
            onReset={() => setResource(fetchData<Team[]>("/team", "GET"))}
        >
            <Suspense
                fallback={
                    <Spinner
                        animation="border"
                        role="status"
                        className="position-absolute top-50 start-50"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                }
            >
                <MemberTable data={resource} />
            </Suspense>
        </ErrorBoundary>
    );
}
