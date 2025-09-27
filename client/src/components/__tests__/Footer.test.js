import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Footer Component', () => {
  test('renders company logo and name', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('IELTS Institute')).toBeInTheDocument();
    expect(screen.getByText('I')).toBeInTheDocument();
  });

  test('renders quick links section', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders services section', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Speaking Practice')).toBeInTheDocument();
    expect(screen.getByText('Mock Tests')).toBeInTheDocument();
    expect(screen.getByText('AI Band Score')).toBeInTheDocument();
    expect(screen.getByText('Writing Feedback')).toBeInTheDocument();
  });

  test('renders contact information', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('Contact Info')).toBeInTheDocument();
    expect(screen.getByText('info@ieltsinstitute.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
  });

  test('renders copyright information', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText(/© 2024 IELTS Institute/)).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Cookie Policy')).toBeInTheDocument();
  });
});
