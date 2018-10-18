import React from 'react';
import Enzyme, { mount } from 'enzyme'
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16'
import Layout from '../../components/Layout';
import configureStore from 'redux-mock-store'

const mockStore = configureStore();

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
const children = <div className="testChildren"></div>

describe('renders without crashing', () => {
  it('should render self and subcomponents', () => {
    const store = mockStore({});
    wrapper = mount( <Provider store={store}><Layout>{children}</Layout></Provider> );
    expect(wrapper.find(Layout).find('.app-header').length).toBe(1)
    expect(wrapper.find(Layout).find('.testChildren').length).toBe(1)
    expect(wrapper.find(Layout).find('.app-footer').length).toBe(1)
  })
});
