let getUsers = async () => {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return users;
};

export {getUsers};