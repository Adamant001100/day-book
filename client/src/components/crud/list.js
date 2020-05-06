import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import {Link} from 'react-router-dom';

import './list.css';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('http://localhost:5000/business')
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.business.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>

               <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i>Вернуться назад
              </Link>
        
          <h3 align="center">Лист</h3>

          <div className="list-table">
          <table data-toggle="table" style={{ marginTop: 20 }}>
            <thead className="thead-dark">
              <tr>
                <th scope="col">Имя сотрудника</th>
                <th>Фамилия сотрудника</th>
                <th>Наименование товара</th>
                <th>Серийный номер</th>
                <th>СКЛАД</th>
                <th>ОС</th>
                <th>ДАТА</th>
                <th colSpan="2">Действие</th>

             
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
          </div>
        </div>
      );
    }
  }