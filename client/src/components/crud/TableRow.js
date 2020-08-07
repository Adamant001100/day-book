import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('api/business/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr className="table table-bordered">
          <td>
            {this.props.obj.person_name}
          </td>
          <td>
            {this.props.obj.last_name}
          </td>
          <td>
            {this.props.obj.business_name}
          </td>
          <td>
            {this.props.obj.business_gst_number}
          </td>

          <td>
            {this.props.obj.storage}
          </td>

          <td>
            {this.props.obj.os}
          </td>

        <td>
            {this.props.obj.date}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Изменить</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Удалить</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;