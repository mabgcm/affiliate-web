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
                                    <figure className="my-4">
                                        <img src={article.image1} alt="" className="img-fluid" />
                                        <figcaption>{article.caption1}</figcaption>
                                    </figure>
                                    <p><span className="firstcharacter">{article.parag1[0]}</span>{article.parag1.slice(1)}</p>
                                    <h2>{article.parag2}</h2>
                                    <p>{article.parag3}</p>
                                    <h2>{article.parag4}</h2>
                                    <p>{article.parag5}</p>
                                    <h2>{article.parag6}</h2>
                                    <p>{article.parag7}</p>
                                    <h2>{article.parag8}</h2>
                                    <p>{article.parag9}</p>
                                    <h2>{article.parag10}</h2>
                                    <p>{article.parag11}</p>
                                    <h2>{article.parag12}</h2>
                                    <p>{article.parag13}</p>
                                </div>


                                <div className="comments">
                                    <Comment key={article.id} id={article.id} />
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="aside-block">

                                    <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link cursor-na" >Recommended for you</button>
                                        </li>
                                    </ul>
                                    {recommendedArticles.map((article) => (
                                        <div className="tab-content" key={article.id}>
                                            <div className="tab-pane fade show active">
                                                <div className="post-entry-1 border-bottom">
                                                    <div className="post-meta"><span className="date">{article.category}</span> <span className="mx-1"><CircleIcon fontSize='xsmall' /></span> <span>{new Date(article.timestamp?.toDate()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' }).toUpperCase()}</span></div>
                                                    <h2 className="mb-2"><Link to={`/blogpost/${article.id}`}>{article.title}</Link></h2>
                                                    <span className="author mb-3 d-block">{article.author}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    )
}

export default Blogpost