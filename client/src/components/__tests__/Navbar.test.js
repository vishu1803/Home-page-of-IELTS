import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

// Mock the useLocation hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
}));

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Navbar Component', () => {
  test('renders logo and company name', () => {
    renderWithRouter(<Navbar />);
    
    expect(screen.getByText('IELTS Institute')).toBeInTheDocument();
    expect(screen.getByText('I')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithRouter(<Navbar />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders CTA button', () => {
    renderWithRouter(<Navbar />);
    
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  test('has proper accessibility attributes', () => {
    renderWithRouter(<Navbar />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
