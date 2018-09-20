import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './detail.css';

class Detail extends Component {
  render() {
    return (
      <form className="detail">
        <TextField className="detail-input" placeholder="id"/>
        <TextField className="detail-input" placeholder="name"/>
        <TextField className="detail-input" placeholder="time"/>
        <TextField className="detail-input" placeholder="Descrition" multiline/>
        <TextField className="detail-input" placeholder="date"/>

        <div className="action-group">
          <button className="btn btn-primary">Save</button>
          <button className="btn btn-secondary">Cancle</button>
        </div>
      </form>
    );
  }
}

export default Detail;
