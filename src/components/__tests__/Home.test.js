import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Home Component', () => {
  it('opens the reservation modal when the "Reserve A Table" button is clicked', () => {
    // Render the Home component
    render(<Home />);

    // Check that the modal is not initially open
    expect(screen.queryByText('Reserve A Table')).not.toBeInTheDocument();

    // Click the "Reserve A Table" button
    const reserveButton = screen.getByText('Reserve A Table');
    fireEvent.click(reserveButton);

    // Check that the modal is now open
    expect(screen.getByText('Reserve A Table')).toBeInTheDocument();
    expect(screen.getByText('Full Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
    expect(screen.getByText('Guests')).toBeInTheDocument();
    expect(screen.getByText('Occasion')).toBeInTheDocument();
  });

  it('closes the reservation modal when the cancel button is clicked', () => {
    // Render the Home component
    render(<Home />);

    // Click the "Reserve A Table" button to open the modal
    const reserveButton = screen.getByText('Reserve A Table');
    fireEvent.click(reserveButton);

    // Check that the modal is open
    expect(screen.getByText('Reserve A Table')).toBeInTheDocument();

    // Click the cancel button
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    // Check that the modal is closed
    expect(screen.queryByText('Reserve A Table')).not.toBeInTheDocument();
  });
});