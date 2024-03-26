import { RiHomeSmile2Fill } from "react-icons/ri";
import { TbInfoCircleFilled } from "react-icons/tb";
import { BiSolidPackage, BiSolidContact } from "react-icons/bi";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { BiSolidHotel } from "react-icons/bi";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { IoRestaurant } from "react-icons/io5";

// NAVIGATION
export const NAV_LINKS = [
  {
    href: "/",
    key: "home",
    label: "Home",
    icon: <RiHomeSmile2Fill className="text-2xl" />,
  },
  {
    href: "/faq",
    key: "FAQ",
    label: "FAQ",
    icon: <TbInfoCircleFilled className="text-2xl" />,
  },
  {
    href: "/packages",
    key: "packages",
    label: "Packages",
    icon: <BiSolidPackage className="text-2xl" />,
  },
  {
    href: "/contact",
    key: "contact",
    label: "Contact",
    icon: <BiSolidContact className="text-2xl" />,
  },
];

//CATEGORIES SECTION
export const CATEGORIES = [
  {
    title: "Places",
    icon: <FaGlobeAmericas className="text-2xl" />,
  },
  {
    title: "Schools",
    icon: <MdSchool className="text-2xl" />,
  },
  {
    title: "Hotels",
    icon: <BiSolidHotel className="text-2xl" />,
  },
  {
    title: "Shopping",
    icon: <PiShoppingBagOpenFill className="text-2xl" />,
  },
  {
    title: "Restaurant",
    icon: <IoRestaurant className="text-2xl" />,
  },
];

export const FEATURE = [
  {
    title: "London",
    path: "/travelImages/london.png",
    des: "3 places",
  },
  {
    title: "Rio De Janeiro",
    path: "/rio-de-janeiro-brazil.png",
    des: "10 places",
  },
  // {
  //   title: "Prague Czech",
  //   path: "/prague_czech.png",
  //   des: "4 places",
  // },
  {
    title: "Chefchaouen, Morocco",
    path: "/travelImages/chefchaouen, morocco.png",
    des: "12 places",
  },
  {
    title: "Sydney",
    path: "/travelImages/sydney.png",
    des: "2 places",
  },
  {
    title: "Vienna",
    path: "/travelImages/vienna.png",
    des: "3 places",
  },
  // {
  //   title: "Austria",
  //   path: "/austria.jpeg",
  //   des: "2 places",
  // },
  {
    title: "Cape Town",
    path: "/travelImages/Cape-Town-SAf.png",
    des: "2 places",
  },
  {
    title: "San Miguel de Allende ",
    path: "/travelImages/San Miguel de Allende_mexico.png",
    des: "4 places",
  },
  {
    title: "Toronto",
    path: "/travelImages/toronto.png",
    des: "2 places",
  },
  {
    title: "Bergen",
    path: "/travelImages/bergen_norway.png",
    des: "7 places",
  },
  {
    title: "San Francisco",
    path: "/travelImages/San-Francisco.png",
    des: "4 places",
  },
  // {
  //   title: "Paris",
  //   path: "/paris france.png",
  //   des: "2 places",
  // },
];

//TESTIMONIAL SECTION
// TESTIMONIALS.ts

