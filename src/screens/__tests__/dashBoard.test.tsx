import React from 'react';
import {DashBoard} from '../dashBoard';
import {render, waitFor} from '@testing-library/react-native';

describe('UT for DashBoard screen', () => {
  it('should reder the dashboard view', async () => {
    const {toJSON, getByTestId} = render(<DashBoard />);
    await waitFor(() =>
      expect(getByTestId('dashBoard.mainContainer')).toBeTruthy(),
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
