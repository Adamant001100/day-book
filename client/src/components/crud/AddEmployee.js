import React, { Component } from "react";
import axios from "axios";
import { DatePicker } from "@y0c/react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import "dayjs/locale/ru";

import "./red.scss";
import "./AddEmployee.css";

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      age: "",
      country: "",
      adress: "",
      identity_card: "",
      id_card: "",
      education: "",
      speciality: "",
      status: "",
      date_of_birth: new Date(),
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To add new employee when user submits the form
  //================================================================//
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      age,
      country,
      adress,
      identity_card,
      id_card,
      education,
      speciality,
      status,
      date_of_birth,
    } = this.state;

    axios
      .post("/api/employees/addEmployee", {
        first_name: first_name,
        last_name: last_name,
        age: age,
        country: country,
        adress: adress,
        identity_card: identity_card,
        id_card: id_card,
        education: education,
        speciality: speciality,
        status: status,
        date_of_birth: date_of_birth,
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //========================================================================//

  render() {
    return (
      <div className="Create-Border">
        <Link to="/" className="btn-flat waves-effect">
          <i className="material-icons left">keyboard_backspace</i>Вернуться
          назад
        </Link>
        <div style={{ marginTop: 40 }}>
          <h3 align="center">Заполните данные:</h3>

          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Имя сотрудника: </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault01"
                      name="first_name"
                      value={this.state.first_name}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Фамилия сотрудника: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      value={this.state.last_name}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Возраст: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="age"
                      value={this.state.age}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Страна: </label>
                    <input
                      className="form-control"
                      id="country"
                      required
                      name="country"
                      value={this.state.country}
                      onChange={this.handleChange}
                   />
                    
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Адрес проживание: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="adress"
                      value={this.state.adress}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Номер удостоверение: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="identity_card"
                      value={this.state.identity_card}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Ваш ИИН:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="id_card"
                      value={this.state.id_card}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Образование:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="education"
                      value={this.state.education}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Специальность:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="speciality"
                      value={this.state.speciality}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Статус сотрудника:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="status"
                      value={this.state.status}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Дата рождение:</label>

                    <div>
                      <DatePicker locale="ru" onChange={this.onChange} />
                      <br />
                      <hr />
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary mb-2">
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div> //End container form
    );
  }
}

export default AddEmployee;
