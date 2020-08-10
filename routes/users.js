const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

//------------------- Load input validation----------------------------------//
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

//-----------------------Load user model-----------------------------------//
const User = require("../models/User");
//------------------------------------------------------------------------//


//--------------------------------http://localhost:5000/users/register-----------------------------//
//---------------------------------------ROUTER REGISTER------------------------------------//
router.post("/register", (req, res ) => {
 
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Такой E-mail уже существует" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,     
      });

  
      // Hash password before saving in database
      //Хэширование пароля перед сохранением в базе данных
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//-----------------------------------END--ROUTER REGISTER------------------------------------//

//-------------------------------------ROUTER LOGIN------------------------------------//
                               //http://localhost:5000/users/login
router.post("/login", (req, res) => {
       // Form validation
     const { errors, isValid } = validateLoginInput(req.body);
  
    // Check validation/Проверка валидации
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const email = req.body.email;
    const password = req.body.password;
  
    // Find user by email/Найти пользователя по электронному адресу
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Электронная почта не найдена" });
      }
  
      // Check password/Проверка пароля
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched/Пользователь существует
          // Create JWT Payload/Создания загрузки
          const payload = {
            id: user.id,
            name: user.name
          };
  
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds/1 год в секундах
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Неверный пароль" });
        }
      });
    });
  });
//--------------------------------------END--ROUTER LOGIN---------------------------------------//

module.exports = router;


