import courses from '../../store/reducers/course';

const initial = {};

describe('reducers test', () => {
  it('reducer REQUEST_COURSE', () => {
    const action = {
      type: 'REQUEST_COURSE',
      payload: {value: 'test'}
    };
    expect(courses(initial, action)).toEqual(initial)
  })

  it('reducer SUCCESS_REQUEST_COURSE', () => {
    const action = {
      type: 'SUCCESS_REQUEST_COURSE',
      payload: {value: 'test'}
    };
    expect(courses(initial, action)).toEqual(action.payload)
  })

  it('reducer FAILURE_REQUEST_COURSE', () => {
    const action = {
      type: 'FAILURE_REQUEST_COURSE',
      payload: {value: 'test'}
    };
    expect(courses(initial, action)).toEqual(initial)
  })

  it('reducer NEW_COURSE', () => {
    const action = {
      type: 'NEW_COURSE',
      payload: {value: 'test'}
    };
    expect(courses(initial, action)).toEqual(action.payload)
  })
});
