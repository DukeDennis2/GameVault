import { 
  ChevronDown, Sword, Apple, Templar, Target, Shield, Crown, Zap, Heart, Users, 
  ArrowLeft, Truck, Crosshair, ShieldCheck, Car, Home, Star,
  ChevronRight, Gamepad2
} from 'lucide-react';


// SELECTING THE GAMES 
export const games = [
    {
    id: 'sw-unlimited',
    name: 'Star Wars',
    series: 'Star Wars',
    description: 'Epic battles across the galaxy with iconic heroes, starships, and factions from the Star Wars universe',
    gradient: 'from-blue-900 via-indigo-800 to-slate-700',
    image: 'https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg',
    icon: Gamepad2,
    categories: ['characters', 'weapons', 'vehicles']
    },
    {
      id: 'cod-mw2',
      name: 'Call of Duty: Modern Warfare',
      series: 'Call of Duty',
      description: 'Continuation of the Modern Warfare saga with intense global conflicts',
      gradient: 'from-slate-800 via-gray-700 to-slate-600',
      image: 'https://assetsio.gnwcdn.com/call_of_duty_modern_warfare_trilogy.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
      icon: Crosshair,
      categories: ['characters', 'weapons', 'vehicles']
    },
    {
      id: 'ac-series',
      name: "Assassin's Creed",
      series: "Assassin's Creed",
      description: 'Historical adventures spanning centuries with stealth and parkour',
      gradient: 'from-red-800 via-amber-700 to-yellow-600',
      image: 'https://www.yourdecoration.com/cdn/shop/files/gbeye-fp4070-assassins-creed-characters-poster-61x91-5cm_60a115ba-9f78-4a9f-99ed-93a930d0119f.jpg?v=1756128956',
      icon: Sword,
      categories: ['characters', 'weapons', 'armor', 'locations'],
  }
];
    
