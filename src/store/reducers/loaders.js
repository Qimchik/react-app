const initial = {};

function entities(state = initial, { type }) {
  switch (type) {
    case 'REQUEST_CUSTOMER_LIST': return { ...state, customerList: true };
    case 'SUCCESS_CUSTOMER_LIST_SUBMIT': return { ...state, customerList: false };
    case 'FAILURE_CUSTOMER_LIST_SUBMIT': return { ...state, customerList: false };
    case 'REQUEST_DRIVER_LIST': return { ...state, driverList: true };
    case 'SUCCESS_DRIVER_LIST_SUBMIT': return { ...state, driverList: false };
    case 'FAILURE_DRIVER_LIST_SUBMIT': return { ...state, driverList: false };
    case 'REQUEST_ADMIN_LIST': return { ...state, adminList: true };
    case 'SUCCESS_ADMIN_LIST_SUBMIT': return { ...state, adminList: false };
    case 'FAILURE_ADMIN_LIST_SUBMIT': return { ...state, adminList: false };
    case 'REQUEST_ORDER_LIST': return { ...state, orderList: true };
    case 'SUCCESS_ORDER_LIST_SUBMIT': return { ...state, orderList: false };
    case 'FAILURE_ORDER_LIST_SUBMIT': return { ...state, orderList: false };
    case 'REQUEST_LOGIN': return { ...state, loginForm: true };
    case 'SUCCESS_LOGIN': return { ...state, loginForm: false };
    case 'FAILURE_LOGIN': return { ...state, loginForm: false };
    default: return state;
  }
}

export default entities;
