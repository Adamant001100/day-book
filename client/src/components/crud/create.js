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
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onChangeStorage = this.onChangeStorage.bind(this);
    this.onChangeOS = this.onChangeOS.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      last_name: '',
      business_name: '',
      business_gst_number:'',
      storage: '',
      os: '',

      date: new Date(),
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
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onChangeStorage(e) {
    this.setState({
      storage: e.target.value
    })
  }

  onChangeOS(e) {
    this.setState({
      os: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }


  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      last_name: this.state.last_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number,
      storage: this.state.storage,
      os: this.state.os,
      date: this.state.date
    };
    axios.post('http://localhost:5000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      last_name: '',
      business_name: '',
      business_gst_number: '',
      storage: '',
      os: '',
      date: new Date()
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
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>

                <div className="form-group">
                    <label>Фамилия сотрудника:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.last_name}
                      onChange={this.onChangeLastName}
                      />
                </div>



                <div className="form-group">
                    <label>Наименование товара: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>Серийный номер: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_gst_number}
                      onChange={this.onChangeGstNumber}
                      />
                </div>

                <div className="form-group">
                    <label>СКЛАД: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.storage}
                      onChange={this.onChangeStorage}
                      />
                </div>


                <div className="form-group">
                    <label>ОС </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.os}
                      onChange={this.onChangeOS}
                      />
                </div>

 
                <div className="form-group">
                  <label>Выбрать дату:</label>
                   <div>
                     <DatePicker
                     locale='ru'
                     selected={this.state.date}
                     onChange={this.onChangeDate}
                     
                     />
                    <br />
                    <hr />
                    <br />


                    <div className="Create-Button">
                   <div className="form-group">
                    <input type="submit" 
                      value="Сохранить в базу данных" 
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