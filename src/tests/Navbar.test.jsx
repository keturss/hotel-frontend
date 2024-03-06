import { render, screen, fireEvent } from '@testing-library/react';
import NavbarMenu from '../components/Navbar';

describe('NavbarMenu component', () => {
  test('renders NavbarMenu component', () => {
    render(<NavbarMenu />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders NavbarBrand with correct text', () => {
    render(<NavbarMenu />);
    const brandElement = screen.getByText('React-Frontend');
    expect(brandElement).toBeInTheDocument();
  });

  test('renders NavbarLinks with correct text', () => {
    render(<NavbarMenu />);
    const userLink = screen.getByText('User');
    const hotelLink = screen.getByText('Hotel');
    const bookingLink = screen.getByText('Booking');

    expect(userLink).toBeInTheDocument();
    expect(hotelLink).toBeInTheDocument();
    expect(bookingLink).toBeInTheDocument();
  });
});
