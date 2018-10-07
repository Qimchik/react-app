import axios from 'axios';
import { history } from '../store/config';

const API_BASE_URL = 'http://localhost:3001';

const client = axios.create({
  baseURL: API_BASE_URL,
});

function checkAuth(res) {
  if (res.response.status === 401) {
    history.push('/login');
  }
}

function getDate(url, token) {
  return client({
    method: 'get',
    url,
  });
}

function postDate(url, data) {
  return client({
    method: 'post',
    url,
    data,
  });
}

export function getCoursesList(dispatch, resolve, reject, token, filter) {
  getDate(`/courses?token=${token}&search=${filter || ''}`)
    .then((payload) => {
      dispatch({ type: resolve, payload: payload.data });
    })
    .catch((error) => {
      checkAuth(error);
      dispatch({ type: reject, error });
    });
}

export function getCourse(dispatch, resolve, reject, id, token) {
  getDate(`/courses/${id}?token=${token}`)
    .then((payload) => {
      dispatch({ type: resolve, payload: payload.data });
    })
    .catch((error) => {
      checkAuth(error);
      dispatch({ type: reject, error });
    });
}

export function login(dispatch, resolve, reject, payload) {
  postDate('/login', { ...payload })
    .then((res) => {
      resolve(res.data);
    })
    .catch((error) => {
      checkAuth(error);
      reject(error.response.data);
    });
}

export function removeCourse(dispatch, resolve, reject, id, token) {
  getDate(`/delete/${id}?token=${token}`)
    .then((payload) => {
      resolve();
    })
    .catch((error) => {
      checkAuth(error);
      dispatch({ type: reject, error });
    });
}

export function saveCourse(dispatch, resolve, reject, token, payload) {
  postDate(`/save/?token=${token}`, { ...payload })
    .then((payload) => {
      dispatch({ type: resolve });
    })
    .catch((error) => {
      checkAuth(error);
      dispatch({ type: reject, error });
    });
}
