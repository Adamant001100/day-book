import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

import './create.css';


class Create extends Component {
  constructor(props) {
    super(props);

    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeBusinessGstNumber = this.onChangeBusinessGstNumber.bind(this);
    this.onChangeStorage = this.onChangeStorage.bind(this);
    this.onChangeOs = this.onChangeOs.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
      person_name: '',
      last_name: '',
      business_name: '',
      business_gst_number:'',
      storage: '',
      os: '',
      date: new Date()
    }
}

onChangePersonName(e) {
  this.setState({
    person_name: e.target.value
  });
}

onChangeLastName(e) {
  this.setState({
    last_name: e.target.value
  });
}

onChangeBusinessName(e) {
  this.setState({
    business_name: e.target.value
  });
}

onChangeBusinessGstNumber(e) {
  this.setState({
    business_gst_number: e.target.value
  });
}

onChangeStorage(e) {
  this.setState({
    storage: e.target.value
  });
}

onChangeOs(e) {
  this.setState({
    os: e.target.value
  });
}

onChangeDate(date) {
  this.setState({
    date: date
  });
}
  //================================================================//
  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      last_name: this.state.last_name,
      business_name: this.state.business_name,
      business_gst_number: this.business_gst_number,
      storage: this.storage,
      os: this.os,
      date: this.date
    } = this.state;
  //========================================================================//


    
    axios.post("/api/business", obj ) 
           .then(res => console.log(res.data));
   

     this.setState({
       person_name: '',
       last_name: '',
       business_name: '',
       business_gst_number:'',
       storage: '',
       os: '',
       date: new Date(),
     })
   
  }


  render() {
    return (
      
      <div className="Create-Border">
      
               <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i>Вернуться назад
              </Link>
      <div style={{ marginTop: 10 }}>
            <h3 align="center">Заполните данные:</h3>
            <form onSubmit={this.onSubmit}>
              
                <div className="form-group">
                    <label>Имя сотрудника:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      //name="person_name"
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>

                <div className="form-group">
                    <label>Фамилия сотрудника:  </label>
                    <input 
                      type="text" 
                      className="form-control"
                      //name="last_name" 
                      value={this.state.last_name}
                      onChange={this.onChangeLastName}
                      />
                </div>



                <div className="form-group">
                    <label>Наименование товара: </label>
                    <input type="text" 
                      className="form-control"
                      name="business_name"
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>Серийный номер: </label>
                    <input type="text" 
                      className="form-control"
                      //name="business_gst_number"
                      value={this.state.business_gst_number}
                      onChange={this.onChangeBusinessGstNumber}
                      />
                </div>

                <div className="form-group">
                    <label>СКЛАД: </label>
                    <input type="text" 
                      className="form-control"
                      //name="storage"
                      value={this.state.storage}
                      onChange={this.onChangeStorage}
                      />
                </div>


                <div className="form-group">
                    <label>ОС </label>
                    <input 
                      type="text" 
                      className="form-control"
                      //name="os"
                      value={this.state.os}
                      onChange={this.onChangeOs}
                      />
                </div>

 
                <div className="form-group">
                  <label>Выбрать дату:</label>
                   <div>
                     <DatePicker
                  
                    
                     selected={this.state.date}
                     onChange={this.onChangeDate}
                     
                     />
                    <br />
                    <hr />
                    <br />


                    <div className="Create-Button">
                   <div className="form-group">
                    <input type="submit" 
                      value="Сохранить" 
                      className="btn btn-large" />
                      </div> 
            
                </div>
                   </div>
                </div>

            </form>
        </div>
        </div>
    )
  }
}

export default Create;