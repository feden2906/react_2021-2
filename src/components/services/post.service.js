const getPosts = (userID = 0) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + userID + '/posts')
        .then(value => value.json());
}

export {getPosts};