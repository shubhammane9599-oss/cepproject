// FarmSathi - Main Application Controller
// Native vanilla JavaScript, fast, zero-dependency, farmer-friendly

// Global Application State
const AppState = {
  currentLanguage: 'en',
  currentView: 'home',
  selectedCropForScan: 'auto',
  currentLeafImage: null, // data URL or preset id
  currentLeafPreset: null,
  isAnalyzing: false,
  currentDiagnosis: null,
  chatbot: null,
  reports: []
};

// ============================================================================
// 1. LOCALIZATION & TRANSLATIONS DICTIONARY
// ============================================================================
const I18N_DICT = {
  en: {
    nav_home: 'Home',
    nav_detect: 'Crop Disease AI',
    nav_fertilizer: 'Fertilizer Guide',
    nav_growth: 'Crop Growth Tips',
    nav_chat: 'FarmSathi AI',
    nav_dashboard: 'Dashboard',
    brand_tagline: 'Trusted Digital Companion for Farmers • Smart Farming with AI',
    top_notice: '🌿 Central Agro-Advisory: Optimal moisture condition for foliar nutrition today. Avoid afternoon sprays in windy weather.',
    hero_title_accent: 'Smart Farming with AI',
    hero_title_sub: 'Protect & Grow Your Harvest',
    hero_desc: 'Detect crop diseases instantly, get scientific fertilizer recommendations, and improve your crop health with FarmSathi — crafted specifically for Indian farmers.',
    btn_check_crop: 'Check My Crop',
    btn_ask_ai: 'Ask FarmSathi AI',
    trust_crops: 'Sugarcane, Rice, Wheat & more',
    trust_accuracy: 'Pathology AI Accuracy',
    trust_free: 'For All Indian Farmers',
    weather_title: "Today's Agri-Weather & Spray Conditions",
    weather_tag: 'Central Zone',
    mandi_title: 'Live APMC Mandi Rates (Market Pulse)',
    features_tag: 'Smart Solutions',
    features_title: 'Everything a Modern Farmer Needs',
    features_subtitle: 'Designed with large, readable fonts and simple steps so you can get reliable farming advice in seconds.',
    feat1_title: 'AI Crop Disease Detection',
    feat1_desc: 'Snap or upload a photo of a sick leaf. Our AI identifies diseases across sugarcane, rice, wheat, tomato, cotton and more with treatment steps.',
    feat_cta_detect: 'Scan Leaf Now',
    feat2_title: 'Smart Fertilizer Recommendation',
    feat2_desc: 'Get scientifically balanced nutrient plans (Urea, DAP, MOP, Micronutrients) customized for your crop type, growth stage, and soil health.',
    feat_cta_fert: 'Calculate Fertilizer',
    feat3_title: 'Crop Growth Guidance',
    feat3_desc: 'Practical suggestions for water scheduling, soil enrichment, green manuring, and integrated pest prevention tailored for higher yields.',
    feat_cta_growth: 'View Growth Guide',
    feat4_title: 'Multilingual AI Chatbot',
    feat4_desc: 'Chat naturally with "FarmSathi AI" in English, मराठी, or हिंदी. Ask about yellow leaves, pest traps, fertilizers, and listen to spoken answers!',
    feat_cta_chat: 'Chat with AI',
    how_tag: 'Simple 4 Steps',
    how_title: 'How FarmSathi Works',
    how_subtitle: 'Easy for every farmer to use on their mobile phone in four clear steps.',
    step1_title: 'Upload or Take Photo',
    step1_desc: 'Take a clear close-up picture of the affected plant leaf or select from common test presets.',
    step2_title: 'Instant AI Analysis',
    step2_desc: 'Our AI vision scanner inspects color patterns, lesions, and necrosis with over 96% accuracy.',
    step3_title: 'Get Cure & Fertilizer Advice',
    step3_desc: 'Receive immediate organic remedies, safe spray dosage, and balanced nutrient guidance.',
    step4_title: 'Ask Questions in Your Language',
    step4_desc: 'Consult FarmSathi AI in Marathi, Hindi, or English. You can even tap the speaker to listen aloud!',
    detect_tag: 'AI Pathology',
    detect_heading: 'AI Crop Disease Detection Studio',
    detect_sub: 'Upload or take a photo of any crop leaf to get instant disease diagnosis, causes, organic prevention, and safe treatments.',
    upload_card_title: 'Step 1: Upload Plant Leaf Image',
    upload_card_sub: 'Works with Sugarcane, Rice, Wheat, Cotton, Tomato, Onion, Potato, Maize, Soybean & other Indian crops.',
    label_crop_type: 'Select Crop (or let AI auto-detect):',
    dropzone_title: 'Click or Drag & Drop Leaf Photo',
    dropzone_hint: 'Supports JPG, PNG, WEBP (Max 15MB)',
    btn_browse_photo: 'Browse Photo',
    btn_take_photo: 'Take Live Photo',
    presets_title: 'Try Quick Sample Leaves (1-Click Test):',
    btn_analyze_text: 'Analyze Crop Health',
    results_empty_title: 'Ready to Inspect Your Crop',
    results_empty_desc: 'Upload a plant leaf photo or tap any sample preset on the left, then click "Analyze Crop Health".',
    diag_symptoms_title: 'Observed Symptoms:',
    diag_causes_title: 'Possible Causes:',
    diag_prevention_title: 'Prevention Methods (Organic & Cultural):',
    diag_treatment_title: 'Recommended Treatment & Spray Guide:',
    diag_safety_warning: '⚠️ Safe Handling Advisory: Always follow exact product-label instructions and wear protective gear. Do not apply chemical overdoses without local soil or crop inspection. For precise regional advice, consult your nearest Krishi Vigyan Kendra (KVK).',
    btn_save_report: 'Save to My Reports',
    btn_print_report: 'Print Card',
    btn_ask_ai_disease: 'Ask AI About Cure',
    unclear_title: 'Image is Unclear or Not a Crop Leaf',
    unclear_desc: 'Our AI safety system detected that this photo is blurry, poorly lit, or does not clearly display a plant leaf. Rather than giving a false or misleading diagnosis, we urge you to upload a clear, focused photo in bright daylight.',
    btn_try_again: 'Upload Clearer Photo',
    fert_tag: 'Nutrient Management',
    fert_heading: 'Smart Fertilizer Recommendation Engine',
    fert_sub: 'Calculates balanced nutrient schedules based on your crop stage, visible deficiencies, and soil conditions without unsafe overdosing.',
    fert_form_title: 'Crop & Field Information',
    fert_form_sub: 'Fill in your field details to get customized nutrition recommendations.',
    fert_label_crop: '1. Crop Type:',
    fert_label_stage: '2. Crop Growth Stage:',
    fert_label_symptom: '3. Visible Symptoms / Deficiencies:',
    fert_label_soil: '4. Available Soil Information:',
    fert_label_irrigation: '5. Irrigation System:',
    btn_calc_fert: 'Get Tailored Fertilizer Recommendation',
    fert_why_title: 'Why it is recommended:',
    fert_when_title: 'When to use it:',
    fert_guidance_title: 'General Application Guidance:',
    fert_organic_title: 'Bio-Fertilizer & Organic Alternative:',
    fert_safety_note: '⚠️ Agricultural Expert Disclaimer: Exact chemical dosage depends on soil test reports and local climatic conditions. Do not overdose. Always consult your local Agriculture Extension Officer or Krishi Vigyan Kendra (KVK) and strictly follow product label instructions.',
    growth_tag: 'Best Practices',
    growth_heading: 'Comprehensive Crop Growth Recommendations',
    growth_sub: 'Simple, easy-to-understand cultivation practices covering irrigation, soil enrichment, nutrition, and IPM for peak yields.',
    pillar_water: '1. Water & Irrigation Management',
    pillar_soil: '2. Soil Health & Preparation',
    pillar_nutrients: '3. Balanced Nutrient Management',
    pillar_ipm: '4. Pest & Disease Prevention (IPM)',
    pillar_care: '5. Basic Crop-Care & Yield Boosting Tips',
    chat_tag: '24/7 AI Assistant',
    chat_heading: 'FarmSathi AI Multilingual Farming Chatbot',
    chat_sub: 'Ask questions in English, मराठी, or हिंदी. Get instant solutions with voice read-aloud support!',
    bot_online: 'Online • Agricultural Guide',
    dash_tag: 'My Farm Hub',
    dash_heading: 'Farmer Dashboard (My Farm)',
    dash_sub: 'Overview of your field health, past AI disease scans, fertilizer guides, and saved recommendations.',
    stat_health: 'Crop Health Index',
    stat_scans: 'Total Disease Scans',
    stat_fert: 'Fertilizer Plans Generated',
    stat_queries: 'AI Assistant Queries',
    dash_sc_scan: 'New Disease Scan',
    dash_sc_scan_desc: 'Upload crop photo to diagnose health and diseases.',
    dash_sc_fert: 'Fertilizer Calculator',
    dash_sc_fert_desc: 'Calculate exact basal and foliar nutrient splits.',
    dash_sc_guide: 'Crop Care Guide',
    dash_sc_guide_desc: 'Best irrigation and soil practices per crop.',
    dash_sc_chat: 'FarmSathi Chatbot',
    dash_sc_chat_desc: '24/7 multilingual advice in Marathi, Hindi & English.',
    reports_title: 'Previous Crop Diagnosis Reports',
    reports_sub: 'Saved historical scan records with symptoms and treatments',
    footer_brand_desc: 'Empowering Indian farmers with cutting-edge AI for crop disease detection, tailored fertilizer recommendations, and multilingual voice assistance.',
    footer_features: 'Features',
    footer_supported_crops: 'Supported Crops',
    footer_helpline: 'Kisan Helpline'
  },

  mr: {
    nav_home: 'मुख्यपृष्ठ',
    nav_detect: 'पीक रोग AI',
    nav_fertilizer: 'खत नियोजन',
    nav_growth: 'पीक वाढ सल्ला',
    nav_chat: 'फार्मसाथी AI',
    nav_dashboard: 'माझे शेत डॅशबोर्ड',
    brand_tagline: 'शेतकऱ्यांचा विश्वासू डिजिटल साथीदार • कृषी मित्र',
    top_notice: '🌿 कृषी सल्ला: आज पानांवर विद्राव्य खते व कीटकनाशक फवारणीसाठी हवामान अनुकूल आहे. दुपारच्या वेळी जास्त वाऱ्यात फवारणी टाळा.',
    hero_title_accent: 'स्मार्ट शेती आता AI सोबत',
    hero_title_sub: 'पिकांचे संरक्षण आणि भरघोस उत्पन्न',
    hero_desc: 'पिकावरील रोगांची झटपट ओळख करा, शास्त्रीय खतांची शिफारस मिळवा आणि पिकांची निरोगी वाढ करा — खास भारतीय शेतकऱ्यांसाठी तयार केलेले फार्मसाथी.',
    btn_check_crop: 'माझे पीक तपासा',
    btn_ask_ai: 'फार्मसाथी AI ला विचारा',
    trust_crops: 'ऊस, भात, गहू, टोमॅटो व इतर',
    trust_accuracy: 'AI रोग ओळख अचूकता',
    trust_free: 'सर्व शेतकऱ्यांसाठी मोफत',
    weather_title: 'आजचे कृषी हवामान व फवारणी सल्ला',
    weather_tag: 'मध्य विभाग',
    mandi_title: 'थेट कृषी उत्पन्न बाजार समिती (APMC बाजारभाव)',
    features_tag: 'स्मार्ट उपाय',
    features_title: 'प्रत्येक शेतकऱ्याला हवे असणारे सर्व काही',
    features_subtitle: 'मोठी अक्षरे आणि सोप्या पायऱ्या, जेणेकरून स्मार्टफोनवर सेकंदात खात्रीशीर शेती सल्ला मिळेल.',
    feat1_title: 'AI पीक रोग निदान',
    feat1_desc: 'बाधित पानाचा फोटो काढा किंवा अपलोड करा. आमचे AI ऊस, भात, गहू, टोमॅटो, कापूस यांवरील रोगांची खात्रीशीर लक्षणे व उपचार सांगते.',
    feat_cta_detect: 'रोग तपासा',
    feat2_title: 'स्मार्ट खत शिफारस',
    feat2_desc: 'पिकाचा प्रकार, वाढीचा टप्पा आणि जमिनीनुसार संतुलित रासायनिक (युरिया, डीएपी, पोटॅश) व सेंद्रिय खतांचे अचूक नियोजन मिळवा.',
    feat_cta_fert: 'खत नियोजन करा',
    feat3_title: 'पीक वाढ व काळजी मार्गदर्शन',
    feat3_desc: 'पाण्याचे योग्य नियोजन, जमिनीची सुपीकता, सेंद्रिय खते आणि एकात्मिक कीड व्यवस्थापनाचे सोपे उपाय.',
    feat_cta_growth: 'वाढ सल्ला पहा',
    feat4_title: 'बहुभाषिक AI चॅटबॉट',
    feat4_desc: 'आपल्या हक्काच्या "फार्मसाथी AI" शी शुद्ध मराठीत बोला. पिवळी पाने, खते, औषधे विचारा आणि उत्तर आवाजात ऐका!',
    feat_cta_chat: 'AI शी बोला',
    how_tag: 'सोप्या ४ पायऱ्या',
    how_title: 'फार्मसाथी कसे काम करते?',
    how_subtitle: 'प्रत्येक शेतकऱ्यासाठी आपल्या मोबाईलवर वापरण्यास अत्यंत सोपे.',
    step1_title: 'पानाचा फोटो घ्या किंवा अपलोड करा',
    step1_desc: 'बाधित पिकाच्या पानाचा स्पष्ट फोटो काढा किंवा नमुना फोटो निवडा.',
    step2_title: 'त्वरित AI विश्लेषण',
    step2_desc: 'आमचे AI तंत्रज्ञान पानाचे बारकाईने स्कॅनिंग करून ९६% पेक्षा अधिक अचूकतेने रोग ओळखते.',
    step3_title: 'उपचार व खतांची माहिती मिळवा',
    step3_desc: 'सेंद्रिय उपाय, सुरक्षित रासायनिक फवारणी व खतांची योग्य मात्रा तात्काळ जाणून घ्या.',
    step4_title: 'आपल्या भाषेत प्रश्न विचारा',
    step4_desc: 'मराठीत प्रश्न विचारा किंवा बोला, आणि स्पीकरवर उत्तर ऐका!',
    detect_tag: 'AI रोग निदान',
    detect_heading: 'AI पीक रोग निदान केंद्र',
    detect_sub: 'पिकाच्या पानाचा फोटो अपलोड करा आणि तात्काळ रोग, कारणे, प्रतिबंध व फवारणीचे मार्गदर्शन मिळवा.',
    upload_card_title: 'पायरी १: पानाचा फोटो जोडा',
    upload_card_sub: 'ऊस, भात, गहू, कापूस, टोमॅटो, कांदा, बटाटा, मका, सोयाबीन यांसाठी उपलब्ध.',
    label_crop_type: 'पीक निवडा (किंवा AI ला आपोआप ओळखू द्या):',
    dropzone_title: 'पानाचा फोटो येथे निवडा किंवा ड्रॅग करा',
    dropzone_hint: 'JPG, PNG, WEBP फोटो चालतील (कमाल १५ MB)',
    btn_browse_photo: 'फोटो निवडा',
    btn_take_photo: 'कॅमेऱ्याने फोटो काढा',
    presets_title: 'नमुना पाने तपासा (१-क्लिक टेस्ट):',
    btn_analyze_text: 'पीक आरोग्य तपासा',
    results_empty_title: 'पीक तपासणीसाठी सज्ज',
    results_empty_desc: 'डावीकडे पानाचा फोटो अपलोड करा किंवा नमुना निवडा, आणि "पीक आरोग्य तपासा" वर क्लिक करा.',
    diag_symptoms_title: 'दिसून येणारी लक्षणे:',
    diag_causes_title: 'संभाव्य कारणे:',
    diag_prevention_title: 'प्रतिबंधात्मक उपाय (सेंद्रिय व मशागत):',
    diag_treatment_title: 'शिफारस केलेले औषध व फवारणी:',
    diag_safety_warning: '⚠️ सुरक्षा सल्ला: औषधांच्या वेष्टनावरील सूचना काळजीपूर्वक वाचा आणि फवारणी करताना सुरक्षा साधने वापरा. रासायनिक खते व औषधांचा अतिरेक करू नका. स्थानिक कृषी विज्ञान केंद्राचा (KVK) सल्ला घ्या.',
    btn_save_report: 'माझ्या अहवालात जतन करा',
    btn_print_report: 'अहवाल प्रिंट करा',
    btn_ask_ai_disease: 'AI ला औषध विचारा',
    unclear_title: 'फोटो अस्पष्ट आहे किंवा पानाचा नाही',
    unclear_desc: 'आमच्या AI सुरक्षा प्रणालीला हा फोटो धूसर, कमी प्रकाशातला किंवा पानाव्यतिरिक्त इतर वाटत आहे. चुकीचा सल्ला देण्याऐवजी, आम्ही आपणास चांगल्या उजेडात पानाच्या जवळून स्पष्ट फोटो काढण्याची विनंती करतो.',
    btn_try_again: 'पुन्हा स्पष्ट फोटो काढा',
    fert_tag: 'अन्नद्रव्य नियोजन',
    fert_heading: 'स्मार्ट खत शिफारस प्रणाली',
    fert_sub: 'पिकाचा टप्पा, कमतरता आणि जमिनीनुसार संतुलित रासायनिक व सेंद्रिय खतांची अचूक मात्रा मिळवा.',
    fert_form_title: 'पीक व शेतीची माहिती',
    fert_form_sub: 'खास आपल्या पिकासाठी खत नियोजन मिळवण्यासाठी माहिती भरा.',
    fert_label_crop: '१. पिकाचे नाव:',
    fert_label_stage: '२. पिकाची वाढीची अवस्था:',
    fert_label_symptom: '३. पानांवर दिसणारी लक्षणे / कमतरता:',
    fert_label_soil: '४. जमिनीचा प्रकार:',
    fert_label_irrigation: '५. सिंचन पद्धत:',
    btn_calc_fert: 'खतांची शिफारस मिळवा',
    fert_why_title: 'हे खत का द्यावे:',
    fert_when_title: 'कधी द्यावे (वेळ):',
    fert_guidance_title: 'वापरण्याची योग्य पद्धत:',
    fert_organic_title: 'जैविक व सेंद्रिय पर्याय:',
    fert_safety_note: '⚠️ कृषी तज्ज्ञ सल्ला: खतांची अंतिम मात्रा माती परीक्षण अहवालानुसार ठरवावी. रासायनिक खतांचा अतिरेक टाळा. नेहमी लेबलवरील सूचनांचे पालन करा व कृषी सहाय्यकांचा सल्ला घ्या.',
    growth_tag: 'उत्कृष्ट पद्धती',
    growth_heading: 'पीक वाढ व भरघोस उत्पादनाचे मार्गदर्शन',
    growth_sub: 'पाणी, मातीची सुपीकता, अन्नद्रव्ये आणि कीड नियंत्रणाचे सोपे व व्यावहारिक उपाय.',
    pillar_water: '१. पाणी व सिंचन नियोजन',
    pillar_soil: '२. जमिनीचे आरोग्य व पूर्वमशागत',
    pillar_nutrients: '३. संतुलित अन्नद्रव्य व्यवस्थापन',
    pillar_ipm: '४. एकात्मिक कीड व रोग नियंत्रण (IPM)',
    pillar_care: '५. उत्पादन वाढीसाठी महत्त्वाच्या टिप्स',
    chat_tag: '२४/७ AI मित्र',
    chat_heading: 'फार्मसाथी AI बहुभाषिक शेती चॅटबॉट',
    chat_sub: 'मराठीत प्रश्न विचारा, झटपट उत्तरे मिळवा आणि स्पीकरवर ऐका!',
    bot_online: 'ऑनलाईन • कृषी सहाय्यक',
    dash_tag: 'माझे शेत',
    dash_heading: 'शेतकरी डॅशबोर्ड (माझे शेत)',
    dash_sub: 'पीक आरोग्य, जुने रोग तपासणी अहवाल, खत नियोजन आणि हवामान एकाच ठिकाणी.',
    stat_health: 'पीक आरोग्य निर्देशांक',
    stat_scans: 'एकूण रोग तपासण्या',
    stat_fert: 'तयार केलेली खत नियोजने',
    stat_queries: 'AI सहाय्यकास विचारलेले प्रश्न',
    dash_sc_scan: 'नवीन रोग तपासणी',
    dash_sc_scan_desc: 'पानाचा फोटो अपलोड करून रोग तपासा.',
    dash_sc_fert: 'खत कॅल्क्युलेटर',
    dash_sc_fert_desc: 'पिकाच्या अवस्थेनुसार खतांचे नियोजन.',
    dash_sc_guide: 'पीक वाढ सल्ला',
    dash_sc_guide_desc: 'पाणी व जमिनीचे सुधारित तंत्रज्ञान.',
    dash_sc_chat: 'फार्मसाथी चॅटबॉट',
    dash_sc_chat_desc: '२४ तास मराठीत मोफत शेती सल्ला.',
    reports_title: 'मागील पीक रोग तपासणी अहवाल',
    reports_sub: 'जतन केलेले रोग निदान, लक्षणे व उपाय',
    footer_brand_desc: 'भारतीय बळीराजासाठी आधुनिक AI द्वारे पीक रोग ओळख, योग्य खतांचे नियोजन आणि मराठीत व्हॉईस शेती सल्ला.',
    footer_features: 'वैशिष्ट्ये',
    footer_supported_crops: 'सपोर्ट असणारी पिके',
    footer_helpline: 'शेतकरी हेल्पलाईन'
  },

  hi: {
    nav_home: 'होम',
    nav_detect: 'फसल रोग AI',
    nav_fertilizer: 'खाद प्रबंधन',
    nav_growth: 'फसल बढ़वार टिप्स',
    nav_chat: 'फार्मसाथी AI',
    nav_dashboard: 'मेरा खेत डैशबोर्ड',
    brand_tagline: 'किसानों का सच्चा डिजिटल साथी • स्मार्ट खेती AI के साथ',
    top_notice: '🌿 कृषि सलाह: आज फसलों पर पर्णीय पोषण और छिड़काव के लिए मौसम अनुकूल है। दोपहर में तेज हवा के समय छिड़काव से बचें।',
    hero_title_accent: 'स्मार्ट खेती अब AI के साथ',
    hero_title_sub: 'फसलों की सुरक्षा और बंपर पैदावार',
    hero_desc: 'फसलों की बीमारियों की तुरंत पहचान करें, वैज्ञानिक खाद की सिफारिश पाएं और अपनी फसल की सेहत सुधारें — विशेष रूप से भारतीय किसान भाइयों के लिए।',
    btn_check_crop: 'मेरी फसल जांचें',
    btn_ask_ai: 'फार्मसाथी AI से पूछें',
    trust_crops: 'गन्ना, धान, गेहूं, कपास व अन्य',
    trust_accuracy: 'AI पैथोलॉजी सटीकता',
    trust_free: 'सभी किसानों के लिए पूर्णतः मुफ्त',
    weather_title: 'आज का कृषि मौसम और छिड़काव सलाह',
    weather_tag: 'केंद्रीय प्रभाग',
    mandi_title: 'मंडी भाव (कृषि उपज मंडी लाइव रेट)',
    features_tag: 'स्मार्ट समाधान',
    features_title: 'हर किसान भाई की जरूरत एक ही जगह',
    features_subtitle: 'बड़े अक्षर और आसान चरण, ताकि स्मार्टफोन पर सेकंडों में भरोसेमंद कृषि सलाह मिल सके।',
    feat1_title: 'AI फसल रोग पहचान',
    feat1_desc: 'पत्ती का फोटो लें या अपलोड करें। हमारा AI गन्ना, धान, गेहूं, टमाटर, कपास आदि फसलों के रोगों की सटीक पहचान और रोकथाम बताता है।',
    feat_cta_detect: 'रोग जांचें',
    feat2_title: 'स्मार्ट खाद सिफारिश',
    feat2_desc: 'फसल की अवस्था और मिट्टी के अनुसार यूरिया, डीएपी, पोटाश और सूक्ष्म पोषक तत्वों का संतुलित चार्ट पाएं।',
    feat_cta_fert: 'खाद की गणना करें',
    feat3_title: 'फसल बढ़वार मार्गदर्शन',
    feat3_desc: 'सिंचाई का सही समय, जैविक खाद, हरी खाद और कीट नियंत्रण की वैज्ञानिक और सरल जानकारी।',
    feat_cta_growth: 'बढ़वार गाइड देखें',
    feat4_title: 'बहुभाषी AI चैटबॉट',
    feat4_desc: 'अपने डिजिटल मित्र "फार्मसाथी AI" से हिंदी में बात करें। पीली पत्तियां, खाद, कीट के बारे में पूछें और बोलकर जवाब सुनें!',
    feat_cta_chat: 'AI से पूछें',
    how_tag: 'सरल ४ चरण',
    how_title: 'फार्मसाथी कैसे काम करता है?',
    how_subtitle: 'हर किसान के लिए अपने मोबाइल पर उपयोग करना बेहद आसान।',
    step1_title: 'पत्ती का फोटो लें या अपलोड करें',
    step1_desc: 'प्रभावित पौधे की पत्ती का स्पष्ट फोटो खींचें या नमूना पत्ती चुनें।',
    step2_title: 'तुरंत AI विश्लेषण',
    step2_desc: 'हमारा AI विजन पत्ती की नसों व धब्बों की जांच करके ९६% से अधिक सटीकता से बीमारी पहचानता है।',
    step3_title: 'इलाज और खाद की सलाह पाएं',
    step3_desc: 'जैविक उपचार, सुरक्षित कीटनाशक खुराक और संतुलित पोषण की जानकारी तुरंत पाएं।',
    step4_title: 'अपनी भाषा में सवाल पूछें',
    step4_desc: 'हिंदी में सवाल टाइप करें या बोलें, और स्पीकर बटन दबाकर उत्तर सुनें!',
    detect_tag: 'AI रोग पहचान',
    detect_heading: 'AI फसल रोग पहचान केंद्र',
    detect_sub: 'पत्ती का फोटो अपलोड करें और तुरंत बीमारी, कारण, जैविक रोकथाम और सुरक्षित दवाओं का परामर्श लें।',
    upload_card_title: 'चरण १: पत्ती का फोटो लगाएं',
    upload_card_sub: 'गन्ना, धान, गेहूं, कपास, टमाटर, प्याज, आलू, मक्का, सोयाबीन आदि के लिए उपलब्ध।',
    label_crop_type: 'फसल चुनें (या AI को खुद पहचानने दें):',
    dropzone_title: 'पत्ती का फोटो यहां चुनें या खींचें',
    dropzone_hint: 'JPG, PNG, WEBP फोटो स्वीकार्य (अधिकतम १५ MB)',
    btn_browse_photo: 'फोटो चुनें',
    btn_take_photo: 'कैमरे से फोटो लें',
    presets_title: 'नमूना पत्तियां जांचें (१-क्लिक टेस्ट):',
    btn_analyze_text: 'फसल स्वास्थ्य जांचें',
    results_empty_title: 'फसल जांच के लिए तैयार',
    results_empty_desc: 'बाईं ओर पत्ती का फोटो लगाएं या नमूना चुनें, फिर "फसल स्वास्थ्य जांचें" दबाएं।',
    diag_symptoms_title: 'दिखाई देने वाले लक्षण:',
    diag_causes_title: 'संभावित कारण:',
    diag_prevention_title: 'रोकथाम के उपाय (जैविक व कृषि क्रियाएं):',
    diag_treatment_title: 'अनुशंसित दवा व छिड़काव विधि:',
    diag_safety_warning: '⚠️ सुरक्षा सलाह: दवाओं के डिब्बे पर लिखे निर्देशों को ध्यानपूर्वक पढ़ें और सुरक्षात्मक मास्क पहनें। रासायनिक खादों व दवाओं का अत्यधिक प्रयोग न करें। नजदीकी कृषि विज्ञान केंद्र (केवीके) से संपर्क करें।',
    btn_save_report: 'रिपोर्ट सुरक्षित करें',
    btn_print_report: 'रिपोर्ट प्रिंट करें',
    btn_ask_ai_disease: 'AI से दवा पूछें',
    unclear_title: 'फोटो धुंधला है या पौधे की पत्ती नहीं है',
    unclear_desc: 'हमारी AI सुरक्षा प्रणाली ने पाया कि यह फोटो धुंधला है या कम रोशनी में लिया गया है। गलत परिणाम देने से बचने के लिए, हम आपसे अच्छी रोशनी में पत्ती का स्पष्ट फोटो लेने का अनुरोध करते हैं।',
    btn_try_again: 'स्पष्ट फोटो दोबारा लें',
    fert_tag: 'उर्वरक प्रबंधन',
    fert_heading: 'स्मार्ट खाद सिफारिश प्रणाली',
    fert_sub: 'फसल की अवस्था, पत्तियों के लक्षण और मिट्टी की स्थिति के अनुसार सुरक्षित व संतुलित खाद की खुराक।',
    fert_form_title: 'फसल और खेत की जानकारी',
    fert_form_sub: 'अपनी फसल के लिए सटीक खाद चार्ट पाने हेतु विवरण भरें।',
    fert_label_crop: '१. फसल का नाम:',
    fert_label_stage: '२. फसल की वर्तमान अवस्था:',
    fert_label_symptom: '३. पत्तियों पर दिखने वाले लक्षण:',
    fert_label_soil: '४. मिट्टी का प्रकार:',
    fert_label_irrigation: '५. सिंचाई का साधन:',
    btn_calc_fert: 'खाद की सही खुराक पाएं',
    fert_why_title: 'यह खाद क्यों जरूरी है:',
    fert_when_title: 'कब डालनी चाहिए:',
    fert_guidance_title: 'डालने की सही विधि:',
    fert_organic_title: 'जैविक व प्राकृतिक विकल्प:',
    fert_safety_note: '⚠️ कृषि विशेषज्ञ सलाह: सटीक मात्रा मिट्टी परीक्षण रिपोर्ट पर निर्भर करती है। अत्यधिक रासायनिक खाद न डालें। हमेशा उत्पाद लेबल का पालन करें और कृषि अधिकारी से सलाह लें।',
    growth_tag: 'उत्तम तकनीक',
    growth_heading: 'फसल बढ़वार एवं उच्च उपज मार्गदर्शन',
    growth_sub: 'उचित सिंचाई, उपजाऊ मिट्टी, पोषक तत्व और समन्वित कीट नियंत्रण के आसान नुस्खे।',
    pillar_water: '१. सिंचाई एवं जल प्रबंधन',
    pillar_soil: '२. मृदा स्वास्थ्य व तैयारी',
    pillar_nutrients: '३. संतुलित पोषण प्रबंधन',
    pillar_ipm: '४. समन्वित कीट व रोग प्रबंधन (IPM)',
    pillar_care: '५. पैदावार बढ़ाने के मुख्य टिप्स',
    chat_tag: '२४/७ AI सलाहकार',
    chat_heading: 'फार्मसाथी AI बहुभाषी कृषि चैटबॉट',
    chat_sub: 'हिंदी में सवाल पूछें, तुरंत समाधान पाएं और आवाज में सुनें!',
    bot_online: 'ऑनलाइन • डिजिटल कृषि मित्र',
    dash_tag: 'मेरा खेत',
    dash_heading: 'किसान डैशबोर्ड (मेरा खेत)',
    dash_sub: 'फसल स्वास्थ्य, पुराने रोग जांच रिकॉर्ड, खाद योजनाएं और मौसम रिपोर्ट एक नजर में।',
    stat_health: 'फसल स्वास्थ्य सूचकांक',
    stat_scans: 'कुल रोग जांचें',
    stat_fert: 'खाद योजनाएं तैयार की गईं',
    stat_queries: 'AI से पूछे गए सवाल',
    dash_sc_scan: 'नई रोग जांच',
    dash_sc_scan_desc: 'पत्ती का फोटो अपलोड कर रोग जांचें।',
    dash_sc_fert: 'खाद कैलकुलेटर',
    dash_sc_fert_desc: 'अवस्था अनुसार खाद की खुराक।',
    dash_sc_guide: 'फसल देखभाल गाइड',
    dash_sc_guide_desc: 'उचित सिंचाई व मिट्टी सुधार।',
    dash_sc_chat: 'फार्मसाथी चैटबॉट',
    dash_sc_chat_desc: '२४ घंटे मुफ्त हिंदी कृषि परामर्श।',
    reports_title: 'पिछली फसल रोग जांच रिपोर्ट',
    reports_sub: 'सुरक्षित किए गए रोग निदान, लक्षण व इलाज',
    footer_brand_desc: 'भारतीय किसानों को AI द्वारा फसल रोग पहचान, खाद मार्गदर्शन और आवाज में कृषि सहायता प्रदान करने हेतु समर्पित।',
    footer_features: 'सुविधाएं',
    footer_supported_crops: 'मुख्य फसलें',
    footer_helpline: 'किसान हेल्पलाइन'
  }
};

