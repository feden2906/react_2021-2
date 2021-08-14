let url = 'https://jsonplaceholder.typicode.com/comments';

let getComments = () => {
    return fetch(url).then(value => value.json());
};

let getComment = (commentID) => {
    return fetch(url + '/' + commentID).then(value => value.json());
};

export {getComments, getComment};