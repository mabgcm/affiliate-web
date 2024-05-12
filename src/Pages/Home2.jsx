import '../assets/home2.css'
import { FaSearch, FaUsers, FaBell } from "react-icons/fa"; // Importing FontAwesome icons
import { MdNotifications } from "react-icons/md"; // Importing Material Icons
import { TiGlobe } from "react-icons/ti"; // Importing Typicons
import { CiGlobe } from "react-icons/ci";



const title = <h2>Search Your One From <span>150+</span> Online Courses</h2>;
const desc = "We Have The Largest Collection of Courses";
const iconStyle = { color: '#00BF63' }; // Define the style object for the icons


const Home2 = () => {
    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form>
                        <input type="text" name="search" placeholder="Search your skill" />
                        <button type="submit"><FaSearch size={25} /></button>
                    </form>
                    <p>{desc}</p>
                    <ul className="lab-ul">
                        <li><FaUsers size={25} style={iconStyle} /> 1.5 Million Students</li>
                        <li><MdNotifications size={25} style={iconStyle} /> More then 2000 Courses</li>
                        <li><CiGlobe size={25} style={iconStyle} /> Learn Anything Online</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home2;