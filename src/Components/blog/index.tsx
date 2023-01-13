import React, { Suspense } from "react";
import BlogsTable from "./blogTable";
import { Spinner } from "react-bootstrap";
import { ErrorBoundary } from "react-error-boundary";
import { fetchData } from "../../api/fetchData";

let intialResource = fetchData("/blog", "GET");
export default function Blog() {
    return (
        <ErrorBoundary fallback={<p> error in fetching data!</p>}>
            <Suspense fallback={
                <Spinner animation="border" role="status" className="position-absolute top-50 start-50">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }>
                <BlogsTable data={intialResource} />
            </Suspense>
        </ErrorBoundary>
    );
}