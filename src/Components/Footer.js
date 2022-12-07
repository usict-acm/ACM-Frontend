function Footer(){
    return (
        <div className="footer container">
            <div>
                <a href="/" className="title mr-1">Formable</a>
                <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <div>
                {/* <p className="title">Specisl Thanks to</p>
                <p className="li">React</p>
                <p className="li">Firebase</p>
                <p className="li">Github</p>
                <p className="li">Netlify</p> */}
            </div>
            <div>
                {/* <p className="title">Find me on</p>
                <a href="" className="li">Github</a>
                <a href="" className="li">Fiverr</a>
                <a href="" className="li">Upwork</a>
                <a href="" className="li">LinkedIn</a> */}
            </div>
        </div>
    )
}

export default Footer