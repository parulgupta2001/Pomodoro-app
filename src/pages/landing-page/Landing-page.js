import {Link} from "react-router-dom";
import "./landing-page.css"
export function LandingPage(){
    return (
        <>
        <Link to="/" className="header_link"><h2 className="header">Focus</h2></Link>
        <div className="landing_main_container">
        <div className="landing_text_container">
         <h3 className="welcome_msg">
             Welcome to
             <span>Focus</span>
         </h3>
         <p>A simple app designed to beat procrastination</p>
         <p> and help you accomplish more</p>
         <Link to="/home">
        <button className="start_btn">Start</button>
        </Link>
         </div>


        <div>
            <img src="http://res.cloudinary.com/dwhran9qg/image/upload/logo/undraw_time_management_re_tk5w_idkpvq.jpg" className="landing_img"/>
        </div>

        </div>
        </>
    )
}