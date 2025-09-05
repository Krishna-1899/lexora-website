// Import product images
import lx1Image from '../assets/images/menu/lx-1.png';
import lx2Image from '../assets/images/menu/lx-2.png';
import lx3Image from '../assets/images/menu/lx-3.png';
import lx3white from '../assets/images/menu/LX_03-white.png';
import blockJointingMortarImage from '../assets/images/menu/jointing-mortor.png';
// Import technical data images (using existing images as placeholders)

import technical1 from '../assets/images/about/about-2-1.webp';
import technical2 from '../assets/images/about/about-2-2.webp';
import technical3 from '../assets/images/works/project-2-2.jpg';
import technical4 from '../assets/images/works/project-2-1.jpg';

import technicalImage1 from '../assets/images/application_method/01.webp';
import technicalImage2 from '../assets/images/application_method/02.webp';
import technicalImage3 from '../assets/images/application_method/03.webp';
import technicalImage4 from '../assets/images/application_method/04.webp';
import technicalImage5 from '../assets/images/application_method/05.webp';
import technicalImage6 from '../assets/images/application_method/06.webp';
import technicalImage7 from '../assets/images/application_method/07.webp';
import technicalImage8 from '../assets/images/application_method/08.webp';
import technicalImage9 from '../assets/images/application_method/09.webp';
import technicalImage10 from '../assets/images/application_method/10.webp';
import technicalImage11 from '../assets/images/application_method/11.webp';
import technicalImage12 from '../assets/images/application_method/12.webp';
import technicalImage13 from '../assets/images/application_method/13.webp';


// Import LX-04 configuration
import { lx4Configuration } from './lx4Data';


// Common installation instruction tabs that can be used across products
const commonInstallationTabs = [
  {
    label: "Surface Preparation",
    content: [
      "All surfaces must be between 40°F (4°C) and 104°F (40°C), structurally sound, clean, and free of dirt, oil, grease, loose paint, laitance, concrete sealers or curing compounds.",
      "Ensure the surface is plumb and level within ¼ inch (6mm) over 10 feet (3 meters).",
      "Smooth rough or uneven concrete surfaces with a screed or plaster material to achieve a wood float finish (or better).",
      "Dampen dry, dusty concrete slabs or masonry and remove excess water before installation. New concrete slabs must be damp cured and at least 28 days old before application.",
      "Incorporate expansion joints through the tile work to match any construction or expansion joints in the substrate. Do not cover expansion joints with mortar."
    ]
  },
  {
    label: "Mixing",
    content: [
      "Pour clean, potable water into a clean mixing bowl.",
      "Add adhesive powder to the water (follow specific water-to-powder ratio for each product).",
      "Mix by hand or with a slow-speed mixer until a smooth, trowelable consistency is achieved.",
      "Allow the adhesive to slake for 5 minutes.",
      "Adjust consistency if necessary.",
      "Remix before applying with the proper sized notched trowel."
    ]
  },
  {
    label: "Application",
    content: [
      "Apply adhesive to the substrate with the flat side of the trowel, pressing firmly to ensure good contact.",
      "Use the proper sized notched trowel to ensure full bedding of the tile.",
      "Comb additional adhesive onto the substrate with the notched side of the trowel.",
      "Back-butter large format tiles (greater than 12\" x 12\" or 300mm x 300mm) to provide full bedding and support.",
      "Place tiles into the wet, sticky adhesive and tap them in using a beating block and rubber mallet.",
      "Use spacers to create grout joints between tiles/stones.",
      "Clean off surplus adhesive from the tile face and between joints.",
      "Clean tools and tile work with water while adhesive is fresh."
    ]
  },
  {
    label: "Grouting",
    content: [
      "Begin grouting after a minimum curing time of 24 hours at 70°F (21°C).",
      "Use recommended grout products for maximum stain resistance."
    ]
  },
  {
    label: "Precautions & Note",
    content: [
      "Always add powder to water.",
      "Do not add excess water than recommended.",
      "Never add sand & cement at site.",
      "Do not use on wet screed. Surface must be fully cured.",
      "Protect from direct rainfall / foot traffic for at least 24 hours.",
      "Leave gap between the tile & fill gaps with appropriate tile grout."
    ]
  }
];

