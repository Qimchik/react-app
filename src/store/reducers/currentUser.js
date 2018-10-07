const initial = {};

function currentUser(state = initial, { type, payload }) {
  switch (type) {
    case 'SUCCESS_LOGIN':
      return { ...payload };
    case 'LOGOUT':
      return {};
    case 'FAILURE_LOGIN': return { ...payload, status: 'error'};
    default: return state;
  }
}

export default currentUser;
