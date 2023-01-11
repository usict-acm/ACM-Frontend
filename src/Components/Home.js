import React, { Suspense } from "react";
import AnnouncementTable from "./AnnouncementTable";
import AnnouncementMobileTable from "./AnnouncementMobileTable";
import { Spinner } from "react-bootstrap";

// export default function Home() {
//   let isMobileView = window.innerWidth;
//   return (
//     <>
//       {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}

//       {isMobileView > 768 ? <TableDesktopMain /> : <TableMobile />}
//     </>
//   );
// }
export default function Home(props) {
    let isMobileView = window.innerWidth;
    return (
        <>
        <Suspense fallback={
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            }>
            {isMobileView > 768 ?
                <AnnouncementTable /> :
                <AnnouncementMobileTable />}
        </Suspense>
        </>
    );
}
