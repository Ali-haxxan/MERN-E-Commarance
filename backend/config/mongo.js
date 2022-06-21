const {MongoClient} = require('mongodb');
const { default: mongoose } = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/proShop';

// Connect to the db
const mongoDb =  () =>{
    mongoose.connect(
        url,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        () => {
          console.log("mongdb is connected");
        }
      );

}

module.exports = mongoDb