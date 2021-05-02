/**
 * @format
 */
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, FlatList
} from 'react-native';


import {AppRegistry} from 'react-native';
import Home from './src/home.js';
import DailyMantras from './src/dailyMantras.js';
import Naskshatras from './src/nakshatraMantras.js';
import {name as appName} from './app.json';

import { Navigation } from 'react-native-navigation';



const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <Home/>
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home'
    }
  },
  bottomTab: {
    text: 'Home'
  }
};

const NakshatrasScreen = () => {
  return (
    <View style={styles.root}>
     <Naskshatras/>
    </View>
  );
}
NakshatrasScreen.options = {
  topBar: {
    title: {
      text: 'Nakshatras'
    }
  },
  bottomTab: {
    text: 'Nakshatras'
  }
}

const DailyMantrasScreen = () => {
  return (
    <View style={styles.root}>
     <DailyMantras/>
    </View>
  );
}
DailyMantrasScreen.options = {
  topBar: {
    title: {
      text: 'Daily'
    }
  },
  bottomTab: {
    text: 'Daily'
  }
}
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Nakshatras', () => NakshatrasScreen);
Navigation.registerComponent('Daily', () => DailyMantrasScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home'
                  }
                },
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: { name: 'Daily' }
                }
              ]
            }
          },          
          {
            stack: {
              children: [
                {
                  component: { name: 'Nakshatras' }
                }
              ]
            }
          },
        ]
      }
    }

  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});

//AppRegistry.registerComponent(appName, () => Naskshatras);
//AppRegistry.registerComponent(appName, () => Naskshatras);
