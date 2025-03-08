import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('Home Component', () => {
  test('renders Home component with heading and button', () => {
    render(<Home />);
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Reserve A Table')).toBeInTheDocument();
  });

  test('opens and closes the reservation modal', async () => {
    render(<Home />);
    const button = screen.getByText('Reserve A Table');
    fireEvent.click(button);
    expect(screen.getByText('Reserve A Table')).toBeInTheDocument();

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    await waitFor(() => expect(screen.queryByText('Reserve A Table')).not.toBeInTheDocument());
  });

  test('validates form fields and prevents submission with errors', async () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Reserve A Table'));
    const submitButton = screen.getByText('Reserve');

    fireEvent.click(submitButton);

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(await screen.findByText('Phone number is required')).toBeInTheDocument();
    expect(await screen.findByText('Date is required')).toBeInTheDocument();
    expect(await screen.findByText('Time is required')).toBeInTheDocument();
  });

  test('submits form successfully with valid data', async () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Reserve A Table'));

    fireEvent.change(screen.getByLabelText('Full Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2025-04-01' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Guests'), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

    const submitButton = screen.getByText('Reserve');
    fireEvent.click(submitButton);

    await waitFor(() => expect(window.alert).toHaveBeenCalled());
  });
});
