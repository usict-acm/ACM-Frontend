import React, { useState, useEffect} from "react";
import "./Assests/CSS/Members.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import dataMember from "./dataMember";
import UserPage from "./UserPage";

const Members = function () {
  const [people, setPeople] = useState(dataMember);
  const [transfer, setTransfer] = useState(false);
  const [dataa, setData] = useState([]);
  const url = "http://localhost:8000/name";
  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
    console.log(d)
  };

  useEffect(() => {
    fetchInfo();
  }, []);

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
        {dataa.map((item) => (
          <tr className="table-row" key={item.id}>
            <>
              <td data-label="S.No">
                {
                  dataa.map(data => {
                    if (item.id == data.id) {
                      const res = data.name.replace(/ /g, '').concat(data.id)
                      return ( 
                        <Link to={`/User/${res}`}>
                          <img className="image-person" src="https://staticg.sportskeeda.com/editor/2022/11/a402f-16694231050443-1920.jpg" />{" "}
                        </Link>

                      )

                    }

                  })
                }

              </td>
              <td data-label="Name">{item.name}</td>
              <td data-label="Membership Number">{item.id}</td>
              <td data-label="Batch">{item.year}</td>
              
            </>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Members;
