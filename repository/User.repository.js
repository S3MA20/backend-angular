const connection = require('../database/connection');

const {USER_ROLE} = require('../constants');

const registerUser = (user) => {
    const { username, email, password } = user;
    const queryUser = `INSERT INTO user (username,email,password,role) VALUES (?,?,?,?)`;
    return new Promise((resolve,reject) => {
        connection.query(queryUser, [username, email, password, USER_ROLE], (err, result,) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const register = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            const id = await saveUser(user);
            await saveProfile(user,id);
            resolve('Profile successfully created')
        }catch (error){
            reject(eror)
        }

    });
}

const saveUser = (user) => {
    const { username, emailAdress, password } = user;
    const queryUser = `INSERT INTO user (username,emailAddress,password,role) VALUES (?,?,?,?)`;
    return new Promise((resolve,reject) => {
        connection.query(queryUser, [username, email, password, USER_ROLE], (err, result,) => {
            if(err) return reject(err);
            resolve(result.insertId);
        });
    });
}

const saveProfile = (user, id) => {
    const { firstName,lastName,address } = user;
    const queryUser = `INSERT INTO profile (id,firstName,lastName,address) VALUES (?,?,?,?)`;
    return new Promise((resolve,reject) => {
        connection.query(queryUser, [id, firstName, lastName, address], (err, result,) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    register
}