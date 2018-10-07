const initial = {};

function filters(state = initial, { type, payload }) {
  switch (type) {
    case 'DRIVERADMINS_FILTER_CHANGED': return { ...state, driverAdmins: payload.currentTarget.value };
    case 'DRIVERS_FILTER_CHANGED': return { ...state, drivers: payload.currentTarget.value };
    case 'CUSTOMERS_FILTER_CHANGED': return { ...state, customers: payload.currentTarget.value };
    case 'ORDERS_FILTER_CHANGED': return { ...state, orders: payload.currentTarget.value };
    case 'ADMINS_FILTER_CHANGED': return { ...state, admins: payload.currentTarget.value };
    case 'REPORTS_FILTER_CHANGED': return { ...state, reports: payload.currentTarget.value };
    case '@@router/LOCATION_CHANGE': return initial;
    default: return state;
  }
}

export default filters;
