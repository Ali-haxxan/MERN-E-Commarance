const express = require('express')
const products = require('./data/products.js')
const app = express()
const Sequelize = require('sequelize');
const connectDB = require('./config/mongo')
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser')
const route = require('./routes/web')


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))


////////////     ** sequelize db connection start **
const sql = new Sequelize("pro_shop", "root",
 "", {
  host: "localhost",
  port: "3306",
  dialect: "mysql"
 });

 sql.authenticate()
 .then(function () {
     console.log("Sequelize Database connected!");
 })
 .catch(function (err) {
     console.log("ERROR - Unable to connect to the database:", err);
 })

////////////     ** sequelize db connection end **


////////////     ** Mongo db connection start **

connectDB()
////////////     ** Mongo db connection end **


////////////     ** route path star **
app.use('/',route)
////////////     ** route path end **



const port = 5001
app.listen(port,console.log(`Server is running on http://localhost:${port}`))