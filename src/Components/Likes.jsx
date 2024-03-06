import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import StarsIcon from '@mui/icons-material/Stars';
import '../App.css'

const Likes = ({ id, likes }) => {
    const [user] = useAuthState(auth);
    const likesRef = doc(db, "blogpost", id);

    const handleLike = () => {
        if (likes?.includes(user.uid)) {
            updateDoc(likesRef, {
                likes: arrayRemove(user.uid),
            }).then(() => {
                console.log("unliked");
            }).catch((e) => {
                console.log(e);
            });
        }
        else {
            updateDoc(likesRef, {
                likes: arrayUnion(user.uid)
            }).then(() => {
                console.log("liked");
            }).catch((e) => {
                console.log(e);
            });
        }
    };
    return (
        <div>
            <StarsIcon
                className="likestar"
                style={{
                    cursor: "pointer",
                    color: likes?.includes(user.uid) ? "gold" : null,
                }}
                onClick={handleLike}
            />
        </div>
    );
}


export default Likes