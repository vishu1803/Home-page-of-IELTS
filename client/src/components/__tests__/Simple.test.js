import React from 'react';
import { render, screen } from '@testing-library/react';

// Simple test component
function SimpleComponent() {
  return <div>Hello World</div>;
}

describe('Simple Test', () => {
  test('renders hello world', () => {
    render(<SimpleComponent />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
