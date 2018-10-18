import React from 'react';
import Enzyme, { mount } from 'enzyme'
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16'
import {Login} from '../../views/Login';

Enzyme.configure({ adapter: new Adapter() });

describe('renders without crashing', () => {
  it('should render self and subcomponents', () => {
    const REQUEST_LOGIN = jest.fn();
    const wrapper = mount( <Login REQUEST_LOGIN={REQUEST_LOGIN}/> );
    expect(wrapper.find(Login).find('input[type="password"]').length).toBe(1)
    wrapper.find('.login-form').simulate('submit');
    expect(REQUEST_LOGIN).toBeCalledWith({username: '', password: ''});
  })

  it('should render self and subcomponents', () => {
    const REQUEST_LOGIN = jest.fn();
    const password = 'password';
    const wrapper = mount( <Login REQUEST_LOGIN={REQUEST_LOGIN}/> );
    wrapper.find('input[type="password"]').simulate('change', {target: {value: password}});
    wrapper.find('.login-form').simulate('submit');
    expect(REQUEST_LOGIN).toBeCalledWith({username: '', password});
  })
});
