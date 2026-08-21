// ============================================
// HOME PAGE CARD IMAGES
// Keep these because the Home page uses them.
// ============================================

import sprayer from "../assets/herocards/sprayer.png";
import cultivator from "../assets/herocards/cultivators.png";
import trolley from "../assets/herocards/trolley.png";
import seedDrill from "../assets/herocards/seedDrill.png";
import chiselPlough from "../assets/herocards/chiselPlough.png";
import mulchingBed from "../assets/herocards/mulchingBed.png";
import waterTanker from "../assets/herocards/waterTanker.png";
import punja from "../assets/herocards/punja.png";
import harvestorTrolley from "../assets/herocards/harvestorTrolley.png";
import bhusaFan from "../assets/herocards/bhusaFan.png";
import pata from "../assets/herocards/pata.png";


// ============================================
// PRODUCTS PAGE - ACTUAL PRODUCT IMAGES
// ============================================

// Seed Drill
import seedDrillMain from "../assets/seeddrill/seeddrill1.jpeg";
import seedDrill1 from "../assets/seeddrill/seeddrill1.jpeg";
import seedDrill2 from "../assets/seeddrill/seeddrill2.jpeg";
import seedDrill3 from "../assets/seeddrill/seeddrill3.jpeg";
import seedDrill4 from "../assets/seeddrill/seeddrill4.jpeg";
import seedDrill5 from "../assets/seeddrill/seeddrill5.jpeg";
import seedDrill6 from "../assets/seeddrill/seeddrill6.jpeg";


// Agricultural Sprayer
import agriculturalSprayerMain from "../assets/agriculturesprayer/agsprayer.png";
import agriculturalsprayer1 from "../assets/agriculturesprayer/agriculturesprayer1.jpeg";
import agriculturalsprayer2 from "../assets/agriculturesprayer/agriculturesprayer2.jpeg";
import agriculturalsprayer3 from "../assets/agriculturesprayer/agriculturesprayer3.jpeg";
import agriculturalsprayer4 from "../assets/agriculturesprayer/agriculturesprayer4.jpeg";
import agriculturalsprayer5 from "../assets/agriculturesprayer/agriculturesprayer5.jpeg";
import agriculturalsprayer6 from "../assets/agriculturesprayer/agriculturesprayer6.jpeg";
import agriculturalsprayer7 from "../assets/agriculturesprayer/agriculturesprayer7.jpeg";


// Cultivator
import cultivatorMain from "../assets/cultivator/cultivator.jpeg";
import cultivator1 from "../assets/cultivator/cultivator1.jpeg";
import cultivator2 from "../assets/cultivator/cultivator2.jpeg";
import cultivator3 from "../assets/cultivator/cultivator3.jpeg";


// Tractor Trolley
import tractorTrolleyMain from "../assets/tractortrolley/tractortrolley.jpeg";
import tractorTrolley1 from "../assets/tractortrolley/tractortrolley1.jpeg";
import tractorTrolley2 from "../assets/tractortrolley/tractortrolley2.jpeg";
import tractorTrolley3 from "../assets/tractortrolley/tractortrolley3.jpeg";
import tractorTrolley4 from "../assets/tractortrolley/tractortrolley4.jpeg";
import tractorTrolley5 from "../assets/tractortrolley/tractortrolley5.jpeg";
import tractorTrolley6 from "../assets/tractortrolley/tractortrolley6.jpeg";
import tractorTrolley7 from "../assets/tractortrolley/tractortrolley7.jpeg";


// Water Tanker
import waterTankerMain from "../assets/watertanker/watertanker.jpeg";
import waterTanker1 from "../assets/watertanker/watertanker1.jpeg";
import waterTanker2 from "../assets/watertanker/watertanker2.jpeg";
import waterTanker3 from "../assets/watertanker/watertanker3.jpeg";
import waterTanker4 from "../assets/watertanker/watertanker4.jpeg";


// ============================================
// PRODUCT DATA
// ============================================