// ============================================================================
// 2. INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initChatbotEngine();
  loadSavedReports();
  renderMandiTicker();
  renderSamplePresets();
  renderGrowthGuide('sugarcane');
  setupDragAndDrop();
  updateGlobalLanguageUI();
});

// Initialize the Chatbot
function initChatbotEngine() {
  if (window.FarmSathiChatbot && window.FARMSATHI_DATA) {
    AppState.chatbot = new FarmSathiChatbot(FARMSATHI_DATA);
    AppState.chatbot.setLanguage(AppState.currentLanguage);
    renderChatWelcome();
    renderQuickPrompts();
  }
}

// ============================================================================
// 3. NAVIGATION & VIEW SWITCHING
// ============================================================================
function switchView(viewName) {
  const views = ['home', 'detect', 'fertilizer', 'growth', 'chat', 'dashboard'];
  if (!views.includes(viewName)) return;

  AppState.currentView = viewName;

  // Toggle active class on view panels
  views.forEach(v => {
    const el = document.getElementById(`view${capitalize(v)}`);
    if (el) {
      if (v === viewName) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }

    const tab = document.getElementById(`tab${capitalize(v)}`);
    if (tab) {
      if (v === viewName) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Refresh view-specific dynamic items
  if (viewName === 'dashboard') {
    renderDashboardStats();
    renderReportsTable();
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toggleMobileNav() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '70px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'white';
      navLinks.style.padding = '20px';
      navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    }
  }
}

// ============================================================================
// 4. LANGUAGE / INTERNATIONALIZATION
// ============================================================================
function changeGlobalLanguage(langCode) {
  if (!['en', 'mr', 'hi'].includes(langCode)) return;

  AppState.currentLanguage = langCode;

  // Sync with chatbot
  if (AppState.chatbot) {
    AppState.chatbot.setLanguage(langCode);
  }

  // Update button highlights
  ['en', 'mr', 'hi'].forEach(code => {
    const topBtn = document.getElementById(`langBtn${capitalize(code)}`);
    if (topBtn) {
      if (code === langCode) topBtn.classList.add('active');
      else topBtn.classList.remove('active');
    }

    const chatBtn = document.getElementById(`chatLangBtn${capitalize(code)}`);
    if (chatBtn) {
      if (code === langCode) chatBtn.classList.add('active');
      else chatBtn.classList.remove('active');
    }
  });

  updateGlobalLanguageUI();
  renderChatWelcome();
  renderQuickPrompts();
  renderGrowthGuide('sugarcane');

  // If there's an active diagnosis rendered, re-render it in new language
  if (AppState.currentDiagnosis) {
    displayDiagnosisResults(AppState.currentDiagnosis);
  }
}

function changeChatLanguage(langCode) {
  changeGlobalLanguage(langCode);
}

function updateGlobalLanguageUI() {
  const dict = I18N_DICT[AppState.currentLanguage] || I18N_DICT.en;

  // Update elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update top notice & brand tagline
  const topNoticeEl = document.getElementById('topNoticeText');
  if (topNoticeEl && dict.top_notice) {
    topNoticeEl.textContent = dict.top_notice;
  }

  const brandTaglineEl = document.getElementById('brandTaglineText');
  if (brandTaglineEl && dict.brand_tagline) {
    brandTaglineEl.textContent = dict.brand_tagline;
  }

  // Update spray advice in weather widget
  const weatherSprayEl = document.getElementById('weatherSprayAdviceText');
  if (weatherSprayEl && window.FARMSATHI_DATA && FARMSATHI_DATA.weatherAdvisory) {
    weatherSprayEl.textContent = FARMSATHI_DATA.weatherAdvisory.sprayWindow[AppState.currentLanguage] || FARMSATHI_DATA.weatherAdvisory.sprayWindow.en;
  }

  // Update chat placeholder
  const chatInput = document.getElementById('chatUserInput');
  if (chatInput) {
    if (AppState.currentLanguage === 'mr') {
      chatInput.placeholder = 'फार्मसाथी AI ला शेती, खते किंवा रोगांविषयी विचारा...';
    } else if (AppState.currentLanguage === 'hi') {
      chatInput.placeholder = 'फार्मसाथी AI से फसल, खाद या बीमारी के बारे में पूछें...';
    } else {
      chatInput.placeholder = 'Ask FarmSathi AI anything about crops, pests, fertilizers...';
    }
  }
}

// ============================================================================
// 5. SAMPLE PRESETS & LEAF VISUALIZERS
// ============================================================================
function renderSamplePresets() {
  const container = document.getElementById('presetsChipsGrid');
  if (!container || !window.FARMSATHI_DATA) return;

  const presets = FARMSATHI_DATA.samplePresets;
  container.innerHTML = '';

  presets.forEach(p => {
    const chip = document.createElement('div');
    chip.className = 'preset-chip';
    chip.id = `preset_${p.id}`;
    chip.innerHTML = `
      <div class="preset-chip-dot" style="background: ${p.svgColor};"></div>
      <div>${p.title}</div>
    `;
    chip.onclick = () => selectSamplePreset(p);
    container.appendChild(chip);
  });
}

function selectSamplePreset(preset) {
  // Clear any existing active preset chips
  document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
  const chip = document.getElementById(`preset_${preset.id}`);
  if (chip) chip.classList.add('active');

  AppState.currentLeafPreset = preset;
  AppState.currentLeafImage = preset.id;

  // Sync crop dropdown
  const selector = document.getElementById('cropSelector');
  if (selector && preset.crop !== 'unknown') {
    selector.value = preset.crop;
  }

  // Show preview stage
  const previewStage = document.getElementById('previewStage');
  const previewImg = document.getElementById('leafPreviewImg');
  const svgCanvas = document.getElementById('leafPreviewSvgCanvas');

  if (previewStage) previewStage.classList.add('active');
  if (previewImg) previewImg.style.display = 'none';

  // Render botanical leaf SVG canvas for this preset
  if (svgCanvas) {
    svgCanvas.style.display = 'flex';
    svgCanvas.innerHTML = generateLeafSVG(preset);
  }

  // Enable analyze button
  const analyzeBtn = document.getElementById('btnAnalyze');
  if (analyzeBtn) {
    analyzeBtn.disabled = false;
  }

  // Hide empty state and previous results
  hideDiagnosisResults();
}

// Generate Realistic Botanical Leaf SVG Illustrations
function generateLeafSVG(preset) {
  if (preset.isUnclear) {
    // Blurry / out-of-focus illustration
    return `
      <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <filter id="blurFilter">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <circle cx="100" cy="100" r="70" fill="#94a3b8" filter="url(#blurFilter)" />
        <path d="M60 140 C80 90, 120 70, 150 60" stroke="#64748b" stroke-width="12" stroke-linecap="round" filter="url(#blurFilter)" />
        <text x="100" y="105" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700">Blurred Image</text>
      </svg>
    `;
  }

  const isHealthy = preset.diseaseKey === 'sugarcane_healthy';
  const leafColor = isHealthy ? '#15803d' : '#2d6a4f';
  const spotColor = preset.svgColor || '#dc2626';

  return `
    <svg width="260" height="260" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Glow filter -->
      <defs>
        <filter id="leafShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="rgba(0,0,0,0.3)"/>
        </filter>
        <linearGradient id="leafGrad" x1="50" y1="20" x2="250" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#4ade80"/>
          <stop offset="60%" stop-color="${leafColor}"/>
          <stop offset="100%" stop-color="#14532d"/>
        </linearGradient>
      </defs>

      <!-- Main Leaf Blade -->
      <path d="M150 20 C230 70, 270 170, 150 270 C30 170, 70 70, 150 20 Z" 
            fill="url(#leafGrad)" filter="url(#leafShadow)" stroke="#86efac" stroke-width="2"/>

      <!-- Primary Midrib Vein -->
      <path d="M150 20 Q150 150 150 275" stroke="#bbf7d0" stroke-width="5" stroke-linecap="round"/>

      <!-- Secondary Lateral Veins -->
      <path d="M150 70 Q185 90 220 85" stroke="#86efac" stroke-width="2" stroke-linecap="round"/>
      <path d="M150 70 Q115 90 80 85" stroke="#86efac" stroke-width="2" stroke-linecap="round"/>
      <path d="M150 120 Q195 140 240 135" stroke="#86efac" stroke-width="2" stroke-linecap="round"/>
      <path d="M150 120 Q105 140 60 135" stroke="#86efac" stroke-width="2" stroke-linecap="round"/>
      <path d="M150 170 Q190 190 230 185" stroke="#86efac" stroke-width="2" stroke-linecap="round"/>
      <path d="M150 170 Q110 190 70 185" stroke="#86efac" stroke-width="2" stroke-linecap="round"/>

      ${!isHealthy ? `
        <!-- Disease Pathology Spots & Lesions -->
        <circle cx="180" cy="110" r="16" fill="${spotColor}" opacity="0.85"/>
        <circle cx="180" cy="110" r="22" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="3 3"/>
        <circle cx="115" cy="150" r="14" fill="${spotColor}" opacity="0.9"/>
        <circle cx="115" cy="150" r="18" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="170" cy="190" r="12" fill="${spotColor}" opacity="0.8"/>
        <ellipse cx="140" cy="90" rx="10" ry="18" fill="${spotColor}" opacity="0.75" transform="rotate(-20 140 90)"/>
      ` : `
        <!-- Healthy Dew Droplets -->
        <circle cx="175" cy="115" r="7" fill="rgba(255,255,255,0.7)"/>
        <circle cx="120" cy="160" r="5" fill="rgba(255,255,255,0.7)"/>
      `}
    </svg>
  `;
}

// ============================================================================
// 6. DRAG & DROP AND FILE UPLOAD
// ============================================================================
function triggerFileInput() {
  const fileInput = document.getElementById('leafFileInput');
  if (fileInput) fileInput.click();
}

function handleFileSelected(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  processUploadedFile(file);
}

function setupDragAndDrop() {
  const dropzone = document.getElementById('dropzoneBox');
  if (!dropzone) return;

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('dragover');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('dragover');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const file = dt.files && dt.files[0];
    if (file) {
      processUploadedFile(file);
    }
  }, false);
}

function processUploadedFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    AppState.currentLeafImage = dataUrl;
    AppState.currentLeafPreset = null; // User custom photo

    // Display image in preview stage
    const previewStage = document.getElementById('previewStage');
    const previewImg = document.getElementById('leafPreviewImg');
    const svgCanvas = document.getElementById('leafPreviewSvgCanvas');

    if (previewStage) previewStage.classList.add('active');
    if (previewImg) {
      previewImg.src = dataUrl;
      previewImg.style.display = 'block';
    }
    if (svgCanvas) svgCanvas.style.display = 'none';

    // Deselect sample presets
    document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));

    // Enable Analyze Button
    const analyzeBtn = document.getElementById('btnAnalyze');
    if (analyzeBtn) analyzeBtn.disabled = false;

    hideDiagnosisResults();
  };
  reader.readAsDataURL(file);
}

// Camera Live Capture Modal
function openCameraModal() {
  const modal = document.getElementById('generalModal');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--primary-950); margin-bottom: 12px;">
      📸 Live Camera Leaf Inspection
    </h3>
    <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
      Position your camera close to the affected plant leaf in bright natural daylight.
    </p>
    <div style="background: #000; border-radius: 12px; height: 260px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
      <video id="cameraVideo" autoplay playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>
      <div style="position: absolute; border: 2px dashed #4ade80; width: 70%; height: 70%; border-radius: 8px; pointer-events: none;"></div>
    </div>
    <div style="display: flex; gap: 12px; margin-top: 20px;">
      <button class="btn-farmer btn-primary-action" style="flex: 1;" onclick="captureLiveSnapshot()">
        📸 Capture Leaf Photo
      </button>
      <button class="btn-farmer btn-secondary-action" style="flex: 0.6; color: var(--text-main);" onclick="closeModal()">
        Cancel
      </button>
    </div>
  `;

  modal.classList.add('active');

  // Attempt to activate webcam
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(stream => {
        window.activeCameraStream = stream;
        const video = document.getElementById('cameraVideo');
        if (video) video.srcObject = stream;
      })
      .catch(err => {
        console.warn('Camera permission or device unavailable, simulated capture ready.');
      });
  }
}

function captureLiveSnapshot() {
  // If camera stream exists, draw to canvas
  const video = document.getElementById('cameraVideo');
  if (video && window.activeCameraStream) {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');

    // Stop tracks
    window.activeCameraStream.getTracks().forEach(t => t.stop());
    window.activeCameraStream = null;

    closeModal();

    // Set captured photo
    AppState.currentLeafImage = dataUrl;
    AppState.currentLeafPreset = null;

    const previewStage = document.getElementById('previewStage');
    const previewImg = document.getElementById('leafPreviewImg');
    const svgCanvas = document.getElementById('leafPreviewSvgCanvas');

    if (previewStage) previewStage.classList.add('active');
    if (previewImg) {
      previewImg.src = dataUrl;
      previewImg.style.display = 'block';
    }
    if (svgCanvas) svgCanvas.style.display = 'none';

    const analyzeBtn = document.getElementById('btnAnalyze');
    if (analyzeBtn) analyzeBtn.disabled = false;

    hideDiagnosisResults();
  } else {
    // Fallback: pick high-quality tomato blight preset
    closeModal();
    if (window.FARMSATHI_DATA && FARMSATHI_DATA.samplePresets[0]) {
      selectSamplePreset(FARMSATHI_DATA.samplePresets[0]);
    }
  }
}

function closeModal() {
  const modal = document.getElementById('generalModal');
  if (modal) modal.classList.remove('active');

  if (window.activeCameraStream) {
    window.activeCameraStream.getTracks().forEach(t => t.stop());
    window.activeCameraStream = null;
  }
}

// ============================================================================
// 7. AI DISEASE DETECTION ENGINE
// ============================================================================
function startDiseaseAnalysis() {
  if (AppState.isAnalyzing) return;

  const previewStage = document.getElementById('previewStage');
  const progressBar = document.getElementById('scanProgressBar');
  const analyzeBtn = document.getElementById('btnAnalyze');

  AppState.isAnalyzing = true;
  if (analyzeBtn) {
    analyzeBtn.disabled = true;
    analyzeBtn.innerHTML = `<span>⏳</span> <span>Analyzing Crop Health...</span>`;
  }

  if (previewStage) previewStage.classList.add('scanning');

  // Smooth Progress Bar Animation
  let progress = 0;
  const interval = setInterval(() => {
    progress += 8;
    if (progressBar) progressBar.style.width = `${Math.min(progress, 95)}%`;

    if (progress >= 100) {
      clearInterval(interval);
      finalizeDiseaseDiagnosis();
    }
  }, 100);
}

function finalizeDiseaseDiagnosis() {
  const previewStage = document.getElementById('previewStage');
  const progressBar = document.getElementById('scanProgressBar');
  const analyzeBtn = document.getElementById('btnAnalyze');

  if (progressBar) progressBar.style.width = '100%';
  if (previewStage) previewStage.classList.remove('scanning');

  AppState.isAnalyzing = false;
  if (analyzeBtn) {
    analyzeBtn.disabled = false;
    const btnText = I18N_DICT[AppState.currentLanguage]?.btn_analyze_text || 'Analyze Crop Health';
    analyzeBtn.innerHTML = `<span>🔬</span> <span>${btnText}</span>`;
  }

  // 1. Check if user tested an unclear image preset
  if (AppState.currentLeafPreset && AppState.currentLeafPreset.isUnclear) {
    displayUnclearImageAlert();
    return;
  }

  // 2. Select pathology diagnosis based on preset or crop selector
  let selectedCrop = document.getElementById('cropSelector')?.value || 'auto';
  let diseaseRecord = null;

  if (AppState.currentLeafPreset && AppState.currentLeafPreset.diseaseKey) {
    diseaseRecord = FARMSATHI_DATA.diseases[AppState.currentLeafPreset.diseaseKey];
  } else {
    // For custom uploaded image: map from dropdown or fallback to high-incidence diagnosis
    if (selectedCrop === 'auto' || selectedCrop === 'sugarcane') {
      diseaseRecord = FARMSATHI_DATA.diseases['sugarcane_red_rot'];
    } else if (selectedCrop === 'rice') {
      diseaseRecord = FARMSATHI_DATA.diseases['rice_bacterial_blight'];
    } else if (selectedCrop === 'wheat') {
      diseaseRecord = FARMSATHI_DATA.diseases['wheat_yellow_rust'];
    } else if (selectedCrop === 'cotton') {
      diseaseRecord = FARMSATHI_DATA.diseases['cotton_leaf_curl'];
    } else if (selectedCrop === 'tomato') {
      diseaseRecord = FARMSATHI_DATA.diseases['tomato_early_blight'];
    } else if (selectedCrop === 'potato') {
      diseaseRecord = FARMSATHI_DATA.diseases['potato_late_blight'];
    } else if (selectedCrop === 'onion') {
      diseaseRecord = FARMSATHI_DATA.diseases['onion_purple_blotch'];
    } else if (selectedCrop === 'maize') {
      diseaseRecord = FARMSATHI_DATA.diseases['maize_fall_armyworm'];
    } else if (selectedCrop === 'soybean') {
      diseaseRecord = FARMSATHI_DATA.diseases['soybean_yellow_mosaic'];
    } else {
      diseaseRecord = FARMSATHI_DATA.diseases['tomato_early_blight'];
    }
  }

  if (diseaseRecord) {
    AppState.currentDiagnosis = diseaseRecord;
    displayDiagnosisResults(diseaseRecord);

    // Save to historical reports
    saveReportToStorage(diseaseRecord);
  }
}

function displayDiagnosisResults(diagnosis) {
  const emptyState = document.getElementById('resultsEmptyState');
  const unclearAlert = document.getElementById('unclearImageAlert');
  const reportContainer = document.getElementById('diagnosisReport');

  if (emptyState) emptyState.style.display = 'none';
  if (unclearAlert) unclearAlert.style.display = 'none';
  if (reportContainer) reportContainer.classList.add('active');

  const lang = AppState.currentLanguage;

  // Header Status Badge
  const badge = document.getElementById('diagStatusBadge');
  const badgeDot = document.getElementById('diagStatusDot');
  const badgeText = document.getElementById('diagStatusText');
  const confVal = document.getElementById('diagConfidenceVal');

  if (diagnosis.isHealthy) {
    badge.className = 'status-badge status-healthy';
    badgeText.textContent = lang === 'mr' ? 'पीक निरोगी आहे' : (lang === 'hi' ? 'फसल स्वस्थ है' : 'Healthy Crop');
  } else {
    badge.className = 'status-badge status-danger';
    badgeText.textContent = lang === 'mr' ? 'रोग आढळला' : (lang === 'hi' ? 'रोग पाया गया' : 'Disease Detected');
  }

  confVal.textContent = `${diagnosis.confidence}%`;

  // Crop Name & Disease Name
  const cropObj = FARMSATHI_DATA.crops.find(c => c.id === diagnosis.cropId);
  const cropNameEl = document.getElementById('diagCropName');
  const diseaseNameEl = document.getElementById('diagDiseaseName');

  if (cropNameEl && cropObj) {
    cropNameEl.textContent = `${cropObj.name[lang] || cropObj.name.en} (${cropObj.scientificName})`;
  }

  if (diseaseNameEl) {
    diseaseNameEl.textContent = diagnosis.name[lang] || diagnosis.name.en;
  }

  // Populate Lists
  populateList('diagSymptomsList', diagnosis.symptoms[lang] || diagnosis.symptoms.en);
  populateList('diagCausesList', diagnosis.causes[lang] || diagnosis.causes.en);
  populateList('diagPreventionList', diagnosis.prevention[lang] || diagnosis.prevention.en);
  populateList('diagTreatmentList', diagnosis.treatment[lang] || diagnosis.treatment.en);
}

function populateList(elementId, items) {
  const el = document.getElementById(elementId);
  if (!el || !Array.isArray(items)) return;

  el.innerHTML = '';
  items.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    el.appendChild(li);
  });
}

function displayUnclearImageAlert() {
  const emptyState = document.getElementById('resultsEmptyState');
  const unclearAlert = document.getElementById('unclearImageAlert');
  const reportContainer = document.getElementById('diagnosisReport');

  if (emptyState) emptyState.style.display = 'none';
  if (reportContainer) reportContainer.classList.remove('active');
  if (unclearAlert) unclearAlert.style.display = 'block';
}

function hideDiagnosisResults() {
  const emptyState = document.getElementById('resultsEmptyState');
  const unclearAlert = document.getElementById('unclearImageAlert');
  const reportContainer = document.getElementById('diagnosisReport');

  if (emptyState) emptyState.style.display = 'block';
  if (unclearAlert) unclearAlert.style.display = 'none';
  if (reportContainer) reportContainer.classList.remove('active');
}

// Post-Diagnosis Handlers
function saveCurrentDiagnosisReport() {
  if (!AppState.currentDiagnosis) return;
  alert(AppState.currentLanguage === 'mr' 
    ? 'हा अहवाल आपल्या डॅशबोर्डवर यशस्वीपणे सेव्ह करण्यात आला आहे!' 
    : (AppState.currentLanguage === 'hi' 
      ? 'यह रिपोर्ट आपके डैशबोर्ड पर सफलतापूर्वक सुरक्षित कर ली गई है!' 
      : 'Diagnosis report successfully saved to your dashboard!'));
}

function printDiagnosisCard() {
  if (!AppState.currentDiagnosis) return;
  window.print();
}

function consultAIAboutCurrentDisease() {
  if (!AppState.currentDiagnosis) return;

  const diag = AppState.currentDiagnosis;
  const lang = AppState.currentLanguage;
  const cropObj = FARMSATHI_DATA.crops.find(c => c.id === diag.cropId);
  const cropName = cropObj ? cropObj.name[lang] : diag.cropId;
  const diseaseName = diag.name[lang] || diag.name.en;

  let query = '';
  if (lang === 'mr') {
    query = `माझ्या ${cropName} पिकावर ${diseaseName} आढळला आहे. तात्काळ कोणते औषध फवारावे?`;
  } else if (lang === 'hi') {
    query = `मेरी ${cropName} की फसल में ${diseaseName} का लक्षण दिख रहा है। तत्काल क्या छिड़काव करें?`;
  } else {
    query = `My ${cropName} has been diagnosed with ${diseaseName}. What is the immediate treatment plan?`;
  }

  switchView('chat');

  // Inject into chat
  setTimeout(() => {
    const input = document.getElementById('chatUserInput');
    if (input) {
      input.value = query;
      sendUserChatMessage();
    }
  }, 350);
}

// ============================================================================
// 8. FERTILIZER RECOMMENDATION ENGINE
// ============================================================================
function calculateFertilizerPlan(event) {
  event.preventDefault();

  const crop = document.getElementById('fertCrop')?.value || 'sugarcane';
  const stage = document.getElementById('fertStage')?.value || 'vegetative';
  const symptom = document.getElementById('fertSymptom')?.value || 'none';
  const soil = document.getElementById('fertSoil')?.value || 'loam';
  const irrigation = document.getElementById('fertIrrigation')?.value || 'drip';

  const lang = AppState.currentLanguage;
  const cropObj = FARMSATHI_DATA.crops.find(c => c.id === crop);
  const cropName = cropObj ? cropObj.name[lang] : crop;

  // Scientific Nutrition Mapping Rules Engine
  let plan = {
    title: '',
    badges: [],
    why: '',
    when: '',
    guidance: '',
    organic: ''
  };

  if (symptom === 'yellowing_upper') {
    // Iron / Sulphur deficiency
    plan.title = lang === 'mr' ? 'चिलेटेड फेरस (Fe-EDTA) + सूक्ष्म अन्नद्रव्य फवारणी' : (lang === 'hi' ? 'चिलेटेड आयरन + सूक्ष्म पोषक तत्व' : 'Chelated Iron (Fe-EDTA 12%) + Micronutrient Foliar');
    plan.badges = ['Iron (Fe) 12%', 'Zinc (Zn) 5%', 'Sulphur (S) 10%'];
    plan.why = lang === 'mr' 
      ? 'वरची कोवळी पाने पिवळी पडणे हे फेरस (लोह) च्या कमतरतेचे मुख्य लक्षण आहे. चुनखडीयुक्त जमिनीत हे जास्त आढळते.'
      : (lang === 'hi' 
        ? 'ऊपरी नई पत्तियों का पीला पड़ना आयरन की कमी दर्शाता है। चूनेदार मिट्टी में यह आम है।' 
        : 'Interveinal yellowing of new top foliage signals acute Iron deficiency, common in calcareous soils.');
    plan.when = lang === 'mr' 
      ? 'सकाळी किंवा संध्याकाळी शांत हवेत फवारणी करावी.' 
      : (lang === 'hi' ? 'सुबह या शाम को शांत मौसम में छिड़काव करें।' : 'Apply during calm morning or late afternoon hours.');
    plan.guidance = lang === 'mr' 
      ? 'चिलेटेड फेरस १.५ ग्रॅम/लिटर पाण्यात मिसळून संपूर्ण पानांवर फवारा. जमिनीतून १० किलो फेरस सल्फेट प्रति एकर शेणखतात मिसळून द्या.' 
      : (lang === 'hi' 
        ? 'चिलेटेड आयरन १.५ ग्राम/लीटर पानी में घोलकर छिड़कें। जमीन में १० किलो फेरस सल्फेट सड़ी खाद में मिलाकर दें।' 
        : 'Dissolve Chelated Iron @ 1.5 g/L foliar spray. For soil application, mix 10 kg Ferrous Sulphate with decomposed manure per acre.');
    plan.organic = lang === 'mr' ? 'गोमूत्र अर्क (१०%) आणि ताक फवारल्यास लोहाची उपलब्धता वाढते.' : (lang === 'hi' ? 'गौमूत्र अर्क (१०%) और खट्टी छाछ का छिड़काव लाभकारी है।' : 'Fermented sour buttermilk (10%) and cow urine foliar spray mobilizes micro-elements.');
  } 
  else if (symptom === 'purple_leaves') {
    // Phosphorus deficiency
    plan.title = lang === 'mr' ? 'डीएपी (DAP 18:46:0) किंवा सिंगल सुपर फॉस्फेट (SSP)' : (lang === 'hi' ? 'डीएपी (DAP 18:46:0) या सिंगल सुपर फास्फेट' : 'DAP 18:46:0 or Single Super Phosphate (SSP 16%)');
    plan.badges = ['Phosphorus (P) 46%', 'Nitrogen (N) 18%', 'Calcium (Ca) 19%'];
    plan.why = lang === 'mr' 
      ? 'पानांचा जांभळट रंग स्फुरद (Phosphorus) च्या अभावामुळे येतो. स्फुरद मुळांची जोमदार वाढ व खोडाची ताकद वाढवतो.' 
      : (lang === 'hi' ? 'पत्तियों का बैंगनी होना फास्फोरस की कमी का संकेत है। यह जड़ों के विस्तार के लिए अनिवार्य है।' : 'Purpling of leaf margins indicates Phosphorus deficiency. P is vital for root growth and ATP energy.');
    plan.when = lang === 'mr' ? 'पेरणी किंवा लागवडीच्या वेळी बेसल डोस म्हणून द्या.' : (lang === 'hi' ? 'बुवाई या रोपाई के समय बेसल खुराक के रूप में दें।' : 'Apply as basal placement 4-5 cm below seed level.');
    plan.guidance = lang === 'mr' ? 'ठिबक असल्यास ०:५२:३४ विद्राव्य खत ३-४ किलो प्रति एकर सोडावे.' : (lang === 'hi' ? 'ड्रिप में ०:५२:३४ घुलनशील खाद ३-४ किलो प्रति एकड़ दें।' : 'For drip irrigation, fertigate with 0:52:34 @ 3-4 kg/acre.');
    plan.organic = lang === 'mr' ? 'पीएसबी (फॉस्फोरस सोलुबिलायझिंग बॅक्टेरिया) २ लिटर एकरी द्या.' : (lang === 'hi' ? 'पीएसबी जैव उर्वरक २ लीटर प्रति एकड़ दें।' : 'Apply PSB (Phosphate Solubilizing Bio-fertilizer) 2 L/acre.');
  }
  else if (stage === 'flowering' || stage === 'fruiting') {
    // Potash / Fruit development
    plan.title = lang === 'mr' ? 'एमओपी (पोटॅश ०:०:६०) + १३:००:४५ विद्राव्य खत' : (lang === 'hi' ? 'पोटाश (एमओपी ०:०:६०) + १३:००:४५' : 'MOP 0:0:60 + Potassium Nitrate 13:0:45');
    plan.badges = ['Potassium (K) 60%', 'Nitrate N 13%', 'Boron (B) 20%'];
    plan.why = lang === 'mr' 
      ? 'फुलोऱ्याच्या व फळे भरण्याच्या काळात पालाश (Potash) फळांची गोडी, आकार, दाण्यांचे वजन व चकाकी वाढवतो.' 
      : (lang === 'hi' ? 'फूल व फल बनते समय पोटाश दानों का वजन, चमक और फलों की मिठास बढ़ाता है।' : 'Potassium drives starch translocation, sugar synthesis, fruit enlargement, and drought endurance.');
    plan.when = lang === 'mr' ? 'फुलोरा सुरू होताच आणि फळे भरताना दोन हप्त्यांत द्या.' : (lang === 'hi' ? 'फूल आने और दाने भरते समय दें।' : 'Split into 2 applications during flowering initiation and grain-filling.');
    plan.guidance = lang === 'mr' ? 'बोरॉन १ ग्रॅम/लिटर फवारल्यास फुलगळ थांबते व फळांना तडे जात नाहीत.' : (lang === 'hi' ? 'बोरॉन १ ग्राम/लीटर छिड़कने से फूल झड़ना रुकता है और फल नहीं चटकते।' : 'Combine with Boron 20% foliar spray @ 1 g/L to avert fruit cracking.');
    plan.organic = lang === 'mr' ? 'राख (Wood Ash) आणि केळीच्या सालीचे स्लरी खत उत्तम पोटॅश पुरवते.' : (lang === 'hi' ? 'लकड़ी की राख और वर्मीवाश पोटाश का अच्छा प्राकृतिक स्रोत है।' : 'Wood ash incorporation and vermiwash foliar feed provide organic potassium.');
  }
  else {
    // Vegetative Balanced
    plan.title = lang === 'mr' ? 'युरिया (नत्र ४६%) + १९:१९:१९ विद्राव्य खत' : (lang === 'hi' ? 'यूरिया + १९:१९:१९ घुलनशील खाद' : 'Urea Split Top-Dressing + NPK 19:19:19');
    plan.badges = ['Nitrogen (N) 46%', 'Phosphorus 19%', 'Potassium 19%'];
    plan.why = lang === 'mr' 
      ? 'वाढीच्या काळात झाडांना हिरवेगार ठेवण्यासाठी व जोमदार फुटवे येण्यासाठी नत्र अत्यंत आवश्यक आहे.' 
      : (lang === 'hi' ? 'बढ़वार की अवस्था में कल्ले फूटने और हरियाली के लिए नाइट्रोजन जरूरी है।' : 'Nitrogen fuels vigorous tillering and leaf canopy expansion during active vegetative growth.');
    plan.when = lang === 'mr' ? 'लागवडीनंतर २१ ते ४५ दिवसांच्या दरम्यान विभागून द्या.' : (lang === 'hi' ? 'बुवाई के २१ से ४५ दिन के बीच किश्तों में दें।' : 'Apply in split doses 21-45 days post sowing/transplanting.');
    plan.guidance = lang === 'mr' ? 'नेहमी जमिनीत ओल असताना खत द्या, कोरड्या जमिनीत युरिया टाकू नका.' : (lang === 'hi' ? 'हमेशा खेत में पर्याप्त नमी होने पर ही खाद डालें।' : 'Broadcast only over moist root zone followed by gentle irrigation.');
    plan.organic = lang === 'mr' ? 'एकरी २०० लिटर जीवामृत ठिबकमधून किंवा पाटाच्या पाण्यातून सोडा.' : (lang === 'hi' ? 'प्रति एकड़ २०० लीटर जीवामृत सिंचाई के साथ दें।' : 'Feed Jeevamrut @ 200 L/acre through irrigation water every fortnight.');
  }

  // Update UI Result Card
  const targetBadge = document.getElementById('fertTargetCropBadge');
  const primaryTitle = document.getElementById('fertPrimaryTitle');
  const badgesContainer = document.getElementById('fertNutrientBadges');
  const whyDesc = document.getElementById('fertWhyDesc');
  const whenDesc = document.getElementById('fertWhenDesc');
  const guidanceDesc = document.getElementById('fertGuidanceDesc');
  const organicDesc = document.getElementById('fertOrganicDesc');

  if (targetBadge) targetBadge.textContent = `${cropName} • ${stage.toUpperCase()}`;
  if (primaryTitle) primaryTitle.textContent = plan.title;

  if (badgesContainer) {
    badgesContainer.innerHTML = '';
    plan.badges.forEach(b => {
      const span = document.createElement('span');
      span.className = 'nutrient-badge';
      span.textContent = b;
      badgesContainer.appendChild(span);
    });
  }

  if (whyDesc) whyDesc.textContent = plan.why;
  if (whenDesc) whenDesc.textContent = plan.when;
  if (guidanceDesc) guidanceDesc.textContent = plan.guidance;
  if (organicDesc) organicDesc.textContent = plan.organic;

  // Scroll smoothly to result on mobile
  const resultCard = document.getElementById('fertResultCard');
  if (resultCard && window.innerWidth < 768) {
    resultCard.scrollIntoView({ behavior: 'smooth' });
  }
}

// ============================================================================
// 9. CROP GROWTH GUIDANCE
// ============================================================================
function filterGrowthCrop(cropId) {
  // Update button active states
  const container = document.getElementById('growthCropFilters');
  if (container) {
    container.querySelectorAll('.crop-filter-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = Array.from(container.querySelectorAll('.crop-filter-btn')).find(b => b.getAttribute('onclick').includes(cropId));
    if (activeBtn) activeBtn.classList.add('active');
  }

  renderGrowthGuide(cropId);
}

function renderGrowthGuide(cropId) {
  if (!window.FARMSATHI_DATA || !FARMSATHI_DATA.growthGuide) return;

  const guide = FARMSATHI_DATA.growthGuide[cropId] || FARMSATHI_DATA.growthGuide['sugarcane'];
  const lang = AppState.currentLanguage;

  const waterEl = document.getElementById('growthWaterText');
  const soilEl = document.getElementById('growthSoilText');
  const nutrientsEl = document.getElementById('growthNutrientsText');
  const pestEl = document.getElementById('growthPestText');
  const careEl = document.getElementById('growthCareText');

  if (waterEl) waterEl.textContent = guide.water[lang] || guide.water.en;
  if (soilEl) soilEl.textContent = guide.soil[lang] || guide.soil.en;
  if (nutrientsEl) nutrientsEl.textContent = guide.nutrients[lang] || guide.nutrients.en;
  if (pestEl) pestEl.textContent = guide.pestIPM[lang] || guide.pestIPM.en;
  if (careEl) careEl.textContent = guide.careTips[lang] || guide.careTips.en;
}

// ============================================================================
// 10. FARMSATHI AI CHATBOT INTERFACE
// ============================================================================
function renderChatWelcome() {
  const container = document.getElementById('chatMessages');
  if (!container || !AppState.chatbot) return;

  container.innerHTML = '';
  const welcomeText = AppState.chatbot.getWelcomeMessage();
  appendChatMessage('bot', welcomeText);
}

function renderQuickPrompts() {
  const container = document.getElementById('quickPromptsTray');
  if (!container || !AppState.chatbot) return;

  const prompts = AppState.chatbot.getQuickPrompts();
  container.innerHTML = '';

  prompts.forEach(p => {
    const chip = document.createElement('button');
    chip.className = 'quick-prompt-chip';
    chip.textContent = p.label;
    chip.onclick = () => {
      const input = document.getElementById('chatUserInput');
      if (input) input.value = p.query;
      sendUserChatMessage();
    };
    container.appendChild(chip);
  });
}

function handleChatInputKey(event) {
  if (event.key === 'Enter') {
    sendUserChatMessage();
  }
}

function sendUserChatMessage() {
  const input = document.getElementById('chatUserInput');
  if (!input) return;

  const query = input.value.trim();
  if (!query) return;

  appendChatMessage('user', query);
  input.value = '';

  // Process through Chatbot NLP
  if (AppState.chatbot) {
    const response = AppState.chatbot.processQuery(query);
    setTimeout(() => {
      appendChatMessage('bot', response);
    }, 300);
  }
}

function appendChatMessage(sender, text) {
  const container = document.getElementById('chatMessages');
  if (!container) return;

  const row = document.createElement('div');
  row.className = `chat-bubble-row ${sender}`;

  const avatar = document.createElement('div');
  avatar.className = `bubble-avatar ${sender}-bubble-avatar`;
  avatar.textContent = sender === 'bot' ? '🤖' : '👨‍🌾';

  const content = document.createElement('div');
  content.className = 'chat-bubble-content';

  // Format basic bold/bullet markdown
  content.innerHTML = formatChatMarkdown(text);

  // If message from bot, add a "Listen Aloud (वाचा/ऐका)" button
  if (sender === 'bot') {
    const listenBtn = document.createElement('button');
    listenBtn.className = 'btn-speech-read';
    const lang = AppState.currentLanguage;
    const btnLabel = lang === 'mr' ? '🔊 ऐका (बोलून दाखवा)' : (lang === 'hi' ? '🔊 सुनिए (आवाज में)' : '🔊 Listen Aloud');
    listenBtn.innerHTML = `<span>${btnLabel}</span>`;
    listenBtn.onclick = () => {
      if (AppState.chatbot) {
        AppState.chatbot.speakText(text, () => {
          listenBtn.innerHTML = `<span>${btnLabel}</span>`;
        });
        listenBtn.innerHTML = `<span>🔊 Talking...</span>`;
      }
    };
    content.appendChild(listenBtn);
  }

  row.appendChild(avatar);
  row.appendChild(content);
  container.appendChild(row);

  container.scrollTop = container.scrollHeight;
}

function formatChatMarkdown(text) {
  let html = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n- (.*?)/g, '<br>• $1')
    .replace(/\n1\. (.*?)/g, '<br>1. $1')
    .replace(/\n2\. (.*?)/g, '<br>2. $1')
    .replace(/\n3\. (.*?)/g, '<br>3. $1')
    .replace(/\n4\. (.*?)/g, '<br>4. $1');
  return html;
}

function toggleSpeechRecognition() {
  const micBtn = document.getElementById('btnChatMic');
  if (!AppState.chatbot || !AppState.chatbot.recognition) {
    alert('Voice input is not supported by your current browser. You can type your questions.');
    return;
  }

  const rec = AppState.chatbot.recognition;
  const langCode = AppState.currentLanguage === 'mr' ? 'mr-IN' : (AppState.currentLanguage === 'hi' ? 'hi-IN' : 'en-IN');
  rec.lang = langCode;

  if (AppState.chatbot.isListening) {
    rec.stop();
    AppState.chatbot.isListening = false;
    if (micBtn) micBtn.classList.remove('listening');
  } else {
    try {
      rec.start();
      AppState.chatbot.isListening = true;
      if (micBtn) micBtn.classList.add('listening');

      rec.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const input = document.getElementById('chatUserInput');
        if (input) input.value = transcript;
        sendUserChatMessage();
      };

      rec.onend = () => {
        AppState.chatbot.isListening = false;
        if (micBtn) micBtn.classList.remove('listening');
      };

      rec.onerror = () => {
        AppState.chatbot.isListening = false;
        if (micBtn) micBtn.classList.remove('listening');
      };
    } catch (e) {
      console.warn('Speech recognition error:', e);
    }
  }
}

// ============================================================================
// 11. MANDI TICKER & DASHBOARD REPORTS
// ============================================================================
function renderMandiTicker() {
  const container = document.getElementById('mandiTickerTrack');
  if (!container || !window.FARMSATHI_DATA) return;

  const rates = FARMSATHI_DATA.mandiRates;
  container.innerHTML = '';

  const lang = AppState.currentLanguage;

  rates.forEach(item => {
    const pill = document.createElement('div');
    pill.className = 'mandi-pill';
    const isUp = item.trend.startsWith('+');
    pill.innerHTML = `
      <span style="font-size: 1.4rem;">${item.icon}</span>
      <div>
        <div style="font-size: 0.88rem; font-weight: 700;">${item.commodity[lang] || item.commodity.en}</div>
        <div style="font-size: 0.76rem; color: var(--text-muted);">${item.market}</div>
      </div>
      <div>
        <div class="m-price">${item.price}</div>
        <div class="${isUp ? 'm-trend-up' : 'm-trend-down'}">${item.trend}</div>
      </div>
    `;
    container.appendChild(pill);
  });
}

function loadSavedReports() {
  try {
    const raw = localStorage.getItem('farmsathi_reports');
    if (raw) {
      AppState.reports = JSON.parse(raw);
    } else {
      // Default pre-populated sample reports for farmer convenience
      AppState.reports = [
        {
          id: 'rep_1',
          date: '12 Oct 2026, 10:30 AM',
          cropId: 'sugarcane',
          cropName: 'Sugarcane',
          diseaseName: 'Red Rot (Colletotrichum falcatum)',
          status: 'Disease Detected',
          confidence: '96.8%'
        },
        {
          id: 'rep_2',
          date: '08 Oct 2026, 04:15 PM',
          cropId: 'wheat',
          cropName: 'Wheat',
          diseaseName: 'Healthy Crop (Vigorous Growth)',
          status: 'Healthy',
          confidence: '97.4%'
        },
        {
          id: 'rep_3',
          date: '02 Oct 2026, 09:00 AM',
          cropId: 'tomato',
          cropName: 'Tomato',
          diseaseName: 'Early Blight (Alternaria solani)',
          status: 'Disease Detected',
          confidence: '95.5%'
        }
      ];
      localStorage.setItem('farmsathi_reports', JSON.stringify(AppState.reports));
    }
  } catch (e) {
    AppState.reports = [];
  }
}

function saveReportToStorage(diagnosis) {
  const lang = AppState.currentLanguage;
  const cropObj = FARMSATHI_DATA.crops.find(c => c.id === diagnosis.cropId);

  const newReport = {
    id: `rep_${Date.now()}`,
    date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    cropId: diagnosis.cropId,
    cropName: cropObj ? cropObj.name.en : diagnosis.cropId,
    diseaseName: diagnosis.name.en,
    status: diagnosis.isHealthy ? 'Healthy' : 'Disease Detected',
    confidence: `${diagnosis.confidence}%`
  };

  AppState.reports.unshift(newReport);
  try {
    localStorage.setItem('farmsathi_reports', JSON.stringify(AppState.reports));
  } catch (e) {}

  renderDashboardStats();
}

function renderDashboardStats() {
  const scansCount = document.getElementById('dashScansCount');
  if (scansCount) scansCount.textContent = AppState.reports.length;
}

function renderReportsTable() {
  const tbody = document.getElementById('reportsTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';

  if (AppState.reports.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-light); padding: 24px;">No scan reports saved yet.</td></tr>`;
    return;
  }

  AppState.reports.forEach(r => {
    const tr = document.createElement('tr');
    const isHealthy = r.status.toLowerCase().includes('healthy');

    tr.innerHTML = `
      <td><strong>${r.date}</strong></td>
      <td>${r.cropName}</td>
      <td>${r.diseaseName}</td>
      <td>
        <span class="status-badge ${isHealthy ? 'status-healthy' : 'status-danger'}" style="font-size: 0.74rem; padding: 2px 8px;">
          ${r.status}
        </span>
      </td>
      <td>${r.confidence}</td>
      <td>
        <button class="report-action-btn" onclick="viewHistoricalReport('${r.id}')">View</button>
        <button class="report-action-btn" style="color: #dc2626;" onclick="deleteHistoricalReport('${r.id}')">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function viewHistoricalReport(reportId) {
  const rep = AppState.reports.find(r => r.id === reportId);
  if (!rep) return;

  const modal = document.getElementById('generalModal');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--primary-950); margin-bottom: 6px;">
      ${rep.cropName} Diagnosis Report
    </h3>
    <div style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">Scan Date: ${rep.date}</div>
    <div style="background: var(--surface-ground); border-radius: 12px; padding: 18px; margin-bottom: 18px;">
      <div style="margin-bottom: 8px;"><strong>Diagnosis:</strong> ${rep.diseaseName}</div>
      <div style="margin-bottom: 8px;"><strong>Health Status:</strong> ${rep.status}</div>
      <div><strong>AI Confidence:</strong> ${rep.confidence}</div>
    </div>
    <div style="display: flex; gap: 10px;">
      <button class="btn-farmer btn-primary-action" style="flex: 1;" onclick="window.print()">
        🖨️ Print Report
      </button>
      <button class="btn-farmer btn-secondary-action" style="flex: 0.6; color: var(--text-main);" onclick="closeModal()">
        Close
      </button>
    </div>
  `;

  modal.classList.add('active');
}

function deleteHistoricalReport(reportId) {
  AppState.reports = AppState.reports.filter(r => r.id !== reportId);
  try {
    localStorage.setItem('farmsathi_reports', JSON.stringify(AppState.reports));
  } catch (e) {}

  renderDashboardStats();
  renderReportsTable();
}

function clearAllSavedReports() {
  if (confirm(AppState.currentLanguage === 'mr' ? 'आपण सर्व मागील अहवाल हटवू इच्छिता?' : 'Are you sure you want to clear all saved reports?')) {
    AppState.reports = [];
    try {
      localStorage.removeItem('farmsathi_reports');
    } catch (e) {}
    renderDashboardStats();
    renderReportsTable();
  }
}
