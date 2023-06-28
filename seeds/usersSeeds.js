const { User } = require('../models');

const userData = [{
        username: 'user1',
        password: 'pwd1'

    },
    {
        username: 'user2',
        password: 'pwd2'
    },
    {
        username: 'user3',
        password: 'pwd3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;