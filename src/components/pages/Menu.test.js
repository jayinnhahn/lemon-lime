import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Menu from './Menu';

jest.mock('/food1.jpg', () => 'food1-mock.jpg', { virtual: true });
jest.mock('/food2.jpg', () => 'food2-mock.jpg', { virtual: true });
jest.mock('/food3.jpg', () => 'food3-mock.jpg', { virtual: true });

describe('Menu Component', () => {
  test('renders the Specials section with header', () => {
    render(<Menu />);
    expect(screen.getByText('Specials')).toBeInTheDocument();
    expect(screen.getByText('Check Menu')).toBeInTheDocument();
  });

  test('displays all special menu items', () => {
    render(<Menu />);
    expect(screen.getByText('Greek Salad')).toBeInTheDocument();
    expect(screen.getByText('Bruschetta')).toBeInTheDocument();
    expect(screen.getByText('Lemon Dessert')).toBeInTheDocument();
    expect(screen.getByText('P 120')).toBeInTheDocument();
    expect(screen.getByText('P 100')).toBeInTheDocument();
    expect(screen.getByText('P 90')).toBeInTheDocument();
  });

  // Test modal opening
  test('opens modal when Check Menu button is clicked', async () => {
    render(<Menu />);
    // Modal should not be visible initially
    expect(screen.queryByText('Little Lemon Menu')).not.toBeInTheDocument();
    // Click the Check Menu button
    fireEvent.click(screen.getByText('Check Menu'));
    // Modal should now be visible
    await waitFor(() => {
      expect(screen.getByText('Little Lemon Menu')).toBeInTheDocument();
    });
    expect(screen.getByText('Starters')).toBeInTheDocument();
    expect(screen.getByText('Main Dishes')).toBeInTheDocument();
    expect(screen.getByText('Desserts')).toBeInTheDocument();
    expect(screen.getByText('Beverages')).toBeInTheDocument();
  });

  test('displays all menu items in the modal', async () => {
    render(<Menu />);
    fireEvent.click(screen.getByText('Check Menu'));
    await waitFor(() => {
      expect(screen.getByText('Calamari')).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText('Grilled Salmon')).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText('Baklava')).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText('Greek Coffee')).toBeInTheDocument();
    });
    expect(screen.getByText('Lightly fried squid served with lemon aioli')).toBeInTheDocument();
    expect(screen.getByText('Fresh salmon with lemon and herbs, served with vegetables')).toBeInTheDocument();
  });

  test('closes modal when the close button is clicked', async () => {
    render(<Menu />);
    fireEvent.click(screen.getByText('Check Menu'));
    await waitFor(() => {
      expect(screen.getByText('Little Lemon Menu')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('×'));
    await waitFor(() => {
      expect(screen.queryByText('Little Lemon Menu')).not.toBeInTheDocument();
    });
  });

  test('menu items contain images with correct alt text', () => {
    render(<Menu />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute('alt', 'Greek Salad');
    expect(images[1]).toHaveAttribute('alt', 'Bruschetta');
    expect(images[2]).toHaveAttribute('alt', 'Lemon Dessert');
  });
});