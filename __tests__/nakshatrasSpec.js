/**
 * @format
 */

import 'react-native';
import React from 'react';
import NakshatraMantras from '../nakshatraMantras.js';
import { render } from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<NakshatraMantras />);
  const { getByText, getAllByText, queryAllByText } = render(<NakshatraMantras />);
  
  //Ensure Title Displays
  const beejs = queryAllByText('Beej');
console.log(beejs.length);
//console.log(beejs[0].children);
//console.log(beejs[0].type);
  const title = queryAllByText('Daily');

  //Ensure Days of the week print
  getByText('Ashwini');
  const bharanis = getByText('Bharani');
  console.log('bharani count', bharanis.length);
  getByText('Krittika');getByText('Mrigashira');getByText('Ardra');getByText('Punarvasu');getByText('Pushya');getByText('Magha');getByText('Purva Phalguni');
  
  //console.log(element);
 // expect(element).toBe('Sunday');
 // expect(queryBytextV('Sunday')).toBe('ff');
});

