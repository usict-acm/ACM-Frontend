import React from "react";
import BottomNav from "./BottomNav";
import Sidebar from "./Sidebar";
import TableDesktopMain from "./TableDesktopMain";
import TableMobile from "./TableMobile";


export default function Home(){
    let isMobileView = window.innerWidth;
    return (
        <>
        {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}
        {isMobileView > 768 ? <TableDesktopMain /> : <TableMobile />}
        </>
    )
}