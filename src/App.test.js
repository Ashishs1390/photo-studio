import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  console.log("-------------------------------")
  console.log(getByText);
  const linkElement = getByText(/Contact us On/i);
  expect(linkElement).toBeInTheDocument();
});
