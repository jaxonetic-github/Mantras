/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from './src/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {

  const backgroundStyle = {
    backgroundColor:  Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={ 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header title="Daily Mantras"/>
        <View
          style={{
            backgroundColor:Colors.white,
          }}>
          <Section title="Sunday">         
            <Text>Beej</Text> <Text>Om Kraam Kreem Kraum Saha, Chandramase Namaha</Text>
          </Section>
          <Section title="Monday">
             <Text>Chandra</Text>
              <Text>Surya</Text>
               <Text>Beej</Text> <Text>Om Kraam Kreem Kraum Saha, Chandramase Namaha</Text>
              <Text>Gayatra</Text><Text>Om</Text>
          </Section>
          <Section title="Tuesday">
             <Text>Mangal</Text>
              <Text>Beej</Text><Text>On Braam Breem Braum Sah Bhaumay Namaha</Text>
          </Section>
          <Section title="Wednesday">
             <Text>Buda</Text>
              <Text>Beej</Text><Text>On Braam Breem Braum Sah Bhudaye Namaha</Text>
          </Section>
          <Section title="Thursday">
            <Text>Guruve</Text>
              <Text>Beej</Text><Text>On Braam Breem Braum Sah Brihaspi Namaha</Text>
          </Section>
          <Section title="Friday">
             <Text>Shukra</Text>
              <Text>Beej</Text><Text>On Braam Breem Braum Sah Bhaumay Namaha</Text>
              <Text>Gayatra</Text>
          </Section>
          <Section title="Saturday">
             <Text>Shani</Text>
              <Text>Beej</Text><Text>On Braam Breem Braum Sah Bhaumay Namaha</Text>ok
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
