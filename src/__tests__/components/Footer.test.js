import React from 'react';
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Footer } from '../../components/Footer';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {}
  const component = mount(<Footer {...props} />)
  return {
    props,
    component
  }
}

describe('renders without crashing', () => {
  it('should render self and subcomponents', () => {
      const { component } = setup();
      expect(component.find('div').first().hasClass('app-footer')).toBe(true)
    })
});
