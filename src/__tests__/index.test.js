import React from 'react'
import { render } from '@testing-library/react';
import Home from '../app/page';

describe('Home Component', () => {
  it('renders without errors', () => {
    render(<Home />);
  });
});
