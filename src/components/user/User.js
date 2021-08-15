import Posts from "../posts/Posts";

export default function User({value:{id, name, username, email}}) {
    return(
        <div>
            <h5>{id} - {name} {username}</h5>
            <p>{email}</p>
            <Posts userID={id}/>
        </div>
    );
}