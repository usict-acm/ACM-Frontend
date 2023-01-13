import React, { Suspense } from "react";
import Table from "./announcementTable";
import { Spinner } from "react-bootstrap";
import { ErrorBoundary } from "react-error-boundary";
import { fetchData } from "../../api/fetchData";
let intialResource = fetchData("/announcement", "GET");
export function AnnouncementTable() {
    return (
        <ErrorBoundary fallback={<p> error in fetching data!</p>}>
            <Suspense fallback={
                <Spinner animation="border" role="status" className="position-absolute top-50 start-50">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }>
                <Table data={intialResource} />
            </Suspense>
        </ErrorBoundary>
    );
}

