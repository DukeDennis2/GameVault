import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Sword, Target, Shield, Crown, Zap, Heart, Users, 
  ArrowLeft, Truck, Crosshair, ShieldCheck, Car, Home, Star,
  ChevronRight, Gamepad2
} from 'lucide-react';

const GamePortal = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('characters');
  const [isVisible, setIsVisible] = useState({});

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
      categories: ['characters', 'weapons', 'armor', 'locations']
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
          id: 9,
          name: "Ezio Auditore",
          role: "Master Assassin",
          description: "Charismatic Master Assassin from Renaissance Italy who rebuilt the Assassin Brotherhood.",
          traits: ["Master Assassin", "Charismatic", "Renaissance Noble"],
          image: "https://miro.medium.com/1*U0zfH8GWFwkb_COb2wklKg.jpeg",
          icon: Sword
        },
        {
          id: 10,
          name: "Altaïr Ibn-La'Ahad",
          role: "Master Assassin",
          description: "The legendary Master Assassin who revolutionized the Creed during the Third Crusade.",
          traits: ["Legendary Assassin", "Innovative", "Wise Leader"],
          image: "https://cdn.displate.com/artwork/270x380/2021-11-19/93c5a588f67b8445c2e930808239e29c_52984f55e1e92f7fb1ab75fc7060c5ce.jpg",
          icon: Sword
        }
      ],
      weapons: [
        {
          id: 11,
          name: "Hidden Blade",
          type: "Assassination Tool",
          description: "The signature weapon of the Assassins, designed for stealth kills and precision strikes.",
          specs: ["Spring-loaded mechanism", "Retractable", "Silent operation"],
          image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=300&h=200&fit=crop",
          icon: Sword
        }
      ],
      armor: [
        {
          id: 12,
          name: "Assassin Robes",
          type: "Stealth Gear",
          description: "Iconic white hooded robes that provide stealth capabilities and symbolic significance.",
          specs: ["Hood for anonymity", "Hidden pockets", "Silent movement"],
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
          icon: Shield
        }
      ],
      locations: [
        {
          id: 13,
          name: "Florence",
          type: "Renaissance City",
          description: "Beautiful Italian city during the Renaissance, home to the Auditore family.",
          specs: ["Historical accuracy", "Parkour opportunities", "Rich architecture"],
          image: "https://images.unsplash.com/photo-1549813069-f95e44d7f498?w=300&h=200&fit=crop",
          icon: Crown
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