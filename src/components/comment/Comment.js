export default function Comment({value:{id, name, email}}) {
    return(<li>{id} - {email} - {name}</li>);
}