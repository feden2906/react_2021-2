import {getPosts} from "../services/post.service";
import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);

    return(
        <div>
            <p>Posts:</p>
            <ul>
                {
                    posts.map(value => <Post key={value.id} value={value}/>)
                }
            </ul>
        </div>
    );
}
