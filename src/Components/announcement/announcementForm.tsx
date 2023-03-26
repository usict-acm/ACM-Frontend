import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { fetchData } from "../../api/fetchData";
import "../Assests/CSS/forms.css";
import { formatDateForInput } from "../../utils"
import { Event } from ".";

type EventCreate = Omit<Event, "id">;

function AnnouncementForm() {
    const navigate = useNavigate();
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 760px)").matches
    );
    const [state, setState] = useState<EventCreate>({
        name: "",
        description: "",
        startDate: new Date(),
        endDate: new Date(),
        button1Text: "",
        button2Link: "",
        button1Link: "",
        button2Text: "",
        partners: "",
        speakers: "",
        poster: "",
        year: 0,
        time: "",
    });
    const [req, setReq] = useState<{ read(): any }>({ read() {} });
    const result = req.read();
    if (result && result.message) {
        // everything ok
        navigate("/Link-Table");
    } else if (result) {
        // some error has occured or the request is suspended
        throw result;
    }
    const onChangeState = (value: Partial<EventCreate>) => {
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
        <div className={matches ? "d-flex flex-row" : "d-flex flex-column"}>
            <div
                className={
                    matches
                        ? "container formContainer p-5 d-flex justify-content-center"
                        : "container formContainer py-4 w-100 px-0 d-flex justify-content-center"
                }
            >
                <form
                    className={matches ? "w-100 notTable-form " : "w-100"}
                    onSubmit={(e) => {
                        e.preventDefault();
                        setReq(fetchData("/event", "POST", state));
                    }}
                >
                    <h3>
                        <em>Create Announcement</em>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-megaphone"
                            viewBox="0 0 16 16"
                        >
                            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z" />
                        </svg>
                    </h3>
                    <hr></hr>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Please fill in the form to add announcement.
                        </label>
                        <br></br>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={state.name}
                            onChange={(e) =>
                                onChangeState({ name: e.target?.value })
                            }
                            aria-describedby="emailHelp"
                            placeholder="Enter the name of the announcement"
                            required
                        />
                        <br></br>
                        <label htmlFor="description" className="form-label">
                            Describe the event
                        </label>
                        <br></br>
                        <textarea
                            name=""
                            id="description"
                            value={state.description}
                            onChange={(e) =>
                                onChangeState({ description: e.target?.value })
                            }
                            className="form-control"
                            rows={4}
                            placeholder="Description of the announcement"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stateDate" className="form-label">
                            Date for commencement of the event
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="startDate"
                            value={formatDateForInput(state.startDate)}
                            onChange={(e) =>
                                onChangeState({
                                    startDate: new Date(e.target?.value),
                                })
                            }
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="endDate" className="form-label">
                            Date for end of the event
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="endDate"
                            value={formatDateForInput(state.endDate)}
                            onChange={(e) =>
                                onChangeState({
                                    endDate: new Date(e.target?.value),
                                })
                            }
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="button1Text" className="form-label">
                            Button1 Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="button1Text"
                            value={state.button1Text}
                            onChange={(e) =>
                                onChangeState({ button1Text: e.target?.value })
                            }
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="button1Link" className="form-label">
                            Button1 Link
                        </label>
                        <input
                            type="Link"
                            className="form-control"
                            required
                            id="button1Link"
                            value={state.button1Link}
                            onChange={(e) =>
                                onChangeState({ button1Link: e.target?.value })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="button2Text" className="form-label">
                            Button2 Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            required
                            id="button2Text"
                            value={state.button2Text}
                            onChange={(e) =>
                                onChangeState({ button2Text: e.target?.value })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="button2Link" className="form-label">
                            Button2 Link
                        </label>

                        <input
                            type="link"
                            className="form-control"
                            required
                            id="button2Link"
                            value={state.button2Link}
                            onChange={(e) =>
                                onChangeState({ button2Link: e.target?.value })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="partner" className="form-label">
                            Partner
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            required
                            id="partner"
                            value={state.partners}
                            onChange={(e) =>
                                onChangeState({ partners: e.target?.value })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="speakers" className="form-label">
                            Speakers
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            required
                            id="speakers"
                            value={state.speakers}
                            onChange={(e) =>
                                onChangeState({ speakers: e.target?.value })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="year" className="form-label">
                            Year
                        </label>

                        <input
                            type="year"
                            className="form-control"
                            required
                            id="year"
                            value={state.year}
                            onChange={(e) =>
                                onChangeState({ year: Number(e.target?.value) })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="time" className="form-label">
                            Start-time - End time
                        </label>

                        <input
                            type="year"
                            className="form-control"
                            required
                            id="time"
                            value={state.time}
                            onChange={(e) =>
                                onChangeState({ time: e.target?.value })
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="poster" className="form-label">
                            Upload the poster
                        </label>

                        <input
                            type="file"
                            id="poster"
                            className="form-control"
                            required
                            value={state.poster}
                            onChange={(e) =>
                                onChangeState({ poster: e.target?.value })
                            }
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AnnouncementForm;
