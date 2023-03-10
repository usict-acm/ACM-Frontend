import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnnouncementTable, AnnouncementForm } from "./Components/announcement";
import Login from "./Components/Login";
import { BlogTable, BlogForm } from "./Components/blog";
// import Navb from "./Components/FormNav";
// import Navb from "./Components/FormNav";
// import Teams from "./Components/Forms/Teams";
import { LinkTable, LinkForm } from "./Components/link";
import Team from "./Components/Forms/Teams";
import { CertificateTable, CertificateForm } from "./Components/certificate";
import TeamTable from "./Components/TeamTable";
import TeamMobileTable from "./Components/TeamMobileTable";
import FormSection from "./Components/FormSection";
import ContactUsTable from "./Components/ContactUsTable";
import ContactUsMobileTable from "./Components/ContactUsMobileTable";
// Gforms files

//Importing pages
import Signup from "./Components/Signup";
import Forms from "./pages/Forms";
import Fill from "./Components/Fill";
import Submissions from "./Components/Submissions";
// import CreateForms from "./Components/Gforms";
import JoinUsTable from "./Components/JoinUsTable";
import JoinUsMobileTable from "./Components/JoinUsTableMobile";
import NavBar from "./Components/navbar";
import UserPage from "./Components/UserPage";
import Members from "./Components/Members";
function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <main>
                    <Routes>
                        <Route path="/" element={<AnnouncementTable />} />
                        {/* <Route path="/" element={<TableDesktopMain />} /> */}
                        <Route path="/login" element={<Login />} />

                        <Route path="/form/Announcement" element={<AnnouncementForm />} />
                        {/* <Route path="/form/Announcements" element={<Blogs />} /> */}

                        <Route path="/form/Teams" element={<Team />} />
                        <Route path="/form/Link" element={<LinkForm />} />
                        {/* <Route path="/" element={<Home />} /> */}
                        {/* change 1 */}
                        <Route path="/form-table" element={<FormSection />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/form/Blog" element={<BlogForm />} />
                        <Route path="/forms" element={<Forms />} />
                        <Route path="/form/Certificate" element={<CertificateForm />} />
                        <Route path="/form/Team" element={<Team />} />
                        {/* *********************************************************** */}
                        <Route path="/fill/:id" element={<Fill />} />
                        <Route path="/submissions/:id" element={<Submissions />} />
                        {/* *********************************************************** */}

                        <Route
                            path="/Certificate-Table"
                            element={
                                <>
                                    <CertificateTable />
                                </>
                            }
                        />
                        <Route path="/Links-Table" element={<LinkTable />} />
                        <Route path="/Blogs-table" element={<BlogTable />} />
                        <Route
                            path="/Teams-Table"
                            element={
                                <>
                                    {window.innerWidth > 750 ? (
                                        <TeamTable />
                                    ) : (
                                        <TeamMobileTable />
                                    )}
                                </>
                            }
                        />
                        <Route path="/Announcement-Table" element={<AnnouncementTable />} />
                        <Route
                            path="/ContactUs-Table"
                            element={
                                <>
                                    {window.innerWidth > 750 ? (
                                        <ContactUsTable />
                                    ) : (
                                        <ContactUsMobileTable />
                                    )}
                                </>
                            }
                        />
                        <Route
                            path="/JoinUs-Table"
                            element={
                                <>
                                    {window.innerWidth > 750 ? (
                                        <JoinUsTable />
                                    ) : (
                                        <JoinUsMobileTable />
                                    )}
                                </>
                            }
                        />
                        <Route path="/Members" element={<Members />} />
                        <Route path="/User/:name" element={<UserPage />} />
                    </Routes>
                </main>
            </Router>
            {/* {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />} */}
            {/* console.log(window.innerWidth)
      <Sidebar />
      <BottomNav /> */}
            {/* <Header /> */}
            {/* {isMobileView > 768 ? <TableDesktopMain /> : <TableMobile />} */}
            {/* <Login /> */}
        </div>
    );
}

export default App;
