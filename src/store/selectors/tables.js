import { capitalizeFirstLetter } from '../../helpers/utils';

const tableCellFiltered = {
  customers: ['customer_name', 'status', 'postcode'],
  drivers: ['driver_name', 'status'],
  admins: ['driver_name', 'email'],
  orders: ['id'],
};

const nameOfColumn = {
  customers: {
    customer_id: 'ID',
    customer_name: 'Name',
    phonenumber: 'Number',
    email: 'Email',
  },
  drivers: {
    driver_id: 'ID',
    driver_name: 'Name',
    phonenumber: 'Number',
  },
  admins: {
    admin_id: 'ID',
  },
};

export const tableData = (state, entity) => {
  if (!state.entities[entity]) {
    return false;
  }
  const data = [...state.entities[entity]];
  const filter = state.filters[entity] && state.filters[entity].toLowerCase();
  const sort = state.sorts[entity];

  let tableDataFiltered;
  if (filter) {
    tableDataFiltered = data.filter((item) => {
      let toShow = false;
      let filters = tableCellFiltered[entity];
      if (!filters) {
        filters = Object.keys(data[0]) || [];
      }
      filters.forEach((key) => {
        const cell = (`${item[key]}`).toLowerCase();
        if (cell.includes(filter)) {
          toShow = true;
        }
      });

      return toShow;
    });
  } else {
    tableDataFiltered = data;
  }

  function compare(a, b) {
    if (a[sort.sortBy] < b[sort.sortBy]) { return -1; }
    if (a[sort.sortBy] > b[sort.sortBy]) { return 1; }
    return 0;
  }

  const sortedData = tableDataFiltered.sort(compare);

  return sort.sortDirection === 'ASC' ? sortedData : sortedData.reverse();
};

export const tableHead = (state, entity) => {
  if (!state.entities[entity] || !state.entities[entity].length) {
    return false;
  }
  const data = [...state.entities[entity]];
  const keys = Object.keys(data[0]).map(key => ({
    value: key,
    name: (nameOfColumn[entity] && nameOfColumn[entity][key]) || capitalizeFirstLetter(key),
  }));

  return keys;
};
