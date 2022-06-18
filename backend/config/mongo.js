const {MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017/proShop';

// Connect to the db
const mongoDb = async () =>{
    try{
        const conn = await MongoClient.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('mongo db is connected!')
        
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }

}

module.exports = mongoDb