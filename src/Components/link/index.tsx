import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { ErrorBoundary } from "react-error-boundary";
import { fetchData } from "../../api/fetchData";
import LinkTableInner from "./linkTable";

export type Link = {
  id: number;
  linkFor: string;
  originalLink: string;
  code: string;
  count: number | null;
}


let intialResource = fetchData<Link[]>("/link", "GET");
// wrapper around link table
export function LinkTable() {
    return (
        <ErrorBoundary fallback={<p> error in fetching data!</p>}>
            <Suspense fallback={
                <Spinner animation="border" role="status" className="position-absolute top-50 start-50">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }>
                <LinkTableInner data = { intialResource }/>
            </Suspense>
        </ErrorBoundary>
    );
}
