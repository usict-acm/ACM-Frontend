import { Suspense, useState } from "react";
import BlogsTableInner from "./blogTable";
import { Spinner } from "react-bootstrap";
import { ErrorBoundary } from "../errorBoundary";
import { fetchData } from "../../api/fetchData";

export type Blog = {
    id: number;
    blogTitle: string;
    coverImage: Buffer;
    userEmail: string;
    userName: string;
    content: Buffer;
    created: Date;
    published: Date;
    lastUpdated: Date;
    isDraft: boolean;
    tags: string | null;
    approved: boolean;
};

export function BlogTable() {
    const [resource, setResource] = useState(fetchData<Blog[]>("/blog", "GET"));
    return (
        <ErrorBoundary
            onReset={() => setResource(fetchData<Blog[]>("/blog", "GET"))}
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
                <BlogsTableInner data={resource} />
            </Suspense>
        </ErrorBoundary>
    );
}
