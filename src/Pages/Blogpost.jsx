import React, { useEffect, useState } from 'react';
import '../assets/css/main.css';
import '../assets/css/variables.css';
import CircleIcon from '@mui/icons-material/Circle';
import { useParams } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { doc, onSnapshot, getDocs, collection, query, where } from 'firebase/firestore';
import { db } from "../firebase";
import Comment from '../Components/Comment';
import Likes from '../Components/Likes';
import Recommend from '../Components/Recommend';

const Blogpost = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const { user } = UserAuth();
    const [recommendedArticles, setRecommendedArticles] = useState([]);

    useEffect(() => {
        if (id) {
            const docRef = doc(db, "blogpost", id);
            onSnapshot(docRef, (snapshot) => {
                const data = snapshot.data();
                setArticle({ ...data, id: snapshot.id });
                // Fetch recommended articles based on the current article's category
                fetchRecommendedArticles(data.category);
            });
        }
    }, [id]);

    const fetchRecommendedArticles = async (category) => {
        const q = query(collection(db, "blogpost"), where("category", "==", category));
        const querySnapshot = await getDocs(q);
        const articles = [];
        querySnapshot.forEach((doc) => {
            // Avoid including the current article in the recommended list
            if (doc.id !== id) {
                articles.push({ ...doc.data(), id: doc.id });
            }
        });
        setRecommendedArticles(articles);
    };

    // Function to create markup from the CKEditor data
    const createMarkup = (html) => {
        // Create a temporary DOM element to manipulate the HTML string
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        // Find all <a> tags in the content
        const links = tempDiv.querySelectorAll('a');

        // Set the target attribute to '_blank' for each link
        links.forEach(link => {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer'); // For security reasons
        });

        // Return the modified HTML as an object expected by dangerouslySetInnerHTML
        return { __html: tempDiv.innerHTML };
    };

    return (
        <main id="main">
            {article && (
                <section className="single-post-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-lg-9 post-content">
                                <div className="single-post">
                                    {/* Render the first image at the top if it exists */}
                                    {article.paragraphs[0].image && (
                                        <figure className="my-4">
                                            {/* Ensure that the link property exists and is not empty */}
                                            {article.paragraphs[0].link ? (
                                                <a href={article.paragraphs[0].link} target="_blank" rel="noopener noreferrer">
                                                    <img src={article.paragraphs[0].image} alt="" className="img-fluid" />
                                                </a>
                                            ) : (
                                                <img src={article.paragraphs[0].image} alt="" className="img-fluid" />
                                            )}
                                        </figure>
                                    )}
                                    <div className="d-flex">
                                        <div className="col-10 ">
                                            <div className="post-meta">
                                                <span className="date">{article.category}</span>
                                                <span className="mx-1"><CircleIcon fontSize='xsmall' /></span>
                                                <span>{new Date(article.timestamp?.toDate()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' }).toUpperCase()}</span>
                                            </div>
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
                                    {/* Render the rest of the paragraphs, subheadings, and images */}
                                    {article.paragraphs.map((para, index) => (
                                        <React.Fragment key={index}>
                                            {index !== 0 && para.subheading && <h2>{para.subheading}</h2>}
                                            {/* Use dangerouslySetInnerHTML to render the CKEditor content */}
                                            <div dangerouslySetInnerHTML={createMarkup(para.text)}></div>
                                            {index !== 0 && para.image && (
                                                <figure className="my-4">
                                                    {/* Ensure that the link property exists and is not empty */}
                                                    {para.link ? (
                                                        <a href={para.link} target="_blank" rel="noopener noreferrer">
                                                            <img src={para.image} alt="" className="img-fluid" />
                                                        </a>
                                                    ) : (
                                                        <img src={para.image} alt="" className="img-fluid" />
                                                    )}
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
                            <Recommend recommendedArticles={recommendedArticles} />
                        </div>
                    </div>
                </section>
            )}
        </main>
    )
}

export default Blogpost;