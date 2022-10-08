import React from "react";
import BottomNav from "./BottomNav";
import Sidebar from "./Sidebar";
import TableDesktopMain from "./TableDesktopMain";


export default function Home(){
    let isMobileView = window.innerWidth;
    return (
        <>
        {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}
        <TableDesktopMain></TableDesktopMain>
        </>
    )
}