import React, { useEffect, useState } from 'react';
import '../assets/css/main.css';
import '../assets/css/variables.css';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase";
import { Link } from 'react-router-dom';
import { Box, SpeedDial, SpeedDialIcon } from '@mui/material';
import RecentPost from '../Components/RecentPost';
import Posts from '../Components/Posts';
import Posts2 from '../Components/Posts2';
import Filter from '../Components/Filter';

const Account = () => {

    const categoryOption = [
        "Artificial Intelligence",
        "Blogging",
        "Blockchain",
        "Coding",
        "Content Marketing",
        "Copywriting",
        "Cybersecurity",
        "Cloud Computing",
        "Content Creation",
        "Digital Marketing",
        "Data Analysis",
        "Data Science",
        "Email Marketing",
        "Graphic Design",
        "Machine Mearning",
        "Project Management",
        "Social Media Marketing",
        "Software Developmentn",
        "SEO",
        "Sales",
        "UX design",
        "Video Editing",
        "Web Development",
    ];

    const [blogposts, setBlogposts] = useState([]);

    useEffect(() => {
        const blogpostsRef = collection(db, 'blogpost');
        const q = query(blogpostsRef, orderBy('likes', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            // sort blogposts by length of likes array from highest to lowest
            data.sort((a, b) => b.likes.length - a.likes.length);

            setBlogposts(data);
        });

        return unsubscribe;
    }, []);


    return (
        <div className='row account mt-5'>
            <Box sx={{
                position: 'fixed',
                bottom: 10,
                right: '1%',
                transform: 'translateZ(0px)',
                zIndex: 1,
            }}
                className='speed-dial'>
                <Link to='/addblog'><SpeedDial
                    ariaLabel="Create a blogpost"
                    sx={{
                        position: 'absolute',
                        bottom: 10,
                        right: 15,
                        '& .MuiFab-primary': {
                            backgroundColor: 'black',
                            '&:hover': { backgroundColor: 'black' }
                        }
                    }}
                    icon={<SpeedDialIcon />}>
                </SpeedDial></Link>
            </Box>
            <main id="main position-absolute top-0">
                <section id="posts" className="posts">
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            <RecentPost />

                            <div className="col-lg-8">
                                <div className="row g-5">
                                    <Posts />

                                    <Posts2 />

                                    <div className="col-lg-4">
                                        <div className="trending">
                                            <div>
                                                <Filter categoryOption={categoryOption} />
                                            </div>
                                            <h3>Most Popular</h3>
                                            <ul className="trending-post">
                                                {blogposts.slice(0, 5).map((post, index) => (
                                                    <li key={post.id}>
                                                        <Link to={`/blogpost/${post.id}`}>
                                                            <span className="number">{index + 1}</span>
                                                            <h3>{post.title}</h3>
                                                            <span className="author blockquote-footer">{post.author}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    )
}

export default Account