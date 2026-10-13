// FarmSathi AI - Multilingual Farming Chatbot Engine
// Native support for English, Marathi (मराठी), and Hindi (हिंदी)

class FarmSathiChatbot {
  constructor(data) {
    this.data = data;
    this.currentLanguage = 'en'; // default: 'en', 'mr', 'hi'
    this.chatHistory = [];
    this.isListening = false;
    this.recognition = null;
    this.synthesis = window.speechSynthesis || null;

    this.initSpeechRecognition();
  }

  setLanguage(langCode) {
    if (['en', 'mr', 'hi'].includes(langCode)) {
      this.currentLanguage = langCode;
    }
  }

  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
    }
  }

  // Get localized prompt suggestions for quick chips
  getQuickPrompts() {
    const prompts = {
      en: [
        { label: '🌿 Yellow sugarcane leaves?', query: 'My sugarcane leaves are turning yellow. What could be the reason and remedy?' },
        { label: '🌾 How to improve rice growth?', query: 'How can I improve rice growth and tillering?' },
        { label: '🧪 Which fertilizer for my crop?', query: 'Which fertilizer is suitable for wheat during tillering stage?' },
        { label: '🍅 Tomato leaf curl cure?', query: 'My tomato plant has curled leaves. What should I do?' },
        { label: '🐛 Cotton pink bollworm control?', query: 'How to control pink bollworm and whitefly in cotton?' },
        { label: '💧 Drip irrigation schedule?', query: 'What is the best irrigation schedule for sugarcane?' }
      ],
      mr: [
        { label: '🎋 उसाची पाने पिवळी पडत आहेत?', query: 'माझ्या उसाची पाने पिवळी पडत आहेत, काय कारण व उपाय असू शकतो?' },
        { label: '🌾 भाताची जोमदार वाढ कशी करावी?', query: 'भाताची फुटवे व वाढ वाढवण्यासाठी काय उपाय करावेत?' },
        { label: '🧪 पिकासाठी योग्य खत कोणते?', query: 'गव्हासाठी फुटवे फुटताना कोणते खत द्यावे?' },
        { label: '🍅 टोमॅटो चुरडा-मुरडा उपाय?', query: 'टोमॅटोच्या पानांना चुरडा-मुरडा पडला आहे, काय फवारावे?' },
        { label: '☁️ कापूस बोंडअळी नियंत्रण?', query: 'कापसावरील गुलाबी बोंडअळी व पांढरी माशी कशी रोखावी?' },
        { label: '💧 पाणी व ठिबक नियोजन?', query: 'उसासाठी ठिबक सिंचन पाणी नियोजन कसे करावे?' }
      ],
      hi: [
        { label: '🎋 गन्ने की पत्तियां पीली क्यों?', query: 'मेरे गन्ने की पत्तियां पीली हो रही हैं, क्या कारण और उपाय है?' },
        { label: '🌾 धान की अच्छी बढ़वार कैसे करें?', query: 'धान में कल्ले और बढ़वार बढ़ाने के लिए क्या करें?' },
        { label: '🧪 फसल के लिए कौन सा खाद?', query: 'गेहूं में कल्ले फूटने के समय कौन सा खाद डालना चाहिए?' },
        { label: '🍅 टमाटर पत्ती मरोड़ का इलाज?', query: 'टमाटर के पत्ते मुड़ रहे हैं (पत्ती मरोड़), क्या छिड़काव करें?' },
        { label: '☁️ कपास में गुलाबी सुंडी नियंत्रण?', query: 'कपास में गुलाबी सुंडी और सफेद मक्खी का नियंत्रण कैसे करें?' },
        { label: '💧 सही सिंचाई का तरीका?', query: 'गन्ने की फसल में सिंचाई का सही समय और तरीका क्या है?' }
      ]
    };
    return prompts[this.currentLanguage] || prompts.en;
  }

  // Get initial welcome message
  getWelcomeMessage() {
    const messages = {
      en: `👋 **Namaste Farmer Friend! I am FarmSathi AI.** 
I am here to guide you with:
- 🌾 Crop disease identification & leaf diagnostics
- 🧪 Tailored fertilizer schedules (NPK & organic)
- 💧 Irrigation, soil vitality & pest management
- 🚜 Practical step-by-step guidance after finding crop issues.

*You can speak in English, मराठी, or हिंदी. How can I assist your farm today?*`,

      mr: `🙏 **राम राम शेतकरी मित्रा! मी आपला कृषी सहाय्यक "फार्मसाथी AI" आहे.**
मी आपल्याला खालील विषयांवर मोफत मार्गदर्शन करू शकेन:
- 🌾 पिकांवरील रोग व कीड ओळख आणि खात्रीशीर उपाय
- 🧪 योग्य रासायनिक व सेंद्रिय खतांचे नियोजन (NPK, सूक्ष्म अन्नद्रव्ये)
- 💧 पाणी व्यवस्थापन, ठिबक सिंचन व जमिनीची सुपीकता
- 🚜 रोग आढळल्यास तात्काळ करावयाची कृती.

*खालील प्रश्न निवडा किंवा आपला प्रश्न टाईप करा अथवा बोला! मी पूर्ण मराठीत उत्तर देईन.*`,

      hi: `🙏 **नमस्ते किसान भाई! मैं आपका डिजिटल कृषि सलाहकार "फार्मसाथी AI" हूँ।**
मैं आपकी इन कामों में मदद करने के लिए तैयार हूँ:
- 🌾 फसलों की बीमारियों की पहचान व अचूक रोकथाम
- 🧪 सही रासायनिक व जैविक खाद की खुराक (यूरिया, डीएपी, पोटाश)
- 💧 सिंचाई, मृदा स्वास्थ्य और कीट नियंत्रण
- 🚜 रोग के लक्षण दिखने पर तुरंत क्या कदम उठाएं।

*नीचे दिए गए सुझाव चुनें या अपना सवाल लिखकर अथवा बोलकर पूछें! मैं हिंदी में जवाब दूंगा।*`
    };
    return messages[this.currentLanguage] || messages.en;
  }

  // Core NLP Query Processor
  processQuery(userInput) {
    const raw = (userInput || '').trim();
    if (!raw) return this.getEmptyFallback();

    const lower = raw.toLowerCase();
    const lang = this.currentLanguage;

    // 1. Sugarcane yellowing leaves query
    if (this.matchesAny(lower, ['yellow', 'पिवळ', 'पील', 'sugarcane yellow', 'leaf yellow']) && 
        this.matchesAny(lower, ['sugarcane', 'cane', 'ऊस', 'गन्न'])) {
      return this.handleSugarcaneYellowing(lang);
    }

    // 2. Fertilizer for crop query
    if (this.matchesAny(lower, ['fertilizer', 'khat', 'khad', 'खत', 'खाद', 'npk', 'urea', 'dap', 'युरिया', 'यूरिया'])) {
      return this.handleFertilizerQuery(lower, lang);
    }

    // 3. Rice growth improvement
    if (this.matchesAny(lower, ['rice', 'paddy', 'भात', 'तांदूळ', 'धान', 'चावल']) && 
        this.matchesAny(lower, ['growth', 'improve', 'वाढ', 'फुटवे', 'कल्ले', 'बढ़ाव', 'उत्पादन', 'yield'])) {
      return this.handleRiceGrowth(lang);
    }

    // 4. Tomato leaf curl or blight
    if (this.matchesAny(lower, ['tomato', 'टोमॅटो', 'टमाटर'])) {
      if (this.matchesAny(lower, ['curl', 'चुरडा', 'मुरडा', 'मुड़', 'मरोड़', 'virus'])) {
        return this.handleTomatoCurl(lang);
      }
      if (this.matchesAny(lower, ['blight', 'karpa', 'झुलसा', 'करपा', 'spot', 'डाग'])) {
        return this.handleTomatoBlight(lang);
      }
      return this.handleTomatoGeneral(lang);
    }

    // 5. Cotton pink bollworm or whitefly
    if (this.matchesAny(lower, ['cotton', 'कापूस', 'कपास'])) {
      if (this.matchesAny(lower, ['bollworm', 'pink', 'बोंडअळी', 'गुलाबी', 'सुंडी', 'अळी'])) {
        return this.handleCottonBollworm(lang);
      }
      return this.handleCottonGeneral(lang);
    }

    // 6. Wheat rust or fertilization
    if (this.matchesAny(lower, ['wheat', 'गहू', 'गेहूं'])) {
      if (this.matchesAny(lower, ['rust', 'तांबेरा', 'रतुआ', 'yellow', 'stripe'])) {
        return this.handleWheatRust(lang);
      }
      return this.handleWheatGeneral(lang);
    }

    // 7. What to do after detecting disease?
    if (this.matchesAny(lower, ['after detecting', 'काय करावे', 'रोग आढळल्यावर', 'इलाज कैसे', 'उपाय', 'next step', 'remedy', 'precaution'])) {
      return this.handleAfterDiseaseSteps(lang);
    }

    // 8. Irrigation / Water management
    if (this.matchesAny(lower, ['water', 'irrigation', 'drip', 'पाणी', 'सिंचन', 'ठिबक', 'सिंचाई'])) {
      return this.handleIrrigationAdvice(lang);
    }

    // 9. Soil health / organic farming
    if (this.matchesAny(lower, ['soil', 'organic', 'सेंद्रिय', 'जमीन', 'मिट्टी', 'जैविक', 'कार्बन', 'jeevamrut', 'जीवामृत'])) {
      return this.handleSoilHealth(lang);
    }

    // 10. General Agricultural Intelligence Fallback
    return this.handleGeneralAgriAdvice(raw, lang);
  }

  matchesAny(text, keywords) {
    return keywords.some(kw => text.includes(kw));
  }

  handleSugarcaneYellowing(lang) {
    if (lang === 'mr') {
      return `🎋 **उसाची पाने पिवळी पडण्याची प्रमुख कारणे व उपाय:**

**१. संभाव्य कारणे:**
- **लोह (Iron/Fe) ची कमतरता:** वरची कोवळी पाने पांढरट-पिवळी पडतात आणि शिरा हिरव्या राहतात (चुनखडीयुक्त जमिनीत जास्त आढळते).
- **नत्राची (Nitrogen) कमतरता:** खालची जुनी पाने शेंड्याकडून पिवळी पडत वाळतात.
- **पाण्याचा ताण किंवा साचलेले पाणी:** मुळांना हवा न मिळाल्यास अन्नद्रव्य शोषण थांबते.
- **किडींचा प्रादुर्भाव:** खोडकिडा (Dead heart) किंवा हुमणी मुळे कुरतडल्यास.

**२. तात्काळ करावयाचे उपाय:**
- **हिरिरा/लोह कमतरतेसाठी फवारणी:** चिलेटेड फेरस (Fe-EDTA 12%) १.५ ग्रॅम/लिटर किंवा फेरस सल्फेट ५ ग्रॅम + १ ग्रॅम लिंबू सत्व (सायट्रिक ॲसिड) प्रति लिटर पाण्यात मिसळून फवारा.
- **जोमदार वाढीसाठी:** १९:१९:१९ विद्राव्य खत ५ ग्रॅम/लिटर फवारणी करा.
- मुळाशी पाणी साचले असल्यास पाण्याचा त्वरित निचरा करा.
- *टीप: रासायनिक फवारणी करताना पानांवर चांगले आच्छादन होईल याची काळजी घ्या.*`;
    }

    if (lang === 'hi') {
      return `🎋 **गन्ने की पत्तियां पीली होने के मुख्य कारण एवं समाधान:**

**१. संभावित कारण:**
- **आयरन (लोहे) की कमी:** नई ऊपरी पत्तियां पीली या सफेद पड़ने लगती हैं, जबकि नसें हरी रहती हैं (चूनेदार मिट्टी में अधिक)।
- **नाइट्रोजन की कमी:** निचली पुरानी पत्तियां सिरे से पीली होकर सूखती हैं।
- **जलभराव या सूखे का तनाव:** जड़ों में हवा न मिलने पर पोषक तत्वों का अवशोषण रुक जाता है।
- **कंसुआ या दीमक/सफेद लट का प्रकोप:** जड़ें कट जाने से पौधे पीले पड़ते हैं।

**२. अनुशंसित उपाय:**
- **आयरन की कमी के लिए:** चिलेटेड आयरन (Fe-EDTA १२%) १.५ ग्राम/लीटर या फेरस सल्फेट ५ ग्राम + १ ग्राम साइट्रिक एसिड प्रति लीटर पानी में मिलाकर पर्णीय छिड़काव करें।
- **त्वरित पोषण के लिए:** १९:१९:१९ घुलनशील उर्वरक ५ ग्राम/लीटर का छिड़काव करें।
- खेत में पानी भरा हो तो जल निकासी का तत्काल प्रबंध करें।
- *सलाह: हमेशा उत्पाद लेबल व स्थानीय कृषि विशेषज्ञ के परामर्श से मात्रा तय करें।*`;
    }

    return `🎋 **Why Sugarcane Leaves Turn Yellow & Action Plan:**

**1. Potential Primary Causes:**
- **Iron (Fe) Deficiency (Interveinal Chlorosis):** Very common in calcareous or high-pH soils. Young top leaves turn ivory-yellow while veins remain green.
- **Nitrogen (N) Deficiency:** Bottom older leaves turn uniform pale yellow from tip downward.
- **Poor Root Aeration / Waterlogging:** Heavy soil suffocating roots hinders micronutrient absorption.
- **Early Shoot Borer or White Grub:** Root severance prevents water/nutrient movement.

**2. Immediate Recommended Remedies:**
- **Foliar Spray for Iron:** Spray Chelated Iron (Fe-EDTA 12% @ 1.5 g/L) OR Ferrous Sulphate (5 g/L) with 1 g citric acid.
- **Nutrient Boost:** Foliar spray of NPK 19:19:19 @ 5 g/L.
- Drain any stagnant excess water immediately to let roots breathe.
- Drench neem cake or bio-agent (Metarhizium) if white grubs are suspected in soil.`;
  }

  handleRiceGrowth(lang) {
    if (lang === 'mr') {
      return `🌾 **भाताची जोमदार वाढ व फुटवे वाढवण्यासाठी संपूर्ण मार्गदर्शन:**

**१. मुळांची व फुटव्यांची अवस्था (Tillering Stage - २० ते ४० दिवस):**
- **खतांचा संतुलित वापर:** चिखलणीच्या वेळी संपूर्ण स्फुरद (DAP/SSP) आणि पालाश (MOP) द्या. नत्राचा दुसरा हप्ता पुनर्लागवडीनंतर २१ ते २५ दिवसांनी द्या.
- **झिंकची कमतरता टाळा:** भातात झिंकची कमतरता झाल्यास खैरा रोग होतो. एकरी १० किलो झिंक सल्फेट (२१%) जमिनीत द्या किंवा झिंक चिलेटेड (१ ग्रॅम/लिटर) फवारा.

**२. सिंचन तंत्र:**
- शेतात सतत जास्त पाणी ठेवू नका. फुटवे फुटताना २ ते ३ सेमी उथळ पाणी ठेवा.
- 'आलटून-पालटून ओले व कोरडे' (AWD) पद्धत वापरा, यामुळे मुळांना ऑक्सिजन मिळून फुटव्यांची संख्या दुप्पट होते.

**३. कोनो-वीडर खुरपणी:**
- १५ व ३० व्या दिवशी कोनो-वीडर चालवा. यामुळे तण नष्ट होते आणि माती भुसभुशीत होऊन मुळांना हवा खेळती राहते.`;
    }

    if (lang === 'hi') {
      return `🌾 **धान में कल्ले और बंपर बढ़वार के लिए जरूरी उपाय:**

**१. कल्ले फूटने की अवस्था (२० से ४० दिन):**
- **संतुलित उर्वरक:** डीएपी और पोटाश रोपाई के समय ही दे दें। यूरिया की दूसरी खुराक रोपाई के २१-२५ दिन बाद कल्ले फूटते समय दें।
- **जिंक की पूर्ति:** धान में खैरा रोग से बचाव हेतु प्रति एकड़ १० किलो जिंक सल्फेट (२१%) डालें या चिलेटेड जिंक (१ ग्राम/लीटर) का छिड़काव करें।

**२. पानी का उचित प्रबंधन:**
- खेत में हमेशा गहरा पानी न भरें। कल्ले फूटते समय २-३ सेमी उथला पानी रखें।
- बीच-बीच में खेत की सतह सूखने दें (एवीडब्ल्यूडी पद्धति), इससे जड़ों को हवा मिलती है और अधिक कल्ले निकलते हैं।

**३. निराई-गुड़ाई:**
- रोपाई के २० और ३५ दिन बाद कोनो-वीडर चलाएं। इससे तिनके तेजी से फूटते हैं और खरपतवार नष्ट होते हैं।`;
    }

    return `🌾 **How to Boost Rice Growth & Tillering:**

**1. Critical Tillering Phase (Days 20 to 45):**
- **Balanced Nutrition:** Apply basal DAP/SSP + MOP during field puddling. Apply the 1st top dressing of Nitrogen (Urea) at 21-25 days after transplanting (DAT).
- **Zinc Deficiency Prevention:** Rice is extremely sensitive to Zinc deficiency (Khaira disease). Apply 10 kg Zinc Sulphate (21%) per acre at basal, or spray 0.5% Zn-EDTA.

**2. Water Management (AWD Technology):**
- Avoid deep standing water during early vegetative stage. Maintain 2-3 cm shallow water layer.
- Practice Alternate Wetting & Drying (AWD) to allow root oxygenation, which doubles active tillers.

**3. Mechanical Aeration:**
- Run a cono-weeder at 15 and 30 DAT. It buries weeds as green manure and stimulates root proliferation.`;
  }

  handleFertilizerQuery(lower, lang) {
    if (lang === 'mr') {
      return `🧪 **पिकांसाठी खत व्यवस्थापनाचा सुवर्ण नियम:**

**१. मूलभूत तत्त्व (NPK):**
- **नत्र (युरिया):** झाडांची शाकीय वाढ व हिरवेगारपणा वाढवतो. (विभागून ३-४ हप्त्यांत द्या).
- **स्फुरद (DAP / SSP):** मुळांची बळकट वाढ व खोडाची ताकद वाढवतो. (पेरणीवेळी संपूर्ण द्या).
- **पालाश (MOP):** रोगप्रतिकारशक्ती, दाण्यांचे वजन व चकाकी वाढवतो.

**२. सूक्ष्म अन्नद्रव्ये:**
- झिंक सल्फेट (१० किलो/एकर) आणि बोरॉन (फळधारणा व फुलोऱ्याच्या वेळी फवारणी).

**३. सेंद्रिय पर्याय:**
- एकरी ३-५ ट्रॉली चांगले कुजलेले शेणखत किंवा गांडूळ खत + जीवामृत ठिबकमधून द्या.
*सूचना: रासायनिक खतांची अचूक मात्रा ठरवण्यासाठी माती परीक्षण (Soil Health Card) अवश्य करून घ्या.*`;
    }

    if (lang === 'hi') {
      return `🧪 **फसलों के लिए सही उर्वरक (खाद) प्रबंधन:**

**१. मुख्य पोषक तत्व (NPK):**
- **नाइट्रोजन (यूरिया):** पौधों की बढ़वार और हरियाली के लिए (हमेशा २-३ किश्तों में दें)।
- **फास्फोरस (डीएपी / एसएसपी):** जड़ों के फैलाव और मजबूत तने के लिए (बुवाई के समय ही दें)।
- **पोटाश (एमओपी):** दाने के भराव, वजन, चमक और रोग प्रतिरोधक क्षमता के लिए।

**२. सूक्ष्म पोषक तत्व:**
- जिंक सल्फेट और बोरॉन का प्रयोग फसल की अवस्था अनुसार करें।

**३. जैविक खाद:**
- सड़ी हुई गोबर खाद, केंचुआ खाद और जीवामृत का प्रयोग करें जिससे मिट्टी जीवित रहे।
*सावधानी: अत्यधिक रासायनिक खाद न डालें। हमेशा मिट्टी परीक्षण की रिपोर्ट के अनुसार खुराक तय करें।*`;
    }

    return `🧪 **Smart Fertilizer Management Guide:**

**1. Primary Nutrients (NPK Matrix):**
- **Nitrogen (Urea 46% N):** Drives vegetative growth and lush greenery. Always apply in split doses; never dump all at once.
- **Phosphorus (DAP 18:46:0 or SSP 16% P):** Drives deep root anchoring. Best applied 100% as basal placement below the seed line.
- **Potassium (MOP 60% K):** Builds stress resilience, disease resistance, and grain/fruit weight.

**2. Micronutrient Boosters:**
- Zinc Sulphate (basal or foliar) + Boron (spray during flowering to maximize fruit set).

**3. Safe Organic Integration:**
- Supplement with 2-3 tons of aged vermicompost per acre and periodic Jeevamrut fertigation.
*Always refer to soil health card guidelines and avoid heavy chemical overdosing.*`;
  }

  handleTomatoCurl(lang) {
    if (lang === 'mr') {
      return `🍅 **टोमॅटो चुरडा-मुरडा (लीफ कर्ल व्हायरस) - खात्रीशीर नियंत्रण:**

- **लक्षणे:** पाने वरच्या बाजूला वाटीसारखी वळणे, झाड खुंटणे आणि फळे न धरणे.
- **रोग प्रसारक:** हा रोग पांढरी माशी (Whitefly) या रसशोषक किडीमुळे पसरतो.

**नियंत्रणाचे ३ महत्त्वाचे टप्पे:**
1. **सापळे लावा:** एकरी १५-२० पिवळे चिकट सापळे (Yellow sticky traps) झाडांच्या उंचीवर लावा.
2. **सेंद्रिय उपाय:** ५% निंबोळी अर्क (NSKE) किंवा निंबोळी तेल ३-५ मिली/लिटर आठवड्यातून एकदा फवारा.
3. **रासायनिक फवारणी (पांढरी माशी नियंत्रण):**
   - डायाफेन्थिरॉन ५०% WP (१ ग्रॅम/लिटर) किंवा ॲसिटामिप्रीड २०% SP (०.५ ग्रॅम/लिटर).
4. **अतिबाधित झाडे:** जी झाडे पूर्णपणे आकसली आहेत ती उपटून शेताबाहेर जमिनीत पुरा.`;
    }

    if (lang === 'hi') {
      return `🍅 **टमाटर में पत्ती मरोड़ रोग (लीफ कर्ल) का सटीक समाधान:**

- **रोग का कारण:** यह बीमारी सफेद मक्खी (व्हाइटफ्लाई) कीट द्वारा फैलती है।
- **लक्षण:** नई पत्तियां मुड़कर कटोरी जैसी हो जाती हैं और पौधे का विकास रुक जाता है।

**रोकथाम के उपाय:**
1. **येलो स्टिकी ट्रैप:** प्रति एकड़ १५-२० पीले चिपचिपे जाल लगाएं ताकि सफेद मक्खी पकड़ी जा सके।
2. **जैविक उपचार:** नीम का तेल (३-५ मिली/लीटर) का नियमित अंतराल पर छिड़काव करें।
3. **कीटनाशक छिड़काव (मक्खी नियंत्रण हेतु):**
   - डायफेंथियूरॉन ५०% WP (१ ग्राम/लीटर) अथवा एसिटामिप्रिड २०% SP (०.५ ग्राम/लीटर)।
4. **संक्रमित पौधे:** अत्यधिक ग्रसित पौधों को तुरंत उखाड़कर नष्ट करें ताकि बाकी फसल बच सके।`;
    }

    return `🍅 **Tomato Leaf Curl Virus (ToLCV) Management:**

- **Vector:** Transmitted by Silverleaf Whitefly (*Bemisia tabaci*).
- **Action Strategy:** Once a plant has the virus, chemicals cannot cure the virus itself; you must control the whitefly vector and remove infected host reservoirs.

**Step-by-Step Management:**
1. **Sticky Traps:** Install 15-20 Yellow Sticky Traps per acre right above canopy height.
2. **Botanical Repellent:** Spray Neem Oil (10,000 ppm @ 2-3 ml/L) or 5% NSKE.
3. **Targeted Vector Control:** Diafenthiuron 50% WP @ 1 g/L OR Acetamiprid 20% SP @ 0.5 g/L.
4. **Rogueing:** Eradicate heavily curled stunt plants immediately to safeguard healthy neighbors.`;
  }

  handleTomatoBlight(lang) {
    if (lang === 'mr') {
      return `🍅 **टोमॅटो करपा रोग (अगेती / उशिरा करपा):**
- **लक्षण:** जुन्या पानांवर काळे-तपकिरी गोलाकार डाग पडणे.
- **उपाय:** मँकोझेब ७५% WP (२.५ ग्रॅम/लिटर) किंवा कॉपर ऑक्सिक्लोराईड (२.५ ग्रॅम/लिटर) फवारा.
- **सेंद्रिय:** ट्रायकोडर्मा ५ ग्रॅम/लिटर पाण्यात मिसळून पानांवर फवारा.
- जमिनीलगतची खराब झालेली खालची पाने कापून टाका.`;
    }
    if (lang === 'hi') {
      return `🍅 **टमाटर का झुलसा रोग (अर्ली / लेट ब्लाइट):**
- **लक्षण:** पत्तियों पर भूरे-काले छल्लेदार धब्बे पड़ना और पत्तों का सूखना।
- **रोकथाम:** मैंकोजेब ७५% WP (२.५ ग्राम/लीटर) या कॉपर ऑक्सीक्लोराइड (२.५ ग्राम/लीटर) का छिड़काव करें।
- **जैविक:** ट्राइकोडर्मा ५ ग्राम प्रति लीटर पानी में मिलाकर छिड़कें।
- जमीन से सटी निचली पत्तियों को काट दें।`;
    }
    return `🍅 **Tomato Early / Late Blight Control:**
- **Symptoms:** Concentric target-board spots on leaves and greasy black stem lesions.
- **Chemical Control:** Mancozeb 75% WP @ 2.5 g/L OR Copper Oxychloride 50% WP @ 2.5 g/L.
- **Biological:** Foliar spray of Trichoderma harzianum @ 5 g/L.
- Prune lower foliage up to 30 cm from ground level to prevent soil spore splash.`;
  }

  handleCottonBollworm(lang) {
    if (lang === 'mr') {
      return `☁️ **कापसावरील गुलाबी बोंडअळी (Pink Bollworm) नियंत्रण:**
1. **कामगंध सापळे (फेरोमोन ट्रॅप):** एकरी ५ सापळे लावा. सापळ्यात सलग ३ दिवस ८-१० पतंग आढळल्यास फवारणीचा निर्णय घ्या.
2. **सेंद्रिय उपाय:** ५% निंबोळी अर्क (NSKE) किंवा निंबोळी तेल १५०० ppm (५ मिली/लिटर) फवारा.
3. **जैविक नियंत्रण:** ट्रायकोकार्ड (ट्रायकोड्रॉमा बॅक्ट्री) एकरी ३-४ लावा जे बोंडअळीची अंडी खाऊन टाकतात.
4. **रासायनिक फवारणी:** प्रादुर्भाव जास्त असल्यास इमामेक्टिन बेन्झोएट ५% SG (०.५ ग्रॅम/लिटर) किंवा प्रोफेनोफॉस ५०% EC (२ मिली/लिटर).`;
    }
    if (lang === 'hi') {
      return `☁️ **कपास में गुलाबी सुंडी (पिंक बॉलवर्म) का सटीक नियंत्रण:**
1. **फेरोमोन ट्रैप:** प्रति एकड़ ५ कामगंध जाल लगाएं ताकि पतंगों की निगरानी हो सके।
2. **जैविक उपचार:** ५% नीम बीज अर्क (एनएसकेई) या नीम तेल (५ मिली/लीटर) का नियमित छिड़काव करें।
3. **ट्राइकोकार्ड:** ट्राइकोग्रामा के परजीवी अंडे वाले कार्ड खेत में लगाएं जो सुंडी के अंडों को नष्ट करते हैं।
4. **रासायनिक उपचार:** गंभीर स्थिति में इमामेक्टिन बेंजोएट ५% SG (०.५ ग्राम/लीटर) या प्रोफेनोफॉस ५०% EC (२ मिली/लीटर) का छिड़काव करें।`;
    }
    return `☁️ **Cotton Pink Bollworm Integrated Management:**
1. **Pheromone Monitoring:** Install 5 PBW pheromone traps per acre. ETL is 8 moths/trap/night for 3 consecutive days.
2. **Bio-Control:** Release *Trichogramma bactrae* egg parasitoids @ 60,000/acre at weekly intervals during flowering.
3. **Botanicals:** Spray 5% Neem Seed Kernel Extract (NSKE) or Neem Oil 1500 ppm @ 5 ml/L.
4. **Selective Chemistry:** Emamectin Benzoate 5% SG @ 0.5 g/L OR Profenofos 50% EC @ 2 ml/L.`;
  }

  handleWheatRust(lang) {
    if (lang === 'mr') {
      return `🌿 **गव्हावरील पिवळा तांबेरा (Yellow Rust) - त्वरित उपाय:**
- **लक्षणे:** पानांवर हळदीसारख्या पिवळ्या समांतर रेषा दिसणे आणि बोटाला पिवळा रंग लागणे.
- **तातडीचा उपाय:** एक जरी झाड आढळले तर त्वरित प्रोपिकोनाझोल २५% EC (टिल्ट) @ १ मिली/लिटर (२०० मिली प्रति २०० लिटर पाण्यात प्रति एकर) फवारा.
- १२-१५ दिवसांनी गरज भासल्यास दुसरी फवारणी करा. थंड व धुक्याच्या हवामानात सतर्क राहा.`;
    }
    if (lang === 'hi') {
      return `🌿 **गेहूं का पीला रतुआ (येलो रस्ट) - आपातकालीन रोकथाम:**
- **पहचान:** पत्तियों पर हल्दी की तरह पीली धारियां और छूने पर उंगली पर पीला पाउडर लगना।
- **सटीक इलाज:** लक्षण दिखते ही प्रोपिकोनाज़ोल २५% EC (टिल्ट) @ १ मिली/लीटर (२०० मिली प्रति एकड़ २०० लीटर पानी में) का छिड़काव करें।
- आवश्यकता पड़ने पर १२-१५ दिन बाद छिड़काव दोहराएं। कोहरे और नम मौसम में खेत का रोज मुआयना करें।`;
    }
    return `🌿 **Wheat Stripe / Yellow Rust Immediate Action:**
- **Symptoms:** Yellow powdery pustules arranged in linear stripes on leaf blades; yellow dust rubs off easily.
- **Fungicide Spray:** Propiconazole 25% EC (Tilt) @ 1 ml/L (200 ml in 200 L water per acre).
- Repeat after 12-14 days if cool humid conditions persist.`;
  }

  handleAfterDiseaseSteps(lang) {
    if (lang === 'mr') {
      return `🚜 **पिकावर रोग आढळल्यानंतर शेतकऱ्याने त्वरित करावयाची कृती:**

1. **रोगट भाग वेगळा करा:** सुरुवातीला आढळलेली रोगट पाने किंवा झाडे उपटून शेताबाहेर खड्ड्यात पुरा किंवा जाळून टाका.
2. **रासायनिक खतांचा ताण थांबवा:** युरियाचा (नत्र) अतिरेक वापर त्वरित थांबवा, कारण यामुळे रोग अधिक वेगाने वाढतो.
3. **सिंचन नियंत्रित करा:** शेतात पाणी साचून राहू देऊ नका. तुषार सिंचन बंद करून शक्यतो ठिबक सिंचन वापरा.
4. **योग्य फवारणीची वेळ:** फवारणी नेहमी सकाळी (दव सुकल्यावर) किंवा संध्याकाळी शांत हवेत करा. फवारणीमध्ये चांगल्या प्रतीचे स्टिकर (चिकट द्रव) वापरा.
5. **कृषी तज्ञाचा सल्ला:** फवारणी करताना रासायनिक औषधांचे लेबल नीट वाचा व जवळच्या कृषी विज्ञान केंद्राशी (KVK) संपर्क साधा.`;
    }
    if (lang === 'hi') {
      return `🚜 **फसल में बीमारी के लक्षण दिखने पर तुरंत क्या करें?**

1. **रोगी भागों को अलग करें:** रोगग्रस्त पत्तों या गंभीर रूप से खराब पौधों को उखाड़कर खेत से दूर नष्ट करें।
2. **यूरिया का प्रयोग रोकें:** जब तक बीमारी शांत न हो, यूरिया (नाइट्रोजन) का प्रयोग बंद रखें क्योंकि यह फंगस/बैक्टीरिया को बढ़ावा देता है।
3. **पानी का प्रबंधन:** खेत में पानी जमा न होने दें और पत्तियों को गीला रखने वाली फव्वारा सिंचाई से बचें।
4. **छिड़काव का सही समय:** हमेशा सुबह या शाम को शांत मौसम में स्प्रे करें। घोल में स्टीकर (चिपकाने वाला पदार्थ) अवश्य मिलाएं।
5. **लेबल निर्देश:** दवा की निर्धारित मात्रा का ही प्रयोग करें और नजदीकी कृषि विज्ञान केंद्र (केवीके) से परामर्श लें।`;
    }
    return `🚜 **Standard Operating Protocol (SOP) After Detecting Crop Disease:**

1. **Isolate & Rogue:** Clip off early infected foliage or rogue out severely stunted plants and bury/burn them away from fields.
2. **Halt Excess Nitrogen:** Stop Urea top-dressing immediately; excess nitrogen softens cell walls and accelerates pathogen spread.
3. **Regulate Soil Moisture:** Avoid overhead sprinkler irrigation which keeps foliage wet; switch to drip or furrow irrigation with good drainage.
4. **Spray Technique:** Apply calibrated fungicides/bactericides early morning or late afternoon with a non-ionic adjuvant/sticker.
5. **Consult Local KVK:** Always adhere to label recommendations and verify safety intervals before harvest.`;
  }

  handleIrrigationAdvice(lang) {
    if (lang === 'mr') {
      return `💧 **स्मार्ट पाणी व्यवस्थापन आणि सिंचन सल्ला:**
- **ठिबक सिंचन (Drip Irrigation):** उसासाठी, टोमॅटोसाठी आणि कापसासाठी ठिबकचा वापर केल्यास ४०-५०% पाणी बचत होते व खतांची कार्यक्षमता ८०% ने वाढते.
- **वाफसा स्थिती:** पिकाला सतत दलदल नको, तर जमिनीत वाफसा (५०% पाणी + ५०% हवा) असावा.
- **आच्छादन (Mulching):** उसाचे पाचट किंवा प्लास्टिक मल्चिंग वापरल्यास बाष्पीभवन ६०% ने घटते.`;
    }
    if (lang === 'hi') {
      return `💧 **वैज्ञानिक सिंचाई एवं जल प्रबंधन:**
- **ड्रिप (टपक) सिंचाई:** पानी की ४०-५०% बचत और खाद की खपत में भारी कमी।
- **वापसा स्थिति:** खेत में हमेशा कीचड़ न रखें; मिट्टी में हवा और नमी का संतुलन (वापसा) होने पर ही जड़ें तेजी से बढ़ती हैं।
- **मल्चिंग का उपयोग:** पराली या मल्चिंग शीट से नमी लंबे समय तक बनी रहती है और खरपतवार नहीं उगते।`;
    }
    return `💧 **Precision Irrigation & Moisture Advisory:**
- **Drip Fertigation:** Adopting drip irrigation conserves 45% water while improving fertilizer efficiency up to 85%.
- **Vapsa Condition:** Maintain soil "Vapsa" (50% water + 50% air porosity in root zone) rather than waterlogged puddle conditions.
- **Mulching:** Utilize crop residues or bio-mulch films to slash evaporation losses by over 60%.`;
  }

  handleSoilHealth(lang) {
    if (lang === 'mr') {
      return `🌱 **जमिनीची सुपीकता व सेंद्रिय शेती संवर्धन:**
- **सेंद्रिय कर्ब (Organic Carbon):** जमिनीतील सेंद्रिय कर्ब ०.८% पेक्षा जास्त असणे पिकांच्या भरघोस उत्पादनासाठी आवश्यक आहे.
- **हिरवळीची खते:** खरीप हंगामापूर्वी ताग किंवा धैंचा पेरा व ४५ दिवसांनी फुलोऱ्यावर येताच जमिनीत गाडा.
- **जीवामृत तयार करण्याची पद्धत:** १० किलो देशी गायीचे शेण + १० लिटर गोमूत्र + २ किलो गूळ + २ किलो डाळीचे पीठ (बेसन) + मूठभर शेतातील बांधाची माती २०० लिटर पाण्यात मिसळा आणि सावलीत ४-५ दिवस हलवून आंबवून शेताला द्या.`;
    }
    if (lang === 'hi') {
      return `🌱 **मृदा स्वास्थ्य और जैविक खाद निर्माण:**
- **जैविक कार्बन:** स्वस्थ मिट्टी में कम से कम ०.८% जैविक कार्बन होना चाहिए।
- **हरी खाद:** ढैंचा या सनई की बुवाई करें और ४५ दिनों में मिट्टी में मिला दें। इससे प्रति एकड़ २५-३० किलो प्राकृतिक नाइट्रोजन मिलता है।
- **जीवामृत विधि:** १० किग्रा देशी गाय का गोबर + १० लीटर गोमूत्र + २ किग्रा गुड़ + २ किग्रा बेसन + एक मुट्ठी उपजाऊ मिट्टी को २०० लीटर पानी में घोलकर ४ दिन किण्वित करें और सिंचाई के साथ दें।`;
    }
    return `🌱 **Soil Vitality & Bio-Organic Rejuvenation:**
- **Organic Carbon Baseline:** Aim for >0.8% soil organic carbon for vibrant root biome.
- **Green Manuring:** Cultivate Sesbania (Dhaincha) or Sunhemp and incorporate at 45 days into soil before primary crop sowing.
- **Jeevamrut Preparation:** 10 kg native cow dung + 10 L cow urine + 2 kg jaggery + 2 kg chickpea flour + 1 handful fertile bund soil in 200 L water; stir clockwise for 4 days and apply through irrigation.`;
  }

  handleTomatoGeneral(lang) {
    return this.handleTomatoBlight(lang);
  }

  handleCottonGeneral(lang) {
    return this.handleCottonBollworm(lang);
  }

  handleWheatGeneral(lang) {
    return this.handleWheatRust(lang);
  }

  handleGeneralAgriAdvice(query, lang) {
    if (lang === 'mr') {
      return `🌾 **फार्मसाथी AI कृषी उत्तर:**
आपल्या प्रश्नाबद्दल धन्यवाद! 

**महत्त्वाचा सल्ला:**
- पिकाच्या पानांचे बारीक निरीक्षण करा. पानांचा रंग, डागांचा आकार किंवा किडींचा वावर तपासा.
- आपण **'पीक रोग स्कॅनर'** टॅबमध्ये जाऊन बाधित पानाचा स्पष्ट फोटो अपलोड केल्यास आमचे AI अचूक रोग आणि रासायनिक व सेंद्रिय औषधांची माहिती देईल.
- नेहमी स्थानिक कृषी विज्ञान केंद्र (KVK) किंवा कृषी सहाय्यकांच्या सल्ल्याने कीटकनाशकांची सुरक्षित हाताळणी करा.

*आणखी काही विचारायचे असल्यास आपण खते, पाणी नियोजन किंवा विशिष्ट पिकाचे नाव सांगून विचारू शकता!*`;
    }
    if (lang === 'hi') {
      return `🌾 **फार्मसाथी AI कृषि परामर्श:**
आपके प्रश्न के लिए धन्यवाद!

**महत्वपूर्ण सुझाव:**
- फसल की पत्तियों, तनों और जड़ों का बारीकी से निरीक्षण करें।
- आप ऊपर दिए गए **'फसल रोग जांच'** विकल्प में जाकर प्रभावित पत्ती का स्पष्ट फोटो अपलोड करके तुरंत सटीक बीमारी और समाधान जान सकते हैं।
- रासायनिक दवाओं का छिड़काव करते समय सुरक्षात्मक उपकरण पहनें और लेबल निर्देश अवश्य पढ़ें।

*आप किसी विशिष्ट फसल (गन्ना, धान, गेहूं, टमाटर, कपास आदि) या खाद/पानी के बारे में भी सवाल पूछ सकते हैं!*`;
    }
    return `🌾 **FarmSathi AI Advisory:**
Thank you for reaching out!

**General Agricultural Recommendation:**
- Closely inspect leaf margins, veins, and underside for micro-pests or fungal mycelium.
- You can utilize our **'AI Crop Disease Detection'** tool to upload or capture a photo of the affected leaf for an instant high-confidence pathology report.
- Always calibrate spray nozzles and adhere to proper pre-harvest intervals (PHI).

*Feel free to ask about specific crops (Sugarcane, Rice, Wheat, Cotton, Tomato, etc.), fertilizers, or irrigation routines!*`;
  }

  getEmptyFallback() {
    const fallbacks = {
      en: 'Please type or speak your farming question so I can assist you!',
      mr: 'कृपया आपला शेतीविषयक प्रश्न लिहा किंवा बोला, मी लगेच उत्तर देईन!',
      hi: 'कृपया अपना खेती से जुड़ा प्रश्न लिखें या बोलें, मैं तुरंत सहायता करूंगा!'
    };
    return fallbacks[this.currentLanguage] || fallbacks.en;
  }

  // Text-To-Speech (Speech Synthesis)
  speakText(text, onEndCallback) {
    if (!this.synthesis) return;
    this.synthesis.cancel(); // cancel any ongoing speech

    // Clean markdown stars and special symbols for cleaner voice speech
    const cleanText = text.replace(/[*_#\-`]/g, ' ').replace(/\s+/g, ' ').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);

    // Language mapping for TTS voices
    const langVoiceMap = {
      en: 'en-IN',
      mr: 'mr-IN',
      hi: 'hi-IN'
    };

    utterance.lang = langVoiceMap[this.currentLanguage] || 'en-IN';
    utterance.rate = 0.95; // slightly relaxed pace for clarity
    utterance.pitch = 1.0;

    if (onEndCallback) {
      utterance.onend = onEndCallback;
      utterance.onerror = onEndCallback;
    }

    this.synthesis.speak(utterance);
  }

  stopSpeaking() {
    if (this.synthesis) {
      this.synthesis.cancel();
    }
  }
}

if (typeof window !== 'undefined') {
  window.FarmSathiChatbot = FarmSathiChatbot;
}
