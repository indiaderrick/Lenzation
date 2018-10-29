const mongoose = require('mongoose');
const Post = require('../models/post');
const env = require('../config/environment');
mongoose.connect(env.dbUri);

Post.collection.drop();

const newPost = [{
  username: 'India',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtSGuwm33Ov_CBOr9pX0ztdUVu-03pCRBoFtNUG2Kp4P9_yFJ',
  caption: 'Swan Lake',
  date: 270718,
  location: 'NY'
},
{ username: 'Mia',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAbrAmDGJ1Y6si43Y5AtPZEajBakmybpyVwLHDkaCD3go9M1j8w',
  caption: 'Cow grazing',
  date: 160101,
  location: 'London'
},
{ username: 'Mish',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMu8fC9f28oP8C0gD2j7jd8DBy9_Ru96x-lmLv-Grs-FvL_AC2Og',
  caption: 'Cow grazing',
  date: 160894,
  location: 'Suffolk'
}
];

Post.create(newPost)
  .then(posts => {
    console.log(`created ${posts.length} posts!`);
    mongoose.connection.close();
  });

Post.create(newPost);
