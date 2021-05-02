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
} from './NewAppScreen';

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
      <FlatList
        data={[{id:"1", title:"Ashwini", sign:"Aries",  deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Draam Dreem Draum Sah(a) Shukraye Namaha'} },
               {id:'2', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'3', title:'Krittika', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'4', title:'Mrigashira', sign:'Taurus',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'5', title:'Ardra', sign:'Taurus',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'6', title:'Punarvasu', sign:'Taurus',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'7', title:'Pushya', sign:'Gemini',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'8', title:'Ashlesha', sign:'Gemini',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'9', title:'Magha', sign:'Gemini',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'10', title:'Purva Phalguni', sign:'Cancer',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'11', title:'Uttara Phalguni', sign:'Cancer',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'12', title:'Bharani', sign:'Cancer',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'13', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'14', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'15', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'16', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'17', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'18', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'19', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'20', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'21', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'22', title:'Shravana', sign:'Capricorn', rulerBySign:'Shani / Saturn', rulerByNakshatra: 'Moon / Chandra', deity:"Vishnu: helps us perceive truth concealed by through Maya", degrees : '10 00\' to 23:20\'', mantras:{beej:'Om Vishnave Namaha'}},
               {id:'23', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'24', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'25', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'26', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},
               {id:'27', title:'Bharani', sign:'Aries',deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Rudraya Namaha'}},

               ]}
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
