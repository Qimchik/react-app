import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import './courses.css';

class Courses extends Component {
  render() {
    const courses = [
      {
        id: '111',
        name: 'JS course',
        time: '2 hour 28 min',
        descrition: 'bla-bla-bla',
        date: '1.12.2018'
      },
      {
        id: '112',
        name: 'HTML course',
        time: '1 hour 10 min',
        descrition: 'bla-bla-bla',
        date: '2.12.2018'
      },
      {
        id: '113',
        name: 'CSS course',
        time: '0 hour 20 min',
        descrition: 'bla-bla-bla',
        date: '3.11.2018'
      },
    ];
    return (
      <div className="Courses">
        <div className="top-menu">
          <div>
            <TextField/>
            <button className="btn btn-primary">Search</button>
          </div>
          <button className="btn btn-primary">Add course</button>
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
            {courses.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.descrition}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
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

export default Courses;
