let getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
};

let getPost = (postID) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + postID)
        .then(value => value.json());
};

export {getPosts, getPost};