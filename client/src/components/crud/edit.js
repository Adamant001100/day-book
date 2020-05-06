import React, { Component } from 'react';
import axios from 'axios';

import './edit.css';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeLastName= this.onChangeLastName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onChangeStorage = this.onChangeStorage.bind(this);
    this.onChangeOS = this.onChangeOS.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      last_name: '',
      business_name: '',
      business_gst_number:'',
      storage: '',
      os: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                person_name: response.data.person_name,
                last_name: response.data.last_name, 
                business_name: response.data.business_name,
                business_gst_number: response.data.business_gst_number,
                storage: response.data.storage,
                os: response.data.os });
        
        
              })
          .catch(function (error) {
              console.log(error);
          })
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

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      last_name: this.state.last_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number,
      storage: this.state.storage,
      os: this.state.os
    };
    axios.post('http://localhost:5000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div className="edit">
           
            <h3 align="center">Изменить данные</h3>

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
                    <label>ОС: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.os}
                      onChange={this.onChangeOS}
                      />
                </div>

                <div className="form-group">
                    <input type="submit" 
                      value="Обновить данные" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}