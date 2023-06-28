const users = require('./usersSeeds');
const posts = require('./postsSeeds');
const comments = require('./commentsSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await users();
  console.log('\n----- comments SEEDED -----\n');

  await posts();
  console.log('\n----- posts SEEDED -----\n');

  await comments();
  console.log('\n----- users SEEDED -----\n');

  process.exit(0);
};

seedAll();
