import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders CurrentLocation component', () => {
  const { getByText } = render(<App />);
  // This assumes there's some known text inside your CurrentLocation component
  const someText = getByText(/Download Source Code/i);
  expect(someText).toBeInTheDocument();
});
