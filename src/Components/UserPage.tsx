import React, { Suspense } from "react";
import { useLocation } from "react-router";
import "./Assests/CSS/UserPage.css";
import { Team } from "./Members";
import { useState, useEffect } from "react";
import dataMember from "./dataMember";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useParams } from "react-router";
import { GitHub } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/EditOutlined";
import { ErrorBoundary } from "./errorBoundary";
import { Spinner } from "react-bootstrap";
import { fetchData } from "../api/fetchData";

function UserPageWrapper() {
    const params = useParams();
    const id = params.id;
    const [resource, setResource] = useState(
        fetchData<Team>(`/event/${id}`, "GET")
    );
    return (
        <ErrorBoundary
            onReset={() => setResource(fetchData<Team>(`/event/${id}`, "GET"))}
        >
            <Suspense
                fallback={
                    <Spinner
                        animation="border"
                        role="status"
                        className="position-absolute top-50 start-50"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                }
            ></Suspense>
            <UserPage data = {resource}/>
        </ErrorBoundary>
    );
}

const UserPage = function (props: { data: { read(): Team } }) {
    const [person, setPerson] = useState(dataMember);
    const [dataa, setData] = useState([]);
    const [edit, seteditData] = useState(false);
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
                                const res = data.name
                                    .replace(/ /g, "")
                                    .concat(data.id);
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
                                        onChange={(e) =>
                                            setPerson({
                                                ...person,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            ) : (
                                dataa.map((data) => {
                                    const res = data.name
                                        .replace(/ /g, "")
                                        .concat(data.id);
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
                                const res = data.name
                                    .replace(/ /g, "")
                                    .concat(data.id);
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
                                const res = data.name
                                    .replace(/ /g, "")
                                    .concat(data.id);
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
                                const res = data.name
                                    .replace(/ /g, "")
                                    .concat(data.id);
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
                                            setPerson({
                                                ...person,
                                                state: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            ) : (
                                dataa.map((data) => {
                                    const res = data.name
                                        .replace(/ /g, "")
                                        .concat(data.id);
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
                                            setPerson({
                                                ...person,
                                                TechStacks: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            ) : (
                                dataa.map((data) => {
                                    const res = data.name
                                        .replace(/ /g, "")
                                        .concat(data.id);
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
                                const res = data.name
                                    .replace(/ /g, "")
                                    .concat(data.id);
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
                                <button className="project-btn">
                                    Add Project
                                </button>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Magnam odio labore temporibus
                                fugiat perferendis saepe ipsa repellendus rem
                                unde ipsum repudiandae exercitationem error,
                                dolores facere!
                            </p>
                        </div>
                        <div className="completed-container">
                            <div className="title">
                                <h4>Completed</h4>
                                <button className=" project-btn delete">
                                    Delete Project
                                </button>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vel voluptate voluptatum quae
                                impedit sapiente, dolorum quam ea iure, id, cum
                                eos rem incidunt dicta! Autem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
