# 🌾 FarmSathi (फार्मसाथी)
### Modern, Simple, & Farmer-Friendly AI Agriculture Assistance Website

> **शेतकऱ्यांचा विश्वासू डिजिटल साथीदार • किसानों का सच्चा डिजिटल साथी**  
> *"Smart Farming with AI: Detect crop diseases, get fertilizer recommendations, and improve your crop health."*

---

## 🌟 Overview

**FarmSathi** is an AI-powered agriculture assistance web application built specifically for Indian farmers. It simplifies crop health diagnostics, offers tailored nutrient calculations, provides actionable cultivation guidance, and features an interactive multilingual AI chatbot (**FarmSathi AI**) fluent in **English**, **मराठी (Marathi)**, and **हिंदी (Hindi)**.

Designed mobile-first with large touch targets, vibrant agricultural aesthetics (emerald greens, warm amber tones), and clear language toggles, FarmSathi makes modern AI technology accessible to every farmer on any smartphone.

---

## 🚀 Key Features

### 1. 🍃 AI Crop Disease Detection Studio
- **Multi-Crop Support**: Sugarcane, Rice (Paddy), Wheat, Cotton, Tomato, Onion, Potato, Maize, Soybean, and other major Indian crops.
- **Easy Photo Input**: 
  - Drag-and-drop or file upload (JPG, PNG, WEBP).
  - Live device camera photo capture.
  - **1-Click Test Presets**: Ready-to-test samples (Tomato Early Blight, Sugarcane Red Rot, Rice Bacterial Blight, Wheat Yellow Rust, Cotton Leaf Curl, Potato Late Blight, Healthy Sugarcane).
- **Interactive Scanning Animation**: Laser scan line over the leaf preview with realistic pathology visualization.
- **Detailed Pathology Report**:
  - Crop Name & Disease Name
  - Health Status Badge (Disease Detected vs. Healthy Crop)
  - AI Confidence Percentage (e.g., 96.8%)
  - Observed Symptoms
  - Underlying Causes (pathogens, microclimate)
  - Prevention Methods (cultural & organic practices)
  - Recommended Treatment & Spray Guide (balanced chemical & organic advice)
  - **Mandatory Safe Handling Disclaimer**
- **Unclear Image Detection**: If an uploaded photo is blurred, out-of-focus, or not a plant leaf, FarmSathi alerts the farmer to upload a clearer photo rather than returning misleading false results.
- **Action Tools**: Save report to local dashboard, print diagnosis card, or immediately ask FarmSathi AI about treatments.

### 2. 🧪 Smart Fertilizer Recommendation Engine
- **Field Input Parameters**:
  - Crop type
  - Crop growth stage (Germination, Vegetative/Tillering, Flowering, Fruiting, Maturity)
  - Visible leaf symptoms (Nitrogen pale leaves, Phosphorus purple tint, Potash margin burn, Iron interveinal chlorosis, Zinc little leaf)
  - Soil type (Deep Black Cotton, Alluvial Loam, Sandy Loam, Clayey, Calcareous Lime)
  - Irrigation system (Drip Fertigation, Flood/Canal Furrow, Rainfed)
- **Scientific Recommendations**:
  - Fertilizer grade & name (Urea, DAP, MOP, NPK 19:19:19, Single Super Phosphate, Zinc Sulphate, Ferrous Sulphate)
  - Key nutrient breakdown (N, P, K, micronutrients)
  - **Why it is recommended** (biological rationale)
  - **When to use it** (timing and stage)
  - **General application guidance** (basal vs. foliar vs. fertigation)
  - **Bio-fertilizer & organic alternatives** (Jeevamrut, Vermicompost, PSB, Azotobacter)
  - **Safety Disclaimer**: Advises following product label directions and consulting local Krishi Vigyan Kendra (KVK) officers.

### 3. 🌾 Crop Growth Guidance
- Filterable crop tabs (Sugarcane, Rice, Wheat, Tomato, Cotton).
- 5 Core Pillars:
  1. **Water & Irrigation Management** (Drip fertigation schedules, AWD technology in rice, critical moisture stages).
  2. **Soil Health & Preparation** (Organic carbon baseline, green manuring with Dhaincha, pH adjustment).
  3. **Balanced Nutrient Management** (Basal vs. top-dressing split guidelines).
  4. **Integrated Pest Management (IPM)** (Pheromone traps, yellow sticky traps, biopesticides like *Trichoderma* and *Metarhizium*).
  5. **Crop-Care & Yield Boosting Tips** (Earthing-up, mulching, shoot nipping/topping).

