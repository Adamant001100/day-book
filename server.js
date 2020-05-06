const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")
const app = express();

//-------------------USERS--------------------//
const users = require("./routes/users");
//-----------------END--USERS-----------------//

const businessRoute = require('./routes/business.route');

const port = process.env.PORT || 5000 ;

//bodyparser middleware
app.use(require('morgan')('dev')) //Служит для логирования определенных запросов
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(require('cors')()) //Для обработки запроса

//DB config
//const db = require("./config/keys").mongoURI;

//Connect to Mongodb
mongoose.connect('mongodb://127.0.0.1:27017/indriver', {useNewUrlParser: true } )
  .then(() => console.log('MongoDB connected Adamant. '))
  .catch(error => console.log(error))


  //-------------Passport middleware------------------//
   app.use(passport.initialize());

   //Passport config
   require("./config/passport")(passport);
//----------------Passport---------------------//


 app.use("/users", users);
 
 app.use("/business", businessRoute)


 app.listen(port, () => console.log(`Server is running port ! ${port}`))
