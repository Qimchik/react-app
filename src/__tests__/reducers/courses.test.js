import courses from '../../store/reducers/courses';

describe('reducers test', () => {

  it('reducer SUCCESS_COURSES_LIST_SUBMIT', () => {
    const initial = [];
    const action = {
      type: 'SUCCESS_COURSES_LIST_SUBMIT',
      payload: {value: 'test'}
    };
    expect(courses(initial, action)).toEqual(action.payload)
  })

  it('reducer FAILURE_COURSES_LIST_SUBMIT', () => {
    const initial = [];
    const action = {
      type: 'FAILURE_COURSES_LIST_SUBMIT',
      payload: [{value: 'test'}]
    };
    expect(courses(initial, action)).toEqual(initial)
  })

  it('reducer SUCCESS_REQUEST_COURSE_REMOVE', () => {
    const initial = [];
    const action = {
      type: 'SUCCESS_REQUEST_COURSE_REMOVE',
      payload: [{value: 'test'}]
    };
    expect(courses(initial, action)).toEqual(false)
  })
});
