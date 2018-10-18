import React from 'react';
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Header } from '../../components/Header';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {}
  const component = mount(<Header {...props} />)
  return {
    props,
    component
  }
}

describe('renders without crashing', () => {
  it('should render self and subcomponents', () => {
      const { component } = setup();
      expect(component.find('div').hasClass('app-header')).toBe(true)
    })
});
