import React, { useState } from "react";
import "./Assests/CSS/Members.css";

import { Link, useNavigate } from "react-router-dom";
import dataMember from "./dataMember";
import UserPage from "./UserPage";
const Members = function () {
  const [people, setPeople] = useState(dataMember);
  const [transfer, setTransfer] = useState(false);

  return (
    <table className="table-container">
      <thead className="heading-table">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Membership Number</th>
          <th>Batch</th>
        </tr>
      </thead>
      <tbody className="body-table">
        {people.map((item) => (
          <tr className="table-row" key={item.id}>
            <>
              <td data-label="S.No">
                {
                  people.map(data => {
                    if (item.id == data.id) {
                      const res = data.name.replace(/ /g, '').concat(data.id)
                      return ( 
                        <Link to={`/User/${res}`}>
                          <img className="image-person" src={item.image} />{" "}
                        </Link>

                      )

                    }

                  })
                }

              </td>
              <td data-label="Name">{item.name}</td>
              <td data-label="Membership Number">{item.id}</td>
              <td data-label="Batch">{item.batch}</td>
            </>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Members;
