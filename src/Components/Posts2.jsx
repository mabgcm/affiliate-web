import React, { useEffect, useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from 'react-router-dom';

const Posts2 = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const articleRef = collection(db, "blogpost");
        const q = query(articleRef, orderBy("timestamp", "desc"));
        onSnapshot(q, (snapshot) => {
            const blogs = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setBlogs(blogs);
        });
    }, []);

    return (
        <div className="col-lg-4 border-start custom-border">
            {blogs.slice(4, 7).map(({ id, title, category, paragraphs, timestamp }) => (
                <div className="post-entry-1" key={id}>
                    {/* Display the first image from the paragraphs array */}
                    {paragraphs && paragraphs.length > 0 && paragraphs[0].image && (
                        <Link to={`/blogpost/${id}`}>
                            <img src={paragraphs[0].image} alt="" className="img-fluid" />
                        </Link>
                    )}
                    <div className="post-meta">
                        <span className="date">{category}</span>
                        <span className="mx-1"><CircleIcon fontSize='xsmall' /></span>
                        <span>{new Date(timestamp?.toDate()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' }).toUpperCase()}</span>
                    </div>
                    <h2 className='fontAlter'><Link to={`/blogpost/${id}`}>{title}</Link></h2>
                </div>
            ))}
        </div>
    )
}

export default Posts2;