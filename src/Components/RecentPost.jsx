import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const RecentPost = () => {
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
        <div className="col-lg-4">
            {blogs.slice(0, 1).map(({ id, title, category, likes, paragraphs, profile, author, timestamp }) => (
                <div className="post-entry-1 lg" key={id}>
                    {/* Display the first image at the beginning of the post */}
                    {paragraphs[0].image && (
                        <Link to={`/blogpost/${id}`}>
                            <img src={paragraphs[0].image} alt="" className="img-fluid" />
                        </Link>
                    )}
                    <div className="post-meta"><span className="date">{category}</span> <span className="mx-1"><CircleIcon fontSize='xsmall' /></span> <span>{new Date(timestamp?.toDate()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' }).toUpperCase()}</span>
                    </div>
                    <h2><Link to={`/blogpost/${id}`}>{title}</Link></h2>
                    <p className="mb-4 d-block">{paragraphs[0].text}</p>
                    {/* Display subsequent paragraphs and images */}
                    {paragraphs.slice(1).map((para, index) => (
                        <React.Fragment key={index}>
                            <p>{para.text}</p>
                            {para.image && (
                                <Link to={`/blogpost/${id}`}>
                                    <img src={para.image} alt="" className="img-fluid" />
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                    <div className="d-flex align-items-center author">
                        <div className="photo"><img src={profile} alt="" className="img-fluid" /></div>
                        <div className="name">
                            <h3 className="m-0 p-0">{author}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecentPost;