import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Column, Table, AutoSizer } from "react-virtualized";
import TextField from '@material-ui/core/TextField';
import { REQUEST_COURSES_LIST, REQUEST_COURSE_REMOVE } from '../../store/actions';
import { history } from '../../store/config';
import 'react-virtualized/styles.css'
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
        <div className='table'>
          <AutoSizer>
            {({width}) => (
              <Table
                width={width - 40}
                height={700}
                headerHeight={20}
                rowHeight={30}
                rowCount={this.props.courses.length}
                rowGetter={({ index }) => this.props.courses[index]}
              >
                <Column
                  dataKey="id"
                  label="#"
                  width={70}
                />
                <Column
                  dataKey="name"
                  label="Name"
                  width={300}
                />
                <Column
                  dataKey="time"
                  label="Time"
                  width={250}
                />
                <Column
                  dataKey="descrition"
                  label="Descrition"
                  width={350}
                />
                <Column
                  dataKey="date"
                  label="Date"
                  width={300}
                />
                <Column
                  label="Actions"
                  width={500}
                  cellRenderer={({rowData}) => (
                    <div>
                      <button onClick={() => history.push(`/detail/${rowData.id}`)} className="btn btn-primary">Edit</button>
                      <button onClick={() => this.props.REQUEST_COURSE_REMOVE(rowData.id, this.props.token)} className="btn btn-danger">Delete</button>
                    </div>
                  )}
                />
              </Table>
            )}
          </AutoSizer>
        </div>
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
