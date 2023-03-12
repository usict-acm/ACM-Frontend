import { Suspense, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ErrorBoundary } from "../errorBoundary";
import { fetchData } from "../../api/fetchData";
import { useNavigate } from "react-router";
import Table from "./certificateTable";
import Form from "./certificateForm";

export type Certificate = {
    id: number
    uniqueNo: string
    nameParticipant: string
    email: string
    startDate: Date
    endDate: Date
    course: string
    enrollment_no: string
    event: string
    rank: string | null
    college: string
}



export function CertificateTable() {
    const [resource, setResource] = useState(fetchData<Certificate[]>("/certificate", "GET"));
    return (
        <ErrorBoundary
            onReset={() => setResource(fetchData<Certificate[]>("/certificate", "GET"))}
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
                <Table data={resource} />
            </Suspense>
        </ErrorBoundary>
    );
}

export function CertificateForm() {
    const navigate = useNavigate();
    return (
        <ErrorBoundary
            onReset={() => {
                navigate("/form/Blog");
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
                <Form />
            </Suspense>
        </ErrorBoundary>
    );
}
