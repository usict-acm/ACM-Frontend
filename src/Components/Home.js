import React, { Suspense } from "react";
import AnnouncementTable from "./AnnouncementTable";
import { Spinner } from "react-bootstrap";
import { ErrorBoundary } from "react-error-boundary";
import { fetchData } from "../api/fetchData";

// export default function Home() {
//   let isMobileView = window.innerWidth;
//   return (
//     <>
//       {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}

//       {isMobileView > 768 ? <TableDesktopMain /> : <TableMobile />}
//     </>
//   );
// }
const data = fetchData("/displayAnnouncement");
export default function Home() {
    return (
        <ErrorBoundary fallback={<p> error in fetching data!</p>}>
            <Suspense fallback={
                <Spinner animation="border" role="status" className = "position-absolute top-50 start-50">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }>
                <AnnouncementTable data={data} />
            </Suspense>
        </ErrorBoundary>
    );
}
