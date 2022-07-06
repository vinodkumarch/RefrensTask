import React from 'react';
import {CharactersList} from '../characters';
import {render, waitFor} from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe('UT for Character screen', () => {
  it('should reder the Character List', async () => {
    const {toJSON, getByTestId} = render(<CharactersList />);
    await waitFor(() =>
      expect(getByTestId('characters.mainContainer')).toBeTruthy(),
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
