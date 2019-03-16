import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginUI } from '../LoginUI';

const setup = (propOverrides?: any) => {
  const mockSubmit = jest.fn();
  const props = {
    onSubmit: mockSubmit,
    ...propOverrides,
  };
  const wrapper = shallow(<LoginUI {...props} />);

  return {
    wrapper,
    mockSubmit,
    props,
  };
};

describe('[Login]', () => {
  test('render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test('input fields', () => {
    const { wrapper } = setup();
    const field = wrapper.find('LoginC');
    const paper = field.find('Paper');
    console.log(paper.debug());
  });
});
