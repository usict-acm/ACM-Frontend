import React from "react";
import BottomNav from "../BottomNav";
import Sidebar from "../Sidebar";
import "../Assests/CSS/forms.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
const CertificateBulk = () => {
  return (
    <div
      className={
        window.innerWidth > 750 ? "d-flex flex-row" : "d-flex flex-column"
      }
    >
      <div>{window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}</div>
      <div
        className={
          window.innerWidth > 750
            ? "container formContainer p-5 d-flex justify-content-center"
            : "container formContainer py-4 w-100 px-0 d-flex justify-content-center"
        }
      >
        <form
          className={window.innerWidth > 750 ? "w-100 notTable-form " : "w-100"}
        >
          <h3>
            <em>
              {" "}
              <CardMembershipIcon /> Create In Bulk
            </em>
          </h3>
          <hr></hr>
          <div class="mb-3">
            <input type="file" name="" id="" class="form-control" required />
          </div>
          <button type="button" class="btn btn-success">
            Download Excel file
          </button>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CertificateBulk;
