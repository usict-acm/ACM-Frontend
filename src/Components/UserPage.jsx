import React from "react";
import { useLocation } from "react-router";
import "./Assests/CSS/UserPage.css";
import Members from "./Members";
import { useState, useEffect } from "react";
import dataMember from "./dataMember";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useParams } from "react-router";
import { GitHub } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/EditOutlined";
import axios from "axios";
import { doFetch } from "../api/fetchData";

async function updateData(id, changedData) {
  return await doFetch(`/team/${id}`, "PATCH", changedData);
}

const UserPage = function (props) {
  const params = useParams();
  const [person, setPerson] = useState(dataMember);
  const [dataa, setData] = useState([]);
  const [edit, seteditData] = useState(false);
  const [data, newData] = useState({
    name: "",
    status: "",
    TechStacks: "",
  });
  const url = "http://localhost:8000/name";
  const fetchInfo = () => {
    return axios.get(url).then((res) => {
      setData(res.data);
      const dataObj = res.data.find((data) => {
        const res = data.name.replace(/ /g, "").concat(data.id);
        return res === params.name;
      });
      newData(dataObj);
      setPerson(dataObj);
    });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const handleSave = () => {
    setPerson(data);
    setEdit(false);
    updateData(person.id, data);
  };

  return (
    <div className="parent">
      <div className="profile">
        <div className="content">
          <button
            type="button"
            onClick={() => seteditData(true)}
            id="edit"
            name="edit"
          >
            Edit
            <EditIcon />
          </button>
          <div className="image">
            <div>
              {dataa.map((data) => {
                const res = data.name.replace(/ /g, "").concat(data.id);
                console.log(params);
                if (res == params.name) {
                  return <img src={data.image} alt="gg" />;
                }
              })}
            </div>
          </div>

          <div className="mem-details">
            <div>
              {edit ? (
                <div className="sub-member-details">
                  <p>Name</p>
                  <input
                    type="text"
                    value={person.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>
              ) : (
                dataa.map((data) => {
                  const res = data.name.replace(/ /g, "").concat(data.id);
                  console.log(params);
                  if (res == params.name) {
                    return (
                      <div className="sub-member-details">
                        {" "}
                        <p>Name</p>
                        <p>{data.name}</p>
                      </div>
                    );
                  }
                })
              )}
            </div>
            <div>
              {dataa.map((data) => {
                const res = data.name.replace(/ /g, "").concat(data.id);
                console.log(params);
                if (res == params.name) {
                  return (
                    <div className="sub-member-details">
                      {" "}
                      <p>DOB</p>
                      <p>{data.DOB}</p>
                    </div>
                  );
                }
              })}
            </div>

            <div>
              {dataa.map((data) => {
                const res = data.name.replace(/ /g, "").concat(data.id);
                console.log(params);
                if (res == params.name) {
                  return (
                    <div className="sub-member-details">
                      {" "}
                      <p>Membership No.</p>
                      <p>{data.id}</p>
                    </div>
                  );
                }
              })}
            </div>

            <div>
              {dataa.map((data) => {
                const res = data.name.replace(/ /g, "").concat(data.id);
                console.log(params);

                if (res == params.name) {
                  return (
                    <div className="sub-member-details">
                      {" "}
                      <p>Member from:</p>
                      <p>{data.added_on}</p>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              {edit ? (
                <div className="sub-member-details">
                  <p>Currently:</p>
                  <input
                    type="text"
                    value={person.state}
                    onChange={(e) =>
                      setData({
                        ...data,
                        state: e.target.value,
                      })
                    }
                  />
                </div>
              ) : (
                dataa.map((data) => {
                  const res = data.name.replace(/ /g, "").concat(data.id);
                  console.log(params);
                  if (res == params.name) {
                    return (
                      <div className="sub-member-details">
                        {" "}
                        <p>Currently:</p>
                        <p>{data.state}</p>
                      </div>
                    );
                  }
                })
              )}
            </div>

            <div>
              {edit ? (
                <div className="sub-member-details">
                  <p>Tech Stacks</p>
                  <input
                    type="text"
                    value={person.TechStacks}
                    onChange={(e) =>
                      setData({ ...data, TechStacks: e.target.value })
                    }
                  />
                </div>
              ) : (
                dataa.map((data) => {
                  const res = data.name.replace(/ /g, "").concat(data.id);
                  console.log(params);
                  if (res == params.name) {
                    return (
                      <div className="sub-member-details">
                        {" "}
                        <p>Tech Stacks:</p>
                        <p>{data.TechStacks}</p>
                      </div>
                    );
                  }
                })
              )}
            </div>

            <div>
              {dataa.map((data) => {
                const res = data.name.replace(/ /g, "").concat(data.id);
                console.log(params);
                if (res == params.name) {
                  return (
                    <div className="sub-member-details">
                      {" "}
                      <p>Batch:</p>
                      <p>{data.year}</p>
                    </div>
                  );
                }
              })}
              <button type="button" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
          <div className="social-handles">
            <LinkedInIcon />
            <InstagramIcon />
            <GitHub />
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="acm-projects">
          <h2>Projects</h2>
          <div className="flex-container">
            <div className="ongoing-container">
              <div className="title">
                <h4>Ongoing</h4>
                <button className="project-btn">Add Project</button>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                odio labore temporibus fugiat perferendis saepe ipsa repellendus
                rem unde ipsum repudiandae exercitationem error, dolores facere!
              </p>
            </div>
            <div className="completed-container">
              <div className="title">
                <h4>Completed</h4>
                <button className=" project-btn delete">Delete Project</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                voluptate voluptatum quae impedit sapiente, dolorum quam ea
                iure, id, cum eos rem incidunt dicta! Autem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
