import React from "react";
import CreateForms from "./Gforms";
export default function FormSection(props) {
    let isMobileView = window.innerWidth;
    return (
      <>
        <CreateForms />
      </>
    );
  }
