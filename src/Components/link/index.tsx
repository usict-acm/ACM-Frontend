import { Suspense, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ErrorBoundary } from "../errorBoundary";
import { fetchData } from "../../api/fetchData";
import LinkTableInner from "./linkTable";
import LinkFormInner from "./linkForm";
import { useNavigate } from "react-router";

export type Link = {
    id: number;
    linkFor: string;
    originalLink: string;
    code: string;
    count: number | null;
};

// wrapper around link table
export function LinkTable() {
    const [resource, setResource] = useState(fetchData<Link[]>("/link", "GET"));
    return (
        <ErrorBoundary
            onReset={() => setResource(fetchData<Link[]>("/link", "GET"))}
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
                <LinkTableInner data={resource} />
            </Suspense>
        </ErrorBoundary>
    );
}

export function LinkForm() {
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
                <LinkFormInner />
            </Suspense>
        </ErrorBoundary>
    );
}
