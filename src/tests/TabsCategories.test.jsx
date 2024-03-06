import React from 'react';
import { render, screen } from '@testing-library/react';
import TabsCategories from '../components/TabsCategories';

describe('TabsCategories component', () => {
  test('renders TabsCategories component', () => {
    render(<TabsCategories />);

    const userTab = screen.getByRole('tab', { name: 'User' });
    expect(userTab).toBeInTheDocument();

    const formApiUser = screen.getByTestId('routeApiUser');
    expect(formApiUser).toBeInTheDocument();
  });

  test('renders tabs for "Hotels" and "Booking"', () => {
    render(<TabsCategories />);

    const hotelsTab = screen.getByRole('tab', { name: 'Hotels' });
    const bookingTab = screen.getByRole('tab', { name: 'Booking' });

    expect(hotelsTab).toBeInTheDocument();
    expect(bookingTab).toBeInTheDocument();

    const formApiHotel = screen.getByTestId('routeApiHotel');
    expect(formApiHotel).toBeInTheDocument();

    const formApiBooking = screen.getByTestId('routeApiBooking');
    expect(formApiBooking).toBeInTheDocument();
  });
});
