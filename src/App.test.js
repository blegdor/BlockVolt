// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockVolt title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockVolt/i);
    expect(titleElement).toBeInTheDocument();
});
