import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { REQUEST_COURSE, REQUEST_SAVE_COURSE, NEW_COURSE } from '../../store/actions';
import { history } from '../../store/config';
import './detail.css';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
  }
  componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      this.props.REQUEST_COURSE(this.props.match.params.id, this.props.token);
    } else {
      this.props.NEW_COURSE();
    }
  }
  save(e){
    e.preventDefault();
    const data = {
      id: e.target[0].value,
      name: e.target[1].value,
      time: e.target[2].value,
      descrition: e.target[3].value,
      date: e.target[4].value,
    };
    this.props.REQUEST_SAVE_COURSE(this.props.token, data);
  }
  render() {
    return (
      this.props.course.id ? <form className="detail" key={this.props.course.id} onSubmit={this.save}>
        <TextField className="detail-input" placeholder="id" disabled={true} defaultValue={this.props.course.id}/>
        <TextField className="detail-input" placeholder="name" defaultValue={this.props.course.name}/>
        <TextField className="detail-input" placeholder="time" defaultValue={this.props.course.time}/>
        <TextField className="detail-input" placeholder="Description" defaultValue={this.props.course.descrition}/>
        <TextField className="detail-input" placeholder="date" defaultValue={this.props.course.date}/>

        <div className="action-group">
          <button className="btn btn-primary">Save</button>
          <button onClick={() => history.push('/courses')} className="btn btn-secondary">Cancle</button>
        </div>
      </form> : null
    );
  }
}

const mapStateToProps = state => ({
  course: state.course,
  token: state.currentUser.token,
});
const mapDispatchToProps = dispatch => ({
  REQUEST_COURSE: REQUEST_COURSE(dispatch),
  REQUEST_SAVE_COURSE: REQUEST_SAVE_COURSE(dispatch),
  NEW_COURSE: NEW_COURSE(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
