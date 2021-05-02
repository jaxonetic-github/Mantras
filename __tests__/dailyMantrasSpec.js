/**
 * @format
 */

import 'react-native';
import React from 'react';
import DailyMantras from '../src/dailyMantras/dailyMantras.js';
import { render } from '@testing-library/react-native';
import {TXT_DAY_OF_WEEK} from '../src/constants.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Displays days and mantras correctly', () => {
  renderer.create(<DailyMantras />);
  const { getByText, getAllByText, queryAllByText } = render(<DailyMantras />);
  
  //Ensure Title Displays
  const beejs = queryAllByText('Beej');
  console.log(beejs.length);
console.log(TXT_DAY_OF_WEEK);
//console.log(beejs[0].type);
  const titlt = queryAllByText('Daily');

  //Ensure Days of the week print, Sun to Sat
  getByText(TXT_DAY_OF_WEEK[0]);getByText(TXT_DAY_OF_WEEK[1]);getByText(TXT_DAY_OF_WEEK[2]);getByText(TXT_DAY_OF_WEEK[3]);getByText(TXT_DAY_OF_WEEK[4]);getByText(TXT_DAY_OF_WEEK[5]);getByText(TXT_DAY_OF_WEEK[6]);
  
  //console.log(element);
 // expect(element).toBe('Sunday');
 // expect(queryBytextV('Sunday')).toBe('ff');
});

