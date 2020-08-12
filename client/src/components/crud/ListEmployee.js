import React, { Component } from 'react';
import axios from 'axios';
//import TableRow from './TableRow';
import {Link} from 'react-router-dom';
import EmployeeService from './Services';


import './list.css';


class ListEmployee extends Component {
  constructor(props) {
      super(props);
      this.employeeService = new EmployeeService();
      this.state = { 
        employees: []
      };
    }
        
    componentDidMount = () => {
         this.getEmployeeList();
    }
      //GET EMPLOYEE LIST //ПОКАЗАТЬ СПИСОК СОТРУДНИКОВ
      getEmployeeList() {
       axios.get('/api/employees')
        .then((response) => {
          console.log(response);
          this.setState({ employees: response.data });
        })
        .catch((error) => {
          console.log(error);
        })
     }

 // To delete any employee
 deleteEmployee(empid) {
   this.employeeService.deleteEmployee(empid);
   this.getEmployeeList();
 }
     
      render() {

      const { employees } = this.state;  
      return (
        <div>

               <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i>Вернуться назад
              </Link>
        
              <h3 align="center">Таблица записей</h3>

          <div className="list-table">
          
          <table data-toggle="table" style={{ marginTop: 20 }}>
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th scope="col">Имя сотрудника</th>
                <th>Фамилия сотрудника</th>
                <th>Возраст</th>
                <th>Страна</th>
                <th>Адрес проживание</th>
                <th>Номер уд.лич</th>
                <th>ИИН</th>
                <th>Образование</th>
                <th>Специальность</th>
                <th>Статус</th>
                <th>Дата рождения</th>                             
            </tr>
            </thead>
            <tbody>
              {
                employees && employees.map((employee, i) => {
                  return (
                    <tr key={i}>
                      <td>{i}</td>
                  <td>{employee.first_name}</td>
                  <td>{employee.last_name}</td>
                  <td>{employee.age}</td>
                  <td>{employee.country}</td>
                  <td>{employee.adress}</td>
                  <td>{employee.identity_card}</td>
                  <td>{employee.id_card}</td>
                  <td>{employee.education}</td>
                  <td>{employee.speciality}</td>
                  <td>{employee.status}</td>
                  <td>{employee.date_of_birth}</td>

                  <td>
                   <Link to={"/editemployee/" + employee._id} className="btn btn-primary">Изменить</Link>
                 </td>
               
               <td>
                  <button onClick={() => this.deleteEmployee(employee._id)} className="btn btn-danger">Удалить</button>
               </td>
              </tr>

                  );
                })
              };
            </tbody>
          </table>
          </div>
        </div>
      );
    }
  }

  export default ListEmployee;