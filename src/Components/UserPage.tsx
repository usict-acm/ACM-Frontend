import { Suspense } from "react";
import "./Assests/CSS/UserPage.css";
import { Team } from "./Members";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PendingIcon from '@mui/icons-material/Pending';
import { useParams } from "react-router";
import { GitHub } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/EditOutlined";
import { ErrorBoundary } from "./errorBoundary";
import { Spinner } from "react-bootstrap";
import { fetchData } from "../api/fetchData";
import { formatDateForInput } from "../utils";

export default function UserPage() {
    const params = useParams();
    const id = params.id;
    const [resource, setResource] = useState(
        fetchData<Team>(`/team/${id}`, "GET")
    );
    return (
        <ErrorBoundary
            onReset={() => setResource(fetchData<Team>(`/team/${id}`, "GET"))}
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
            >
                <UserPageInner data={resource} />
            </Suspense>
        </ErrorBoundary>
    );
}

const UserPageInner = function(props: { data: { read(): Team } }) {
    const [data, setData] = useState(props.data.read());
    const [edit, seteditData] = useState(false);
    const [saveReq, setSaveReq] = useState<{ read(): any }>({ read() { } })
    saveReq.read();
    const handleSave = () => {
        setSaveReq(fetchData(`/team/${data.id}`, "PATCH", data));
        seteditData(false);
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
                            <img className="img-body" src= {`../${data.image}`}   alt="gg" />
                        </div>
                    </div>

                    <div className="mem-details">
                        <div>
                            {edit ? (
                                <div className="sub-member-details">
                                    <p className="headings">Name</p>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            ) : (
                                <div className="sub-member-details">
                                    {" "}
                                    <p className="headings" >Name</p>
                                    <p>{data.name}</p>
                                </div>
                            )}
                        </div>
                        <div>
                            {edit ? (
                                <div className="sub-member-details">
                                    <p className="headings">DOB</p>
                                    <input
                                        type="date"
                                        value={formatDateForInput(
                                            data.dob ? data.dob : new Date()
                                        )}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                dob: new Date(e.target!.value),
                                            })
                                        }
                                    />
                                </div>
                            ) : (
                                <div className="sub-member-details">
                                    {" "}
                                    <p className="headings">DOB</p>
                                    <p>
                                        {data.dob
                                            ? data.dob!.toDateString()
                                            : "null"}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div>
                            <div>
                            {edit?(
                               <div className="sub-member-details">
                               <p className="headings ">Membership No</p>
                               <input
                               className="mem-input"
                                   type="text"
                                   value={data.membershipNo}
                                   onChange={(e) =>
                                       setData({
                                           ...data,
                                           membershipNo: e.target.value,
                                       })
                                   }
                               />
                           </div> 
                            ):(<div className="sub-member-details">
                                {" "}
                                <p className="headings">Membership No.</p>
                                <p>{data.membershipNo}</p>
                            </div>)}
                            
                        </div>
                            </div>
                      

                        <div>
                            <div className="sub-member-details">
                                {" "}
                                <p className="headings">Member from</p>
                                <p>{data.added_on.toString()}</p>
                            </div>
                        </div>
                        <div>
                            {edit ? (
                                <div className="sub-member-details">
                                    <p className="headings">Currently</p>
                                    <select
                                        value={data.active.toString()}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                active: Boolean(e.target.value),
                                            })
                                        }
                                    >
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                                </div>
                            ) : (
                                <div className="sub-member-details">
                                    {" "}
                                    <p className="headings">Currently</p>
                                    <p>{data.active.toString()}</p>
                                </div>
                            )}
                        </div>

                        <div>
                            {edit ? (
                                <div className="sub-member-details">
                                    <p className="headings">Tech Stacks</p>
                                    <input
                                        type="text"
                                        value={
                                            data.techStack
                                                ? data.techStack!
                                                : ""
                                        }
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                techStack: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            ) : (
                                <div className="sub-member-details">
                                    {" "}
                                    <p className="headings">Tech Stacks</p>
                                    <p>{data.techStack}</p>
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="sub-member-details">
                                {" "}
                                <p className="headings">Batch:</p>
                                <p>{data.year}</p>
                            </div>
                            {edit ? (
                                <button
                                    id="edit"
                                    type="button"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="social-handles">
                        {data.linkedin && (
                            <a href={data.linkedin}>
                                <LinkedInIcon />
                            </a>
                        )}
                        {data.instagram && (
                            <a href={data.instagram}>
                                <InstagramIcon />
                            </a>
                        )}
                        {data.github && (
                            <a href={data.github}>
                                <GitHub />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="projects ">
                <div className="acm-projects ">
                    <h2>Projects</h2>
                   
                    <div className="flex-container">
                   
                        <div className="pr1-container">
                            <div className="title">
                               <h4>Project-1 <BeenhereIcon/></h4>
                               
                            </div>
                            <p className="desc">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Magnam odio labore temporibus
                                fugiat perferendis saepe ipsa repellendus rem
                                unde ipsum repudiandae exercitationem error,
                                dolores facere!
                            </p>
                            {/* <img className="ong-img" style={{height:"50%",width:"45%",backgroundSize:"cover",marginLeft:"10vw"}} src="https://5.imimg.com/data5/ZZ/BH/OL/SELLER-4335989/e-commerce-website-design-1000x1000.jpg" alt="" /> */}
                        </div>
                        <div className="pr2-container">
                            <div className="title">
                                <h4>Project-2 <PendingIcon/></h4>
                                
                            </div>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vel voluptate voluptatum quae
                                impedit sapiente, dolorum quam ea iure, id, cum
                                eos rem incidunt dicta! Autem.
                            </p>
                           
                        </div>
                        {/* <div className="pr3-container">
                            <div className="title">
                                <h4>Project-3 <BeenhereIcon/></h4>
                                
                            </div>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vel voluptate voluptatum quae
                                impedit sapiente, dolorum quam ea iure, id, cum
                                eos rem incidunt dicta! Autem.
                            </p>
                         </div> */}
                         
                    </div>
                </div>
                <div className=" flex-container">
                <button className="add project-btn">
                                    Add Project
                                </button> 
                               <button className="delete project-btn">
                                   Delete Project
                                </button>
                </div>
            </div>
        </div>
    );
};
