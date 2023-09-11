import { Suspense, ChangeEvent, useEffect } from "react";
import "./Assests/CSS/UserPage.css";
import { Team } from "./Members";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { EditOutlined } from "@mui/icons-material";
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

interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
}

const UserPageInner = function(props: { data: { read(): Team } }) {
    const [data, setData] = useState(props.data.read());
    const [edit, seteditData] = useState(false);
    const [open, setOpen] = useState(false);
    const [prName, setprName] = useState("");
    const [prDesc, setprDesc] = useState("");
    const [prImage,setprImage]=useState("");
    const [currPr, setCurrPr] = useState<number>(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string |null>(null);
    const [editIndex, setEditIndex] = useState<number>(0);

// Add a state to track when the update button is clicked
const [updateClicked, setUpdateClicked] = useState(false);

// Use useEffect to reload the page when updateClicked is true
useEffect(() => {
  if (updateClicked) {
    window.location.reload();
  }
}, [updateClicked]);


    const handleImageClick = (image:string |null) => {
        setSelectedImage(image);
        setShowModal(true);
    };


    const [refreshFlag, setRefreshFlag] = useState(false);
    const [saveReq, setSaveReq] = useState<{ read(): any }>({ read() { } })
    saveReq.read();
    const handleSave = () => {
        setSaveReq(fetchData(`/team/${data.id}`, "PATCH", data));
        seteditData(false);
    };
    const numberOfProjects = data.project3Name ? 3 : (data.project2Name ? 2 : (data.project1Name ? 1 : 0));
    console.log(numberOfProjects);

    const handleOpen = () => {

        if (numberOfProjects === 3) {
            return alert("You can only add a max of 3 projects.");
        }
        else
            setOpen(true);

            // setEditIndex(0);

    }
    const handleClose = () => {
        setOpen(false);
        setEditIndex(0);
    }

    const handleSaveProject = () => {
        // to store the new project

        let updatedData = { ...data };
        let projIndex = numberOfProjects + 1;
        if (projIndex <= 3) {

            const colName = `project${projIndex}Name`;
            const colDesc = `project${projIndex}Desc`;

            updatedData = {
                ...data,
                [colName]: prName,
                [colDesc]: prDesc,
            };
        }
        setData(updatedData);
        setSaveReq(fetchData(`/team/${data.id}`, "PATCH", updatedData));

        // Close the dialog
        setTimeout(() => {
            setOpen(false);
        }, 1000);

        console.log(updatedData);
        console.log(data.id);
        
        // Clear the input fields for the next project
        setprDesc('');
        setprName('');
        if(currPr<3)
        setCurrPr(currPr + 1);
        setEditIndex(0);
    }



    const handleDelete = (index: number) => {

        const result = window.confirm("Are you sure you want to delete the project?");
        if (result) {
            const updatedData = {
                ...data,
            };
            switch (index) {
                case 1: {
                    updatedData.project1Name = updatedData.project2Name;
                    updatedData.project1Desc = updatedData.project2Desc;
                    updatedData.project1Image = updatedData.project2Image;
                    updatedData.project2Name = updatedData.project3Name;
                    updatedData.project2Desc = updatedData.project3Name;
                    updatedData.project2Image = updatedData.project3Image;
                    updatedData.project3Name = null;
                    updatedData.project3Desc = null;
                    updatedData.project3Image = null;
                    break;
                }
                case 2: {
                    updatedData.project2Name = updatedData.project3Name;
                    updatedData.project2Desc = updatedData.project3Name;
                    updatedData.project2Image = updatedData.project3Image;
                    updatedData.project3Name = null;
                    updatedData.project3Desc = null;
                    updatedData.project3Image = null;
                    break;
                }
                case 3: {
                    updatedData.project3Name = null;
                    updatedData.project3Desc = null;
                    updatedData.project3Image = null;
                    break;
                }
            }
            // Create an updated data object with the project columns set to null
            console.log(updatedData);

            // Update the data state with the modified data object
            setData(updatedData);

            // Update the corresponding data in the database
            setSaveReq(fetchData(`/team/${data.id}`, "PATCH", updatedData));

            // Set refresh flag if necessary
            setRefreshFlag(true);
            if(currPr>=1)
            setCurrPr(currPr - 1);   
            setEditIndex(0);

        }
    };
    const handleImageProject = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        if (!event.target.files || !event.target.files[0]) return;
        const reader = new FileReader();
        console.log("we are here!");
        reader.addEventListener("load", (event) => {
            if (currPr == 0) {
                setData({ ...data, project1Image: event.target?.result!.toString()! });
            console.log("img-1 added");
            }


            else if (currPr == 1) {
                setData({ ...data, project2Image: event.target?.result!.toString()! });
            }

            else if (currPr == 2) {
                setData({ ...data, project3Image: event.target?.result!.toString()! });
            }
        })
        const fileName = event.target.files[0];
        reader.readAsDataURL(fileName);
    }


    

   const handleEditProject =(index:number)=>{
          setEditIndex(index);
          setOpen(true);
   }
   
    return (
        <div className="parent">
            <div className="profile" style={{ height: "100%" }}>
                <div className="content" style={{ overflowY: edit ? 'scroll' : 'hidden' }} >
                    <button
                        type="button"
                        onClick={() => seteditData(true)}
                        id="edit"
                        name="edit"
                    >
                        Edit
                        <EditIcon />
                    </button>
                    <div className="image flex-container">
                        <div>
                            <img className="img-body" src={`../${data.image}`} alt="gg" />
                        </div>
                        <div className="name"><p>{data.name}</p></div>

                    </div>

                    <div className="mem-details" style={{ fontSize: "18px" }}>
                        <div>
                            {/* change the name to position */}
                            {edit ? (
                                <div className="sub-member-details">
                                    <p className="headings">Position</p>
                                    <input
                                        type="text"
                                        value={data.designation}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                designation: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            ) : (
                                <div className="sub-member-details">
                                    {" "}
                                    <p className="headings">Position</p>
                                    <p>{data.designation}</p>
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
                                {/* change this to email */}
                                {edit ? (
                                    <div className="sub-member-details">
                                        <p className="headings">Email</p>
                                        <input
                                            className="mem-input"
                                            type="email"
                                            value={data.email ?? ''}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                ) : (<div className="sub-member-details">
                                    {" "}
                                    <p className="headings">Email</p>
                                    <p>{data.email}</p>
                                </div>)}

                            </div>
                        </div>

                      <div>
                            {edit ? (
                                <div className="sub-member-details">
                                    <p className="headings">Skills</p>
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
                                    <p className="headings">Skills</p>
                                    <p>{data.techStack}</p>
                                </div>
                            )}
                        </div>

                        <div>
                            {edit ? (
                                <div className="sub-member-details">
                                    {data.linkedin && (
                                        <>
                                            <p className="headings">{data.linkedin ? "LinkedIn" : ''}</p>
                                            <input
                                                type="text"
                                                value={
                                                    data.linkedin
                                                        ? data.linkedin!
                                                        : ""
                                                }
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        linkedin: e.target.value,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                </div>
                            ) : ''}
                        </div>

                        <div>
                            {edit ? (
                                <div className="sub-member-details">
                                    {data.instagram && (
                                        <>
                                            <p className="headings">{data.instagram ? "Instagram" : ''}</p>
                                            <input
                                                type="text"
                                                value={
                                                    data.instagram
                                                        ? data.instagram!
                                                        : ""
                                                }
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        instagram: e.target.value,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                </div>
                            ) : ''}
                        </div>

                        <div>
                            {edit ? (
                                <div className="sub-member-details">
                                    {data.github && (
                                        <>
                                            <p className="headings">Github</p>
                                            <input
                                                type="text"
                                                value={
                                                    data.github
                                                        ? data.github!
                                                        : ""
                                                }
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        github: e.target.value,
                                                    })
                                                }
                                            />
                                        </>
                                    )
                                    }
                                </div>
                            ) : null}
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
                    {edit ? '' : (<div className="social-handles">
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
                    </div>)}

                </div>
            </div>
            <div className="projects">

                <div className="acm-projects">
                    <button className="add project-btn" onClick={handleOpen} >
                        Add Project
                    </button>
                    <div className="flex-container" >
                        {(!data.project1Name) ? (
                            <>
                                <div className="empty">
                                   
                                    No Projects Yet


                                </div>

                            </>

                        ) : (<>
                            <div className="headings">
                                <h2><i>Your Projects</i></h2>

                            </div>

                            <div className="pr-container ">
                                <div className="pr-content">
                                    <div className="pr-title">
                                        <h4>{data.project1Name}</h4>
                                        <>
                                            {data.project1Name ? (
                                                <>
                                                <EditOutlined  style={{
        marginLeft: window.innerWidth <= 720 ? '5px' : '57%',
      }} onClick={()=>handleEditProject (1)}/>
                                                <DeleteOutlineIcon style={{"margin":"0"} }
                                                onClick={() => handleDelete(1)} />

                                                </>
                                                
                                            ) : null}
                                        </>
                                    </div>
                                    <p className="desc">
                                        {data.project1Desc}
                                    </p>
                                </div>

                                {data.project1Name && data.project1Image && (
                                    <div onClick={() => handleImageClick(data.project1Image)}>
                                        <img
                                            className="img-section"
                                            src={data.project1Image}

                                            alt="1st pr"
                                        />
                                    </div>
                                )}

                            </div>
                            <div className="pr-container">
                                <div className="pr-content">
                                    <div className="pr-title">
                                        <h4>{data.project2Name}</h4>
                                        <>
                                            {data.project2Name ? (
                                                <>
                                                <EditOutlined  style={{
        marginLeft: window.innerWidth <= 720 ? '5px' : '57%',
      }} onClick={ ()=>handleEditProject (2)}/>
                                                <DeleteOutlineIcon style={{"margin":"0"}}
                                                onClick={() => handleDelete(2)} />
                                            
                                                </>
                                            ) : 
                                            null}
                                                
                                        </>


                                    </div>
                                    <p className="desc">
                                        {data.project2Desc}
                                    </p>
                                </div>

                                {data.project2Name && data.project2Image && (
                                    <div onClick={() => handleImageClick(data.project2Image)}>
                                        <img
                                            className="img-section"
                                            src={data.project2Image}

                                            alt="2nd pr"
                                        />
                                    </div>
                                )}

                            </div>
                            <div className="pr-container">
                                <div className="pr-content">
                                    <div className="pr-title">
                                        <h4>{data.project3Name}</h4>
                                        <>
                                            {data.project3Name ? (
                                               <>
                                               <EditOutlined style={{
        marginLeft: window.innerWidth <= 720 ? '5px' : '57%',
      }} onClick={()=>handleEditProject (3)}/>
                                               <DeleteOutlineIcon style={{"margin":"0"}}
                                               onClick={() => handleDelete(3)} />
                                           
                                               </>

                                            ) : null}
                                        </>



                                    </div>
                                    <p className="desc">
                                        {data.project3Desc}
                                    </p>
                                </div>
                                {data.project3Name && data.project3Image && (
                                    <div onClick={() => handleImageClick(data.project3Image)}>
                                        <img
                                            className="img-section"
                                            src={data.project3Image}
                                            alt="3rd pr"
                                        />
                                    </div>
                                )}
                            </div></>)}


                    </div>



                </div>
                {showModal && selectedImage && (
                    <div>
                        <div className="modal-overlay" onClick={() => setShowModal(false)} />
                        <div className="modal-content" style={{
                            maxWidth: "100vw", opacity: "0.8", overflowY: "hidden",
                            maxHeight: "40vw", padding: "0", borderRadius: "16px", marginLeft: "-15em"
                        }}>
                            <img src={selectedImage} alt="Selected Project Image" />
                        </div>
                    </div>
                )}

            </div>


            <Dialog open={open} onClose={handleClose}>
    <DialogTitle>
        {editIndex !== 0 ? 'Edit Project' : 'Add Project'}
    </DialogTitle>
    <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="projectName"
            label="Project Name"
            fullWidth
            multiline
            value={
                editIndex !== 0
                    ? data[`project${editIndex}Name`] || ''
                    : prName
            }
            // onChange={(event) => setprName(event.target.value)}
            onChange={(event) => {
                if (editIndex !== 0) {
                    const newdata={
                        ...data,
                        [`project${editIndex}Name`]: event.target.value,
                    };
                    setData(newdata);
        setSaveReq(fetchData(`/team/${data.id}`, "PATCH",newdata));
      
                } else {
                    setprName(event.target.value);
                }
            }}
            required
        />

        <TextField
            margin="dense"
            id="projectDesc"
            label="Project Description"
            fullWidth
            multiline
            rows={6}
            value={
                editIndex !==0
                    ? data[`project${editIndex}Desc`] || ''
                    : prDesc
            }
            // onChange={(event) => setprDesc(event.target.value)}
            onChange={(event) => {
                if (editIndex !== 0) {
                    const newData={
                        ...data,
                        [`project${editIndex}Desc`]: event.target.value,
                    };
                    setData(newData);
                    setSaveReq(fetchData(`/team/${data.id}`, "PATCH",newData));

                } else {
                    setprDesc(event.target.value);
                }
            }}
            required    
        />

        <span className="required" style={{ color: 'red' }}>*</span>

        <input
            type="file"
            accept="image/*"
            // onChange={handleImageProject}
            onChange={(event) => {

                if (editIndex !== 0) {
                    let img = event.target.files && event.target.files[0];
                    if (img) {
                        let imageUrl = URL.createObjectURL(img);
                        setData({
                            ...data,
                            [`project${editIndex}Image`]: imageUrl,
                        });
                        setSaveReq(fetchData(`/team/${data.id}`, "PATCH", {
                            ...data,
                            [`project${editIndex}Image`]: imageUrl,
                        }));
        setUpdateClicked(true);

                    }
                } else {
                    {handleImageProject(event)}
                }
            }}
            
            required
        />
    </DialogContent>
    <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSaveProject}>
            {editIndex !== 0 ? 'Update' : 'Save'}
        </Button>
    </DialogActions>
</Dialog>

                   
        </div>
    );
};
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
