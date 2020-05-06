//Connecting libraries/Подключение библиотек
const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
//Преобразование пустые поля в пустую строку, чтобы использовать функции валидатора
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";


  // Email checks/Проверка Email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Поле email обязательно для заполнения";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email недействителен";
  }

  
  // Password checks/Проверка пароля
  if (Validator.isEmpty(data.password)) {
    errors.password = "Поле ввода для пароля обязательно для заполнение";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};