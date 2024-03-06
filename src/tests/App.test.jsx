import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders App component with TabsCategories', () => {
    render(<App />);

    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();

    const tabsCategoriesElement = screen.getByTestId('tabsCategories');
    expect(tabsCategoriesElement).toBeInTheDocument();

  });
});
