/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../src/home.js';
import { render } from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Home />);
  const { getByText, getAllByText, queryAllByText } = render(<Home />);
  
  //Ensure Title Displays
  const beejs = getByText('Mantras are tools of the Manas (mind)');
console.log(beejs.length);
//console.log(beejs[0].children);
//console.log(beejs[0].type);
  
  //console.log(element);
 // expect(element).toBe('Sunday');
 // expect(queryBytextV('Sunday')).toBe('ff');
});