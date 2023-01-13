import "../Assests/CSS/forms.css";
import { useState, useEffect }from "react";

const LinkForm = () => {
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 760px)").matches)
    useEffect(() => {
        window
            .matchMedia("(min-width: 760px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    return (
        <>
            <div
                className={
                    matches ? "d-flex flex-row" : "d-flex flex-column"
                }
            >
                <div
                    className={
                        matches
                            ? "container formContainer p-5 d-flex justify-content-center"
                            : "container formContainer py-4 w-100 px-0 d-flex justify-content-center"
                    }
                >
                    <form className={matches ? "w-100 notTable-form" : "w-100 "}>
                        <h1>
                            <em>Create Link</em>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-link-45deg"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                            </svg>
                        </h1>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">
                                Link Subject
                            </label>
                            <br></br>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                id="exampleSub"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="OGlink" className="form-label">
                                Original Link
                            </label>
                            <br></br>
                            <input
                                className="form-control"
                                placeholder="Enter the original link"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="StartDate" className="form-label">
                                Add Link
                            </label>
                            <br></br>
                            <div className="custom d-flex flex-row align-items-center border">
                                <p className=" para fw-bold m-0">https://usict.acm.org/link/</p>
                                <input
                                    type="link"
                                    className="form-control change"
                                    placeholder="Custom Link"
                                    id="exampleDate"
                                    required
                                />
                            </div>
                        </div>
                        <div className={ matches ? "d-flex flex-row" : "flex-col"}>
                            <button type="submit" className="btn btn-primary">
                                Get Preview
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Generate Link
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Check & Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LinkForm;
