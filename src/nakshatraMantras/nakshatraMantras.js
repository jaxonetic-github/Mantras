/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
*
 *  <View style={{ flex: 1 , backgroundColor:'black'}}>
*

       <View style={{  backgroundColor: "red" }}>
          <View><Text>Description</Text><Text>First Nakshatra</Text></View>       
          <View><Text>Beej</Text><Text>Om Ashwini Kumarbyam Namaha</Text></View>
        </View>
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
  View, FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from '../NewAppScreen';
 
 import {NAKSHATRAS_DATA} from '../constants.js' 


const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color:  Colors.black,
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
/*
<ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>*/

const NakshatraMantras: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor:  Colors.lighter,
  };

const renderItem = ({ item }) => (
          <Section title={item.title}>  
<View style={{  backgroundColor:"pink"}}><Text>{item.sign} : {item.degrees}</Text></View>  
<View style={{ flex: 1 ,     backgroundColor: "yellow" }}><Text>Ruler</Text><Text>Sun</Text></View>       
          <View style={{ flex: 1 ,  backgroundColor: "blue" }}><Text>Deity</Text><Text>Mars</Text></View> 

</Section>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={ 'dark-content'} />
      <Header title='Nakshatras'/>
      <FlatList
        data={NAKSHATRAS_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
 
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

export default NakshatraMantras;
