import { Link } from "react-router-dom";
import logo from '../assets/img/banner-blck.jpg'
import err from '../assets/img/404.png'

const title = "Error 404!";
const desc = "Oops! The Lesson Plan You Are Searching Could Not Be Found";
const btnText = "Go Back To Home";




const ErrorPage = () => {
    return (
        <div className="four-zero-section padding-tb">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="four-zero-content">
                            <Link to="/">
                                <img src={logo} alt="Error Page" />
                            </Link>
                            <p className="title">{title}</p>
                            <p>{desc}</p>
                            <Link to="/" className="lab-btn"><span>{btnText} <i className="icofont-external-link"></i></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-6 col-12">
                        <div className="foue-zero-thumb">
                            <img src={err} alt="Error Page" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;