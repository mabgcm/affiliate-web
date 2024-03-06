import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { UserAuth } from '../context/AuthContext';
import CircleIcon from '@mui/icons-material/Circle';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from 'react-router-dom';


const Posts = () => {

    const [blogs, setBlogs] = useState([]);
    // const { user } = UserAuth();

    useEffect(() => {
        const articleRef = collection(db, "blogpost");
        const q = query(articleRef, orderBy("timestamp", "desc"));
        onSnapshot(q, (snapshot) => {
            const blogs = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setBlogs(blogs);
            // console.log(blogs);
        });
    }, []);

    return (
        <div className="col-lg-4 border-start custom-border">
            {blogs.slice(1, 4).map(({ id, title, category, image1, timestamp }) => (
                <div className="post-entry-1" key={id}>
                    <Link to={`/blogpost/${id}`}><img src={image1} alt="" className="img-fluid" /></Link>
                    <div className="post-meta"><span className="date">{category}</span> <span className="mx-1"><CircleIcon fontSize='xsmall' /></span> <span>{new Date(timestamp?.toDate()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' }).toUpperCase()}</span></div>
                    <h2><Link to={`/blogpost/${id}`}>{title}</Link></h2>
                </div>
            ))}
        </div>
    )
}

export default Posts