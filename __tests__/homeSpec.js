/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../src/home/home.js';
import { render } from '@testing-library/react-native';

import {TXT_MANTRAS_HOWTOUSE, TXT_MANTRAS_DEFINITION} from '../src/constants.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders mantra definition and howto correctly', () => {
  renderer.create(<Home />);
  const { getByText, getAllByText, queryAllByText } = render(<Home />);
  
  //Ensure Title Displays
  const mantraDefinition = getByText(TXT_MANTRAS_DEFINITION);
  const howto = getByText(TXT_MANTRAS_HOWTOUSE);
 
});