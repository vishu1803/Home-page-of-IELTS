import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

// Mock the intersection observer
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock the useInView hook
jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: jest.fn(), inView: true }),
}));

describe('Hero Component', () => {
  test('renders main heading', () => {
    render(<Hero />);
    
    expect(screen.getByText(/Master IELTS with/)).toBeInTheDocument();
    expect(screen.getByText(/Expert Guidance/)).toBeInTheDocument();
  });

  test('renders subheading', () => {
    render(<Hero />);
    
    expect(screen.getByText(/Join thousands of successful students/)).toBeInTheDocument();
  });

  test('renders CTA buttons', () => {
    render(<Hero />);
    
    expect(screen.getByText('Start Free Trial')).toBeInTheDocument();
    expect(screen.getByText('Watch Demo')).toBeInTheDocument();
  });

  test('renders statistics', () => {
    render(<Hero />);
    
    expect(screen.getByText('98%')).toBeInTheDocument();
    expect(screen.getByText('10K+')).toBeInTheDocument();
    expect(screen.getByText('4.9')).toBeInTheDocument();
    expect(screen.getByText('Success Rate')).toBeInTheDocument();
    expect(screen.getByText('Students')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });

  test('renders demo interface', () => {
    render(<Hero />);
    
    expect(screen.getByText('IELTS Practice Test')).toBeInTheDocument();
    expect(screen.getByText('Band Score')).toBeInTheDocument();
    expect(screen.getByText('Accuracy')).toBeInTheDocument();
  });
});
