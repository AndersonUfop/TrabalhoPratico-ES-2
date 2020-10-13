import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../pages/Dashboard';


jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Página', () => {
  it('Teste para saber se a página Dashboard está renderizando', () => {

    const { debug } = render(<Dashboard />);

    debug();
  });
  
});

