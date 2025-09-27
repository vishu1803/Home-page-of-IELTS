import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';

describe('Testimonials Component', () => {
  test('renders section heading', () => {
    render(<Testimonials />);
    
    expect(screen.getByText(/Success Stories from/)).toBeInTheDocument();
    expect(screen.getByText(/Our Students/)).toBeInTheDocument();
  });

  test('renders all testimonials', () => {
    render(<Testimonials />);
    
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('Ahmed Hassan')).toBeInTheDocument();
    expect(screen.getByText('Maria Rodriguez')).toBeInTheDocument();
  });

  test('renders band scores', () => {
    render(<Testimonials />);
    
    expect(screen.getByText('Band 8.5')).toBeInTheDocument();
    expect(screen.getByText('Band 7.0')).toBeInTheDocument();
    expect(screen.getByText('Band 8.0')).toBeInTheDocument();
  });

  test('renders locations', () => {
    render(<Testimonials />);
    
    expect(screen.getByText('London, UK')).toBeInTheDocument();
    expect(screen.getByText('Dubai, UAE')).toBeInTheDocument();
    expect(screen.getByText('Madrid, Spain')).toBeInTheDocument();
  });

  test('renders statistics section', () => {
    render(<Testimonials />);
    
    expect(screen.getByText('98%')).toBeInTheDocument();
    expect(screen.getByText('10,000+')).toBeInTheDocument();
    expect(screen.getByText('4.9/5')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();
  });
});
