let getPostComments = async (postID) => {
    let comments = await fetch('https://jsonplaceholder.typicode.com/posts/' + postID + '/comments')
        .then(value => value.json());
    return comments;
};

export {getPostComments};