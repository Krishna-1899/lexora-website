import React from 'react';
import lx4Image from '../assets/images/menu/lx-4.png';
import technical1 from '../assets/images/about/about-2-1.webp';
import technical2 from '../assets/images/about/about-2-2.webp';
import technical3 from '../assets/images/works/project-2-2.jpg';
import technical4 from '../assets/images/works/project-2-1.jpg';
import faqImage from '../assets/images/faq/faq-1-1.jpg';

// Import application method images
import appMethod1 from '../assets/images/application_method/01.webp';
import appMethod2 from '../assets/images/application_method/02.webp';
import appMethod3 from '../assets/images/application_method/03.webp';
import appMethod4 from '../assets/images/application_method/04.webp';
import appMethod5 from '../assets/images/application_method/05.webp';
import appMethod6 from '../assets/images/application_method/06.webp';
import appMethod7 from '../assets/images/application_method/07.webp';
import appMethod8 from '../assets/images/application_method/08.webp';
import appMethod9 from '../assets/images/application_method/09.webp';
import appMethod10 from '../assets/images/application_method/10.webp';
import appMethod11 from '../assets/images/application_method/11.webp';
import appMethod12 from '../assets/images/application_method/12.webp';
import appMethod13 from '../assets/images/application_method/13.webp';

