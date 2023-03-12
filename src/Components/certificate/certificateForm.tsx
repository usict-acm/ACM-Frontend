import CardMembershipIcon from "@mui/icons-material/CardMembership";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Certificate } from ".";
import { fetchData } from "../../api/fetchData";

type CertificateCreate = Omit<Certificate, "id" | "uniqueNo">;

export default function Form() {
    const navigate = useNavigate();
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 760px)").matches
    );
    const [req, setReq] = useState<{ read(): any }>({ read() {} });
    const result = req.read();
    if (result && result.message) {
        // everything ok
        navigate("/Certificate-Table");
    } else if (result) {
        // some error has occured or the request is suspended
        throw result;
    }
    useEffect(() => {
        window
            .matchMedia("(min-width: 760px)")
            .addEventListener("change", (e) => setMatches(e.matches));
    }, []);
    const [state, setState] = useState<CertificateCreate>({
        nameParticipant: "",
        email: "",
        startDate: new Date(),
        endDate: new Date(),
        course: "",
        enrollment_no: "",
        event: "",
        rank: null,
        college: "",
    });
    const onChangeState = (value: Partial<CertificateCreate>) => {
        setState({
            ...state,
            ...value,
        });
    };
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
                    <form
                        className={matches ? "w-100 notTable-form" : "w-100"}
                        onSubmit={(e) => {
                            e.preventDefault();
                            setReq(fetchData("/certificate", "POST", state));
                        }}
                    >
                        <h1>
                            {" "}
                            <CardMembershipIcon /> Create Certificate
                        </h1>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name of certificate Holder
                            </label>
                            <br></br>
                            <input
                                placeholder="Enter the name of certificate holder.."
                                type="text"
                                className="form-control"
                                id="name"
                                aria-describedby="emailHelp"
                                value={state.nameParticipant}
                                onChange={(e) => {
                                    onChangeState({
                                        nameParticipant: e.target?.value,
                                    });
                                }}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="college" className="form-label">
                                Name of Institution
                            </label>
                            <br></br>
                            <input
                                placeholder="Enter the name of institution.."
                                type="email"
                                className="form-control"
                                id="college"
                                value={state.college}
                                onChange={(e) => {
                                    onChangeState({
                                        college: e.target?.value,
                                    });
                                }}
                                aria-describedby="emailHelp"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="startDate" className="form-label">
                                Starting Date for Program
                            </label>
                            <br></br>
                            <input
                                type="date"
                                id="startDate"
                                className="form-control"
                                value={state.startDate.toString()}
                                onChange={(e) => {
                                    onChangeState({
                                        startDate: new Date(e.target?.value),
                                    });
                                }}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="endDate" className="form-label">
                                Ending Date for Program
                            </label>
                            <input
                                type="date"
                                id="endDate"
                                value={state.endDate.toString()}
                                onChange={(e) => {
                                    onChangeState({
                                        endDate: new Date(e.target?.value),
                                    });
                                }}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                            >
                                Event
                            </label>
                            <br></br>
                            <input
                                placeholder="Enter the event's name.."
                                type="text"
                                className="form-control"
                                id="eventName"
                                value={state.event}
                                onChange={(e) => {
                                    onChangeState({
                                        event: e.target?.value,
                                    });
                                }}
                                aria-describedby="emailHelp"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                placeholder="Enter the email address of certificate holder.."
                                type="email"
                                className="form-control"
                                id="email"
                                value={state.email}
                                onChange={(e) => {
                                    onChangeState({
                                        email: e.target?.value,
                                    });
                                }}
                                aria-describedby="emailHelp"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                placeholder="Enter the rank of certificate holder.."
                                type="text"
                                className="form-control"
                                id="rank"
                                value={state.rank ? state.rank! : ""}
                                onChange={(e) => {
                                    onChangeState({
                                        rank: e.target?.value,
                                    });
                                }}
                                aria-describedby="emailHelp"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                            >
                                Student Details
                            </label>
                            <br></br>
                            <input
                                placeholder="Enter the enrollment number of certificate holder.."
                                type="text"
                                className="form-control"
                                id="entrollmentNumber"
                                value={state.enrollment_no}
                                onChange={(e) => {
                                    onChangeState({
                                        enrollment_no: e.target?.value,
                                    });
                                }}
                                aria-describedby="emailHelp"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                placeholder="Enter the course of certificate holder.."
                                type="text"
                                className="form-control"
                                id="holder"
                                value={state.course}
                                onChange={(e) => {
                                    onChangeState({
                                        course: e.target?.value,
                                    });
                                }}
                                aria-describedby="emailHelp"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
