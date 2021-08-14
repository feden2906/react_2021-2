export default function User({value: {id, username, name, email}}) {

    return(
        <div>
            <p>{id} - {username}</p>
            <h4>{name}</h4>
            <p>{email}</p>
            <hr/>
        </div>
    );
}