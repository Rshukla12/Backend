const users = ["albert", "nrupul", "aman"];

const getAllUsers = (page=1, limit=3) => {
    return users.slice( (page-1)*limit, page*limit );
};

const getUserById = (id) => {
    if ( id > users.length ) {
        throw new Error("Doesn't exits");
    }
    return users[id];
};

const createUser = (user) => {
    const id =  users.push(user) - 1;
    return id;
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser
};