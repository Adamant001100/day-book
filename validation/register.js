const Validator = require("validator");
const isEmpty = require("is-empty");

  module.exports = function validateRegisterInput(data) {

    let errors = {};

    //// Convert empty fields to an empty string so we can use validator
   //Преобразование пустые поля в пустую строку, чтобы  использовать валидатор
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";
    data.password2 = !isEmpty(data.password2) ? data.password2: "";

   
    //Name checks/Проверка имени
     if(Validator.isEmpty(data.name)) {
        errors.name = "Имя поле обязательно для заполнение";
    }

    //Email checks/Првоерка email адреса
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email обязательно для заполнение"
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email недействителен";
    }

    //Password checks/Проверка пароля
    if(Validator.isEmpty(data.password)) {
        errors.password = "Поле для ввода пароля обязательно для заполнения";
    }


    if(Validator.isEmpty(data.password2)) {
        errors.password2 = "Поле для подтверждения пароля";
    }



    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Пароль должен содержать не менее 6 символов";
    }


    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Ваш пароль должен совпадать";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

};