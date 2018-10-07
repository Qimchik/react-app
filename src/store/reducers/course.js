const initial = {};

function courses(state = initial, { type, payload }) {
  switch (type) {
    case 'REQUEST_COURSE': return {};
    case 'SUCCESS_REQUEST_COURSE': return payload;
    case 'FAILURE_REQUEST_COURSE': return {};
    case 'NEW_COURSE': return payload;
    default: return state;
  }
}

export default courses;
