import { Suspense, useState } from "react";
import { Spinner } from "react-bootstrap";
import { fetchData } from "../../api/fetchData";
import { ErrorBoundary } from "../errorBoundary";
import ContactUsTableInner from "./table";

export type ContactUs = {
  id: number
  name: string | null
  email: string | null
  mobile: string | null
  college: string | null
  message: string | null
}


export function ContactUsTable() {
    const [resource, setResource] = useState(
        fetchData<ContactUs[]>("/contactus", "GET")
    );
    return (
        <ErrorBoundary
            onReset={() => setResource(fetchData<ContactUs[]>("/contactus", "GET"))}
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
                <ContactUsTableInner data = {resource}/>
            </Suspense>
        </ErrorBoundary>
    );
}

