import courses from '../../store/reducers/currentUser';

describe('reducers test', () => {

  it('reducer SUCCESS_LOGIN', () => {
    const initial = {};
    const action = {
      type: 'SUCCESS_LOGIN',
      payload: {value: 'test'}
    };
    expect(courses(initial, action)).toEqual(action.payload)
  })

  it('reducer LOGOUT', () => {
    const initial = {};
    const action = {
      type: 'LOGOUT',
      payload: {value: 'test'}
    };
    expect(courses(initial, action)).toEqual(initial)
  })

  it('reducer FAILURE_LOGIN', () => {
    const initial = {};
    const action = {
      type: 'FAILURE_LOGIN',
      payload: {value: 'test'}
    };
    expect(courses(initial, action)).toEqual({...action.payload, status: 'error'})
  })
});
