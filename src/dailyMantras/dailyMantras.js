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
  View, FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from '../NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color:Colors.black,
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

const TITLE = 'Daily Mantras';
const data = [
{id:0, day:'Sunday', graha:'Sun / Surya', mantras:{beej:'\t\tOm Kraam Kreem Kraum Saha,\n\t\t\t\tSuryaya Namaha', alt:'Om Suryaya Namaha', translation:'', historic:{mantra:'agnir mūrdhā divaḥ kakut,patiḥ pṛthivyā ayam, apāṁ retāṁsi jinvati ', translation:'Fire rise, crown the heavens. Protect this earth. Vitalize the planted seeds.'}}},
{id:1, day:'Monday', graha:'Moon / Shukra', mantras:{beej:'\t\tOm Kraam Kreem Kraum Saha,\n\t\t\t\t Chandramase Namaha', alt:'Om Chandraya Namaha', translation:'', historic:{mantra:'agnir mūrdhā divaḥ kakut,patiḥ pṛthivyā ayam, apāṁ retāṁsi jinvati ', translation:'agnir mūrdhā divaḥ kakut, patiḥ pṛthivyā ayam, apāṁ retāṁsi jinvati'}}},
{id:2, day:'Tuesday', graha:'Mars / Mangal', mantras:{beej:'\t\tOm Kraam Kreem Kraum Saha,\n\t\t\t\t Bhaumay Namaha', alt:'Om Mangalaya Namaha', translation:'', historic:{mantra:'agnir mūrdhā divaḥ kakut,patiḥ pṛthivyā ayam, apāṁ retāṁsi jinvati ', translation:'agnir mūrdhā divaḥ kakut, patiḥ pṛthivyā ayam, apāṁ retāṁsi jinvati'}}},
{id:3, day:'Wednesday', graha:'Mercury / Budha', mantras:{beej:'\t\tOm Braam Breem Braum Saha,\n\t\t\t\t Budhaye Namaha', alt:'Om Budhaya Namaha', translation:'', historic:{mantra:'udbudhya svāgna prati-jāgṛ hi, tvaṁ iṣṭāpūrte saṁsṛjethāmayaṁ ca, asmin sadhasthe adhyuttarāsmin, viśve devā yajamānaś ca sīdata', translation:'O Intellect, awaken and become alertly aware of everything. Then, you can achieve objectives without mistake. Then, you can rise above all this confusion. Illuminate everything with your divinity. This is why I call to you.'}}},
{id:4, day:'Thursday', graha:'Jupiter / Guruve', mantras:{beej:'\t\tOm Kraam Kreem Kraum Saha,\n\t\t\t\t Chandramase Namaha', alt:'Om Guruve Namaha', translation:'', historic:{mantra:'bṛhaspate ati yadaryo arhād, dyuma dvibhāti kratum ajjaneṣu, yad dīdayac chavasarta prajāta, tadasmasu draviṇaṁ dhehi citram', translation:'The master of expansion [Jupiter] gives the most wonderful just-rewards, out from the smoke and twilight born from the mother of our efforts. Destroying the falsehood and proliferating the truth, and by so doing granting us the most wondrously beautiful wealth.'}}},
{id:5, day:'Friday', graha:'Venus / Shukra', mantras:{beej:'\t\tOm Draam Dreem Draum Saha,\n\t\t\t\t Shukraye Namaha', alt:'Om Shukryaya Namaha', translation:'', historic:{mantra:'annāt parisruto rasaṁ brahmaṇā, vyapabit kṣatraṁ payaḥ prajāpatiḥ, ṛtena satyam indriyaṁ vipānaṁ, śukram andhasa indrasy endriyam, idaṁ paya, sṛtaṁ madhu', translation:'The bliss which seems to flow from objects, really exists in spirit. The gods drink this to protect themselves from defeat. You can really drink it only when you can perceive true reality. But drinking it gives the vitality to remove the blind darkness from the senses. So drink this milk & honey.'}}},
{id:6, day:'Saturday', graha:'Saturn / Shani', mantras:{beej:'\t\tOm Kraam Kreem Kraum Saha,\n\t\t\t\t Chandramase Namaha', alt:'Om Shanisaya Namaha', translation:'', historic:{mantra:'śaṁ no devīr abhiṣṭaya, āpo bhavantu pītaye, śaṁ yor abhisravantu naḥ', translation:'Goddess śam, we celebrate you! Let us drink your flowing waters. Śam, flow passionately to us, breaking the damns.'}}},
];

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor:  Colors.lighter,
  };

  const renderItem = ({ item }) => (
         <Section title={item.day}>
             <Text>{item.graha}</Text>
             <View><Text>Beej::</Text><Text>{item.mantras.beej}</Text></View>
             <View><Text>Alternate::</Text><Text>{item.mantras.alt}</Text></View>
             <View><Text>Historic::</Text><Text>{item.mantras.historic.mantra}</Text></View>
             <View><Text>Translation::</Text><Text>{item.mantras.historic.translation}</Text></View>
          </Section>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <Header title={TITLE}/>
      <FlatList
         style={{ borderWidth: 4,    borderColor: "#20232a",    borderRadius: 6}}
        data={data}
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
     borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
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