### 4. 🤖 Multilingual AI Chatbot ("FarmSathi AI")
- **Trilingual Support**:
  - `[English]`
  - `[मराठी]` (Marathi)
  - `[हिंदी]` (Hindi)
- Instant response chips for common farmer queries in the selected language.
- **Voice Read-Aloud (Text-to-Speech)**: Farmers can click `🔊 ऐका (बोलून दाखवा)` or `🔊 सुनिए` to hear answers read aloud.
- **Microphone Voice Input**: Farmers can speak directly into the microphone.
- Answers farming queries such as:
  - *"Why are my sugarcane leaves turning yellow?"* / *"माझ्या उसाची पाने पिवळी पडत आहेत काय करावे?"* / *"गन्ने की पत्तियां पीली क्यों हो रही हैं?"*
  - *"How can I improve rice tillering?"*
  - *"Which fertilizer is suitable for wheat flowering?"*
  - *"How to cure tomato leaf curl virus?"*
  - *"Cotton pink bollworm prevention tips"*

### 5. 📊 Farmer Dashboard ("माझे शेत / मेरा खेत")
- **Live Agro-Advisory & Weather Widget**: Today's temperature, humidity, rain risk, and safe foliar spray time windows.
- **APMC Mandi Ticker**: Live modal rates for Sugarcane, Basmati Paddy, Sharbati Wheat, Cotton, Tomato, and Onion.
- **Field Health Scorecard**: Crop health index, scan counters, and fertilizer plans.
- **Historical Reports Table**: View past diagnoses saved in `localStorage`, examine details, print reports, or delete records.

### 6. 🎨 Farmer-Centric UI/UX Design
- **High-contrast, readable typography**: Google Fonts *Outfit* & *Mukta* (Devanagari).
- **Vibrant emerald green & golden harvest palette**: Natural, comforting agricultural colors.
- **Big touch-friendly buttons**: Minimum 48px to 56px height for easy mobile finger taps.
- **Zero complicated technical jargon**: Simple step-by-step navigation.

---

## 💻 Tech Stack & Architecture

- **Frontend Core**: Vanilla HTML5, CSS3, ES6+ JavaScript.
- **Backend / Static Server**: Zero-dependency Node.js HTTP server (`server.js`).
- **Data & Knowledge Engine**: `data.js` containing disease pathology, fertilizer formulations, mandi rates, and crop guides.
- **Chatbot & NLP**: `chatbot.js` providing trilingual rule-based and keyword-driven agricultural NLP with Web Speech API integration.

```
cep/
├── index.html        # Main single-page application structure
├── styles.css        # Responsive agricultural design system & animations
├── app.js            # App controller, disease scanner, wizard, and dashboard
├── chatbot.js        # Multilingual FarmSathi AI engine (EN, MR, HI)
├── data.js           # Agriculture knowledge base, crops, diseases, fertilizers
├── server.js         # Lightweight zero-dependency Node.js HTTP server
├── package.json      # Project metadata & npm start scripts
└── README.md         # Comprehensive documentation
```

---

## 🏃‍♂️ How to Run Locally

1. Open your terminal in the project directory:
   ```bash
   cd c:\Users\HP\OneDrive\Desktop\pro\cep
   ```

2. Start the local server:
   ```bash
   node server.js
   ```
   *(or `npm start`)*

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🌾 Supported Crops & Diseases Sample

| Crop | Major Diseases Covered |
| :--- | :--- |
| **Sugarcane (ऊस / गन्ना)** | Red Rot (*Colletotrichum falcatum*), Healthy Crop |
| **Rice / Paddy (भात / धान)** | Bacterial Leaf Blight (*Xanthomonas oryzae*), Blast |
| **Wheat (गहू / गेहूं)** | Stripe / Yellow Rust (*Puccinia striiformis*) |
| **Cotton (कापूस / कपास)** | Leaf Curl Virus (CLCuV), Pink Bollworm |
| **Tomato (टोमॅटो / टमाटर)** | Early Blight (*Alternaria solani*), Leaf Curl Virus (ToLCV) |
| **Onion (कांदा / प्याज)** | Purple Blotch (*Alternaria porri*) |
| **Potato (बटाटा / आलू)** | Late Blight (*Phytophthora infestans*) |
| **Maize (मका / मक्का)** | Fall Armyworm (*Spodoptera frugiperda*) |
| **Soybean (सोयाबीन)** | Yellow Mosaic Virus (YMV) |

---

*Dedicated to the prosperity and well-being of our farmers — the Annadatas of India.* 🇮🇳🌱
