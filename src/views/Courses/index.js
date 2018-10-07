import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import { REQUEST_COURSES_LIST, REQUEST_COURSE_REMOVE } from '../../store/actions';
import { history } from '../../store/config';
import './courses.css';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
    this.searchClick = this.searchClick.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
  }

  componentDidMount() {
    this.searchClick();
  }

  shouldComponentUpdate(nextProps, nextState ) {
    if (!nextProps.courses) {
      this.searchClick();
      return false;
    }
    return true;
  }
  searchClick() {
    this.props.REQUEST_COURSES_LIST(this.props.token, this.state.filter);
  }

  filterChanged(e) {
    this.setState({ filter: e.currentTarget.value });
  }

  render() {
    return (
      <div className="Courses">
        <div className="top-menu">
          <div>
            <TextField onChange={this.filterChanged} />
            <button className="btn btn-primary" onClick={this.searchClick}>Search</button>
          </div>
          <button onClick={() => history.push(`/detail/new`)} className="btn btn-primary">Add course</button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell>time</TableCell>
              <TableCell>descrition</TableCell>
              <TableCell>date</TableCell>
              <TableCell>actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.courses && this.props.courses.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.descrition}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <button onClick={() => history.push(`/detail/${row.id}`)} className="btn btn-primary">Edit</button>
                    <button onClick={() => this.props.REQUEST_COURSE_REMOVE(row.id, this.props.token)} className="btn btn-danger">Delete</button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.filter,
  courses: state.courses,
  token: state.currentUser.token,
});
const mapDispatchToProps = dispatch => ({
  FILTER_CHANGED: payload => dispatch({type: 'COURSES_FILTER_CHANGED', payload}),
  REQUEST_COURSES_LIST: REQUEST_COURSES_LIST(dispatch),
  REQUEST_COURSE_REMOVE: REQUEST_COURSE_REMOVE(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
