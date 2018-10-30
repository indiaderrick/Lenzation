const mongoose = require('mongoose');
const Post = require('../models/post');
const User = require('../models/user');
const env = require('../config/environment');
mongoose.connect(env.dbUri);

Post.collection.drop();
User.collection.drop();

const userData = [{
  picture: 'asvajb',
  username: 'india',
  email: 'i@i.com',
  password: 'i'
},
{
  picture: 'sdjhcvadjc',
  username: 'matt',
  email: 'm@m.com',
  password: 'm'
}];

User
  .create(userData)
  .then(users => {
    console.log(`${users.length} users created!`);
    Post
      .create([{
        addedBy: users[0],
        image: 'https://tocka.com.mk/images/gallery/gallery-images/big/1222/gal41242904.jpg',
        caption: 'Swan Lake',
        date: 270718,
        location: 'NY'
      },
      {
        addedBy: users[0],
        image: 'https://ecophiles.com/wp-content/uploads/2016/11/switzerland-zermatt-joshua-earle-1024-x-683-759x500.jpg',
        caption: 'Cow grazing',
        date: 160101,
        location: 'London'
      },
      {
        addedBy: users[1],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMu8fC9f28oP8C0gD2j7jd8DBy9_Ru96x-lmLv-Grs-FvL_AC2Og',
        caption: 'Cow grazing',
        date: 160894,
        location: 'Suffolk'
      }])
      .then(posts => {
        console.log(`created ${posts.length} posts!`);
        mongoose.connection.close();
      });
  });
