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
  const { getByText, getAllByText, queryAllByText } = render(<DailyMantras/>);
  
  //Ensure Title Displays
  const beejs = queryAllByText('Beej');

  //Ensure Days of the week print, Sun(0) to Sat (6)
 getByText(DAILY_MANTRA_DATA[0].day);
 getByText(DAILY_MANTRA_DATA[1].day);
 getByText(DAILY_MANTRA_DATA[2].day);
 getByText(DAILY_MANTRA_DATA[3].day);
 getByText(DAILY_MANTRA_DATA[4].day);
 getByText(DAILY_MANTRA_DATA[5].day);
 getByText(DAILY_MANTRA_DATA[6].day);
  
});

