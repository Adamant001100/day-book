// business.route.js
const express = require('express');
const businessRoutes = express.Router();
const keys = require('../config/keys');

// Require Business model in our routes module
// Добавление моделя
let Business = require('../models/business.model');

//........................................................................//
// Defined store route
// API/ADD/Business
businessRoutes.post('/', (req, res) => {
  const {
    person_name,
    last_name,
    business_name,
    business_gst_number,
    storage,
    os,
    date } = req.body;

      const newBusiness = new Business({
      person_name: person_name,
      last_name: last_name,
      business_name: business_name,
      business_gst_number,
      storage: storage,
      os: os,
      date: date
    })

    newBusiness.save()
       .then(() => res.json({
         message: "Created successfully"
       }))
       .catch(err => res.status(400).json({
         "error": err,
         "message": "Error creating"
       }))
})

//........................................................................//


//........................................................................//
// Defined get data(index or listing) route
// получение данных
businessRoutes.get('/', (req, res) => {
  Business.find()
            .then(business => res.json(business))
            .catch(err => console.log(err))
});
//........................................................................//


//........................................................................//
// Маршрут Редактирование
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});
//........................................................................//

//........................................................................//


//  update route
// Маршрут обновления
businessRoutes.route('/update/:id').post((req, res) => {
  Business.findById(req.params.id)
  .then(business => {
    business.person_name = req.body.person_name;
    business.last_name = req.body.last_name;
    business.business_name = req.body.business_name;
    business.business_gst_number = req.body.business_gst_number;
    business.storage = req.body.storage;
    business.os = req.body.os;
    business.date = Date.parse(req.body.date);

    business.save()
    .then(() => res.json('Data updated!'))
    .catch(err => res.status(400).json('Error:' + err));
  })
  .catch(err => res.status(400).json('Error:' + err));
});
   
//..........................................................................//


// Defined delete | remove | destroy route
// Маршрут удаления
businessRoutes.route('/delete/:id').get(function (req, res) {
  Business.findByIdAndDelete({_id: req.params.id}, function(err, business){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


module.exports = businessRoutes;