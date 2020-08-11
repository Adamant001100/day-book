const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

const users = require("./routes/users");


const employeeRoutes = require('./routes/Employee.route');

const port = process.env.PORT || 5000 ;


//bodyparser middleware
app.use(require('morgan')('dev')); //Служит для логирования определенных запросов
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require('cors')()); //Для обработки запроса

mongoose.connect('mongodb+srv://dbAdamant:001100@cluster0-dmpcq.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(() => console.log("MongoDB Atlas connected"))
.catch(err => console.log(err));


//-------------Passport middleware------------------//
 app.use(passport.initialize());
   //Passport config 
   require("./config/passport")(passport);
//----------------Passport---------------------//


//API///
app.use("/users", users);
app.use("/api/employees", employeeRoutes); //Есть изменение 11.08.20
app.listen(port, () => console.log(`Server is running port ! ${port}`));


