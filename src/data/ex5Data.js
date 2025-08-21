import React from 'react';
import ex5Image from '../assets/images/menu/ex-5.webp';
import technical1 from '../assets/images/about/about-2-1.webp';
import technical2 from '../assets/images/about/about-2-2.webp';
import technical3 from '../assets/images/works/project-2-2.jpg';
import technical4 from '../assets/images/works/project-2-1.jpg';

// Import application method images
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

export const ex5Configuration = {
  pageTitle: "EX-5 Lexora High Performance Tile Adhesive",
  breadcrumbs: [{ label: 'EX-5', link: null }],
  productName: "EX-5 Lexora High Performance Tile Adhesive",
  productImage: ex5Image,
  description: "EX-5 High Performance, Polymer Modified, Non-slip Adhesive, EX-5 is an improved slip-resistant cementitious adhesive with extended open time, classified as C2TES1 according to ISO 13007 standards, Exceeds IS 15477:2019-Type 3TS1 Adhesive standards. This high polymer-modified adhesive is designed for tile-on-tile works and the installation of vitrified tiles, natural stones, and glass mosaics on walls and floors in both interior and exterior situations up to a 6mm bed thickness, which can be averaged up to 12mm. The set adhesive is water-resistant and suitable for use in wet areas like swimming pools and water bodies. Note: Not recommended for direct use onto gypsum plaster (wall finishes), paint, or metal",
  tdsLink: "/assets/tds/ex5.pdf",
  dealerLink: "/where-to-buy",
  altText: "EX-5 White Color Adhesive for Tiles & Marbles",
  
  // Technical specifications for EX-5 (Type 3TS1)
  technicalSpecs: [
    { values: ['Density', '1.7 kg/litre Approx'] },
    { values: ['Pot Life', '120 Minutes Approx'] },
    { values: ['Open Time', '30 minutes Approx'] },
    { values: ['Adjustability', '30 minutes Approx'] },
    { values: ['Setting Time', 'Approx. 1 Day'] },
    { values: ['Full Strength', 'Approx. 14 Days'] },
    { values: ['Tensile Strength', '>1.60 N/mm²'] },
    { values: ['Shear Strength', '>1.60 N/mm²'] }
  ],
  
  // IS Data for EX-5
  isData: [
    { values: ['', 'Tensile Adhesion', ''], isHeader: true },
    { values: ['Dry Condition – Annex A (Clause 5.1)', 'Minimum 1.50 N/mm²', '1.55–1.65 N/mm²'] },
    { values: ['Wet Conditions – Annex A (Clause 5.1)', 'Minimum 1.00 N/mm²', '1.10–1.20 N/mm²'] },
    { values: ['', 'Shear Adhesion', ''], isHeader: true },
    { values: ['Dry Condition – Annex B (Clause 5.2)', 'Minimum 1.50 N/mm²', '1.60–1.70 N/mm²'] },
    { values: ['Heat Ageing - Annex B (Clause 5.2)', 'Minimum 1.00 N/mm²', '1.10–1.20 N/mm²'] },
    { values: ['Wet Conditions - Annex B (Clause 5.2)', 'Minimum 1.00 N/mm²', '1.15–1.25 N/mm²'] },
    { values: ['', 'Slip Resistance', ''], isHeader: true },
    { values: ['Slip Resistance – Annex E (Clause 5.5)', '≤ 0.5 mm', '0.25–0.40 mm'] },
    { values: ['Deformability (S1) - Annex F (Clause 5.6)', '≥ 2.5 mm, < 5 mm', '2.60–2.80 mm'] }
  ],
  
  coverage: "Approx. 55 Sft per 20 kg pack using ¼\" x ¼\" (6mm x 6mm) square notched trowel for a bed of 3mm. (Can be used up to a maximum bed thickness of 12 mm). Coverage will vary depending on trowel notch size, type and size of tile, and substrate smoothness and evenness.",
  
  technicalImages: [technical1, technical2, technical3, technical4],
  
  // EX-5 specific accordion items
  accordionItems: [
    {
      title: "Key Features And Benefits",
      content: (
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Single component, just add water</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>High strength, polymer modified</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Economical & Easy to use</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Can be used up to a maximum of 12 mm bed thickness</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Bonds to various substrates</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Complies with EN / ISO with a C2TES1 classification</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Exceeds IS 15477:2019 – Type 3TS1 Adhesive standards</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Water and shock resistant</p>
          </li>
        </ul>
      )
    },
    {
      title: "SUBSTRATES",
      content: (
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Concrete & Concrete Masonry</p>
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
            <p>Ceramic tile, and Natural Stone</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>Glass mosaic tile</p>
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
            <p>Cement Terrazzo</p>
          </li>
        </ul>
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
            <p>IS 15477:2019 - Type: 3TS1</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p>EN 12004 / ISO: C2TES1</p>
          </li>
        </ul>
      )
    },
    {
      title: "APPLICATIONS",
      content: (
        <div className="space-y-4">
          <p>Designed especially for interior and exterior floor and wall installations of all types of ceramic tile, vitreous/vitrified, semi-vitreous tile, glass mosaic tiles, precast terrazzo, and natural stones over concrete and on various substrates. Good underwater shear bond allows this product to be used in wet areas like swimming pools, water bodies, and washrooms. It can also be used for tile-on-tile applications and as a slurry bond adhesive in wet-on-wet applications.</p>
        </div>
      )
    },
    {
      title: "TECHNICAL DATA",
      content: (
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p><strong>Performance Properties:</strong> EX-5 Adhesive mixed with Water</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <p><strong>Applicable Standards:</strong> EN 12004, ISO 13007; IS 15477:2019</p>
          </li>
        </ul>
      )
    }
  ],
  
  // EX-5 specific application steps
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
      image: technicalImage3,
      description: "Add 20 Kg EX-5 Thin Set Adhesive in to water and mix it till attains Uniform Paste",
      altText: "Step 3: Add EX-5 adhesive powder"
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
      description: "Spread the material backside of the tile also (If tile size is More than 12X12)",
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
      description: "For Foot Traffic wait up to 24 Hrs",
      altText: "Step 12: Wait for curing"
    },
    {
      image: technicalImage13,
      description: "After 24 Hrs you can do the grouting",
      altText: "Step 13: Apply grout"
    }
  ],
  
  // EX-5 specific installation tabs (standard format)
  installationTabs: [
    {
      label: "Surface Preparation",
      content: [
        "Temperature and Surface Requirements:",
        "Ensure surfaces are between 40°F (4°C) and 104°F (40°C).",
        "Surfaces must be structurally sound, clean, and free of dirt, oil, grease, loose peeling paint, laitance, concrete sealers, or curing compounds.",
        "Surfaces should be true to plumb, with slabs accurate to within ¼\" (6mm) in 10 ft (3m).",
        "Rough or uneven concrete surfaces should be smoothed with Screed/Plaster material to achieve a wood float (or better) finish.",
        "Dry, dusty concrete slabs or masonry should be dampened, and excess water must be swept off.",
        "Installation may proceed on a damp surface."
      ]
    },
    {
      label: "Mixing",
      content: [
        "Place clean, potable water into a clean mixing bowl.",
        "Add Lexora EX-5 powder into the mixing bowl.",
        "Use approximately 5 - 5.5 litre of water for 20 kg of powder.",
        "Mix with a slow-speed mixer to a smooth, trowelable consistency.",
        "Allow adhesive to slake for 5 minutes.",
        "Adjust consistency if necessary.",
        "Remix and apply with the proper sized notched trowel.",
        "Contact Lexora technical services for large format tile or stone installations on exterior surfaces."
      ]
    },
    {
      label: "Application",
      content: [
        "Apply adhesive to the substrate with the flat side of the trowel, pressing firmly to work into the surface.",
        "Comb on additional adhesive with the notched side.",
        "Use the proper sized notched trowel to ensure full bedding of the tile.",
        "Spread as much adhesive as can be covered with tile in 10 minutes.",
        "Back butter large format tiles (> 12\" x 12\") to provide full bedding and firm support.",
        "Place tiles into the wet, sticky adhesive and beat in using a beating block and rubber mallet to embed tile and adjust the level.",
        "Periodically check adhesive for complete coverage by removing a tile and inspecting bedding adhesive transfer onto the back of the tile.",
        "Use spacers to provide grout joints between tiles.",
        "The joint width shall be as per the recommendation of the architect/engineer.",
        "Remove the spacers when the adhesive is set firm.",
        "If the adhesive is skinned over (not sticky), remove and replace with fresh adhesive"
      ]
    },
    {
      label: "Grouting",
      content: [
        "Grout installation should commence after a minimum of 24 hours of curing time at 70°F (21°C).",
        "Use Lexora Unsanded Grout mixed with Lexora Grout Admix- KGA-01.",
        "For maximum stain resistance of internal spacer joints applications, use Lexora KE-100 Stainfree Grout."
      ]
    },
    {
      label: "Precautions & Note",
      content: [
        "Install tile/stone on external walls and floors with joints by creating spaces between tiles/stones.",
        "Fill joints with Lexora Unsanded grout mixed with Lexora KGA-01 grout admixture.",
        "Absence of spacer joints can lead to surface movements pushing tiles/stones away from the substrate, causing de-bonding.",
        "Ensure exterior tile/stone installations have joints (spaces) on the periphery.",
        "Prevent tile/stone from being bound by the peripheral masonry work or plaster.",
        "Not recommended for direct use onto gypsum plaster (wall finishes), paint, or metal.",
        "New concrete slabs should be damp-cured and must be 28 days old before application.",
        "No minimum cure time is required for concrete slabs when thin-set mortar is mixed with a latex additive.",
        "Expansion joints must be included in the tile work at all construction or expansion joints in the substrate.",
        "Do not cover expansion joints with thin set mortar.",
        "For tile or stone installations on plywood and wood substrates, Lexora PU-L29 is recommended.",
        "It is essential to remove the mesh first for all stones with a back-protection mesh.",
        "Also, remove the epoxy layer by light grinding to ensure a perfect bond with the adhesive.",
        "Before installing tiles or stones on concrete ceilings and cement-based substrates, check the pull-off strength of the substrate.",
        "Be aware that cement-based substrates generally have weak cohesive strength.",
        "This check is essential for all overhead installations."
      ]
    },
    {
      label: "Limitation",
      content: [
        "Coverage will vary depending on trowel notch size, type and size of tile, and substrate smoothness and evenness.",
        "Specifications are subject to change without notification.",
        "Actual field performance will depend on installation methods and site conditions.",
        "The Adhesive mortar conforms to IS 15477:2019 - Type 3TS1 Adhesive.",
        "Packaging: 20 kg bag (Available in Grey and White).",
        "Working Properties at 70°F (21°C): Open Time: 30 minutes Approx, Adjustability Time: 30 minutes Approx, Pot Life: 120 Minutes Approx, Time to Foot Traffic: 24 hours, Time to Heavy Traffic: 28 Days.",
        "Disclaimer: This technical data sheet is provided for informational purposes only. The information is based on our technical knowledge and experience. Due to variations in field conditions, we recommend conducting preliminary tests to ensure product suitability for your specific application."
      ]
    }
  ],
  
  // EX-5 specific FAQs
  faqs: [
    {
      question: "Is EX-5 suitable for exterior tile applications?",
      answer: "Yes, EX-5 Tile Adhesive is not just suitable, it's the perfect choice for your exterior tile applications. This specially formulated adhesive offers excellent adhesion and durability, making it the go-to solution for a variety of outdoor tiling projects."
    },
    {
      question: "Where to Buy the EX-5 Tile Adhesive?",
      answer: "It is considered to be used for exterior and heavy-duty applications, so professionals prefer to buy the bulk quantity. This is available in a 20 kg bag and can be purchased through nearby dealers. The details of the dealers can be found in the section \"Where to Buy.\""
    },
    {
      question: "What makes EX-5 the best choice for exterior floor tiles?",
      answer: "EX-5 is a high-strength polymer-modified premium tile adhesive that offers superior bonding strength and flexibility. This makes it perfect for exterior floor tiles, as it can withstand heavy foot traffic and environmental changes. It is suitable for interior and exterior use, with the benefits of Excellent tensile and shear adhesion, Heat and weather resistance, and Thermal insulation."
    },
    {
      question: "Is EX-5 effective for every kind of exterior substrate?",
      answer: "Be it stone or tile installation, EX-5 is ideal for wall cladding tiles and large format vitrified & ceramic tiles on external floors, providing robust adhesion and long-lasting durability even in harsh outdoor conditions."
    },
    {
      question: "How does EX-5 compare to traditional exterior tile cement?",
      answer: "EX-5 outperforms traditional exterior tile cement by offering enhanced bonding strength, flexibility, and resistance to environmental factors, making it a superior choice for exterior tile projects. Professionals prefer to use technically advanced adhesion offering high strength for heavy-duty tile installation for commercial, industrial, and residential exteriors."
    }
  ]
};
