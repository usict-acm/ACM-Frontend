import { Link } from 'react-router-dom'

import banner from "../assets/banner.svg"
import features from "../assets/features.svg"

function Home(){
    return <div>
        <div className="section">
            <img src={banner} alt="banner" />
            <div className="content">
                <h1>USS <span>ACM</span> </h1>
                <br></br>
                {/* <p>Formale lets you create forms super simply. All you need to do is create a free account and you'll be all set. You can share the link of your form with others and see thier submissions. It's suitable for online MCQ exam and for job recruitments</p> */}
                <Link to="/create" className="btn">get started</Link>
            </div>
        </div>
        <div className="section">
            <div className="content">
                <h1>USS ACM STUDENT CHAPTER</h1>
                <p>
                    <span className="li" >Blogs</span>
                    <span className="li">Events</span>
                    <span className="li">Why Join us?</span>
                    <span className="li">Clubs</span>
                    <span className="li">Dashboard</span>
                </p>
            </div>
            <img src={features} alt="features" />
        </div>
    </div>
}

export default Home