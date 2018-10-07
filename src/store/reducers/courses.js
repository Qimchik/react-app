const initial = [];

function courses(state = initial, { type, payload }) {
  switch (type) {
    case 'SUCCESS_COURSES_LIST_SUBMIT': return payload;
    case 'FAILURE_COURSES_LIST_SUBMIT': return [];
    case 'SUCCESS_REQUEST_COURSE_REMOVE': return false;
    default: return state;
  }
}

export default courses;
