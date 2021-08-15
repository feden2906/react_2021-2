import {useEffect, useState} from "react";
import {getPostComments} from "../services/comment.service";
import Comment from "../comment/Comment";

export default function Comments({postID}) {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getPostComments(postID).then(value => setComments(value));
    }, []);

    return(
        <ul>
            {
                comments.map(value => <Comment key={value.id} value={value}/>)
            }
        </ul>
    );
}