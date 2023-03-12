import { useEffect, useState } from "react";
import "../../Assests/CSS/certificate.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Team } from ".";
import { useNavigate } from "react-router";
import { fetchData } from "../../api/fetchData";

type TeamCreate = Omit<Team, "id" | "active" | "added_on">;

const TeamForm = function() {
    const navigate = useNavigate();
    const [req, setReq] = useState<{ read(): any }>({ read() { } });
    const result = req.read();
    if (result && result.message) {
        // everything ok
        navigate("/Team-Table");
    } else if (result) {
        // some error has occured or the request is suspended
        throw result;
    }
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 760px)").matches
    );
    const [state, setState] = useState<TeamCreate>({
        image: "",
        name: "",
        designation: "",
        linkedin: null,
        github: null,
        instagram: null,
        year: new Date().getFullYear(),
        category: "",
    });

    const onChangeState = (value: Partial<TeamCreate>) => {
        setState({
            ...state,
            ...value,
        });
    };

    useEffect(() => {
        window
            .matchMedia("(min-width: 760px)")
            .addEventListener("change", (e) => setMatches(e.matches));
    }, []);
    return (
        <>
            <div className={matches ? "d-flex flex-row" : "d-flex flex-column"}>
                <div
                    className={
                        matches
                            ? "container formContainer p-5 d-flex justify-content-center"
                            : "container formContainer py-4 w-100 px-0 d-flex justify-content-center"
                    }
                >
                    <form className={matches ? "w-100  " : "w-75"}

                        onSubmit={(e) => {
                            e.preventDefault();
                            setReq(fetchData("/team", "POST", state));
                        }}
                    >
                        {/* <form> */}
                        <h1>
                            {" "}
                            <PeopleAltIcon /> Add a new Member
                        </h1>

                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                            >
                                Name
                            </label>
                            <br />
                            <input
                                placeholder="Enter the first name .."
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={state.name}
                                onChange={(e) => {
                                    onChangeState({
                                        name: e.target?.value,
                                    });
                                }}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputGroup1"
                                className="form-label"
                            >
                                Designation
                            </label>
                            <br />
                            <input
                                placeholder="Enter the designation.."
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={state.designation}
                                onChange={(e) => {
                                    onChangeState({
                                        designation: e.target?.value,
                                    });
                                }}
                                required
                            />
                        </div>
                        <label
                            className="sr-only"
                            htmlFor="inlineFormInputGroup"
                        >
                            LinkedIn
                        </label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <LinkedInIcon />
                                </div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputGroup"
                                placeholder=" Linkedin Username"
                                value={state.linkedin ? state.linkedin! : ""}
                                onChange={(e) => {
                                    onChangeState({
                                        linkedin: e.target?.value,
                                    });
                                }}
                                required
                            />
                        </div>
                        <label
                            className="sr-only"
                            htmlFor="inlineFormInputGroup"
                        >
                            Github
                        </label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <GitHubIcon />
                                </div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputGroup"
                                placeholder="Github Username"
                                value={state.github ? state.github! : ""}
                                onChange={(e) => {
                                    onChangeState({
                                        github: e.target?.value,
                                    });
                                }}
                                required
                            />
                        </div>
                        <label
                            className="sr-only"
                            htmlFor="inlineFormInputGroup"
                        >
                            Instagram
                        </label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">@</div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputGroup"
                                placeholder="Instagram Username"
                                value={state.instagram ? state.github! : ""}
                                onChange={(e) => {
                                    onChangeState({
                                        instagram: e.target?.value,
                                    });
                                }}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                            >
                                Year
                            </label>
                            <br />
                            <input
                                placeholder="Enter current year.."
                                type="month"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={state.year}
                                onChange={(e) => {
                                    onChangeState({
                                        year: Number(e.target?.value),
                                    });
                                }}
                                required
                            />
                        </div>
                        <div className="col-auto mb-3">
                            <label
                                className="my-1 mr-2 form-label "
                                htmlFor="inlineFormCustomSelectPref"
                            >
                                Category
                            </label>
                            <br />
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                value={state.category}
                                onChange={(e) => {
                                    onChangeState({
                                        category: e.target?.value,
                                    });
                                }}
                                required
                            >
                                <option value="Faculty">Faculty</option>
                                <option value="Office Bearer">Office Bearer</option>
                                <option value="Executive Member">Executive Member</option>
                                <option value="Operations Team">Operations Team</option>
                                <option value="Web Team">Web Team</option>
                            </select>
                        </div>
                        <div className="form-group ">
                            <label
                                className="imageDisplay"
                                htmlFor="exampleFormControlFile1"
                            >
                                Select Image
                            </label>

                            <input
                                type="file"
                                className="form-control-file"
                                id="exampleFormControlFile1"
                                onChange={(e) => {
                                    if (e.target!.files && e.target!.files[0]) {
                                        onChangeState({
                                            image: URL.createObjectURL(e.target!.files[0])
                                        });
                                    }
                                }}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default TeamForm;
