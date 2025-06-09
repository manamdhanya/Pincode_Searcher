const users = []

const create = async (user) => {
    users.push(user)
    return user
}

const findOne = async ({ email, password }) => {
    return users.find(user => user.email === email && user.password === password)
}

module.exports = {create,findOne}