import React from 'react';
import { Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';

const Recommend = ({ recommendedArticles }) => {
    return (
        <div className="col-md-3 col-lg-3">
            <div className="aside-block">
                <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link cursor-na">Recommended for you</button>
                    </li>
                </ul>
                {recommendedArticles.map((article) => (
                    <div className="tab-content" key={article.id}>
                        <div className="tab-pane fade show active">
                            <div className="post-entry-1 border-bottom">
                                <div className="post-meta">
                                    <span className="date">{article.category}</span>
                                    <span className="mx-1"><CircleIcon fontSize='xsmall' /></span>
                                    <span>{new Date(article.timestamp?.toDate()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' }).toUpperCase()}</span>
                                </div>
                                <h2 className="mb-2 fontAlter">
                                    <Link to={`/blogpost/${article.id}`}>{article.title}</Link>
                                </h2>
                                <span className="author mb-3 d-block fontBase">{article.author}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommend;