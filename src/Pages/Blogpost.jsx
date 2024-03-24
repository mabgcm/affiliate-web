import React, { useEffect, useState } from 'react';
import '../assets/css/main.css';
import '../assets/css/variables.css';
import CircleIcon from '@mui/icons-material/Circle';
import { Link, useParams } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { doc, onSnapshot, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../firebase";
import Comment from '../Components/Comment';
import Likes from '../Components/Likes';

const Blogpost = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [recommendedArticles, setRecommendedArticles] = useState([]);
    const [category, setCategory] = useState(null);
    const { user } = UserAuth();

    const getRecommendedArticles = async (category) => {
        const q = query(collection(db, "blogpost"), where("category", "==", category));
        const querySnapshot = await getDocs(q);
        const articles = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        const filteredArticles = articles.filter((article) => article.category == category);

        setRecommendedArticles(filteredArticles);
    };

    useEffect(() => {
        if (id) {
            const docRef = doc(db, "blogpost", id);
            onSnapshot(docRef, (snapshot) => {
                const data = snapshot.data();
                setArticle({ ...data, id: snapshot.id });
                setCategory(data.category);
            });
        }
    }, [id]);

    useEffect(() => {
        if (category) {
            getRecommendedArticles(category);
        }
    }, [category]);

    return (
        <main id="main">
            {article && (
                <section className="single-post-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-lg-9 post-content">
                                <div className="single-post">
                                    <div className="d-flex">
                                        <div className="col-10 ">
                                            <div className="post-meta"><span className="date">{article.category}</span> <span className="mx-1"><CircleIcon fontSize='xsmall' /></span> <span>{new Date(article.timestamp?.toDate()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' }).toUpperCase()}</span></div>
                                        </div>
                                        <div className="col-2">
                                            <div className=' d-flex'>
                                                {user && <Likes id={article.id} likes={article.likes} />}
                                                <div className="pe-2">
                                                    <p>{article.likes?.length} likes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="mb-5">{article.title}</h1>
                                    {/* Display the first image at the beginning of the post */}
                                    {article.paragraphs[0].image && (
                                        <figure className="my-4">
                                            <img src={article.paragraphs[0].image} alt="" className="img-fluid" />
                                            {article.paragraphs[0].caption && <figcaption>{article.paragraphs[0].caption}</figcaption>}
                                        </figure>
                                    )}
                                    {/* Display subsequent paragraphs and images */}
                                    {article.paragraphs.map((para, index) => (
                                        <React.Fragment key={index}>
                                            <p>{para.text}</p>
                                            {para.image && index !== 0 && (
                                                <figure className="my-4">
                                                    <img src={para.image} alt="" className="img-fluid" />
                                                    {para.caption && <figcaption>{para.caption}</figcaption>}
                                                </figure>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                                <div className="comments">
                                    <Comment key={article.id} id={article.id} />
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                {/* Recommended articles and other UI elements */}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    )
}

export default Blogpost;