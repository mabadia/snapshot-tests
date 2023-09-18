import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

test('renders a snapshot', () => {
  const tree = renderer.create(<Header title="My App Header" />).toJSON();
  expect(tree).toMatchSnapshot();
});