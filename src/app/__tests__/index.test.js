import React from "react"
import { render } from '@testing-library/react';
import RootLayout from '../layout';

// Mocking the spaceMono font
jest.mock('next/font/google', () => ({
  Space_Mono: jest.fn(() => ({
    className: 'mocked-class',
  })),
}));

describe('RootLayout', () => {
  it('renders children and applies styles', () => {
    // Render the component
    const { getByText } = render(<RootLayout>Test Content</RootLayout>);

    // Check if the content is rendered
    expect(getByText('Test Content')).toBeInTheDocument();

    // Check if the spaceMono styles are applied
    const bodyElement = document.querySelector('body');
    expect(bodyElement).toHaveClass('mocked-class');
  });
});
