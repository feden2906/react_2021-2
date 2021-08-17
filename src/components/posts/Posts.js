import Post from "../post/Post";

export default function Posts({value}) {
    console.log('Posts.js taking data');
    console.log({value});

    return(
        <div>
            {
                value.map(value => <Post key={value.id} value={value}/>)
            }
        </div>
    );
}