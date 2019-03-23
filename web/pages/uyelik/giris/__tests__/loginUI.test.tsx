import * as React from 'react';
import { mount } from 'enzyme';
import { LoginUI } from '../LoginUI';

const setup = (propOverrides?: any) => {
  const mockSubmit = jest.fn();
  const props = {
    onSubmit: mockSubmit,
    ...propOverrides,
  };
  const wrapper = mount(<LoginUI {...props} />);

  return {
    wrapper,
    mockSubmit,
    props,
  };
};

let wrapper: any;
let mockSubmit: any;

describe('[Login]', () => {
  beforeAll(() => {
    const res = setup();
    mockSubmit = res.mockSubmit;
    wrapper = res.wrapper;
  });

  afterAll(() => {
    wrapper.unmount();
  });

  test('render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders a form', () => {
    const form = wrapper.find('form');
    expect(form).toBeTruthy();
  });

  test('input fields', () => {
    const fields = wrapper.find('TextField');
    expect(fields).toHaveLength(2);
  });

  test('button', () => {
    const button = wrapper.find('Button');

    expect(button.props().type).toBe('submit');
    expect(button).toBeTruthy();
  });

  test('submit', () => {
    const formik = wrapper.find('Formik');
    formik.props().onSubmit({ email: 'test@test.com', password: 'password' });

    expect(mockSubmit).toHaveBeenCalled();
  });
});
