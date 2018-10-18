import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import course from './reducers/course';
import courses from './reducers/courses';
import currentUser from './reducers/currentUser';

const initial = {};

const appReducer = combineReducers({
  course,
  courses,
  currentUser,
  routing: routerReducer,
});

function rootReducer(state = initial, { type, payload }) {
  if (type === 'LOGOUT') {
    return {};
  }

  return appReducer(state, { type, payload });
}

export default rootReducer;
