import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// scripts.js
// @ts-ignore
// eslint-disable-next-line testing-library/no-node-access
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // @ts-ignore
  // eslint-disable-next-line testing-library/no-node-access
  const email = document.getElementById('email').value;
  // @ts-ignore
  // eslint-disable-next-line testing-library/no-node-access
  const password = document.getElementById('password').value;
  // eslint-disable-next-line testing-library/no-node-access
  const message = document.getElementById('message');

  // Simulação de validação simples (substituir pela lógica real)
  if (email === 'usuario@exemplo.com' && password === 'senha123') {
    // @ts-ignore
    message.textContent = 'Login bem-sucedido!';
    // @ts-ignore
    message.style.color = 'green';
  } else {
    // @ts-ignore
    message.textContent = 'Email ou senha incorretos.';
    // @ts-ignore
    message.style.color = 'red';
  }
});

