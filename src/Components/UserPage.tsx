import { Suspense, useEffect } from "react";
import React from "react";
import "./Assests/CSS/UserPage.css";
import { Team } from "./Members";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PendingIcon from '@mui/icons-material/Pending';
import { useParams } from "react-router";
import { GitHub } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/EditOutlined";
import { ErrorBoundary } from "./errorBoundary";
import { Spinner } from "react-bootstrap";
import { fetchData } from "../api/fetchData";
import { formatDateForInput } from "../utils";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";


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
    const [open, setOpen] = useState(false);
    const [prName, setprName] = useState("");
    const [prDesc, setprDesc] = useState("");
    const [image, setImage] = useState<File |undefined>(undefined);
    interface Project {
        id: number;
        name: string;
        description: string;
    }

    const [projects, setProjects] = useState<Project[]>([]);
    // const[projects,setProjects]=useState([]);
    const [refreshFlag, setRefreshFlag] = useState(false);
    const [saveReq, setSaveReq] = useState<{ read(): any }>({ read() { } })
    saveReq.read();
    const handleSave = () => {
        setSaveReq(fetchData(`/team/${data.id}`, "PATCH", data));
        seteditData(false);
    };
    
    const handleOpen = () => {
        if (projects.length >= 3) {
            return alert("You can only add a max of 3 projects.");
        }
        else
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
      
    // const fetchExistingProjects = () => {
    //     // Fetch existing project data from the database
    //     const existingProjects = fetchData(`/team/${data.id}/projects`, "GET");
      
    //     // Update the projects state with the fetched project data
    //     setProjects( ()=> existingProjects);
    //   };
      
      // Call the fetchExistingProjects function when the component mounts
    //   useEffect(() => {
    //     fetchExistingProjects();
    //   }, []);

        const handleSaveProject = () => {
       
        // to store the new project
        let updatedData;
        let projIndex=projects.length+1;
        if(projIndex<=3){

            const colName=`project${projIndex}Name`;
            const colDesc=`project${projIndex}Desc`;

            // setData({
            //     ...data,
            //     [colName]:prName,
            //     [colDesc]:prDesc
            // });
            updatedData = {
                ...data,
                [colName]: prName,
                [colDesc]: prDesc
              };
        }
        
    
        // if (projects.length === 0) {
        //     setData({ ...data, project1Name: prName, project1Desc: prDesc });
        //     updatedData = { project1Name: prName, project1Desc: prDesc };
        // } else if (projects.length === 1) {
        //     setData({ ...data, project2Name: prName, project2Desc: prDesc });
        //     updatedData = { project2Name: prName, project2Desc: prDesc };
        // } else if (projects.length === 2) {
        //     setData({ ...data, project3Name: prName, project3Desc: prDesc });
        //     updatedData = { project3Name: prName, project3Desc: prDesc };
        // }
        // const newProject = { id: data.id, name: prName, description: prDesc };

        // // If there are already 3 projects, remove the last one
        // setProjects({...data,updatedData});
        // Save the updated projects list

        setSaveReq(fetchData(`/team/${data.id}`, "PATCH", updatedData));

        // Close the dialog
        setTimeout(() => {
            setOpen(false);
          }, 1000);
        console.log(updatedData);
        console.log(projects.length);
        console.log(data.id);
    }

    const handleDelete = (index:number) => {
        
        const result = window.confirm("Are you sure you want to delete the project?");
        if(result)
       { 
        // setProjects(projects);
        // projects.length--;
        // console.log(projects);
        // console.log(projects.length);
        // setSaveReq(fetchData(`/team/${data.id}`, "PATCH", { project1Name: null, project1Desc: null }));
        // setRefreshFlag(true);
        const colName = `project${index + 1}Name`;
    const colDesc = `project${index + 1}Desc`;

    // Create an updated data object with the project columns set to null
    const updatedData = {
      ...data,
      [colName]: null,
      [colDesc]: null
    };

    // Update the data state with the modified data object
    setData(updatedData);

    // Update the corresponding data in the database
    setSaveReq(fetchData(`/team/${data.id}`, "PATCH", updatedData));

    // Set refresh flag if necessary
    console.log(projects.length);
    setRefreshFlag(true);
       }
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
                            <img className="img-body" src={`../${data.image}`} alt="gg" />
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
                                {edit ? (
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
                                ) : (<div className="sub-member-details">
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
                    <div className="headings">
                        <h2>Projects</h2>
                        <button className="add project-btn" onClick={handleOpen}>
                        Add Project
                        </button>
                    </div>
                    
                    <div className="flex-container">

                        <div className="pr1-container">
                            <div className="title">
                                <h4>{data.project1Name}</h4>
                                <React.Fragment>
                                {data.project1Name ? (
                                <DeleteOutlineIcon style={{marginLeft: '24em' }} onClick={() => handleDelete(1)}/>
                                    ) : null}
                                  </React.Fragment>

                            </div>
                            <p className="desc">
                                {data.project1Desc}
                            </p>
                            
                        </div>
                        <div className="pr2-container">
                            <div className="title">
                                <h4>{data.project2Name}</h4>
                                <React.Fragment>
                                {data.project2Name ? (
                                <DeleteOutlineIcon style={{ marginLeft: '24em' }} onClick={() => handleDelete(2)}/>
                                    ) : null}
                                  </React.Fragment>

                            </div>
                            <p className="desc">
                                {data.project2Desc}
                            </p>
                            
                        </div>
                        <div className="pr3-container">
                            <div className="title">
                                <h4>{data.project3Name}</h4>
                                <React.Fragment>
                                {data.project3Name ? (
                                <DeleteOutlineIcon style={{ marginLeft: '24em' }}  onClick={() => handleDelete(3)} />
                                    ) : null}
                                  </React.Fragment>


                            </div>
                            <p className="desc">
                                {data.project3Desc}
                            </p>
                            {/* <button className="delete project-btn">
                                Delete Project
                            </button> */}
                        </div>

                    </div>
                </div>
                
            </div>
       
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Project</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="projectName"
                        label="Project Name"
                        fullWidth
                        multiline
                        value={prName}
                        onChange={(event) => setprName(event.target.value)}
                        required

                    />
                    <TextField
                        margin="dense"
                        id="projectDesc"
                        label="Project Description"
                        fullWidth
                        multiline
                        rows={6}
                        value={prDesc}
                        onChange={(event) => setprDesc(event.target.value)}
                        required
                    />
                    <input type="file" accept="image/*" onChange={(event)=>{
                        setImage(event.target.files?.[0]);
                    }} 
                    required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSaveProject}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
// event: React.MouseEvent<HTMLButtonElement>