import {useEffect, useState} from "react";
import {getUserPosts} from "../services/post.service";
import Post from "../post/Post";

export default function Posts({userID}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getUserPosts(userID).then(value => setPosts(value));
    }, []);

    return(
        <ul>
            {
                posts.map(value => <Post key={value.id} value={value}/>)
            }
        </ul>
    );
}