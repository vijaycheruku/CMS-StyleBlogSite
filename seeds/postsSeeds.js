const { Post } = require('../models');

const postData = [{
        title: 'Seeds comment 1',
        content: 'Content 1.',
        user_id: 1

    },
    {
        title: 'Seeds comment 2',
        content: 'Content 2.',
        user_id: 2
    },
    {
        title: 'Seeds comment 3',
        content: 'Content 3.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;