import { Suspense, useState } from "react";
import { Spinner } from "react-bootstrap";
import { fetchData } from "../../api/fetchData";
import { ErrorBoundary } from "../errorBoundary";
import JoinUsTableInner from "./table";

export type JoinUs = {
  id: number
  firstname: string
  lastname: string
  email: string
  phone_number: string
  year: number
  acm_no: string
  course: string
  club: string
  enrollment_no: string
}




export function JoinUsTable() {
    const [resource, setResource] = useState(
        fetchData<JoinUs[]>("/joinus", "GET")
    );
    return (
        <ErrorBoundary
            onReset={() => setResource(fetchData<JoinUs[]>("/joinus", "GET"))}
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
                <JoinUsTableInner data = {resource}/>
            </Suspense>
        </ErrorBoundary>
    );
}