export const productsData = [
  {
    id: "seed-drill",
    name: "Seed Drill",

    // Home page card image
    image: seedDrill,

    // Products page main image
    mainImage: seedDrill,

    // Products page scrolling gallery
    images: [
      seedDrill1,
      seedDrill2,
      seedDrill3,
      seedDrill4,
      seedDrill5,
      seedDrill6,
    ],

    category: "Agricultural Implements",

    introduction:
      "Our Seed Drill is designed for efficient and uniform seed placement, helping farmers achieve better sowing accuracy and improved crop growth.",

    features: [
      "Uniform seed placement",
      "Strong and durable construction",
      "Suitable for different soil conditions",
      "Easy to operate and maintain",
    ],

    working:
      "The Seed Drill places seeds at a controlled depth and spacing while the tractor moves across the field, providing consistent sowing throughout the land.",
  },


  {
    id: "agricultural-sprayer",
    name: "Agricultural Sprayer",

    image: sprayer,

    mainImage: agriculturalSprayerMain,

    images: [
      agriculturalsprayer1,
      agriculturalsprayer2,
      agriculturalsprayer3,
      agriculturalsprayer4,
      agriculturalsprayer5,
      agriculturalsprayer6,
      agriculturalsprayer7,
    ],

    category: "Agricultural Implements",

    introduction:
      "Our Agricultural Sprayer provides efficient and uniform spraying of pesticides, fertilizers and other agricultural solutions.",

    features: [
      "Uniform spraying",
      "Strong tank construction",
      "Easy operation",
      "Efficient field coverage",
    ],

    working:
      "The sprayer uses a pump and spray nozzles to distribute liquid evenly across crops while the tractor moves through the field.",
  },


  {
    id: "chisel-plough",
    name: "Chisel Plough",

    image: chiselPlough,

    // Temporary fallback until the Chisel Plough
    // actual-image folder is added.
    mainImage: chiselPlough,

    images: [chiselPlough],

    category: "Agricultural Implements",

    introduction:
      "The Chisel Plough is designed for deep soil loosening and preparation while maintaining the natural structure of the soil.",

    features: [
      "Strong steel construction",
      "Deep soil penetration",
      "Suitable for hard soil",
      "Durable and reliable design",
    ],

    working:
      "The tines penetrate the soil and loosen compacted layers as the implement is pulled by a tractor.",
  },


  {
    id: "cultivator",
    name: "Cultivator",

    image: cultivator,

    mainImage: cultivatorMain,

    images: [
      cultivator1,
      cultivator2,
      cultivator3,
    ],

    category: "Agricultural Implements",

    introduction:
      "Our Cultivator is designed for soil preparation, weed control and breaking up unwanted soil clumps before sowing.",

    features: [
      "Heavy-duty construction",
      "Effective weed removal",
      "Uniform soil cultivation",
      "Easy tractor attachment",
    ],

    working:
      "The cultivator's tines penetrate the soil and break it into smaller particles while removing unwanted weeds.",
  },


  {
    id: "mulching-bed",
    name: "Mulching Bed",

    image: mulchingBed,

    // Temporary fallback until actual Mulching Bed
    // product images are added.
    mainImage: mulchingBed,

    images: [mulchingBed],

    category: "Agricultural Implements",

    introduction:
      "The Mulching Bed is designed to prepare uniform raised beds and support efficient crop cultivation.",

    features: [
      "Uniform bed formation",
      "Strong construction",
      "Easy tractor operation",
      "Suitable for agricultural fields",
    ],

    working:
      "The implement shapes and prepares the soil into uniform beds as it moves through the field.",
  },


  {
    id: "punja",
    name: "Punja",

    image: punja,

    // Temporary fallback until actual Punja
    // product images are added.
    mainImage: punja,

    images: [punja],

    category: "Agricultural Implements",

    introduction:
      "Punja is designed for efficient soil preparation and field operations with a strong and practical construction.",

    features: [
      "Heavy-duty design",
      "Strong working components",
      "Efficient soil preparation",
      "Easy maintenance",
    ],

    working:
      "The working components penetrate and disturb the soil to prepare the field for subsequent agricultural operations.",
  },


  {
    id: "water-tanker",
    name: "Water Tanker",

    image: waterTanker,

    mainImage: waterTankerMain,

    images: [
      waterTanker1,
      waterTanker2,
      waterTanker3,
      waterTanker4,
    ],

    category: "Agricultural Implements",

    introduction:
      "Our Water Tanker provides convenient transportation and distribution of water for agricultural and other farming requirements.",

    features: [
      "Strong water storage tank",
      "Durable chassis",
      "Easy transportation",
      "Suitable for agricultural use",
    ],

    working:
      "The tanker stores water safely and allows it to be transported and distributed wherever required.",
  },


  {
    id: "harvestor-trolley",
    name: "Harvestor Trolley",

    image: harvestorTrolley,

    // Temporary fallback until actual Harvestor Trolley
    // product images are added.
    mainImage: harvestorTrolley,

    images: [harvestorTrolley],

    category: "Agricultural Implements",

    introduction:
      "The Harvestor Trolley is designed for convenient transportation of harvested crops and agricultural materials.",

    features: [
      "Strong load-bearing structure",
      "Durable construction",
      "Easy tractor attachment",
      "Suitable for farm transportation",
    ],

    working:
      "The trolley is attached to a tractor and used to transport harvested crops and materials from the field to the required location.",
  },


  {
    id: "tractor-trolley",
    name: "Tractor Trolley",

    image: trolley,

    mainImage: tractorTrolleyMain,

    images: [
      tractorTrolley1,
      tractorTrolley2,
      tractorTrolley3,
      tractorTrolley4,
      tractorTrolley5,
      tractorTrolley6,
      tractorTrolley7,
    ],

    category: "Agricultural Implements",

    introduction:
      "Our Tractor Trolley is built for reliable transportation of agricultural materials, crops and other farm loads.",

    features: [
      "Heavy-duty construction",
      "High load capacity",
      "Strong chassis",
      "Easy tractor attachment",
    ],

    working:
      "The trolley is connected to a tractor and transports agricultural materials efficiently between the field and storage or processing locations.",
  },


  {
    id: "bhusa-fan",
    name: "Bhusa Fan",

    image: bhusaFan,

    // Temporary fallback until actual Bhusa Fan
    // product images are added.
    mainImage: bhusaFan,

    images: [bhusaFan],

    category: "Agricultural Implements",

    introduction:
      "The Bhusa Fan is designed to assist farmers in handling and moving straw, husk and other lightweight agricultural material.",

    features: [
      "Efficient material handling",
      "Strong construction",
      "Easy operation",
      "Suitable for farm applications",
    ],

    working:
      "The rotating fan mechanism generates airflow to move and distribute lightweight agricultural material efficiently.",
  },


  {
    id: "pata",
    name: "Pata",

    image: pata,

    // Temporary fallback until actual Pata
    // product images are added.
    mainImage: pata,

    images: [pata],

    category: "Agricultural Implements",

    introduction:
      "Pata is designed for levelling and smoothing agricultural fields to create a more uniform soil surface.",

    features: [
      "Effective field levelling",
      "Strong construction",
      "Uniform soil finishing",
      "Easy tractor operation",
    ],

    working:
      "The implement is pulled across the field, distributing soil and removing uneven surfaces to create a smoother field.",
  },
];