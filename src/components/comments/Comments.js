import {useEffect, useState} from "react";
import {getComments} from "../services/comment.service";
import Comment from "../comment/Commetn";

export default function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value]));
    }, []);

    return(
        <div>
            <p>Comments:</p>
            <ul>
                {
                    comments.map(value => <Comment key={value.id} value={value}/>)
                }
            </ul>
        </div>
    );
}