export const TESTIMONIALS = [
  {
    title: "James Olawale",
    profession: "Director, Nova Gold",
    path: "/travelImages/james_olawale.jpeg",
    desc: "Grateful for the platform that turned my digital marketing skills into a passport. I secured a project in Sydney, Australia, allowing me to not only explore Down Under but also build lasting connections in the industry.",
  },
  {
    title: "Tolu Akindolie",
    profession: "Manager, Decagon",
    path: "/travelImages/Tolu Akindolie.jpeg",
    desc: "Fantastic Experience, Immediately after acquiring as much skill as I can to be a Mechanic on Dealo, I applied to work in Moscow and I got approved. Now I make a six-figure salary, and I work.",
  },
  {
    title: "Chen Wei",
    profession: "Remote Software Developer",
    path: "travelImages/Chen_Wei.jpeg",
    desc: "From coding in my room to coding overseas! The platform enabled me to land remote gigs. Toronto became my workplace, and the multicultural atmosphere fueled both my professional growth and travel experiences.",
  },
  {
    title: "Richard Anthony",
    profession: "Travel Blogger",
    path: "/travelImages/download.jpeg",
    desc: "Blogging my way around the world! The skills I gained opened doors. I'm not just traveling; I'm sharing my experiences. San Francisco became my base, and the platform made this journey of a lifetime possible.",
  },
  {
    title: "James Martinez",
    profession: "E-commerce Entrepreneur",
    path: "/travelImages/360_F_517432572_Q7cWReFsAWbFjmOCxbJUnMeEbLacZCEl.jpeg",
    desc: "Started as a seller, became a global entrepreneur. Thanks to the platform, my e-commerce skills took me to Vienna, where I established connections and expanded my business internationally.",
  },
  {
    title: "Aisha Nwosu",
    profession: "Freelance Graphic Designer",
    path: "/travelImages/203640854-dont-let-anyone-steal-your-happiness-a-happy-young-woman-posing-against-a-dark-background.jpeg",
    desc: "I owe my thriving freelance career to the skills I acquired on this platform. After mastering graphic design, I landed a project based in Paris. Thanks to the income, I explored the enchanting streets of the city of lights!",
  },
  {
    title: "Nina Dosunmu",
    profession: "Language Tutor",
    path: "/travelImages/face-portrait-manager-happy-black-600nw-2278812777.webp",
    desc: "Transforming language skills into a global adventure. I taught English online, and my success story took me to Bergen, Norway. Now, I'm not just teaching; I'm exploring and learning from diverse cultures.",
  },
];

