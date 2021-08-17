import {getPosts} from "../services/post.service";

export default function User({value, sendPostsOfUser}) {
    let {id, name, username, email} = value;

    let sendPosts = () => {
        getPosts(value.id).then(value => {
            console.log('User.js sending data');
            console.log(value);

            sendPostsOfUser(value);
        });
    }

    return(
        <div>
            <h5>{id} - {username}</h5>
            <p>{name}</p>
            <p>{email}</p>

            <button onClick={sendPosts}>Posts</button>
        </div>
    );
}