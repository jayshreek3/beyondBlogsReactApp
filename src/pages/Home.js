import React , {useState, useEffect} from "react";
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore'
import {db, auth} from "../firebase-config";

function Home(isAuth){
    const [postLists, setPostLists] = useState([]);
    const postsCollectionRef = collection(db,"posts")
    useEffect(() => {
        const getPosts = async () =>{
            const data = await getDocs(postsCollectionRef);
            setPostLists(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
        }
        getPosts();
    }, []);

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    }

    return (
        <div className="HomePage">
            {postLists.map((post) => (
                <div className="post-card" key={post.id}>
                    <div className="post-header">
                        <div className="title">
                            <h1>{post.title}</h1>
                        </div>
                        {auth.currentUser && (
                        <div className="deletePost">{isAuth && post.author.id === auth.currentUser.uid && (
                            <button onClick={()=>{
                            deletePost(post.id)
                        }}>
                            &#128465;
                        </button>)}</div>
                            )}
                    </div>
                    <div className="post-text-container">{post.postText}</div>
                    <div className="post-author">
                        <h3>@{post.author.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;