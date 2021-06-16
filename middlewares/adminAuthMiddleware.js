const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Users} = require('../database/models')

// const pay = {
//     id: 1
// }
// const token = jwt.sign(pay, 'secret_key')
// console.log(token)
//  Users.count({
//     where:{
//         id:1,
//         role:0
//     }
// }).then(res => {
//     console.log(res)
// })

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    const adminData  = jwt.verify(token, 'secret_key');
    // console.log(adminData)
    const isFind = await Users.count({
        where:{ 
            id: adminData.id,
            role:0
        }
    })
    if (!isFind) {
        res.send({
            message: 'invalid'
        })
    } else {
        next()
    }
};

  module.exports = authMiddleware;