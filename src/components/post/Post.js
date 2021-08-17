export default function Post({value}) {
    console.log('Post.js taking data');
    console.log(value);

    let {userId, id, title, body} = value;

    return(
        <div>
            <p>User ID : {userId}</p>
            <p>Post ID : {id}</p>
            <p>Title : {title}</p>
            <p>Body : {body}</p>

            {/*     Как такое можно сделать ?           */}
            {/*     for (let key in value) {            */}
            {/*         <p>{key} : {value[key]}</p>     */}
            {/*     }                                   */}

        </div>
    );
}
