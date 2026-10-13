// FarmSathi - Agriculture Knowledge Base & Data Engine
// Supports English, Marathi (मराठी), and Hindi (हिंदी)

const FARMSATHI_DATA = {
  // Supported Languages
  languages: [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'mr', name: 'Marathi', native: 'मराठी' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' }
  ],

  // Major Crops Supported
  crops: [
    {
      id: 'sugarcane',
      name: { en: 'Sugarcane', mr: 'ऊस', hi: 'गन्ना' },
      scientificName: 'Saccharum officinarum',
      season: { en: 'Year-round / Suru & Adsali', mr: 'सुरू, पूर्वहंगामी व आडसाली', hi: 'शरदकालीन व बसंतकालीन' },
      idealPh: '6.5 - 7.5',
      soilTypes: ['Black Cotton', 'Clay Loam', 'Alluvial'],
      icon: '🎋'
    },
    {
      id: 'rice',
      name: { en: 'Rice / Paddy', mr: 'भात / तांदूळ', hi: 'धान / चावल' },
      scientificName: 'Oryza sativa',
      season: { en: 'Kharif & Rabi', mr: 'खरीप व रब्बी', hi: 'खरीफ और रबी' },
      idealPh: '5.5 - 6.8',
      soilTypes: ['Clayey', 'Clay Loam', 'Alluvial'],
      icon: '🌾'
    },
    {
      id: 'wheat',
      name: { en: 'Wheat', mr: 'गहू', hi: 'गेहूं' },
      scientificName: 'Triticum aestivum',
      season: { en: 'Rabi (Winter)', mr: 'रब्बी (हिवाळी)', hi: 'रबी (सर्दियों में)' },
      idealPh: '6.0 - 7.5',
      soilTypes: ['Loamy', 'Clay Loam', 'Alluvial'],
      icon: '🌿'
    },
    {
      id: 'cotton',
      name: { en: 'Cotton', mr: 'कापूस', hi: 'कपास' },
      scientificName: 'Gossypium hirsutum',
      season: { en: 'Kharif', mr: 'खरीप हंगाम', hi: 'खरीफ मौसम' },
      idealPh: '6.0 - 8.0',
      soilTypes: ['Deep Black Cotton Soil', 'Medium Loam'],
      icon: '☁️'
    },
    {
      id: 'tomato',
      name: { en: 'Tomato', mr: 'टोमॅटो', hi: 'टमाटर' },
      scientificName: 'Solanum lycopersicum',
      season: { en: 'All Seasons (Warm & Mild)', mr: 'सर्व ऋतू (खरीप, रब्बी, उन्हाळी)', hi: 'सभी मौसम' },
      idealPh: '6.0 - 7.0',
      soilTypes: ['Well-drained Sandy Loam', 'Red Loam'],
      icon: '🍅'
    },
    {
      id: 'onion',
      name: { en: 'Onion', mr: 'कांदा', hi: 'प्याज' },
      scientificName: 'Allium cepa',
      season: { en: 'Kharif, Late Kharif & Rabi', mr: 'खरीप, रांगडा व रब्बी', hi: 'खरीफ व रबी' },
      idealPh: '6.5 - 7.5',
      soilTypes: ['Sandy Loam', 'Light Alluvial'],
      icon: '🧅'
    },
    {
      id: 'potato',
      name: { en: 'Potato', mr: 'बटाटा', hi: 'आलू' },
      scientificName: 'Solanum tuberosum',
      season: { en: 'Rabi / Winter', mr: 'रब्बी हंगाम', hi: 'रबी मौसम' },
      idealPh: '5.2 - 6.4',
      soilTypes: ['Sandy Loam rich in organic matter', 'Silt Loam'],
      icon: '🥔'
    },
    {
      id: 'maize',
      name: { en: 'Maize / Corn', mr: 'मका', hi: 'मक्का' },
      scientificName: 'Zea mays',
      season: { en: 'Kharif & Rabi', mr: 'खरीप व रब्बी', hi: 'खरीफ और रबी' },
      idealPh: '6.0 - 7.2',
      soilTypes: ['Fertile Loam', 'Black Soil'],
      icon: '🌽'
    },
    {
      id: 'soybean',
      name: { en: 'Soybean', mr: 'सोयाबीन', hi: 'सोयाबीन' },
      scientificName: 'Glycine max',
      season: { en: 'Kharif (Monsoon)', mr: 'खरीप हंगाम', hi: 'खरीफ (मानसून)' },
      idealPh: '6.0 - 7.0',
      soilTypes: ['Well-drained Black & Clay Loam'],
      icon: '🌱'
    }
  ],

  // Crop Diseases Knowledge Base
  diseases: {
    // Sugarcane
    'sugarcane_red_rot': {
      cropId: 'sugarcane',
      diseaseId: 'red_rot',
      isHealthy: false,
      severity: 'High',
      confidence: 96.8,
      name: {
        en: 'Red Rot Disease (Colletotrichum falcatum)',
        mr: 'लाल कूज / तांबेरा रोग (रेड रॉट)',
        hi: 'लाल सड़न रोग (रेड रॉट)'
      },
      symptoms: {
        en: [
          'Third or fourth leaf from the top starts yellowing and withering at tip',
          'Internal tissue shows bright red discoloration interspersed with white crosswise patches',
          'Characteristic alcoholic or sour wine-like smell when stem is split open',
          'Shrinking and drying up of stalks leading to hollow pith'
        ],
        mr: [
          'वरची तिसरी किंवा चौथी पाने शेंड्याकडून पिवळी पडून सुकू लागतात',
          'ऊस उभा कापल्यास आतील गर लालसर दिसतो व त्यावर पांढरे आडवे पट्टे आढळतात',
          'ऊस कापल्यावर आंबूस दारूसारखा वास येतो',
          'कांडे आतून पोकळ व वजनाने हलके होते'
        ],
        hi: [
          'शीर्ष से तीसरी या चौथी पत्ती सूखने और पीली पड़ने लगती है',
          'गन्ने के तने को चीरने पर अंदर का गूदा लाल हो जाता है और उस पर सफेद आड़े धब्बे दिखते हैं',
          'तने से सिरके या शराब जैसी खट्टी गंध आती है',
          'गन्ने का तना सूखकर हल्का और खोखला हो जाता है'
        ]
      },
      causes: {
        en: [
          'Fungus Colletotrichum falcatum spread via infected seed setts',
          'Waterlogging in low-lying fields and poor drainage',
          'Continuous monocropping without crop rotation',
          'Injury to roots or rind caused by borers or cultivation implements'
        ],
        mr: [
          'संक्रमित बेणे (कांडे) वापरल्यामुळे बुरशीचा प्रसार',
          'शेतात पाणी साचून राहणे व पाण्याचा निचरा न होणे',
          'एकाच जमिनीत वर्षानुवर्षे केवळ उसाचे पीक घेणे',
          'खोडकिडी किंवा अवजारांमुळे उसाला झालेली जखम'
        ],
        hi: [
          'संक्रमित बीज (सेट) के माध्यम से फंगस का फैलाव',
          'खेत में जलभराव और जल निकासी की कमी',
          'लगातार एक ही खेत में गन्ने की फसल लगाना (फसल चक्र का अभाव)',
          'कीटों या कृषि यंत्रों से गन्ने पर घाव लगना'
        ]
      },
      prevention: {
        en: [
          'Always use disease-free, certified tissue-cultured or heat-treated setts',
          'Follow sett treatment: Dip in Carbendazim 0.1% or Trichoderma viride before planting',
          'Practice mandatory 2-3 year crop rotation with green manure or pulses',
          'Ensure furrow slope permits rapid surface drainage during monsoons'
        ],
        mr: [
          'नेहमी निरोगी व उष्णजल प्रक्रिया केलेले बेणे वापरा',
          'बेणे प्रक्रिया: लागवडीपूर्वी कार्बेन्डाझिम ०.१% किंवा ट्रायकोडर्मा व्हिरिडी द्रावणात बुडवा',
          'उसानंतर ताग, धैंचा किंवा कडधान्याचे फेरपालट पीक घ्या',
          'पावसाळ्यात पाण्याचा निचरा होण्यासाठी शेतात योग्य चारी काढा'
        ],
        hi: [
          'प्रमाणित और रोगमुक्त बीजों का ही चयन करें',
          'बीज शोधन: रोपाई से पहले कार्बेन्डाजिम या ट्राइकोडर्मा विरिडी के घोल में डुबोएं',
          'गन्ने के बाद दलहन या हरी खाद (ढैंचा/सनई) के साथ फसल चक्र अपनाएं',
          'खेत में जल निकासी का उचित प्रबंध रखें'
        ]
      },
      treatment: {
        en: [
          'Immediately uproot and burn or deeply bury infected clumps to arrest field spread',
          'Drench root zone of surrounding plants with Trichoderma viride (5 kg/acre with enriched FYM)',
          'Foliar spray of Thiophanate Methyl 70% WP (2 g/L) if in early stages',
          'Avoid taking ratoon (khodva) crop from an infected field'
        ],
        mr: [
          'रोगट उसाचे बुंधे मुळासकट उपटून शेताबाहेर जाळून टाका',
          'शेजारील निरोगी उसाच्या मुळाशी ट्रायकोडर्मा व्हिरिडी (५ किलो प्रति एकर शेणखतात मिसळून) द्या',
          'सुरुवातीच्या टप्प्यात थायोफिनेट मिथाईल ७०% WP (२ ग्रॅम/लिटर पाणी) फवारा',
          'बाधित शेतामध्ये खोडवा (खोडवे) ठेवू नका'
        ],
        hi: [
          'संक्रमित पौधों को जड़ से उखाड़कर खेत से दूर जला या गाड़ दें',
          'आस-पास के पौधों की जड़ों में ट्राइकोडर्मा (५ किग्रा प्रति एकड़ सड़ी गोबर खाद में मिलाकर) दें',
          'प्रारंभिक अवस्था में थायोफेनेट मिथाइल ७०% WP (२ ग्राम प्रति लीटर) का छिड़काव करें',
          'संक्रमित खेत में पेड़ी (रतून) की फसल बिल्कुल न लें'
        ]
      }
    },

    'sugarcane_healthy': {
      cropId: 'sugarcane',
      diseaseId: 'healthy',
      isHealthy: true,
      severity: 'None',
      confidence: 97.4,
      name: {
        en: 'Healthy Sugarcane Crop',
        mr: 'निरोगी व जोमदार ऊस पीक',
        hi: 'स्वस्थ गन्ना फसल'
      },
      symptoms: {
        en: [
          'Vibrant dark green upright foliage without discoloration or lesions',
          'Thick, uniform internodes without internal vascular reddening',
          'Active tillering and vigorous root anchorage',
          'Normal moisture sheath with no pest infestation'
        ],
        mr: [
          'पाने गर्द हिरवीगार, सरळ वाढणारी व कोणताही डाग नसलेली',
          'कांड्या जाड, एकसारख्या आणि निरोगी गाभ्यासह',
          'भरपूर जोमदार फुटवे आणि बळकट मुळांची पकड',
          'कोणत्याही किडीचा प्रादुर्भाव नाही'
        ],
        hi: [
          'पत्तियां गहरी हरी, सीधी और बिना किसी धब्बे की',
          'तने की पोरियां मोटी, एकसमान और अंदर से स्वस्थ',
          'मजबूत कल्ले और स्वस्थ जड़ें',
          'कीट या रोग का कोई लक्षण नहीं'
        ]
      },
      causes: {
        en: ['Optimal soil moisture, balanced nutrition, and timely cultural practices'],
        mr: ['योग्य सिंचन, संतुलित खत व्यवस्थापन आणि वेळेवर आंतरमशागत'],
        hi: ['संतुलित उर्वरक, उचित सिंचाई और समय पर निराई-गुड़ाई']
      },
      prevention: {
        en: [
          'Maintain regular irrigation intervals (avoid water stress during tillering & grand growth)',
          'Apply balanced NPK in scheduled splits: Urea + DAP + MOP with micronutrients',
          'Earthing up (बांधणी) at 90-120 days to prevent lodging during wind',
          'Apply neem cake at base to discourage root termites and white grubs'
        ],
        mr: [
          'वाढ आणि फुटव्यांच्या काळात पाण्याचा ताण पडू देऊ नका',
          'वेळेवर नत्र, स्फुरद आणि पालाशच्या योग्य मात्रा द्या',
          '९० ते १२० दिवसांनी उसाला मोठी बांधणी करा जेणेकरून ऊस लोळणार नाही',
          'हुमणी व वाळवीच्या प्रतिबंधासाठी निंबोळी पेंड वापरा'
        ],
        hi: [
          'कल्ले फूटने और बढ़वार की अवस्था में समय पर सिंचाई करें',
          'यूरिया, डीएपी और पोटाश की संतुलित खुराक समय पर दें',
          '९०-१२० दिनों में पौधों पर मिट्टी चढ़ाएं ताकि हवा से गन्ना गिरे नहीं',
          'दीमक और सफेद लट की रोकथाम के लिए नीम की खली डालें'
        ]
      },
      treatment: {
        en: [
          'No chemical pesticide needed',
          'Maintain routine maintenance sprays: 19:19:19 foliar spray (5g/L) to boost cane girth',
          'Regular field monitoring'
        ],
        mr: [
          'कोणत्याही रासायनिक औषधांची गरज नाही',
          'कांड्यांची जाडी वाढवण्यासाठी १९:१९:१९ विद्राव्य खताची (५ ग्रॅम/लिटर) फवारणी करू शकता',
          'नियमित शेतीची पाहणी चालू ठेवा'
        ],
        hi: [
          'किसी कीटनाशक की आवश्यकता नहीं है',
          'गन्ने की मोटाई बढ़ाने के लिए १९:१९:१९ घुलनशील उर्वरक (५ ग्राम/लीटर) का छिड़काव कर सकते हैं',
          'नियमित रूप से खेत का निरीक्षण करते रहें'
        ]
      }
    },

    // Tomato
    'tomato_early_blight': {
      cropId: 'tomato',
      diseaseId: 'early_blight',
      isHealthy: false,
      severity: 'Medium',
      confidence: 95.5,
      name: {
        en: 'Early Blight (Alternaria solani)',
        mr: 'टोमॅटोचा लवकर येणारा करपा (अल्टरनेरिया)',
        hi: 'टमाटर का अगेती झुलसा (अर्ली ब्लाइट)'
      },
      symptoms: {
        en: [
          'Dark brown to black spots with concentric rings resembling a "target board" on older leaves',
          'Yellow halo surrounding the circular leaf lesions',
          'Lower leaves turn completely yellow, wither, and drop prematurely',
          'Sunscald on exposed tomato fruits due to defoliation'
        ],
        mr: [
          'जुन्या पानांवर गोलाकार, काळे-तपकिरी डाग आणि त्याभोवती चक्राकार कडे (लक्ष्य फलकासारखे)',
          'डागांच्या भोवती पिवळसर वलय दिसते',
          'खालची पाने पिवळी पडून गळतात',
          'पाने गळाल्यामुळे टोमॅटोच्या फळांवर उन्हाचा तडाखा बसतो'
        ],
        hi: [
          'निचली पुरानी पत्तियों पर गहरे भूरे गोल छल्लेदार धब्बे (टारगेट बोर्ड जैसे)',
          'धब्बों के चारों ओर पीला घेरा बन जाता है',
          'पत्तियां पीली होकर समय से पहले सूखकर गिरने लगती हैं',
          'पत्ते झड़ने से फलों पर धूप से झुलसने के निशान पड़ते हैं'
        ]
      },
      causes: {
        en: [
          'Fungus Alternaria solani surviving in solanaceous plant debris',
          'Warm temperatures (24-30°C) combined with high humidity or morning dew',
          'Overhead sprinkler irrigation wetting the leaf surface for prolonged hours'
        ],
        mr: [
          'जमिनीतील जुन्या अवशेषांमधील अल्टरनेरिया बुरशी',
          'उबदार हवामान व हवेतील जास्त आर्द्रता / दव',
          'तुषार सिंचनामुळे पानांवर जास्त वेळ पाणी साचून राहणे'
        ],
        hi: [
          'पुराने फसल अवशेषों में मौजूद अल्टरनेरिया फंगस',
          'गर्म तापमान (२४-३० डिग्री) और उच्च आर्द्रता या ओस',
          'फव्वारा सिंचाई से पत्तियों पर देर तक पानी टिकना'
        ]
      },
      prevention: {
        en: [
          'Mulch with straw or plastic to prevent soil splash onto lower foliage',
          'Prune lower leaves up to 12 inches from ground to promote airflow',
          'Switch to drip irrigation to keep foliage completely dry',
          'Practice 3-year crop rotation avoiding potato, brinjal, and chili'
        ],
        mr: [
          'माती उडून पानांना लागू नये म्हणून मल्चिंग पेपर किंवा भुसकटाचा वापर करा',
          'जमिनीपासून १ फूट उंचीवरील खालची जुनी पाने छाटून टाका',
          'ठिबक सिंचनाचा वापर करा जेणेकरून पाने ओली होणार नाहीत',
          'वांगे, मिरची, बटाटा या पिकांची लागवड एकापाठोपाठ करू नका'
        ],
        hi: [
          'मिट्टी के छींटों से बचाव के लिए मल्चिंग का प्रयोग करें',
          'जमीन से १ फीट ऊपर तक की निचली पत्तियां हटा दें',
          'ड्रिप (टपक) सिंचाई का उपयोग करें ताकि पत्तियां गीली न हों',
          'आलू, बैंगन और मिर्च के साथ फसल चक्र अपनाएं'
        ]
      },
      treatment: {
        en: [
          'Organic option: Foliar spray of Neem Oil (3-5 ml/L) or Trichoderma harzianum (5g/L)',
          'Fungicide spray: Mancozeb 75% WP (2.5 g/L) or Copper Oxychloride 50% WP (2.5 g/L)',
          'Curative systemic spray: Azoxystrobin + Difenoconazole (1 ml/L) on serious infestation',
          'Always spray during calm, clear hours and ensure complete leaf coverage'
        ],
        mr: [
          'सेंद्रिय उपाय: निंबोळी तेल (३-५ मिली/लिटर) किंवा ट्रायकोडर्मा (५ ग्रॅम/लिटर) फवारा',
          'बुरशीनाशक: मँकोझेब ७५% WP (२.५ ग्रॅम/लिटर) किंवा कॉपर ऑक्सिक्लोराईड (२.५ ग्रॅम/लिटर)',
          'जास्त प्रादुर्भाव असल्यास: अझोक्सीस्ट्रोबिन + डायफेनोकोनाझोल (१ मिली/लिटर) फवारा',
          'नेहमी सकाळी किंवा संध्याकाळी शांत हवेत फवारणी करा'
        ],
        hi: [
          'जैविक उपाय: नीम का तेल (३-५ मिली/लीटर) या ट्राइकोडर्मा का छिड़काव करें',
          'फफूंदनाशक: मैंकोजेब ७५% WP (२.५ ग्राम/लीटर) या कॉपर ऑक्सीक्लोराइड (२.५ ग्राम/लीटर)',
          'गंभीर संक्रमण में: एज़ोक्सीस्ट्रोबिन + डाइफेनोकोनाज़ोल (१ मिली/लीटर)',
          'छिड़काव सुबह या शाम के समय शांत मौसम में ही करें'
        ]
      }
    },

    'tomato_leaf_curl': {
      cropId: 'tomato',
      diseaseId: 'leaf_curl',
      isHealthy: false,
      severity: 'High',
      confidence: 96.2,
      name: {
        en: 'Tomato Leaf Curl Virus (ToLCV)',
        mr: 'टोमॅटो चुरडा-मुरडा रोग / लीफ कर्ल व्हायरस',
        hi: 'टमाटर पत्ती मरोड़ रोग (लीफ कर्ल वायरस)'
      },
      symptoms: {
        en: [
          'Severe upward curling, cupping, and puckering of young leaves',
          'Stunted plant growth with shortened internodes giving a bushy look',
          'Interveinal chlorosis (yellowing) with thickened, brittle leaves',
          'Heavy flower drop and drastically reduced fruit setting'
        ],
        mr: [
          'कोवळ्या पानांचे वरच्या बाजूला आक्रसणे व वाटीसारखा आकार होणे (चुरडा-मुरडा)',
          'रोपांची वाढ खुंटणे व झाड झुडपासारखे दिसणे',
          'पानांच्या शिरांमधील भाग पिवळा पडणे आणि पाने जाड व ठिसूळ होणे',
          'फुलगळ मोठ्या प्रमाणावर होणे आणि फळे न धरणे'
        ],
        hi: [
          'ऊपर की नई पत्तियों का मुड़ना और कटोरीनुमा सिकुड़ जाना',
          'पौधे का बौना हो जाना और झाड़ी जैसा रूप लेना',
          'पत्तियों का पीला पड़ना, मोटा और कुरकुरा हो जाना',
          'फूलों का झड़ना और फल न लगना'
        ]
      },
      causes: {
        en: [
          'Begomovirus transmitted exclusively by the Silverleaf Whitefly (Bemisia tabaci)',
          'Warm and dry spells promoting explosive whitefly populations',
          'Proximity to infected host crops (cotton, okra, weed reservoirs)'
        ],
        mr: [
          'पांढरी माशी (व्हाईट फ्लाय) या रसशोषक किडीमुळे विषाणूचा प्रसार होतो',
          'कोरडे व उष्ण हवामान पांढऱ्या माशीच्या वाढीस पोषक ठरते',
          'शेतातील गांजरगवत किंवा भेंडी/कापूस यांसारखी यजमान पिके'
        ],
        hi: [
          'सफेद मक्खी (व्हाइटफ्लाई) द्वारा वायरस का फैलाव',
          'शुष्क व गर्म मौसम में सफेद मक्खी का तेजी से बढ़ना',
          'आसपास खरपतवार या भिंडी/कपास की फसल होना'
        ]
      },
      prevention: {
        en: [
          'Install yellow sticky traps (15-20 per acre) above crop canopy to catch whiteflies',
          'Use 40-mesh insect-proof nylon nets in nursery beds',
          'Grow 2-3 barrier rows of maize or bajra around the tomato plot',
          'Select ToLCV resistant or tolerant hybrid varieties'
        ],
        mr: [
          'शेतात एकरी १५-२० पिवळे चिकट सापळे लावा जेणेकरून पांढरी माशी पकडली जाईल',
          'रोपवाटिकेत ४० मेशच्या कीटक प्रतिबंधक जाळीचा वापर करा',
          'टोमॅटोच्या शेताभोवती मका किंवा बाजरीचे २-३ संरक्षक पट्टे लावा',
          'चुरडा-मुरडा रोगास प्रतिकारक्षम वाणांची निवड करा'
        ],
        hi: [
          'प्रति एकड़ १५-२० पीले चिपचिपे जाल (येलो स्टिकी ट्रैप) लगाएं',
          'नर्सरी में कीट-रोधी जाली (४० मेश) का प्रयोग करें',
          'खेत की मेड़ों पर मक्का या बाजरा की २-३ कतारें सुरक्षा दीवार के रूप में लगाएं',
          'रोग प्रतिरोधी संकर किस्मों का चयन करें'
        ]
      },
      treatment: {
        en: [
          'Immediately rogue out and destroy severely curled stunt plants to stop viral spread',
          'Spray botanical: 5% Neem Seed Kernel Extract (NSKE) or Neem Oil (10,000 ppm @ 2 ml/L)',
          'Systemic insecticide for vector control: Diafenthiuron 50% WP (1 g/L) or Acetamiprid 20% SP (0.5 g/L)',
          'Spray Seaweed Extract (2 ml/L) to relieve abiotic stress in moderately affected plants'
        ],
        mr: [
          'रोगट झाडे त्वरित उपटून जमिनीत गाडून टाका जेणेकरून इतर झाडांना संसर्ग होणार नाही',
          '५% निंबोळी अर्क किंवा निंबोळी तेल (२-३ मिली/लिटर) फवारा',
          'पांढऱ्या माशीच्या नियंत्रणासाठी: डायाफेन्थिरॉन ५०% WP (१ ग्रॅम/लिटर) किंवा ॲसिटामिप्रीड २०% SP (०.५ ग्रॅम/लिटर)',
          'झाडाची प्रतिकारशक्ती वाढवण्यासाठी सीवीड अर्क (२ मिली/लिटर) फवारा'
        ],
        hi: [
          'अत्यधिक ग्रसित पौधों को तुरंत उखाड़कर नष्ट करें',
          '५% नीम बीज अर्क (एनएसकेई) या नीम तेल (२ मिली/लीटर) का छिड़काव करें',
          'सफेद मक्खी नियंत्रण: डायफेंथियूरॉन ५०% WP (१ ग्राम/लीटर) या एसिटामिप्रिड (०.५ ग्राम/लीटर)',
          'पौधों की शक्ति बनाए रखने के लिए सी-वीड एक्सट्रैक्ट का छिड़काव करें'
        ]
      }
    },

    // Rice
    'rice_bacterial_blight': {
      cropId: 'rice',
      diseaseId: 'bacterial_blight',
      isHealthy: false,
      severity: 'High',
      confidence: 97.1,
      name: {
        en: 'Bacterial Leaf Blight (Xanthomonas oryzae)',
        mr: 'भातावरील जीवाणूजन्य करपा (बीएलबी)',
        hi: 'धान का जीवाणु पत्ती झुलसा (बैक्टीरियल लीफ ब्लाइट)'
      },
      symptoms: {
        en: [
          'Water-soaked to yellowish-green wavy lesions starting along leaf margins',
          'Lesions turn straw-yellow with wavy wavy margins running down the leaf blade',
          'Milky or opaque bacterial ooze droplets visible in early morning on lesions',
          'Severe infection causes wilting ("Kresek" phase) in seedling stage'
        ],
        mr: [
          'पानांच्या कडांवरून पाणावलेले आणि पिवळसर नागमोडी चट्टे सुरू होतात',
          'डाग वाळून पेंढ्यासारखे फिकट पिवळे होतात आणि पानांच्या कडा करपतात',
          'सकाळी पानाच्या डागांवर जीवाणूंचा चिकट दुधाळ स्त्राव (ऊझ) दिसतो',
          'रोपावस्थेत झाडे सुकून सुकतात (क्रेसेक अवस्था)'
        ],
        hi: [
          'पत्तियों के किनारों से पानी जैसे पीले-हरे लहरदार धब्बे शुरू होते हैं',
          'धब्बे बाद में भूसे के रंग जैसे सूख जाते हैं और पत्ती झुलस जाती है',
          'सुबह के समय पत्तियों पर बैक्टीरिया की दूधिया बूंदें दिखाई देती हैं',
          'नर्सरी व कल्ले फूटने के समय पौधे सूखने लगते हैं (क्रेसेक)'
        ]
      },
      causes: {
        en: [
          'Bacterium Xanthomonas oryzae pv. oryzae',
          'Excessive nitrogen fertilizer application without balanced potassium',
          'Deep standing water in paddy fields and cyclonic wind rains spreading bacteria'
        ],
        mr: [
          'झांथोमोनॉस ओरिझी नावाचा जीवाणू',
          'नत्राचा (युरिया) अतिरेकी वापर व पालाशची कमतरता',
          'शेतात साचलेले पाणी व जोरदार वाऱ्यासह येणारा पाऊस'
        ],
        hi: [
          'ज़ैंथोमोनास ओराइजी बैक्टीरिया',
          'यूरिया (नाइट्रोजन) का अत्यधिक प्रयोग और पोटाश की कमी',
          'खेत में लगातार अधिक पानी भरे रहना और तेज बारिश'
        ]
      },
      prevention: {
        en: [
          'Apply balanced potash (MOP) to strengthen cell walls against bacterial entry',
          'Drain stagnant standing water from the field for 2-3 days to break humidity cycle',
          'Do not clip seedling tips during transplanting (clips act as entry wounds)',
          'Cultivate BLB tolerant cultivars (e.g., Improved Samba Mahsuri, Swarna Sub1)'
        ],
        mr: [
          'पालाश (पोटॅश) खताचा संतुलित वापर करा ज्यामुळे झाडाची त्वचा जाड होते',
          'शेतातील साचलेले पाणी २-३ दिवस बाहेर काढून टाका',
          'पुनर्लागवड करताना रोपांचे शेंडे कापू नका',
          'बीएलबी रोगप्रतिकारक वाणांची लागवड करा'
        ],
        hi: [
          'पोटाश की संतुलित मात्रा दें जिससे पौधों में रोग रोधक क्षमता बढ़े',
          'खेत का पानी २-३ दिन के लिए निकाल दें ताकि नमी कम हो',
          'रोपाई के समय पौधों के ऊपरी पत्ते न काटें',
          'रोग प्रतिरोधी किस्मों का चयन करें'
        ]
      },
      treatment: {
        en: [
          'Stop further application of nitrogenous fertilizers (Urea) until disease subsides',
          'Bactericide spray: Streptocycline or Plantomycin (1.5 g / 10 L) + Copper Oxychloride (25 g / 10 L)',
          'Organic spray: Fresh cow dung slurry supernatant (20%) foliar spray'
        ],
        mr: [
          'रोग आटोक्यात येईपर्यंत युरिया देणे त्वरित थांबवा',
          'जीवाणूनाशक फवारणी: स्ट्रेप्टोमायसीन / प्लँटोमायसीन (१.५ ग्रॅम / १० लिटर) + कॉपर ऑक्सिक्लोराईड (२५ ग्रॅम / १० लिटर)',
          'सेंद्रिय उपाय: ताज्या शेणाच्या गोमूत्रयुक्त निवळीची (२०%) फवारणी'
        ],
        hi: [
          'यूरिया खाद का प्रयोग तुरंत रोक दें',
          'जीवाणुनाशक छिड़काव: स्ट्रेप्टोसाइक्लिन / प्लांटोमाइसिन (१.५ ग्राम / १० लीटर) + कॉपर ऑक्सीक्लोराइड (२५ ग्राम / १० लीटर)',
          'जैविक उपाय: ताजे गाय के गोबर के अर्क का छिड़काव'
        ]
      }
    },

    // Wheat
    'wheat_yellow_rust': {
      cropId: 'wheat',
      diseaseId: 'yellow_rust',
      isHealthy: false,
      severity: 'Critical',
      confidence: 98.2,
      name: {
        en: 'Stripe / Yellow Rust (Puccinia striiformis)',
        mr: 'गव्हावरील पिवळा तांबेरा (स्ट्राइप रस्ट)',
        hi: 'गेहूं का पीला रतुआ (येलो रस्ट)'
      },
      symptoms: {
        en: [
          'Parallel linear yellow stripes of powdery pustules along leaf veins',
          'Bright yellow/lemon dust easily rubs off onto fingers or white cloth',
          'Leaves dry up prematurely, turning brown and papery',
          'Grain shriveling and up to 70% yield loss in susceptible varieties'
        ],
        mr: [
          'पानांच्या शिरांना समांतर अशा पिवळ्या रंगाच्या ओळींमध्ये बारीक फोड (पस्ट्युल्स)',
          'पानांवर हात फिरवल्यास पिवळी हळदीसारखी भुकटी बोटांना लागते',
          'पाने अकाली वाळून तपकिरी होतात',
          'दाणे बारीक व सुरकुतलेले भरतात'
        ],
        hi: [
          'पत्तियों की नसों के समानांतर चमकीली पीली धारियों में पाउडर जैसे फफोले',
          'पत्ती पर उंगली फेरने पर हल्दी जैसा पीला पाउडर चिपक जाता है',
          'पत्तियां समय से पहले सूखकर भूरी पड़ जाती हैं',
          'दाने सिकुड़ जाते हैं और उपज में भारी गिरावट आती है'
        ]
      },
      causes: {
        en: [
          'Fungal pathogen Puccinia striiformis f. sp. tritici windblown from foothills',
          'Cool weather (10-15°C) coupled with intermittent rain, heavy dew and foggy mornings',
          'Growing unapproved susceptible wheat varieties'
        ],
        mr: [
          'हवेतून वाहून येणारी पुक्सिनिया बुरशी',
          'थंड हवामान (१०-१५ अंश से.) आणि दाट धुके किंवा दव',
          'असंवेदनशील वाणांची लागवड'
        ],
        hi: [
          'हवा द्वारा फैलने वाला पक्सीनिया कवक',
          'ठंडा मौसम (१०-१५°C), घना कोहरा और ओस',
          'संवेदनशील किस्मों की बुवाई'
        ]
      },
      prevention: {
        en: [
          'Sow certified rust-resistant wheat varieties recommended for your agro-climatic zone',
          'Timely sowing between November 1st and 15th to escape late-season epidemic',
          'Avoid excessive irrigation that prolongs micro-climate canopy dampness'
        ],
        mr: [
          'स्थानिक कृषी विद्यापीठाने शिफारस केलेले तांबेरा प्रतिकारक वाण पेरा',
          '१ ते १५ नोव्हेंबर दरम्यान वेळेवर पेरणी करा',
          'अनावश्यक जास्त पाणी देणे टाळा'
        ],
        hi: [
          'प्रमाणित पीला रतुआ प्रतिरोधी किस्मों की ही बुवाई करें',
          'समय पर (१-१५ नवंबर) बुवाई पूरी करें',
          'अतिरिक्त सिंचाई से बचें ताकि खेत में नमी अधिक न रहे'
        ]
      },
      treatment: {
        en: [
          'Act at the FIRST appearance of yellow stripe foci in field corners',
          'Fungicide spray: Propiconazole 25% EC (Tilt) @ 1 ml/L (200 ml in 200 L water/acre)',
          'Alternative: Tebuconazole 25.9% EC (1 ml/L)',
          'Repeat spray after 12-15 days if cool humid conditions persist'
        ],
        mr: [
          'शेतात एकही पिवळी ओळ दिसताच तातडीने उपाययोजना करा',
          'बुरशीनाशक: प्रोपिकोनाझोल २५% EC (टिल्ट) @ १ मिली/लिटर (२०० मिली प्रति एकर २०० लिटर पाण्यात)',
          'पर्यायी औषध: टेबुकोनाझोल २५.९% EC (१ मिली/लिटर)',
          'थंड व दमट हवामान असल्यास १२-१५ दिवसांनी दुसरी फवारणी करा'
        ],
        hi: [
          'खेत में पीली धारी का पहला लक्षण दिखते ही तुरंत छिड़काव करें',
          'फफूंदनाशक: प्रोपिकोनाज़ोल २५% EC (टिल्ट) @ १ मिली/लीटर (२०० मिली प्रति एकड़ २०० लीटर पानी में)',
          'वैकल्पिक: टेबुकोनाज़ोल २५.९% EC (१ मिली/लीटर)',
          'मौसम अनुकूल न होने पर १२-१५ दिन बाद दोबारा छिड़काव करें'
        ]
      }
    },

    // Cotton
    'cotton_leaf_curl': {
      cropId: 'cotton',
      diseaseId: 'leaf_curl',
      isHealthy: false,
      severity: 'High',
      confidence: 95.8,
      name: {
        en: 'Cotton Leaf Curl Virus (CLCuV)',
        mr: 'कापसावरील चुरडा-मुरडा (पर्णगुच्छ रोग)',
        hi: 'कपास का पत्ती मरोड़ रोग (कॉटन लीफ कर्ल)'
      },
      symptoms: {
        en: [
          'Upward and downward curling of cotton leaves',
          'Thickening and darkening of primary and secondary veins',
          'Small leaf-like enations (outgrowths) forming on the underside of leaves',
          'Severe stunting of bushes with low boll retention'
        ],
        mr: [
          'कापसाची पाने वर किंवा खाली वाकडी होतात (चुरडा-मुरडा)',
          'पानांच्या मुख्य व उपशिरा जाड व गर्द हिरव्या होतात',
          'पानांच्या पाठीमागे लहान पानासारखी अतिरिक्त वाढ (एनेशन) दिसून येते',
          'झाडाची वाढ खुंटते आणि बोंडे खूप कमी लागतात'
        ],
        hi: [
          'कपास की पत्तियां ऊपर या नीचे की ओर मुड़ जाती हैं',
          'पत्तियों की मुख्य नसें मोटी और गहरी हरी हो जाती हैं',
          'पत्ती की निचली सतह पर छोटे पत्ते जैसी गांठें (एनेशन) बन जाती हैं',
          'पौधों की बढ़वार रुक जाती है और टिंडे बहुत कम लगते हैं'
        ]
      },
      causes: {
        en: [
          'Cotton leaf curl virus transmitted by Whitefly (Bemisia tabaci)',
          'Overwintering of whitefly on weed hosts like Parthenium (Gajar ghas)',
          'Warm dry weather favoring insect multiplication'
        ],
        mr: [
          'पांढऱ्या माशीमार्फत विषाणूचा प्रसार',
          'शेतातील गांजरगवत व इतर तणांवर पांढऱ्या माशीचा वास्तव्य',
          'कोरडे व उष्ण वातावरण'
        ],
        hi: [
          'सफेद मक्खी द्वारा वायरस का संचरण',
          'गाजरघास और खरपतवार पर सफेद मक्खी का पनपना',
          'गर्म और शुष्क जलवायु'
        ]
      },
      prevention: {
        en: [
          'Eradicate weed hosts (Parthenium, Xanthium) along farm bunds before sowing',
          'Install yellow sticky traps (20 traps/acre)',
          'Avoid planting cotton near ladies finger (Okra) or brinjal',
          'Use CLCuD tolerant Bt hybrid seeds'
        ],
        mr: [
          'बांधावरील गांजरगवत व तण पेरणीपूर्वीच उपटून नष्ट करा',
          'एकरी २० पिवळे चिकट सापळे लावा',
          'कापसाजवळ भेंडी किंवा वांगी लावणे टाळा',
          'प्रतिकारक बीटी कपाशीच्या वाणांची निवड करा'
        ],
        hi: [
          'मेड़ों से गाजरघास और अन्य खरपतवार नष्ट करें',
          'प्रति एकड़ २० पीले चिपचिपे जाल लगाएं',
          'कपास के पास भिंडी की खेती से बचें',
          'रोग सहनशील बीटी संकर बीजों का प्रयोग करें'
        ]
      },
      treatment: {
        en: [
          'Control whitefly vector: Flonicamid 50 WG @ 0.4 g/L or Spiromesifen 22.9 SC @ 1 ml/L',
          'Spray 1% Potassium Nitrate (13:0:45) + Micronutrient mixture to aid vegetative recovery',
          'Spray Neem Seed Kernel Extract (5%) at weekly intervals'
        ],
        mr: [
          'पांढरी माशी नियंत्रण: फ्लोनिकामाइड ५० WG @ ०.४ ग्रॅम/लिटर किंवा स्पायरोमेसिफेन २२.९ SC @ १ मिली/लिटर',
          'पोषक फवारणी: १३:००:४५ (पोटॅशियम नायट्रेट) १% + सूक्ष्म अन्नद्रव्ये फवारा',
          '५% निंबोळी अर्काची आठवड्यातून एकदा फवारणी करा'
        ],
        hi: [
          'सफेद मक्खी नियंत्रण: फ्लोनिकामिड ५० WG @ ०.४ ग्राम/लीटर या स्पाइरोमेसिफेन २२.९ SC @ १ मिली/लीटर',
          'पौधों की रिकवरी के लिए: पोटेशियम नाइट्रेट (१३:००:४५) १% + सूक्ष्म पोषक तत्व छिड़कें',
          'नीम का काढ़ा (५% एनएसकेई) का छिड़काव करें'
        ]
      }
    },

    // Potato
    'potato_late_blight': {
      cropId: 'potato',
      diseaseId: 'late_blight',
      isHealthy: false,
      severity: 'Critical',
      confidence: 97.9,
      name: {
        en: 'Potato Late Blight (Phytophthora infestans)',
        mr: 'बटाट्यावरील उशिरा येणारा करपा (लेट ब्लाइट)',
        hi: 'आलू का पछेती झुलसा (लेट ब्लाइट)'
      },
      symptoms: {
        en: [
          'Water-soaked dark lesions rapidly expanding into greasy black-brown blotches on leaves & stems',
          'Delicate white fungal mildew seen on leaf undersides in humid mornings',
          'Foul decaying smell across the infected field',
          'Infected tubers show dry, granular reddish-brown rot penetrating beneath the skin'
        ],
        mr: [
          'पानांवर व खोडावर पाणावलेले काळे-तपकिरी डाग जे वेगाने पसरतात',
          'दमट सकाळी पानांच्या खाली पांढरी बुरशीची लव दिसते',
          'शेतात कुजल्यासारखा घाणेरडा वास पसरतो',
          'बटाटे कापल्यास सालाखाली लालसर-तपकिरी रंगाची कोरडी कूज दिसते'
        ],
        hi: [
          'पत्तियों और तनों पर पानी जैसे भीगे काले-भूरे धब्बे जो तेजी से फैलते हैं',
          'सुबह के समय पत्तियों की निचली सतह पर सफेद फफूंद दिखाई देती है',
          'खेत में सड़ांध जैसी तेज दुर्गंध आती है',
          'आलू के कंदों के छिलके के नीचे लाल-भूरे रंग का सड़न रोग फैलता है'
        ]
      },
      causes: {
        en: [
          'Water mold Phytophthora infestans',
          'Prolonged cool (12-18°C) temperatures with continuous humidity above 90%',
          'Infected seed tubers used without treatment'
        ],
        mr: [
          'फायटोप्थोरा इन्फेस्टन्स ही बुरशीसदृश वनस्पती',
          'थंड हवामान (१२-१८ अंश से.) आणि ९०% पेक्षा जास्त आर्द्रता',
          'असंक्रमित नसलेले बियाणे वापरणे'
        ],
        hi: [
          'फाइटोफ्थोरा इन्फेस्टन्स फफूंद',
          'ठंडा मौसम (१२-१८°C) और ९०% से अधिक लगातार नमी/धुंध',
          'संक्रमित बीज आलू की बुवाई'
        ]
      },
      prevention: {
        en: [
          'Plant certified certified disease-free seed tubers',
          'Tuber treatment with Mancozeb (3g/kg) before cold storage and planting',
          'Proper high earthing-up to bury tubers at least 10 cm deep to prevent spore washdown',
          'Destroy tomato or potato volunteers and cull piles'
        ],
        mr: [
          'प्रमाणित निरोगी बटाटा बियाणे वापरा',
          'लागवडीपूर्वी बियाण्यास मँकोझेब (३ ग्रॅम/किलो) चोळा',
          'झाडांना चांगली भर लावा जेणेकरून बटाटे उघडे पडणार नाहीत',
          'जुने शिल्लक कंद शेतातून नष्ट करा'
        ],
        hi: [
          'प्रमाणित व रोगमुक्त बीज कंदों का ही प्रयोग करें',
          'बीज शोधन: मैंकोजेब (३ ग्राम/किग्रा) से उपचारित करें',
          'पौधों पर अच्छी तरह मिट्टी चढ़ाएं ताकि कंद ढके रहें',
          'पुराने सड़े आलुओं को खेत से दूर नष्ट करें'
        ]
      },
      treatment: {
        en: [
          'Preventive: Mancozeb 75% WP (2.5 g/L) or Chlorothalonil 75% WP (2 g/L)',
          'Curative / Systemic: Cymoxanil 8% + Mancozeb 64% WP (2.5 g/L) or Metalaxyl 8% + Mancozeb 64% WP (2.5 g/L)',
          'De-haulm (cut top foliage) 10-12 days before harvest to keep tubers safe'
        ],
        mr: [
          'प्रतिबंधात्मक: मँकोझेब ७५% WP (२.५ ग्रॅम/लिटर) किंवा क्लोरोथॅलोनिल (२ ग्रॅम/लिटर)',
          'उपचारात्मक: सायमोक्सॅनिल + मँकोझेब (२.५ ग्रॅम/लिटर) किंवा मेटालॅक्सिल + मँकोझेब (२.५ ग्रॅम/लिटर)',
          'काढणीच्या १०-१२ दिवस आधी बटाट्याचा पाला कापून टाका'
        ],
        hi: [
          'रोकथाम के लिए: मैंकोजेब ७५% WP (२.५ ग्राम/लीटर) का छिड़काव',
          'रोग दिखने पर: साइमोक्सानिल + मैंकोजेब (२.५ ग्राम/लीटर) या मेटालैक्सिल + मैंकोजेब (२.५ ग्राम/लीटर)',
          'खुदाई से १०-१२ दिन पहले आलू की बेलें (पत्ते) काट दें'
        ]
      }
    },

    // Onion
    'onion_purple_blotch': {
      cropId: 'onion',
      diseaseId: 'purple_blotch',
      isHealthy: false,
      severity: 'Medium',
      confidence: 96.1,
      name: {
        en: 'Purple Blotch of Onion (Alternaria porri)',
        mr: 'कांद्यावरील जांभळा करपा (पर्पल ब्लॉच)',
        hi: 'प्याज का बैंगनी धब्बा रोग (पर्पल ब्लॉच)'
      },
      symptoms: {
        en: [
          'Small whitish sunken flecks that turn purple-brown in the center with yellow outer margins',
          'Leaves girdled at lesion points and collapse downwards',
          'Bulb size drastically reduced and storage rotting follows'
        ],
        mr: [
          'पानांवर लहान पांढरे खोलगट डाग जे नंतर मध्यभागी जांभळट-तपकिरी होतात',
          'डागांच्या ठिकाणाहून कांद्याची पात वाकडी होऊन खाली लोंबकळते',
          'कांद्याचा आकार लहान राहतो आणि साठवणुकीत कांदा सडतो'
        ],
        hi: [
          'पत्तियों पर छोटे सफेद धब्बे जो बाद में बीच में बैंगनी-भूरे हो जाते हैं',
          'धब्बे वाले स्थान से पत्तियां मुड़कर नीचे गिर जाती हैं',
          'प्याज की गांठें छोटी रह जाती हैं और भंडारण में सड़ती हैं'
        ]
      },
      causes: {
        en: ['Fungus Alternaria porri favored by warm, humid rainy spells (28-30°C and >80% RH)', 'Thrips feeding damage creating entry wounds'],
        mr: ['अल्टरनेरिया पोरी बुरशी, उबदार व दमट हवामान', 'फुलकिडे (थ्रिप्स) पानांना जखमा करतात'],
        hi: ['अल्टरनेरिया पोरी फंगस, अधिक आर्द्रता और गर्म मौसम', 'थ्रिप्स कीट के काटने से घाव बनना']
      },
      prevention: {
        en: [
          'Dip seedlings in Carbendazim (1g/L) for 15 minutes before transplanting',
          'Avoid excessive close spacing to allow sunlight penetration',
          'Manage onion thrips diligently using blue/yellow sticky traps'
        ],
        mr: [
          'रोपांची पुनर्लागवड करताना कार्बेन्डाझिम (१ ग्रॅम/लिटर) द्रावणात बुडवा',
          'लागवडीमध्ये योग्य अंतर ठेवा जेणेकरून हवा व सूर्यप्रकाश खेळता राहील',
          'थ्रिप्स नियंत्रणासाठी निळे व पिवळे चिकट सापळे लावा'
        ],
        hi: [
          'रोपाई से पहले पौध को कार्बेन्डाजिम के घोल में १५ मिनट डुबोएं',
          'उचित दूरी पर रोपाई करें ताकि हवा और धूप मिल सके',
          'थ्रिप्स नियंत्रण के लिए नीले व पीले स्टिकी ट्रैप लगाएं'
        ]
      },
      treatment: {
        en: [
          'Spray Tebuconazole 25.9% EC @ 1.5 ml/L or Difenoconazole 25% EC @ 1 ml/L',
          'Mix sticker/spreader (Sandovit or Apsa-80 @ 0.5 ml/L) as onion leaves are waxy',
          'Neem oil 5 ml/L + Pongamia oil for organic deterrence'
        ],
        mr: [
          'टेबुकोनाझोल २५.९% EC (१.५ मिली/लिटर) किंवा डायफेनोकोनाझोल २५% EC (१ मिली/लिटर) फवारा',
          'कांद्याची पात मेणासारखी असल्याने फवारणीत चिकट द्रव (स्टिकर/स्प्रेडर) नक्की मिसळा',
          'सेंद्रिय: निंबोळी तेल (५ मिली/लिटर) फवारा'
        ],
        hi: [
          'टेबुकोनाज़ोल २५.९% EC (१.५ मिली/लीटर) या डाइफेनोकोनाज़ोल (१ मिली/लीटर) का छिड़काव करें',
          'प्याज की पत्ती चिकनी होने के कारण घोल में स्टीकर (गोंद) अवश्य मिलाएं',
          'नीम का तेल (५ मिली/लीटर) का छिड़काव करें'
        ]
      }
    },

    // Maize
    'maize_fall_armyworm': {
      cropId: 'maize',
      diseaseId: 'fall_armyworm',
      isHealthy: false,
      severity: 'Critical',
      confidence: 97.5,
      name: {
        en: 'Fall Armyworm (Spodoptera frugiperda) Damage',
        mr: 'मक्यावरील लष्करी अळी (फॉल आर्मीवर्म)',
        hi: 'मक्का का फॉल आर्मीवर्म (सैनिक कीट)'
      },
      symptoms: {
        en: [
          'Elongated shot-holes and ragged, skeletonized leaves on young whorls',
          'Abundant coarse, sawdust-like fecal frass lodged inside the central plant whorl',
          'Larva with four dark spots in a square arrangement on the 8th abdominal segment',
          'Destruction of growing tassel and emerging corn ears'
        ],
        mr: [
          'मक्याच्या पोंग्यातील पानांना बंदुकीच्या छऱ्यासारखी मोठी छिद्रे',
          'पोंग्यात लाकडाच्या भुशासारखी भरपूर अळीची विष्ठा दिसते',
          'अळीच्या पाठीवर ८ व्या खंडावर चार काळे ठिपके चौकोनात दिसतात',
          'कणीस आणि तुरा अळी खाऊन टाकते'
        ],
        hi: [
          'पत्तियों पर बंदूक की गोली जैसे बड़े छेद और कटी-फटी पत्तियां',
          'पौधे के गोभ (पोंग) में लकड़ी के बुरादे जैसा मल भरा होना',
          'इल्ली की पीठ पर पीछे की ओर चार काले चौकोर बिंदु',
          'भुट्टे और बालों को इल्ली द्वारा खा जाना'
        ]
      },
      causes: {
        en: ['Invasive pest Spodoptera frugiperda laying hundreds of dome-shaped eggs on leaf underside'],
        mr: ['स्पोडोप्टेरा फ्रुगिपर्डा अळी जी पानांखाली अंडी पुंजके घालते'],
        hi: ['फॉल आर्मीवर्म कीट का पत्तियों पर अंडे देना']
      },
      prevention: {
        en: [
          'Deep summer ploughing to expose pupae to birds and scorching sun',
          'Intercropping with cowpea, pigeon pea or soybean',
          'Install pheromone traps (5 traps/acre) for monitoring adult male moths'
        ],
        mr: [
          'उन्हाळ्यात खोल नांगरट करा जेणेकरून कोष उन्हाने मरतील',
          'मक्यात चवळी, तूर किंवा सोयाबीनचे आंतरपीक घ्या',
          'एकरी ५ कामगंध सापळे (फेरोमोन ट्रॅप) लावा'
        ],
        hi: [
          'गर्मियों में गहरी जुताई करें ताकि प्यूपा नष्ट हो सकें',
          'लोबिया, अरहर या सोयाबीन के साथ अंतरवर्तीय फसल लें',
          'प्रति एकड़ ५ फेरोमोन ट्रैप लगाएं'
        ]
      },
      treatment: {
        en: [
          'Push sand + lime mixture (9:1) or wood ash into whorls to physically suffocate young larvae',
          'Bio-pesticide: Bacillus thuringiensis (Bt) @ 2 g/L or Metarhizium anisopliae (5 g/L)',
          'Chemical whorl application: Emamectin Benzoate 5% SG @ 0.4 g/L or Chlorantraniliprole 18.5% SC @ 0.4 ml/L'
        ],
        mr: [
          'पोंग्यात बारीक वाळू व चुना (९:१) किंवा लाकडाची बारीक राख टाका',
          'जैविक उपाय: बीटी (Bt) २ ग्रॅम/लिटर किंवा मेटारायझियम ५ ग्रॅम/लिटर फवारा',
          'रासायनिक उपाय: इमामेक्टिन बेन्झोएट ५% SG @ ०.४ ग्रॅम/लिटर किंवा कोराजन (क्लोरअँट्रानिलीप्रोल) @ ०.४ मिली/लिटर पोंग्यात पडेल अशी फवारणी'
        ],
        hi: [
          'पौधों की गोभ में बालू और चूने का मिश्रण (९:१) या राख डालें',
          'जैविक: बीटी (Bt) पाउडर २ ग्राम/लीटर या मेटाराइजियम ५ ग्राम/लीटर',
          'कीटनाशक: इमामेक्टिन बेंजोएट ५% SG @ ०.४ ग्राम/लीटर या कोराजन @ ०.४ मिली/लीटर'
        ]
      }
    },

    // Soybean
    'soybean_yellow_mosaic': {
      cropId: 'soybean',
      diseaseId: 'yellow_mosaic',
      isHealthy: false,
      severity: 'High',
      confidence: 96.6,
      name: {
        en: 'Yellow Mosaic Virus (YMV)',
        mr: 'सोयाबीनवरील पिवळा मोज़ॅक व्हायरस',
        hi: 'सोयाबीन का पीला मोज़ेक वायरस'
      },
      symptoms: {
        en: [
          'Bright yellow patches interspersed with green areas on leaf blades',
          'Leaves turn completely golden yellow and become brittle',
          'Pods remain small, curved, and produce shriveled discolored seeds',
          'Total loss of photosynthetic capacity'
        ],
        mr: [
          'पानांवर पिवळ्या आणि हिरव्या रंगाचे विखुरलेले ठिपके (मोझॅक)',
          'हळूहळू संपूर्ण पान सोनेरी पिवळे पडते व चिवट होते',
          'शेंगा बारीक, वाकड्या आणि दाणे न भरलेल्या राहतात',
          'झाडाची अन्न तयार करण्याची क्षमता नष्ट होते'
        ],
        hi: [
          'पत्तियों पर चमकीले पीले और हरे रंग के चितकबरे धब्बे',
          'धीरे-धीरे पूरी पत्ती सुनहरी पीली पड़ जाती है',
          'फलियां छोटी, मुड़ी हुई और दाने कम व सिकुड़े बनते हैं',
          'पौधों का विकास रुक जाता है'
        ]
      },
      causes: {
        en: ['Mungbean yellow mosaic India virus transmitted by Whitefly (Bemisia tabaci)'],
        mr: ['पांढऱ्या माशीमार्फत पसरणारा विषाणू'],
        hi: ['सफेद मक्खी द्वारा फैलाया जाने वाला वायरस']
      },
      prevention: {
        en: [
          'Plant YMV tolerant varieties (JS 97-52, JS 335, NRC 37)',
          'Seed treatment with Thiamethoxam 30 FS @ 10 ml/kg seed before sowing',
          'Destroy alternative weed hosts like wild legumes along field borders'
        ],
        mr: [
          'रोगप्रतिकारक वाणांची निवड करा',
          'पेरणीपूर्वी थायामेथोक्साम ३० FS (१० मिली/किलो बियाणे) बीजप्रक्रिया करा',
          'बांधावरील जंगली वनस्पती व तणे नष्ट करा'
        ],
        hi: [
          'रोग प्रतिरोधी किस्मों की बुवाई करें',
          'बीज शोधन: थायामेथोक्साम ३० FS (१० मिली/किग्रा) से बीज उपचार करें',
          'खेत के किनारों से खरपतवार हटाएं'
        ]
      },
      treatment: {
        en: [
          'Uproot and bury initial infected single plants immediately',
          'Spray Thiamethoxam 25% WG @ 0.3 g/L or Acetamiprid 20% SP @ 0.5 g/L to eliminate vector whiteflies',
          'Foliar spray of 19:19:19 (5g/L) to sustain unaffected plants'
        ],
        mr: [
          'सुरुवातीला दिसणारी पिवळी झाडे उपटून त्वरित जमिनीत गाडा',
          'पांढरी माशी मारण्यासाठी: थायामेथोक्साम २५% WG @ ०.३ ग्रॅम/लिटर किंवा ॲसिटामिप्रीड @ ०.५ ग्रॅम/लिटर फवारा',
          'उर्वरित पिकाला ताकद देण्यासाठी १९:१९:१९ विद्राव्य खत फवारा'
        ],
        hi: [
          'प्रारंभिक अवस्था में रोगी पौधों को उखाड़कर नष्ट करें',
          'सफेद मक्खी नियंत्रण: थायामेथोक्साम २५% WG @ ०.३ ग्राम/लीटर या एसिटामिप्रिड का छिड़काव करें',
          'स्वस्थ पौधों को शक्ति देने हेतु १९:१९:१९ का छिड़काव करें'
        ]
      }
    }
  },

  // Fertilizer Knowledge & Rules Engine
  fertilizers: [
    {
      id: 'urea',
      name: { en: 'Urea', mr: 'युरिया', hi: 'यूरिया' },
      grade: '46-0-0',
      nutrients: 'Nitrogen (N) - 46%',
      type: 'Primary Inorganic Macro-nutrient',
      bestFor: 'Vegetative growth, leafy canopy development, chlorophyll formation',
      precautions: 'Do not over-apply. Excess causes lush vegetative growth vulnerable to pests and lodging.'
    },
    {
      id: 'dap',
      name: { en: 'DAP (Di-Ammonium Phosphate)', mr: 'डीएपी (डाय अमोनियम फॉस्फेट)', hi: 'डीएपी (डाई अमोनियम फॉस्फेट)' },
      grade: '18-46-0',
      nutrients: 'Nitrogen (N) 18%, Phosphorus (P2O5) 46%',
      type: 'Basal Compound Fertilizer',
      bestFor: 'Root proliferation, vigorous seedling establishment, stem strength',
      precautions: 'Best applied as basal dressing placed 3-5 cm below seed depth. Avoid direct seed contact.'
    },
    {
      id: 'mop',
      name: { en: 'MOP (Muriate of Potash)', mr: 'एमओपी (पोटॅश)', hi: 'एमओपी (म्यूरिएट ऑफ पोटाश)' },
      grade: '0-0-60',
      nutrients: 'Potassium (K2O) - 60%',
      type: 'Potash Fertilizer',
      bestFor: 'Drought tolerance, disease immunity, fruit filling, sweetness and grain weight',
      precautions: 'Split into basal and flowering top-dressing for long-duration crops.'
    },
    {
      id: 'npk_191919',
      name: { en: 'NPK 19:19:19 (Water Soluble)', mr: '१९:१९:१९ विद्राव्य खत', hi: '१९:१९:१९ घुलनशील खाद' },
      grade: '19-19-19',
      nutrients: 'N 19%, P 19%, K 19% balanced',
      type: 'Foliar / Fertigation Grade',
      bestFor: 'Rapid overall crop recovery, stress alleviation, vegetative boosting',
      precautions: 'Dissolve 5 grams per liter of water. Spray during non-sunny hours.'
    },
    {
      id: 'ssp',
      name: { en: 'Single Super Phosphate (SSP)', mr: 'सिंगल सुपर फॉस्फेट (एसएसपी)', hi: 'सिंगल सुपर फास्फेट (एसएसपी)' },
      grade: '0-16-0 + 11% S',
      nutrients: 'Phosphorus 16%, Sulphur 11%, Calcium 19%',
      type: 'Multinutrient Basal',
      bestFor: 'Oilseeds (soybean/mustard), pulses, and root formation in acidic/alkaline soils',
      precautions: 'Excellent substitute for DAP when sulphur is deficient.'
    },
    {
      id: 'zinc_sulphate',
      name: { en: 'Zinc Sulphate (Heptahydrate / Monohydrate)', mr: 'झिंक सल्फेट', hi: 'जिंक सल्फेट' },
      grade: '21% / 33% Zn',
      nutrients: 'Zinc (Zn) 21% + Sulphur (S) 10%',
      type: 'Essential Micronutrient',
      bestFor: 'Khaira disease in rice, white bud in maize, little leaf symptoms, enzyme activation',
      precautions: 'NEVER mix zinc sulphate with DAP or SSP in same tank as they precipitate insoluble zinc phosphate.'
    },
    {
      id: 'vermicompost',
      name: { en: 'Enriched Vermicompost / FYM', mr: 'गांडूळ खत / सेंद्रिय शेणखत', hi: 'केंचुआ खाद (वर्मीकम्पोस्ट) / गोबर खाद' },
      grade: 'Organic Natural',
      nutrients: 'Organic Carbon, N, P, K, beneficial microbes & humic acid',
      type: 'Bio-Organic Soil Conditioner',
      bestFor: 'Soil porosity, microbial biodiversity, water retention and root ventilation',
      precautions: 'Use well-decomposed, cool vermicompost free from weed seeds.'
    },
    {
      id: 'jeevamrut',
      name: { en: 'Jeevamrut & Bio-fertilizers (PSB + Azotobacter)', mr: 'जीवामृत व जैविक खते (पीएसबी + ॲझोटोबॅक्टर)', hi: 'जीवामृत व जैव उर्वरक' },
      grade: 'Bio-inoculant',
      nutrients: 'Billions of living nitrogen-fixing and phosphate-solubilizing bacteria',
      type: 'Natural Biological Stimulant',
      bestFor: 'Unlocking locked soil phosphorus, zero chemical cost, soil rejuvenation',
      precautions: 'Apply with irrigation water every 15-21 days for best natural soil vitality.'
    }
  ],

  // Crop Growth Recommendations
  growthGuide: {
    sugarcane: {
      water: {
        en: 'Water Requirement: 1500-2000 mm. Drip irrigation reduces water consumption by 45%. Critical stages: Formative stage (60-130 days) and Grand growth stage (130-250 days). Maintain soil moisture at 50% available water.',
        mr: 'पाणी गरज: १५००-२००० मिमी. ठिबक सिंचनाने ४५% पाण्याची बचत होते. महत्त्वाचे टप्पे: फुटवे व कांडे सुटण्याचा काळ (६० ते २५० दिवस). जमिनीत ५०% वाफसा ठेवा.',
        hi: 'पानी की आवश्यकता: १५००-२००० मिमी। टपक सिंचाई से ४५% पानी की बचत। मुख्य अवस्था: कल्ले फूटने और बढ़वार की अवस्था (६०-२५० दिन)।'
      },
      soil: {
        en: 'Ideal pH 6.5 to 7.5. Deep well-drained loamy soil with minimum 0.5% organic carbon. Incorporate 10-15 tonnes of FYM per acre before furrow opening.',
        mr: 'सामू ६.५ ते ७.५. निचऱ्याची काळी जमीन. किमान ०.५% सेंद्रिय कर्ब आवश्यक. नांगरटीच्या वेळी एकरी १० ते १५ टन चांगले कुजलेले शेणखत मिसळा.',
        hi: 'उचित पीएच ६.५ से ७.५। गहरी दोमट मिट्टी जिसमें कम से कम ०.५% जैविक कार्बन हो। रोपाई पूर्व १०-१५ टन गोबर खाद डालें।'
      },
      nutrients: {
        en: 'Recommended Dose: 250:115:115 kg N:P:K per hectare for Suru cane. Apply Nitrogen in 4 splits: 10% at planting, 40% at tillering (6-8 weeks), 10% at earthing up, 40% at grand growth.',
        mr: 'शिफारस मात्रा: २५०:११५:११५ किलो नत्र:स्फुरद:पालाश प्रति हेक्टर. नत्र ४ हप्त्यांमध्ये द्या: लागवडीवेळी १०%, फुटव्यांच्या वेळी ४०%, बांधणीच्या वेळी ४०%.',
        hi: 'अनुशंसित मात्रा: २५०:११५:११५ किग्रा एन:पी:के प्रति हेक्टेयर। नाइट्रोजन को ४ किश्तों में विभाजित करके दें।'
      },
      pestIPM: {
        en: 'Early Shoot Borer: Release Trichogramma chilonis egg parasitoids (20,000/acre). White grub control: Metarhizium anisopliae or neem cake at first showers.',
        mr: 'खोडकिडा: ट्रायकोकार्ड (ट्रायकोड्रॉमा चिलोनीस) लावा. हुमणी अळी: पावसाच्या सुरुवातीला मेटारायझियम किंवा निंबोळी पेंड जमिनीत टाका.',
        hi: 'कंसुआ कीट: ट्राइकोग्रामा परजीवी कार्ड लगाएं। सफेद लट: मेटाराइजियम या नीम की खली का प्रयोग करें।'
      },
      careTips: {
        en: 'Perform dry mulching with sugarcane trash (5 tonnes/acre) to conserve moisture and suppress 85% weed growth. Timely earthing-up (मोठी बांधणी) prevents lodging.',
        mr: 'उसाचे पाचट न जाळता एकरी ५ टन पाचटाचे आच्छादन करा. तणांचा नायनाट होतो व ओलावा टिकतो. १०० दिवसांनी मोठी बांधणी करा.',
        hi: 'गन्ने की सूखी पत्तियों का मल्चिंग (आच्छादन) करें। इससे खरपतवार रुकते हैं और नमी बनी रहती है। समय पर मिट्टी चढ़ाएं।'
      }
    },
    rice: {
      water: {
        en: 'Alternate Wetting and Drying (AWD) saves 30% water without reducing yield. Maintain 2-5 cm standing water during panicle initiation and flowering.',
        mr: 'आलटून-पालटून ओले व कोरडे (AWD) पद्धती वापरा. लोंबी बाहेर पडण्याच्या व फुलोऱ्याच्या काळात शेतात २ ते ५ सेमी पाणी साठवून ठेवा.',
        hi: 'वैकल्पिक गीला और सूखा तरीका (AWD) अपनाएं। बाली निकलने और फूल आने के समय २-५ सेमी पानी बनाकर रखें।'
      },
      soil: {
        en: 'Heavy clay or clayey loam that retains standing water. Green manure with Dhaincha (Sesbania) incorporated 7 days before puddling adds 60 kg N/ha.',
        mr: 'पाणी धरून ठेवणारी चिकनमाती. चिखलणीपूर्वी धैंचा किंवा तागाचे हिरवळीचे खत जमिनीत गाडल्यास एकरी २५-३० किलो नत्र मिळते.',
        hi: 'चिकनी दोमट मिट्टी सबसे उपयुक्त। रोपाई से पहले ढैंचा की हरी खाद पलटने से ६० किग्रा नाइट्रोजन मिलता है।'
      },
      nutrients: {
        en: 'NPK 100:50:50 kg/ha. Apply all P & K and 50% N as basal. Top dress remaining 50% N in two splits at tillering and panicle emergence. Apply Zinc Sulphate 25 kg/ha basal.',
        mr: '१००:५०:५० किलो नत्र:स्फुरद:पालाश प्रति हेक्टर. संपूर्ण स्फुरद व पालाश चिखलणीवेळी द्या. नत्र दोन हप्त्यांत द्या. झिंक सल्फेट १० किलो/एकर जरूर द्या.',
        hi: '१००:५०:५० किग्रा एन:पी:के प्रति हेक्टेयर। पोटाश व फास्फोरस पूरा रोपाई समय और नाइट्रोजन को २-३ बार में दें। जिंक सल्फेट २५ किग्रा/हेक्टेयर डालें।'
      },
      pestIPM: {
        en: 'Stem Borer & Leaf Folder: Pheromone traps 5/acre. Trichogramma japonicum release. Avoid excess nitrogen.',
        mr: 'खोडकिडा व पान गुंडाळणारी अळी: एकरी ५ कामगंध सापळे. नत्राचा अतिरेक टाळा.',
        hi: 'तना छेदक व पत्ती लपेटक: ५ फेरोमोन ट्रैप प्रति एकड़ लगाएं। अधिक यूरिया देने से बचें।'
      },
      careTips: {
        en: 'Transplant young seedlings (18-21 days) with 2-3 seedlings per hill at 20x15 cm spacing. Cono-weeding at 15 & 30 days aerates soil roots.',
        mr: '१८ ते २१ दिवसांचे कोवळे रोप लावा. एका चूडात २-३ रोपे लावा. कोनो-वीडरने खुरपणी केल्यास मुळांना हवा मिळते.',
        hi: '१८-२१ दिन की छोटी पौध की रोपाई करें। २०x१५ सेमी दूरी रखें। कोनो-वीडर से निराई करने पर जड़ों को हवा मिलती है।'
      }
    },
    wheat: {
      water: {
        en: 'Crown Root Initiation (CRI) at 21 days after sowing is the MOST critical irrigation. Missing CRI reduces yield by 30%. Total 4-6 irrigations needed.',
        mr: 'पेरणीनंतर २१ दिवसांनी येणारी मुकुटमुळे फुटण्याची अवस्था (CRI) अत्यंत संवेदनशील आहे. या वेळी पाणी देणे अनिवार्य आहे.',
        hi: 'बुवाई के २१ दिन बाद शीर्ष जड़ (CRI) अवस्था पर पहली सिंचाई सबसे जरूरी है। इस समय सिंचाई न करने पर ३०% तक उपज घट जाती है।'
      },
      soil: {
        en: 'Well-pulverized fertile loam with good drainage. Neutral to slightly alkaline pH (6.5 - 7.5).',
        mr: 'मध्यम ते भारी निचऱ्याची कसदार जमीन. सामू ६.५ ते ७.५.',
        hi: 'अच्छी जल निकासी वाली उपजाऊ दोमट मिट्टी। पीएच ६.५ से ७.५।'
      },
      nutrients: {
        en: 'NPK 120:60:40 kg/ha. Half N, full P and full K at sowing. Remaining half N top-dressed in two splits right before first and second irrigations.',
        mr: '१२०:६०:४० किलो नत्र:स्फुरद:पालाश प्रति हेक्टर. निम्मे नत्र, पूर्ण स्फुरद व पालाश पेरणीवेळी. उर्वरित नत्र पहिल्या व दुसऱ्या पाटाच्या वेळी द्या.',
        hi: '१२०:६०:४० किग्रा एन:पी:के। आधा नाइट्रोजन, पूरा फास्फोरस व पोटाश बुवाई समय दें। शेष नाइट्रोजन सिंचाई पूर्व दें।'
      },
      pestIPM: {
        en: 'Monitor yellow rust weekly. Treat aphids using biopesticide Verticillium lecanii or Imidacloprid if threshold exceeds 10 aphids/ear.',
        mr: 'तांबेऱ्याचे निरीक्षण करा. मावा किडीसाठी व्हर्टिसिलियम किंवा नीम अर्क फवारा.',
        hi: 'पीला रतुआ का नियमित निरीक्षण करें। माहू (चेपा) कीट के लिए नीम का तेल या इमिडाक्लोप्रिड छिड़कें।'
      },
      careTips: {
        en: 'Use seed drill for uniform depth of 4-5 cm. Seed treatment with Carbendazim (2g/kg) + Azotobacter bio-fertilizer.',
        mr: 'पेरणी यंत्राने ४-५ सेमी खोलीवर पेरणी करा. बियाण्यास कार्बेन्डाझिम २ ग्रॅम + ॲझोटोबॅक्टर २५ ग्रॅम/किलो चोळा.',
        hi: 'सीड ड्रिल से ४-५ सेमी गहराई पर बुवाई करें। बीज को कार्बेन्डाजिम और एजोटोबैक्टर से उपचारित करें।'
      }
    },
    tomato: {
      water: {
        en: 'Consistent drip irrigation. Fluctuation between dry and wet spells causes blossom end rot and fruit cracking. Maintain steady root moisture.',
        mr: 'नियमित ठिबक सिंचन. पाण्याचा ताण पडून नंतर एकदम पाणी दिल्यास फळे तडकतात किंवा काळी पडतात. ओलावा समतोल ठेवा.',
        hi: 'नियमित ड्रिप सिंचाई। पानी की कमी-ज्यादती से फल चटकते हैं। नमी का स्तर एक समान रखें।'
      },
      soil: {
        en: 'Rich organic loam with pH 6.0-6.8. Raised beds (१ मीटर रुंद, १५ सेमी उंच) with silver-black mulch prevent soil splash diseases.',
        mr: 'सेंद्रिय घटकयुक्त सुपीक जमीन. गादी वाफे (उंच वाफे) व सिल्व्हर-ब्लॅक मल्चिंग पेपरचा वापर रोगांपासून संरक्षण करतो.',
        hi: 'जीवांशयुक्त दोमट मिट्टी। उठी हुई क्यारियों (बेड) पर मल्चिंग लगाकर खेती करें।'
      },
      nutrients: {
        en: 'Fertigation via drip: NPK 100:60:60 kg/acre split weekly. Supplement Calcium Nitrate (5 kg/acre) & Boron to prevent fruit blossom end rot.',
        mr: 'ठिबकमधून विद्राव्य खते द्या. फळे भरण्याच्या काळात कॅल्शियम नायट्रेट आणि बोरॉन फवारल्यास फळांना तडे जात नाहीत व चकाकी येते.',
        hi: 'ड्रिप द्वारा घुलनशील खाद दें। फलों को फटने से बचाने के लिए कैल्शियम नाइट्रेट और बोरॉन का छिड़काव करें।'
      },
      pestIPM: {
        en: 'Tuta absoluta (Pinworm) and Fruit Borer: Pheromone traps 12/acre. Spray spinosad or neem oil. Yellow traps for whiteflies.',
        mr: 'टोमॅटो फळपोखरणाऱ्या अळीसाठी कामगंध सापळे लावा. पांढऱ्या माशीसाठी पिवळे चिकट सापळे वापरा.',
        hi: 'फल छेदक और पिनवर्म के लिए फेरोमोन ट्रैप लगाएं। सफेद मक्खी के लिए पीले ट्रैप लगाएं।'
      },
      careTips: {
        en: 'Stake plants with bamboo sticks and GI wire (स्टेकिंग/बांबू बांधणी) to keep leaves off wet ground and improve spray efficiency.',
        mr: 'टोमॅटोच्या झाडांना बांबू व तारेच्या सहाय्याने आधार द्या (स्टेकिंग). फळे मातीत न लोळल्याने प्रत उत्कृष्ट राहते.',
        hi: 'पौधों को बांस और तार के सहारे बांधें (स्टेकिंग)। फल जमीन पर न छूने से सड़न नहीं होती।'
      }
    },
    cotton: {
      water: {
        en: 'Critical water stages: Square formation (४०-५० दिवस), Flowering (६०-७० दिवस), and Boll development (८०-१०० दिवस). Avoid waterlogging.',
        mr: 'पाण्याचे महत्त्वाचे टप्पे: पाते धरणे (४०-५० दिवस), फुले येणे (६०-७० दिवस) आणि बोंड भरणे. पाणी साचू देऊ नका.',
        hi: 'सिंचाई के मुख्य चरण: फूल-कलियां बनते समय और टिंडे भरते समय। खेत में पानी रुकने न दें।'
      },
      soil: {
        en: 'Deep black cotton soil (Regur) with good water retention and clay content. pH 7.0 - 8.2.',
        mr: 'काळी कसदार भारी जमीन (रेगूर माती). पाण्याचा चांगला निचरा असणारी जमीन.',
        hi: 'काली भारी मिट्टी (रेगुर)। जल धारण क्षमता अच्छी होनी चाहिए।'
      },
      nutrients: {
        en: 'NPK 120:60:60 kg/ha for Bt cotton. Apply Magnesium Sulphate (25 kg/ha) at square formation to prevent leaf reddening (लाल्या रोग).',
        mr: 'बीटी कपाशीसाठी १२०:६०:६० किलो खते. कपाशीची पाने लाल पडू नयेत (लाल्या) म्हणून मॅग्नेशियम सल्फेट १० किलो/एकर टाका व फवारा.',
        hi: '१२०:६०:६० किग्रा एन:पी:के। पत्तियों को लाल होने से बचाने के लिए मैग्नीशियम सल्फेट का छिड़काव करें।'
      },
      pestIPM: {
        en: 'Pink Bollworm: Install pink bollworm traps @ 5/acre. Neem oil 1500 ppm spray. Avoid extending crop beyond January.',
        mr: 'गुलाबी बोंडअळी: एकरी ५ कामगंध सापळे लावा. ५% निंबोळी अर्काची नियमित फवारणी. जानेवारीनंतर पीक शेतात ठेवू नका.',
        hi: 'गुलाबी सुंडी (पिंक बॉलवर्म): फेरोमोन ट्रैप लगाएं। नीम का तेल छिड़कें। फसल को जनवरी के बाद ज्यादा न खींचें।'
      },
      careTips: {
        en: 'Nipping (topping the main shoot) at 80-90 days arrests vertical excess growth and channels energy into horizontal boll bearing.',
        mr: '८० ते ९० दिवसांनी कपाशीचा मुख्य शेंडा खुडा (टॉपिंग). यामुळे उभी वाढ थांबून आडव्या फांद्या व बोंडे भरपूर लागतात.',
        hi: '८०-९० दिनों पर ऊपर का सिरा तोड़ें (निपिंग)। इससे अनचाही ऊंचाई रुकती है और टिंडे अधिक बनते हैं।'
      }
    }
  },

  // Sample Presets for AI One-Click Disease Testing
  samplePresets: [
    {
      id: 'preset_tomato_blight',
      crop: 'tomato',
      title: 'Tomato - Early Blight',
      diseaseKey: 'tomato_early_blight',
      tag: 'Disease Detected',
      severity: 'Medium',
      svgColor: '#e11d48',
      previewGradient: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
      description: 'Concentric dark target-board leaf spot with yellow halo'
    },
    {
      id: 'preset_sugarcane_redrot',
      crop: 'sugarcane',
      title: 'Sugarcane - Red Rot',
      diseaseKey: 'sugarcane_red_rot',
      tag: 'Disease Detected',
      severity: 'Critical',
      svgColor: '#b91c1c',
      previewGradient: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
      description: 'Stem internal reddening with sour odor and withered leaves'
    },
    {
      id: 'preset_rice_blight',
      crop: 'rice',
      title: 'Rice - Bacterial Leaf Blight',
      diseaseKey: 'rice_bacterial_blight',
      tag: 'Disease Detected',
      severity: 'High',
      svgColor: '#ea580c',
      previewGradient: 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)',
      description: 'Straw-yellow wavy margins with morning bacterial ooze'
    },
    {
      id: 'preset_wheat_rust',
      crop: 'wheat',
      title: 'Wheat - Yellow Rust',
      diseaseKey: 'wheat_yellow_rust',
      tag: 'Disease Detected',
      severity: 'Critical',
      svgColor: '#d97706',
      previewGradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
      description: 'Linear yellow powdery pustule stripes along leaf veins'
    },
    {
      id: 'preset_cotton_leafcurl',
      crop: 'cotton',
      title: 'Cotton - Leaf Curl Virus',
      diseaseKey: 'cotton_leaf_curl',
      tag: 'Disease Detected',
      severity: 'High',
      svgColor: '#7c3aed',
      previewGradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
      description: 'Severe upward leaf curling with thick veins and stunting'
    },
    {
      id: 'preset_potato_lateblight',
      crop: 'potato',
      title: 'Potato - Late Blight',
      diseaseKey: 'potato_late_blight',
      tag: 'Disease Detected',
      severity: 'Critical',
      svgColor: '#475569',
      previewGradient: 'linear-gradient(135deg, #64748b 0%, #334155 100%)',
      description: 'Water-soaked black blotches with white underside fungal fuzz'
    },
    {
      id: 'preset_sugarcane_healthy',
      crop: 'sugarcane',
      title: 'Sugarcane - Healthy',
      diseaseKey: 'sugarcane_healthy',
      tag: 'Healthy Crop',
      severity: 'None',
      svgColor: '#059669',
      previewGradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
      description: 'Lush green upright foliage, strong tillering, zero pathology'
    },
    {
      id: 'preset_unclear_image',
      crop: 'unknown',
      title: 'Blurry / Non-Crop Test',
      isUnclear: true,
      tag: 'Image Unclear',
      severity: 'Warning',
      svgColor: '#6b7280',
      previewGradient: 'linear-gradient(135deg, #9ca3af 0%, #4b5563 100%)',
      description: 'Test detection response for blurred photos or non-crop objects'
    }
  ],

  // Live Mandi APMC Market Prices (Sample Real-Time APMC Data)
  mandiRates: [
    { commodity: { en: 'Sugarcane (FRP)', mr: 'ऊस (FRP दर)', hi: 'गन्ना (एफआरपी)' }, market: 'Maharashtra APMC', price: '₹ 3,400 / Ton', trend: '+1.5%', icon: '🎋' },
    { commodity: { en: 'Basmati Paddy', mr: 'बासमती भात', hi: 'बासमती धान' }, market: 'Karnal, Haryana', price: '₹ 3,850 / Qtl', trend: '+2.1%', icon: '🌾' },
    { commodity: { en: 'Sharbati Wheat', mr: 'शरबती गहू', hi: 'शरबती गेहूं' }, market: 'Indore, MP', price: '₹ 2,780 / Qtl', trend: '+0.8%', icon: '🌿' },
    { commodity: { en: 'Medium Staple Cotton', mr: 'मध्यम धागा कापूस', hi: 'कपास (नरमा)' }, market: 'Nagpur, MH', price: '₹ 7,450 / Qtl', trend: '-0.4%', icon: '☁️' },
    { commodity: { en: 'Hybrid Tomato', mr: 'हायब्रिड टोमॅटो', hi: 'टमाटर', }, market: 'Nashik, MH', price: '₹ 1,850 / Qtl', trend: '+4.2%', icon: '🍅' },
    { commodity: { en: 'Red Onion (Kharif)', mr: 'लाल कांदा', hi: 'लाल प्याज' }, market: 'Lasalgaon, MH', price: '₹ 2,240 / Qtl', trend: '+3.0%', icon: '🧅' }
  ],

  // Real-Time Local Weather & Agri-Advisory
  weatherAdvisory: {
    location: 'Agricultural District (Central India)',
    temp: '28°C',
    humidity: '62%',
    rainChance: '15%',
    wind: '9 km/h NE',
    condition: 'Partly Sunny / Calm',
    spraySuitability: 'Excellent for Foliar Spray (Low Wind)',
    sprayWindow: {
      en: 'Foliar spray is highly recommended today between 7:00 AM - 10:30 AM or 4:30 PM - 6:30 PM.',
      mr: 'आज सकाळी ७ ते १०:३० किंवा संध्याकाळी ४:३० ते ६:३० दरम्यान फवारणीसाठी हवामान अत्यंत पोषक आहे.',
      hi: 'आज सुबह ७:०० से १०:३० या शाम ४:३० से ६:३० के बीच पर्णीय छिड़काव के लिए मौसम सर्वोत्तम है।'
    }
  }
};

// Export to window object for browser access
if (typeof window !== 'undefined') {
  window.FARMSATHI_DATA = FARMSATHI_DATA;
}

// Export for Node.js if required
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FARMSATHI_DATA;
}
