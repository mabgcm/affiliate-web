import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../assets/css/home2.css';
import { FaSearch, FaUsers } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";

const learningPlans = [
    { "id": "amazonfba", "title": "Amazon FBA" },
    { "id": "amazonfbm", "title": "Amazon FBM" },
    { "id": "blockchain", "title": "Blockchain Fundamentals" },
    { "id": "copywriting", "title": "Copywriting Mastery" },
    { "id": "crypto", "title": "Crypto Trading Strategies" },
    { "id": "cybersecurity", "title": "Cybersecurity Fundamentals" },
    { "id": "digitalmarketing", "title": "Digital Marketing Essentials" },
    { "id": "emailmarketing", "title": "Email Marketing Mastery" },
    { "id": "seo", "title": "SEO Fundamentals" },
    { "id": "shopify", "title": "Shopify for Ecommerce" },
    { "id": "socialmarketing", "title": "Social Media Marketing" },
    { "id": "virtualassistance", "title": "Virtual Assistance" },
    { "id": "webdev", "title": "Web Development Fundamentals" },
    { "id": "wordpress", "title": "WordPress for Beginners" }
];

const Home2 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        const foundPlan = learningPlans.find(plan =>
            plan.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (foundPlan) {
            navigate(`/learningplan/${foundPlan.id}`); // Redirect to LearningPlan with the found ID
        } else {
            navigate('/error'); // Redirect to the error page if no plan is found
        }
    };

    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    <h2>Learn a Skill Today!</h2>
                    {/* <h2>Search the skill you want to learn among <span>150+</span> Learning Plans</h2> */}
                    <form onSubmit={handleSearch}>
                        <input type="text" name="search" placeholder="Type the skill you want to learn" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <button type="submit"><FaSearch size={20} /></button>
                    </form>
                    <p>Our Plans are designed for self learning & empowered by googling!</p>
                    <ul className="lab-ul">
                        <li><FaUsers size={25} style={{ color: '#00BF63' }} /> 1.5 Million Students</li>
                        <li><MdNotifications size={25} style={{ color: '#00BF63' }} /> More then 2000 Courses</li>
                        <li><CiGlobe size={25} style={{ color: '#00BF63' }} /> Learn Anything Online</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home2;