/*****
*      Home Screen
*/
export const TXT_MANTRAS_DEFINITION = 'Mantras are tools of the Manas (mind)';
export const TXT_MANTRAS_HOWTOUSE = 'The can be used to focus the mind and how we think.';

/*****
*      Daily Mantras Screen
*/
//Array of Days, 8 Based
export const TXT_DAY_OF_WEEK = ['Sunday','Monday','Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
export const TITLE = 'Daily Mantras';
export const DAILY_MANTRA_DATA = [
{id:0, day:'Sunday', graha:'Sun / Surya', mantras:{beej:'\t\tOm Kraam Kreem Kraum Saha,\n\t\t\t\tSuryaya Namaha', alt:'Om Suryaya Namaha', translation:'', historic:{mantra:'agnir mūrdhā divaḥ kakut,patiḥ pṛthivyā ayam, apāṁ retāṁsi jinvati ', translation:'Fire rise, crown the heavens. Protect this earth. Vitalize the planted seeds.'}}},
{id:1, day:'Monday', graha:'Moon / Shukra', mantras:{beej:'\t\tOm Kraam Kreem Kraum Saha,\n\t\t\t\t Chandramase Namaha', alt:'Om Chandraya Namaha', translation:'', historic:{mantra:'agnir mūrdhā divaḥ kakut,patiḥ pṛthivyā ayam, apāṁ retāṁsi jinvati ', translation:'agnir mūrdhā divaḥ kakut, patiḥ pṛthivyā ayam, apāṁ retāṁsi jinvati'}}},
{id:2, day:'Tuesday', graha:'Mars / Mangal', mantras:{beej:'\t\tOm Kraam Kreem Kraum Saha,\n\t\t\t\t Bhaumay Namaha', alt:'Om Mangalaya Namaha', translation:'', historic:{mantra:'agnir mūrdhā divaḥ kakut,patiḥ pṛthivyā ayam, apāṁ retāṁsi jinvati ', translation:'agnir mūrdhā divaḥ kakut, patiḥ pṛthivyā ayam, apāṁ retāṁsi jinvati'}}},
{id:3, day:'Wednesday', graha:'Mercury / Budha', mantras:{beej:'\t\tOm Braam Breem Braum Saha,\n\t\t\t\t Budhaye Namaha', alt:'Om Budhaya Namaha', translation:'', historic:{mantra:'udbudhya svāgna prati-jāgṛ hi, tvaṁ iṣṭāpūrte saṁsṛjethāmayaṁ ca, asmin sadhasthe adhyuttarāsmin, viśve devā yajamānaś ca sīdata', translation:'O Intellect, awaken and become alertly aware of everything. Then, you can achieve objectives without mistake. Then, you can rise above all this confusion. Illuminate everything with your divinity. This is why I call to you.'}}},
{id:4, day:'Thursday', graha:'Jupiter / Guruve', mantras:{beej:'\t\tOm Kraam Kreem Kraum Saha,\n\t\t\t\t Chandramase Namaha', alt:'Om Guruve Namaha', translation:'', historic:{mantra:'bṛhaspate ati yadaryo arhād, dyuma dvibhāti kratum ajjaneṣu, yad dīdayac chavasarta prajāta, tadasmasu draviṇaṁ dhehi citram', translation:'The master of expansion [Jupiter] gives the most wonderful just-rewards, out from the smoke and twilight born from the mother of our efforts. Destroying the falsehood and proliferating the truth, and by so doing granting us the most wondrously beautiful wealth.'}}},
{id:5, day:'Friday', graha:'Venus / Shukra', mantras:{beej:'\t\tOm Draam Dreem Draum Saha,\n\t\t\t\t Shukraye Namaha', alt:'Om Shukryaya Namaha', translation:'', historic:{mantra:'annāt parisruto rasaṁ brahmaṇā, vyapabit kṣatraṁ payaḥ prajāpatiḥ, ṛtena satyam indriyaṁ vipānaṁ, śukram andhasa indrasy endriyam, idaṁ paya, sṛtaṁ madhu', translation:'The bliss which seems to flow from objects, really exists in spirit. The gods drink this to protect themselves from defeat. You can really drink it only when you can perceive true reality. But drinking it gives the vitality to remove the blind darkness from the senses. So drink this milk & honey.'}}},
{id:6, day:'Saturday', graha:'Saturn / Shani', mantras:{beej:'\t\tOm Kraam Kreem Kraum Saha,\n\t\t\t\t Chandramase Namaha', alt:'Om Shanisaya Namaha', translation:'', historic:{mantra:'śaṁ no devīr abhiṣṭaya, āpo bhavantu pītaye, śaṁ yor abhisravantu naḥ', translation:'Goddess śam, we celebrate you! Let us drink your flowing waters. Śam, flow passionately to us, breaking the damns.'}}},
];


export const MANTRA_INFOTYPE_BEEJ = 'Beej';
export const MANTRA_INFOTYPE_ALT = 'Alternate';
export const MANTRA_INFOTYPE_HISTORIC = 'Historic';
export const MANTRA_INFOTYPE_TRANSLATION = 'Translation';

/*****
*      Nakshatra Mantras Screen
*/
export const NAKSHATRAS_DATA = [{id:"1", title:"Ashwini", sign:"Aries",  deity:"Soma", degrees : '00:  00" 00\' to 13:10":20\'', mantras:{beej:'Om Draam Dreem Draum Sah(a) Shukraye Namaha'} },
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
               ];
