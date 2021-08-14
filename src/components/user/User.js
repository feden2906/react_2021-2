import Address from "../address/Address";

export default function User(props) {
    let {items:{id, name, username, email, address}} = props;
    return(
        <div>
            <h4>{id} - {username} - {name}</h4>
            <p>Email - {email}</p>
            <Address items={address}/>
            <hr/>
        </div>
    );
}