export const PACKAGES = [
  {
    title: "Singapore",
    price: "$240",
    path: "https://res.cloudinary.com/dtujpq8po/image/upload/v1704479534/cryptoAssets/travelImages/singapore_hy8ahz.jpg",
    desc: "Embark on a transformative experience in the Lion City, Singapore – the shopper's paradise. Immerse yourself in the rich cultural tapestry while applying your skills acquired on our platform. Explore opportunities in both blue and white-collar sectors, potentially earning six figures in revenue. Shape your story in the heart of innovation and prosperity.",
    wantedJobs: [
      "Plumbers",
      "Fashion Designers",
      "Farmer",
      "Mechanical Engineer",
      "Nurses",
      "Teacher",
    ],
  },
  {
    title: "Kyoto, Japan",
    price: "$300",
    path: "https://res.cloudinary.com/dtujpq8po/image/upload/v1704479763/cryptoAssets/travelImages/Kyoto_Japan_oioxn0.jpg",
    desc: "Discover the timeless beauty of Kyoto, Japan – a city steeped in tradition and elegance. Dive into a culture that cherishes ancient temples, tea ceremonies, and cherry blossoms. Seize the chance to apply your skills in a land known for technological innovation.",
    wantedJobs: [
      "Geisha",
      "Software Developers",
      "Tea Masters",
      "Traditional Craftsmen",
      "Tour Guides",
      "Sushi Chefs",
    ],
  },
  {
    title: "Hallstatt, Austria",
    price: "$280",
    path: "https://res.cloudinary.com/dtujpq8po/image/upload/v1704479161/cryptoAssets/travelImages/halstatt_austria_tijzho.png",
    desc: "Escape to the fairytale town of Hallstatt, Austria, nestled by the pristine Hallstätter See. Immerse yourself in the charm of cobblestone streets and alpine beauty. Embrace opportunities in arts and crafts.",
    wantedJobs: [
      "Woodworkers",
      "Alpine Guides",
      "Folk Musicians",
      "Tourist Photographers",
      "Ski Instructors",
    ],
  },
  {
    title: "Edinburgh and Leith, UK",
    price: "$320",
    path: "https://res.cloudinary.com/dtujpq8po/image/upload/v1704478870/cryptoAssets/travelImages/edinburgh_and_leith_uk_zbgroc.png",
    desc: "Journey to Edinburgh and Leith, UK, where medieval history meets vibrant modernity. Immerse yourself in the rich cultural tapestry and explore the iconic Edinburgh Castle. Opportunities abound in fields like Literature, Tourism, Software Development, Whisky Distilling, Bagpipe Instruction, and Sustainable Energy.",
    wantedJobs: [
      "Writers",
      "Tourism Managers",
      "Software Developers",
      "Whisky Distillers",
      "Bagpipe Instructors",
      "Sustainable Energy Experts",
    ],
  },
  {
    title: "Amsterdam, Netherlands",
    price: "$280",
    path: "https://res.cloudinary.com/dtujpq8po/image/upload/v1704478764/cryptoAssets/travelImages/amsterdam_netherlands_txulyz.png",
    desc: "Experience the eclectic charm of Amsterdam, Netherlands – a city of canals, art, and vibrant nightlife. Navigate the picturesque waterways and embrace opportunities in fields like Urban Planning, Cycling Infrastructure, Tulip Cultivation, Digital Marketing, Cheese Making, and Sustainable Architecture.",
    wantedJobs: [
      "Urban Planners",
      "Cycling Infrastructure Designers",
      "Tulip Cultivators",
      "Digital Marketers",
      "Cheese Makers",
      "Sustainable Architects",
    ],
  },
  {
    title: "Seville, Spain",
    price: "$300",
    path: "https://res.cloudinary.com/dtujpq8po/image/upload/v1704479613/cryptoAssets/travelImages/seville_spain_ybboyp.png",
    desc: "Savor the passion and vibrancy of Seville, Spain – a city known for flamenco, historic architecture, and lively festivals. Explore opportunities in Flamenco Dance Instruction, Olive Farming, Spanish Cuisine, Tourism Management, Bullfighting Event Planning, and Solar Energy.",
    wantedJobs: [
      "Flamenco Dance Instructors",
      "Olive Farmers",
      "Spanish Cuisine Experts",
      "Tourism Managers",
      "Bullfighting Event Planners",
      "Solar Energy Experts",
    ],
  },
  {
    title: "St. Petersburg, Russia",
    price: "$320",
    path: "https://res.cloudinary.com/dtujpq8po/image/upload/v1704479485/cryptoAssets/travelImages/petersburg_russia_bzc8c2.png",
    desc: "Step into the grandeur of St. Petersburg, Russia, with its imperial palaces and artistic heritage. Immerse yourself in the world of literature, ballet, and classical music. Opportunities await in fields like Literature Translation, Ballet Choreography, Classical Music Composition, Winter Tourism, Vodka Distillation, and Aerospace Engineering.",
    wantedJobs: [
      "Literature Translators",
      "Ballet Choreographers",
      "Classical Music Composers",
      "Winter Tourism Experts",
      "Vodka Distillers",
      "Aerospace Engineers",
    ],
  },
  {
    title: "Luang Prabang, Laos",
    price: "$260",
    path: "https://res.cloudinary.com/dtujpq8po/image/upload/v1704479172/cryptoAssets/travelImages/laung_prabang_laos_fklbdf.jpg",
    desc: "Discover the tranquil beauty of Luang Prabang, Laos, nestled between rivers and mountains. Immerse yourself in the spirituality of Buddhist temples and traditional ceremonies. Explore opportunities in Bamboo Crafts, Eco-Tourism, Meditation Instruction, Rice Farming, Silk Weaving, and Elephant Conservation.",
    wantedJobs: [
      "Bamboo Craftsmen",
      "Eco-Tourism Guides",
      "Meditation Instructors",
      "Rice Farmers",
      "Silk Weavers",
      "Elephant Conservationists",
    ],
  },
  {
    title: "Bruges, Belgium",
    price: "$300",
    path: "https://res.cloudinary.com/dtujpq8po/image/upload/v1704478760/cryptoAssets/travelImages/Bruges_Belgium_jm2mp8.jpg",
    desc: "Get lost in the medieval charm of Bruges, Belgium, with its canals and cobblestone streets. Indulge in Belgian chocolate and waffles while exploring opportunities in Chocolate Making, Beer Brewing, Lace Crafting, Canal Boat Guiding, Medieval Architecture Restoration, and Sustainable Urban Planning.",
    wantedJobs: [
      "Chocolate Makers",
      "Beer Brewers",
      "Lace Crafters",
      "Canal Boat Guides",
      "Medieval Architecture Restorers",
      "Sustainable Urban Planners",
    ],
  },
  // Add more countries as needed...
];
