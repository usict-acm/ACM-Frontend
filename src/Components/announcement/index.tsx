import { Suspense, useState } from "react";
import Table from "./announcementTable";
import { Spinner } from "react-bootstrap";
import { ErrorBoundary } from "../errorBoundary";
import { fetchData } from "../../api/fetchData";

export type Event = {
    id: number
    name: string
    description: string
    startDate: Date
    endDate: Date
    button1Text: string
    button1Link: string
    button2Text: string
    button2Link: string
    partners: string
    speakers: string
    poster: string
    year: number
    time: string
}

export function AnnouncementTable() {
    const [resource, setResource] = useState(fetchData<Event[]>("/event", "GET"));
    return (
        <ErrorBoundary onReset={() => setResource(fetchData<Event[]>("/event", "GET"))}>
            <Suspense fallback={
                <Spinner animation="border" role="status" className="position-absolute top-50 start-50">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }>
                <Table data={resource} />
            </Suspense>
        </ErrorBoundary>
    );
}

