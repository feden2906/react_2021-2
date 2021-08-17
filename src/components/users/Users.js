import {useEffect, useState} from "react";
import {getUsers} from "../services/user.service";
import User from "../user/User";
import Posts from "../posts/Posts";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState(undefined);

    let sendPostsOfUser = (value) => {
        setPosts([...value]);
    }

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return(
        <div>
            <div>
                {
                    users.map(value => <User key={value.id} value={value} sendPostsOfUser={sendPostsOfUser}/>)
                }
            </div>

            {posts && <Posts value={posts}/>}
        </div>
    );
}