// Common application steps (using placeholder images)
const commonApplicationSteps = [
  {
    image: technicalImage1,
    description: "Remove all Dust, Water, Oil & Sealers from Surface/ Substrate",
    altText: "Step 1: Surface preparation"
  },
  {
    image: technicalImage2,
    description: "Add water/Admix in to empty bucket",
    altText: "Step 2: Add water"
  },
  {
    image: technicalImage3,
    description: "Add adhesive powder to water and mix until uniform paste is achieved",
    altText: "Step 3: Add adhesive powder"
  },
  {
    image: technicalImage4,
    description: "Slake the Material for 5 to 10 minutes",
    altText: "Step 4: Let material rest"
  },
  {
    image: technicalImage5,
    description: "Again Mix the material then take the material on notch trowel",
    altText: "Step 5: Mix again and apply to trowel"
  },
  {
    image: technicalImage6,
    description: "Use flat side of the trowel and spread the adhesive uniformly",
    altText: "Step 6: Spread adhesive evenly"
  },
  {
    image: technicalImage7,
    description: "Comb the adhesive with the help of Notch trowel",
    altText: "Step 7: Comb the adhesive"
  },
  {
    image: technicalImage8,
    description: "For large tiles, spread material on backside of tile also",
    altText: "Step 8: Back-butter large tiles"
  },
  {
    image: technicalImage9,
    description: "Press the tiles firmly into position by Twisting Action",
    altText: "Step 9: Install tiles with twisting motion"
  },
  {
    image: technicalImage10,
    description: "Press the tile gently with help of Wooden Hammer to make uniform tile surface",
    altText: "Step 10: Level tiles with hammer"
  },
  {
    image: technicalImage11,
    description: "Clean the Tile surface with wet Cloth",
    altText: "Step 11: Clean tile surface"
  },
  {
    image: technicalImage12,
    description: "Wait for appropriate curing time before foot traffic",
    altText: "Step 12: Wait for curing"
  },
  {
    image: technicalImage13,
    description: "After curing time, you can do the grouting",
    altText: "Step 13: Apply grout"
  }
];

