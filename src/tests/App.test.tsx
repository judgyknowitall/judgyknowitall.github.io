import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../views/App';

test('renders learn react link', () => {
  const pageProps = {
    title: "Home",
    onPageChanged: function(_: string) {}
  }

  render(<App pageProps={pageProps}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