export const lx4Configuration = {
  pageTitle: "LX-4 - White Cement Based, High Polymer Modified, Tile/Stone Adhesive",
  breadcrumbs: [{ label: 'LX-4', link: null }],
  productName: "LX-4 - White Cement Based, High Polymer Modified, Tile/Stone Adhesive",
  productImage: lx4Image,
  description: "LX-4 is a high-performance, polymer-modified, white cement-based adhesive for low-porosity tiles (vitrified, semi-vitrified) and natural stones, suitable for both interior and exterior floors, and interior walls. It provides excellent bond strength, water resistance, and ease of use, ideal for showers, wet areas, and swimming pools. LX-4 is perfect for renovations, allowing for quick tile-over-tile installations, and is suitable for mosaics, terrazzo, and light-colored natural stones. Confirms to IS 15477: 2019 Type 2T \"Adhesives for use with Ceramic, Mosaic and Stone Tiles\". Note: Not recommended for direct use onto gypsum plaster (wall finishes), paint or metal. Not suitable for tiles and stones with mesh backing.",
  tdsLink: "/assets/tds/lx-4.pdf",
  dealerLink: "/where-to-buy",
  altText: "LX-4 White Color Adhesive for Tiles & Marbles",
  
  // Technical specifications for LX-4 (Type 2T)
  technicalSpecs: [
    { values: ['Density', '1.7 kg / litre approx.'] },
    { values: ['Pot Life', '120 Minutes Approx'] },
    { values: ['Open Time', '30 minutes Approx'] },
    { values: ['Adjustability', '30 minutes Approx'] },
    { values: ['Setting Time', 'Approx. 1 Day'] },
    { values: ['Full Strength', 'Approx. 14 Days'] },
    { values: ['Tensile Strength', '>1.20 N/mm²'] },
    { values: ['Shear Strength', '>1.25 N/mm²'] }
  ],
  
  // IS Data for LX-4
  isData: [
    { values: ['', 'Tensile Adhesion', ''], isHeader: true },
    { values: ['Wet Conditions - Annex A (Clause 5.1)', 'Minimum 1.00 N/mm²', '1.15-1.25 N/mm²'] },
    { values: ['Dry Condition - Annex A (Clause 5.1)', 'Minimum 1.00 N/mm²', '1.15-1.25 N/mm²'] },
    { values: ['', 'Shear Adhesion', ''], isHeader: true },
    { values: ['Dry Condition – Annex B (Clause 5.2)', 'Minimum 1.25 N/mm²', '1.30–1.35 N/mm²'] },
    { values: ['Heat Ageing - Annex B (Clause 5.2)', 'Minimum 1.00 N/mm²', '1.05-1.15 N/mm²'] },
    { values: ['Wet Condition – Annex B (Clause 5.2)', 'Minimum 1.00 N/mm²', '1.10-1.20 N/mm²'] },
    { values: ['', 'Slip Resistance', ''], isHeader: true },
    { values: ['Slip resistance – Annex B (Clause 5.2)', '≤ 0.5 mm', '0.35 mm'] }
  ],
  
  coverage: "Approx. 55–60 sq. ft. per 20 kg bag (using a 6mm x 6mm notched trowel for a 3mm bed). 1.2 kg/m² per mm of thickness (coverage may vary).",
  
  technicalImages: [technical1, technical2, technical3, technical4],
  
  // LX-4 specific accordion items
  accordionItems: [
    {
      title: "Key Features And Benefits",
      content: (
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p><strong>Superior Bond Strength:</strong> Exceeds EN & ISO C2TE classification for shear bond strength, ensuring a durable and long-lasting installation</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p><strong>Versatile Application:</strong> Suitable for most common substrates like concrete, masonry surfaces, existing tiles, and even terraces.</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p><strong>Water Resistant:</strong> Ideal for wet areas like showers, bathrooms, and swimming pools.</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p><strong>Easy to Use:</strong> Single-component formula requires only the addition of water for a smooth, trowelable consistency.</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p><strong>Smooth Application & Curing:</strong> Easy mixing, smooth application & better workability and achieves full strength in approximately 14 days.</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p><strong>Economical:</strong> Cost-effective solution for various tiling projects.</p>
          </li>
        </ul>
      )
    },
    {
      title: "Substrates",
      content: (
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Concrete</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Concrete Masonry</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Cement Mortar Beds</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Cement Plaster (roughened)</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Existing Vitrified & Ceramic Tiles (cleaned & roughened)</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Brick Masonry</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Cement Terrazzo (roughened)</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Existing Natural Stone (cleaned & roughened)</p>
          </li>
        </ul>
      )
    },
    {
      title: "Application",
      content: (
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Interior and Exterior floor & wall installations – Interiors</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Tile-on-tile applications</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Bathroom tiling</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Up to 12mm bed thickness</p>
          </li>
        </ul>
      )
    }
  ],
  
  // LX-4 specific application steps
  applicationSteps: [
    {
      image: appMethod1,
      description: "Remove all Dust, Water, Oil & Sealers from Surface/ Substrate",
      altText: "Step 1: Surface preparation"
    },
    {
      image: appMethod2,
      description: "Add 5 to 6 Ltrs water/Admix in to empty bucket",
      altText: "Step 2: Add water/admix"
    },
    {
      image: appMethod3,
      description: "Add 20 Kg LX-4 Thin Set Adhesive into water and mix it till it attains a Uniform Paste.",
      altText: "Step 3: Add LX-4 adhesive powder"
    },
    {
      image: appMethod4,
      description: "Slake the Material for 5 to 10 minutes",
      altText: "Step 4: Let material rest"
    },
    {
      image: appMethod5,
      description: "Again Mix the material then take the material on notch trowel",
      altText: "Step 5: Mix again and apply to trowel"
    },
    {
      image: appMethod6,
      description: "Use flat side of the trowel and spread the adhesive uniformly",
      altText: "Step 6: Spread adhesive evenly"
    },
    {
      image: appMethod7,
      description: "Comb the adhesive with the help of Notch trowel",
      altText: "Step 7: Comb the adhesive"
    },
    {
      image: appMethod8,
      description: "Spread the material backside of the tile also (If tile size is More than 12X12)",
      altText: "Step 8: Back-butter large tiles"
    },
    {
      image: appMethod9,
      description: "Press the tiles firmly into position by Twisting Action",
      altText: "Step 9: Install tiles with twisting motion"
    },
    {
      image: appMethod10,
      description: "Press the tile gently with help of Wooden Hammer to make uniform tile surface",
      altText: "Step 10: Level tiles with hammer"
    },
    {
      image: appMethod11,
      description: "Clean the Tile surface with wet Cloth",
      altText: "Step 11: Clean tile surface"
    },
    {
      image: appMethod12,
      description: "For Foot Traffic wait up to 24 Hrs",
      altText: "Step 12: Wait for curing"
    },
    {
      image: appMethod13,
      description: "After 24 Hrs you can do the grouting",
      altText: "Step 13: Apply grout"
    }
  ],
  
  // LX-4 specific installation tabs (standard format)
  installationTabs: [
    {
      label: "Surface Preparation",
      content: [
        "Ensure a clean, sound substrate between 40°F (4°C) and 104°F (40°C), free from dirt, oil, grease, paint, laitance, and sealers.",
        "Level uneven surfaces with a screed or plaster.",
        "Dampen dusty or dry concrete before installation. New concrete must be cured for at least 28 days.",
        "Incorporate expansion joints matching substrate joints.",
        "Use Lexora PU-L29 for wood substrates."
      ]
    },
    {
      label: "Mixing",
      content: [
        "Pour clean water into a mixing bowl.",
        "Gradually add LX-4 powder (5 - 5.5 liters per 20 kg).",
        "Mix until smooth and trowelable consistency. Let it slake for 5 minutes.",
        "Remix before applying with the appropriate trowel size.",
        "For large format tiles or exterior applications, consult Lexora technical services."
      ]
    },
    {
      label: "Application",
      content: [
        "Apply adhesive with the flat side of the trowel, ensuring good contact.",
        "Use the appropriate notched trowel to ensure full tile bedding.",
        "Comb additional adhesive with the notched trowel to cover the backside of the tile. Spread only enough for 10 minutes of working time.",
        "Back-butter large format tiles for better support.",
        "Firmly press tiles into the wet adhesive and adjust level.",
        "Check for complete adhesive coverage on the back of the tile periodically.",
        "Use spacers for grout joints as per recommendations. Remove spacers after the adhesive sets.",
        "If the adhesive skins over, remove and replace with fresh mix.",
        "For some natural stones, apply suitable sealers on all sides.",
        "Clean excess adhesive from tiles and joints while fresh."
      ]
    },
    {
      label: "Grouting",
      content: [
        "Begin grouting after 24 hours at 70°F (21°C) using Lexora's Grout series grout or unsanded grout."
      ]
    },
    {
      label: "Precautions & Note",
      content: [
        "Always add powder to water. Do not add excess water.",
        "Do not add sand or cement on-site.",
        "Not recommended for wet screeds or uneven surfaces exceeding 12mm.",
        "Protect from rain and foot traffic for 24 hours.",
        "Leave gaps between tiles and fill with Lexora tile grout.",
        "For installations exceeding 3 meters in height, consult a professional about additional mechanical fasteners.",
        "Not suitable for gypsum plaster, fiber cement boards, plywood, metal, plastics, or deformable surfaces. Use Lexora PU-L29 for such applications.",
        "This adhesive is not a replacement for waterproofing coatings in wet areas. Use a suitable waterproofing membrane before tiling.",
        "Not recommended for artificial/engineered stone, composites, or metal tiles. Use Lexora PU-L29 for these materials."
      ]
    },
    {
      label: "Limitation",
      content: [
        "Trowel Selection: The size of the notched trowel will depend on the size and type of tile you're installing. For larger tiles or uneven substrates, a bigger notch size is recommended to ensure full coverage.",
        "Weather Conditions: While LX-4 can be used for exterior applications, extreme heat or cold can affect drying times. Always check the weather forecast and adjust working practices accordingly.",
        "Substrate Preparation: Proper surface preparation is crucial for a successful tile installation. Don't underestimate the importance of a clean, sound, and level substrate.",
        "Working Time: Once mixed, LX-4 has a working time of about 15–20 minutes. It's important to work efficiently and avoid mixing large quantities at once to prevent wastage."
      ]
    }
  ],
  
  // LX-4 specific FAQs
  faqs: [
    {
      question: "What is LX4 Tile Adhesive?",
      answer: "LX4 Tile Adhesive is a premium chemical compound that securely fixes tiles on walls and floors, ensuring a robust and lasting bond. It is specifically formulated for Vitrified Tiles and is available in white."
    },
    {
      question: "Can LX4 Tile Adhesive be used for bathroom tiles?",
      answer: "LX4 Tile Adhesive is perfect for bathroom tiles due to its water-resistant and strong adhesive properties."
    },
    {
      question: "How do I use LX4 Tile Adhesive for wall tiling?",
      answer: "Apply LX4 Tile Adhesive evenly to the wall with a trowel, then press the tiles firmly into place for a secure bond. If you are using large-format tiles, make sure to apply the adhesive paste to them."
    },
    {
      question: "Is LX4 Tile Adhesive suitable for floor tiles?",
      answer: "Yes, It is ideal for vitrified light-colored floor tiles. It offers a durable bond that can withstand foot traffic and daily wear."
    },
    {
      question: "What surfaces can LX4 Tile Adhesive be applied to?",
      answer: "It can be used on concrete, cement, plaster, and even existing tiles, making it a versatile choice for any project."
    },
    {
      question: "How long does LX4 Tile Adhesive take to set?",
      answer: "It typically sets in 24 hours, but this can vary depending on the conditions and tiles used."
    },
    {
      question: "Is LX4 Tile Adhesive better than traditional cement for tile fixing?",
      answer: "It provides better adhesion, flexibility, and water resistance than traditional cement. Tiles fixed with traditional cement may lose after some years, but LX-4 ensures durability in the long run."
    },
    {
      question: "What is the price of LX4 Tile Adhesive?",
      answer: "The price of LX4 Tile Adhesive varies based on quantity. It starts from Rs 300 per bag. Check local retailers or dealers for accurate pricing."
    },
    {
      question: "Can LX4 Tile Adhesive be used for minor tile repairs?",
      answer: "It also works like glue for minor tile repairs, ensuring a reliable bond for loose or damaged tiles. DIY people or homeowners can also use this adhesive to repair minor tile issues."
    },
    {
      question: "How does LX4 Tile Adhesive ensure tile durability?",
      answer: "LX4 Tile Adhesive's strong chemical composition ensures tiles stay in place, preventing shifts and maintaining durability."
    }
  ],
  
  faqImage: faqImage,
  
  additionalNotes: (
    <>
      <div className="col-lg-12">
        <p className="bluefont"><b>CERTIFICATIONS:</b></p>
        <ul className="list-unstyled service-details__list listpoints" style={{maxWidth: '100%', color: 'var(--floens-text, #070707)'}}>
          <li>
            <span className="icon-check"></span>
            <p>Confirms to IS 15477: 2019 Type 2T "Adhesives for use with Ceramic, Mosaic and Stone Tiles"</p>
          </li>
          <li>
            <span className="icon-check"></span>
            <p>Confirms to EN 12004 / ISO 13007 and is an improved cementitious adhesive (C2) with slip resistance (T) and Extended Open time (E) of class C2TE</p>
          </li>
        </ul>
        <p className="bluefont"><b>PACKAGING:</b> 20 kg bag (Available in Grey and White (With the name of LX-4))</p>
        <p className="bluefont"><b>COVERAGE:</b></p>
        <ul className="list-unstyled service-details__list listpoints" style={{maxWidth: '100%', color: 'var(--floens-text, #070707)'}}>
          <li>
            <span className="icon-check"></span>
            <p>Approx. 55–60 sq. ft. per 20 kg bag (using a 6mm x 6mm notched trowel for a 3mm bed)</p>
          </li>
          <li>
            <span className="icon-check"></span>
            <p>1.2 kg/m² per mm of thickness (coverage may vary)</p>
          </li>
        </ul>
        <p><b>Disclaimer:</b> This technical data sheet is provided for informational purposes only. The information contained herein is based on our technical knowledge and experience. However, due to variations in field conditions, we recommend conducting preliminary tests to ensure product suitability for a specific application.</p>
      </div>
    </>
  )
};
