import React from 'react';
import { render } from '@testing-library/react';

import CreateUser from '../pages/CreateUser';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Página Cadastrar Usuários', () => {
  it('Teste para saber se a página Cadastrar Usuários está renderizando', () => {
    const { debug } = render(<CreateUser />);

    debug();
  });

});