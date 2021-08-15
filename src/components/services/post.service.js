let getUserPosts = async (userID) => {
    let posts = await fetch('https://jsonplaceholder.typicode.com/users/' + userID + '/posts')
        .then(value => value.json());
    return posts;
};

export {getUserPosts};