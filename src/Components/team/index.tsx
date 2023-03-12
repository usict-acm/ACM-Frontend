import { Suspense, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ErrorBoundary } from "../errorBoundary";
import { fetchData } from "../../api/fetchData";
import { useNavigate } from "react-router";
import TeamTableInner from "./teamTable";
import TeamFormInner from "./teamForm";

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
    active: boolean
}

// wrapper around link table
export function TeamTable() {
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
                <TeamTableInner data={resource} />
            </Suspense>
        </ErrorBoundary>
    );
}

export function TeamForm() {
    const navigate = useNavigate();
    return (
        <ErrorBoundary
            onReset={() => {
                navigate("/form/Link");
            }}
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
                <TeamFormInner />
            </Suspense>
        </ErrorBoundary>
    );
}
