import React from "react";
import BottomNav from "./BottomNav";
import Sidebar from "./Sidebar";
import CreateForms from "./Gforms";
export default function FormSection(props) {
    let isMobileView = window.innerWidth;
    return (
      <>
        {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}
  
        <CreateForms />
      </>
    );
  }