// Product configurations
export const productConfigurations = {
  'lx-1': {
    // Page Header Props
    pageTitle: "LX-01 -  For Fixing Floor Tiles",
    breadcrumbs: [{ label: 'LX-01', link: null }],
    
    // Product Details Props
    productName: "LX-01 -  For Fixing Floor Tiles",
    productImage: lx1Image,
    description: "LX-01 is a polymer-based tile adhesive specifically formulated for fixing ceramic tiles and small format natural stone, clay tiles, terracotta and quarry tiles of regular size. It is suitable for both vertical and horizontal surfaces, over the cementitious substrate for indoor application, in dry as well as wet areas. Easy to use with just water mixing, LX-01 is perfect for dry areas and occasional moisture environments like bathrooms and kitchens.",
    tdsLink: "/assets/tds/lx-1.pdf",
    dealerLink: "/where-to-buy",
    altText: "LX-01 for Ceramic Floor Tiles",
    
    // Technical specifications
    technicalSpecs: [
      { values: ['Appearance', 'Free flowing powder'] },
      { values: ['Colour', 'Grey'] },
      { values: ['Pot life', '3 hrs'] },
      { values: ['Open time', '20 minutes Approx'] },
      { values: ['Adjustability time', '10 minutes'] },
      { values: ['Trafficable time', '24 hrs'] },
      { values: ['Tensile Adhesion', '>1.0 N/mm²'] },
      { values: ['Shear Adhesion', '>1.09 N/mm²'] },
      { values: ['EN 12004 Standard', ' C1T'] }
    ],
    
    // IS Data
    isData: [
      { values: ['', 'Tensile Adhesion', ''], isHeader: true },
      { values: ['Dry Condition – Annex A (Clause 5.1)', 'Minimum 0.50 N/mm²', '0.60-0.70 N/mm²'] },
      { values: ['', 'Shear Adhesion', ''], isHeader: true },
      { values: ['Dry Condition – Annex B (Clause 5.2)', 'Minimum 1.00 N/mm²', '1.10-1.20 N/mm²'] },
      { values: ['', 'Slip Resistance', ''], isHeader: true },
      { values: ['Slip Resistance – Annex E (Clause 5.5)', '≤0.50 mm', '0.25-0.35 mm'] }
    ],
    
    coverage: "Approximately 55-60 square feet per 20 kg pack, using a 1/4\" x 1/4\" (6mm x 6mm) square notched trowel for a 3mm bed. Approx. 1.2 kg/m2 per mm of thickness. Coverage will vary depending on several factors including trowel notch size, tile type and size and substrate smoothness.",
    
    technicalImages: [technical1, technical2, technical3, technical4],
    
    // Accordion items
    accordionItems: [
      {
        title: "KEY FEATURES AND BENEFITS",
        content: (
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Single-component, easy to use:</strong> Simply add water for a ready-mixed solution.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Interior applications:</strong> Ideal for use on interior floors and walls.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Economical:</strong> Cost-effective solution for tile installation.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>High-performance:</strong> Meets international classifications EN / ISO CIT and IS 15477:2019 - Type 1T.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Versatile:</strong> Bonds to various substrates including concrete, concrete masonry and cement-based surfaces.</p>
            </li>
          </ul>
        )
      },
      {
        title: "SUBSTRATES",
        content: (
          <div>
            <ul className="space-y-3 mb-4">
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
                <p>Cement Plaster</p>
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
                <p>Existing Natural Stone* (cleaned and roughened)</p>
              </li>
            </ul>
            <p><strong>Note:</strong> Surfaces must be cleaned and roughened before installation of tiles or stones</p>
          </div>
        )
      },
      {
        title: "APPLICATION",
        content: (
          <p>
            LX-01 is designed for dry areas of interior floors and walls. It can be used for installing all types of ceramic tiles and small format natural stones on concrete and various cement-based substrates. The maximum bed thickness is 12mm
          </p>
        )
      },
      {
        title: "CERTIFICATIONS",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>IS 15477:2019 Type: 1T</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>EN 12004 / ISO 13007: CIT</p>
            </li>
          </ul>
        )
      },
      {
        title: "PACKAGING",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>20 kg bag (Available in Grey (With the name of LX-01))</p>
            </li>
          </ul>
        )
      }
    ],
    
    applicationSteps: commonApplicationSteps,
    installationTabs: commonInstallationTabs,
    
    // FAQ data
    faqs: [
      {
        question: "What is LX1 Tile Adhesive?",
        answer: "LX1 Tile Adhesive, a premium polymer-modified, cement-based adhesive, is your reliable partner for bonding ceramic and concrete floor tiles. It ensures a strong bond, flexibility, resistance to water and temperature changes, and durability, providing peace of mind for your tiling projects."
      },
      {
        question: "What is the density of LX1 Tile Adhesive Paste?",
        answer: "It is designed to be user-friendly, making it easy to spread and work with. It provides strong adhesion for years, ensuring your tiling projects are hassle-free."
      },
      {
        question: "How do you mix LX1 Tile Adhesive?",
        answer: "Mix LX1 Tile Adhesive by adding the powder to water in the recommended ratio and stirring until a smooth, lump-free paste is formed. For large batches, use a mechanical mixer to ensure consistency."
      },
      {
        question: "What makes LX-01 Tile Adhesive different from other cement-based adhesives?",
        answer: "LX-01 is polymer-modified, enhancing its bonding strength, flexibility, and durability compared to standard cement-based adhesives. It offers comprehensive solutions for walls, floors, and roofs for residential and commercial tiling projects."
      },
      {
        question: "Is LX-01 Tile Adhesive a glue or a cement-based bonding agent?",
        answer: "It is a grey-colored polymer-modified cement-based bonding agent that acts as a strong adhesive, providing the benefits of both traditional cement and modern polymer-enhanced glues."
      },
      {
        question: "What is the best way to apply LX-01 Tile Adhesive for optimal results?",
        answer: "Mix using an electric chemical mixer and make a lump-free paste. Use a notched trowel to ensure an even thickness and proper coverage. Apply one coating on the surface and one coating on the tiles. Press the tiles firmly into the adhesive and adjust to maintain alignment and spacing."
      }
    ]
  },
  
  // LX-02 Product Configuration
  'lx-2': {
    pageTitle: "LX-02 - For Fixing wall & Vitrified Tiles",
    breadcrumbs: [{ label: 'LX-02', link: null }],
    productName: "LX-02 - For Fixing wall & Vitrified Tiles",
    productImage: lx2Image,
    description: "LX-02 is a premium, white cement-based tile adhesive specifically formulated for interior wall and floor installations. Designed to preserve the aesthetic appeal of light-colored tiles and stones, this polymer modified adhesive delivers exceptional bond strength and flexibility. Ideal for fixing small format ceramic, natural stone, clay, terracotta, and quarry tiles, LX-02 is suitable for both dry and wet areas. Its user-friendly formulation requires only water for mixing, ensuring efficient application. Optimized for bed thicknesses up to 6mm, with the potential for 12mm in specific areas, LX-02 provides a reliable solution for cementitious substrates.",
    tdsLink: "/assets/tds/lx-2.pdf",
    dealerLink: "/where-to-buy",
    altText: "LX-02 White Color Adhesive",
    
    // Technical specifications
    technicalSpecs: [
      { values: ['Appearance', 'Free flowing powder'] },
      { values: ['Colour', 'White & Grey'] },
      { values: ['Pot life', '3 hrs'] },
      { values: ['Open time', '20 minutes Approx'] },
      { values: ['Adjustability time', '10 minutes'] },
      { values: ['Trafficable time', '24 hrs'] },
      { values: ['Tensile Adhesion', '>1.50 N/mm² >1.20 N/mm² >1.10 N/mm²'] },
      { values: ['Shear Adhesion', '>1.40 N/mm² >1.10 N/mm²'] },
      { values: ['EN 12004 Standard', 'C2T'] }
    ],
    
    // IS Data
    isData: [
      { values: ['Tensile Adhesion', '', ''], isHeader: true },
      { values: ['Dry Condition – Annex A (Clause 5.1)', 'Minimum 0.50 N/mm²', '0.60-0.70 N/mm²'] },
      { values: ['Shear Adhesion', '', ''], isHeader: true },
      { values: ['Dry Condition – Annex B (Clause 5.2)', 'Minimum 1.00 N/mm²', '1.10-1.20 N/mm²'] },
      { values: ['Slip Resistance', '', ''], isHeader: true },
      { values: ['Slip Resistance – Annex E (Clause 5.5)', '≤0.50 mm', '0.25-0.35 mm'] }
    ],
    
    coverage: "Approximately 55-60 square feet per 20 kg pack, using a 1/4\" x 1/4\" (6mm x 6mm) square notched trowel for a 3mm bed. Approx. 1.2 kg/m2 per mm of thickness. Coverage will vary depending on several factors including trowel notch size, tile type and size, and substrate smoothness.",
    
    technicalImages: [technical1, technical2, technical3, technical4],
    
    // LX-02 specific accordion items
    accordionItems: [
      {
        title: "KEY FEATURES AND BENEFITS:",
        content: (
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>Ready to use. Needs only mixing with water.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>High bond strength.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>Flexible, shock and impact resistant.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>Fast and economical</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>Highly effective for light base ceramic floor tiles</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>Protect light base ceramic tile from discoloration.</p>
            </li>
          </ul>
        )
      },
      {
        title: "ADVANTAGES",
        content: (
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Single-component, easy to use:</strong> Simply add water for a ready-mixed solution</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Interior applications:</strong> Ideal for use on interior floors and walls.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Economical:</strong> Cost-effective solution for tile installation.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>High-performance:</strong> Meets international classifications EN / ISO C2T and IS 15477:2019 – Type 2T.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Versatile:</strong> Bonds to various substrates including concrete, concrete masonry and cement-based surfaces.</p>
            </li>
          </ul>
        )
      },
      {
        title: "SUBSTRATES",
        content: (
          <div>
            <ul className="space-y-3 mb-4">
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
                <p>Cement Plaster</p>
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
                <p>Existing Natural Stone* (cleaned and roughened)</p>
              </li>
            </ul>
            <p><strong>Note:</strong> Surfaces must be cleaned and roughened before installation of tiles or stones</p>
          </div>
        )
      },
      {
        title: "APPLICATION",
        content: (
          <p>
            LX-02 is designed for dry areas of interior floors and walls. It can be used for installing all types of ceramic tiles and small format natural stones on concrete and various cement-based substrates. The maximum bed thickness is 12mm.
          </p>
        )
      },
      {
        title: "CERTIFICATIONS",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>IS 15477:2019 Type:</strong> 2T</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>EN 12004 / ISO 13007:</strong> C2T</p>
            </li>
          </ul>
        )
      },
      {
        title: "PERFORMANCE PROPERTIES : (LX-02 Adhesive mixed with Water):",
        content: (
          <p>
            This adhesive mortar conforms to IS 15477: 2019 - Type 2T Adhesive.
          </p>
        )
      },
      {
        title: "PACKAGING",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>PACKAGING :</strong> 20 kg bag Available in Grey (With the name of LX-02)</p>
            </li>
          </ul>
        )
      }
    ],
    
    // LX-02 specific application steps
    applicationSteps: [
      {
        image: technicalImage1,
        description: "Remove all Dust, Water, Oil & Sealers from Surface/ Substrate",
        altText: "Step 1: Surface preparation"
      },
      {
        image: technicalImage2,
        description: "Add 5 to 6 Ltrs water/Admix in to empty bucket",
        altText: "Step 2: Add water"
      },
      {
        image: technicalImage1,
        description: "Add 20 Kg LX-02 Thin Set Adhesive in to water and mix it till attains Uniform Paste",
        altText: "Step 3: Add LX-02 adhesive powder"
      },
      {
        image: technicalImage2,
        description: "Slake the Material for 5 to 10 minutes",
        altText: "Step 4: Let material rest"
      },
      {
        image: technicalImage1,
        description: "Again Mix the material then take the material on notch trowel",
        altText: "Step 5: Mix again and apply to trowel"
      },
      {
        image: technicalImage2,
        description: "Use flat side of the trowel and spread the adhesive uniformly",
        altText: "Step 6: Spread adhesive evenly"
      },
      {
        image: technicalImage1,
        description: "Comb the adhesive with the help of Notch trowel",
        altText: "Step 7: Comb the adhesive"
      },
      {
        image: technicalImage2,
        description: "Spread the material backside of the tile also (If tile size is More than 12X12)",
        altText: "Step 8: Back-butter large tiles"
      },
      {
        image: technicalImage1,
        description: "Press the tiles firmly into position by Twisting Action",
        altText: "Step 9: Install tiles with twisting motion"
      },
      {
        image: technicalImage2,
        description: "Press the tile gently with help of Wooden Hammer to make uniform tile surface",
        altText: "Step 10: Level tiles with hammer"
      },
      {
        image: technicalImage1,
        description: "Clean the Tile surface with wet Cloth",
        altText: "Step 11: Clean tile surface"
      },
      {
        image: technicalImage2,
        description: "For Foot Traffic wait up to 24 Hrs",
        altText: "Step 12: Wait for curing"
      },
      {
        image: technicalImage1,
        description: "After 24 Hrs you can do the grouting",
        altText: "Step 13: Apply grout"
      }
    ],
    
    // LX-02 specific installation tabs
    installationTabs: [
      {
        label: "Surface Preparation",
        content: [
          "All surfaces must be between 40°F (4°C) and 104°F (40°C), structurally sound, clean, and free of dirt, oil, grease, loose paint, laitance, concrete sealers, or curing compounds.",
          "Ensure the surface is plumb and level within ¼ inch (6mm) over 10 feet (3 meters).",
          "Smooth rough or uneven concrete surfaces with a screed or plaster material to achieve a wood float finish (or better).",
          "Dampen dry, dusty concrete slabs or masonry and remove excess water before installation. New concrete slabs must be damp cured and at least 28 days old before application.",
          "Incorporate expansion joints through the tile work to match any construction or expansion joints in the substrate. Do not cover expansion joints with mortar.",
          "Lexora PU-L29 is recommended for tile or stone installations on plywood and wood substrates."
        ]
      },
      {
        label: "Mixing",
        content: [
          "Pour clean, potable water into a clean mixing bowl.",
          "Add LX-02 powder to the water (approximately 5 - 5.5 liters of water per 20 kg of powder).",
          "Mix by hand or with a slow-speed mixer until a smooth, trowelable consistency is achieved.",
          "Allow the adhesive to slake for 5 minutes.",
          "Adjust consistency if necessary.",
          "Remix before applying with the proper sized notched trowel.",
          "For large format tile or stone installations on exterior surfaces, contact Lexora technical services."
        ]
      },
      {
        label: "Application",
        content: [
          "Apply adhesive to the substrate with the flat side of the trowel, pressing firmly to ensure good contact.",
          "Use the proper sized notched trowel to ensure full bedding of the tile.",
          "Comb additional adhesive onto the substrate with the notched side of the trowel. Use the appropriate trowel size to ensure full coverage of the tile back. Spread only as much adhesive as can be covered with tile within 10 minutes.",
          "Back-butter large format tiles (greater than 12\" x 12\" or 300mm x 300mm) to provide full bedding and support.",
          "Place tiles into the wet, sticky adhesive and tap them in using a beating block and rubber mallet to embed the tile and adjust the level.",
          "Periodically remove a tile to check for complete adhesive coverage by inspecting the amount of adhesive transferred onto the back of the tile.",
          "Use spacers to create grout joints between tiles/stones. The joint width should follow the architect's or engineer's recommendations. Remove spacers once the adhesive has set firmly.",
          "If the adhesive skins over (loses tack), remove it and replace it with fresh adhesive.",
          "Apply adhesive to the substrate with the flat side of the trowel.",
          "Tiles must be fixed within 10-15 minutes of adhesive being applied, depending on the porosity of the surface and atmospheric conditions.",
          "Leave no voids behind tiles.",
          "Use suitable support along with adhesive for fixing tiles on vertical surfaces.",
          "Leave adequate joints between individual wall and floor tiles using spacers. The joint width shall be as per the recommendation of architect / engineer.",
          "Clean off surplus adhesive from the tile face and between joints.",
          "Clean tools and tile work with water while adhesive is fresh."
        ]
      },
      {
        label: "Grouting",
        content: [
          "Begin grouting after a minimum curing time of 24 hours at 70°F (21°C). Use Lexora's Grout series epoxy grout or unsanded grout mixed with Grout Admix.",
          "For maximum stain resistance on interior spacer joints, use Grout Stain- resistant Grout."
        ]
      },
      {
        label: "Precautions & Note",
        content: [
          "Always add powder to water.",
          "Do not add excess water than recommended.",
          "Never add sand & cement at site.",
          "Do not use on wet screed. Surface must be fully cured.",
          "Do not use the adhesive to correct surface irregularities greater than 12 mm.",
          "Protect from direct rainfall/foot traffic for at least 24 hours.",
          "Leave gap between the tile & fill gaps with Lexora tile grout.",
          "Designer/applicator must evaluate the use of an additional mechanical fastening system for extra security for more than 3m height (such as steel hooks fastened to the substrate)."
        ]
      },
      {
        label: "Limitation",
        content: [
          "Do not apply directly to gypsum plaster or boards, fibre cement boards or other drywall partitions, plywood, chipboard, particleboard, decorative laminates or resilient flooring, metal, plastic, deformable surfaces or subject to vibrations. Use Lexora PU-L29 as per application.",
          "Adhesives for ceramic tile, bricks and stone are not designed as replacements for waterproof coating. Use waterproofing coating before tiling for wet area.",
          "Do not use for fixing artificial/ nano/ engineered stone/ composites/ metal tile. Use Lexora PU-L29 for the same."
        ]
      }
    ],
    
    // LX-02 specific FAQs
    faqs: [
      {
        question: "What is LX-02 Tile Adhesive?",
        answer: "LX-02 is a premium white-colored waterproof tile adhesive designed to fix ceramic tiles on floors and walls. It provides a strong bond and is ideal for areas exposed to moisture. It also keeps the shine of white tiles."
      },
      {
        question: "Can LX-02 be used for both floor and wall tile installations?",
        answer: "LX-02 is versatile and can be used to fix tiles on floors and walls in residential and commercial areas. It provides excellent adhesion and durability in all applications."
      },
      {
        question: "What is the difference between LX-01 and LX-02?",
        answer: "Both have the same qualities, but the only difference is the color of the tile adhesive. LX-01 is a cement-like grey color, whereas LX-02 is a white powder, making the light-colored tile solid and beautiful."
      },
      {
        question: "How does LX-02 Tile Adhesive enhance tile fixing?",
        answer: "LX-02 provides a strong bond and powerful glue kind application that resists moisture penetration, ensuring long-lasting tile fixing in areas prone to water exposure, such as bathrooms and kitchens."
      },
      {
        question: "Is LX-02 suitable for outdoor tiling projects?",
        answer: "LX-02's waterproof and durable properties make it suitable for outdoor tiling projects. It ensures that tiles remain securely in place despite weather conditions. Apply LX-02 using a notched trowel to spread the adhesive evenly. Press the tiles firmly, ensuring proper alignment and spacing for a secure bond."
      },
      {
        question: "What surfaces can LX-02 Tile Adhesive be used on?",
        answer: "LX-02 can be used on various surfaces, including concrete, plaster, and existing tiles, making it versatile for different tiling projects."
      }
    ]
  },
  
  // VX-1 Product Configuration
  'lx-3': {
    pageTitle: "LX-03 - For Fixing Vitrified Tiles",
    breadcrumbs: [{ label: 'LX-03', link: null }],
    productName: "LX-03 - For Fixing Vitrified Tiles",
    productImage: lx3Image,
    description: "LX-03 is a high-performance, polymer-modified, grey cement-based adhesive specifically designed for fixing low-porosity tiles (vitrified, semi-vitrified) and natural stones on interior and exterior floors, walls-interiors, and even swimming pools. It offers exceptional bond strength, water resistance, and ease of use. The adhesive is water-resistant and is suitable for use in showers, wet areas and swimming pools. Also, ideal for renovation (tile-over-tile) for quick & easy installation works.",
    tdsLink: "/assets/tds/lx-3.pdf",
    dealerLink: "/where-to-buy",
    altText: "LX-03 Premium Tile Adhesive",
    technicalSpecs: [
      { values: ['Appearance', 'Free flowing powder'] },
      { values: ['Colour', 'White & Grey'] },
      { values: ['Pot life', '3 hrs'] },
      { values: ['Open time', '20 minutes Approx'] },
      { values: ['Adjustability time', '10 minutes'] },
      { values: ['Trafficable time', '24 hrs'] },
      { values: ['Tensile Adhesion', '>1.60 N/mm² >1.20 N/mm²'] },
      { values: ['Shear Adhesion', '>1.55 N/mm² >1.30 N/mm² >1.15 N/mm²'] },
      { values: ['Deformablity (as per annex F)' , '>2.60 mm']},
      { values: ['EN 12004 Standard', 'C2TE'] }
    ],
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
    accordionItems: [
      {
        title: "Key Features And Benefits",
        content: (
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Superior Bond Strength:</strong> Exceeds EN & ISO C2TE classification for shear bond strength, ensuring a durable and long-lasting installation.</p>
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
      },{
        title: "Advantages",
        content: (
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Single-component, easy to use:</strong> Simply add water for a ready-mixed solution</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Interior applications:</strong> Ideal for use on interior floors and walls.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Economical:</strong> Cost-effective solution for tile installation.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>High-performance:</strong> Meets international classifications EN 12004 - C2TE – Type 3.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Versatile:</strong> Bonds to various substrates including concrete, concrete masonry and cement-based surfaces.</p>
            </li>
          </ul>
        )
      },
      {
        title: "SUBSTRATES",
        content: (
          <div>
            <ul className="space-y-3 mb-4">
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
                <p>Cement Plaster</p>
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
                <p>Existing Natural Stone* (cleaned and roughened)</p>
              </li>
            </ul>
            <p><strong>Note:</strong> Surfaces must be cleaned and roughened before installation of tiles or stones</p>
          </div>
        )
      },
      {
        title: "APPLICATION",
        content: (
          <p>
            LX-03 is designed for dry areas of interior floors and walls. It can be used for installing all types of ceramic tiles and small format natural stones on concrete and various cement-based substrates. The maximum bed thickness is 12mm.
          </p>
        )
      },
      {
        title: "CERTIFICATIONS",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>IS 15477:2019 Type:</strong> 3T</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>EN 12004 / ISO 13007:</strong> C2TE</p>
            </li>
          </ul>
        )
      },
      {
        title: "PERFORMANCE PROPERTIES : (LX-03 Adhesive mixed with Water):",
        content: (
          <p>
            This adhesive mortar conforms to IS 15477: 2019 - Type 3T Adhesive.
          </p>
        )
      },
      {
        title: "PACKAGING",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>PACKAGING :</strong> 20 kg bag Available in Grey with the name of LX-03</p>
            </li>
          </ul>
        )
      }
    ],
    applicationSteps: commonApplicationSteps,
    installationTabs: commonInstallationTabs,
    faqs: [
      {
        question: "What is LX-03 Tile Adhesive used for?",
        answer: "This is used to fix tiles on walls and floors, including ceramic, vitrified, and large wall tiles, for residential and commercial purposes. Its LX-03 name stands due to its compatibility with vitrified tiles with zero porosity."
      },
      {
        question: "Can LX-03 Tile Adhesive be used in wet areas like bathrooms?",
        answer: "Yes, it is suitable for use in wet areas such as bathrooms. It provides a solid and durable bond and prevents seepage and leakage."
      },
      {
        question: "Is LX-03 Tile Adhesive suitable for tile-on-tile application?",
        answer: "It is formulated for heavy-duty applications for fixing vitrified and large-size tiles. It also works effectively for tile-on-tile applications, ensuring strong bonding and adhesion."
      }
    ]
  },
  // LX-04 Product Configuration (imported from separate file)
  'lx-4': lx4Configuration,
  'block-jointing-mortar': {
    pageTitle: "BLOCK JOINTING MORTAR",
    productSubtitle: "For Fixing Blocks",
    description: "LEXORA is a non-refractory mortar, used for laying masonry units like AAC blocks. It is a self curing mortar made from cement, selected fine sand and polymeric additives, which ensure good bonding and durable strength between the blocks.",
    tdsLink: "/assets/tds/block-jointing-mortar.pdf",
    dealerLink: "/where-to-buy",
    altText: "Block Jointing Mortar",
    breadcrumbs: [{ label: 'BLOCK JOINTING MORTAR', link: null }],
    productName: "BLOCK JOINTING MORTAR",
    productImage: blockJointingMortarImage,
    benefits: [
      "For 4mm bed thickness",
      "Suitable for insulated blocks",
      "Block mounting full wall in 2-3 days",
      "The chiselling and conducting can be carried out after 14days",
      "The Plastering can be carried out after 7 days",
      "Can be applied with 90% material transfer",
      "Self curing adhesive"
    ],
    packing: "40 kg",
    color: "GREY",
    additionalSections: [
      {
        title: "Description",
        content: "LEXORA is a non-refractory mortar, used for laying masonry units like AAC blocks. It is a self curing mortar made from cement, selected fine sand and polymeric additives, which ensure good bonding and durable strength between the blocks."
      },
      {
        title: "Benefits",
        type: "list",
        content: [
          "For 4mm bed thickness",
          "Suitable for insulated blocks", 
          "Block mounting full wall in 2-3 days",
          "The chiselling and conducting can be carried out after 14days",
          "The Plastering can be carried out after 7 days",
          "Can be applied with 90% material transfer",
          "Self curing adhesive"
        ]
      },
      {
        title: "Packing",
        content: "40 kg"
      },
      {
        title: "Color",
        content: "GREY"
      }
    ]
  },
  // Continue adding other products...
};

export default productConfigurations;
