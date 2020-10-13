import React from 'react';
import { render } from '@testing-library/react';

import CreatePet from '../pages/CreatePet';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Pagina Cadastrar Pet', () => {
  it('Teste para saber se a página CreatePet está renderizando', () => {
    const { debug } = render(<CreatePet />);

    debug();
  })
});
 