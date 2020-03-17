import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Grap from './Grap';

describe('<Grap />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Grap />);
    const grap = getByTestId('Grap');

    expect(grap).toBeInTheDocument();
  });
});