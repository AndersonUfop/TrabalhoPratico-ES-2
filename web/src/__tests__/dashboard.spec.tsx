import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../pages/Dashboard';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Dashboard page', () => {
  it('should be abe dashboard', () => {

    const { debug } = render(<Dashboard />);

    debug();
  });
});