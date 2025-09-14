import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Sword, Apple, Templar, Target, Shield, Crown, Zap, Heart, Users, 
  ArrowLeft, Truck, Crosshair, ShieldCheck, Car, Home, Star,
  ChevronRight, Gamepad2
} from 'lucide-react';

const GamePortal = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('characters');
  const [isVisible, setIsVisible] = useState({});
  const [selectedSubGame, setSelectedSubGame] = useState(null); 

  const games = [
    {
      id: 'cod-mw',
      name: 'Call of Duty: Modern Warfare',
      series: 'Call of Duty',
      description: 'Elite military operations in modern warfare scenarios with tactical combat',
      gradient: 'from-green-800 via-green-700 to-olive-600',
      image: 'https://gaming-cdn.com/images/products/6936/616x353/call-of-duty-modern-warfare-remastered-remastered-playstation-4-game-playstation-store-europe-cover.jpg?v=1730133958',
      icon: Target,
      categories: ['characters', 'weapons', 'vehicles']
    },
    {
      id: 'cod-mw2',
      name: 'Call of Duty: Modern Warfare 2',
      series: 'Call of Duty',
      description: 'Continuation of the Modern Warfare saga with intense global conflicts',
      gradient: 'from-slate-800 via-gray-700 to-slate-600',
      image: 'https://i.ebayimg.com/images/g/RScAAOSwyexmjEdw/s-l1200.jpg',
      icon: Shield,
      categories: ['characters', 'weapons', 'vehicles']
    },
    {
      id: 'ac-series',
      name: "Assassin's Creed Collection",
      series: "Assassin's Creed",
      description: 'Historical adventures spanning centuries with stealth and parkour',
      gradient: 'from-red-800 via-amber-700 to-yellow-600',
      image: 'https://www.yourdecoration.com/cdn/shop/files/gbeye-fp4070-assassins-creed-characters-poster-61x91-5cm_60a115ba-9f78-4a9f-99ed-93a930d0119f.jpg?v=1756128956',
      icon: Sword,
      categories: ['characters', 'weapons', 'armor', 'locations'],
      games: [
      {
        id: 'ac1',
        name: "Assassin's Creed",
        year: 2007,
        description: "Altaïr Ibn-La'Ahad’s journey during the Third Crusade, uncovering Templar plots.",
        image: "https://upload.wikimedia.org/wikipedia/en/3/34/Assassin%27s_Creed_cover.jpg",
        categories: ['characters', 'weapons', 'locations']
      },
      {
        id: 'ac2',
        name: "Assassin's Creed II",
        year: 2009,
        description: "Ezio Auditore’s rise as an Assassin during the Italian Renaissance.",
        image: "https://upload.wikimedia.org/wikipedia/en/0/03/Assassins_Creed_2_Box_Art.JPG",
        categories: ['characters', 'weapons', 'locations']
      },
      {
        id: 'ac-brotherhood',
        name: "Assassin's Creed Brotherhood",
        year: 2010,
        description: "Ezio builds and leads the Brotherhood in Rome against the Borgia family.",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Assassins_Creed_brotherhood_cover.jpg/220px-Assassins_Creed_brotherhood_cover.jpg",
        categories: ['characters', 'weapons', 'locations']
      },
      {
        id: 'ac-revelations',
        name: "Assassin's Creed Revelations",
        year: 2011,
        description: "Ezio uncovers Altaïr’s legacy while exploring Constantinople.",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6d/Assassins_Creed_Revelations_Cover.jpg",
        categories: ['characters', 'weapons', 'locations']
      },
      {
        id: 'ac3',
        name: "Assassin's Creed III",
        year: 2012,
        description: "Connor Kenway fights during the American Revolution, balancing heritage and freedom.",
        image: "https://upload.wikimedia.org/wikipedia/en/0/03/Assassin%27s_Creed_III_Cover.jpg",
        categories: ['characters', 'weapons', 'locations']
      },
      {
        id: 'ac4',
        name: "Assassin's Creed IV: Black Flag",
        year: 2013,
        description: "Edward Kenway’s pirate adventures in the Caribbean during the Golden Age of Piracy.",
        image: "https://upload.wikimedia.org/wikipedia/en/7/79/Assassin%27s_Creed_IV_-_Black_Flag_cover.jpg",
        categories: ['characters', 'weapons', 'ships', 'locations']
      },
      {
        id: 'ac-rogue',
        name: "Assassin's Creed Rogue",
        year: 2014,
        description: "Shay Cormac’s fall from Assassin to Templar during the Seven Years' War.",
        image: "https://upload.wikimedia.org/wikipedia/en/b/bd/Assassins_Creed_Rogue_cover.jpg",
        categories: ['characters', 'weapons', 'locations']
      },
      {
        id: 'ac-unity',
        name: "Assassin's Creed Unity",
        year: 2014,
        description: "Arno Dorian navigates the chaos of the French Revolution in Paris.",
        image: "https://upload.wikimedia.org/wikipedia/en/3/35/Assassin%27s_Creed_Unity_cover.jpg",
        categories: ['characters', 'weapons', 'locations']
      },
      {
        id: 'ac-syndicate',
        name: "Assassin's Creed Syndicate",
        year: 2015,
        description: "Twins Jacob and Evie Frye liberate London during the Industrial Revolution.",
        image: "https://upload.wikimedia.org/wikipedia/en/5/50/Assassin%27s_Creed_Syndicate_cover.jpg",
        categories: ['characters', 'weapons', 'locations']
      },
      {
        id: 'ac-origins',
        name: "Assassin's Creed Origins",
        year: 2017,
        description: "Bayek of Siwa uncovers the origins of the Brotherhood in Ancient Egypt.",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8b/Assassin%27s_Creed_Origins_Cover_Art.png",
        categories: ['characters', 'weapons', 'locations']
      },
      {
        id: 'ac-odyssey',
        name: "Assassin's Creed Odyssey",
        year: 2018,
        description: "A mercenary in Ancient Greece during the Peloponnesian War chooses their fate.",
        image: "https://upload.wikimedia.org/wikipedia/en/9/99/Assassin%27s_Creed_Odyssey_cover_art.jpg",
        categories: ['characters', 'weapons', 'locations']
      },
      {
        id: 'ac-valhalla',
        name: "Assassin's Creed Valhalla",
        year: 2020,
        description: "Eivor leads their Viking clan into England, forging alliances and battling enemies.",
        image: "https://upload.wikimedia.org/wikipedia/en/3/36/Assassin%27s_Creed_Valhalla_cover.jpg",
        categories: ['characters', 'weapons', 'locations', 'settlements']
      }
    ]
  }
];
    

  const gameData = {
    'cod-mw': {
      characters: [
        {
          id: 1,
          name: "Captain Price",
          role: "Task Force 141 Leader",
          description: "Veteran SAS officer and leader of Task Force 141. Known for his tactical expertise, iconic mustache, and unwavering loyalty.",
          traits: ["Leadership", "Tactical Genius", "Combat Veteran"],
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop&crop=face",
          icon: Target
        },
        {
          id: 2,
          name: "Soap MacTavish",
          role: "SAS Sergeant",
          description: "Scottish SAS sergeant known for his demolitions expertise and quick thinking under pressure.",
          traits: ["Demolitions Expert", "Quick Thinking", "Loyal Soldier"],
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
          icon: Zap
        },
        {
          id: 14,
          name: "Sergeant Foley",
          role: "Army Ranger Sergeant",
          description: "Experienced Army Ranger sergeant leading troops through intense urban warfare in Washington D.C.",
          traits: ["Urban Combat Expert", "Squad Leader", "Battle-Hardened"],
          image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=400&fit=crop&crop=face",
          icon: Shield
        },
        {
          id: 15,
          name: "Corporal Dunn",
          role: "Army Ranger Corporal",
          description: "Reliable Army Ranger corporal serving under Sergeant Foley in the defense of America.",
          traits: ["Reliability", "Team Support", "Combat Ready"],
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop&crop=face",
          icon: Users
        },
        {
          id: 16,
          name: "Private Ramirez",
          role: "Army Ranger Private",
          description: "Young but skilled Army Ranger private fighting to defend the homeland against invasion.",
          traits: ["Determination", "Quick Learner", "Brave Soldier"],
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
          icon: Star
        },
        {
          id: 17,
          name: "General Shepherd",
          role: "U.S. Army General",
          description: "High-ranking U.S. Army general with complex motivations and controversial methods.",
          traits: ["Strategic Mind", "Authority", "Controversial"],
          image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=400&fit=crop&crop=face",
          icon: Crown
        },
        {
          id: 18,
          name: "Gaz",
          role: "SAS Operative",
          description: "Elite SAS operative and trusted member of Captain Price's team, known for his loyalty and skill.",
          traits: ["Elite Training", "Loyal Teammate", "Precision Shooter"],
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&crop=face",
          icon: Crosshair
        },
        {
          id: 19,
          name: "Roach",
          role: "Task Force 141 Operative",
          description: "Silent but deadly Task Force 141 operative specializing in covert operations and stealth missions.",
          traits: ["Stealth Operations", "Silent Professional", "Covert Specialist"],
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face",
          icon: Shield
        },
        {
          id: 20,
          name: "MacMillan",
          role: "SAS Captain",
          description: "Experienced SAS captain and Price's former mentor, known for his sniper expertise and tactical knowledge.",
          traits: ["Sniper Expert", "Mentor Figure", "Tactical Wisdom"],
          image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=300&h=400&fit=crop&crop=face",
          icon: Target
        }
      ],
      weapons: [
        {
          id: 3,
          name: "M4A1 Carbine",
          type: "Assault Rifle",
          description: "Standard issue assault rifle with excellent versatility and reliability in combat situations.",
          specs: ["5.56×45mm NATO", "30-round magazine", "Full-auto capable"],
          image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=300&h=200&fit=crop",
          icon: Crosshair
        },
        {
          id: 4,
          name: "Desert Eagle",
          type: "Handgun",
          description: "High-powered semi-automatic pistol favored by special forces for its stopping power.",
          specs: [".50 AE caliber", "7-round magazine", "Semi-automatic"],
          image: "https://images.unsplash.com/photo-1544717684-7ba720c2de70?w=300&h=200&fit=crop",
          icon: Crosshair
        }
      ],
      vehicles: [
        {
          id: 5,
          name: "Humvee",
          type: "Military Vehicle",
          description: "All-terrain military utility vehicle designed for harsh combat environments.",
          specs: ["4WD capability", "Armored variant", "Multi-role platform"],
          image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=200&fit=crop",
          icon: Truck
        }
      ]
    },
    'cod-mw2': {
      characters: [
        {
          id: 6,
          name: "Ghost",
          role: "Task Force 141 Operative",
          description: "Elite SAS operative known for his distinctive skull mask and exceptional combat skills in covert operations.",
          traits: ["Stealth Expert", "Marksman", "Silent Operator"],
          image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=400&fit=crop&crop=face",
          icon: Shield
        }
      ],
      weapons: [
        {
          id: 7,
          name: "ACR",
          type: "Assault Rifle",
          description: "Advanced Combat Rifle with superior accuracy and customization options.",
          specs: ["6.8mm Remington SPC", "30-round magazine", "Modular design"],
          image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=300&h=200&fit=crop",
          icon: Crosshair
        }
      ],
      vehicles: [
        {
          id: 8,
          name: "AH-64 Apache",
          type: "Attack Helicopter",
          description: "Twin-turboshaft attack helicopter with advanced targeting systems.",
          specs: ["Twin-engine", "Hellfire missiles", "30mm chain gun"],
          image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=300&h=200&fit=crop",
          icon: Zap
        }
      ]
    },
    'ac-series': {
      characters: [
      {
        "id": 1,
        "name": "Altaïr Ibn-La'Ahad",
        "role": "Master Assassin",
        "description": "The central protagonist of Assassin's Creed I, tasked with eliminating nine corrupt figures during the Third Crusade.",
        "traits": ["Legendary Assassin", "Innovative", "Disciplined"],
        "game": "Assassin's Creed",
        "image": "https://cdn.displate.com/artwork/270x380/2021-11-19/93c5a588f67b8445c2e930808239e29c_52984f55e1e92f7fb1ab75fc7060c5ce.jpg",
        "icon": "Sword"
      },
      {
        "id": 2,
        "name": "Malik Al-Sayf",
        "role": "Assassin Bureau Leader",
        "description": "Altaïr’s rival turned ally, leader of the Jerusalem bureau and a loyal follower of the Creed despite losing his arm and brother.",
        "traits": ["Loyal", "Resilient", "Sharp-Witted"],
        "game": "Assassin's Creed",
        "image": "https://64.media.tumblr.com/3031159f35beb25df95342e2b48e2558/tumblr_inline_o0dygjtHSB1qlr65v_500.jpg",
        "icon": "Shield"
      },
      {
        "id": 3,
        "name": "Maria Thorpe",
        "role": "Templar Turned Assassin",
        "description": "Originally a Templar agent sent to kill Altaïr, Maria eventually joined the Assassins and became his wife.",
        "traits": ["Determined", "Strategic", "Fierce"],
        "game": "Assassin's Creed",
        "image": "https://gamesandstories.home.blog/wp-content/uploads/2019/07/mariathorpe.png",
        "icon": "Heart"
      },
      {
        "id": 4,
        "name": "Kadar Al-Sayf",
        "role": "Assassin Novice",
        "description": "Malik’s younger brother and fellow Assassin, killed during the mission at Solomon’s Temple.",
        "traits": ["Brave", "Loyal", "Tragic"],
        "game": "Assassin's Creed",
        "image": "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/11/Kadar-Al-Sayf.jpg?q=50&fit=crop&w=825&dpr=1.5",
        "icon": "Users"
      },
      {
        "id": 5,
        "name": "Al Mualim",
        "role": "Mentor / Final Target",
        "description": "Altaïr's mentor and secret Templar, revealed to be the mastermind behind the corruption.",
        "traits": ["Wise", "Deceptive", "Philosophical"],
        "game": "Assassin's Creed",
        "image": "https://i.ytimg.com/vi/tvt-oAZ8JP8/maxresdefault.jpg",
        "icon": "Apple"
      },
      {
        "id": 6,
        "name": "Tamir",
        "role": "Target - Black Market Merchant",
        "description": "A corrupt weapons dealer in Damascus, known for exploiting the poor.",
        "traits": ["Greedy", "Cruel", "Arrogant"],
        "game": "Assassin's Creed",
        "image": "https://lparchive.org/Assassins-Creed/Update%2007/1-07.png",
        "icon": "Target"
      },
      {
        "id": 7,
        "name": "Talal",
        "role": "Target - Slave Trader",
        "description": "A slaver operating in Jerusalem, responsible for abducting innocents.",
        "traits": ["Sadistic", "Secretive", "Wealthy"],
        "game": "Assassin's Creed",
        "image": "https://lparchive.org/Assassins-Creed/Update%2013/1-13.png",
        "icon": "Truck"
      },
      {
        "id": 8,
        "name": "Garnier de Naplouse",
        "role": "Target - Hospitaler Leader",
        "description": "A twisted doctor who experiments on patients in Acre.",
        "traits": ["Mad Scientist", "Fanatical", "Unethical"],
        "game": "Assassin's Creed",
        "image": "https://lparchive.org/Assassins-Creed/Update%2010/1-10.png",
        "icon": "Crosshair"
      },
      {
        "id": 9,
        "name": "Abu'l Nuqoud",
        "role": "Target - Wealthy Merchant",
        "description": "A corrupt nobleman who hoards wealth and manipulates politics in Damascus.",
        "traits": ["Greedy", "Manipulative", "Paranoid"],
        "game": "Assassin's Creed",
        "image": "https://lparchive.org/Assassins-Creed/Update%2015/1-15.png",
        "icon": "Crown"
      },
      {
        "id": 10,
        "name": "William of Montferrat",
        "role": "Target - Crusader Leader",
        "description": "A brutal military commander in Acre, known for his oppressive rule.",
        "traits": ["Authoritarian", "Strategic", "Merciless"],
        "game": "Assassin's Creed",
        "image": "https://i.ytimg.com/vi/aIdL-F3yga0/maxresdefault.jpg",
        "icon": "ShieldCheck"
      },
      {
        "id": 11,
        "name": "Majd Addin",
        "role": "Target - Jerusalem Magistrate",
        "description": "A sadistic judge who publicly executes innocents to maintain fear.",
        "traits": ["Cruel", "Fanatical", "Judgmental"],
        "game": "Assassin's Creed",
        "image": "https://i.ytimg.com/vi/2sPUyrPf-74/maxresdefault.jpg",
        "icon": "Star"
      },
      {
        "id": 12,
        "name": "Jubair al Hakim",
        "role": "Target - Scholar",
        "description": "A radical scholar who burns books and suppresses knowledge in Damascus.",
        "traits": ["Zealous", "Anti-Intellectual", "Dangerous"],
        "game": "Assassin's Creed",
        "image": "https://i.ytimg.com/vi/hJkvt18EtY8/maxresdefault.jpg",
        "icon": "Zap"
      },
      {
        "id": 13,
        "name": "Sibrand",
        "role": "Target - Teutonic Leader",
        "description": "A paranoid naval commander in Acre, obsessed with secrecy and control.",
        "traits": ["Paranoid", "Militant", "Delusional"],
        "game": "Assassin's Creed",
        "image": "https://i.ytimg.com/vi/T4NMGa57qVA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAh0aMZo6KseNVUwXReRBhtg6OjSg",
        "icon": "Car"
      },
      {
        "id": 14,
        "name": "Robert de Sablé",
        "role": "Target - Templar Grand Master",
        "description": "Altaïr's final target before Al Mualim, a powerful Templar leader.",
        "traits": ["Strategic", "Fanatical", "Commanding"],
        "game": "Assassin's Creed",
        "image": "https://lparchive.org/Assassins-Creed/Update%2025/1-25.jpg",
        "icon": "Templar"
      },
     {
    "id": 1,
    "name": "Ezio Auditore",
    "role": "Assassin",
    "description": "The central protagonist of Assassin's Creed II, who becomes a legendary Assassin after his family's betrayal.",
    "traits": ["Charismatic", "Vengeful", "Strategic"],
    "game": "Assassin's Creed II",
    "icon": "Sword",
    "image": "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/449BBgnc3Q1ha2IN9rh3bR/eb9a6d17615e1480d12e9aab24804c67/ac-ezio-hero-mobile.jpg"
  },
  {
    "id": 2,
    "name": "Giovanni Auditore",
    "role": "Assassin",
    "description": "Ezio’s father, a respected member of the Brotherhood, executed by corrupt officials.",
    "traits": ["Wise", "Honorable", "Secretive"],
    "game": "Assassin's Creed II",
    "icon": "Shield",
    "image": "https://www.giantbomb.com/a/uploads/scale_medium/3/34651/1230110-0gio2.jpg"
  },
  {
    "id": 3,
    "name": "Maria Auditore",
    "role": "Ally",
    "description": "Ezio’s mother, a noblewoman and strong supporter of her children after tragedy strikes.",
    "traits": ["Resilient", "Educated", "Compassionate"],
    "game": "Assassin's Creed II",
    "icon": "Heart",
    "image": "https://pm1.aminoapps.com/6473/204931c31059b5aa3bf405ba078a43b16e4e0ef1_00.jpg"
  },
  {
    "id": 4,
    "name": "Federico Auditore",
    "role": "Assassin",
    "description": "Ezio’s older brother, playful and protective, executed alongside Giovanni.",
    "traits": ["Clever", "Loyal", "Tragic"],
    "game": "Assassin's Creed II",
    "icon": "Users",
    "image": "https://i.namu.wiki/i/f_SAnO66fzFS0o30lzgQoBMH8jUk6v2BJmL3pL00mgupbthTMse4IBXHvlSehYyvsQc0VC1UqEx3_jhcSGKhag.webp"
  },
  {
    "id": 5,
    "name": "Petruccio Auditore",
    "role": "Ally",
    "description": "Ezio’s youngest brother, innocent and kind, executed during the family's downfall.",
    "traits": ["Sweet", "Innocent", "Tragic"],
    "game": "Assassin's Creed II",
    "icon": "Star",
    "image": "https://pbs.twimg.com/media/GO56fJEWUAElNJf.png"
  },
  {
    "id": 6,
    "name": "Claudia Auditore",
    "role": "Ally",
    "description": "Ezio’s sister, who grows into a strong leader and manages the Monteriggioni estate.",
    "traits": ["Determined", "Smart", "Independent"],
    "game": "Assassin's Creed II",
    "icon": "ShieldCheck",
    "image": "https://64.media.tumblr.com/46df893a4bbe6ba324baa029d81ad99f/0e70f7e4c844cb40-86/s400x600/e6f03061b40a68c2064819d31f695fdb33bb29b1.jpg"
  },
  {
    "id": 7,
    "name": "Mario Auditore",
    "role": "Assassin",
    "description": "Ezio’s uncle and mentor, leader of the Monteriggioni Assassins.",
    "traits": ["Bold", "Experienced", "Protective"],
    "game": "Assassin's Creed II",
    "icon": "Shield",
    "image": "https://ac-renaissance.weebly.com/uploads/4/1/8/3/41831587/316288233.png?356"
  },
  {
    "id": 8,
    "name": "Caterina Sforza",
    "role": "Ally",
    "description": "A powerful noblewoman and ally of the Assassins, known for her defiance and leadership.",
    "traits": ["Bold", "Independent", "Tactical"],
    "game": "Assassin's Creed II",
    "icon": "Crown",
    "image": "https://www.playthepast.org/wp-content/uploads/2014/02/caterina-sforza-45105.jpg"
  },
  {
    "id": 9,
    "name": "Rodrigo Borgia",
    "role": "Templar",
    "description": "Grand Master of the Templars and Ezio’s ultimate adversary.",
    "traits": ["Manipulative", "Fanatical", "Ruthless"],
    "game": "Assassin's Creed II",
    "icon": "Templar",
    "image": "https://assets.mycast.io/actor_images/actor-rodrigo-borgia-assassin-s-creed-128589_large.jpg?1600945022"
  },
  {
    "id": 10,
    "name": "Vieri de' Pazzi",
    "role": "Templar",
    "description": "Ezio’s arrogant rival and one of the first targets he eliminates.",
    "traits": ["Entitled", "Cruel", "Brash"],
    "game": "Assassin's Creed II",
    "icon": "Target",
    "image": "https://static1.personalitydatabase.net/2/pdb-images-prod/cf5ca958/profile_images/b1b13ac5fb1f47a7a0697d046a98c1d3.png"
  },
  {
    "id": 11,
    "name": "Francesco de' Pazzi",
    "role": "Templar",
    "description": "Leader of the Pazzi conspiracy, responsible for Giuliano de' Medici’s murder.",
    "traits": ["Scheming", "Ambitious", "Cold"],
    "game": "Assassin's Creed II",
    "icon": "Crosshair",
    "image": "https://i.ytimg.com/vi/FCqopYSS8_o/maxresdefault.jpg"
  },
  {
    "id": 12,
    "name": "Jacopo de' Pazzi",
    "role": "Templar",
    "description": "Senior conspirator, betrayed by Rodrigo Borgia after the failed coup.",
    "traits": ["Cowardly", "Greedy", "Desperate"],
    "game": "Assassin's Creed II",
    "icon": "Truck",
    "image": "https://i.ytimg.com/vi/3eneTi1oD3Y/maxresdefault.jpg"
  },
  {
    "id": 13,
    "name": "Lorenzo de' Medici",
    "role": "Ally",
    "description": "Ruler of Florence and supporter of the Assassins, targeted by the Pazzi conspiracy.",
    "traits": ["Diplomatic", "Respected", "Strategic"],
    "game": "Assassin's Creed II",
    "icon": "Home",
    "image": "https://64.media.tumblr.com/735ff16a560495fb37fb79dbdc45f996/tumblr_inline_pfc8brSppp1t6xa09_500.png"
  },
  {
    "id": 18,
    "name": "Silvio Barbarigo",
    "role": "Templar",
    "description": "Venetian noble who sought control of the city through violence.",
    "traits": ["Brutal", "Ambitious", "Ruthless"],
    "game": "Assassin's Creed II",
    "icon": "Target",
    "image": "https://i.ytimg.com/vi/MXeinUonYWs/maxresdefault.jpg"
  },
  {
    "id": 19,
    "name": "Marco Barbarigo",
    "role": "Templar",
    "description": "Doge of Venice and Templar puppet, eliminated by Ezio.",
    "traits": ["Greedy", "Authoritarian", "Manipulative"],
    "game": "Assassin's Creed II",
    "icon": "Crown",
    "image": "https://i.ytimg.com/vi/QMXtTA5_Pbs/maxresdefault.jpg"
  },
  {
    "id": 20,
    "name": "Dante Moro",
    "role": "Templar",
    "description": "Silvio Barbarigo’s brutal enforcer, killed during Ezio’s Venetian campaign.",
    "traits": ["Violent", "Loyal", "Aggressive"],
    "game": "Assassin's Creed II",
    "icon": "Crosshair",
    "image": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/07/Assassins-Creed-2-Dante.jpg?q=50&fit=crop&w=825&dpr=1.5"
  },
  {
    "id": 21,
    "name": "Leonardo da Vinci",
    "role": "Ally",
    "description": "Inventor and close friend to Ezio, helps decode codex pages and upgrade weapons.",
    "traits": ["Genius", "Inventive", "Supportive"],
    "game": "Assassin's Creed II",
    "icon": "Apple",
    "image": "https://i.redd.it/fcgsv0ybrzr41.jpg"
  },
  {
    "id": 23,
    "name": "Antonio de Magianis",
    "role": "Ally",
    "description": "Leader of the Venetian thieves and a key ally to Ezio in Venice.",
    "traits": ["Resourceful", "Loyal", "Streetwise"],
    "game": "Assassin's Creed II",
    "icon": "Users",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DUVwHsjQqRSKZIEsutYEfo3biwZYU0_fbjw6VLqpstjtajw6oqmYL1T5aOrabh5BmkQ&usqp=CAU"
  },
  {
    "id": 24,
    "name": "Teodora Contanto",
    "role": "Ally",
    "description": "Madame of a brothel and leader of the courtesans in Venice, helps Ezio gather intel.",
    "traits": ["Clever", "Influential", "Strategic"],
    "game": "Assassin's Creed II",
    "icon": "Heart",
    "image": "https://pbs.twimg.com/media/Edpbn1_XoAIJ86y.png"
  },
  {
    "id": 25,
    "name": "Bartolomeo d'Alviano",
    "role": "Ally",
    "description": "Mercenary captain who aids Ezio in Venice and later in Rome.",
    "traits": ["Brave", "Loud", "Loyal"],
    "game": "Assassin's Creed II",
    "icon": "Sword",
    "image": "https://assets.mycast.io/characters/bartolomeo-836159-normal.jpg?1594963691"
  },
  {
    "id": 26,
    "name": "Paola",
    "role": "Assassin",
    "description": "Leader of the Florentine courtesans and owner of La Rosa Colta. She teaches Ezio how to blend and evade guards.",
    "traits": ["Clever", "Resilient", "Supportive"],
    "game": "Assassin's Creed II",
    "icon": "Heart",
    "image": "https://i.ytimg.com/vi/2hOuwKca8rI/maxresdefault.jpg"
  },
  {
    "id": 27,
    "name": "La Volpe",
    "role": "Assassin",
    "description": "Mysterious leader of the Florentine thieves' guild. Known for his stealth and intelligence, he aids Ezio in uncovering conspiracies.",
    "traits": ["Elusive", "Streetwise", "Loyal"],
    "game": "Assassin's Creed II",
    "icon": "Users",
    "image": "https://i.ytimg.com/vi/SejCoBSAeEc/maxresdefault.jpg"
  },
  {
    "id": 28,
    "name": "Niccolò Machiavelli",
    "role": "Assassin",
    "description": "Florentine philosopher and strategist. A high-ranking Assassin who helps Ezio dismantle the Borgia and Savonarola's influence.",
    "traits": ["Strategic", "Political", "Rational"],
    "game": "Assassin's Creed II",
    "icon": "ShieldCheck",
    "image": "https://66.media.tumblr.com/f0764eb0e3683363356720e0c94c646f/tumblr_inline_paua0iZYCP1qct9oj_540.png"
  }
      ]
    }
  };

  const categoryIcons = {
    characters: Users,
    weapons: Crosshair,
    armor: ShieldCheck,
    vehicles: Car,
    locations: Crown
  };

  const resetVisibility = () => {
    setIsVisible({});
  };

  useEffect(() => {
    if (currentPage !== 'home') {
      const timer = setTimeout(() => {
        const currentData = gameData[currentPage]?.[selectedCategory] || [];
        currentData.forEach((item, index) => {
          setTimeout(() => {
            setIsVisible(prev => ({ ...prev, [item.id]: true }));
          }, index * 150);
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentPage, selectedCategory]);

  // Home Page Component
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="animate-pulse mb-4">
            <Gamepad2 className="mx-auto h-20 w-20 text-blue-400" />
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            GameVault
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto mb-4">
            Your Gateway to Gaming Legends
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Explore legendary gaming universes. Choose your adventure and dive deep into characters, weapons, vehicles, and more.
          </p>
          <div className="animate-bounce">
            <ChevronDown className="mx-auto h-10 w-10 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Game Selection */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Choose Your Universe
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">
          Select a game to explore its world, characters, and arsenal
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => {
            const IconComponent = game.icon;
            return (
              <div
                key={game.id}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                onClick={() => {
                  setCurrentPage(game.id);
                  setSelectedCategory('characters');
                  resetVisibility();
                }}
              >
                {/* Game Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${game.gradient} opacity-70`}></div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Game Info */}
                <div className="p-8">
                  <div className="mb-4">
                    <p className="text-blue-400 font-medium text-sm mb-2">{game.series}</p>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {game.name}
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {game.description}
                    </p>
                  </div>

                  {/* Available Categories */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-slate-200 uppercase tracking-wide mb-3">
                      Explore
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {game.categories.map((category) => {
                        const CategoryIcon = categoryIcons[category];
                        return (
                          <span
                            key={category}
                            className={`flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${game.gradient} text-white text-xs rounded-full shadow-md capitalize`}
                          >
                            <CategoryIcon className="h-3 w-3" />
                            {category}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-medium">Enter World</span>
                    <ChevronRight className="h-5 w-5 text-blue-400 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Game Page Component
  const GamePage = () => {
    const game = games.find(g => g.id === currentPage);
    const currentData = gameData[currentPage]?.[selectedCategory] || [];
    const availableCategories = game?.categories || [];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
        {/* Header */}
        <div className={`relative bg-gradient-to-r ${game?.gradient} py-16`}>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative container mx-auto px-6">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <Home className="h-5 w-5" />
              <span>Back to Portal</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 text-white">
                {game?.name}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {game?.description}
              </p>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {availableCategories.map((category) => {
              const IconComponent = categoryIcons[category];
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    resetVisibility();
                  }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 capitalize ${
                    selectedCategory === category
                      ? `bg-gradient-to-r ${game?.gradient} shadow-lg`
                      : 'bg-slate-700/50 hover:bg-slate-600/50'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{category}</span>
                </button>
              );
            })}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentData.map((item) => {
              const IconComponent = item.icon;
              const isCharacter = selectedCategory === 'characters';
              
              return (
                <div
                  key={item.id}
                  className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                    isVisible[item.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${isCharacter ? 'h-64' : 'h-48'} overflow-hidden`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${game?.gradient} opacity-60`}></div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {item.name}
                      </h3>
                      <p className="text-white/80 text-sm font-medium">
                        {item.role || item.type}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-6">
                      <p className="text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Traits/Specs */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">
                        {isCharacter ? 'Key Abilities' : 'Specifications'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(item.traits || item.specs || []).map((spec, specIndex) => (
                          <span
                            key={specIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${game?.gradient} text-white text-xs rounded-full shadow-md`}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {currentData.length === 0 && (
            <div className="text-center py-20">
              <Star className="mx-auto h-16 w-16 text-slate-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-400 mb-2">Coming Soon</h3>
              <p className="text-slate-500">This category is being developed for {game?.name}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return currentPage === 'home' ? <HomePage /> : <GamePage />;
};

export default GamePortal;