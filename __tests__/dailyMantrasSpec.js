/**
 * @format
 */

import 'react-native';
import React from 'react';
import DailyMantras from '../src/dailyMantras/dailyMantras.js';
import { render } from '@testing-library/react-native';
import {DAILY_MANTRA_DATA} from '../src/constants.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Displays days and mantras correctly', () => {
  renderer.create(<DailyMantras />);
  const { getByText, getAllByText, queryAllByText } = render(<DailyMantras />);
  
  //Ensure Title Displays
  const beejs = queryAllByText('Beej');
  console.log(beejs.length);
console.log(DAILY_MANTRA_DATA);
//console.log(beejs[0].type);
  const titlt = queryAllByText('Daily');

  //Ensure Days of the week print, Sun to Sat
  getByText(DAILY_MANTRA_DATA[0].day);getByText(DAILY_MANTRA_DATA[1].day);getByText(DAILY_MANTRA_DATA[2]);getByText(DAILY_MANTRA_DATA[3]);getByText(DAILY_MANTRA_DATA[4]);getByText(DAILY_MANTRA_DATA[5]);getByText(DAILY_MANTRA_DATA[6]);
  
  //console.log(element);
 // expect(element).toBe('Sunday');
 // expect(queryBytextV('Sunday')).toBe('ff');
});

