import React, { useEffect, useState } from "react";
import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc, query, collection, where } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";
import DeleteIcon from '@mui/icons-material/Delete';
import '../assets/css/main.css';
import '../assets/css/variables.css';




const Comment = ({ id }) => {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [currentlyLoggedinUser] = useAuthState(auth);
    const commentRef = doc(db, "blogpost", id);


    useEffect(() => {
        const docRef = doc(db, "blogpost", id);
        onSnapshot(docRef, (snapshot) => {
            setComments(snapshot.data().comments);
        });
    }, []);



    const handleChangeComment = (e) => {
        if (e.key === "Enter") {
            updateDoc(commentRef, {
                comments: arrayUnion({
                    user: currentlyLoggedinUser.uid,
                    userName: currentlyLoggedinUser.displayName,
                    profile: currentlyLoggedinUser.photoURL,
                    comment: comment,
                    createdAt: new Date(),
                    commentId: uuidv4(),
                }),
            }).then(() => {
                setComment("");
            });
        }
    };

    // delete comment function
    const handleDeleteComment = (comment) => {
        console.log(comment);
        updateDoc(commentRef, {
            comments: arrayRemove(comment),
        })
            .then((e) => {
                console.log(e);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const getTimePassed = (createdAt) => {
        const timePassed = new Date() - createdAt.toDate();
        const secondsPassed = Math.floor(timePassed / 1000);
        const minutesPassed = Math.floor(secondsPassed / 60);
        const hoursPassed = Math.floor(minutesPassed / 60);
        const daysPassed = Math.floor(hoursPassed / 24);

        if (daysPassed > 0) {
            return `${daysPassed}d`;
        } else if (hoursPassed > 0) {
            return `${hoursPassed}h`;
        } else if (minutesPassed > 0) {
            return `${minutesPassed}m`;
        } else {
            return `${secondsPassed}s`;
        }
    }


    return (
        <div>
            <h5 className="comment-title pt-3 my-5">{comments.length} Comments</h5>
            <div className="container">
                {comments !== null &&
                    comments.map(({ commentId, user, comment, userName, createdAt, profile }) => (
                        <div key={commentId}>
                            <div className="p-2 mt-1 row">
                                <div className="comment d-flex align-items-start">
                                    <div className="col-1">
                                        <div className="avatar avatar-sm rounded-circle">
                                            <img src={profile} alt="" className="avatar-img img-fluid" />
                                        </div>
                                    </div>
                                    <div className="flex-shrink-1 col-11">
                                        <div className="comment-meta d-flex justify-content-center">
                                            <div className="col-11">
                                                <h6 className="ps-1 pt-2 me-2">{userName}<span className="text-muted ps-3">{getTimePassed(createdAt)} ago</span></h6>
                                            </div>
                                            <div className="col-1 ">
                                                {user === currentlyLoggedinUser?.uid && (
                                                    <DeleteIcon
                                                        className="fa fa-times"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => handleDeleteComment({ commentId, user, comment, userName, createdAt, profile })} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-body ps-5">
                                    {comment}
                                </div>
                            </div>
                        </div>
                    ))}
                {currentlyLoggedinUser && (
                    <input
                        type="text"
                        className="form-control mt-4 mb-5"
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                        placeholder="Add a comment"
                        onKeyUp={(e) => {
                            handleChangeComment(e);
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default Comment