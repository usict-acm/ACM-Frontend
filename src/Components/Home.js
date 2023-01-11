import React, { Suspense } from "react";
import AnnouncementTable from "./AnnouncementTable";
import AnnouncementMobileTable from "./AnnouncementMobileTable";
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
export default function Home(props) {
    let isMobileView = window.innerWidth;
    return (
        <ErrorBoundary fallback={<p> error in fetching data!</p>}>
            <Suspense fallback={
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }>
                {isMobileView > 768 ?
                    <AnnouncementTable data={data} /> :
                    <AnnouncementMobileTable data={data} />}
            </Suspense>
        </ErrorBoundary>
    );
}