//CALL OF DUTY SECTION
export const gameData = {
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
            // ASSASSIN CREED SECTION
        'ac-series': {
        characters: [
            {
            "id": 1,
            "name": "Altaïr Ibn-La'Ahad",
            "role": "Master Assassin",
            "description": "The central protagonist of Assassin's Creed I, tasked with eliminating nine corrupt figures during the Third Crusade.",
            "fullDescription": "Born into the Assassin Brotherhood, Altaïr was a prodigy, achieving the rank of Master Assassin at a young age. His arrogance led to a failed mission, stripping him of his rank. His quest to assassinate nine targets was his path to redemption, during which he uncovered a deeper Templar conspiracy and the betrayal of his mentor. He eventually took over as Mentor of the Brotherhood, reforming its tenets and safeguarding its future for generations.",
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
            "fullDescription": "Malik was an accomplished Assassin and the leader of the Jerusalem Bureau. He held a deep rivalry with Altaïr due to his overconfidence, which led to the death of Malik's brother, Kadar. Despite his resentment, Malik became a crucial ally and close friend to Altaïr, offering him counsel and support after the events of the game. He proved his unwavering loyalty to the Brotherhood and became an integral part of Altaïr's reforms.",
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
            "fullDescription": "A formidable English noblewoman and Templar agent, Maria initially served as a decoy for Robert de Sablé. After being defeated by Altaïr, she was spared and traveled with him, eventually coming to question her Templar beliefs. She renounced the Templars to join the Assassins, becoming Altaïr's wife and the mother of his children. She was a key figure in the development of the Assassins' legacy alongside Altaïr.",
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
            "fullDescription": "Kadar was a young Assassin novice and the younger brother of Malik Al-Sayf. He participated in the failed mission to retrieve the Apple of Eden from Solomon's Temple, where he was killed by Templar forces. His death became a point of contention between Altaïr and Malik, though his sacrifice ultimately motivated both to continue their fight for the Creed.",
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
            "fullDescription": "Al Mualim was the revered Mentor of the Assassin Brotherhood, who trained Altaïr from a young age. His wisdom and guidance were legendary, but he secretly harbored a desire for power and control. He was revealed to be a Templar Grand Master who used the Apple of Eden to manipulate the region and the Assassin Brotherhood itself. His ultimate goal was to establish a false peace through absolute control, leading to a final confrontation with Altaïr.",
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
            "fullDescription": "A ruthless and greedy merchant, Tamir operated a black market in Damascus. He profited from the conflict by selling weapons to both sides of the war, exploiting the desperation of the populace. His actions undermined the stability of the city and endangered civilians, making him an early target for Altaïr. His death was a small step towards restoring order in the region.",
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
            "fullDescription": "Talal was a wealthy slaver who kidnapped citizens of Jerusalem to be sold to the highest bidder. He used his influence and hidden networks to carry out his heinous trade, causing immense suffering. He represented the exploitation and dehumanization that the Templars sought to propagate, and his assassination was an act of justice for the many lives he ruined.",
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
            "fullDescription": "Garnier de Naplouse was the Grand Master of the Knights Hospitaler, but he twisted his medical oath into a tool for control. He performed cruel experiments on his patients in the guise of 'cures,' using their pain to manipulate them and control their will. His work was a perversion of science and represented the Templars' belief that humanity was a disease to be controlled.",
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
            "fullDescription": "A wealthy and eccentric merchant, Abu'l Nuqoud was a Templar agent who used his vast fortune to hoard resources and manipulate the political landscape of Damascus. He was incredibly paranoid, holding a lavish party in his mansion as a distraction for his sinister plans. His actions caused widespread poverty and unrest, making him a prime target for Altaïr to restore balance.",
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
            "fullDescription": "William of Montferrat was a ruthless and brutal Crusader military commander. He ruled Acre with an iron fist, using fear and oppression to control the populace. He was a symbol of the Templars' desire for absolute control through military might, and his death was crucial to weakening their power in the Holy Land.",
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
            "fullDescription": "A twisted and fanatical magistrate in Jerusalem, Majd Addin used his position of power to hold public executions of innocents to maintain fear and order. He believed that control could only be achieved through public displays of cruelty. His assassination was not only an act of justice but a symbolic blow against the Templars' tyrannical rule.",
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
            "fullDescription": "Jubair al Hakim was a scholar who believed that knowledge and free will were dangerous. He organized the public burning of books in Damascus, aiming to erase history and control the minds of the people. He believed that an ignorant populace was easier to control, making him a primary target for the Assassins who fight for freedom of thought.",
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
            "fullDescription": "Sibrand was a paranoid Grand Master of the Teutonic Knights who feared the Assassins and was obsessed with protecting his ship from them. He was a ruthless and delusional commander who believed that his actions were necessary for the greater good. His death was necessary to dismantle the Templar navy and their control over the seas.",
            "traits": ["Paranoid", "Militant", "Delusional"],
            "game": "Assassin's Creed",
            "image": "https://i.ytimg.com/vi/T4NMGa57qVA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAh0aMZo6KseNVUwXReRBhtg6OjSg",
            "icon": "Car"
            },
            {
                "id": 47,
                "name": "Richard I",
                "role": "King of England",
                "description": "A legendary monarch who led the Third Crusade and became renowned for his courage and military prowess.",
                "fullDescription": "Known as 'Richard the Lionheart', he ascended to the English throne in 1189 and quickly became a symbol of chivalry and battlefield brilliance. Though he spent little time in England, his campaigns in the Holy Land against Saladin and his strategic conquests in Europe solidified his legacy. Captured and ransomed during his return from the Crusade, Richard's reign was marked by valor, diplomacy, and enduring myth.",
                "traits": ["Crusader", "Royalty", "Strategic", "Fearless"],
                "game": "Assassin's Creed",
                "image": "https://d2thvodm3xyo6j.cloudfront.net/media/2022/02/515077c3fcbea2c0-600x338.jpg",
                "icon": "Crown"
            },
            {
            "id": 14,
            "name": "Robert de Sablé",
            "role": "Target - Templar Grand Master",
            "description": "Altaïr's final target before Al Mualim, a powerful Templar leader.",
            "fullDescription": "Robert de Sablé was a cunning and powerful Grand Master of the Templar Order. He was the main antagonist of the game and orchestrated the conspiracy to seize power in the Holy Land. He was a master manipulator who used his charisma and influence to rally support for his cause. His assassination by Altaïr led to the discovery of Al Mualim's ultimate betrayal.",
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
            "fullDescription": "Ezio Auditore da Firenze was born into nobility but became an Assassin after his family's betrayal and execution. His journey spans decades, from a revenge-driven youth to a wise and charismatic mentor. He dismantled the Templar Order across Italy, forged alliances with historical figures like Leonardo da Vinci, and helped shape the future of the Brotherhood for generations.",
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
            "fullDescription": "Giovanni Auditore was a respected nobleman and a Master Assassin in Florence. He was a devoted family man who kept his true identity a secret from his children until his final days. His execution by the Templar-aligned Pazzi family was the catalyst for Ezio's transformation into an Assassin. Giovanni left behind crucial clues and documents that guided Ezio on his path to revenge.",
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
            "fullDescription": "Maria Auditore was a kind and compassionate noblewoman, married to Giovanni Auditore. She was a loving mother who supported her children after her husband and two sons were executed. The trauma left her unable to speak, but she remained a resilient and supportive figure for Ezio and his sister, Claudia, in their new life at Monteriggioni.",
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
            "fullDescription": "Federico was Ezio's charismatic and protective older brother. He was a fellow Assassin and often accompanied Ezio on their playful rooftop races. His close bond with Ezio made his execution, alongside his father and younger brother, a devastating event for the family. His death fueled Ezio's initial quest for vengeance.",
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
            "fullDescription": "Petruccio was the youngest and most innocent of the Auditore brothers. He was a sweet and kind-hearted boy who was executed alongside his father and brothers. His death was a tragic loss that deeply affected Ezio and reinforced the brutality of the Templar Order. His simple request for feathers became a small side quest and a poignant memorial to his memory.",
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
            "fullDescription": "Claudia was Ezio's sister, who started as a carefree young noblewoman. After her family's downfall, she grew into a resilient and capable leader. She took on the management of the Auditore villa in Monteriggioni, handling its finances and renovations. Her administrative skills were a vital contribution to the Assassins' cause, and she later joined the Brotherhood herself.",
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
            "fullDescription": "Mario Auditore was the bold and charismatic uncle of Ezio and the leader of the Monteriggioni Assassins. He took Ezio under his wing, teaching him the ways of the Brotherhood and providing him with a home at the Auditore villa. His leadership and military experience were crucial in the fight against the Templars, and he served as a strong father figure to Ezio.",
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
            "fullDescription": "Caterina Sforza was a powerful and defiant noblewoman who ruled the city of Forlì. She was a fearless leader who refused to bow to the Templars and became a valuable ally to Ezio. Her cunning and tactical mind were instrumental in protecting her city and helping the Assassins in their fight against the Borgia family.",
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
            "fullDescription": "Rodrigo Borgia was the cunning and ruthless Grand Master of the Templar Order in Italy. He was a master manipulator who used his political power and influence to become the Pope. He was the main antagonist of the game and the one who orchestrated the execution of Ezio's family. His ultimate goal was to acquire the Apple of Eden to establish a new world order under his control.",
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
            "fullDescription": "Vieri de' Pazzi was the arrogant and entitled son of the Pazzi family, and Ezio's primary rival in Florence. He was one of the first Templar targets Ezio eliminated, and his death was a key step in Ezio's journey of revenge. His cruelty and arrogance were a reflection of the Pazzi family's corrupt nature.",
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
            "fullDescription": "Francesco de' Pazzi was the leader of the Pazzi conspiracy, a Templar plot to overthrow the Medici family in Florence. He was a key figure in the assassination of Ezio's family and the murder of Giuliano de' Medici. His death was a major blow to the Templars and their plans for Florence.",
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
            "fullDescription": "Jacopo de' Pazzi was a senior conspirator in the Pazzi plot. He was a cowardly and greedy man who was betrayed by Rodrigo Borgia after the failed coup. His death was a testament to the Templars' ruthless nature and their willingness to betray their own for power.",
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
            "fullDescription": "Lorenzo de' Medici was the powerful and respected ruler of Florence. He was a patron of the arts and a staunch supporter of the Assassins, who helped him fight against the Templar conspiracy. His diplomatic and strategic mind was a crucial asset in the struggle for control of Florence.",
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
            "fullDescription": "Silvio Barbarigo was a brutal and ambitious Venetian noble who sought to seize control of the city. He used violence and intimidation to achieve his goals, making him a prime target for Ezio. His death was a crucial step in liberating Venice from Templar control.",
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
            "fullDescription": "Marco Barbarigo was the corrupt Doge of Venice and a Templar puppet. He was a greedy and manipulative ruler who used his position to further the Templar cause. His assassination by Ezio was a major victory for the Assassins and a crucial step in liberating Venice from Templar rule.",
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
            "fullDescription": "Dante Moro was a brutal and aggressive enforcer for Silvio Barbarigo. He was a key figure in the Templars' operations in Venice and was responsible for much of the violence in the city. His death was a necessary step in dismantling the Templar presence in Venice.",
            "traits": ["Violent", "Loyal", "Aggressive"],
            "game": "Assassin's Creed II",
            "icon": "Crosshair",
            "image": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/07/Assassins-Creed-2-Dante.jpg?q=50&fit=crop&w=825&dpr=1.5"
            },
            {
            "id": 48,
            "name": "Girolamo Savonarola",
            "role": "Dominican Friar & Reformer",
            "description": "A fiery preacher who led Florence through a radical religious transformation during the late 15th century.",
            "fullDescription": "Born in Ferrara in 1452, Savonarola rose to prominence in Florence with apocalyptic sermons condemning corruption, secular art, and moral decay. After the fall of the Medici in 1494, he helped establish a theocratic republic, declaring Florence the 'New Jerusalem'. His infamous 'Bonfire of the Vanities' symbolized his campaign for spiritual renewal. Defying Pope Alexander VI, Savonarola was excommunicated, arrested, and executed in 1498. His legacy lived on through the Piagnoni movement and inspired early Protestant reformers.",
            "traits": ["Zealous", "Visionary", "Controversial", "Revolutionary"],
            "game": "Assassin's Creed II",
            "image": "https://assets.mycast.io/characters/girolamo-savonarola-10352725-normal.jpg?1679572207",
            "icon": "Fire"
            },
            {
            "id": 21,
            "name": "Leonardo da Vinci",
            "role": "Ally",
            "description": "Inventor and close friend to Ezio, helps decode codex pages and upgrade weapons.",
            "fullDescription": "Leonardo da Vinci was a genius inventor, artist, and close friend to Ezio. He was a key ally to the Assassins, helping Ezio by decoding his father's codex pages and upgrading his weapons. His brilliant mind and inventions were instrumental in Ezio's success.",
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
            "fullDescription": "Antonio de Magianis was the resourceful and streetwise leader of the Venetian thieves. He was a loyal ally to Ezio in Venice, providing him with vital intel and support against the Templars. His network of thieves and his knowledge of the city's rooftops were invaluable to the Assassins' cause.",
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
            "fullDescription": "Teodora Contanto was the clever and influential leader of the courtesans in Venice. She was a key ally to Ezio, using her network of spies and informants to gather intel on the Templars. Her strategic mind and knowledge of the city's elite were instrumental in helping the Assassins in their fight against the Borgia.",
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
            "fullDescription": "Bartolomeo d'Alviano was a bold and loyal mercenary captain who became a valuable ally to Ezio. He aided the Assassins in their fight against the Templars in Venice and later in Rome. His military prowess and fierce loyalty were a great asset to the Brotherhood.",
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
            "fullDescription": "Paola was the clever and resilient leader of the Florentine courtesans. She was an Assassin who taught Ezio how to blend into crowds and use his surroundings to his advantage. Her network of courtesans provided crucial intel and support to the Assassins' cause, and she was a vital figure in Ezio's early training.",
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
            "fullDescription": "La Volpe was the elusive and streetwise leader of the Florentine thieves' guild. He was a high-ranking Assassin who initially distrusted Ezio but eventually became a loyal ally. His knowledge of the city's hidden passages and his network of informants were invaluable to Ezio in his fight against the Templars.",
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
            "fullDescription": "Niccolò Machiavelli was a real-life Florentine philosopher and diplomat, portrayed as a high-ranking Assassin in the game. He was a strategic and rational figure who provided Ezio with political and tactical advice. He was instrumental in helping Ezio dismantle the Borgia and Savonarola's influence in Florence, and he served as a key figure in the Assassin Brotherhood.",
            "traits": ["Strategic", "Political", "Rational"],
            "game": "Assassin's Creed II",
            "icon": "ShieldCheck",
            "image": "https://66.media.tumblr.com/f0764eb0e3683363356720e0c94c646f/tumblr_inline_paua0iZYCP1qct9oj_540.png"
            }
        
            ],
            //PIECES OF EDEN 
            POE: [
            {
            "id": 1,
            "name": "Apple of Eden",
            "type": "Orb",
            "description": "The most iconic Piece of Eden. A spherical artifact that can manipulate minds, create illusions, and project energy.",
            "fullDescription": "The Apple of Eden is a powerful relic created by the Isu to control humanity. Its primary function is to manipulate the minds of a large group of people, making them see illusions and compelling them to obey the user's will. Many Apples have been used to create political movements, establish empires, and instigate wars. Altaïr used one to rebuild the Assassin Brotherhood, and Ezio fought to keep one out of the hands of the Borgias.",
            "image": "https://images.alphacoders.com/694/694467.jpg",
            "specs": ["Mind Control", "Illusions", "Energy Blasts"],
            "game": "Assassin's Creed (Multiple)",
            "icon": "Apple"
            },
            {
            "id": 2,
            "name": "Sword of Eden",
            "type": "Blade",
            "description": "A powerful sword that grants its wielder incredible charisma, combat prowess, and the ability to project energy blasts.",
            "fullDescription": "The Sword of Eden is a legendary Isu artifact disguised as a blade. It enhances the wielder's charisma, making them an inspirational leader capable of commanding armies. It also amplifies physical strength and agility, and can be used to fire powerful energy blasts. These swords have been wielded by historical figures like King Arthur (as Excalibur) and Jeanne d'Arc. In Assassin's Creed Unity, one was used by the Templar François-Thomas Germain and later by the Assassin Arno Dorian.",
            "image": "https://i.pinimg.com/originals/9f/c7/a9/9fc7a9e0a0a501e40c5f2b31f7c3c267.jpg",
            "specs": ["Enhanced Charisma", "Combat Augmentation", "Energy Projection"],
            "icon": "Sword"
            },
            {
            "id": 3,
            "name": "Staff of Eden",
            "type": "Staff/Scepter",
            "description": "A staff that can amplify the power of an Apple of Eden, control minds, and even grant a form of immortality.",
            "fullDescription": "The Staff of Eden, also known as the Papal Staff or Staff of Hermes, is a versatile Isu artifact. It can be used as a weapon, a key, and a conduit for immense power. In Assassin's Creed II, Rodrigo Borgia used the Papal Staff to amplify the power of his Apple of Eden. In Assassin's Creed Odyssey, the Staff of Hermes was a central plot device, granting the wielder, Kassandra, a form of biological immortality and a connection to the Isu network.",
            "image": "https://i.pinimg.com/originals/b5/d2/8c/b5d28cb617c469b4c0e62031a0845a70.jpg",
            "specs": ["Amplification", "Mind Control", "Immortality"],
            "icon": "Crosshair"
            },
            {
            "id": 4,
            "name": "Shroud of Eden",
            "type": "Linen Cloth",
            "description": "A linen cloth with immense regenerative properties, capable of healing wounds and even resurrecting the recently deceased.",
            "fullDescription": "The Shroud of Eden is a rare and powerful Piece of Eden. It is a linen cloth that can heal any wound and even bring the recently deceased back to life, though not without a price. It was famously known as the Shroud of Turin. In Assassin's Creed Syndicate, the Templar Grand Master, Crawford Starrick, sought to use it to secure absolute power over London. Its regenerative abilities made it one of the most sought-after artifacts by both the Assassins and the Templars.",
            "image": "https://i.ytimg.com/vi/q1R2F0jPj8Y/maxresdefault.jpg",
            "specs": ["Healing", "Regeneration", "Resurrection"],
            "icon": "ShieldCheck"
            },
            {
            "id": 5,
            "name": "Spear of Leonidas",
            "type": "Spearhead",
            "description": "A powerful Isu spear, a shattered Piece of Eden that grants its wielder incredible strength and special abilities.",
            "fullDescription": "The Spear of Leonidas is a broken Isu artifact that was passed down through the bloodline of Kassandra and Alexios. Unlike other Pieces of Eden, it is a shattered object that doesn't have a grand, world-ending power, but rather augments the user's physical abilities. It can be upgraded by collecting Fragments of Eden, granting new powers like enhanced stealth, devastating attacks, and health regeneration. The Spear of Leonidas is the central weapon and a key part of the protagonist's identity in Assassin's Creed Odyssey.",
            "image": "https://www.ubisoft.com/en-us/game/assassins-creed/odyssey/news-updates/1n6874bQd124zU57u3h6Bf/assassins-creed-odyssey-the-spear-of-leonidas",
            "specs": ["Combat Augmentation", "Health Regeneration", "Elemental Attacks"],
            "icon": "Shield"
            },
            {
            "id": 6,
            "name": "Koh-i-Noor",
            "type": "Diamond",
            "description": "A diamond-shaped Piece of Eden that can locate other Pieces of Eden and link their powers.",
            "fullDescription": "The Koh-i-Noor, or 'Mountain of Light,' is a legendary diamond that is secretly a Piece of Eden. It has the unique ability to locate and track other Pieces of Eden, making it an invaluable tool for both the Assassins and Templars. In addition, it is capable of linking the consciousness of its wielder to a 'Nexus,' a network of Isu artifacts. It was featured prominently in Assassin's Creed Chronicles: India, where the Assassin Arbaaz Mir sought to retrieve it from the Templars.",
            "image": "https://i.ytimg.com/vi/cM7pB3rQ_jI/maxresdefault.jpg",
            "specs": ["Artifact Tracking", "Nexus Connection", "Power Linking"],
            "icon": "Crown"
            },
            {
            "id": 7,
            "name": "Crystal Ball",
            "type": "Sphere",
            "description": "A crystalline orb that allows its user to view the past and communicate with the Isu.",
            "fullDescription": "The Crystal Ball is a lesser-known Piece of Eden, but no less powerful. It functions as a communication device and a record of the past, allowing its user to witness historical events and communicate with the Isu. In Assassin's Creed 3, it was used by the protagonist Connor to communicate with the Isu Juno. It is a powerful tool for those seeking to understand the First Civilization's history and their plans for humanity.",
            "image": "https://i.ytimg.com/vi/sW7P10q7F78/maxresdefault.jpg",
            "specs": ["Temporal Viewing", "Isu Communication", "Knowledge Transfer"],
            "icon": "Zap"
            },
            {
            "id": 8,
            "name": "Precursor Box",
            "type": "Box",
            "description": "A device that can store and siphon the power of other Pieces of Eden, capable of displaying holographic messages.",
            "fullDescription": "The Precursor Box is an enigmatic Isu artifact that functions as both a data storage device and a power source. It can siphon energy from other Pieces of Eden, and it is capable of displaying holographic messages from the Isu. It was a central object in Assassin's Creed Rogue and Assassin's Creed IV: Black Flag's 'Freedom Cry' DLC, where it was used to access the hidden knowledge of the Isu. It is a testament to the Isu's advanced technology and their ability to store immense amounts of information.",
            "image": "https://i.pinimg.com/originals/9f/c7/a9/9fc7a9e0a0a501e40c5f2b31f7c3c267.jpg",
            "specs": ["Power Storage", "Holographic Projection", "Data Retrieval"],
            "icon": "Car"
            },
            {
            "id": 9,
            "name": "Ankh of Eden",
            "type": "Amulet",
            "description": "A symbol of life and immortality with the ability to heal and prolong a person's life.",
            "fullDescription": "The Ankh of Eden is an Isu artifact that holds the power of life and death. Similar to the Shroud, it possesses significant healing capabilities and can be used to extend a person's lifespan. Its powers are often associated with the Egyptian goddess Isis, and it's believed to be the basis for the mythological Ankh symbol. This piece is a testament to the Isu's advanced understanding of biology and consciousness, making it a valuable and dangerous artifact to possess.",
            "image": "https://i.pinimg.com/originals/6c/3e/6e/6c3e6e8e82a208f237f37f3a8b4b19b4.jpg",
            "specs": ["Life Extension", "Healing", "Revitalization"],
            "icon": "Heart"
            }
        ]
    }
    
  };