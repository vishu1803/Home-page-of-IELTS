import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from '../Features';

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

describe('Features Component', () => {
  test('renders section heading', () => {
    render(<Features />);
    
    expect(screen.getByText(/Why Choose Our/)).toBeInTheDocument();
    expect(screen.getByText(/IELTS Program/)).toBeInTheDocument();
  });

  test('renders all feature cards', () => {
    render(<Features />);
    
    expect(screen.getByText('Speaking Practice')).toBeInTheDocument();
    expect(screen.getByText('Mock Tests')).toBeInTheDocument();
    expect(screen.getByText('AI Band Score')).toBeInTheDocument();
    expect(screen.getByText('Writing Feedback')).toBeInTheDocument();
  });

  test('renders feature descriptions', () => {
    render(<Features />);
    
    expect(screen.getByText(/Interactive speaking sessions/)).toBeInTheDocument();
    expect(screen.getByText(/Comprehensive practice tests/)).toBeInTheDocument();
    expect(screen.getByText(/Advanced AI algorithms/)).toBeInTheDocument();
    expect(screen.getByText(/Detailed feedback on your writing/)).toBeInTheDocument();
  });

  test('renders CTA section', () => {
    render(<Features />);
    
    expect(screen.getByText(/Ready to Start Your IELTS Journey/)).toBeInTheDocument();
    expect(screen.getByText(/Join our community/)).toBeInTheDocument();
  });
});
