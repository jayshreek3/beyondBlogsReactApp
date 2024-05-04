import React, {useEffect, useState} from "react";
import {addDoc, collection} from'firebase/firestore'
import {db, auth} from "../firebase-config";
import{useNavigate} from "react-router-dom";

function CreatePost({isAuth}){

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db,"posts")
    let navigate = useNavigate();
    // func when we click it store firestores and stores in the db
    const createPost = async () => {
        await addDoc(postsCollectionRef, {title, postText, author: {name:auth.currentUser.displayName, id:auth.currentUser.uid}})
    // once you've created a post you want to switch to the homepage
        navigate("/");
    }
    useEffect(() => {
        if(!isAuth){
            navigate("/login") //pass isAuth as props to create post page
        }
    }, [isAuth, navigate]);
    return (
        <div className="createPostPage">
            {" "}
            <div className="cpContainer">
                <h1>Create a Post</h1>
                <div className="inputGp">
                    <label>Title</label>
                    <input placeholder="Title..." onChange={(event) => {setTitle(event.target.value);}}/>
                </div>
                <div className="inputGp">
                    <label>Post: </label>
                    <textarea placeholder="Post contents" onChange={(event) => {setPostText(event.target.value);}}></textarea>
                </div>
                <button onClick={createPost}>Submit Post</button>
            </div>

        </div>
    )
}

export default CreatePost;