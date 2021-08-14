let url = 'https://jsonplaceholder.typicode.com/users';

let getUsers = () => {
    return fetch(url).then(value => value.json());
}

let getUser = (id) => {
    return fetch(url + '/' + id).then(value => value.json());
}

export {getUser, getUsers};