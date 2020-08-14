// business.route.js
const express = require('express');
const app = express();
const employeeRoute = express.Router();
const keys = require('../config/keys');

// Require Business model in our routes module
// Добавление моделя
let employeeModel = require('../models/Employee');

//........................................................................//
// Defined store route
// API/ADD/Business
//To Get List Of Employees
employeeRoute.route('/').get(function (req, res) {
  employeeModel.find(function (err, employee) {
    if(err) {
      console.log(err);
    }
    else {
      res.json(employee);
    }
  });
});
//........................................................................//


//........................................................................//
 // To Add New Employee
 //Добавить нового сотрудника
employeeRoute.route('/addEmployee').post(function (req, res) {
   let employee = new employeeModel(req.body);
   employee.save()
   .then(() => {
     res.status(200).json({'employee': 'Employee Added Successfully' });
   })
   .catch(err => {
     res.status(400).send("Something Went Wrong")
   });
 });
//........................................................................//


//........................................................................//
//To Get Employee Details By Employee ID
employeeRoute.route('/editEmployee/:id').get(function (req, res) {
  let id = req.params.id;
  employeeModel.findById(id, function (err, employee) {
    res.json(employee);
  });
});
//..........................................................................//


//........................................................................../
// To Update The Employee Details
employeeRoute.route('/updateEmployee/:id').post(function (req, res) {
  employeeModel.findById(req.params.id, function (err, employee) {
    if(!employee)
    return next(new Error('Unable To Find Employee With This Id'));
    else {
      employee.first_name = req.body.first_name;
      employee.last_name = req.body.last_name;
      employee.age = req.body.age;
      employee.country = req.body.country;
      employee.adress = req.body.adress;
      employee.identity_card = req.body.identity_card; //номер уд.лич
      employee.id_card = req.body.id_card //ИИН уд.лич
      employee.education = req.body.education;
      employee.speciality = req.body.speciality;
      employee.status = req.body.status;
      employee.date_of_birth = Date.parse(req.body.date);

      employee.save().then(employee => {
        res.json('Employee Updated Successfully');
      })
      .catch(err => {
        res.status(400).send("Unable To Update Employee");
      });
    };
  });
});

//..........................................................................//

//..........................................................................//
// To Delete The Employee
employeeRoute.route('/deleteEmployee/:id').get(function (req, res) {
  employeeModel.findByIdAndRemove({_id: req.params.id }, function (err, employee) {
    if(err) res.json(err);
    else res.json('Employee Deleted Successfully');
  });
});
//..........................................................................//

module.exports = employeeRoute;