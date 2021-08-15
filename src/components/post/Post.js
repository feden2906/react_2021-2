import Comments from "../comments/Commetns";

export default function Post({value:{id, title}}) {
    return(
        <ul>
            <li>{id} - {title}</li>
            <Comments postID={id}/>
        </ul>
    );
}