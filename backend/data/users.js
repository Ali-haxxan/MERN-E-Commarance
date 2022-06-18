const bcrypt = require('bcryptjs')

const users = [
    {
        name:'Admin',
        email:'admin@proshop.com',
        password: bcrypt.hashSync('123456789',10),
        isAdmin:true
    },
    {
        name:'Awais',
        email:'Awais@gmail.com',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name:'Zubair',
        email:'Zubair@gmail.com',
        password: bcrypt.hashSync('123456',10)
    },
];

module.exports = users