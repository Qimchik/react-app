import { getCoursesList, login, removeCourse, getCourse, saveCourse } from '../helpers/drivers';
import { history } from '../store/config';

export const REQUEST_COURSES_LIST = dispatch => (token, filter) => {
  dispatch({ type: 'REQUEST_COURSES_LIST' });
  getCoursesList(dispatch, 'SUCCESS_COURSES_LIST_SUBMIT', 'FAILURE_COURSES_LIST_SUBMIT', token, filter);
};

export const REQUEST_LOGIN = dispatch => (payload) => {
  const resolve = (data) => {
    dispatch({ type: 'SUCCESS_LOGIN', payload: data });
    history.push('/courses');
  };
  const reject = (data) => {
    dispatch({ type: 'FAILURE_LOGIN', payload: data });
  };
  dispatch({ type: 'REQUEST_LOGIN' });
  login(dispatch, resolve, reject, payload);
};

export const LOGOUT = dispatch => () => {
  history.push('/');
  dispatch({ type: 'LOGOUT' });
};

export const REQUEST_COURSE_REMOVE = dispatch => (id, token) => {
  dispatch({ type: 'REQUEST_COURSE_REMOVE' });
  const resolve = (data) => {
    dispatch({ type: 'SUCCESS_REQUEST_COURSE_REMOVE' });
  };
  removeCourse(dispatch, resolve, 'FAILURE_REQUEST_COURSE_REMOVE', id, token);
};

export const REQUEST_COURSE = dispatch => (id, token) => {
  dispatch({ type: 'REQUEST_COURSE' });
  getCourse(dispatch, 'SUCCESS_REQUEST_COURSE', 'FAILURE_REQUEST_COURSE', id, token);
};

export const REQUEST_SAVE_COURSE = dispatch => (token, payload) => {
  dispatch({ type: 'REQUEST_SAVE_COURSE' });
  saveCourse(dispatch, 'SUCCESS_REQUEST_SAVE_COURSE', 'FAILURE_REQUEST_SAVE_COURSE', token, payload);
};

export const NEW_COURSE = dispatch => () => {
  dispatch({ type: 'NEW_COURSE', payload: {id: '' + Math.round(Math.random() * 1000)} });
};
