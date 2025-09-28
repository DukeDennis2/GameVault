import { 
  ChevronDown, Sword, Apple, Templar, Target, Shield, Crown, Zap, Heart, Users, User,
  ArrowLeft, Truck, Crosshair, ShieldCheck, Car, Home, Star,
  ChevronRight, Gamepad2
} from 'lucide-react';


// SELECTING THE GAMES 
export const games = [
    {
    id: 'star-wars',
    name: 'Star Wars',
    series: 'Star Wars',
    description: 'Epic battles across the galaxy with iconic heroes, starships, and factions from the Star Wars universe',
    gradient: 'from-blue-900 via-indigo-800 to-slate-700',
    image: 'https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg',
    icon: Gamepad2,
    categories: ['characters', 'weapons', 'vehicles']
    },
    {
      id: 'cod-mw',
      name: 'Call of Duty: Modern Warfare',
      series: 'Call of Duty',
      description: 'Continuation of the Modern Warfare saga with intense global conflicts',
      gradient: 'from-slate-800 via-gray-700 to-slate-600',
      image: 'https://assetsio.gnwcdn.com/call_of_duty_modern_warfare_trilogy.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
      icon: Crosshair,
      categories: ['characters', 'weapons', 'groups', 'vehicles']
    },
    {
      id: 'ac-series',
      name: "Assassin's Creed",
      series: "Assassin's Creed",
      description: 'Historical adventures spanning centuries with stealth and parkour',
      gradient: 'from-red-800 via-amber-700 to-yellow-600',
      image: 'https://www.yourdecoration.com/cdn/shop/files/gbeye-fp4070-assassins-creed-characters-poster-61x91-5cm_60a115ba-9f78-4a9f-99ed-93a930d0119f.jpg?v=1756128956',
      icon: Sword,
      categories: ['characters', 'weapons', 'groups', 'locations'],
  }
];

    /*  ⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡔⣖⡶⠀⠀⡆⡴⠒⠒⢦⣄⠀⠲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⡔⢂⡄⠀⠀⠀⠀⠀⠀⠀⢰⢍⢸⣜⠀⠀⢸⢀⠃⠀⠀⠀⠙⢦⣀⣹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠈⠩⠊⠁⠀⠀⠀⠀⠀⠀⣼⠎⡆⣿⠀⠀⢸⢸⠀⠀⠀⠀⠀⠈⢉⡿⠋⠉⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⡴⢫⠋⡆⠀⠀⠀⠀⠀⠀⡇⠀⢇⢫⡠⠤⠒⠛⠉⠙⢦⠀⢀⡠⠎⣿⠀⠀⠀⣱⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⢰⡅⢸⡰⡇⠀⠀⠀⠀⠀⠀⣾⡴⠋⠁⠀⠀⠀⠀⠀⠀⡠⠕⢭⠀⠀⢳⣋⡖⠉⠳⣗⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⡌⡇⢸⢁⡇⠀⠀⠀⠀⠀⢸⣙⡇⠀⠀⠀⠀⢀⣴⣿⣿⣦⠀⠘⣆⣀⣼⢳⡀⠀⠀⣸⡷⡻⣟⣒⣢⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⡇⡇⢸⣼⡇⠀⠀⠀⠀⠀⠸⣼⣱⣶⣶⣦⡔⠚⢿⣷⠯⠞⣠⢗⣿⣿⡏⣸⣿⣷⣶⣿⡴⠿⢟⣉⢝⣒⣭⣷⡤⠶⠖⠶⡶⢤⣤⣀⡀⠀⠀⠀⠀⠀⠀
        ⠀⠀⢰⠇⡷⡟⠹⡇⠀⠀⠀⠀⠀⠀⢱⢷⠻⠿⠟⡟⣦⣀⠰⡀⢸⡟⠛⣿⣿⢡⣿⣿⣿⣿⣿⣾⣾⣿⣷⣄⠀⠀⡀⠈⠉⠒⠤⠬⣀⣀⢈⣿⣷⣄⡀⠀⠀⠀
        ⠀⠀⢸⢱⣿⡇⠁⡇⠀⠀⠀⠀⠀⠀⠀⠙⠓⠮⣦⡻⠚⠋⠀⠡⣨⡇⢀⣿⡏⣾⣿⣿⠟⣻⣿⣿⣿⣿⢿⣿⣷⣶⣾⣿⣷⣦⣤⣶⠶⠋⠉⢉⣲⡭⠭⢷⣦⡀
        ⠀⠀⢸⣾⣹⣷⠒⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣤⣤⣴⣾⠟⣡⣾⣿⣽⡿⠋⠁⢀⣵⣿⣿⡿⠋⠈⡃⣨⣿⣿⣿⣟⣯⣿⣿⣦⣀⣼⡿⠁⠐⠢⡄⠀⠂
        ⠀⠀⢸⣏⣟⣿⣴⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣷⣬⣭⣴⣾⣿⣿⠟⠉⠀⠀⣠⣾⣿⡿⠋⠀⣠⠞⢪⣾⣿⢿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠸⡀⠀
        ⠀⠀⣾⡼⣫⡾⢿⣯⣿⡿⠀⠀⠀⠀⠀⠀⠀⣼⣿⣷⣿⣿⣻⣿⣿⣿⠋⢀⣠⢴⣯⣾⣿⡿⠃⢀⠜⠁⣠⣾⡿⠁⠀⣿⣯⣟⢿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠸⠀
        ⠀⢸⠯⣽⢉⣾⡟⠉⢻⡏⠀⠀⠀⠀⠀⠀⢸⣿⣿⣶⣿⢿⣿⣿⣿⣓⣛⣭⣔⣽⣿⣿⡿⢋⡽⠁⣠⣾⣿⢟⡁⡠⠊⠸⣿⠙⠻⣯⡿⠁⠀⠀⠀⠀⠀⠀⠀⠇
        ⠀⢸⠀⢸⡟⠙⡇⠁⢸⠁⠀⠀⠀⠀⢀⣿⣉⣿⣿⣿⣯⣗⡪⠭⣉⣻⠛⣻⣾⣿⣿⣫⡶⠉⣠⣾⣿⠟⢁⣾⣿⠾⠛⣧⠘⣇⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄
        ⠀⢸⡠⢼⠃⠀⢹⣿⡞⠀⠀⠀⠀⠀⣼⣽⡏⠻⣍⡙⣿⢷⡛⢻⡿⣶⣽⣿⡿⣿⡿⠋⣠⣾⣿⡿⡡⢰⣿⠟⠀⠀⠀⠘⣧⠘⣷⠃⠀⠀⠀⠀⠀⠀⠀⢀⡾⠃
        ⠀⢸⠁⠀⠇⠀⣼⡿⠁⠀⠀⠀⠀⣼⣿⢏⡘⢦⡈⠛⠿⣮⣉⣡⡤⠺⣻⣯⡾⠋⣠⢺⣿⣿⠋⠀⠀⣀⠨⢧⣤⠀⠠⠄⢹⡿⠃⠀⠀⠀⠀⠀⠀⠀⣴⠋⠀⠀
        ⠀⢸⠀⠀⡇⠀⡏⠀⠀⠀⠀⠀⣴⢿⢹⣿⡉⠑⠛⠂⠀⠀⠁⠐⠉⠉⢔⣉⣤⣾⣿⣿⣿⡁⠂⡤⠋⠀⠈⠈⣇⡀⣀⣰⣿⠁⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀
        ⠀⠘⣷⢮⠶⠾⠟⢳⠀⠀⠀⠸⣿⢯⣑⣾⣯⣿⣒⡶⠤⡤⢤⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣥⡾⢿⣿⣲⠦⣤⣽⣿⣿⠈⠻⣷⡄⠀⠀⠀⢀⣾⠇⠀⠀⠀⠀⠀
        ⠀⠰⣇⣠⡧⠤⠖⠺⡇⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣻⡿⠿⢛⣿⣿⣿⢿⣿⣿⣿⡿⢻⣟⣅⣠⡀⠈⠉⠛⠚⠛⠁⠸⡇⠀⠀⠹⣄⣴⣿⣿⣿⠀⠀⠀⠀⠀⠀
        ⠀⠀⢹⡀⠀⠀⠀⠀⢳⠀⠀⢨⠿⣿⣿⣿⣿⣿⣿⣿⣤⣾⣿⣿⣿⣿⣶⠛⠉⠀⢀⣿⠟⠭⠭⠽⠶⣾⠷⣤⣀⣀⠀⣷⠀⢀⣐⣿⣿⣿⣿⣿⣗⠀⠀⠀⠀⠀
        ⠀⠀⠀⡇⠀⠀⠀⠀⠈⢧⡴⠋⠀⣿⡈⢿⣿⣿⣿⣿⣿⣿⠛⠉⠘⣿⣿⣦⠀⢀⣾⡇⣿⠀⠀⠀⠀⠈⠉⢳⣿⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠦⣶⠀⠀
        ⠀⠀⠀⢳⠀⠀⠀⠀⠀⠘⣿⣶⣤⣸⡇⠈⢿⣿⣿⣿⣿⣿⣧⡀⠀⣹⣿⣿⣷⣾⡏⠐⠛⠀⢠⠀⢠⣾⢀⠞⡏⠀⠈⡯⠙⣿⡿⣻⠁⠀⠹⣧⠈⠁⠀⢹⡄⠀
        ⠀⠀⠀⠸⡄⠀⠀⠀⠀⠀⠘⣿⣯⡙⠃⠀⠈⢿⣿⣿⡟⠘⣿⣿⣿⣿⣿⡿⢻⣿⡗⠄⠀⢰⡃⠀⠘⣣⢻⣼⠃⠀⢸⡇⡿⣿⣧⣽⣀⠀⠀⢹⡆⠰⣶⣦⣧⠀
        ⠀⠀⠀⠀⢷⠀⠀⠀⠀⠀⠀⠈⠉⢷⡄⠀⠀⠘⢿⡟⠀⠀⠈⠛⠛⠻⡍⠀⢸⣿⠁⠀⠀⣆⠱⢄⣴⣥⣺⣟⠀⠀⡿⠉⢠⢻⠈⣿⣿⣷⣶⣶⣷⣖⣿⣿⣾⡀
        ⠀⠀⠀⠀⠘⣇⠀⠀⠀⠀⠀⠀⠀⠀⠹⣦⣠⢹⡿⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⠄⠀⠀⢸⣴⣿⣿⣿⣿⣹⠀⣸⢣⡇⢈⡟⢠⣿⡏⢿⣿⣿⣿⣿⣿⣿⣿⡇
        ⠀⠀⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⢻⠬⡾⠁⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⢾⠆⡰⣿⣿⣿⣿⣿⣿⣾⣰⣯⣮⣄⣼⠃⣾⣿⠀⣼⡟⢿⣏⣿⣿⠿⠛⠃
        ⠀⠀⠀⠀⠀⠀⠙⣦⠀⠀⠀⠀⠀⠀⠀⣸⣰⠃⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣷⣼⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣰⡿⠈⢠⣿⢷⡄⠙⢿⣏⠀⠀⠀
        ⠀⠀⠀⢀⣀⣀⠀⠘⣷⡀⡀⠀⢀⣠⣾⠿⠿⣷⠶⢶⡿⠿⢷⣶⣀⣀⣻⣿⡟⢳⣽⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⡿⢠⠀⣼⡟⠀⠹⣦⠀⣾⠀⠀⠀
        ⠀⠀⡴⠫⣿⠏⣉⣹⠉⠻⠶⠚⠋⣹⠁⠀⢸⡇⠀⢸⣤⣤⣤⡟⠉⢉⣿⠋⢡⣀⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣴⣿⠁⠀⠀⠈⠀⢹⡄⠀⠀
        ⢀⢞⣴⣾⣿⠋⠀⠀⠀⠀⠀⠀⠀⣿⣷⣶⣿⡇⠀⣾⣿⣿⣿⡇⠀⣸⡏⠀⢠⡾⣳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢀⠀⠀⠀⠀⠀⢷⠀⠀
        ⢈⠎⡏⣿⣿⣾⡀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⡇⠀⣿⣿⣿⣿⡇⢀⡿⠀⣠⡿⣱⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⡀⠀⠀⠀⢸⠀⠀
        ⢠⠀⣷⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣷⣶⣿⣿⣿⣿⣿⣾⠃⣰⣽⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠀⢸⠀⠀
        ⢸⢤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣜⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡟⠀⠀
        ⠈⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀
        ⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀
        ⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡉⠉⠋⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠙⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠇⠀⠰⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠷⠶⠶⠤⠤⠤⢀⠀
    */


//CALL OF DUTY: MODERN WARFARE 
export const gameData = {

     'star-wars': {
        characters:  [
            // JEDI + FORCE SENSITIVE CHARACTERS
            {
                id: 5,
                name: 'Anakin Skywalker / (pre-Darth Vader)',
                role: 'Jedi Knight / Hero of the Republic',
                description: 'The "Chosen One" prophesied to bring balance to the Force, but whose emotional attachments and fear of loss led to his spectacular and tragic fall.',
                traits: ['Aggressive Fighter', 'Strongest Force Potential', 'Pilot Ace', 'Impulsive', 'Emotional'],
                history: 'Anakin Skywalker was discovered by **Qui-Gon Jinn** as a slave on **Tatooine**. Qui-Gon believed the boy was conceived by the midi-chlorians and was the **Chosen One** who would destroy the Sith. Despite the Jedi Council\'s severe reservations about his age and his deep, dangerous emotional attachments, **Obi-Wan Kenobi** took him as his Padawan after Qui-Gon\'s death. Anakin rapidly grew into an extremely powerful, charismatic, and talented Jedi Knight, secretly marrying Senator **Padmé Amidala**. He was the foremost hero of the **Clone Wars**, earning the moniker "Hero with No Fear" while leading the $501$st Legion with his Padawan, **Ahsoka Tano**. His service was marked by immense victories but also defiance of the Council and persistent anger, exacerbated by the manipulations of Supreme Chancellor **Palpatine** (Darth Sidious), whom he saw as a father figure and ally. His emotional fragility peaked with visions of Padmé dying in childbirth. When Palpatine revealed his Sith identity and promised Anakin the power to prevent death, Anakin made the fateful choice to submit to the Dark Side to save his wife. This decision instantly transformed him into the Sith apprentice, **Darth Vader**. His fall involved leading the infamous **March on the Jedi Temple** and slaughtering all within, and his subsequent confrontation with Padmé and ultimate defeat at the hands of Obi-Wan Kenobi on the volcanic planet **Mustafar** sealed his fate and transformation into the cyborg enforcer of the Empire.',
                image: 'https://www.rbsdirect.com.br/imagesrc/35584256.jpg?w=1200&h=630&a=c&version=1575255600',
                videos: ["https://www.youtube.com/watch?v=yZGFRzp1skA", 'https://slideshow.link/tragedy_on_mustafar']
            },
            {
                id: 1,
                name: 'Luke Skywalker',
                role: 'Jedi Master / Rebel Hero',
                description: 'The farm boy from Tatooine who became the catalyst for the Galactic Civil War\'s end and the founder of a new, albeit short-lived, Jedi Order.',
                traits: ['Bravery', 'Compassion', 'Strong with the Force', 'Pilot Ace', 'Idealistic'],
                history: 'Luke Skywalker was born on Polis Massa as the son of **Anakin Skywalker** and **Padmé Amidala**. Immediately after his birth, his mother died, and to protect him from the newly formed Galactic Empire and his fallen father, **Darth Vader**, he was spirited away to **Tatooine** and raised by his aunt Beru and uncle Owen Lars, growing up as a moisture farmer completely unaware of his lineage. His life changed forever when the droids R2-D2 and C-3PO arrived carrying the plans to the Death Star, leading him to meet the exiled **Obi-Wan Kenobi**. Obi-Wan revealed Luke\'s connection to the Force, gifted him his father\'s lightsaber, and initiated his journey. After the tragic murder of his adoptive family by Imperial forces, Luke joined the Rebel Alliance, quickly demonstrating his exceptional piloting skills by destroying the first **Death Star** at the Battle of Yavin. Following this victory, he sought out the Jedi Grand Master **Yoda** on Dagobah for formal training. Midway through his training, he faced Darth Vader on Bespin, losing his hand and learning the crushing truth: "I am your father." Luke later orchestrated the rescue of **Han Solo** from Jabba the Hutt. During the **Battle of Endor**, he confronted Vader and the **Emperor Palpatine**. By refusing to kill Vader in anger, Luke appealed to the good remaining in his father, achieving the redemption of Anakin Skywalker and fulfilling the prophecy of the Chosen One. Post-Empire, Luke became the most powerful Jedi in the galaxy, established a new **Jedi Temple**, and began training a new generation, including his nephew, **Ben Solo**. When Ben fell to the Dark Side and destroyed the Temple, Luke, overcome by guilt and feeling responsible for the massacre, went into self-imposed exile on the planet **Ahch-To**, severing himself from the Force. He finally returned (through the Force) to face the First Order and sacrifice himself to save the Resistance, passing into the Cosmic Force, where he continued to guide Rey.',
                image: 'https://placehold.co/800x450/003366/FFFFFF?text=Luke+Skywalker+Jedi+Master',
                videos: ['https://slideshow.link/luke_skywalker_arc_summary', 'https://slideshow.link/redemption_of_vader']
            },
            {
                id: 2,
                name: 'Leia Organa (Skywalker)',
                role: 'General / Senator / Resistance Leader',
                description: 'A resilient leader, diplomat, and military commander who served as the moral backbone of the Rebellion and Resistance, and who also possessed immense Force potential.',
                traits: ['Leadership', 'Diplomacy', 'Political Acumen', 'Force Sensitive', 'Iron Will'],
                history: 'Leia Organa was the twin sister of Luke Skywalker and the daughter of Anakin Skywalker and Padmé Amidala. Immediately after her birth, she was adopted by Senator **Bail Organa** and Queen Breha Organa of **Alderaan**, growing up as a Princess and heir apparent. Raised in privilege and deeply involved in politics, she became the youngest person ever elected to the Imperial Senate. Under this guise, she operated as a spy and coordinator for the nascent Rebel Alliance. Her mission to secure the Death Star plans led to her capture by Darth Vader and the subsequent, tragic destruction of her homeworld, Alderaan. After being rescued, she became a pivotal General in the Rebellion, instrumental in organizing the evacuation of Hoth and coordinating the ground assault that led to the defeat of the Empire at the **Battle of Endor**. Following the Empire\'s collapse, she married **Han Solo** and became a leading figure in the New Republic Senate. However, she grew increasingly alarmed by the failure of the New Republic to recognize the rising threat of the First Order, leading her to found and command the **Resistance**. She was secretly trained by her brother, Luke, in the ways of the Force but ultimately chose the path of leadership and politics over becoming a full Jedi. Her life was marked by tragedy, particularly the loss of her son, **Ben Solo**, to the Dark Side (Kylo Ren), and the death of Han. She continued to lead the Resistance through the conflict with the First Order, sacrificing her remaining energy to reach out to Ben in a critical moment on the planet Kijimi, finally passing into the Force after guiding Rey to embrace her destiny.',
                image: 'https://placehold.co/800x450/990000/FFFFFF?text=Leia+General+and+Senator',
                videos: ['https://slideshow.link/leia_leadership_and_diplomacy', 'https://slideshow.link/resistance_era_leia']
            },
            {
                id: 3,
                name: 'Obi-Wan Kenobi',
                role: 'Jedi Master / High Council Member / Clone Wars General',
                description: 'An elegant duelist, devoted Jedi, and pivotal figure who mentored both the Chosen One, Anakin Skywalker, and the galaxy\'s New Hope, Luke Skywalker.',
                traits: ['Soresu Master', 'Wise', 'Patient', 'Negotiator', 'Strong Morality'],
                history: 'Trained by the unconventional Jedi Master **Qui-Gon Jinn**, Obi-Wan Kenobi adhered strictly to the Jedi Code while still maintaining a keen independence. His first major conflict came on Naboo, where he battled and defeated the Sith Lord **Darth Maul** after witnessing the death of his own master, Qui-Gon. Fulfilling his master\'s dying wish, Obi-Wan took **Anakin Skywalker** as his Padawan. During the **Clone Wars**, he quickly earned the rank of **Jedi General**, renowned for his tactical skill, bravery, and mastery of the defensive lightsaber form, Soresu. He and Anakin shared an almost brotherly bond, becoming the Republic\'s most effective military duo. Despite his dedication, Obi-Wan was blinded by the turmoil of the war and the manipulations of **Darth Sidious**, failing to recognize the dark path Anakin was treading. His greatest failure was his confrontation with the newly fallen Darth Vader on the fiery world of **Mustafar**. The duel resulted in Vader\'s catastrophic injury and Obi-Wan\'s heartbreaking decision to leave him for dead. Following the execution of **Order $66$**, Obi-Wan went into self-imposed exile on the desert planet **Tatooine**, taking the name "Ben Kenobi" and spending nearly two decades in isolation, watching over the young Luke Skywalker. He returned to his mission when he met Luke and the droids, guiding the young man to the Rebel Alliance. His journey ended when he sacrificed himself in a duel against Darth Vader aboard the first **Death Star**, becoming a **Force Ghost** to continue guiding Luke in the subsequent years.',
                image: 'https://placehold.co/800x450/006699/FFFFFF?text=Obi-Wan+Jedi+General',
                videos: ['https://slideshow.link/obiwan_clone_wars_career', 'https://slideshow.link/mustafar_and_exile']
            },
            {
                id: 4,
                name: 'Yoda',
                role: 'Jedi Grand Master / High Council Member',
                description: 'One of the most powerful and wisest Jedi in galactic history, he led the Jedi Order for centuries and provided the ultimate mentorship to Luke Skywalker.',
                traits: ['Wisdom', 'Exceptional Force Power', 'Unmatched Dueling', 'Ancient'],
                history: 'Yoda served as the revered **Grand Master** of the Jedi Order for approximately $800$ years, personally training countless Jedi, including influential figures like Count Dooku and Mace Windu. Despite his small size, he was a peerless duelist, specializing in the aggressive **Form IV (Ataru)** lightsaber style, using his agility to its full potential. While possessing incredible wisdom, he and the Jedi Council struggled to perceive the growing influence of the Dark Side due to the cloud created by **Darth Sidious**. He served reluctantly as a General during the **Clone Wars**, viewing the conflict as a sign of the Jedi’s impending doom and the end of the Republic. When **Order $66$** was executed, Yoda was one of the few to survive, swiftly engaging and dispatching Clone Commander Gree. He confronted Darth Sidious in a catastrophic duel in the Senate Chamber, but the resulting stalemate forced him to realize that the fight could not be won through strength alone. He went into self-imposed exile on the swamp planet **Dagobah**, where he spent two decades meditating and seeking deeper understanding of the Force, learning the path to immortality from the spirit of Qui-Gon Jinn. He later took on **Luke Skywalker** as his final apprentice, providing the core philosophical lessons Luke needed to become a true Jedi and defeat the Sith without falling to the Dark Side himself. Yoda died peacefully on Dagobah, becoming one with the Cosmic Force, his final words confirming the truth about Vader to Luke.',
                image: 'https://placehold.co/800x450/4CAF50/000000?text=Yoda+Grand+Master',
                videos: ['https://slideshow.link/yoda_philosophy', 'https://slideshow.link/yoda_duels']
            },
            {
                id: 6,
                name: 'Qui-Gon Jinn',
                role: 'Jedi Master / Maverick',
                description: 'A deeply respected Jedi Master who often clashed with the Council due to his focus on the Living Force, and the discoverer of the Chosen One.',
                traits: ['Maverick', 'Deeply Spiritual', 'Compassionate', 'Unconventional'],
                history: 'Qui-Gon Jinn was a venerable Jedi Master, trained by **Count Dooku** before Dooku\'s fall to the Dark Side. Qui-Gon was known throughout the Order for his refusal to rigidly follow the Jedi Council\'s dictates, often prioritizing his own conscience and his strong connection to the **Living Force**—the energy field of all life. He served as the Master to **Obi-Wan Kenobi**, who often had to temper his Master\'s more rebellious tendencies. Qui-Gon was instrumental in the events leading up to the Clone Wars, particularly during the Trade Federation\'s invasion of **Naboo**. It was there he discovered **Anakin Skywalker**, a slave boy with an unprecedented midi-chlorian count, whom Qui-Gon immediately believed was the prophesied **Chosen One**. Despite the Council\'s objections, Qui-Gon insisted on freeing Anakin and training him. His life tragically ended during the **Battle of Naboo** in a duel against the newly revealed Sith Lord, **Darth Maul**. His final wish, conveyed to Obi-Wan, was for his apprentice to train Anakin. Post-death, Qui-Gon was the first Jedi to truly master the path to immortality, learning how to retain his consciousness and manifest as a **Force Ghost**, later teaching this difficult technique to Yoda and Obi-Wan, thereby ensuring the spiritual survival of the Jedi tradition.',
                image: 'https://placehold.co/800x450/33A07A/FFFFFF?text=Qui-Gon+Jinn+Maverick',
                videos: ['https://slideshow.link/qui_gon_vs_maul', 'https://slideshow.link/living_force_master']
            },
            {
                id: 7,
                name: 'Mace Windu',
                role: 'Jedi Master / High Council Member',
                description: 'A stern, powerful Master and one of the most respected members of the Jedi Council, known for his unique lightsaber form, Vaapad.',
                traits: ['Vaapad Master', 'Stoic', 'Powerful Duelist', 'Distrustful of Politics'],
                history: 'Mace Windu was a Master of the Jedi High Council and arguably the greatest Jedi duelist of his era, second only to Yoda. He was the only known practitioner of **Form VII (Vaapad)**, an aggressive and dangerous lightsaber style that channeled elements of the Dark Side without falling prey to it. Windu was known for his gravity and stern demeanor, often expressing profound skepticism about the state of the Republic and the Council\'s ability to handle the rising darkness. He reluctantly accepted Anakin Skywalker into the Order and was always wary of his intense emotional nature and connection to Supreme Chancellor **Palpatine**. During the **Clone Wars**, he served as a highly effective **Jedi General**, participating in critical campaigns like the Battle of Geonosis and the defense of Coruscant. His final moments came when he tracked down the true Sith Lord, **Darth Sidious**, to Palpatine\'s office. In a fierce duel, Windu swiftly defeated Sidious, ready to deliver the final blow. However, Anakin Skywalker intervened, believing Windu was planning to murder Palpatine and ruin his only chance to save Padmé. The momentary distraction allowed Palpatine to unleash Force lightning, disarming Windu, and enabling Anakin to sever his arm. Palpatine then threw Windu out of the skyscraper window with a burst of lightning, resulting in his death and symbolizing the complete failure of the Jedi Order to prevent the rise of the Empire.',
                image: 'https://placehold.co/800x450/4B0082/FFFFFF?text=Mace+Windu+Vaapad+Master',
                videos: ['https://slideshow.link/windu_vs_sidious_duel', 'https://slideshow.link/vaapad_mastery']
            },
            {
                id: 8,
                name: 'Ahsoka Tano',
                role: 'Former Jedi Padawan / Rebel Agent',
                description: 'Anakin Skywalker\'s spirited former Padawan, who left the Jedi Order but became a fierce independent champion of the light and survivor of the Empire.',
                traits: ['Headstrong', 'Skilled Duelist (Jark\'Kai)', 'Loyal', 'Independent'],
                history: 'Ahsoka Tano was assigned to **Anakin Skywalker** as his Padawan learner during the height of the **Clone Wars**, earning the nickname "Snips" from her master. Despite her initial recklessness, she matured quickly into a skilled strategist and warrior, specializing in the Jar\'Kai style of dual lightsabers. She and Anakin formed an extremely close, unorthodox bond, often ignoring the Council\'s rigid rules to achieve victory. Her career was tragically cut short when she was **framed** for a bombing of the Jedi Temple and expelled from the Order. Although Anakin later proved her innocence, the betrayal of the Council left a permanent scar, and Ahsoka chose to **leave the Jedi Order** just before the end of the Clone Wars, sensing the Jedi’s detachment from the Republic they served. She later led the Mandalorian resistance forces alongside Captain Rex in the **Siege of Mandalore**. She survived **Order $66$** due to Rex\'s timely intervention in removing his inhibitor chip. Following the Clone Wars, Ahsoka operated in the shadows as a secret Rebel contact, adopting the codename "Fulcrum." She worked extensively with the **Spectres crew** and famously confronted her fallen master, Darth Vader, in a devastating duel, learning the full extent of his tragedy. She was a key figure in hunting down **Grand Admiral Thrawn** and securing the fledgling Rebellion. In the post-Empire era, she continued to guard the galaxy against threats, seeking the lost Jedi **Ezra Bridger** and facing new threats linked to the ancient Sith, becoming a revered and wise figure known as Ahsoka the White.',
                image: 'https://placehold.co/800x450/FFA500/000000?text=Ahsoka+Tano+Survivor',
                videos: ['https://slideshow.link/ahsoka_vs_vader', 'https://slideshow.link/ahsoka_leaves_the_order']
            },
            {
                id: 9,
                name: 'Rey (Skywalker)',
                role: 'Jedi Scavenger / Last Jedi',
                description: 'A mysterious scavenger from Jakku who rose to become the final hope for the Jedi Order against the First Order and the resurrected Emperor Palpatine.',
                traits: ['Resourceful', 'Innate Force Strength', 'Pilot', 'Resilient'],
                history: 'Rey was left on the junkyard planet of **Jakku** as a child by her parents (later revealed to be agents working for **Emperor Palpatine**\'s resurrected Sith faction) to protect her. She grew up as a solitary scavenger, waiting for a family that never returned. Her life changed when she encountered the droid BB-8 and the stormtrooper defector **Finn**, leading her to escape Jakku aboard the **Millennium Falcon**. She quickly displayed a staggering, natural affinity for the Force and advanced piloting and mechanical skills. She became intrinsically linked through a **Force Dyad** with **Ben Solo** (Kylo Ren), the son of Han and Leia. Initially seeking the exiled Luke Skywalker for training, she received only brief guidance before Luke refused to teach her. She later trained under General Leia Organa. Rey was repeatedly drawn into conflict with Kylo Ren, attempting to redeem him, and learned the truth about her lineage: she was the granddaughter of the resurrected **Emperor Palpatine**, making her a key player in the Sith Lord\'s final plan to create a new Empire. At the climactic **Battle of Exegol**, Rey, drawing strength from the voices of all past Jedi, confronted Palpatine. By refusing to strike him down in hatred and turning his own Force lightning back on him, she destroyed the Sith Lord and completed her destiny. She later took the name **Skywalker** in honor of the family that saved the galaxy, dedicating herself to rebuilding the Jedi legacy.',
                image: 'https://placehold.co/800x450/48D1CC/000000?text=Rey+Last+Jedi',
                videos: ['https://slideshow.link/rey_and_kylo_dyad', 'https://slideshow.link/battle_of_exegol']
            },
            {
                id: 10,
                name: 'Finn',
                role: 'Stormtrooper Defector / Resistance Fighter',
                description: 'A First Order stormtrooper designated FN-$2187$ who defected and became a key, non-Force sensitive hero of the Resistance.',
                traits: ['Brave', 'Loyal to Friends', 'Moral Courage', 'Soldier'],
                history: 'Finn was taken from his family and raised from birth as a soldier for the **First Order**, designated **FN-$2187$**. He was trained to be a ruthlessly effective stormtrooper. His conscience first manifested during the massacre on the planet Tuanul, where he witnessed the brutal slaughter of innocent villagers and refused to open fire. This moral awakening caused him to desert, leading him to escape with the captured Resistance pilot **Poe Dameron**. He initially lied about being a Resistance fighter to the scavenger **Rey** on Jakku. He quickly formed a strong bond with Rey and later with Poe, becoming one of the Resistance’s most loyal and passionate soldiers. Finn played a crucial role in the destruction of Starkiller Base, the evacuation of D\'Qar, and the final defeat of the First Order. Though not a Jedi, he gradually displayed a surprising sensitivity to the Force—a trait initially hinted at when he felt the pain of Rey during her capture and later developed a profound internal moral compass and ability to motivate others. His unwavering loyalty and willingness to sacrifice himself for his friends solidified his legacy as a true hero of the Resistance, eventually leading the ground assault forces in the final battles.',
                image: 'https://placehold.co/800x450/007FFF/FFFFFF?text=Finn+FN-2187',
                videos: ['https://slideshow.link/finn_desertion_arc', 'https://slideshow.link/finn_and_poe_friendship']
            },
            {
                id: 11,
                name: 'Ezra Bridger (Rebels)',
                role: 'Jedi Padawan / Rebel / Force Conduit',
                description: 'An orphan street urchin from Lothal who was taken in by the Spectres crew and trained as a Jedi, eventually sacrificing himself for his friends.',
                traits: ['Street Smart', 'Impulsive', 'Compassionate', 'Strong with the Force'],
                history: 'Ezra Bridger was born on the Imperial-occupied planet **Lothal**. Orphaned at a young age, he survived as a street thief, using his natural agility and minor Force connections for small crimes. He was discovered by the **Spectres crew** of the starship *Ghost* and their secret Jedi leader, **Kanan Jarrus**. Kanan took Ezra as his apprentice, providing him with rudimentary Jedi training. Ezra was fiercely loyal but often reckless, his emotional state making him susceptible to the influence of the Dark Side, notably being tempted by the power of the Sith Holocron. He later developed a unique and powerful connection to living creatures, particularly the **purgill** (space whales) and the animals of Lothal. His Jedi journey culminated in the confrontation with **Grand Admiral Thrawn** above Lothal. To save his friends and liberate his home world, Ezra used the Force to summon the purgills, who grabbed Thrawn\'s Star Destroyer and jumped into hyperspace, taking Ezra and Thrawn with them to the unknown regions. This act of self-sacrifice successfully ended the Imperial occupation of Lothal. His fate remained unknown for many years, prompting Ahsoka Tano and Sabine Wren to search for him across the galaxy.',
                image: 'https://placehold.co/800x450/FF4500/FFFFFF?text=Ezra+Bridger+Rebel',
                videos: ['https://slideshow.link/ezra_rebels_journey', 'https://slideshow.link/ezra_sacrifices_lothal']
            },
            {
                id: 12,
                name: 'Kanan Jarrus (Caleb Dume) (Rebels)',
                role: 'Jedi Knight / Padawan Survivor / Rebel',
                description: 'A survivor of Order $66$ who hid his identity until he found a new purpose leading the Spectres crew and training Ezra Bridger.',
                traits: ['Protective', 'Witty', 'Reluctant Leader', 'Calm'],
                history: 'Born Caleb Dume, he was trained as a Padawan by Master Depa Billaba during the Clone Wars. He narrowly escaped **Order $66$** when his Master sacrificed herself to save him. Forced into hiding, he took the name **Kanan Jarrus** and lived as a mercenary and reluctant smuggler, keeping his lightsaber locked away and severing most of his connection to the Force out of fear and necessity. He eventually became the co-leader of the **Spectres crew** aboard the starship *Ghost*, working with the highly skilled pilot **Hera Syndulla** (who would become his partner). He revealed his true nature as a Jedi when he decided to take the impulsive orphan **Ezra Bridger** as his apprentice, committing fully to the fight against the Empire. Kanan was later blinded in a confrontation with the Sith Lord **Darth Maul** but learned to "see" completely through the Force. His greatest act of heroism came during a mission to rescue Hera from the Empire on Lothal. Facing certain capture, Kanan used the Force to hold back a massive fuel explosion, allowing Hera, Ezra, and the entire Spectres crew to escape. This final, powerful act of sacrifice led to his death, but he achieved clarity and true Jedi purpose, passing into the Force to continue guiding those he loved.',
                image: 'https://placehold.co/800x450/708090/FFFFFF?text=Kanan+Jarrus+Sacrifice',
                videos: ['https://slideshow.link/kanan_and_hera', 'https://slideshow.link/kanan_blinding_and_vision']
            },
            {
                id: 13,
                name: 'Cal Kestis (Jedi: Fallen Order / Survivor)',
                role: 'Jedi Padawan Survivor / Hidden Jedi',
                description: 'A survivor of the Jedi Purge who found his way back to the Force and fought to preserve the Jedi legacy against the Imperial Inquisitors.',
                traits: ['Empathetic', 'Survivor', 'Determined', 'Kinetite Use'],
                history: 'Cal Kestis was a young Jedi Padawan being trained by Master Jaro Tapal during the Clone Wars. He survived **Order $66$** when his Master sacrificed himself to ensure Cal\'s escape. For years, Cal lived in hiding on the planet **Bracca**, working as a scrapper and completely suppressing his connection to the Force to avoid detection by the Empire. He was discovered by the **Second Sister** (an Imperial Inquisitor) when he instinctively used the Force to save a friend. He was rescued by former Jedi Master **Cere Junda** and the pilot **Greez Dritus**, who flew the starship *Stinger Mantis*. Cal subsequently dedicated himself to following a path left by Cere\'s former master, Eno Cordova, to rebuild the shattered Jedi Order. His mission involved traversing the galaxy, recovering ancient artifacts, and unlocking the secrets of a hidden **Jedi Holocron** that contained the names of Force-sensitive children. Along the way, he mastered the Force power of **Kinetite** (Force electricity) and confronted several Inquisitors, including the tragic former Padawan Trilla Suduri (the Second Sister). Ultimately, Cal chose to destroy the Holocron rather than risk the children\'s names falling into the hands of the Empire, concluding that the new generation must find their own path. In the years that followed, Cal and the *Stinger Mantis* crew continued to fight the Empire, eventually setting their sights on establishing a safe haven for Force-sensitives, becoming a beacon of hope for survivors in the darkest times.',
                image: 'https://placehold.co/800x450/6A5ACD/FFFFFF?text=Cal+Kestis+Survivor',
                videos: ['https://slideshow.link/cal_kestis_journey', 'https://slideshow.link/inquisitor_battles']
            },
            {
                id: 14,
                name: 'Sifo-Dyas',
                role: 'Jedi Master / Visionary',
                description: 'A visionary but erratic Jedi Master whose foresight led him to secretly commission the Clone Army, a decision that tragically led to the Jedi\'s destruction.',
                traits: ['Prophetic', 'Erratic', 'Visionary', 'Concerned'],
                history: 'Sifo-Dyas was a respected but increasingly controversial Jedi Master who possessed the extremely rare gift of **precognition**—the ability to see the future clearly. His visions, however, were universally dark, showing the impending doom of the Republic and the Jedi Order through a massive, looming war. Driven by his prophetic warnings, which the cautious Jedi Council dismissed as paranoia, Sifo-Dyas became convinced that the Republic required a huge army to defend itself. Acting entirely in secret and without the Council\'s knowledge, he traveled to the planet **Kamino** and commissioned the creation of a massive clone army from the Kaminoan cloners, claiming to act on behalf of the Galactic Senate. His involvement became too erratic, however, and the Council eventually expelled him. Before his death, the Sith Lord **Darth Sidious** (through his agent, Count Dooku) took over the project, ensuring the clones were secretly implanted with **inhibitor chips** containing **Order $66$**. Dooku subsequently killed Sifo-Dyas to ensure the complete secrecy and control of the growing army. Although Sifo-Dyas\'s intentions were pure—to save the Republic—his foresight and unauthorized actions provided the Sith with the perfect weapon for their millennia-long plan, making him an unwitting and tragic architect of the Jedi Purge.',
                image: 'https://placehold.co/800x450/BDB76B/000000?text=Sifo-Dyas+Visionary',
                videos: ['https://slideshow.link/sifo_dyas_visions', 'https://slideshow.link/clone_army_origins']
            },
            {
                id: 15,
                name: 'Grogu (“Baby Yoda”)',
                role: 'Foundling / Force Prodigy / Mando Apprentice',
                description: 'A mysterious, Force-sensitive child of the same species as Yoda, who became the ward and eventual apprentice of Din Djarin, the Mandalorian.',
                traits: ['Innocent', 'Powerful', 'Voracious Appetite', 'Dependent'],
                history: 'Grogu, a male child of an unknown species (the same as Yoda), was born approximately $50$ years before the events of the Galactic Civil War. He was a Padawan in the **Jedi Temple** on Coruscant and was present during the events of the Clone Wars. When **Order $66$** was executed, Grogu was rescued by an unnamed Jedi and secreted away, his memories of the traumatic event repressed. He spent the following decades in hiding, either in stasis or on the run, his immense natural Force powers suppressed by fear. He was discovered on Arvala-7 by the bounty hunter **Din Djarin** (The Mandalorian), who was hired by the Imperial remnant forces (led by Moff Gideon) to retrieve him. Din Djarin, in a surprising turn of conscience, chose to protect Grogu and became his self-appointed guardian, deeming him a "foundling" of the Mandalorian Creed. Grogu frequently used the Force to protect Din Djarin and the *Razor Crest* crew, performing feats of telekinesis and healing, though the use of the Force often exhausted him. Din Djarin and Grogu spent years searching for a suitable Jedi to train him, eventually meeting **Ahsoka Tano** (who revealed his name) and later **Luke Skywalker**. Grogu temporarily trained under Luke, but his emotional attachment to Din Djarin proved too strong. He chose to return to Din Djarin and the path of the **Mandalorian**, adopting the role of Din Djarin\'s apprentice and completing his journey from Jedi Foundling to Mandalorian Foundling, securing his unique place in the galaxy\'s future.',
                image: 'https://placehold.co/800x450/3CB371/000000?text=Grogu+Foundling',
                videos: ['https://slideshow.link/grogu_and_din_djarin', 'https://slideshow.link/grogu_force_powers']
            },

            // REBELLION + ALLIES
            {
                id: 1,
                name: 'Han Solo',
                role: 'Smuggler / General of the Rebellion',
                description: 'A cynical but brave Corellian smuggler who traded his moral ambiguity for the cause of freedom, becoming one of the Rebellion\'s most important generals.',
                traits: ['Pilot Ace', 'Resourceful', 'Cynical but Loyal', 'Fast-talking'],
                history: 'Han Solo was an orphan from Corellia who served briefly in the Imperial military before defecting. He later rose to notoriety as a cunning smuggler, most famously winning the **Millennium Falcon** from Lando Calrissian in a game of Sabacc. His life became inextricably linked to the Wookiee **Chewbacca** after saving him from Imperial captivity, creating a life-debt bond that lasted decades. Han was first hired by Obi-Wan Kenobi and Luke Skywalker to transport them from Tatooine to Alderaan (which was destroyed), reluctantly involving him in the Galactic Civil War. Although initially planning to abandon the Rebels after collecting his reward, his loyalty to his new friends prompted him to return during the **Battle of Yavin**, allowing Luke to destroy the first Death Star. He subsequently became a committed member of the Rebel Alliance, serving in key missions and beginning a complicated romance with Princess **Leia Organa**. His capture on Bespin led to his infamous freezing in **carbonite** and delivery to the crime lord **Jabba the Hutt** by Boba Fett. After a dramatic rescue led by Luke and Leia, Han was promoted to **General** and commanded the ground forces that successfully destroyed the shield generator on Endor, enabling the destruction of the second Death Star. Following the Empire\'s defeat, he and Leia married, and he became a dedicated husband and father. However, the tragic fall of their son, **Ben Solo (Kylo Ren)**, to the Dark Side fractured their marriage, and Han returned to his old life as a smuggler. He finally rejoined the fight with the Resistance and located Ben on Starkiller Base, where he made a final, heartbreaking attempt to redeem his son before being tragically slain by Kylo Ren, dying a hero.',
                image: 'https://placehold.co/800x450/666666/FFFFFF?text=Han+Solo+General',
                videos: ['https://slideshow.link/han_solo_early_life', 'https://slideshow.link/battle_of_endor_assault']
            },
            {
                id: 2,
                name: 'Padmé Amidala',
                role: 'Queen of Naboo / Senator of the Republic',
                description: 'A former Queen and influential Senator, fiercely dedicated to democracy, peace, and the love of Anakin Skywalker.',
                traits: ['Diplomacy', 'Political Influence', 'Brave', 'Idealistic'],
                history: 'Padmé Naberrie was elected **Queen of Naboo** at an exceptionally young age. Her political skill and courage were first demonstrated during the Trade Federation\'s invasion of Naboo, where she forged an alliance with the Gungans and successfully liberated her planet. After her term as Queen, she became the Senator for Naboo in the Galactic Senate, a role that put her in constant danger due to her strong democratic ideals. During the period leading up to the Clone Wars, she was the focus of several assassination attempts. Assigned Jedi protection, she secretly fell in love with her guardian, **Anakin Skywalker**, and they were married in a private ceremony on Naboo. Throughout the **Clone Wars**, Padmé opposed the conflict, often undertaking dangerous diplomatic missions to find peaceful solutions and maintain the moral integrity of the Republic, fearing the growing executive power of Chancellor Palpatine. She was one of the core members of the group that formed the earliest opposition to Palpatine\'s schemes, recognizing the danger to the Senate. She was secretly pregnant with twins when Anakin fell to the Dark Side. In a desperate attempt to bring him back, she traveled to **Mustafar** to confront him. The confrontation ended with Anakin Force-choking her due to his paranoia. Although she survived the attack, she lost the will to live after realizing the man she loved had become the monster **Darth Vader**. She died shortly after giving birth to **Luke** and **Leia** on Polis Massa, unable to see the future hope her children represented.',
                image: 'https://placehold.co/800x450/FFCCFF/000000?text=Padme+Amidala+Senator',
                videos: ['https://slideshow.link/padme_political_arc', 'https://slideshow.link/naboo_royal_outfits']
            },
            {
                id: 3,
                name: 'Chewbacca',
                role: 'Wookiee Co-pilot / Rebel Warrior',
                description: 'A mighty Wookiee warrior and co-pilot of the Millennium Falcon, bound by a life debt to Han Solo and fiercely loyal to the cause of freedom.',
                traits: ['Incredibly Strong', 'Loyal', 'Skilled Mechanic', 'Fierce Fighter'],
                history: 'Chewbacca, hailing from the jungle planet Kashyyyk, was a skilled warrior and mechanic. His destiny was forever changed when he was rescued from Imperial slavery by **Han Solo**, creating a sacred **life debt** in Wookiee culture that made him Han\'s lifelong companion and co-pilot aboard the **Millennium Falcon**. He was instrumental in helping Han transport Luke and Obi-Wan, and became deeply committed to the Rebel Alliance. Despite his size and intimidating appearance, Chewbacca possesses a huge heart and is known for his compassion, particularly toward his friends. He fought in nearly every major confrontation of the Galactic Civil War, including the **Battle of Yavin**, the evacuation of Hoth, and the decisive **Battle of Endor**. His loyalty was tested when Han was frozen in carbonite; Chewbacca helped Leia rescue him from Jabba the Hutt\'s clutches. Following the establishment of the New Republic, Chewbacca remained Han\'s steadfast partner, working alongside him in smuggling and in raising their son, Ben Solo. After Han\'s tragic death, Chewbacca continued the fight with the Resistance, co-piloting the Falcon with Rey and fiercely defending his new allies. He was present for the final battle against the Sith Eternal, cementing his status as one of the longest-serving and most effective heroes of the galaxy.',
                image: 'https://placehold.co/800x450/8B4513/FFFFFF?text=Chewbacca+Wookiee+Warrior',
                videos: ['https://slideshow.link/chewie_and_han_bond', 'https://slideshow.link/wookiee_combat_style']
            },
            {
                id: 4,
                name: 'Lando Calrissian',
                role: 'Smuggler / Baron Administrator / General of the Rebellion',
                description: 'A charming, charismatic gambler and smuggler who redeemed his past mistakes by becoming a crucial military leader in the Rebel Alliance.',
                traits: ['Charming', 'Gambler', 'Pilot Ace', 'Flamboyant'],
                history: 'Lando Calrissian was originally a smooth-talking rogue and smuggler, famous for his gambling prowess. His life was defined by his relationship with the **Millennium Falcon**, which he lost to **Han Solo** in a high-stakes card game. He later seemingly cleaned up his act, becoming the Baron Administrator of **Cloud City** on Bespin. However, his past caught up to him when Darth Vader forced him to betray Han Solo, resulting in Han\'s capture and freezing in carbonite. Riddled with guilt over the betrayal, Lando underwent a complete moral transformation, helping Leia and Chewbacca escape and committing himself fully to the Rebel Alliance. He was instrumental in the plan to rescue Han from Jabba the Hutt. Promoted to **General**, Lando became a key military strategist, famously leading the starfighter assault that destroyed the second **Death Star** at the **Battle of Endor** while piloting the Millennium Falcon. Following the war, he had a successful career, but suffered tragedy with the loss of his daughter to the First Order. He reappeared decades later, joining the Resistance in their final fight against the resurgent Emperor Palpatine, helping to rally crucial reinforcements for the climactic battle on Exegol, proving his unwavering commitment to freedom.',
                image: 'https://placehold.co/800x450/000080/FFFFFF?text=Lando+General',
                videos: ['https://slideshow.link/lando_cloud_city_betrayal', 'https://slideshow.link/lando_pilots_falcon']
            },
            {
                id: 5,
                name: 'C-3PO',
                role: 'Protocol Droid / Translator',
                description: 'A fussy, anxious protocol droid fluent in over six million forms of communication, who served the Republic, Rebellion, and Resistance.',
                traits: ['Anxious', 'Verbose', 'Multilingual', 'Loyal'],
                history: 'C-3PO was originally built by the young slave **Anakin Skywalker** on Tatooine to help his mother, Shmi Skywalker. He served the family until Anakin left for Jedi training, after which he became the property of **Padmé Amidala**. Throughout the **Clone Wars**, C-3PO and his counterpart, **R2-D2**, became inseparable, constantly getting involved in the most dangerous missions alongside Anakin and Padmé. Following the rise of the Empire and Padmé\'s death, C-3PO\'s memory was **wiped** to protect the secret locations of the Skywalker twins. He was given to **Bail Organa** of Alderaan and served Princess Leia Organa for decades, becoming a vital, if often complaining, member of the Rebel Alliance. He accompanied Leia on her mission to retrieve the Death Star plans and witnessed the destruction of Alderaan. He remained a continuous presence throughout the Galactic Civil War and the subsequent conflicts, often serving as a translator and diplomat. In the Resistance era, he was forced to temporarily sacrifice his memories to translate an ancient Sith text, a moment of profound sacrifice. However, his memories were later restored by R2-D2, ensuring the continuity of the galaxy\'s most anxious historical record.',
                image: 'https://placehold.co/800x450/F0E68C/000000?text=C-3PO+Protocol+Droid',
                videos: ['https://slideshow.link/c3po_memorable_moments', 'https://slideshow.link/c3po_memory_wipe']
            },
            {
                id: 6,
                name: 'R2-D2',
                role: 'Astromech Droid / Data Keeper',
                description: 'A resourceful and heroic astromech droid who served Anakin Skywalker, then Luke Skywalker, playing a key role in every major galactic conflict.',
                traits: ['Brave', 'Loyal', 'Resourceful', 'Unflappable'],
                history: 'R2-D2 began his service on Naboo and eventually became the personal astromech of **Anakin Skywalker** during the **Clone Wars**, forming an extraordinary bond with the Jedi Knight. Unlike C-3PO, R2-D2 never had his memory wiped and thus is a living archive of nearly all major events, from the Clone Wars to the rise of the First Order. R2-D2 served Padmé and then Senator **Bail Organa**, before being entrusted with the mission of carrying the stolen **Death Star plans** to Obi-Wan Kenobi. He, along with C-3PO, was acquired by the Lars family on Tatooine, successfully leading Luke Skywalker to Obi-Wan and launching the Rebel Alliance\'s war effort. R2-D2 served as **Luke Skywalker**\'s astromech during his pivotal flight at the **Battle of Yavin**. He accompanied Luke throughout his training and missions, including Dagobah and Endor, and was present for the emotional climax of the conflict. After the war, R2-D2 remained with Luke, going into a long sleep when Luke went into exile. He eventually awoke and revealed the crucial partial map needed to locate Luke, enabling the Resistance to find their final hope. R2-D2 is undeniably one of the greatest non-Force sensitive heroes in galactic history.',
                image: 'https://placehold.co/800x450/4169E1/FFFFFF?text=R2-D2+Astromech',
                videos: ['https://slideshow.link/r2d2_clone_wars_service', 'https://slideshow.link/r2d2_saves_the_day']
            },
            {
                id: 7,
                name: 'BB-8',
                role: 'Astromech Droid / Resistance Pilot Companion',
                description: 'A highly maneuverable and dedicated BB-series astromech droid, fiercely loyal to his master, Poe Dameron, and the Resistance.',
                traits: ['Determined', 'Agile', 'Loyal', 'Expressive'],
                history: 'BB-8 was the trusted astromech droid and companion of the renowned Resistance pilot **Poe Dameron**. BB-8 was instrumental at the very beginning of the conflict with the First Order, when he was entrusted with the crucial map segment needed to find the exiled Jedi Master **Luke Skywalker**. After Poe was captured, BB-8 crash-landed on Jakku, where he befriended the scavenger **Rey** and the defector **Finn**, becoming the central figure connecting all the new heroes. His dedication to Poe was evident in every action, from navigating intense starfighter battles to carrying out critical repairs. BB-8 participated in numerous missions for the Resistance, including the destruction of Starkiller Base and the evacuation of D\'Qar, often proving to be far more courageous and resourceful than his size suggested. He remained Poe\'s co-pilot and confidante throughout the war against the First Order, eventually celebrating the final victory over the Sith Eternal with the rest of the Resistance heroes.',
                image: 'https://placehold.co/800x450/FF8C00/FFFFFF?text=BB-8+Resistance+Droid',
                videos: ['https://slideshow.link/bb8_on_jakku', 'https://slideshow.link/bb8_pilot_support']
            },
            {
                id: 8,
                name: 'Poe Dameron',
                role: 'Resistance Pilot / Commander / General',
                description: 'The best pilot in the galaxy, known for his daring tactics and confidence, who rose to command the entire Resistance movement.',
                traits: ['Pilot Ace', 'Daring', 'Confident', 'Charismatic'],
                history: 'Poe Dameron was the son of Rebel heroes and initially followed his mother\'s footsteps as a pilot. After a brief period as a spice runner, he dedicated himself to the cause of the Resistance, becoming General Leia Organa\'s most trusted pilot and the leader of the elite **Black Squadron**. His first major mission was retrieving the map segment to find Luke Skywalker, which led to his capture by the First Order and his eventual escape with the stormtrooper defector **Finn**, forming an immediate and lasting friendship. Poe\'s skill and daring leadership were crucial during the destruction of **Starkiller Base** and the defense of the Resistance fleet during the ensuing pursuit. His aggressive tactics sometimes clashed with the cautious approach of the Resistance admirals, leading to disciplinary actions, but his unwavering faith in his comrades and his ability to inspire those around him were unmatched. Following the passing of Leia Organa, Poe was promoted to **General** and co-led the Resistance alongside Finn, demonstrating maturity and strategic planning in leading the final assault that defeated the forces of the Sith Eternal on Exegol.',
                image: 'https://placehold.co/800x450/B22222/FFFFFF?text=Poe+Dameron+General',
                videos: ['https://slideshow.link/poe_and_finn_escape', 'https://slideshow.link/resistance_commander']
            },
            {
                id: 9,
                name: 'Admiral Ackbar',
                role: 'Admiral of the Rebel Fleet / Mon Calamari Commander',
                description: 'A brilliant Mon Calamari military strategist, best known for commanding the Rebel Alliance fleet during the Battle of Endor.',
                traits: ['Strategic', 'Dedicated Commander', 'Cynical', 'Veteran'],
                history: 'Gial Ackbar was a native of the planet Mon Cala, who served as a soldier and later as a military commander. When the Empire invaded his home world, he was imprisoned and forced to serve as a slave and interpreter for **Grand Moff Tarkin**, which allowed him to gain invaluable insight into Imperial military tactics. After his escape, he became one of the foremost military commanders in the nascent Rebel Alliance. His greatest triumph was commanding the entire Rebel fleet during the decisive **Battle of Endor**. It was here he famously declared, **"It\'s a trap!"** upon realizing the fleet was drawn into an ambush by the second Death Star. His quick-thinking and strategic skill allowed the fleet to survive the initial onslaught and rally to victory. Following the war, Ackbar was integral to the New Republic\'s formation and defense. He continued to serve as a high-ranking officer in the Resistance against the First Order, commanding the flagship *Raddus*. He was tragically killed during the First Order\'s pursuit when the *Raddus* bridge was destroyed, sacrificing his life in the line of duty to protect the remaining Resistance forces.',
                image: 'https://placehold.co/800x450/4682B4/FFFFFF?text=Admiral+Ackbar+Strategist',
                videos: ['https://slideshow.link/ackbar_it_is_a_trap', 'https://slideshow.link/battle_of_endor_fleet']
            },
            {
                id: 10,
                name: 'Mon Mothma',
                role: 'Chief of State / Founder of the Rebel Alliance',
                description: 'The charismatic and powerful politician from Chandrila who was instrumental in consolidating various rebel cells into the unified Rebel Alliance.',
                traits: ['Diplomacy', 'Political Influence', 'Moral Leader', 'Calm'],
                history: 'Mon Mothma served as the Senator representing Chandrila in the Galactic Senate during the final days of the Republic and the early Empire. Alongside allies like **Bail Organa** and **Padmé Amidala**, she was an outspoken critic of Palpatine\'s increasing executive powers, believing the Republic\'s democracy was being eroded. After Palpatine dissolved the Senate, she publicly defected from the Empire and began the difficult, dangerous task of consolidating the disparate resistance movements scattered across the galaxy. As the de facto leader of the **Rebel Alliance**, she was the central figure who provided the moral and political justification for the war. Her influence was key to obtaining the resources and intelligence needed for major operations, including the mission to steal the Death Star plans. Following the defeat of the Empire at Endor, Mon Mothma became the first **Chief of State of the New Republic**, working tirelessly to establish a peaceful, democratic government. She oversaw the transition from war to peace, setting the New Republic on its course before eventually retiring from politics.',
                image: 'https://placehold.co/800x450/90EE90/000000?text=Mon+Mothma+Rebel+Leader',
                videos: ['https://slideshow.link/mon_mothma_speeches', 'https://slideshow.link/founding_of_the_alliance']
            },
            {
                id: 11,
                name: 'Bail Organa',
                role: 'Senator of Alderaan / Co-founder of the Rebel Alliance',
                description: 'A kind and influential politician who used his position to shield and nurture the Rebellion from its earliest days, and the adoptive father of Leia.',
                traits: ['Benevolent', 'Dedicated', 'Political Planner', 'Secretive'],
                history: 'Bail Organa, the Viceroy of Alderaan, was a highly respected Senator in the final years of the Republic. He was a close friend and political ally of **Padmé Amidala** and **Mon Mothma**. Sensing the growing threat of Palpatine, Bail worked secretly to establish a network of communication and aid for resistance movements. He was present on Polis Massa for the birth of **Luke** and **Leia** Skywalker. To protect them from their father, Bail and his wife, Queen Breha Organa, adopted Leia, raising her as a Princess of Alderaan while Luke was sent to Tatooine. For years, Bail covertly used his resources and political immunity to supply and coordinate the growing, scattered Rebel cells, often traveling the galaxy to personally manage the operations. He was one of the true, foundational architects of the **Rebel Alliance**. His long service to peace and freedom ended tragically when he was on his home world of **Alderaan** when the first Death Star arrived. He was killed, along with his planet, when Grand Moff Tarkin ordered the weapon to be fired, solidifying the Empire\'s tyranny and making his adopted daughter, Leia, an orphan of the galaxy.',
                image: 'https://placehold.co/800x450/DAA520/000000?text=Bail+Organa+Architect',
                videos: ['https://slideshow.link/bail_organa_early_rebellion', 'https://slideshow.link/alderaan_senator']
            },

            // --- ROGUE ONE SQUAD / EXTREMIST ---

            {
                id: 12,
                name: 'Cassian Andor',
                role: 'Rebel Intelligence Officer',
                description: 'A cynical, ruthless, but ultimately dedicated intelligence agent who committed dark acts for the greater good of the Rebellion.',
                traits: ['Dedicated', 'Resourceful Spy', 'Jaded', 'Sharp Shooter'],
                history: 'Cassian Andor\'s early life was scarred by Imperial oppression, fueling a deep hatred for the Empire. He became a veteran intelligence officer for the burgeoning Rebel Alliance, known for his ability to handle morally complex missions and make difficult sacrifices. He joined the Rebellion at the age of six, essentially dedicating his entire life to the cause. By the time of the **Rogue One** mission, he was jaded and cynical, willing to commit dark deeds—including killing sources to protect the Rebellion\'s secrets. He was tasked with leading the mission to retrieve **Jyn Erso** and eventually kill her father, Galen Erso, who was forced to work on the Death Star project. However, Cassian became inspired by Jyn\'s passion and commitment to a hopeful cause. He chose to defy his initial orders and join Jyn on the critical mission to steal the Death Star plans from the Imperial data archive on **Scarif**. Cassian secured the plans, transmitting them to the Rebel fleet, ensuring the Alliance had the means to destroy the superweapon. He and Jyn died together on the beach of Scarif, engulfed by the Death Star\'s devastating orbital strike, their sacrifices ensuring the New Hope could begin.',
                image: 'https://placehold.co/800x450/483D8B/FFFFFF?text=Cassian+Andor+Spy',
                videos: ['https://slideshow.link/cassian_andor_origins', 'https://slideshow.link/scarif_final_moments']
            },
            {
                id: 13,
                name: 'Jyn Erso (Rogue One)',
                role: 'Criminal / Rebel Specialist',
                description: 'The troubled daughter of the Death Star\'s chief architect, whose final, heroic mission secured the plans that saved the galaxy.',
                traits: ['Rebellious', 'Resilient', 'Passionate', 'Martial Artist'],
                history: 'Jyn Erso was the daughter of Galen Erso, the lead scientist forced to design the **Death Star**. After Imperial Director Orson Krennic murdered her mother and forced her father back into servitude, Jyn was raised in hiding by the extremist Rebel **Saw Gerrera**. As she grew older, her path was marked by criminal activity and a distrust of institutions, eventually leading to her arrest by the Empire. She was broken out of custody by the Rebel Alliance, led by **Cassian Andor**, because they needed her to track down her father and the truth about the superweapon. Initially reluctant, Jyn became convinced of the cause after hearing a recorded message from her father, revealing that he had deliberately built a fatal flaw into the Death Star. Driven by her father\'s sacrifice and her own commitment to the Rebellion, Jyn led the "Rogue One" team on the desperate, unauthorized mission to the Imperial data archives on **Scarif**. She climbed the communications tower and, with Cassian\'s help, transmitted the Death Star plans to the waiting Rebel fleet. Like the rest of the Rogue One squad, she died on Scarif, embraced by Cassian as the Death Star\'s single-reactor shot wiped out the base, her final, monumental act making the destruction of the Empire\'s ultimate weapon possible.',
                image: 'https://placehold.co/800x450/A52A2A/FFFFFF?text=Jyn+Erso+Rogue+One',
                videos: ['https://slideshow.link/jyn_erso_father_message', 'https://slideshow.link/scarif_data_transmission']
            },
            {
                id: 14,
                name: 'Bodhi Rook (Rogue One)',
                role: 'Imperial Pilot Defector / Catalyst',
                description: 'A former Imperial cargo pilot whose defection and message from Galen Erso spurred the creation of the Rogue One mission.',
                traits: ['Nervous', 'Skilled Pilot', 'Conscience-driven', 'Honest'],
                history: 'Bodhi Rook was an Imperial cargo pilot based on Jedha who was instrumental in the mission to steal the Death Star plans. He became disillusioned with the Empire and was contacted by **Galen Erso**, the Death Star\'s chief architect. Galen entrusted Bodhi with a critical transmission explaining the weapon\'s weakness and pleading for the Rebellion to take action. Bodhi defected from the Empire and sought out the extremist **Saw Gerrera** to deliver the message, a traumatic experience that left him mentally shaken. He was rescued by the Rogue One team and reluctantly guided them to the moon of Jedha to find Gerrera. Bodhi\'s honest testimony and the message he carried became the crucial catalyst that convinced Jyn Erso and the core Rebel leadership of the Death Star\'s vulnerability. During the final push on **Scarif**, Bodhi used his Imperial knowledge and engineering skills to re-route the Master Switch, establishing the vital communication link between the Scarif archives and the Rebel fleet. He sacrificed his life in the process, killed by a grenade blast, but not before completing his task and securing the transmission of the plans.',
                image: 'https://placehold.co/800x450/B8860B/000000?text=Bodhi+Rook+Pilot+Defector',
                videos: ['https://slideshow.link/bodhi_rook_defection', 'https://slideshow.link/scarif_communications']
            },
            {
                id: 15,
                name: 'Chirrut Îmwe (Rogue One)',
                role: 'Guardian of the Whills / Force Devotee',
                description: 'A blind, spiritual warrior devoted to the Force who served as the moral anchor of the Rogue One team.',
                traits: ['Spiritual', 'Force Devotee', 'Exceptional Fighter', 'Blind'],
                history: 'Chirrut Îmwe was one of the last remaining **Guardians of the Whills** on the planet Jedha, a spiritual order dedicated to the Jedi and the Force. Though not a Jedi himself, Chirrut possessed a deep, intuitive connection to the Force and exceptional non-visual fighting prowess, often relying on his mantra, **"I am one with the Force, and the Force is with me."** He was the constant companion and protector of his lifelong friend, **Baze Malbus**. He was rescued by Jyn Erso and Cassian Andor from Imperial troops on Jedha. His unwavering faith provided inspiration and guidance to the cynical members of the team. He joined the mission to **Scarif** to secure the Death Star plans, believing it was the will of the Force. In the final, desperate moments of the battle, Chirrut realized the crucial Master Switch needed to be activated. Despite being under heavy enemy fire, he walked across the battlefield, relying purely on the Force to guide his steps, activating the switch and ensuring the plans could be transmitted. He was instantly killed by an explosion after completing his task, a selfless act of faith that was immediately honored by Baze.',
                image: 'https://placehold.co/800x450/8B0000/FFFFFF?text=Chirrut+Imwe+Guardian',
                videos: ['https://slideshow.link/chirrut_force_mantra', 'https://slideshow.link/scarif_switch_activation']
            },
            {
                id: 16,
                name: 'Baze Malbus (Rogue One)',
                role: 'Mercenary / Guardian Companion',
                description: 'A heavily armed former Guardian of the Whills, outwardly skeptical of the Force but eternally loyal to his companion, Chirrut Îmwe.',
                traits: ['Heavily Armed', 'Skeptical', 'Protective', 'Loyal'],
                history: 'Baze Malbus was once a devoted Guardian of the Whills, but after the Empire occupied Jedha and destroyed the Jedi presence, he lost faith in the Force and adopted a more pragmatic, heavily armed lifestyle. He became a mercenary, relying on a powerful, repeating cannon rather than spiritual belief. Despite his skepticism, his life revolved around protecting his blind companion, **Chirrut Îmwe**, whom he followed unquestioningly. He joined the **Rogue One** mission primarily out of loyalty to Chirrut, offering crucial firepower to the group. During the chaotic Battle of **Scarif**, Baze served as the team\'s primary heavy artillery, providing devastating cover fire. He witnessed Chirrut\'s final, faithful sacrifice to activate the transmission switch. This final act of devotion reawakened Baze\'s dormant belief in the Force. Fueled by righteous anger and renewed faith, Baze charged the Imperial forces, yelling Chirrut\'s mantra ("I am one with the Force...") as he laid down cover fire. He was killed in the heroic, final assault, ensuring that the critical transmission completed before the Death Star blast hit the archives.',
                image: 'https://placehold.co/800x450/2F4F4F/FFFFFF?text=Baze+Malbus+Heavy+Gunner',
                videos: ['https://slideshow.link/baze_and_chirrut_dynamic', 'https://slideshow.link/baze_final_charge']
            },
            {
                id: 17,
                name: 'Saw Gerrera (Rogue One, Clone Wars, Rebels)',
                role: 'Extremist Rebel Leader / Freedom Fighter',
                description: 'A hardened veteran of the Clone Wars who developed into a radical and ruthless partisan leader, estranged from the mainstream Rebel Alliance.',
                traits: ['Extremist', 'Paranoid', 'Veteran Soldier', 'Fierce'],
                history: 'Saw Gerrera\'s career as a freedom fighter began during the **Clone Wars**, where he and his sister, Steela, fought to liberate their home world, Onderon, from Separatist control, receiving specialized training from **Anakin Skywalker** and **Obi-Wan Kenobi**. He became known for his aggressive, often ruthless tactics. Following the rise of the Empire, Saw devolved into an extremist, leading the **Partisans**, a violent rebel cell that was deemed too radical by the mainstream Rebel Alliance, led by **Mon Mothma**. He rescued and raised **Jyn Erso** after her mother was killed. Over time, his methods became increasingly violent and unstable due to constant fighting and physical damage. By the time of the **Rogue One** mission, he was based on Jedha and was paranoid and frail, relying on life-support equipment. He tortured the defector **Bodhi Rook** to verify his story. Though he confirmed the existence of the Death Star to Jyn, he chose to remain behind when the Empire attacked Jedha City, dying in the explosion caused by the Death Star\'s single-reactor shot. His extremist ideology and tactical history are a dark reflection of the sacrifices made in the fight for freedom.',
                image: 'https://placehold.co/800x450/483C32/FFFFFF?text=Saw+Gerrera+Extremist',
                videos: ['https://slideshow.link/saw_gerrera_clone_wars', 'https://slideshow.link/jedha_life_support']
            },

            // CLONE TROOPERS 
             {
                id: 10,
                name: 'Captain Rex (CT-7567 / ARC-5555)',
                role: 'Clone Captain / ARC Trooper / 501st Legion',
                description: 'An exceptional ARC trooper whose humanity, moral conscience, and close bond with Ahsoka Tano allowed him to defy Order $66$ and fight in the Rebellion.',
                traits: ['Humane', 'Loyal', 'Independent Thinker', 'Experienced Soldier'],
                history: 'Captain Rex served as the second-in-command of the **501st Legion** under **Anakin Skywalker**. He was one of the most visible and beloved clone troopers, known for his humanity, moral fortitude, and deep friendship with **Ahsoka Tano**. Rex participated in almost every major engagement of the Clone Wars, often mediating between the often-reckless Anakin and the more measured Ahsoka. Crucially, Rex was convinced by **ARC Trooper Fives** of the inhibitor chip conspiracy. Before **Order $66$** was executed during the **Siege of Mandalore**, Ahsoka risked everything to perform emergency surgery, successfully **removing Rex\'s chip**. This gave him free will, allowing him to help Ahsoka escape the clone betrayal. Years later, Rex became a key member of the nascent **Rebel Alliance**, fighting alongside Ahsoka and the *Ghost* crew (Kanan and Ezra) and rising to the rank of **Commander**. He is one of the few clones confirmed to have fought in the Galactic Civil War, surviving all the way through to the **Battle of Endor**.',
                image: 'https://placehold.co/800x450/FFA500/000000?text=Captain+Rex+ARC+Trooper',
                videos: ['https://slideshow.link/rex_and_ahsoka_bond', 'https://slideshow.link/rex_joins_the_rebellion']
            },
            {
                id: 1,
                name: 'Commander Cody (CC-2224)',
                role: 'Clone Commander (CC-2224) / 212th Attack Battalion',
                description: 'The highly professional and effective commander who served as Obi-Wan Kenobi\'s second-in-command throughout the Clone Wars.',
                traits: ['Professional', 'Tactical', 'Obedient', 'Efficient'],
                history: 'Commander Cody was one of the most visible and respected commanders of the Grand Army of the Republic, leading the **212th Attack Battalion**. He shared a close, trusting, and professional relationship with his Jedi General, **Obi-Wan Kenobi**, often coordinating strategy on the field. Cody participated in numerous major campaigns, including the battles of Christophsis, Saleucami, and Ryloth. His loyalty was absolute, proven when he readily executed **Order $66$** while on **Utapau**. Upon receiving the order directly from Darth Sidious, Cody immediately commanded his men to fire on General Kenobi, who was fortunate enough to survive the fall and escape. Cody\'s chip was functional, demonstrating the terrifying effectiveness of the Sith\'s long-term plan. Following the rise of the Empire, Cody continued to serve as an Imperial Commander for a short period before eventually stepping away from military service.',
                image: 'https://placehold.co/800x450/B87333/FFFFFF?text=Commander+Cody',
                videos: ['https://slideshow.link/cody_and_obiwan_partnership', 'https://slideshow.link/order_66_utapau']
            },
            {
                id: 2,
                name: 'Commander Gree (CC-1004)',
                role: 'Clone Commander (CC-1004) / 41st Elite Corps',
                description: 'A tactical commander known for his distinctive green armor and expertise in alien cultures and long-range planetary operations.',
                traits: ['Observant', 'Adaptive', 'Specialized', 'Disciplined'],
                history: 'Commander Gree led the **41st Elite Corps** and was assigned to serve under the venerable **Jedi Master Yoda**. His unit often performed scouting and planetary liberation missions in dense environments, which led to his signature green-patterned armor. Gree was stationed on the Wookiee home world of **Kashyyyk** during the final hours of the Clone Wars, fighting alongside Yoda and the Wookiee resistance. When **Order $66$** was activated, Gree immediately attempted to execute Yoda in a joint attack with Captain Faie. However, Yoda sensed the betrayal through the Force and, in a demonstration of surprising speed, swiftly turned and **decapitated** Gree before he could even raise his blaster, ensuring the Grand Master\'s survival and the clone\'s tragic compliance with the fatal command.',
                image: 'https://placehold.co/800x450/006400/FFFFFF?text=Commander+Gree',
                videos: ['https://slideshow.link/gree_kashyyyk_battle', 'https://slideshow.link/gree_vs_yoda']
            },
            {
                id: 3,
                name: 'Commander Wolffe (CC-3636)',
                role: 'Clone Commander / Wolfpack (104th Battalion)',
                description: 'The pragmatic and often cautious leader of the Wolfpack, marked by his signature scar and ocular implant.',
                traits: ['Pragmatic', 'Skilled Strategist', 'Resilient', 'Loyal to Plo Koon'],
                history: 'Commander Wolffe led the **104th Battalion**, known as the **Wolfpack**, and served closely with **Jedi Master Plo Koon**. Wolffe was involved in several high-risk missions, most notably the *Tusker* disaster where his ship was destroyed and many of his unit were killed, an event that left him with a visible scar and a cybernetic replacement for his eye. Wolffe\'s relationship with Plo Koon was one of deep respect, but his loyalty was tested by the inhibitor chip. He executed **Order $66$** when commanded, leading to the death of Plo Koon. Decades later, however, Wolffe, along with Captain Rex, was one of the few clones to **have his chip removed**. He lived in seclusion with Rex and Gregor on the planet Seelos in an old AT-TE walker, until they were discovered by the *Ghost* crew (Kanan Jarrus and Ezra Bridger). Wolffe, though paranoid about Imperial discovery, ultimately aided the nascent **Rebel Alliance**, proving his redemption.',
                image: 'https://placehold.co/800x450/4682B4/FFFFFF?text=Commander+Wolffe',
                videos: ['https://slideshow.link/wolffe_and_plo_koon', 'https://slideshow.link/wolffe_in_rebels']
            },
            {
                id: 4,
                name: 'Commander Bacara (CC-1138)',
                role: 'Clone Commander / Galactic Marines',
                description: 'A grim, methodical commander who led the Galactic Marines and often operated in harsh, specialized combat environments.',
                traits: ['Methodical', 'Austere', 'Special Forces Training', 'Disciplined'],
                history: 'Commander Bacara led the **Galactic Marines**, a unit highly specialized in fighting in extreme environmental conditions and serving as shock troops. He served under the aggressive and highly spiritual **Jedi Master Ki-Adi-Mundi**. Bacara and his Marines participated in major battles on planets like Mygeeto and Coruscant. Like Cody and Gree, Bacara followed the command of **Order $66$** without hesitation. He received the order while fighting on **Mygeeto** and immediately instructed his men to turn their fire upon Jedi Master Ki-Adi-Mundi, resulting in the Jedi\'s swift death. Bacara\'s unswerving obedience sealed the fate of his General and demonstrated his complete, tragic subjugation to the chip\'s programming.',
                image: 'https://placehold.co/800x450/D2B48C/000000?text=Commander+Bacara',
                videos: ['https://slideshow.link/bacara_galctic_marines', 'https://slideshow.link/order_66_mygeeto']
            },
            {
                id: 5,
                name: 'Commander Fox (CC-1010)',
                role: 'Clone Commander / Coruscant Guard',
                description: 'The stern leader of the Coruscant Guard, responsible for security, law enforcement, and protection of key Republic figures.',
                traits: ['Security Expert', 'Unwavering Loyalty', 'Strict', 'Internal Affairs'],
                history: 'Commander Fox was the leader of the **Coruscant Guard**, the unit responsible for maintaining law and order on the Republic capital world, protecting the Jedi Temple, and serving as Chancellor Palpatine\'s personal security detail. Fox was fiercely loyal to the Republic and the law. His history is marked by the controversial killing of **ARC Trooper Fives**. When Fives was trying to expose the inhibitor chip conspiracy and warn Anakin Skywalker, Fox and his men confronted the desperate trooper. Under intense pressure from Palpatine, Fox **shot and killed Fives** without fully understanding the gravity of the conspiracy Fives was attempting to reveal. This act ensured the secret of Order $66$ remained intact. He was later shown following Palpatine\'s orders without question, firmly established within the early Imperial security structure, a sad fate for a once-loyal Republic officer.',
                image: 'https://placehold.co/800x450/800000/FFFFFF?text=Commander+Fox',
                videos: ['https://slideshow.link/fox_coruscant_guard', 'https://slideshow.link/fox_and_fives_confrontation']
            },
            {
                id: 6,
                name: 'Commander Thire (CC-4477)',
                role: 'Clone Commander / 501st Legion',
                description: 'A key commander in the 501st, often serving under General Anakin Skywalker and Captain Rex during crucial missions.',
                traits: ['Competent', 'Supportive', 'Direct', 'Loyal to the Republic'],
                history: 'Commander Thire was a capable officer within the **501st Legion**, frequently operating alongside **Anakin Skywalker** and **Captain Rex**. He participated in several significant campaigns, including the pivotal first battle of Geonosis and the later defense of the Republic. Though his specific role in the execution of Order $66$ is less detailed than others, his service as a key commander in the most famous legion confirms his involvement in the conflict\'s critical moments. He was highly regarded for his ability to follow complex orders and coordinate large forces effectively in the heat of battle.',
                image: 'https://placehold.co/800x450/4169E1/FFFFFF?text=Commander+Thire',
                videos: ['https://slideshow.link/thire_and_the_501st']
            },
            {
                id: 7,
                name: 'Commander Appo (CC-1119)',
                role: 'Clone Commander / 501st Legion / Coruscant Guard',
                description: 'A stern, high-ranking clone officer who led the 501st during the execution of Order $66$ at the Jedi Temple.',
                traits: ['Unflinching', 'Authoritative', 'Stoic', 'Enforcer'],
                history: 'Commander Appo was a highly disciplined officer who served as Commander of the **501st Legion** during the most horrific event of the Clone Wars: the **March on the Jedi Temple**. Under the command of the newly christened Darth Vader (formerly Anakin Skywalker), Appo led the attack on the Temple, ruthlessly slaughtering Jedi, Padawans, and younglings alike. This action confirmed the complete, brutal obedience of the $501$st to the inhibitor chip. Appo himself was later encountered by **Senator Bail Organa** near the Temple. When Organa questioned the massacre, Appo offered only a cold denial of any wrongdoing before warning him away. Appo was later killed by the Jedi Padawan **Zett Jukassa** during the fighting, though his actions ensured the Purge of the Temple was successful.',
                image: 'https://placehold.co/800x450/696969/FFFFFF?text=Commander+Appo',
                videos: ['https://slideshow.link/appo_jedi_temple_march']
            },
            {
                id: 8,
                name: 'Commander Colt',
                role: 'Clone Commander / ARC Trooper',
                description: 'A decorated ARC trooper commander recognized for his unique armor markings and leadership in early Clone Wars operations.',
                traits: ['ARC Training', 'Decorated', 'Aggressive', 'Elite Soldier'],
                history: 'Commander Colt was a distinguished **ARC Trooper** who played a significant role in the Battle of Kamino. He was one of the many clones created and trained on Kamino and was considered one of the best. His primary duty was to lead the defense of the cloning facilities against Separatist invasion. During the Battle of Kamino, Colt fought bravely but was tragically **killed in action** by the treacherous Dark Jedi **Asajj Ventress**, who plunged her lightsaber into his chest. His death served as a stark example of the high cost of the war, though his ultimate loyalty remained with the Republic until the end of his short career.',
                image: 'https://placehold.co/800x450/000080/FFFFFF?text=Commander+Colt',
                videos: ['https://slideshow.link/commander_colt_kamino_defense']
            },
            {
                id: 9,
                name: 'Commander Thorn (CC-7513)',
                role: 'Clone Commander / Coruscant Guard / Elite Security',
                description: 'A dedicated clone commander specializing in security and VIP protection, recognized by his unique Phase II helmet.',
                traits: ['Protective', 'Loyal', 'Elite Security', 'Resolute'],
                history: 'Commander Thorn was another highly dedicated member of the **Coruscant Guard**, known for his distinctive markings and for carrying a powerful Z-6 rotary cannon, which earned him the nickname "Hammer." His ultimate loyalty was demonstrated when he was assigned to escort Senator Padmé Amidala on the planet **Scipio**. The planet was attacked by Separatist forces led by the Bounty Hunter **Rush Clovis**. In a desperate attempt to protect the Senator and repel the overwhelming number of droids, Thorn and his squad fought fiercely. Though his men were quickly overrun, Thorn stood alone, firing his cannon until he was struck down. His heroic and fatal last stand to protect a Republic Senator made him a symbol of the clones\' ultimate devotion and willingness to sacrifice everything for the Republic.',
                image: 'https://placehold.co/800x450/8B0000/FFFFFF?text=Commander+Thorn',
                videos: ['https://slideshow.link/thorn_last_stand']
            },

            // --- KEY ARC TROOPERS / 501ST SPECIALISTS ---
            {
                id: 11,
                name: 'Fives (CT-5555)',
                role: 'ARC Trooper / 501st Legion Specialist',
                description: 'A courageous ARC trooper who risked and ultimately lost his life attempting to expose the inhibitor chip conspiracy and save the Jedi Order.',
                traits: ['Inquisitive', 'Determined', 'Brave', 'Conspirator'],
                history: 'Fives was a survivor of the original Domino Squad. He became an **ARC Trooper** following the Battle of Kamino and joined the **501st Legion**. Fives\' history is defined by his discovery of the **inhibitor chips** after his squadmate Tup suffered a malfunction that caused him to execute Order $66$ prematurely. Fives became consumed by the need to understand why and conducted his own investigation, eventually extracting his own chip and Tup\'s. He realized the chips were a systematic mechanism designed to force the clones to kill the Jedi. When he desperately tried to warn **Anakin Skywalker** and the other Jedi of Palpatine\'s scheme, he was framed by Palpatine, labeled a traitor, and tragically **killed by Commander Fox** in a panic-induced shooting. His noble sacrifice failed to stop the Purge, but his evidence was preserved, ultimately allowing Rex and Ahsoka to save themselves.',
                image: 'https://placehold.co/800x450/CD853F/000000?text=ARC+Trooper+Fives',
                videos: ['https://slideshow.link/fives_inhibitor_chip_discovery', 'https://slideshow.link/fives_death_tragedy']
            },
            {
                id: 12,
                name: 'Echo (CT-1409)',
                role: 'ARC Trooper / Specialist / Clone Force 99',
                description: 'A methodical ARC Trooper who was believed killed but was later cybernetically enhanced and joined the specialized Clone Force 99.',
                traits: ['Methodical', 'Analytical', 'Cybernetic', 'Loyal'],
                history: 'Echo was a member of the original Domino Squad and later achieved the coveted rank of **ARC Trooper**. He was believed killed during the explosive mission to rescue Jedi Master Even Piell from the Citadel, an event that deeply affected Captain Rex. However, Echo was later revealed to have been captured by the Separatists and turned into a **cybernetic slave**, used to predict Republic tactics. He was rescued by **Clone Force 99 (the Bad Batch)** and his former comrade Rex. Due to his extensive cybernetic enhancements and his vast knowledge of Republic military strategy, Echo found his new place not in the regular army, but among the enhanced specialists, joining the **Bad Batch** as their analytical and strategic expert. He defected from the Empire with the rest of the Bad Batch and assisted them on numerous missions, providing invaluable tactical insight.',
                image: 'https://placehold.co/800x450/C0C0C0/000000?text=ARC+Trooper+Echo',
                videos: ['https://slideshow.link/echo_citadel_escape', 'https://slideshow.link/echo_joins_bad_batch']
            },
            {
                id: 13,
                name: 'Jesse (CT-5597)',
                role: 'Clone Trooper / 501st Legion Specialist',
                description: 'A committed and decorated member of the 501st who fell completely under the influence of the inhibitor chip.',
                traits: ['Patriotic', 'Zealous', 'Loyal to the Republic', 'Energetic'],
                history: 'Jesse was a dedicated member of the **501st Legion**, recognizable by the Republic crest tattooed on his face and painted on his helmet. He fought alongside Rex and Anakin in countless battles, including the crucial Siege of Mandalore. He was promoted to **ARC Trooper** following the Battle of Umbara. His unwavering belief in the Republic was twisted into a fanatical zeal by the inhibitor chip. During the **Siege of Mandalore**, when Order $66$ was activated, Jesse became one of the most violent enforcers of the Purge, hunting down Ahsoka Tano and viewing her as a traitor. He was promoted to Commander by the chip\'s influence and led the attack on the Republic cruiser, driven by a corrupted sense of patriotism. He was ultimately **killed in combat** while pursuing Ahsoka, a tragic victim of Palpatine\'s deep-seated deception.',
                image: 'https://placehold.co/800x450/B0C4DE/000000?text=ARC+Trooper+Jesse',
                videos: ['https://slideshow.link/jesse_siege_of_mandalore']
            },

            // --- CLONE FORCE 99 (THE BAD BATCH) ---

            {
                id: 14,
                name: 'Clone Force 99 (The Bad Batch)',
                role: 'Special Forces / Defectors / Mercenaries',
                description: 'A genetically modified elite squad known for their unique skills, unorthodox tactics, and collective defection from the emerging Galactic Empire.',
                traits: ['Specialized', 'Unorthodox', 'Close-Knit', 'Effective'],
                history: 'Clone Force 99, or the **Bad Batch**, consisted of clones with genetic mutations that granted them specialized, superior abilities. **Hunter** served as the tactical leader (enhanced senses), **Wrecker** was the muscle (enhanced strength), **Tech** was the intelligence expert (enhanced intellect), and **Crosshair** was the sniper (enhanced eyesight). They operated outside standard protocols. Upon the execution of **Order $66$**, most of their inhibitor chips were defective, leaving them largely unaffected. They were soon tasked by the newly formed Empire with missions that began to violate their moral code, leading them to question the new regime. After the rescue of **Echo** and the discovery of the pure, unmodified clone **Omega** on Kamino, the core squad **defected** from the Empire. They became mercenaries, using their skills to navigate the chaotic post-Clone Wars galaxy, constantly hunted by the Empire, including their former teammate **Crosshair**, whose chip was fully activated, forcing him into fanatical loyalty to the Empire.',
                image: 'https://placehold.co/800x450/6A5ACD/FFFFFF?text=The+Bad+Batch+Special+Forces',
                videos: ['https://slideshow.link/bad_batch_origins', 'https://slideshow.link/bad_batch_defection']
            },
            {
                id: 15,
                name: 'Omega',
                role: 'Unmodified Female Clone / Bad Batch Member',
                description: 'A pure, unmodified female clone of Jango Fett who was adopted by the Bad Batch and represents the future of the clone line.',
                traits: ['Inquisitive', 'Observant', 'Unique Genetic Makeup', 'Compassionate'],
                history: 'Omega was a unique, **unmodified female clone** of Jango Fett, serving as a medical assistant in the Kaminoan cloning labs. She was introduced when she bonded instantly with Clone Force 99 (the Bad Batch). Following the rise of the Empire, she defected with the Bad Batch, becoming a crucial member of their crew. She shares the same pure genetic makeup as Boba Fett, making her a prized target for Imperial scientists like **Dr. Royce Hemlock** who sought to utilize her genetic material for Palpatine\'s secret cloning projects. Omega often acted as the emotional and moral compass for the squad, demonstrating an exceptional level of resilience and cunning, constantly finding herself at the center of the conflict between the clones\' past and the Empire\'s future.',
                image: 'https://placehold.co/800x450/F08080/000000?text=Omega+Clone+Foundling',
                videos: ['https://slideshow.link/omega_joins_the_squad']
            },

            // --- OTHER FAMOUS CLONE TROOPERS ---

            {
                id: 16,
                name: 'Waxer & Boil',
                role: 'Clone Troopers / 212th Attack Battalion',
                description: 'A popular duo from the 212th, known for their distinct personalities and encounter with a young Twi\'lek orphan on Ryloth.',
                traits: ['Humorous', 'Empathetic', 'Dedicated', 'Duo'],
                history: 'Waxer and Boil were two troopers from the **212th Attack Battalion** who served under Commander Cody and General Obi-Wan Kenobi. They were notably involved in the liberation of **Ryloth**, an arc that revealed the clones\' capacity for compassion. While scouting, they discovered a frightened young Twi\'lek girl named **Nala Se**, who was hiding from Separatist droids. Against military protocol, they took great lengths to protect the child and bring her to safety, demonstrating genuine empathy. Their actions proved that the clones were individuals capable of compassion, despite their programmed existence. Both troopers were later involved in other major campaigns until their deaths; Waxer was tragically killed in a friendly fire incident on Umbara, adding to the high body count of the conflict.',
                image: 'https://placehold.co/800x450/9370DB/FFFFFF?text=Waxer+and+Boil',
                videos: ['https://slideshow.link/waxer_boil_ryloth']
            },
            {
                id: 17,
                name: 'Dogma & Tup',
                role: 'Clone Troopers / 501st Legion',
                description: 'Two troopers whose actions directly led to the discovery of the inhibitor chip and the catastrophic failure of the Jedi Order.',
                traits: ['Tup: Malfunctioning', 'Dogma: Zealous', '501st Service', 'Involved in Conspiracy'],
                history: 'Tup and Dogma were members of the **501st Legion** who served alongside Rex and Fives. **Tup** was the unwitting catalyst for the inhibitor chip conspiracy when his chip malfunctioned during the Battle of Ringo Vinda. This malfunction caused him to execute Order $66$ prematurely, resulting in him tragically killing Jedi Master Tiplar. His subsequent investigation led Fives to uncover the chips. **Dogma** was a fiercely loyal, zealous trooper who was horrified when he learned of General Krell\'s betrayal on Umbara, leading him to execute Krell. Dogma later became involved in the investigation into Tup\'s death and Fives\' subsequent paranoia, cementing his role in the complex web of betrayal and obedience that defined the final days of the Republic.',
                image: 'https://placehold.co/800x450/DAA520/000000?text=Tup+and+Dogma',
                videos: ['https://slideshow.link/tup_chip_malfunction']
            },
            {
                id: 18,
                name: 'Gregor',
                role: 'Commando Clone / Republic Commando / Rebel Agent',
                description: 'A powerful, decommissioned commando clone who later fought with the Wolfpack and became a member of the Rebel Alliance.',
                traits: ['Amnesiac', 'Powerful Fighter', 'Crazed', 'Redeemed'],
                history: 'Gregor was an elite **Republic Commando** (RC-$1136$) who suffered from amnesia after being separated from his unit and was stranded on the planet Abafar. He was discovered by Captain Rex and the droids, who found him working as a simple dishwasher. After recovering his memories, Gregor helped them escape the planet, demonstrating his immense combat prowess, but was believed killed in the process. He later reappeared, having been one of the few clones to have his inhibitor chip removed. He lived in retirement with **Captain Rex** and **Commander Wolffe** in their modified AT-TE walker. Gregor joined the Rebel cause with Rex and Wolffe, fighting alongside the *Ghost* crew and bravely participating in the liberation of Lothal. He died in that battle, sacrificing himself to ensure the Rebel victory and cementing his legacy as a true freedom fighter.',
                image: 'https://placehold.co/800x450/CD5C5C/FFFFFF?text=Clone+Commando+Gregor',
                videos: ['https://slideshow.link/gregor_amnesia_and_rescue', 'https://slideshow.link/gregor_lothal_sacrifice']
            },
            {
                id: 19,
                name: 'Kix',
                role: 'Clone Medic / 501st Legion',
                description: 'A dedicated clone medic with the 501st, known for his commitment to saving lives, regardless of the chaos of war.',
                traits: ['Medic', 'Caring', 'Skilled', '501st Service'],
                history: 'Kix was the chief medic of the **501st Legion**, easily recognizable by his "For those who fight, we bring the fight" slogan tattooed on his head. He was present during many of the deadliest battles of the Clone Wars, always focused on his primary duty to save lives. He was heavily involved in the investigations following Tup\'s malfunction, suspecting foul play and becoming highly aware of the political machinations surrounding the clones\' minds. Due to his inquisitive nature, he was later discovered to be investigating the inhibitor chip conspiracy independently, prompting Count Dooku to have him captured and placed in **stasis** in a cryogenic pod. Kix remained frozen until decades after the Clone Wars, when he was found and thawed by pirates. This twist of fate meant Kix entirely missed the execution of **Order $66$**, essentially making him a man out of time and one of the last remaining veterans of the Republic era.',
                image: 'https://placehold.co/800x450/B0E0E6/000000?text=Clone+Medic+Kix',
                videos: ['https://slideshow.link/kix_stasis_discovery']
            },


            // --- MANDALORIANS ---
             {
                id: 9,
                name: 'Pre Vizsla',
                role: 'Mandalorian Governor / Leader of Death Watch',
                description: 'The leader of the violent, traditionalist splinter group Death Watch, who sought to violently overthrow the pacifist government of Mandalore.',
                traits: ['Mandalorian Zealot', 'Ambitious', 'Wielder of the Darksaber', 'Political Leader'],
                history: 'Pre Vizsla was the governor of the planet Concordia and the leader of **Death Watch**, a traditionalist Mandalorian terrorist group dedicated to restoring the warrior culture of Mandalore, which had been outlawed by Duchess Satine Kryze. Vizsla was a direct descendant of the original wielder of the **Darksaber**, which he used as a symbol of his claim to rule. He secretly collaborated with **Count Dooku** and the Separatists to destabilize Mandalore, later forging an uneasy alliance with **Darth Maul** and **Savage Opress** to launch a full-scale coup. After seizing control and betraying Maul, Vizsla was challenged by the Sith Lord to a duel for the throne. Maul defeated Vizsla in a decisive battle, claiming the Darksaber and officially ending Vizsla\'s claim and his life, leaving his former lieutenant, Bo-Katan Kryze, to continue the fight for Mandalore.',
                image: 'https://placehold.co/800x450/8B4513/FFFFFF?text=Pre+Vizsla+Death+Watch',
                videos: ['https://slideshow.link/pre_vizsla_maul_duel', 'https://slideshow.link/death_watch_origins']
            },
            {
                id: 1,
                name: 'Din Djarin (The Mandalorian)',
                role: 'Mandalorian Foundling / Bounty Hunter / Clan Leader',
                description: 'A highly capable bounty hunter who strictly follows the ancient creed of "The Way," which later leads him to defy the Bounty Hunters Guild for a single Foundling.',
                traits: ['Strictly Religious', 'Resourceful', 'Protective', 'Skilled Fighter'],
                history: 'Din Djarin was a Foundling, rescued as a child from a Separatist attack by a Mandalorian covert, leading him to adopt "The Way" and become a highly disciplined warrior. After the rise of the Empire, he worked primarily as a solitary bounty hunter in the Outer Rim. His life changed forever when he accepted a high-value commission from the remnants of the Empire to retrieve **"The Asset,"** a Force-sensitive child named **Grogu**. Defying the guild and his own moral code, Din Djarin rescued Grogu and committed himself to finding the child\'s people (the Jedi), turning him into a fugitive. His quest led him to ally with figures like **Bo-Katan Kryze**, who viewed his strict adherence to "The Way" as antiquated. Din Djarin inadvertently won the **Darksaber** in combat from Moff Gideon, becoming the reluctant and often conflicted leader of the Mandalorians. His journey is a testament to the power of paternal bonds, ultimately leading him to help Grogu begin his Jedi training and join the fight to reclaim Mandalore.',
                image: 'https://placehold.co/800x450/4B0082/FFFFFF?text=Din+Djarin+Bounty+Hunter',
                videos: ['https://slideshow.link/din_djarin_the_way', 'https://slideshow.link/foundling_grogu_rescue']
            },
            {
                id: 2,
                name: 'Bo-Katan Kryze',
                role: 'Mandalorian Royal / Clan Leader / Regent',
                description: 'A fierce Mandalorian warrior, former lieutenant of Death Watch, and legitimate claimant to the throne of Mandalore who seeks to unite her people.',
                traits: ['Proud', 'Fierce Leader', 'Political Activist', 'Unifying Figure'],
                history: 'Bo-Katan Kryze is the sister of Duchess Satine Kryze and a member of the Mandalorian royal house. Initially a lieutenant in the extremist group **Death Watch**, she sought to restore Mandalore\'s ancient warrior traditions, often clashing with her sister\'s pacifist rule. She later broke away from Death Watch when their leader, Pre Vizsla, was defeated by **Darth Maul**, who then claimed the **Darksaber**. Bo-Katan subsequently led the **Nite Owls** and worked with the Republic during the **Siege of Mandalore** to drive out Maul. Following the rise of the Empire, she briefly served as Regent before being replaced by an Imperial puppet. Her goal throughout the Galactic Civil War and its aftermath was the same: reclaim the Darksaber and retake her homeworld. She worked alongside the Rebel Alliance and later the fragmented Mandalorians, eventually partnering with **Din Djarin**. Her tireless efforts culminated in her taking possession of the Darksaber and leading her people to successful liberation of the planet **Mandalore** from Imperial remnants.',
                image: 'https://placehold.co/800x450/8B4513/FFFFFF?text=Bo-Katan+Mandalore+Ruler',
                videos: ['https://slideshow.link/bo-katan_siege_of_mandalore', 'https://slideshow.link/nite_owls_factions']
            },
            {
                id: 3,
                name: 'Sabine Wren (Rebels, Ahsoka)',
                role: 'Mandalorian Artist / Rebel Saboteur / Jedi Padawan',
                description: 'A gifted, rebellious artist and demolitions expert who served on the *Ghost* crew and became a key figure in the early Rebellion.',
                traits: ['Artistic', 'Rebellious', 'Demolitions Expert', 'Fierce Fighter'],
                history: 'Sabine Wren is a young Mandalorian from **Clan Wren** of House Vizsla. As a cadet at the Imperial Academy, she created a weapon capable of targeting and destroying Mandalorian Beskar armor, believing it would help the Empire maintain peace. Upon realizing the Empire used her weapon against her own people, she was racked with guilt and defected, becoming a Rebel operative on the **Spectres** team aboard the **Ghost**. Sabine served as the crew\'s weapons expert and artist, using explosions and graffiti as forms of protest. She briefly wielded the **Darksaber** and helped Bo-Katan secure it to unite the Mandalorians. Following the defeat of the Empire on Lothal, Sabine dedicated herself to finding her lost friend, **Ezra Bridger**, who had vanished while defeating Grand Admiral Thrawn. She later became the unofficial apprentice of **Ahsoka Tano**, struggling to learn the ways of the Force but proving her loyalty and martial skill on her continued quest to locate Ezra.',
                image: 'https://placehold.co/800x450/FFD700/000000?text=Sabine+Wren+Mandalorian',
                videos: ['https://slideshow.link/sabine_wren_darksaber', 'https://slideshow.link/sabine_graffiti_art']
            },
            {
                id: 4,
                name: 'Hera Syndulla (Rebels, Ahsoka)',
                role: 'Twi\'lek Pilot / General of the Rebel Alliance / New Republic',
                description: 'The exceptional Twi\'lek pilot and commanding General who led the *Ghost* crew and became a backbone of the entire Rebellion.',
                traits: ['Master Pilot', 'Mother Figure', 'Calm Leader', 'Strategist'],
                history: 'Hera Syndulla was a Twi\'lek from Ryloth, the daughter of the freedom fighter **Cham Syndulla**. Her passion for flying and her innate leadership skills led her to purchase and command the freighter **Ghost**, gathering a diverse crew of misfits (Kanan, Ezra, Zeb, Sabine, Chopper) who formed the core cell of the nascent Rebellion. Hera was the calm, nurturing, and pragmatic leader who kept the **Spectres** together, often mediating disputes. Her piloting skills were legendary, earning her the rank of **General** in the Rebel Alliance. She became the mother of **Jacen Syndulla** with her partner, Jedi Master Kanan Jarrus, who tragically sacrificed himself for her. Hera fought in major campaigns, including the **Battle of Endor**, and continued to serve the New Republic as a revered General decades later, using her influence to advocate for the search for her missing crew members, Ezra and Sabine.',
                image: 'https://placehold.co/800x450/808000/FFFFFF?text=Hera+Syndulla+General',
                videos: ['https://slideshow.link/hera_ghost_pilot', 'https://slideshow.link/hera_jacen_syndulla']
            },
            {
                id: 5,
                name: 'Zeb Orrelios (Rebels)',
                role: 'Lasat Honor Guard / *Ghost* Crew Muscle',
                description: 'The sole survivor of the Imperial genocide against the Lasat race, who serves as the heavy hitter for the *Ghost* crew.',
                traits: ['Incredibly Strong', 'Vengeful', 'Loyal', 'Humorous'],
                history: 'Garazeb "Zeb" Orrelios was a Captain in the **Lasat Honor Guard** on his homeworld, Lasa. He was the sole known survivor when the Empire decimated his planet using the TIE Defender prototype, leading to the genocide of his people. His rage and sorrow fueled his dedication to the Rebellion. He became the "muscle" of the **Ghost** crew, known for his incredible strength and use of the specialized **Bo-Rifle**. Zeb harbored a deep, personal vendetta against Imperial agent **Agent Kallus**, whom he blamed for the destruction of Lasa. Over time, his relationship with Kallus evolved from hatred to grudging respect and alliance. In a massive turning point, Zeb discovered other survivors of his race on the hidden planet **Lirasan**, a discovery that allowed him to finally find peace and dedicate himself to rebuilding the Lasat culture, officially ending his time with the *Ghost* crew.',
                image: 'https://placehold.co/800x450/B0C4DE/000000?text=Zeb+Orrelios+Lasat',
                videos: ['https://slideshow.link/zeb_lasat_honor_guard', 'https://slideshow.link/zeb_lirasan_discovery']
            },

            // ------------------------------------------------------------------------------------------------
            // 🔴 SITH / DARK SIDE FORCE USERS
            // ------------------------------------------------------------------------------------------------

            {
                id: 6,
                name: 'Darth Sidious / Emperor Palpatine',
                role: 'Sith Master / Galactic Emperor / Mastermind',
                description: 'The Dark Lord of the Sith, a master schemer who played both sides of the Clone Wars to orchestrate the fall of the Jedi and the rise of his Galactic Empire.',
                traits: ['Master Manipulator', 'Politically Genius', 'Unrivaled Sith Power', 'Deceptive'],
                history: 'Born Sheev Palpatine, he was a seemingly unassuming Senator from Naboo who was secretly the Sith Lord **Darth Sidious**. He masterminded the entire **Clone Wars** by controlling both the Republic (as Chancellor) and the Separatists (through his apprentice, Count Dooku). His ultimate goal was to eradicate the Jedi and seize total control of the galaxy. He achieved this by turning Jedi Knight **Anakin Skywalker** to the Dark Side, executing **Order $66$**, and transforming the Republic into the tyrannical **Galactic Empire**. He ruled for decades until his defeat at the **Battle of Endor**, where he was cast down a reactor shaft by a redeemed Darth Vader. However, his spirit survived and he manipulated the events of the sequel trilogy through clones and proxies like **Supreme Leader Snoke**. He was ultimately revealed as the final threat, controlling the **Sith Eternal** fleet on Exegol, before being permanently destroyed by **Rey** using the power of all the Jedi who came before her.',
                image: 'https://placehold.co/800x450/4B0082/FFFFFF?text=Darth+Sidious+Emperor',
                videos: ['https://slideshow.link/palpatine_rise_to_power', 'https://slideshow.link/darth_sidious_exegol']
            },
            {
                id: 7,
                name: 'Darth Vader / Anakin Skywalker (post-fall)',
                role: 'Sith Lord / Supreme Commander / Chosen One',
                description: 'The tragic figure who was prophesied to bring balance to the Force, but instead fell to the Dark Side, becoming the terrifying enforcer of the Emperor.',
                traits: ['Powerful in the Force', 'Intimidating', 'Tragic', 'Ruthless'],
                history: 'Anakin Skywalker was the **Chosen One**, a Jedi Knight of immense power and hero of the Clone Wars, renowned for his strong bond with **Obi-Wan Kenobi** and his Padawan **Ahsoka Tano**. His fall to the Dark Side was catalyzed by fear of losing his wife, **Padmé Amidala**, and the manipulative influence of Palpatine. Renamed **Darth Vader**, he led the brutal **March on the Jedi Temple** and was nearly killed by Obi-Wan on Mustafar, leaving him permanently dependent on a life-support suit. Vader became the Emperor\'s terrifying enforcer, hunting down the remaining Jedi and crushing dissent across the galaxy. His personal quest was reignited when he discovered his son, **Luke Skywalker**. Despite his decades of tyranny, Vader found final redemption at the **Battle of Endor**, sacrificing himself to destroy the Emperor and save his son, fulfilling the prophecy of the Chosen One before his death.',
                image: 'https://placehold.co/800x450/000000/FF0000?text=Darth+Vader+Enforcer',
                videos: ['https://slideshow.link/vader_mustafar_defeat', 'https://slideshow.link/vader_redemption']
            },
            {
                id: 8,
                name: 'Darth Maul',
                role: 'Zabrak Sith Lord / Criminal Underworld Boss',
                description: 'A deadly Zabrak warrior and the first apprentice of Darth Sidious, whose quest for revenge against Obi-Wan Kenobi defined his life after his presumed death.',
                traits: ['Violent', 'Obsessed', 'Agile Fighter', 'Ambitious'],
                history: 'Darth Maul was a Dathomirian Zabrak taken as an infant and trained in the ways of the Sith by **Darth Sidious**, keeping the Sith secret before the Clone Wars. He killed Jedi Master **Qui-Gon Jinn** during the Battle of Naboo but was swiftly **cut in half** by Obi-Wan Kenobi and presumed dead. However, Maul survived through pure hatred and Dark Side power, replacing his lower body with cybernetic legs. Driven mad by his obsession with revenge on Obi-Wan, he was rescued by his brother, **Savage Opress**, and regained his sanity. Maul subsequently built a vast criminal empire known as the **Shadow Collective**, briefly seizing control of Mandalore and killing Duchess Satine Kryze. His machinations eventually led to his capture by Sidious. He later resurfaced on Malachor, seeking knowledge of the Sith. His long, violent life ended peacefully on Tatooine, where he finally tracked down and was defeated by an aged **Obi-Wan Kenobi**, finding a moment of peace before his death.',
                image: 'https://placehold.co/800x450/FF4500/FFFFFF?text=Darth+Maul+Revenge',
                videos: ['https://slideshow.link/darth_maul_return', 'https://slideshow.link/maul_vs_obiwan_final']
            },
            {
                id: 9,
                name: 'Count Dooku / Darth Tyranus',
                role: 'Jedi Master / Separatist Leader / Sith Apprentice',
                description: 'A powerful, charismatic Sith Lord and former apprentice of Yoda, who led the Confederacy of Independent Systems against the Republic.',
                traits: ['Charismatic', 'Master Duellist', 'Aristocratic', 'Disillusioned'],
                history: 'Count Dooku was a former apprentice of **Yoda** and one of the most respected and powerful Jedi Masters in the Order. Disillusioned by the corruption of the Republic, Dooku left the Jedi Order and returned to his aristocratic home planet of Serenno. He was soon seduced by **Darth Sidious**, becoming his second apprentice, **Darth Tyranus**. Dooku publicly led the **Separatist Alliance** (Confederacy of Independent Systems), serving as the public face of the opposition during the Clone Wars. He trained the assassin **Asajj Ventress** and the brute **Savage Opress**. In the opening act of the war, he killed **Obi-Wan Kenobi\'s** master, Qui-Gon Jinn. His true master was not revealed to the Jedi until the final stages of the Clone Wars, when Palpatine orchestrated his demise. Dooku was defeated in a lightsaber duel by **Anakin Skywalker** aboard General Grievous\' flagship, the *Invisible Hand*, and decapitated at Palpatine\'s urging, clearing the path for Anakin to take his place as the Emperor\'s final, most powerful apprentice.',
                image: 'https://placehold.co/800x450/A9A9A9/000000?text=Count+Dooku+Separatist',
                videos: ['https://slideshow.link/dooku_lightsaber_style', 'https://slideshow.link/dooku_death_scene']
            },
            {
                id: 10,
                name: 'Kylo Ren / Ben Solo',
                role: 'Dark Side User / Knight of Ren / Supreme Leader',
                description: 'The son of Han Solo and Leia Organa, whose internal conflict and fall to the Dark Side threatened to extinguish the legacy of the Skywalker family.',
                traits: ['Conflicted', 'Powerful', 'Emotional', 'Unstable'],
                history: 'Born **Ben Solo**, the son of galaxy heroes **Han Solo** and **Leia Organa**, and the nephew of **Luke Skywalker**. Ben possessed immense Force potential but was relentlessly corrupted by the influence of **Snoke** and the spiritual manipulation of Palpatine/Sidious. He destroyed Luke\'s rebuilt Jedi Temple and helped form the **Knights of Ren**, renaming himself Kylo Ren. He served as the primary antagonist of the sequel trilogy, driven by a deep desire to emulate his grandfather, Darth Vader, and embrace the Dark Side completely. This pursuit led him to murder his own father, **Han Solo**. However, his connection to **Rey** constantly forced him to confront his own conflicted nature. After killing his master, Snoke, he briefly became the **Supreme Leader of the First Order**. His final confrontation with Rey led to his redemption, returning to the Light as Ben Solo. He sacrificed his life to save Rey, drawing on the immense power of the Force to heal her, dying in peace.',
                image: 'https://placehold.co/800x450/4B0082/FFFFFF?text=Kylo+Ren+Conflicted',
                videos: ['https://slideshow.link/kylo_ren_han_solo_death', 'https://slideshow.link/kylo_ren_redemption']
            },
            {
                id: 11,
                name: 'Supreme Leader Snoke',
                role: 'Leader of the First Order / Palpatine\'s Puppet',
                description: 'The grotesque, powerful figure who commanded the First Order and manipulated Ben Solo into becoming Kylo Ren, a pawn in a larger plan.',
                traits: ['Mysterious', 'Manipulative', 'Powerful Dark Sider', 'Arrogant'],
                history: 'Supreme Leader Snoke was the leader of the tyrannical **First Order** and the self-proclaimed master of **Kylo Ren**. His true origins were shrouded in mystery until the final chapters of the saga, where it was revealed that Snoke was an artificial, clone-like construct—a mere proxy created by the resurrected **Emperor Palpatine** on Exegol to command the First Order and lure Ben Solo to the Dark Side. Snoke possessed immense Dark Side power and was responsible for destroying Luke Skywalker\'s attempt to restart the Jedi Order. Despite his apparent power, he was overconfident. During a pivotal confrontation, he was dramatically **killed** when Kylo Ren, using the Force, spun the lightsaber that Snoke was holding, slicing the Supreme Leader in half, thereby removing the placeholder leader and seizing command of the First Order for himself.',
                image: 'https://placehold.co/800x450/808080/FFFFFF?text=Supreme+Leader+Snoke',
                videos: ['https://slideshow.link/snoke_death_by_kylo', 'https://slideshow.link/snoke_true_origin']
            },
            {
                id: 12,
                name: 'Asajj Ventress',
                role: 'Nightsister / Dark Side Assassin / Bounty Hunter',
                description: 'A powerful Nightsister from Dathomir, trained in the ways of the Dark Side by Count Dooku before being betrayed and embarking on a path of independence.',
                traits: ['Vicious', 'Skilled Lightsaber Duellist', 'Betrayed', 'Complex Morality'],
                history: 'Asajj Ventress was a Nightsister of Dathomir whose life was defined by the Dark Side and loss. Initially trained in the Force by a Jedi Master she later served **Count Dooku** as his personal assassin during the Clone Wars, often fighting Jedi Generals such as Obi-Wan Kenobi and Anakin Skywalker. She was never given the title of "Sith" by Dooku as she was merely a tool. Fearing her growing power, **Darth Sidious** ordered Dooku to kill her. Surviving the betrayal, Ventress returned to her Nightsister clan and later became an independent **bounty hunter**. Her moral journey led her away from the pure malice of the Sith. She eventually allied with Jedi Master **Quinlan Vos** on a mission to kill Dooku, and in a final act of redemption, Ventress **sacrificed herself** to save Vos from a blast of Force lightning from Dooku, dying having finally found a measure of light and peace.',
                image: 'https://placehold.co/800x450/800080/FFFFFF?text=Asajj+Ventress+Nightsister',
                videos: ['https://slideshow.link/ventress_dooku_betrayal', 'https://slideshow.link/ventress_redemption_death']
            },
            {
                id: 13,
                name: 'Darth Revan (Legends / Expanded Universe)',
                role: 'Jedi Knight / Sith Lord / Dark Lord of the Sith',
                description: 'A figure of myth and legend, a powerful Force user who traversed both the Light and Dark Sides, forever altering the fate of the galaxy.',
                traits: ['Powerful Visionary', 'Dual Nature', 'Strategic Genius', 'Iconic'],
                history: 'Darth Revan is a crucial figure in ancient Sith and Jedi lore, primarily established in the *Knights of the Old Republic* video game. Revan was initially a charismatic **Jedi Knight** who defied the Jedi Council to fight the Mandalorians in the Mandalorian Wars. His victory led him and his closest ally, Malak, into the Unknown Regions, where they encountered the Sith Emperor and were turned to the Dark Side, returning as **Darth Revan** and Darth Malak. Revan waged war against the Republic in the **Jedi Civil War** but was captured by the Jedi and had his memory erased, becoming a pawn in the Republic\'s fight against his former empire. Revan is one of the most powerful and complex figures in history, symbolizing the thin line between Light and Dark. Though his story is largely *Legends*, his status as a renowned Sith Lord is often referenced in official **Canon** lore.',
                image: 'https://placehold.co/800x450/FFD700/000000?text=Darth+Revan+Old+Republic',
                videos: ['https://slideshow.link/darth_revan_old_republic', 'https://slideshow.link/revan_dual_allegiance']
            },
            {
                id: 14,
                name: 'Darth Nihilus',
                role: 'Ancient Sith Lord / Wound in the Force',
                description: 'A terrifying, existential threat defined by an insatiable hunger for the Force, leaving nothing but devastation in his wake.',
                traits: ['Force Vampire', 'Existential Threat', 'Pure Hunger', 'Mute'],
                history: 'Darth Nihilus is a figure from the ancient Sith, established during the events leading up to the **Jedi Civil War**. Following a massive conflict, Nihilus survived, transformed into a parasitic entity. He was a **"Wound in the Force,"** a living black hole whose presence devoured the Force energy of entire planets and populations, leaving nothing alive. He wore a mask to contain his life-force and spoke only in his thoughts, his spirit essentially bound to his terrifying armor. He ruled alongside Darth Sion and Darth Traya, forming a triumvirate that nearly completed the Jedi Purge thousands of years before Palpatine\'s rise. Nihilus represents the ultimate corruption of the Force, where the hunger for power destroys the user\'s physical form, leaving behind a purely destructive spiritual entity.',
                image: 'https://placehold.co/800x450/1C1C1C/FFFFFF?text=Darth+Nihilus+Force+Vampire',
                videos: ['https://slideshow.link/darth_nihilus_sith_triumvirate']
            },
            {
                id: 15,
                name: 'Savage Opress',
                role: 'Nightsister Warrior / Dark Side Brute / Darth Maul\'s Brother',
                description: 'The brute-force warrior from Dathomir who served first as Count Dooku\'s puppet assassin and later as the partner of his brother, Darth Maul.',
                traits: ['Incredibly Strong', 'Brutal', 'Uncontrolled Rage', 'Loyal to Maul'],
                history: 'Savage Opress was a Dathomirian male selected by his mother, the Nightsister leader **Mother Talzin**, to serve as a replacement apprentice for **Count Dooku**. Dooku trained Savage as a savage, formidable warrior, using the Dark Side to fuel his immense physical strength and rage. Savage was tasked with finding **Darth Maul**, his lost brother. Upon locating Maul, the brothers formed a powerful, violent partnership, attempting to seize control of the galaxy\'s criminal underworld, leading to the formation of the **Shadow Collective**. Their combined power and threat to Darth Sidious\' grand plan was too great to ignore. Sidious personally intervened, defeating both brothers in a brutal confrontation. Savage Opress was **killed by Darth Sidious** with twin lightsabers, dying while calling out for his brother, a victim of his own uncontrolled rage and the political machinations of the Sith.',
                image: 'https://placehold.co/800x450/8B0000/FFFFFF?text=Savage+Opress+Dathomirian',
                videos: ['https://slideshow.link/savage_opress_maul_partnership', 'https://slideshow.link/savage_opress_death']
            },
            // ------------------------------------------------------------------------------------------------
            // 🔴 EMPIRE / FIRST ORDER LEADERS
            // ------------------------------------------------------------------------------------------------

            {
                id: 1,
                name: 'Grand Moff Tarkin',
                role: 'Imperial Governor / Commander of the Death Star',
                description: 'The cold, calculating architect of the Tarkin Doctrine, which relied on the threat of overwhelming force rather than actual military occupation.',
                traits: ['Ruthless', 'Calculating', 'Authoritative', 'Doctrine Creator'],
                history: 'Wilhuff Tarkin was a highly ambitious and influential leader who rose through the ranks of the Republic and transitioned seamlessly into the Imperial structure. He was an early confidant of **Emperor Palpatine** and the primary conceptualizer of the **Tarkin Doctrine**—the philosophy that fear of a superior weapon (like the Death Star) would keep the star systems in line. Tarkin oversaw much of the Death Star’s final construction and was placed in command of the battle station. He displayed his cold ruthlessness by ordering the destruction of **Alderaan**, a demonstration of power meant to terrify the galaxy into submission. Despite his tactical genius, his hubris led him to ignore the threat of the Rebel starfighters. He chose to remain aboard the station during the **Battle of Yavin**, believing the Rebels were insignificant. He was killed when **Luke Skywalker** successfully fired the torpedoes into the thermal exhaust port, destroying the first Death Star.',
                image: 'https://placehold.co/800x450/36454F/FFFFFF?text=Grand+Moff+Tarkin',
                videos: ['https://slideshow.link/tarkin_doctrine_explanation', 'https://slideshow.link/death_star_command']
            },
            {
                id: 2,
                name: 'Director Orson Krennic',
                role: 'Director of Advanced Weapons Research / Death Star Overseer',
                description: 'The ambitious, high-ranking officer who obsessively oversaw the construction of the Death Star superweapon for the Empire.',
                traits: ['Ambitious', 'Vindictive', 'Obsessive', 'Imperial Bureaucrat'],
                history: 'Orson Krennic was a childhood friend of **Galen Erso**, the scientist he later coerced into completing the Death Star. Krennic was tasked by Palpatine with overseeing the entire superweapon project, driven by a desperate need for recognition and power that constantly put him at odds with **Grand Moff Tarkin**. Krennic orchestrated the death of Jyn Erso\'s mother and forced Galen back into service, leading to Galen secretly embedding a fatal flaw in the weapon. Krennic was infuriated when the Rebels, led by **Jyn Erso**, attempted to steal the plans from the Imperial archives on **Scarif**. He personally arrived on the planet to prevent the transmission. After being injured, he was deliberately abandoned by Tarkin to be killed by the Death Star\'s first single-reactor shot, which destroyed the Scarif base, a final and fitting end to the ambitious architect of mass destruction.',
                image: 'https://placehold.co/800x450/483D8B/FFFFFF?text=Director+Krennic',
                videos: ['https://slideshow.link/krennic_scarif_final_moments', 'https://slideshow.link/death_star_project_rivalry']
            },
            {
                id: 3,
                name: 'General Hux',
                role: 'First Order General / Military Commander',
                description: 'A hysterical and fanatical military commander of the First Order, dedicated to the destruction of the New Republic and the Resistance.',
                traits: ['Fanatical', 'Hysterical', 'Ambitious', 'Insecure'],
                history: 'Armitage Hux was a General in the **First Order**, serving as the commander of its massive military operations. He was known for his melodramatic and fanatical speeches, particularly the one he delivered before ordering the firing of **Starkiller Base** on the New Republic capital. Hux was a constant rival of **Kylo Ren**, driven by professional ambition and a desire to usurp the power of Supreme Leader Snoke. After Snoke\'s death, he served as a co-leader alongside Kylo Ren, though their relationship was fraught with tension and mutual disrespect. Driven by spite and a deep hatred for Kylo Ren, Hux eventually became a **spy for the Resistance**, secretly feeding them information to undermine his rival. His betrayal was quickly discovered by Allegiant General Pryde, who executed Hux for treason.',
                image: 'https://placehold.co/800x450/A0522D/FFFFFF?text=General+Hux+First+Order',
                videos: ['https://slideshow.link/hux_starkiller_speech', 'https://slideshow.link/hux_betrayal_and_death']
            },
            {
                id: 4,
                name: 'Captain Phasma',
                role: 'First Order Stormtrooper Commander',
                description: 'The imposing commander of the First Order\'s stormtroopers, recognized by her distinctive chrome armor and ruthless dedication to the cause.',
                traits: ['Ruthless', 'Intimidating', 'Disciplined', 'Fanatically Loyal'],
                history: 'Phasma rose from humble, hardscrabble origins to become the highly disciplined and feared commander of the **First Order** stormtroopers. She was responsible for the initial training of the young recruits, including **FN-2187 (Finn)**. Her defining characteristic was her striking chrome armor, scavenged from a yacht of Palpatine, which signified her elite status. Her reputation for unwavering loyalty was compromised when Finn forced her to lower the shields of Starkiller Base, an act of self-preservation that she tried desperately to keep secret. After surviving the destruction of Starkiller Base, she tracked down Finn aboard the *Supremacy*. She engaged Finn in a brutal, personal duel, but was ultimately defeated and killed by her former recruit when she plunged into a fiery chasm, marking the end of the formidable stormtrooper commander.',
                image: 'https://placehold.co/800x450/C0C0C0/000000?text=Captain+Phasma+Chrome',
                videos: ['https://slideshow.link/phasma_vs_finn_supremacy', 'https://slideshow.link/phasma_origin_story']
            },
            {
                id: 5,
                name: 'Admiral Thrawn (Legends / Rebels)',
                role: 'Grand Admiral of the Imperial Navy / Master Strategist',
                description: 'A brilliant and highly cultured Chiss military commander, renowned for his strategic genius and deep understanding of his enemy\'s culture.',
                traits: ['Intellectual', 'Strategic Genius', 'Cultured', 'Ambitious'],
                history: 'Mitth\'raw\'nurodo, or **Grand Admiral Thrawn**, was a member of the non-human **Chiss** species, a rare distinction in the xenophobic Galactic Empire. He was the most brilliant military commander in the Imperial fleet, relying on masterful strategy and a deep study of an enemy\'s art and philosophy, rather than brute force. Thrawn was a primary antagonist to the nascent Rebellion, particularly the **Ghost** crew. He was responsible for numerous devastating defeats against Rebel cells. His ultimate canonical fate occurred during the Liberation of Lothal, where he was confronted by **Ezra Bridger**. Ezra summoned a flock of giant purrgil (space whales) who wrapped their tentacles around Thrawn\'s flagship, the *Chimaera*, and jumped into hyperspace, taking both Thrawn and Ezra into the Unknown Regions, where their fates remained intertwined and mysterious for years.',
                image: 'https://placehold.co/800x450/000080/FFFFFF?text=Grand+Admiral+Thrawn',
                videos: ['https://slideshow.link/thrawn_strategic_mind', 'https://slideshow.link/thrawn_purrgil_disappearance']
            },

            // ------------------------------------------------------------------------------------------------
            // 🔴 SEPARATISTS / CONFEDERACY OF INDEPENDENT SYSTEMS
            // ------------------------------------------------------------------------------------------------

            {
                id: 6,
                name: 'General Grievous',
                role: 'Supreme Commander of the Separatist Droid Army / Jedi Killer',
                description: 'A massive, terrifying cyborg leader of the Separatist droid armies, known for his relentless hatred of the Jedi and his four-lightsaber fighting style.',
                traits: ['Cyborg', 'Ruthless', 'Jedi Killer', 'Cowardly Strategist'],
                history: 'General Grievous was a Kaleesh warlord whose body was heavily cybernetically augmented after a near-fatal accident orchestrated by **Darth Sidious** and **Count Dooku**. Dooku trained him in lightsaber combat, transforming him into a ruthless Jedi Killer and the supreme military commander of the **Confederacy of Independent Systems**. Grievous famously kept the lightsabers of the Jedi he killed as trophies. Despite his immense fighting skill and terrifying appearance, he was known for prioritizing retreat over a lost cause. His most brazen act was the kidnapping of **Chancellor Palpatine** during the Battle of Coruscant, a staged event orchestrated by the Sith. Grievous fled the battle to **Utapau**, where he was tracked down by **Obi-Wan Kenobi**. In a final, desperate confrontation, Grievous was mortally wounded by a blaster shot to his remaining vital organs, ending the life of the droid army\'s commander.',
                image: 'https://placehold.co/800x450/708090/000000?text=General+Grievous+Cyborg',
                videos: ['https://slideshow.link/grievous_lightsaber_display', 'https://slideshow.link/grievous_death_scene']
            },
            {
                id: 7,
                name: 'Nute Gunray',
                role: 'Viceroy of the Trade Federation / Separatist Council Member',
                description: 'The cowardly, greedy leader of the Trade Federation who was manipulated into becoming a key member of the Separatist movement.',
                traits: ['Cowardly', 'Greedy', 'Manipulated', 'Viceroy'],
                history: 'Nute Gunray was the Neimoidian Viceroy of the **Trade Federation**. He was first seen orchestrating the illegal **blockade and invasion of Naboo** under the command of Darth Sidious (secretly Palpatine). Gunray\'s greed and ambition made him an easy puppet for the Sith Lord. He continued to serve as a high-ranking member of the **Separatist Council** throughout the Clone Wars, funding the war effort with the vast wealth of the Trade Federation. Despite his pivotal role, he was a physically frail and easily intimidated leader, constantly reliant on his droid armies and the protection of Count Dooku. In the final act of the Clone Wars, he gathered with the rest of the Separatist Council on **Mustafar**, believing they would be safe. They were quickly and brutally executed by **Darth Vader** (formerly Anakin Skywalker) under the direct orders of Palpatine, marking the end of the Confederacy leadership.',
                image: 'https://placehold.co/800x450/4C783C/FFFFFF?text=Nute+Gunray+Viceroy',
                videos: ['https://slideshow.link/gunray_naboo_blockade', 'https://slideshow.link/separatist_council_execution']
            },
            {
                id: 8,
                name: 'Poggle the Lesser',
                role: 'Archduke of Geonosis / Separatist Council Member',
                description: 'The Geonosian leader who provided the Separatist Alliance with their massive droid manufacturing capabilities.',
                traits: ['Non-verbal', 'Industrialist', 'Separatist Supporter', 'Architect'],
                history: 'Poggle the Lesser was the Archduke of **Geonosis** and a key industrial ally to the Separatist cause. He was instrumental in providing the CIS with their army, as Geonosis housed the massive droid factories responsible for creating the battle droid legions. Poggle was directly involved in the construction of the prototype **Death Star** plans, presenting them to Count Dooku, and his factories continued to supply the Confederacy throughout the Clone Wars. His capture on Geonosis was a significant victory for the Republic. Like the rest of the Separatist Council, Poggle was gathered on **Mustafar** at the war\'s end. He was among the last to be executed by **Darth Vader**, ensuring that all the figureheads of the Separatist movement were eliminated on Palpatine\'s command.',
                image: 'https://placehold.co/800x450/FFCC00/000000?text=Poggle+the+Lesser',
                videos: ['https://slideshow.link/poggle_geonosis_battle', 'https://slideshow.link/geonosis_droid_factories']
            },

            // ------------------------------------------------------------------------------------------------
            // 🔴 CRIMINAL SYNDICATES / MERCENARIES / OTHERS
            // ------------------------------------------------------------------------------------------------
            {
                id: 10,
                name: 'Jabba the Hutt',
                role: 'Tatooine Crime Lord / Leader of the Hutt Clan',
                description: 'The massive, repulsive crime boss who controlled a vast criminal empire from his palace on Tatooine.',
                traits: ['Gluttonous', 'Cruel', 'Crime Boss', 'Feared'],
                history: 'Jabba Desilijic Tiure, commonly known as Jabba the Hutt, was one of the most powerful and feared crime lords in the galaxy, operating primarily from his palace on **Tatooine**. His influence stretched across the Outer Rim, involving him in smuggling, bounty hunting, and political corruption. Jabba famously placed a huge bounty on **Han Solo** after the smuggler dumped Jabba\'s cargo to escape an Imperial trap. This debt led to Han\'s capture on Bespin and his subsequent freezing in carbonite. Jabba acquired Han and kept him as a trophy until **Princess Leia Organa** infiltrated his palace to rescue him. Jabba retaliated by attempting to execute Han, Luke Skywalker, and Chewbacca at the **Sarlacc Pit**. Jabba\'s reign of terror ended at the Sarlacc, where **Leia Organa** used the chain holding her captive to **strangle him to death** on his own sail barge, the *Khetanna*.',
                image: 'https://placehold.co/800x450/98FB98/000000?text=Jabba+the+Hutt+Crime+Lord',
                videos: ['https://slideshow.link/jabba_han_solo_debt', 'https://slideshow.link/jabba_death_by_leia']
            },
            {
                id: 11,
                name: 'Cad Bane',
                role: 'Duros Bounty Hunter / Clone Wars Specialist',
                description: 'One of the most notorious and feared bounty hunters during the Clone Wars, known for his signature wide-brimmed hat and twin blaster pistols.',
                traits: ['Ruthless', 'Expert Marksman', 'Cold', 'High-Tech Gear'],
                history: 'Cad Bane was a Duros bounty hunter who rose to prominence after the death of Jango Fett, becoming recognized as the **best in the galaxy** during the Clone Wars era. His ruthless efficiency and distinct appearance (including his wide-brimmed hat and twin blasters) made him a legendary figure. Bane was hired by various clients, including **Darth Sidious** and the Separatists, for missions that often involved infiltrating the Jedi Temple or kidnapping high-value targets. He was briefly forced to train clones on Kamino as a replacement for Jango Fett. Decades later, during the early Imperial era, Bane was hired by the Pyke Syndicate. He was last seen in a deadly confrontation with his former protégé, **Boba Fett**, who sought to prevent Bane from claiming the young Foundling Grogu. Bane was defeated by Boba Fett in a quick-draw duel, ending the career of the infamous gunslinger.',
                image: 'https://placehold.co/800x450/B8860B/000000?text=Cad+Bane+Bounty+Hunter',
                videos: ['https://slideshow.link/cad_bane_clone_wars_missions', 'https://slideshow.link/cad_bane_boba_fett_duel']
            },
            {
                id: 12,
                name: 'Boba Fett (Pre-Return of the Mandalorian events)',
                role: 'Clone Bounty Hunter / Genetic Son of Jango Fett',
                description: 'The infamous, enigmatic bounty hunter, a direct genetic clone of Jango Fett, known for his customized Mandalorian armor and silent efficiency.',
                traits: ['Silent', 'Professional', 'Elite Gear', 'Obsessive'],
                history: 'Boba Fett was an **unmodified clone** created on Kamino, treated as the genetic son of the original template, **Jango Fett**. He witnessed his father\'s death at the hands of Mace Windu on Geonosis, an event that instilled in him a deep drive for revenge and a life dedicated to the bounty hunter profession. He spent his early years trying to avenge Jango, eventually becoming the most feared bounty hunter in the galaxy, known for his distinct **Mandalorian armor** (which he inherited from Jango) and his ship, the *Slave I*. His most famous contract involved tracking down the **Millennium Falcon** and capturing **Han Solo**, delivering him frozen in carbonite to Jabba the Hutt. Fett\'s pre-*Mandalorian* arc ended during the rescue of Han Solo, when he was accidentally knocked into the terrifying mouth of the **Sarlacc Pit** on Tatooine, where he was believed to have died.',
                image: 'https://placehold.co/800x450/696969/FFFFFF?text=Boba+Fett+Bounty+Hunter',
                videos: ['https://slideshow.link/boba_fett_sarlacc_pit', 'https://slideshow.link/boba_fett_jangos_son']
            },
            {
                id: 13,
                name: 'Hondo Ohnaka',
                role: 'Weequay Pirate Leader / Opportunist',
                description: 'A charismatic, cunning, and often humorous Weequay pirate whose loyalty is always determined by the promise of profit.',
                traits: ['Opportunistic', 'Charismatic', 'Humorous', 'Self-Preserving'],
                history: 'Hondo Ohnaka was the leader of a large pirate gang based on the Outer Rim planet of Florrum. Hondo became a recurring figure during the **Clone Wars**, famous for his brazen capture and subsequent ransoming of both **Count Dooku** and **Obi-Wan Kenobi**. His relationship with the Jedi was volatile—sometimes a hostage-taker, sometimes a reluctant ally—but always an opportunist. He survived the Clone Wars and the rise of the Empire, though his operations became significantly smaller. He later appeared in the era of *Rebels*, often aiding the **Ghost** crew for a price, viewing them with grudging respect. Despite his criminal ways, Hondo maintained a certain code of honor and showed clear affection for his former associates, often blurring the line between antagonist and reluctant helper.',
                image: 'https://placehold.co/800x450/DAA520/000000?text=Hondo+Ohnaka+Pirate+Leader',
                videos: ['https://slideshow.link/hondo_ohanka_obiwan', 'https://slideshow.link/hondo_in_rebels']
            },
            {
                id: 14,
                name: 'Asajj Ventress',
                role: 'Nightsister / Dark Side Assassin / Bounty Hunter',
                description: 'A powerful Nightsister who transitioned from Dark Side assassin to independent bounty hunter after being betrayed by her master, Count Dooku.',
                traits: ['Vicious', 'Skilled Lightsaber Duellist', 'Betrayed', 'Complex Morality'],
                history: 'Asajj Ventress was a Nightsister of Dathomir whose life was defined by the Dark Side and loss. Initially trained in the Force by a Jedi Master, she later served **Count Dooku** as his personal assassin during the Clone Wars, often fighting Jedi Generals such as Obi-Wan Kenobi and Anakin Skywalker. She was never given the title of "Sith" by Dooku as she was merely a tool. Fearing her growing power, **Darth Sidious** ordered Dooku to kill her. Surviving the betrayal, Ventress returned to her Nightsister clan, only to see them massacred by Dooku\'s forces. She subsequently became an independent **bounty hunter**. Her moral journey led her away from the pure malice of the Sith. She eventually allied with Jedi Master **Quinlan Vos** on a mission to kill Dooku, and in a final act of redemption, Ventress **sacrificed herself** to save Vos from a blast of Force lightning from Dooku, dying having finally found a measure of light and peace.',
                image: 'https://placehold.co/800x450/800080/FFFFFF?text=Asajj+Ventress+Nightsister',
                videos: ['https://slideshow.link/ventress_dooku_betrayal', 'https://slideshow.link/ventress_redemption_death']
            }
        ],
        groups: [
            {
                id: 1,
                name: 'Jedi Order',
                type: 'Peacekeepers',
                description: 'An ancient organization of Force-sensitive individuals dedicated to maintaining peace and justice in the galaxy.',
                traits: ['Wise', 'Disciplined', 'Skilled in the Force'],
                fullDescription: 'The Jedi Order is a monastic, spiritual, and academic organization that has existed for thousands of years. Jedi are trained from a young age to harness the power of the Force, using it for knowledge and defense rather than attack. They serve as guardians of peace in the galaxy, often mediating conflicts and fighting against the dark side. The Order was nearly destroyed during the Great Jedi Purge but saw a resurgence with the rise of new Jedi like Luke Skywalker.',
                image: 'https://starwars-visualguide.com/assets/img/groups/1.jpg',
                icon: Users
            },
            {
                id: 2,
                name: 'Galactic Empire',
                type: 'Authoritarian Regime',
                description: 'A totalitarian government that rose to power after the fall of the Galactic Republic, led by Emperor Palpatine.',
                traits: ['Oppressive', 'Militaristic', 'Powerful'],
                fullDescription: 'The Galactic Empire was established by Emperor Palpatine after the Clone Wars, transforming the democratic Galactic Republic into a dictatorship. The Empire is known for its oppressive rule, extensive military might, and the construction of superweapons like the Death Star. It sought to eliminate the Jedi Order and suppress any opposition, leading to widespread rebellion across the galaxy. The Empire was ultimately defeated by the Rebel Alliance in the Battle of Endor.',
                image: 'https://starwars-visualguide.com/assets/img/groups/2.jpg',
                icon: ShieldCheck
            }
        ],
        weapons: [
            {
                id: 1,
                name: 'Lightsaber',
                type: 'Melee Weapon',
                description: 'A weapon used by Jedi and Sith, consisting of a plasma blade powered by a kyber crystal.',
                traits: ['Versatile', 'Symbolic', 'Deadly'],
                fullDescription: 'The lightsaber is an iconic weapon in the Star Wars universe, wielded by both Jedi and Sith. It consists of a hilt that emits a blade of pure energy, capable of cutting through almost anything. Lightsabers are not only weapons but also symbols of the wielder\'s connection to the Force. Each lightsaber is unique, often reflecting the personality and skills of its owner.',
                image: 'https://starwars-visualguide.com/assets/img/weapons/1.jpg',
                icon: Sword
            },
            {
                id: 2,
                name: 'Blaster Rifle',
                type: 'Ranged Weapon',
                description: 'A common firearm used by various factions in the Star Wars galaxy, firing bolts of energy.',
                traits: ['Reliable', 'Effective', 'Widely Used'],
                fullDescription: 'Blaster rifles are standard issue for many military and paramilitary forces in the Star Wars universe. They fire bolts of high-energy plasma, making them effective against both organic and mechanical targets. Blaster rifles come in various models and configurations, used by stormtroopers, rebels, bounty hunters, and more. Their versatility and firepower make them a staple weapon across the galaxy.',
                image: 'https://starwars-visualguide.com/assets/img/weapons/2.jpg',
                icon: Crosshair
            }
        ],
        vehicles: [
            {
                id: 1,
                name: 'X-Wing Starfighter',
                type: 'Starfighter',
                description: 'A versatile starfighter used by the Rebel Alliance, known for its speed and agility.',
                traits: ['Fast', 'Maneuverable', 'Well-Armed'],
                fullDescription: 'The X-Wing starfighter is one of the most iconic ships in the Star Wars universe. It features a distinctive design with S-foils that open into an "X" shape during combat. Equipped with powerful laser cannons and proton torpedoes, the X-Wing is a formidable opponent in dogfights. It played a crucial role in the Rebel Alliance\'s fight against the Galactic Empire, including the destruction of both Death Stars.',
                image: 'https://starwars-visualguide.com/assets/img/vehicles/12.jpg',
                icon: Car
            },
            {
                id: 2,
                name: 'TIE Fighter',
                type: 'Starfighter',
                description: 'The primary starfighter of the Galactic Empire, known for its speed and agility but lacking in shields.',
                traits: ['Fast', 'Agile', 'Numerous'],
                fullDescription: 'TIE Fighters are the backbone of the Imperial Navy\'s starfighter fleet. They are characterized by their twin ion engines and hexagonal solar panels. While TIE Fighters are fast and highly maneuverable, they lack shields and heavy armor, making them vulnerable in combat. They are often deployed in large numbers to overwhelm opponents, serving as a symbol of the Empire\'s military might.',
                image: 'https://starwars-visualguide.com/assets/img/vehicles/13.jpg',
                icon: Truck
            }
        ]
    },

    'cod-mw': {
      characters: [
       {
      "id": 1,
      "name": "Captain Price",
      "role": "Task Force 141 Leader / SAS captain ",
      "description": "Veteran SAS officer and leader of Task Force 141. Known for his tactical expertise, iconic mustache, and unwavering loyalty.",
      "traits": ["Leadership", "Tactical Genius", "Combat Veteran"],
      "fullDescription": "A legendary SAS operator, John Price has a distinguished career spanning decades. He is a formidable strategist and a master of both covert and overt operations. Price is a key figure in hunting down international threats and is a symbol of resilience and determination in the face of impossible odds.",
      "image": "https://wallpapercave.com/wp/wp7114845.jpg",
      "icon": "Target"
    },
    {
      "id": 2,
      "name": "Soap MacTavish",
      "role": "Task Force 141 / SAS Sergeant",
      "description": "Scottish SAS sergeant known for his demolitions expertise and quick thinking under pressure.",
      "traits": ["Demolitions Expert", "Quick Thinking", "Loyal Soldier"],
      "fullDescription": "John 'Soap' MacTavish is a skilled soldier and a key member of Captain Price's team. His journey from a rookie to a battle-hardened veteran is central to the original Modern Warfare trilogy. Soap is highly proficient in demolitions and close-quarters combat, often at the forefront of the most dangerous missions.",
      "image": "https://i.pinimg.com/736x/18/be/12/18be125ad8bbe63a0c2d79027a3cbab8.jpg",
      "icon": "Zap"
    },
    {
      "id": 3,
      "name": "Ghost",
      "role": "Task Force 141 Specialist / SAS Lt",
      "description": "A mysterious and highly skilled operator known for his iconic skull mask and proficiency in stealth and psychological warfare.",
      "traits": ["Stealth Specialist", "Intimidation", "Covert Ops"],
      "fullDescription": "Simon 'Ghost' Riley is an enigmatic and ruthless Task Force 141 member. His past is shrouded in mystery, and he rarely speaks, letting his actions do the talking. He specializes in covert operations and is an expert at infiltrating enemy territory without a trace, using his presence alone to unnerve his enemies.",
      "image": "https://preview.redd.it/add-this-ghost-skin-v0-bfabkan9vl3c1.jpg?width=640&crop=smart&auto=webp&s=3e8a359b0d22e778b849898a2091b17a9c4502a1",
      "icon": "Users"
    },
    {
      "id": 4,
      "name": "Roach",
      "role": "Task Force 141 Operative",
      "description": "Silent but deadly Task Force 141 operative specializing in covert operations and stealth missions.",
      "traits": ["Stealth Operations", "Silent Professional", "Covert Specialist", ],
      "fullDescription": "Gary 'Roach' Sanderson is a highly trained operative who served alongside Soap MacTavish during key moments of the conflict against Makarov. He is the main playable character in a significant portion of Modern Warfare 2, performing critical tasks that push the story forward.",
      "image": "https://i.namu.wiki/i/3KM4Jm04ID0DXNdKX_n6wWyPmuVFlKnbna83n-TC9RDt938qMeLeTK7IQbpgIzjfYbRK3JOyyNnIErgxC3GjxA.webp",
      "icon": "Shield"
    },
    {
      "id": 5,
      "name": "Yuri",
      "role": "Ex-Spetsnaz, Loyalist",
      "description": "A former Spetsnaz turned Russian Loyalist. He has a complicated history with Makarov and becomes a crucial ally to Task Force 141.",
      "traits": ["Resilience", "Redemption", "Insider Knowledge", ],
      "fullDescription": "Once a member of Makarov's inner circle, Yuri witnessed the horrific consequences of his actions, including the infamous Zakhaev airport massacre. This led him to turn on his former comrade and seek redemption by aiding Price and Soap in their final mission to hunt down Makarov and end his reign of terror.",
      "image": "https://pm1.aminoapps.com/6505/6e6959c2c9a8a4b4f750073cb4f45b96f97405c2_00.jpg",
      "icon": "Sword"
    },
    {
      "id": 6,
      "name": "Corporal Dunn",
      "role": "Army Ranger Corporal",
      "description": "Reliable Army Ranger corporal serving under Sergeant Foley in the defense of America.",
      "traits": ["Reliability", "Team Support", "Combat Ready", "Disciplined", "Loyal", "Tactical", "Resilient", "Courageous", "Resourceful", "Dependable", "Focused", "Strong-Willed", "Honorable"],
      "fullDescription": "James Ramirez's squadmate and a seasoned Army Ranger, Dunn is a pragmatic and loyal soldier. He assists the player character throughout the invasion of the U.S. in Modern Warfare 2, providing crucial support and tactical guidance in intense urban warfare scenarios.",
      "image": "https://www.giantbomb.com/a/uploads/scale_small/0/5774/1231487-cpl_dunn.png",
      "icon": "Users"
    },
    {
      "id": 7,
      "name": "Sergeant Foley",
      "role": "Army Ranger Sergeant",
      "description": "Experienced Army Ranger sergeant leading troops through intense urban warfare in Washington D.C.",
      "traits": ["Urban Combat Expert", "Squad Leader", "Battle-Hardened", "Tactical", "Decisive", "Resilient", "Loyal", "Courageous", "Disciplined", "Resourceful", "Dependable", "Focused", "Strong-Willed", "Honorable"],
      "fullDescription": "Foley is the commanding officer of the Army Ranger squad that Private Ramirez is a part of. He's a decisive leader who navigates his team through the chaotic American invasion, giving clear orders and providing crucial strategic direction during the most challenging firefights.",
      "image": "https://i.redd.it/86pqfvlsqhx31.png",
      "icon": "Shield"
    },
    {
      "id": 8,
      "name": "PFC Allen",
      "role": "Army Ranger/Undercover Agent",
      "description": "A U.S. Army Ranger who is handpicked by General Shepherd to go undercover within Makarov's organization.",
      "traits": ["Undercover", "Special Operations", "Patriotism"],
      "fullDescription": "Joseph Allen is a playable character at the beginning of Modern Warfare 2. His mission is to infiltrate the Inner Circle of Makarov's ultranationalist group. His dedication to his country leads him to participate in the infamous 'No Russian' mission, which ultimately culminates in his death and sets the stage for the rest of the game's narrative.",
      "image": "https://i.pinimg.com/736x/2e/f7/de/2ef7deea880f5157772635c62d90e159.jpg",
      "icon": "Crosshair"
    },
    {
      "id": 9,
      "name": "Pvt Ramirez",
      "role": "Army Ranger Private",
      "description": "Young but skilled Army Ranger private fighting to defend the homeland against invasion.",
      "traits": ["Determination", "Quick Learner", "Brave Soldier", "Team Player", "Resilient", "Loyal", "Adaptable", "Courageous", "Disciplined", "Resourceful", "Tactical", "Dependable", "Focused", "Strong-Willed", "Honorable"],
      "fullDescription": "James Ramirez is the primary playable character for the American invasion storyline in Modern Warfare 2. He is tasked with defending the country from a Russian invasion, taking part in a number of intense urban battles in iconic American cities.",
      "image": "https://i.redd.it/vxt6gml0wbu51.jpg",
      "icon": "Star"
    },
    {
      "id": 10,
      "name": "Makarov",
      "role": "Ultranaionalist Leader",
      "description": "The main antagonist of the Modern Warfare trilogy. A cunning and ruthless Russian ultranationalist and terrorist.",
      "traits": ["Terrorist", "Ruthless", "Mastermind", "Violent", "Manipulative", "Wicked" ],
      "fullDescription": "Vladimir Makarov is one of the most infamous antagonists in gaming history. He is a fanatical ultranationalist driven by a desire for global chaos. His actions are the catalyst for multiple wars, and he is directly responsible for some of the most shocking events in the series, making him the ultimate target for Task Force 141.",
      "image": "https://i.redd.it/2a6dub6j5ce61.png",
      "icon": "Crown"
    },
    {
      "id": 11,
      "name": "Nikolai",
      "role": "Russian Informant/Pilot",
      "description": "A trustworthy Russian informant and ally to the SAS and Task Force 141, often acting as a pilot and logistic expert.",
      "traits": ["Loyal Ally", "Skilled Pilot", "Intel Provider", ],
      "fullDescription": "Nikolai is a crucial ally throughout the Modern Warfare trilogy. He provides essential intelligence, transportation, and support to Price's team, often at great personal risk. His network of contacts and expertise in the Russian underworld make him an invaluable asset.",
      "image": "https://i.pinimg.com/736x/5f/52/81/5f52810d9a45d840d67acc4aa792edb6.jpg",
      "icon": "Truck"
    },
    {
      "id": 12,
      "name": "Kate Laswell",
      "role": "CIA Station Chief",
      "description": "A high-ranking CIA officer who acts as the primary liason between the CIA and Task Force 141 in the 2019 Modern Warfare reboot.",
      "traits": ["Strategic", "Intelligence", "Pragmatic", "Calm Under Pressure", "Resourceful", "Diplomatic", "Loyal", "Strong-Willed", "Honorable"],
      "fullDescription": "Kate Laswell is a key intelligence figure in the war on terror. She is responsible for briefing the team, analyzing threats, and coordinating with international partners. She maintains a level-headed demeanor even in the most chaotic situations, providing critical guidance from behind the scenes.",
      "image": "https://i.redd.it/eity4469xdj91.jpg",
      "icon": "User"
    },
    {
      "id": 13,
      "name": "Farah Karim",
      "role": "Urzikstani Freedom Fighter / Commander",
      "description": "Leader of the Urzikstani Liberation Force and a determined freedom fighter against Russian occupation.",
      "traits": ["Leadership", "Resilient", "Strategic", "Courageous", "Determined", "Inspirational", "Tactical", "Resourceful", "Loyal", "Strong-Willed", "Honorable"],
      "fullDescription": "Farah is a fierce and capable leader who has been fighting for her country since she was a child. Her personal history and dedication to liberating Urzikstan are central to the story of the Modern Warfare reboot. She is a master tactician and an expert in guerrilla warfare.",
      "image": "https://i.pinimg.com/736x/31/56/4c/31564cb4d3939b9331705a3513621c2b.jpg",
      "icon": "Shield"
    },
    {
      "id": 14,
      "name": "Alex",
      "role": "CIA SAD Officer",
      "description": "A field operative for the CIA Special Activities Division, working closely with Farah and her forces.",
      "traits": ["Undercover", "Special Ops", "Loyal"],
      "fullDescription": "Alex is a highly trained operative who is sent to Urzikstan to aid Farah in her fight against a global threat. He is a pragmatic and resourceful soldier who forms a strong bond with Farah and her cause. His dedication leads him to make great sacrifices to protect his allies and complete the mission.",
      "image": "https://preview.redd.it/v70r8dqn4vt61.jpg?width=640&crop=smart&auto=webp&s=152a1ce4e1dec2b70f99e932f701218174904cdc",
      "icon": "Star"
    },
    {
      "id": 15,
      "name": "Phillip Graves",
      "role": "Commander, Shadow Company",
      "description": "The enigmatic commander of the private military company, Shadow Company. He is a pragmatic leader with a hidden agenda.",
      "traits": ["Ruthless", "Ambitious", "Strategic", "Cunning", "Resourceful", "Manipulative", "Tactical", "Decisive", "Loyal", "Strong-Willed", "Honorable"],
      "fullDescription": "Graves presents himself as an ally to Task Force 141 in their hunt for a new threat. However, his true intentions are revealed, putting him in direct conflict with his former allies. His military expertise and powerful resources make him a formidable adversary.",
      "image": "https://preview.redd.it/mw2-what-do-you-guys-think-about-the-fan-theory-that-graves-v0-6wtdysqy5kbd1.jpg?width=640&crop=smart&auto=webp&s=74d0c08b3358ff84424dccaf5dfb094308272718",
      "icon": "Target"
    },
    {
      "id": 16,
      "name": "Paul Jackson",
      "role": "U.S. Marine Sergeant",
      "description": "A U.S. Marine fighting in the Middle East during the initial conflict against Khaled Al-Asad.",
      "traits": ["Courageous", "Disciplined", "Patriotic"],
      "fullDescription": "Jackson is a playable character in Modern Warfare (2007) and serves as the eyes of the U.S. Marine Corps campaign. He and his squad are sent to an unnamed Middle Eastern country to hunt down the terrorist leader Al-Asad. His story highlights the intense and dangerous nature of urban warfare.",
      "image": "https://assets.mycast.io/posters/call-of-duty-modern-warfare-2007-fan-casting-poster-295028-large.jpg?1677795961",
      "icon": "Shield"
    },
    {
      "id": 17,
      "name": "Vasquez",
      "role": "U.S. Marine lt",
      "description": "The commanding officer of Paul Jackson's squad, a no-nonsense and dedicated Marine leader.",
      "traits": ["Leadership", "Strict", "Experienced"],
      "fullDescription": "Captain Vasquez is a veteran Marine who leads his troops through the treacherous urban environments of the Middle East. He is a direct and efficient commander focused on completing his mission and protecting his soldiers.",
      "image": "https://i.ytimg.com/vi/-l_xemuuHMI/oardefault.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDKVmXCBhrCKxvlxfSmhAxdSlcAfA",
      "icon": "Star"
    },
    {
      "id": 18,
      "name": "Kamarov",
      "role": "Russian Loyalist Officer",
      "description": "A Russian loyalist officer who initially works with the SAS and later assists Price in the fight against ultranationalists.",
      "traits": ["Resourceful", "Loyal", "Veteran"],
      "fullDescription": "Sergeant Kamarov serves as an important point of contact and an ally for Captain Price's team in Russia. He and his men provide ground support and intelligence during key missions, highlighting the alliance between different factions against a common enemy.",
      "image": "https://www.giantbomb.com/a/uploads/scale_medium/8/80630/1664143-kamarov_1111_wiki.jpg",
      "icon": "Heart"
    },
    {
      "id": 19,
      "name": "Khaled Al-Asad",
      "role": "Middle Eastern Insurgent",
      "description": "A ruthless terrorist leader and a primary antagonist in the first Modern Warfare game.",
      "traits": ["Terrorist", "Deceptive", "Ruthless"],
      "fullDescription": "Khaled Al-Asad is a key figure in the terrorist organization allied with Imran Zakhaev. His actions, including the public execution of an innocent president, ignite a conflict that draws the U.S. and its allies into a global war.",
      "image": "https://preview.redd.it/cod4-did-you-feel-sorry-for-khaled-al-asad-v0-1r96bglvzb3f1.jpeg?auto=webp&s=1f975e104213f6b72cb1ccb7f22e8a6d85fe6ef6",
      "icon": "Crown"
    },
    {
      "id": 20,
      "name": "Griggs",
      "role": "U.S. Marine Sergeant",
      "description": "A member of Paul Jackson's squad and a key ally to Price's team. Known for his humor and bravery.",
      "traits": ["Brave", "Loyal", "Experienced"],
      "fullDescription": "Sergeant Griggs is a highly capable Marine who survives the initial invasion and becomes an invaluable asset to Captain Price. He provides assistance and comic relief in tense situations, often fighting alongside the player in critical missions.",
      "image": "https://i.imgur.com/7HdXkR3.jpg",
      "icon": "Users"
    },
    {
      "id": 21,
      "name": "Imran Zahkaev",
      "role": "Russian Ultranationalist",
      "description": "The fanatical founder of the Russian ultranationalist party, and the main antagonist in the first Modern Warfare game.",
      "traits": ["Fanatical", "Terrorist", "Vengeful"],
      "fullDescription": "Zahkaev is a central figure in the original Modern Warfare's plot. His actions, including providing the nuclear detonator to Al-Asad, lead to a massive conflict. He is a master manipulator who orchestrates a global crisis from the shadows, fueled by a desire for a powerful, restored Russia.",
      "image": "https://preview.redd.it/cod-if-any-call-of-duty-villain-had-wasted-potential-its-v0-akz46ptc4rzd1.jpeg?auto=webp&s=9deb39cddf163e28849acc6ca7376dbce46306ee",
      "icon": "Crown"
    },
    {
      "id": 22,
      "name": "Victor Zakhaev",
      "role": "Russian Ultranationalist",
      "description": "The son of Imran Zakhaev and a key lieutenant in his father's ultranationalist organization.",
      "traits": ["Loyal", "Brutal", "Zealous"],
      "fullDescription": "Victor Zakhaev plays a pivotal role in the plot of Modern Warfare. While serving as one of his father's key lieutenants, he is cornered by Task Force 141 in a Russian safehouse. His capture and subsequent suicide by a grenade are a major turning point in the game, as his death fuels his father's final, vengeful attack against the West. Victor's death demonstrates the fanatical dedication of the Zakhaev family to their cause.",
      "image": "https://img.thenerdstash.com/wp-content/uploads/2023/09/Victor-Zakhaev-Warzone.jpg",
      "icon": "Crown"
    },
    {
      "id": 22,
      "name": "MacMillan",
      "role": "SAS Captain",
      "description": "Experienced SAS captain and Price's former mentor, known for his sniper expertise and tactical knowledge.",
      "traits": ["Sniper Expert", "Mentor Figure", "Tactical Wisdom"],
      "fullDescription": "Captain MacMillan is a living legend in the SAS. He serves as Captain Price's mentor during a harrowing mission to assassinate Imran Zahkaev in the past. Despite being injured, he displays incredible resilience and strategic cunning, becoming a key figure in Price's development as a leader.",
      "image": "https://i.namu.wiki/i/LOz_mvnX1KSJRBMKOFkNjlCit6g72eqDGe-d9ylzLYUzM6qSruUPOIToVHWsm1WsSSwROqN59KMFv0qpgo6MAQ.webp",
      "icon": "Target"
    },
    {
      "id": 23,
      "name": "Alejandro Vargas",
      "role": "Mexican Special Forces Colonel",
      "description": "A charismatic and highly skilled officer of the Mexican Special Forces, working closely with Task Force 141.",
      "traits": ["Leadership", "Skilled", "Protective"],
      "fullDescription": "Colonel Vargas leads the 'Los Vaqueros' team and is a primary ally to Ghost and Soap in Modern Warfare II (2022). His intimate knowledge of the region and his tactical expertise are invaluable in the fight against a drug cartel and a major terrorist threat. He is a fiercely loyal and protective leader.",
      "image": "https://i.ytimg.com/vi/RSRRYrCYTXg/maxresdefault.jpg",
      "icon": "Shield"
    },
    {
      "id": 24,
      "name": "Rodolfo 'Rudy' Parra",
      "role": "Mexican Special Forces Sergeant",
      "description": "Alejandro Vargas's second-in-command and a vital member of the Los Vaqueros team.",
      "traits": ["Supportive", "Loyal", "Stealthy"],
      "fullDescription": "Sergeant Rudy Parra is a loyal and capable second-in-command to Colonel Vargas. He provides crucial support to both Los Vaqueros and Task Force 141, often assisting with reconnaissance and flanking maneuvers. His unwavering dedication makes him a trustworthy ally.",
      "image": "https://i.pinimg.com/564x/4c/66/ae/4c66aee10282f2b1b988a2df115f2339.jpg",
      "icon": "Users"
    },
    {
      "id": 25,
      "name": "Frost",
      "role": "Delta Force Operator",
      "description": "A skilled Delta Force operative and the main playable character in the Delta Force campaign in Modern Warfare 3.",
      "traits": ["Precision", "Stealth", "Endurance"],
      "fullDescription": "Sgt. First Class Derek 'Frost' Westbrook is a member of Delta Force's Team Metal, a key component in the fight against the Russian invasion. He is highly proficient in both covert and direct action, often leading the charge in some of the game's most pivotal battles, from New York to Paris.",
      "image": "https://i.pinimg.com/736x/7f/d0/e7/7fd0e78a31213faadfee563c0b75f2a0.jpg",
      "icon": "Crosshair"
    },
    {
      "id": 26,
      "name": "Sandman",
      "role": "Delta Force Team Leader",
      "description": "The leader of Delta Force's elite Team Metal, and a key ally to Price and Soap in Modern Warfare 3.",
      "traits": ["Leadership", "Tactical", "Special Ops"],
      "fullDescription": "Master Sergeant Sandman is a respected and highly capable leader. He commands Team Metal with authority and precision, working in tandem with Task Force 141 to stop the escalating global conflict. His team's expertise in urban warfare is crucial to the success of the allied forces.",
      "image": "https://i.pinimg.com/474x/bc/ff/d5/bcffd53a2ea30a95d5a13b35c483afa8.jpg",
      "icon": "Shield"
    },
    {
      "id": 27,
      "name": "Grinch",
      "role": "Delta Force Operator",
      "description": "A member of Delta Force's Team Metal, known for his calm and collected demeanor in combat.",
      "traits": ["Steady Hand", "Marksman", "Supportive"],
      "fullDescription": "Sgt. First Class Marcus 'Grinch' Burns is a key member of Sandman's team. He provides crucial overwatch and fire support during a variety of missions, from the assault on Hamburg to the defense of Paris. His calm under pressure makes him an invaluable part of the squad.",
      "image": "https://i.pinimg.com/736x/e5/dd/e4/e5dde4bd38e42471aa197b0b78ba5dea.jpg",
      "icon": "Target"
    },
    {
      "id": 28,
      "name": "Truck",
      "role": "Delta Force Operator",
      "description": "A heavy-duty Delta Force operator known for his strength and direct approach to combat.",
      "traits": ["Heavy Hitter", "Resilient", "Frontline Fighter"],
      "fullDescription": "Sgt. First Class Truck is the third member of Team Metal, often leading the assault with heavy weaponry. His rugged build and direct approach make him a formidable force in any engagement. He is a reliable teammate and is always ready for a direct fight.",
      "image": "https://i.redd.it/seen-no-posts-about-them-so-just-random-pictures-of-grinch-v0-6ptvdfaix44d1.jpg?width=567&format=pjpg&auto=webp&s=c6248f5009173d1397b0b5671c46ae472ae46703",
      "icon": "Truck"
    },
    {
      "id": 23,
      "name": "General Shepherd",
      "role": "US Army General / Antagonist",
      "description": "A highly ambitious and manipulative military leader who orchestrates a global conflict for his own vengeful agenda.",
      "traits": ["Ambitious", "Manipulative", "Vengeful", "Ruthless", "Cunning", "Strategic", "Deceptive", "Power-Hungry", "Calculating", "Cold", "Determined", "Strong-Willed", "Authoritative", "Commanding", "Patriotic"],
      "fullDescription": "General Shepherd is the commander of the U.S. Army Rangers and the founder of the elite Task Force 141. Haunted by the loss of 30,000 of his men to a nuclear blast, he becomes obsessed with vengeance. He betrays his own forces, killing fan-favorites Ghost and Roach, to frame Makarov and incite a global war, believing that a manufactured conflict is the only way to restore America's former glory and secure his legacy. His famous quote, 'The more things change, the more they stay the same,' encapsulates his cynical view of history and conflict.",
      "game": "Call of Duty: Modern Warfare 2",
      "image": "https://i.pinimg.com/736x/1d/14/b6/1d14b6f2c6db5b94ab222356325bfd3b.jpg",
      "icon": "Crown"
    },
      ],
      weapons: [
        {
            id: 1,
            name: "M4A1",
            type: "Assault Rifle",
            description: "A highly versatile and reliable automatic rifle. Excellent all-around performance.",
            ammo: "5.56x45mm NATO",
            image: "https://preview.redd.it/3rqz35bnd0m51.jpg?width=1080&crop=smart&auto=webp&s=51edf34a193a4911a5d354bcaf033bc882fcb019",
            ratings: { damage: 3, accuracy: 4, range: 4, fireRate: 4, mobility: 4 }
        },
        {
            id: 2,
            name: "Kilo 141",
            type: "Assault Rifle",
            description: "Fully automatic assault rifle with an ergonomic design that improves handling and maintains a steady fire rate.",
            ammo: "5.56x45mm NATO",
            image: "https://www.charlieintel.com/cdn-image/wp-content/uploads/2024/01/23/kilo-141-mcw-warzone-assault-rifle.jpg?width=1200&quality=60&format=auto",
            ratings: { damage: 3, accuracy: 4, range: 4, fireRate: 4, mobility: 3 }
        },
        {
        id: 7.5, 
        name: "M13",
        type: "Assault Rifle",
        description: "A fully automatic rifle with a very high rate of fire and exceptionally low recoil, making it highly effective at medium range.",
        ammo: "5.56x45mm NATO",
        image: "https://i.redd.it/i-made-kyle-gaz-garrick-m13-rifle-mcx-rattler-from-the-v0-kdnxuo9wbb3a1.png?width=1920&format=png&auto=webp&s=5a634d86d267dcf6fe531ccb0f47821c25a9682a", 
        ratings: { damage: 3, accuracy: 5, range: 3, fireRate: 5, mobility: 4 }
        },
        {
            id: 3,
            name: "SCAR-L",
            type: "Assault Rifle",
            description: "A modular, heavy-hitting assault rifle. Slower fire rate balanced by high damage and stable recoil.",
            ammo: "7.62x51mm NATO",
            image: "https://img.gamewith.net/article_tools/cod-modernwarfare/gacha/12631.png",
            ratings: { damage: 4, accuracy: 3, range: 4, fireRate: 3, mobility: 3 }
        },
        {
            id: 4,
            name: "Grau 5.56",
            type: "Assault Rifle",
            description: "Lightweight and maneuverable 5.56 platform with exceptional range and very manageable recoil.",
            ammo: "5.56x45mm NATO",
            image: "https://cdn-cf.ginx.tv/imgcdn/H_JDasTP8WSRSIVAgDBi3Ot5Mmydalf0eHX9nAzZOLo/rs:fill:720:0:1/g:ce/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzMi9XYXJ6b25lL2dyYXVfNS41NV8xLmpwZw",
            ratings: { damage: 3, accuracy: 4, range: 4, fireRate: 4, mobility: 4 }
        },
        {
            id: 5,
            name: "FAL",
            type: "Battle Rifle",
            description: "A semi-automatic battle rifle. High damage output requiring high precision and quick trigger finger.",
            ammo: "7.62x51mm NATO",
            image: "https://img.gamewith.net/article_tools/cod-modernwarfare/gacha/12629.png",
            ratings: { damage: 4, accuracy: 4, range: 4, fireRate: 2, mobility: 3 }
        },
        {
            id: 6,
            name: "Oden",
            type: "Assault Rifle",
            description: "Bullpup assault rifle firing hard-hitting 12.7mm ammunition. Slow rate of fire but massive damage.",
            ammo: "12.7x55mm",
            image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/06/Warzone-Oden.webp-.jpg?w=1600&h=1200&fit=crop",
            ratings: { damage: 5, accuracy: 3, range: 4, fireRate: 2, mobility: 2 }
        },
        {
            id: 7,
            name: "FR 5.56",
            type: "Assault Rifle",
            description: "A 3-round burst bullpup rifle. A precise burst is extremely deadly at intermittent ranges.",
            ammo: "5.56x45mm NATO",
            image: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/11/modern-warfare-3-fr-5-56-general-use-build-preview.jpg?w=1600&h=900&fit=crop",
            ratings: { damage: 3, accuracy: 4, range: 3, fireRate: 4, mobility: 3 }
        },
        {
            id: 9,
            name: "AUG",
            type: "Submachine Gun",
            description: "A modular SMG platform that offers conversion to a burst-fire rifle for improved range.",
            ammo: "9mm Parabellum",
            image: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/09/call-of-duty-warzone-best-aug-warzone-setup-clean.jpg",
            ratings: { damage: 3, accuracy: 3, range: 3, fireRate: 4, mobility: 4 }
        },
        {
            id: 29,
            name: "AK-47",
            type: "Assault Rifle",
            description: "A large-caliber, powerful automatic rifle known for its immense stopping power.",
            ammo: "7.62x39mm Soviet",
            image: "https://images.steamusercontent.com/ugc/2019331435743752145/BE1F88FD2BE573C1151DF7031E2A0B769CF6C67F/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 5, accuracy: 3, range: 4, fireRate: 3, mobility: 3 }
        },
        // --- SUBMACHINE GUNS (SMG) ---
        {
            id: 8,
            name: "MP5",
            type: "Submachine Gun",
            description: "Legendary 9mm SMG. Unmatched balance of stability, mobility, and close-quarters lethality.",
            ammo: "9mm Parabellum",
            image: "https://img.gamewith.net/article_tools/cod-modernwarfare/gacha/12634.png",
            ratings: { damage: 3, accuracy: 4, range: 2, fireRate: 4, mobility: 5 }
        },
        {
            id: 10,
            name: "P90",
            type: "Submachine Gun",
            description: "Bullpup SMG with a unique helical magazine providing high capacity and blazing fire rate.",
            ammo: "5.7x28mm FN",
            image: "https://www.gamerevolution.com/wp-content/uploads/sites/2/2020/03/Modern-Warfare-Best-P90-Setup.jpg",
            ratings: { damage: 2, accuracy: 3, range: 2, fireRate: 5, mobility: 5 }
        },
        {
            id: 11,
            name: "PP19 Bizon",
            type: "Submachine Gun",
            description: "A well-balanced SMG featuring a high capacity helical magazine for sustained fire.",
            ammo: "9x18mm Makarov",
            image: "https://images.steamusercontent.com/ugc/792003124795612560/C93F0A1E81EDA53DFACA3D973B68BF87AD1CFDC5/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 3, accuracy: 4, range: 3, fireRate: 3, mobility: 4 }
        },
        {
            id: 12,
            name: "UMP 45",
            type: "Submachine Gun",
            description: "A powerful, slow-firing SMG that uses .45 ACP rounds for superior close-range stopping power.",
            ammo: ".45 ACP",
            image: "https://images.steamusercontent.com/ugc/1690528250997592166/47E658ADD0763579F97C975277DD088AAAE22F8A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 4, accuracy: 3, range: 2, fireRate: 2, mobility: 4 }
        },
        {
            id: 15, // Use the next sequential ID
            name: "Vector SMG",
            type: "Submachine Gun",
            description: "A futuristic SMG known for its unique Super V system, giving it the highest rate of fire and near-zero muzzle climb for close-quarters domination.",
            ammo: ".45 ACP / 9mm Parabellum", // Common calibers
            image: "https://images.steamusercontent.com/ugc/1822292359479186970/631193976F49EA29CF9A60518CC274FBB6453404/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 3, accuracy: 5, range: 2, fireRate: 5, mobility: 5 }
        },
        
        // --- MARKSMAN RIFLES (MR) & BATTLE RIFLES ---
         {
            id: 10,
            name: "Tempus Torrent",
            type: "Marksman Rifle",
            description: "A high-velocity battle rifle known for a fast time-to-kill (TTK) but demanding trigger discipline.",
            ammo: "7.62x51mm",
            image: "https://mitchcactus.co/wp-content/uploads/2024/12/Black-Ops-6-weapons.webp", 
            ratings: { damage: 4, accuracy: 3, range: 4, fireRate: 4, mobility: 3 }
        },
        {
            id: 13,
            name: "EBR-14",
            type: "Marksman Rifle",
            description: "A semi-automatic battle rifle (M14 EBR) capable of rapid follow-up shots at long range.",
            ammo: "7.62x51mm NATO",
            image: "https://images.steamusercontent.com/ugc/1011563111882216146/50C03215D7914A02C7D38F554AC04EF5EEBD16F8/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 4, accuracy: 4, range: 5, fireRate: 3, mobility: 2 }
        },
        {
            id: 14,
            name: "MK2 Carbine",
            type: "Marksman Rifle",
            description: "A highly accurate lever-action rifle. Will neutralize an enemy with one well-placed shot to the chest.",
            ammo: "9x39mm subsonic", // Common CODWW setting for high damage
            image: "https://cdna.artstation.com/p/assets/images/images/026/129/974/large/ben-garnell-sbeta-04.jpg?1587969420",
            ratings: { damage: 5, accuracy: 4, range: 4, fireRate: 1, mobility: 4 }
        },
        {
            id: 15,
            name: "Kar98k",
            type: "Marksman Rifle",
            description: "A classic bolt-action rifle. Unmatched handling speed for a high-powered, one-shot weapon.",
            ammo: "7.92x57mm Mauser",
            image: "https://images.steamusercontent.com/ugc/1646587525748948886/EF13DB0D6FF5930CA3FA73C232B1317593253DEF/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 5, accuracy: 5, range: 5, fireRate: 1, mobility: 3 }
        },
        {
            id: 8,
            name: "SP-R 208",
            type: "Marksman Rifle",
            description: "A high-accuracy bolt-action rifle designed for long-range, one-shot kills. Reloads slowly between shots.",
            ammo: ".300 Win Mag",
            image: "https://images.steamusercontent.com/ugc/1843685635108739035/B6951924CECDB1DD37BAE69D91271B23561B21E2/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 5, accuracy: 4, range: 5, fireRate: 2, mobility: 3 }
        },
        {
            id: 9,
            name: "SKS",
            type: "Marksman Rifle",
            description: "A hard-hitting, semi-automatic carbine that balances damage with a manageable rate of fire.",
            ammo: "7.62x39mm",
            image: "https://assetsio.gnwcdn.com/best-sks-marksman-rifle-loadout-warzone-attachments-call-duty.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp", 
            ratings: { damage: 4, accuracy: 4, range: 4, fireRate: 3, mobility: 4 }
        },
        // --- SNIPER RIFLES (SR) ---
        {
            id: 16,
            name: "Dragunov",
            type: "Sniper Rifle",
            description: "A gas-operated, semi-automatic sniper rifle allowing for rapid follow-up shots at range.",
            ammo: "7.62x54mmR",
            image: "https://images.steamusercontent.com/ugc/2313223699834352083/B984FB20232130AC78AB19E8D84FEC164C1BC1CD/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 4, accuracy: 5, range: 5, fireRate: 2, mobility: 2 }
        },
        {
            id: 17,
            name: "Barrett .50 Cal",
            type: "Sniper Rifle",
            description: "A semi-automatic anti-material rifle. Unrivaled damage and extreme long-range capability.",
            ammo: ".50 BMG (12.7x99mm)",
            image: "https://images.steamusercontent.com/ugc/2055382280785742423/F28F1971B8A66814D4861554EB9BCAE9717B4C18/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 5, accuracy: 5, range: 5, fireRate: 1, mobility: 1 }
        },

        // --- LIGHT MACHINE GUNS (LMG) ---
        {
            id: 18,
            name: "PKM",
            type: "Light Machine Gun",
            description: "A large-caliber machine gun offering sustained, high-damage fire with massive capacity.",
            ammo: "7.62x54mmR",
            image: "https://images.steamusercontent.com/ugc/1865053375990995203/8270A1C04EFAF392DB3461A6C873612E3C694A15/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 4, accuracy: 3, range: 4, fireRate: 4, mobility: 1 }
        },
        {
            id: 19,
            name: "SA87",
            type: "Light Machine Gun",
            description: "A bullpup LMG with a slow, steady fire rate that is effective at medium-to-long range.",
            ammo: "5.56x45mm NATO",
            image: "https://assetsio.gnwcdn.com/sa87-loadout-warzone-best-call-of-duty-attachments.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
            ratings: { damage: 3, accuracy: 4, range: 4, fireRate: 3, mobility: 2 }
        },
        {
            id: 20,
            name: "MG34",
            type: "Light Machine Gun",
            description: "A vintage, high fire rate LMG. Highly effective for area suppression and defense.",
            ammo: "7.92x57mm Mauser",
            image: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/06/call-of-duty-warzone-best-ugm-loadout.jpg", 
            ratings: { damage: 4, accuracy: 2, range: 3, fireRate: 5, mobility: 1 }
        },
        
        // --- SHOTGUNS (SG) ---
        {
            id: 21,
            name: "Model 680",
            type: "Shotgun",
            description: "A reliable, well-rounded 12 gauge pump-action shotgun. High damage, low rate of fire.",
            ammo: "12 Gauge Shells",
            image: "https://images.steamusercontent.com/ugc/1002556983889248334/D2A1A3FB4E3A537AC57393090F0A8C66CB8D92A1/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 5, accuracy: 2, range: 1, fireRate: 1, mobility: 3 }
        },
        {
            id: 22,
            name: "Origin 12 Shotgun",
            type: "Shotgun",
            description: "A semi-automatic shotgun with a large ammo capacity that allows for continuous, rapid firing.",
            ammo: "12 Gauge Shells",
            image: "https://images.steamusercontent.com/ugc/1831298289891590204/36D820BCA8BFE76B487CA21CFE965085CF50BE75/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 4, accuracy: 1, range: 1, fireRate: 4, mobility: 4 }
        },
        {
            id: 11,
            name: "M1014",
            type: "Shotgun",
            description: "A semi-automatic shotgun prized for its blend of high stopping power and a quick firing follow-up shot.",
            ammo: "12 Gauge",
            image: "https://images.steamusercontent.com/ugc/1754735193903902211/6B9582987F3ED62A2F8E9E1AA008ACA2FFFEA064/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 5, accuracy: 2, range: 2, fireRate: 4, mobility: 3 }
        },
        {
            id: 12,
            name: "SPAS-12",
            type: "Shotgun",
            description: "A classic pump-action shotgun with devastating close-quarters damage but a slow rate of fire.",
            ammo: "12 Gauge",
            image: "https://images.steamusercontent.com/ugc/1933750742388893441/D8B463597B61D366A57CCFCEEF0AADE45005827F/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 5, accuracy: 3, range: 2, fireRate: 1, mobility: 3 }
        },
        {
            id: 13,
            name: "Model 1887",
            type: "Shotgun",
            description: "A highly iconic lever-action shotgun with exceptional range for its class, but a very slow cycle time.",
            ammo: "12 Gauge",
            image: "https://images.steamusercontent.com/ugc/2071134789247572190/4F381B34D5FD96256C283204C777952BF4DBCB7C/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 4, accuracy: 3, range: 3, fireRate: 1, mobility: 3 }
        },

        // --- HANDGUNS (HG) ---
        {
            id: 23,
            name: "Desert Eagle",
            type: "Handgun",
            description: "A massive caliber semi-automatic pistol. Two-shot kill potential but high recoil.",
            ammo: ".50 Action Express",
            image: "https://images.steamusercontent.com/ugc/1645462021478215753/6362559703DCACE9EC2A125DF5B837BE51A56DEF/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 5, accuracy: 3, range: 1, fireRate: 1, mobility: 3 }
        },
        {
            id: 24,
            name: "1911",
            type: "Handgun",
            description: "A well-rounded, classic semi-automatic sidearm chambered in .45 ACP.",
            ammo: ".45 ACP",
            image: "https://images.steamusercontent.com/ugc/912421707947412286/6A1893646911FA73D2235E244A3FFE756CC4A8AD/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 3, accuracy: 3, range: 1, fireRate: 3, mobility: 5 }
        },
        {
            id: 25,
            name: "M19",
            type: "Handgun",
            description: "A semi-automatic 9mm pistol with excellent stability and a rapid cycle rate.",
            ammo: "9mm Parabellum",
            image: "https://images.steamusercontent.com/ugc/1662358552795722725/28DA8792A133CE370A761E91094CA37D0CE9248A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 2, accuracy: 4, range: 1, fireRate: 4, mobility: 5 }
        },
        {
            id: 26,
            name: ".357 Revolver",
            type: "Handgun",
            description: "A heavy-caliber revolver. High damage with a slow rate of fire and high recoil.",
            ammo: ".357 Magnum",
            image: "https://images.steamusercontent.com/ugc/1479949244945139407/AE9EB419DCD60583790CCE21243D298896905349/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            ratings: { damage: 4, accuracy: 3, range: 2, fireRate: 1, mobility: 2 }
        },
        {
            id: 14,
            name: "USP .45",
            type: "Pistol",
            description: "A reliable, hard-hitting sidearm that uses a large caliber round for high damage per shot.",
            ammo: ".45 ACP",
            image: "https://images.steamusercontent.com/ugc/842589945089423411/07B3ECD49271E5888483F10B65CFE5F5E5752B1D/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", 
            ratings: { damage: 3, accuracy: 4, range: 2, fireRate: 3, mobility: 4 }
        },
        
        // --- LAUNCHERS ---
        {
            id: 27,
            name: "RPG-7",
            type: "Launcher",
            description: "A portable, shoulder-fired rocket launcher. Highly effective against infantry and vehicles.",
            ammo: "85mm HEAT Warhead",
            image: "https://img.gamewith.net/article/thumbnail/rectangle/42364.png", 
            ratings: { damage: 5, accuracy: 1, range: 3, fireRate: 1, mobility: 1 }
        },
        {
            id: 28,
            name: "Javelin",
            type: "Launcher",
            description: "A fire-and-forget guided missile launcher. Excellent against armored targets from any range.",
            ammo: "Tandem-Charge HEAT Missile",
            image: "https://i.imgur.com/CEfg2Yx.png", 
            ratings: { damage: 5, accuracy: 5, range: 5, fireRate: 1, mobility: 1 }
        },
        {
            id: 16,
            name: "MGL-32",
            type: "Grenade Launcher",
            description: "A six-shot, rotary-fed grenade launcher. Delivers massive saturation fire at medium ranges, ideal for area denial and clearing entrenched enemies.",
            ammo: "40mm Grenade",
            image: "https://images.steamusercontent.com/ugc/854978386862807538/53D0CA84EA2F1D7E49A6D79A822C2464F91C407D/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 4, accuracy: 2, range: 3, fireRate: 4, mobility: 2 }
        },
        {
            id: 18,
            name: "Stinger",
            type: "Surface-to-Air Missile",
            description: "A heat-seeking missile system specialized in taking down aerial threats. Features a quick lock-on for reliable air defense.",
            ammo: "FIM-92 Missile",
            image: "https://i.imgur.com/R81zQZI.png",
            ratings: { damage: 4, accuracy: 5, range: 5, fireRate: 2, mobility: 2 }
        },
        {
            id: 19,
            name: "XM25 ",
            type: "Airburst Launcher",
            description: "Fires smart 25mm airburst rounds. Can be set to detonate over cover, eliminating enemies that traditional direct-fire weapons cannot reach.",
            ammo: "25mm Airburst Round",
            image: "https://images.steamusercontent.com/ugc/2035110269104834530/2045D35E64F9703EC96F1324DE36492F32FC7232/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            ratings: { damage: 3, accuracy: 4, range: 3, fireRate: 3, mobility: 3 }
        },
        {
            id: 21,
            name: "SMAW",
            type: "Rocket Launcher",
            description: "A reusable anti-armor and anti-fortification rocket launcher. Features a devastating direct-fire projectile with high velocity.",
            ammo: "83mm HEDP Rocket",
            image: "https://images.steamusercontent.com/ugc/18335865765606510565/F469E974B1EB1F5DA2D0E62C51144F77C0B621AE/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            ratings: { damage: 5, accuracy: 3, range: 4, fireRate: 1, mobility: 3 }
        }
        ],
      groups: [
        {
            id: 1,
            name: "Task Force 141",
            type: "Special Operations Unit (Multi-national)",
            description: "An elite, multi-national counter-terrorism and direct action unit, originally assembled to counter the threat posed by the Russian Ultranationalist Imran Zakhaev and later his protégé, Vladimir Makarov. Known for conducting high-profile, high-risk operations across the globe, the unit draws its operatives from several nations:\n\nUnited Kingdom (SAS / Special Air Service) – Captain John Price, Kyle “Gaz” Garrick, and others.\n\nUnited States (Army Rangers, Delta Force, CIA SAC, USMC) – American operatives including Ghost and Alex (CIA).\n\nScotland (SAS) – John “Soap” MacTavish himself, representing the Scottish contingent of the UK forces.\n\nCanada (JTF2 – Joint Task Force 2) – Simon “Ghost” Riley has Canadian lore links in some continuities, while reboot lore leans UK/US, but Task Force 141 often recruits JTF2 operators.\n\nMexico (Los Vaqueros – Special Forces) – Colonel Alejandro Vargas and his men in the reboot timeline.\n\nOther NATO Allies (various special mission units) – occasionally contributing specialists depending on the operation.",
            specs: [
                "Multi-national personnel (UK, US, Scotland, Canada, Mexico, NATO allies)",
                "Direct Action",
                "Counter-terrorism",
                "Protagonist Faction"
            ],
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be46b9c0-33a5-4084-a20e-94abbaab306b/d2dogl2-8781e32c-a4d1-4892-a4fb-792db704eaaa.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZTQ2YjljMC0zM2E1LTQwODQtYTIwZS05NGFiYmFhYjMwNmIvZDJkb2dsMi04NzgxZTMyYy1hNGQxLTQ4OTItYTRmYi03OTJkYjcwNGVhYWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hndZDILcwoY4JjseDiTLXrGKPJeSvBEQSeQrmEWBk_Q",
            icon: "Crosshair"
            },
        {
            id: 2,
            name: "SAS - Special Air service",
            type: "Tier 1 Special Forces (United Kingdom)",
            description: "The United Kingdom's premier special forces unit, specializing in counter-terrorism, hostage rescue, and covert reconnaissance. Captain Price and Gaz are notable members of the SAS. They frequently serve as a foundational element of the Coalition and Task Force 141 in both the original and reboot series, known for their discipline and effectiveness in global operations.",
            specs: ["'Who Dares Wins'", "Counter-terrorism", "Intelligence Gathering", "Direct Action", "resilient", "physcially and mentally tough"],
            image: "https://images.steamusercontent.com/ugc/1754686618779569038/158591B6DAE6E46E0306E4ACFDC7513511043417/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            icon: "Shield"
        },
        {
            id: 3,
            name: "USMC - United States Marine Corps",
            type: "Military Expeditionary Force (United States)",
            description: "The sea-based land warfare service branch of the U.S. Armed Forces. The USMC is often deployed as a rapid-response force in conflict zones. In the original series, they are heavily featured in the initial U.S. invasion following the Russian invasion of the East Coast. They represent a major element of conventional military power supporting the Coalition.",
            specs: ["Amphibious Warfare", "Expeditionary Operations", "Rapid Response", "Conventional Military"],
            image: "https://preview.redd.it/dqmvxectwsr41.jpg?width=640&crop=smart&auto=webp&s=e170ac855664a58d07ef25a94331dfa9cabbbcd1", 
            icon: "Anchor"
        },
        {
            id: 4,
            name: "US Army Rangers",
            type: "Light Infantry Special Operations (United States)",
            description: "An elite light infantry unit of the U.S. Army Special Operations Command. They played a crucial role in defending the U.S. homeland from the Russian invasion in *Modern Warfare 2 (2009)*, often fighting alongside conventional U.S. Army units. They are highly trained for direct action raids and air assault operations.",
            specs: ["Air Assault", "Direct Action Raids", "Infiltration", "Special Operations"],
            image: "https://i.ytimg.com/vi/w1_k9fOstA4/maxresdefault.jpg", 
            icon: "Star"
        },
    {
            id: 6,
            name: "Delta Force",
            type: "Tier 1 Special Forces (United States)",
            description: "Officially the 1st Special Forces Operational Detachment-Delta (1st SFOD-D), this is the U.S. Army's top-tier counter-terrorism and special mission unit. They were prominently featured in *Modern Warfare 3 (2011)*, playing a significant role in the ongoing conflict against the Russian Ultranationalists on American soil and globally.",
            specs: ["Counter-terrorism", "Hostage Rescue", "Direct Action", "Special Reconnaissance", "Elite", ],
            image: "https://i.ytimg.com/vi/a72f7mHIpMI/maxresdefault.jpg", 
            icon: "Lightning"
        },
        {
            id: 18,
            name: "Navy SEALs (United States)",
            type: "Tier 1 Special Forces (United States)",
            description: "The United States Navy's principal special operations force, specializing in maritime, jungle, urban, and cold-weather warfare (Sea, Air, and Land). They made prominent appearances in the original *Modern Warfare 2 (2009)* during the mission 'The Only Easy Day... Was Yesterday,' where they assaulted an oil rig to rescuing a high-value prisoner. They also supported Delta Force operations in *Modern Warfare 3 (2011)*, notably in the attack on the Russian submarine.",
            specs: ["Maritime Operations", "Direct Action", "Counter-terrorism", "Underwater Demolition", "Special Reconnaissance", "Hostage Rescue", "Tier 1 Special Forces", ],
            image: "https://images.steamusercontent.com/ugc/404558073169933902/9356B1AE2F3A1A66E044AF7198CD554DD50F55A0/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            icon: "Trident"
        },
        {
            id: 5,
            name: "CIA / SAC - Special Activities Center",
            type: "Covert Paramilitary Operations (United States)",
            description: "The SAC is the arm of the Central Intelligence Agency responsible for covert action and paramilitary operations. In the reboot series, they are a key intelligence and action element, often working closely with local forces and Task Force 141, performing missions that the U.S. government cannot officially acknowledge. Alex is a notable paramilitary operative in this group.",
            specs: ["Covert Action", "Paramilitary Operations", "Intelligence Gathering", "Unacknowledged Missions"],
            image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/05/call-of-duty-cia-secret-warzone.jpg?w=1200&h=675&fit=crop", 
            icon: "MagnifyingGlass"
        },
        { 
            id: 7,
            name: "ULF - Urzikstan Liberation Force ",
            type: "Irregular Military/Militia (Middle East)",
            description: "A local freedom-fighting militia operating in the fictional Middle Eastern country of Urzikstan in the reboot series. Led by Farah Karim, they fight against the occupying Russian forces and the terrorist group Al-Qatala. They are a critical partner force to the CIA and Task Force 141, providing local knowledge and boots on the ground.",
            specs: ["Guerrilla Warfare", "Anti-occupation", "Local Intelligence", "Partner Force"],
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3a702ca6-2509-4117-bde4-c53cd3abd470/di0k9cj-75cf4160-7e8f-4db0-bb19-67021bab487e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8zYTcwMmNhNi0yNTA5LTQxMTctYmRlNC1jNTNjZDNhYmQ0NzAvZGkwazljai03NWNmNDE2MC03ZThmLTRkYjAtYmIxOS02NzAyMWJhYjQ4N2UuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kvHBV0susJxKo_M2YfpsNWvT6mtl44OQGq_4BirTf_o", 
            icon: "Fist"
        },
        {
            id: 8,
            name: "Mexican Special Forces – Los Vaqueros",
            type: "Elite Special Forces (Mexico)",
            description: "A highly-trained unit within the Mexican Special Forces, led by Colonel Alejandro Vargas. Known as 'Los Vaqueros,' they operate out of Mexico and are dedicated to countering the powerful Las Almas drug cartel. In the reboot *Modern Warfare II (2022)*, they become key allies to Task Force 141.",
            specs: ["Counter-narcotics", "Border Security", "Direct Action", "Alliance with TF141"],
            image: "https://img.gta5-mods.com/q95/images/mwii-mexican-special-forces-los-vaqueros-kit-pack-for-mp-male/e42b23-Chokehold.jpg", 
            icon: "Badge"
        },
        {
            id: 10,
            name: "Russian Ultranationalists",
            type: "Political/Terrorist Movement (Russia)",
            description: "The primary antagonist faction in the original *Modern Warfare* trilogy, led by figures like Imran Zakhaev and Vladimir Makarov. They are an extremist political movement seeking to restore the Soviet Union's global influence, using terrorism and unconventional warfare. Their actions, including the false flag invasion of the U.S., drive the core conflict.",
            specs: ["Terrorism", "False Flag Operations", "Political Extremism", "Primary Antagonist (Classic MW)"],
            image: "https://images.steamusercontent.com/ugc/779621085353156058/8B1D9CFCC7446A73651401EADB8DE9B89585CA2A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            icon: "Skull"
        },
        {
            id: 11,
            name: "Russian Armed Forces",
            type: "Conventional Military (Russia)",
            description: "The standing military of the Russian Federation. While they are sometimes allied or neutral with Western forces (depending on the specific game/timeline), they are often depicted as the primary opposing conventional military force, particularly during the invasion of the U.S. in the original *MW2* and the occupation of Urzikstan in the reboot series. Their disposition changes based on the political climate within the games.",
            specs: ["Conventional Warfare", "Global Military Power", "Often Hostile", "Air & Ground Forces"],
            image: "https://i.redd.it/anybody-know-what-camothe-russian-vdv-soldiers-wore-in-cod-v0-m0slytu5kmsd1.jpg?width=716&format=pjpg&auto=webp&s=c0ae230e0ae8186658c9b7f466a9dba38d288770", 
            icon: "Tank"
        },
        {
            id: 12,
            name: "AQ - Al-Qatala",
            type: "Terrorist Organization (Middle East)",
            description: "The main terrorist antagonist in the reboot *Modern Warfare* timeline, led by 'The Wolf' and 'The Butcher.' They are a highly organized, international terrorist group, often supported or manipulated by the Russian Ultranationalists. They utilize brutal tactics, chemical weapons, and operate across the Middle East and Europe, necessitating the intervention of Task Force 141 and the CIA.",
            specs: ["International Terrorism", "Chemical Weapons Use", "Anti-Western Ideology", "Primary Antagonist (Reboot MW)"],
            image: "https://cdnb.artstation.com/p/assets/images/images/068/395/015/4k/jordan-lamarre-wan-sp-al-qatala-tier3-elites.jpg?1697696963", 
            icon: "Bomb"
        },
        {
            id: 15,
            name: "Konni Group",
            type: "Russian Paramilitary/PMC",
            description: "Introduced in the reboot series, the Konni Group is a mysterious Russian paramilitary faction, essentially a Private Military Company (PMC), that aligns itself with the goals of Vladimir Makarov. They are highly trained, well-equipped, and serve as Makarov's primary proxy force, often operating in a deniable capacity to execute his global terror plots.",
            specs: ["Private Military Company (PMC)", "Proxy Force for Makarov", "High-Tech Gear", "Global Operations"],
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2702fabd-fbb4-48a2-a39e-35c1907142af/didw5yy-49c5123d-690a-4db1-90dd-409f7f49155d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8yNzAyZmFiZC1mYmI0LTQ4YTItYTM5ZS0zNWMxOTA3MTQyYWYvZGlkdzV5eS00OWM1MTIzZC02OTBhLTRkYjEtOTBkZC00MDlmN2Y0OTE1NWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ctuEGY3lA_iLgcOeLfgyGByS01FH-mDGnmIWIst3nMo", 
            icon: "Mask"
        },
        {
            id: 16,
            name: "Shadow Company",
            type: "Private Military Company (PMC)",
            description: "A controversial U.S. Private Military Company. In the original *MW2 (2009)*, they were led by General Shepherd and acted as his personal, highly-disciplined army, turning hostile against TF141. In the reboot *MWII (2022)*, they are led by Graves and serve the Coalition, though their loyalty and methods remain highly suspect, leading to another conflict with TF141.",
            specs: ["Private Military Company (PMC)", "Highly Disciplined", "Ambiguous Morality", "Direct Action"],
            image: "https://i.redd.it/7yrtcdbs264a1.jpg", 
            icon: "Axe"
        },
        {
            id: 17,
            name: "Las Almas Cartel",
            type: "Transnational Criminal Organization (Mexico)",
            description: "A powerful and brutal drug cartel based in Mexico and operating internationally. In the reboot *Modern Warfare II (2022)*, they are a primary antagonist, evolving from a simple drug operation into a transnational terror threat with ties to Al-Qatala. Task Force 141 and Los Vaqueros must work together to dismantle their network.",
            specs: ["Drug Trafficking", "Transnational Crime", "High-Level Corruption", "Terror Ties"],
            image: "https://preview.redd.it/all-las-almas-cartel-enemy-models-showcase-v0-0ivhfpwtw3gf1.jpg?width=1080&crop=smart&auto=webp&s=1f64ada6358b634c3138cef3a09ef37880d4ab0c", 
            icon: "Handcuffs"
        }
      ],
      vehicles: [
        {
            "id": 19,
            "name": "M1 Abrams (Main Battle Tank)",
            "type": "Main Battle Tank (MBT) (United States)",
            "description": "The primary main battle tank of the U.S. Army and a symbol of American ground power. Featured in the classic *Modern Warfare 2 (2009)* during the defense of the American suburbs against the Russian invasion. Known for its powerful 120mm smoothbore cannon, sophisticated Chobham armor (often with Depleted Uranium components), and its distinct, powerful multifuel turbine engine. It is the backbone of the U.S. ground forces.",
            "specs": ["120mm M256 Smoothbore Cannon", "Composite/DU Armor", "1500 hp Turbine Engine", "MBT"],
            "image": "https://cdnb.artstation.com/p/assets/images/images/031/280/923/large/isaac-oster-1165626250321433681-account-id3.jpg?1603160853", 
            "icon": "Tank"
        },
        {
            "id": 20,
            "name": "UH-60 Black Hawk",
            "type": "Utility Tactical Transport Helicopter (United States)",
            "description": "The ubiquitous utility and air assault helicopter of the U.S. military. The Black Hawk is a constant presence, used for inserting and extracting Special Operations forces, troop transport, and MEDEVAC. It is the player's primary means of transport in many missions across the series, notably in the air assault missions of both the classic and reboot timelines.",
            "specs": ["Twin-engine Medium-lift Rotorcraft", "11-Soldier Capacity", "Air Assault & Transport", "Door-mounted Machine Guns"],
            "image": "https://cdnb.artstation.com/p/assets/images/images/036/333/153/large/sebastien-gregoire-blackhawk-01.jpg?1617371507", 
            "icon": "Helicopter"
        },
        {
            "id": 21,
            "name": "AH-64 Apache",
            "type": "Attack Helicopter (United States)",
            "description": "The U.S. Army's primary attack helicopter, designed for anti-armor and close air support. Players frequently fly or ride in this aircraft, utilizing its powerful 30mm chain gun and missile armament (like Hellfires) to clear hostile vehicles and entrenched positions. It appears in critical missions in both the original and reboot series, providing indispensable airborne firepower.",
            "specs": ["30mm M230 Chain Gun", "AGM-114 Hellfire Missiles", "Tandem-seat Cockpit", "Attack Rotorcraft"],
            "image": "https://www.boeing.com/content/dam/boeing/boeingdotcom/features/2022/10/modernized-apache-hero.jpg", 
            "icon": "Target"
        },
        {
            "id": 22,
            "name": "Stryker (ICV)",
            "type": "Infantry Carrier Vehicle (ICV) (United States)",
            "description": "An 8-wheeled armored fighting vehicle used by the U.S. Army's Stryker Brigade Combat Teams. It is designed to rapidly transport a squad of infantry while providing armored protection and supporting fire. It is often seen alongside U.S. forces during urban combat and plays a prominent role in the invasion and defense missions of *Modern Warfare 2 (2009)*.",
            "specs": ["8x8 Wheeled APC", "M2 .50 Caliber Machine Gun", "High Mobility", "Infantry Transport"],
            "image": "https://i.ytimg.com/vi/rvW56FtD87s/maxresdefault.jpg", 
            "icon": "Wheel"
        },
        {
            "id": 23,
            "name": "BTR-80 / BTR-80A",
            "type": "Armored Personnel Carrier (APC) (Russia)",
            "description": "A series of 8-wheeled, amphibious armored personnel carriers used by the Russian Armed Forces and the Ultranationalist/Konni forces. They are common light-armored threats encountered by players, identifiable by their wheeled design and turret-mounted weapon. The BTR-80A variant, with its 30mm autocannon, is a particularly dangerous and frequent enemy vehicle in the series.",
            "specs": ["8x8 Wheeled APC", "14.5mm KPVT MG or 30mm Autocannon", "Amphibious Capability", "Infantry Transport"],
            "image": "https://i.pinimg.com/736x/af/90/0c/af900c60e317a2b8470102f4a036e187.jpg", 
            "icon": "Commando"
        },
        {
            "id": 24,
            "name": "HMMWV / Humvee",
            "type": "Light Utility Vehicle / Armored Car (United States)",
            "description": "The High Mobility Multipurpose Wheeled Vehicle is the iconic light tactical vehicle of the U.S. military. It serves in various roles: transport, ambulance, and weapons carrier (often mounting a .50 cal or grenade launcher). Its distinct silhouette is constantly present as an allied vehicle in nearly every U.S.-led mission and often a drivable vehicle in multiplayer/co-op modes.",
            "specs": ["4x4 Light Truck", "Various Armaments (.50 Cal, Grenade Launcher)", "High Off-Road Mobility", "Diesel Engine"],
            "image": "https://i.pinimg.com/1200x/50/97/cc/5097cc8231f1d7b192ac8904bd357a1e.jpg", 
            "icon": "Wheel"
        },
        {
            "id": 25,
            "name": "T-72 / T-90 Main Battle Tank",
            "type": "Main Battle Tank (MBT) (Russia)",
            "description": "The backbone of Russian and Ultranationalist/Konni armored divisions. The T-72 is a frequent and dangerous enemy in the campaigns. Its later variants (like the T-90 in some depictions) boast a powerful 125mm smoothbore gun and an autoloader. The player must often use anti-tank weapons like the Javelin or tank battles to neutralize this threat.",
            "specs": ["125mm Smoothbore Cannon", "Autoloader System", "Reactive Armor (later variants)", "MBT"],
            "image": "https://images.steamusercontent.com/ugc/88226010742421724/D49639D7D2BD5ED4A6EAA3162B6087C4201F7D9C/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            "icon": "Tank"
        },
        {
            "id": 26,
            "name": "MIL Mi-24 'Hind'",
            "type": "Attack Helicopter / Gunship (Russia)",
            "description": "A large and heavily armed attack helicopter, nicknamed the 'Flying Tank'. The Mi-24 is a major aerial threat to allied forces, often used for transporting small squads and providing devastating rocket and cannon fire. It is frequently seen in missions against Russian and Ultranationalist forces and appears as a powerful Killstreak in multiplayer.",
            "specs": ["12.7mm or 30mm Cannon", "Rocket Pods / Anti-Tank Missiles", "Low-Capacity Troop Transport", "Armored Cockpit"],
            "image": "https://i.pinimg.com/736x/ba/20/df/ba20dff53f9fbaf864d4951a2da88dd0.jpg", 
            "icon": "Target"
        },
        {
            "id": 27,
            "name": "V-22 Osprey",
            "type": "Tiltrotor Multi-Mission Aircraft (United States)",
            "description": "A unique aircraft that combines the vertical takeoff and landing of a helicopter with the speed and range of a turboprop plane. The V-22 is used by the U.S. Marines and Special Operations for long-range insertion and extraction. It is most prominently featured in the newer *Modern Warfare* games for transporting and dropping off large numbers of troops or equipment.",
            "specs": ["Tiltrotor Design", "Vertical Takeoff/Landing (VTOL)", "High Speed/Range", "Troop/Cargo Transport"],
            "image": "https://i.pinimg.com/736x/16/60/30/1660301eae896f86900da58b81bb1bd9.jpg", 
            "icon": "Helicopter"
        },
        {
            "id": 28,
            "name": "A-10 Thunderbolt II 'Warthog'",
            "type": "Close Air Support (CAS) Attack Aircraft (United States)",
            "description": "The legendary ground-attack aircraft known for its durability and powerful GAU-8/A Avenger 30mm rotary cannon, often associated with the distinct 'BRRRT' sound. While not player-flyable, it appears as a devastating Killstreak reward or a crucial friendly air support asset to eliminate enemy armor and fortified positions in the campaign and multiplayer.",
            "specs": ["30mm GAU-8/A Avenger Cannon", "Large Payload of Ordnance", "Extreme Durability", "CAS Fixed-Wing"],
            "image": "https://cdna.artstation.com/p/assets/images/images/031/421/816/large/sebastien-gregoire-veh-warthog-02.jpg?1603577002", 
            "icon": "Plane"
        },
        {
            "id": 29,
            "name": "UGV / Wheelson",
            "type": "Unmanned Ground Vehicle (UGV) (United States)",
            "description": "A player-controlled, miniature remote tank used as a powerful killstreak or mission support asset. Known as the UGV in the classic *Modern Warfare 3* mission 'Persona Non Grata' and the Wheelson in the rebooted *Modern Warfare 2*. It features a remote-operated turret and high-speed mobility to flank and destroy infantry and lightly armored vehicles.",
            "specs": ["Remote-Controlled", "Miniature Tank Chassis", "Automatic Cannon or Grenade Launcher", "Anti-Personnel/Light-Vehicle"],
            "image": "https://i.ytimg.com/vi/ep13fAM9DdE/maxresdefault.jpg", 
            "icon": "Tank"
        }
      ]
    },

     /*        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣄⣄⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣦⣀⣾⣦⣤⣤⣤⡄⣤⣤⣷⢤⣤⣶⣆⠀⣀⢀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡀⡀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣿⣿⣿⣿⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣄⣄⣀⣠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣽⡻⠿⠟⠛⠉⠉⠙⣿⣿⣯⡙⣿⣿⢿⣥⣿⡏⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠩⠉⡙⡩⣋⣝⢫⠙⡛⣿⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣄⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣹⣿⣿⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⢹⡿⣧⣀⣀⣀⡀⠀⠀⡹⡿⠞⠋⠉⠀⢸⣋⡏⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠆⠨⣟⣯⣿⡿⢿⠻⢿⠿⢿⣿⡛⢩⣯⣭⣯⣯⣯⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡿⠛⠟⠻⣿⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣟⣛⣿⣿⣿⣿⡟⠟⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⢻⣿⡻⡏⠉⠉⠉⣻⠲⣤⣅⣤⣀⣀⣀⣀⣨⣿⣇⣧⣤⣤⣴⣤⣤⣶⣤⠤⠤⠤⠤⣤⣶⡶⠶⠶⣶⡶⠤⠤⠴⣯⢿⣿⡿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⡿⡿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣀⣀⣀⣀⣿⣀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⢻⣬⣶⣤⣤⣤⢦⢦⢦⡤⢦⡤⢤⠤⠤⠤⠤⣠⣾⡿⠿⠿⠿⠻⠟⠛⠛⠚⠚⠛⢻⡟⢛⣳⣀⣤⣤⣤⣤⣤⣤⣤⢤⡤⣄⣀⢀⣀⠀⣾⣿⢿⠇⠀⠀⠀⣿⠛⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠈⠁⠀⠀⠀⡇⢠⣾⣧⣤⣤⣤⣤⣤⣤⣴⣶⣶⣶⣶⣦⣼⣿⣿⣿⣿⣿⣿⣶⣶⣤⣤⣤⣤⣤⣤⣴⣤⣴⣴⣴⣶⣤⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⡆
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣠⣶⢿⠞⠛⠚⠛⠛⠛⠛⠛⠛⠛⠛⢋⣿⣟⣟⣫⣽⡿⠋⠀⠀⠀⢀⣠⡀⠀⣀⣀⣤⢴⣾⠷⡟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⢀⣀⡀⠠⣿⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⡇⢸⣶⣾⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣤⣤⣤⣤⣤⣀⡀⠀⠀⠀⣀⣀⣀⣤⣤⠴⠶⠾⠛⠋⠁⢀⠀⢹⡄⢂⢀⡀⠂⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣶⠀⣀⣠⣤⣴⣶⠿⠿⠛⠛⠉⠉⠀⠀⠀⠀⢠⣤⣴⠄⠀⠀⢠⡴⠶⠶⠖⠒⠒⠒⠛⠛⠛⠛⠛⠉⠉⠉⠉⠙⡟⢻⣄⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⣀⣀⣀⣴⣿⣿⣛⣋⣉⣉⣉⣉⣉⣉⣉⣉⣍⣍⣭⣍⣹⣿⣯⣾⣽⣿⣿⣿⣿⣬⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣬⣭⣭⣿⣿⣿⣿⠀⠀⠉⠀
              ⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣠⣤⣤⣤⠶⠶⠶⢖⡻⢛⡛⠏⡍⢩⣉⡘⠤⠁⠦⠄⠀⠉⡉⠙⠛⢉⠍⠩⡁⠆⣰⠊⠀⠀⠀⠀⢳⡀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⣟⠿⠟⠛⠋⠉⠁⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⣀⡀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣀⣀⣸⡟⢸⣾⡇⠀⠀⠀⠀⠀⣀⣠⣴⣶⣿⣾⣿⣿⣿⣿⣿⣿⣷⣾⣶⣷⣶⣧⣷⣾⣷⣿⣿⣯⣵⠿⠿⠟⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀
              ⢠⣤⣶⢾⡛⣟⠻⣛⠭⣋⣭⢣⠵⡒⢲⢩⡙⡜⣤⠒⡥⢒⠣⡙⢄⠂⡔⠠⠡⠂⠌⠈⠀⢁⠐⠀⡌⢰⠡⡑⢞⠁⠀⠀⠀⠀⠀⠀⢱⡀⠀⣿⠀⠐⠀⡇⠀⠀⠀⠀⠂⠁⠀⠀⠀⠀⠂⠀⠤⣄⣀⠀⠀⠀⠶⠀⠀⠀⠈⠁⠀⠸⠟⣲⣷⣖⣀⣀⣀⣀⣙⣿⣿⣿⣿⣿⣽⣿⣭⣽⣽⣯⣿⣶⣶⣶⠶⠶⢿⣿⣶⣲⡶⣶⣶⣿⡿⠟⠛⠉⠉⠉⠉⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⢾⣿⣧⢣⠽⣸⠱⣍⢻⣱⢦⠳⣬⠳⣉⢦⡙⢴⢢⡙⠴⡉⢎⢁⢊⡔⠠⠐⠂⡀⢂⠠⠄⠐⣀⠡⢌⠂⡱⠐⡌⢧⡀⠀⠀⠀⠀⠀⠀⠁⠀⣿⣰⣄⣂⣤⣠⣤⣦⣤⣤⣦⣤⣴⣤⡶⣦⣶⡶⣶⣿⣶⣶⠶⠾⠾⠿⠷⢶⣴⣶⣶⡶⠛⣿⠯⣯⢭⡯⢯⠯⠧⠞⠈⡏⠓⠶⡾⠃⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠘⣿⣿⣹⢮⠷⣛⡭⢧⡓⢮⡳⣌⠳⣍⠲⣉⢆⠣⡜⢤⠃⡭⡈⠦⡐⢢⠑⡌⡐⢠⢠⠒⢉⠠⡐⢄⠃⠔⢣⠸⢤⡙⣒⡄⣦⣴⣴⣶⣿⠿⠟⠋⢹⣿⡿⠿⡿⠿⡿⡿⣾⣷⣿⣶⣦⣿⣿⡇⠈⣿⠋⠀⠀⠀⠀⠀⠀⢸⡇⢰⡔⢺⣄⣾⠀⢻⢸⠹⣼⡻⢸⢱⠀⢿⡄⠀⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⢻⣿⡷⣛⢯⡱⣙⢦⣛⢦⡓⣬⠳⣌⢣⢇⢎⡳⡘⢦⡙⢤⢓⡘⢤⠃⡜⠤⡑⡂⢆⡘⡄⢢⠑⣌⠱⣊⢦⣙⣦⣽⣾⡿⠿⠛⠉⠉⠀⠀⠀⠀⠈⢻⣿⣆⠀⠀⠀⠀⠀⡄⠀⠀⣤⣼⣿⡇⠀⢻⣄⠀⠀⠀⠀⠀⠀⠘⡇⢸⣿⣴⠇⢸⡆⢸⡌⣧⣏⣇⡏⡏⡆⠸⣷⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⢸⣿⡷⣭⠶⣍⣳⢮⡜⣖⢻⣌⡳⣌⠳⢎⡚⡴⣉⠦⣙⠢⣍⠜⡆⢳⢌⣲⢡⢓⠬⣒⣜⣥⣯⣶⣿⡿⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⠅⠀⠀⠀⠀⠀⣰⣿⣿⡿⢿⠁⠀⠀⠙⠲⠄⠀⠀⠀⠀⢀⡗⠛⢾⡏⠈⡏⣷⠘⢣⢹⣹⣹⢹⣹⢻⠀⢿⣧⠀⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠈⣿⣿⣚⣝⢣⣳⢺⡼⣩⠞⡴⣓⣬⢛⡬⡕⣲⠡⢧⡩⢖⡜⢎⣙⣣⢮⣴⣧⣾⣷⠿⠟⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⠀⠀⢰⠀⠀⣸⣿⡿⠋⠀⠈⠑⠒⠒⠒⠒⠒⠒⠒⠒⠒⠉⠁⠠⢸⠁⠀⢹⣸⡆⢸⡞⣷⢿⣧⢏⣏⣇⠘⣿⡄⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⢹⣿⡧⣏⠷⣊⢷⡘⢧⡛⡴⣩⢆⡳⠼⣜⠲⣍⡳⣜⣮⣼⣻⣾⡷⠿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⠇⠀⢠⡇⠀⢰⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠈⢿⣷⠀⢹⣸⣞⣼⡿⡜⡽⡄⠹⣿⡀⠈⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⢸⣿⣿⣜⣫⣝⢦⡟⣲⢏⡵⢣⣎⢷⡻⣜⣻⣭⡷⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡏⠀⠀⡾⠀⢠⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣧⠈⢧⣻⣽⣹⡽⣽⡿⡄⠹⣷⡀⠈⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠈⣿⣿⣭⢗⣮⡳⣏⢷⣺⣝⣯⣾⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⡟⠀⠀⣸⠃⠀⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣻⣆⠘⢯⣷⣳⣳⣷⣽⡽⡄⠹⣿⡄⠈⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⢻⣿⣯⣾⣶⣿⡾⠟⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⠁⠀⠘⡼⠀⣼⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣆⠘⢯⣷⣻⣷⡿⣽⡿⡄⠙⣿⣆⠈⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠈⠙⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠃⠐⠀⠀⠇⢰⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣻⣆⡘⢯⣷⡿⡿⣽⣽⣞⢆⠊⢿⣧⡀⠘⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣧⣤⣤⡀⠀⠀⣾⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⡿⣦⡘⢯⣿⣿⣿⣾⢾⣿⣣⡀⢹⣷⣄⠀⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢿⣭⣿⣿⣖⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣧⡪⡻⣿⣮⢿⣿⡳⣿⣟⢆⡘⢻⣷⣄⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠙⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢯⢷⣎⡛⢿⣿⡽⣿⣮⢯⣿⣷⣄⠙⢿⣷⣄⠈⠳⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⡿⣯⡈⡷⣿⣮⡻⣷⣽⢿⣾⣱⣄⠘⢿⣗⣶⣿⣟⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢾⣿⣧⠏⡿⣿⣮⡻⣷⣝⢾⡳⣿⣦⣯⡟⣧⣟⣾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢟⣿⣥⠍⠻⣿⣮⡫⣟⣟⣻⡾⠏⣢⣧⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⢽⣿⣥⢌⠳⡟⢫⣿⡟⣡⣼⣵⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣦⣞⡽⢇⡾⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢻⣿⣦⡞⣵⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠟⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    */

      //CALL OF DUTY: BLACK OPS 


      


      /* ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡟⠘⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⡿⠀⠀⠹⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⠃⠀⠀⠀⢻⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⡏⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⢤⣀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⣀⣀⣀⣀⣠⣤⠄
        ⠈⣿⣿⣷⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀
        ⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀
        ⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
        ⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
        ⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
        ⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀
        ⠈⠉⠉⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡿⠟⠋⠉⠉⠉⠀
        ⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀
        ⠀⠢⡀⠀⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⠟⠋⠀⠀⠀⠀⠀⢀⠔⠀⠀
        ⠀⠀⠈⠳⢄⠀⠀⠀⠀⠀⠀⠈⠛⠿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠟⠋⠀⠀⠀⠀⠀⠀⣀⠔⠁⠀⠀⠀
        ⠀⠀⠀⠀⠀⠙⢦⣀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠶⠛⠋⠁⠀⠀⠀⠀⠀⠀⢀⡤⠚⠁⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠉⠳⢦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠒⠤⠄⠀⠀⠀⠀⡀⠀⠀⠀⠀⠠⠐⠒⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢷⣦⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣴⡶⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠿⣿⣶⣶⣶⣦⣤⣴⣶⣶⣿⣿⣿⣿⣿⣿⣶⣶⣶⣤⣶⣶⣶⣶⣿⠿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      */


        // ASSASSIN CREED SECTION
        'ac-series': {
            characters: [
                {
              "id": 1,
              "name": "Altaïr Ibn-La'Ahad",
              "role": "Master Assassin / Mentor",
              "description": "The central protagonist of Assassin's Creed I, tasked with eliminating nine corrupt figures during the Third Crusade.",
              "fullDescription": "Born into the Assassin Brotherhood, Altaïr was a prodigy, achieving the rank of Master Assassin at a young age. His arrogance led to a failed mission, stripping him of his rank. His quest to assassinate nine targets was his path to redemption, during which he uncovered a deeper Templar conspiracy and the betrayal of his mentor. He eventually took over as Mentor of the Brotherhood, reforming its tenets and safeguarding its future for generations.",
              "traits": [
                  "Stoic",
                  "Efficient",
                  "Innovative",
                  "Disciplined",
                  "Agile",
                  "Strategic",
                  "Focused"
              ],
              "game": "Assassin's Creed",
              "image": "https://cdn.displate.com/artwork/270x380/2021-11-19/93c5a588f67b8445c2e930808239e29c_52984f55e1e92f7fb1ab75fc7060c5ce.jpg",
              "icon": "Sword"
          },
          {
              "id": 2,
              "name": "Malik Al-Sayf",
              "role": "Assassin / Assassin Bureau Leader",
              "description": "Altaïr’s rival turned ally, leader of the Jerusalem bureau and a loyal follower of the Creed despite losing his arm and brother.",
              "fullDescription": "Malik was an accomplished Assassin and the leader of the Jerusalem Bureau. He held a deep rivalry with Altaïr due to his overconfidence, which led to the death of Malik's brother, Kadar. Despite his resentment, Malik became a crucial ally and close friend to Altaïr, offering him counsel and support after the events of the game. He proved his unwavering loyalty to the Brotherhood and became an integral part of Altaïr's reforms.",
              "traits": [
                  "Resilient",
                  "Perceptive",
                  "Loyal",
                  "Intellectual",
                  "Cynical",
                  "Sharp-Witted",
                  "Determined"
              ],
              "game": "Assassin's Creed",
              "image": "https://64.media.tumblr.com/3031159f35beb25df95342e2b48e2558/tumblr_inline_o0dygjtHSB1qlr65v_500.jpg",
              "icon": "Shield"
          },
          {
              "id": 3,
              "name": "Maria Thorpe",
              "role": "Former Templar Agent / Assassin",
              "description": "Originally a Templar agent sent to kill Altaïr, Maria eventually joined the Assassins and became his wife.",
              "fullDescription": "A formidable English noblewoman and Templar agent, Maria initially served as a decoy for Robert de Sablé. After being defeated by Altaïr, she was spared and traveled with him, eventually coming to question her Templar beliefs. She renounced the Templars to join the Assassins, becoming Altaïr's wife and the mother of his children. She was a key figure in the development of the Assassins' legacy alongside Altaïr.",
              "traits": [
                  "Bold",
                  "Cunning",
                  "Fierce",
                  "Determined",
                  "Resolute",
                  "Empathetic",
                  "Adaptable"
              ],
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
              "traits": [
                  "Brave",
                  "Loyal",
                  "Tragic",
                  "Impulsive",
                  "Idealistic",
                  "Enthusiastic"
              ],
              "game": "Assassin's Creed",
              "image": "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/11/Kadar-Al-Sayf.jpg?q=50&fit=crop&w=825&dpr=1.5",
              "icon": "Users"
          },
          {
              "id": 5,
              "name": "Al Mualim",
              "role": "Mentor of Masyaf's Assassins / Final Target",
              "description": "Altaïr's mentor and secret Templar, revealed to be the mastermind behind the corruption.",
              "fullDescription": "Al Mualim was the revered Mentor of the Assassin Brotherhood, who trained Altaïr from a young age. His wisdom and guidance were legendary, but he secretly harbored a desire for power and control. He was revealed to be a Templar Grand Master who used the Apple of Eden to manipulate the region and the Assassin Brotherhood itself. His ultimate goal was to establish a false peace through absolute control, leading to a final confrontation with Altaïr.",
              "traits": [
                  "Wise",
                  "Deceptive",
                  "Philosophical",
                  "Cunning",
                  "Charismatic",
                  "Manipulative",
                  "Authoritarian"
              ],
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
              "traits": [
                  "Greedy",
                  "Cruel",
                  "Arrogant",
                  "Ruthless",
                  "Exploitative",
                  "Opportunistic"
              ],
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
              "traits": [
                  "Sadistic",
                  "Secretive",
                  "Wealthy",
                  "Cruel",
                  "Exploitative",
                  "Deceptive"
              ],
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
              "traits": [
                  "Mad Scientist",
                  "Fanatical",
                  "Unethical",
                  "Perverted",
                  "Manipulative",
                  "Ruthless"
              ],
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
              "traits": [
                  "Greedy",
                  "Manipulative",
                  "Paranoid",
                  "Scheming",
                  "Eccentric",
                  "Corrupt",
                  "Cruel"
              ],
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
              "traits": [
                  "Authoritarian",
                  "Strategic",
                  "Merciless",
                  "Brutal",
                  "Uncompromising",
                  "Commanding",
                  "Oppressive"
              ],
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
              "traits": [
                  "Cruel",
                  "Fanatical",
                  "Judgmental",
                  "Sadistic",
                  "Tyrannical",
                  "Zealous"
              ],
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
              "traits": [
                  "Zealous",
                  "Anti-Intellectual",
                  "Dangerous",
                  "Radical",
                  "Fanatical",
                  "Manipulative"
              ],
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
              "traits": [
                  "Paranoid",
                  "Militant",
                  "Delusional",
                  "Ruthless",
                  "Obsessive",
                  "Fearful"
              ],
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
              "traits": [
                  "Crusader",
                  "Royalty",
                  "Strategic",
                  "Fearless",
                  "Brave",
                  "Diplomatic",
                  "Chivalrous"
              ],
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
              "traits": [
                  "Strategic",
                  "Fanatical",
                  "Commanding",
                  "Cunning",
                  "Charismatic",
                  "Manipulative",
                  "Authoritarian"
              ],
              "game": "Assassin's Creed",
              "image": "https://lparchive.org/Assassins-Creed/Update%2025/1-25.jpg",
              "icon": "Templar"
          },
          {
              "id": 1,
              "name": "Ezio Auditore",
              "role": "Master Assassin + Mentor",
              "description": "The central protagonist of Assassin's Creed II, who becomes a legendary Assassin after his family's betrayal.",
              "fullDescription": "Ezio Auditore da Firenze was born into nobility but became an Assassin after his family's betrayal and execution. His journey spans decades, from a revenge-driven youth to a wise and charismatic mentor. He dismantled the Templar Order across Italy, forged alliances with historical figures like Leonardo da Vinci, and helped shape the future of the Brotherhood for generations.",
              "traits": [
                  "Charismatic",
                  "Arrogant",
                  "Master of Rizz",
                  "Vengeful",
                  "Strategic",
                  "Leader",
                  "Adaptable"
              ],
              "game": "Assassin's Creed II",
              "icon": "Sword",
              "image": "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/449BBgnc3Q1ha2IN9rh3bR/eb9a6d17615e1480d12e9aab24804c67/ac-ezio-hero-mobile.jpg"
          },
          {
              "id": 2,
              "name": "Giovanni Auditore",
              "role": "Assassin / Ally",
              "description": "Ezio’s father, a respected member of the Brotherhood, executed by corrupt officials.",
              "fullDescription": "Giovanni Auditore was a respected nobleman and a Master Assassin in Florence. He was a devoted family man who kept his true identity a secret from his children until his final days. His execution by the Templar-aligned Pazzi family was the catalyst for Ezio's transformation into an Assassin. Giovanni left behind crucial clues and documents that guided Ezio on his path to revenge.",
              "traits": [
                  "Wise",
                  "Honorable",
                  "Secretive",
                  "Protective",
                  "Loyal",
                  "Vigilant",
                  "Principled"
              ],
              "game": "Assassin's Creed II",
              "icon": "Shield",
              "image": "https://64.media.tumblr.com/1afd9ff4074aa0096fc3bae2f5df970a/4f59d6fb55239e98-55/s400x600/9f52f0bbd4db1a987ebe57aaa620c99838fdb52d.jpg"
          },
          {
              "id": 3,
              "name": "Maria Auditore",
              "role": "Ally",
              "description": "Ezio’s mother, a noblewoman and strong supporter of her children after tragedy strikes.",
              "fullDescription": "Maria Auditore was a kind and compassionate noblewoman, married to Giovanni Auditore. She was a loving mother who supported her children after her husband and two sons were executed. The trauma left her unable to speak, but she remained a resilient and supportive figure for Ezio and his sister, Claudia, in their new life at Monteriggioni.",
              "traits": [
                  "Resilient",
                  "Educated",
                  "Compassionate",
                  "Supportive",
                  "Strong-Willed",
                  "Nurturing",
                  "Graceful"
              ],
              "game": "Assassin's Creed II",
              "icon": "Heart",
              "image": "https://pm1.aminoapps.com/6473/204931c31059b5aa3bf405ba078a43b16e4e0ef1_00.jpg"
          },
          {
              "id": 4,
              "name": "Federico Auditore",
              "role": "Ally",
              "description": "Ezio’s older brother, playful and protective, executed alongside Giovanni.",
              "fullDescription": "Federico was Ezio's charismatic and protective older brother. He was a fellow Assassin and often accompanied Ezio on their playful rooftop races. His close bond with Ezio made his execution, alongside his father and younger brother, a devastating event for the family. His death fueled Ezio's initial quest for vengeance.",
              "traits": [
                  "Clever",
                  "Loyal",
                  "Tragic",
                  "Protective",
                  "Playful",
                  "Confident",
                  "Charming"
              ],
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
              "traits": [
                  "Sweet",
                  "Innocent",
                  "Tragic",
                  "Gentle",
                  "Pure",
                  "Fragile"
              ],
              "game": "Assassin's Creed II",
              "icon": "Star",
              "image": "https://pbs.twimg.com/media/GO56fJEWUAElNJf.png"
          },
          {
              "id": 6,
              "name": "Claudia Auditore",
              "role": "Ally / Assassin",
              "description": "Ezio’s sister, who grows into a strong leader and manages the Monteriggioni estate.",
              "fullDescription": "Claudia was Ezio's sister, who started as a carefree young noblewoman. After her family's downfall, she grew into a resilient and capable leader. She took on the management of the Auditore villa in Monteriggioni, handling its finances and renovations. Her administrative skills were a vital contribution to the Assassins' cause, and she later joined the Brotherhood herself.",
              "traits": [
                  "Determined",
                  "Smart",
                  "Independent",
                  "Resourceful",
                  "Resilient",
                  "Organized",
                  "Practical"
              ],
              "game": "Assassin's Creed II",
              "icon": "ShieldCheck",
              "image": "https://64.media.tumblr.com/46df893a4bbe6ba324baa029d81ad99f/0e70f7e4c844cb40-86/s400x600/e6f03061b40a68c2064819d31f695fdb33bb29b1.jpg"
          },
          {
              "id": 7,
              "name": "Mario Auditore",
              "role": "ALly",
              "description": "Ezio’s uncle and mentor, leader of the Monteriggioni Assassins.",
              "fullDescription": "Mario Auditore was the bold and charismatic uncle of Ezio and the leader of the Monteriggioni Assassins. He took Ezio under his wing, teaching him the ways of the Brotherhood and providing him with a home at the Auditore villa. His leadership and military experience were crucial in the fight against the Templars, and he served as a strong father figure to Ezio.",
              "traits": [
                  "Bold",
                  "Experienced",
                  "Protective",
                  "Loyal",
                  "Brave",
                  "Strategic",
                  "Commanding"
              ],
              "game": "Assassin's Creed II",
              "icon": "Shield",
              "image": "https://ac-renaissance.weebly.com/uploads/4/1/8/3/41831587/316288233.png?356"
          },
          {
              "id": 8,
              "name": "Caterina Sforza",
              "role": "Ally / Ruler of Forli",
              "description": "A powerful noblewoman and ally of the Assassins, known for her defiance and leadership.",
              "fullDescription": "Caterina Sforza was a powerful and defiant noblewoman who ruled the city of Forlì. She was a fearless leader who refused to bow to the Templars and became a valuable ally to Ezio. Her cunning and tactical mind were instrumental in protecting her city and helping the Assassins in their fight against the Borgia family.",
              "traits": [
                  "Bold",
                  "Independent",
                  "Tactical",
                  "Fearless",
                  "Defiant",
                  "Determined",
                  "Cunning"
              ],
              "game": "Assassin's Creed II",
              "icon": "Crown",
              "image": "https://www.playthepast.org/wp-content/uploads/2014/02/caterina-sforza-45105.jpg"
          },
          {
              "id": 9,
              "name": "Rodrigo Borgia",
              "role": "Templar / Pope",
              "description": "Grand Master of the Templars and Ezio’s ultimate adversary.",
              "fullDescription": "Rodrigo Borgia was the cunning and ruthless Grand Master of the Templar Order in Italy. He was a master manipulator who used his political power and influence to become the Pope. He was the main antagonist of the game and the one who orchestrated the execution of Ezio's family. His ultimate goal was to acquire the Apple of Eden to establish a new world order under his control.",
              "traits": [
                  "Manipulative",
                  "Fanatical",
                  "Ruthless",
                  "Cunning",
                  "Ambitious",
                  "Scheming",
                  "Authoritarian"
              ],
              "game": "Assassin's Creed II",
              "icon": "Templar",
              "image": "https://assets.mycast.io/actor_images/actor-rodrigo-borgia-assassin-s-creed-128589_large.jpg?1600945022"
          },
          {
        "id": 10,
        "name": "Cesare Borgia",
        "role": "Templar / General of the Papal Army",
        "description": "The ruthless and arrogant son of Rodrigo Borgia, who serves as the main military leader for the Templars in Rome.",
        "fullDescription": "Cesare Borgia is the chief antagonist of Assassin's Creed: Brotherhood. As the son of Rodrigo Borgia, he is a brilliant but brutal military commander who spearheads the Templar campaign to conquer Italy. He possesses an unquenchable thirst for power and respects no one, including his own family. His ambition and cruelty make him Ezio's most direct and dangerous adversary, and the two clash repeatedly as Ezio works to liberate Rome from the Borgia's grip.",
        "traits": [
            "Brutal",
            "Ambitious",
            "Charismatic",
            "Arrogant",
            "Ruthless"
        ],
        "game": "Assassin's Creed: Brotherhood",
        "icon": "Templar",
        "image": "https://preview.redd.it/cesare-borgia-from-assassins-creed-brotherhood-request-v0-1fcgaip2qxga1.jpg?width=640&crop=smart&auto=webp&s=04170634f3f0e8f3e6ee6a35eea35209e7f9d968"
        },
        {
            "id": 11,
            "name": "Lucrezia Borgia",
            "role": "Templar Ally",
            "description": "The sister of Cesare and daughter of Rodrigo, a powerful political figure within the Borgia family.",
            "fullDescription": "Lucrezia Borgia is a complex figure in Assassin's Creed: Brotherhood. As the daughter of the Pope and sister to Cesare, she is an influential ally to the Templars and wields significant power within the Vatican. Despite her role in her family's schemes, her relationship with them is fraught with manipulation and a deep sense of a personal tragedy. Ezio encounters her several times and is a key witness to the dysfunction that ultimately contributes to the Borgia's downfall.",
            "traits": [
                "Influential",
                "Manipulative",
                "Tragic",
                "Political",
                "Scheming"
            ],
            "game": "Assassin's Creed: Brotherhood",
            "icon": "Templar",
            "image": "https://i.namu.wiki/i/4sbCipkzUwGJk9l1Sn6P-NtHX4GVhHOZPOpamvl33BHCTRBrfgVykO6xEVqThpIU2pNn-2OYkt2W6eidSuQu9A.webp"
        },
          {
              "id": 10,
              "name": "Vieri de' Pazzi",
              "role": "Templar",
              "description": "Ezio’s arrogant rival and one of the first targets he eliminates.",
              "fullDescription": "Vieri de' Pazzi was the arrogant and entitled son of the Pazzi family, and Ezio's primary rival in Florence. He was one of the first Templar targets Ezio eliminated, and his death was a key step in Ezio's journey of revenge. His cruelty and arrogance were a reflection of the Pazzi family's corrupt nature.",
              "traits": [
                  "Entitled",
                  "Cruel",
                  "Brash",
                  "Arrogant",
                  "Petty",
                  "Impetuous",
                  "Spoiled"
              ],
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
              "traits": [
                  "Scheming",
                  "Ambitious",
                  "Cold",
                  "Ruthless",
                  "Deceptive",
                  "Calculated",
                  "Fanatical"
              ],
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
              "traits": [
                  "Cowardly",
                  "Greedy",
                  "Desperate",
                  "Weak-Willed",
                  "Cowering",
                  "Self-Serving"
              ],
              "game": "Assassin's Creed II",
              "icon": "Truck",
              "image": "https://i.ytimg.com/vi/3eneTi1oD3Y/maxresdefault.jpg"
          },
          {
              "id": 13,
              "name": "Lorenzo de' Medici",
              "role": "Ally / Ruler of Florence",
              "description": "Ruler of Florence and supporter of the Assassins, targeted by the Pazzi conspiracy.",
              "fullDescription": "Lorenzo de' Medici was the powerful and respected ruler of Florence. He was a patron of the arts and a staunch supporter of the Assassins, who helped him fight against the Templar conspiracy. His diplomatic and strategic mind was a crucial asset in the struggle for control of Florence.",
              "traits": [
                  "Diplomatic",
                  "Respected",
                  "Strategic",
                  "Charismatic",
                  "Wise",
                  "Influential",
                  "Patron"
              ],
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
              "traits": [
                  "Brutal",
                  "Ambitious",
                  "Ruthless",
                  "Violent",
                  "Cruel",
                  "Authoritarian",
                  "Aggressive"
              ],
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
              "traits": [
                  "Greedy",
                  "Authoritarian",
                  "Manipulative",
                  "Corrupt",
                  "Puppet",
                  "Scheming",
                  "Self-Serving"
              ],
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
              "traits": [
                  "Violent",
                  "Loyal",
                  "Aggressive",
                  "Brutal",
                  "Fierce",
                  "Intimidating"
              ],
              "game": "Assassin's Creed II",
              "icon": "Crosshair",
              "image": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/07/Assassins-Creed-2-Dante.jpg?q=50&fit=crop&w=825&dpr=1.5"
          },
          {
              "id": 48,
              "name": "Girolamo Savonarola",
              "role": "Dominican Friar / Reformer",
              "description": "A fiery preacher who led Florence through a radical religious transformation during the late 15th century.",
              "fullDescription": "Born in Ferrara in 1452, Savonarola rose to prominence in Florence with apocalyptic sermons condemning corruption, secular art, and moral decay. After the fall of the Medici in 1494, he helped establish a theocratic republic, declaring Florence the 'New Jerusalem'. His infamous 'Bonfire of the Vanities' symbolized his campaign for spiritual renewal. Defying Pope Alexander VI, Savonarola was excommunicated, arrested, and executed in 1498. His legacy lived on through the Piagnoni movement and inspired early Protestant reformers.",
              "traits": [
                  "Zealous",
                  "Visionary",
                  "Controversial",
                  "Revolutionary",
                  "Fanatical",
                  "Devout",
                  "Charismatic"
              ],
              "game": "Assassin's Creed II",
              "image": "https://assets.mycast.io/characters/girolamo-savonarola-10352725-normal.jpg?1679572207",
              "icon": "Fire"
          },
          {
              "id": 21,
              "name": "Leonardo da Vinci",
              "role": "Ally / anatomist / sculptor /cartographer /painter / botanist / engineer / architect / mathematician",
              "description": "Inventor and close friend to Ezio, helps decode codex pages and upgrade weapons.",
              "fullDescription": "Leonardo da Vinci was a genius inventor, artist, and close friend to Ezio. He was a key ally to the Assassins, helping Ezio by decoding his father's codex pages and upgrading his weapons. His brilliant mind and inventions were instrumental in Ezio's success.",
              "traits": [
                  "Genius",
                  "Inventive",
                  "Supportive",
                  "Creative",
                  "Brilliant",
                  "Curious",
                  "Perceptive"
              ],
              "game": "Assassin's Creed II",
              "icon": "Apple",
              "image": "https://i.redd.it/fcgsv0ybrzr41.jpg"
          },
          {
              "id": 23,
              "name": "Antonio de Magianis",
              "role": "Ally / Leader of the Thieves of Venice",
              "description": "Leader of the Venetian thieves and a key ally to Ezio in Venice.",
              "fullDescription": "Antonio de Magianis was the resourceful and streetwise leader of the Venetian thieves. He was a loyal ally to Ezio in Venice, providing him with vital intel and support against the Templars. His network of thieves and his knowledge of the city's rooftops were invaluable to the Assassins' cause.",
              "traits": [
                  "Resourceful",
                  "Loyal",
                  "Streetwise",
                  "Clever",
                  "Brave",
                  "Reliable",
                  "Cunning"
              ],
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
              "traits": [
                  "Clever",
                  "Influential",
                  "Strategic",
                  "Intelligent",
                  "Resourceful",
                  "Commanding",
                  "Mysterious"
              ],
              "game": "Assassin's Creed II",
              "icon": "Heart",
              "image": "https://pbs.twimg.com/media/Edpbn1_XoAIJ86y.png"
          },
          {
              "id": 25,
              "name": "Bartolomeo d'Alviano",
              "role": "Ally / Conditierro",
              "description": "Mercenary captain who aids Ezio in Venice and later in Rome.",
              "fullDescription": "Bartolomeo d'Alviano was a bold and loyal mercenary captain who became a valuable ally to Ezio. He aided the Assassins in their fight against the Templars in Venice and later in Rome. His military prowess and fierce loyalty were a great asset to the Brotherhood.",
              "traits": [
                  "Brave",
                  "Loud",
                  "Loyal",
                  "Fierce",
                  "Boisterous",
                  "Military-Minded",
                  "Reliable"
              ],
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
              "traits": [
                  "Clever",
                  "Resilient",
                  "Supportive",
                  "Resourceful",
                  "Patient",
                  "Guiding",
                  "Strategic"
              ],
              "game": "Assassin's Creed II",
              "icon": "Heart",
              "image": "https://i.ytimg.com/vi/2hOuwKca8rI/maxresdefault.jpg"
          },
                {
              "id": 27,
              "name": "La Volpe",
              "role": "Assassin / Leader of the Thieves of Florence and Rome ",
              "description": "Mysterious leader of the Florentine thieves' guild. Known for his stealth and intelligence, he aids Ezio in uncovering conspiracies.",
              "fullDescription": "La Volpe was the elusive and streetwise leader of the Florentine thieves' guild. He was a high-ranking Assassin who initially distrusted Ezio but eventually became a loyal ally. His knowledge of the city's hidden passages and his network of informants were invaluable to Ezio in his fight against the Templars.",
              "traits": [
                  "Elusive",
                  "Streetwise",
                  "Loyal",
                  "Cunning",
                  "Mysterious",
                  "Resourceful",
                  "Skeptical"
              ],
              "game": "Assassin's Creed II",
              "icon": "Users",
              "image": "https://i.ytimg.com/vi/SejCoBSAeEc/maxresdefault.jpg"
          },
          {
              "id": 28,
              "name": "Niccolò Machiavelli",
              "role": "Assassin / Philosopher",
              "description": "Florentine philosopher and strategist. A high-ranking Assassin who helps Ezio dismantle the Borgia and Savonarola's influence.",
              "fullDescription": "Niccolò Machiavelli was a real-life Florentine philosopher and diplomat, portrayed as a high-ranking Assassin in the game. He was a strategic and rational figure who provided Ezio with political and tactical advice. He was instrumental in helping Ezio dismantle the Borgia and Savonarola's influence in Florence, and he served as a key figure in the Assassin Brotherhood.",
              "traits": [
                  "Strategic",
                  "Political",
                  "Rational",
                  "Calculating",
                  "Pragmatic",
                  "Intellectual",
                  "Ambitious"
              ],
              "game": "Assassin's Creed II",
              "icon": "ShieldCheck",
              "image": "https://66.media.tumblr.com/f0764eb0e3683363356720e0c94c646f/tumblr_inline_paua0iZYCP1qct9oj_540.png"
          }
              
            ],
          //PIECES OF EDEN 
          weapons: [
            {
            "id": 1,
            "name": "Apple of Eden",
            "type": "Orb",
            "description": "The most iconic Piece of Eden. A spherical artifact that can manipulate minds, create illusions, and project energy.",
            "fullDescription": "The Apple of Eden is a powerful relic created by the Isu to control humanity. Its primary function is to manipulate the minds of a large group of people, making them see illusions and compelling them to obey the user's will. Many Apples have been used to create political movements, establish empires, and instigate wars. Altaïr used one to rebuild the Assassin Brotherhood, and Ezio fought to keep one out of the hands of the Borgias.",
            "image": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/assassins-creed-3/a/a6/Apple-of-Eden.jpg",
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
            "image": "https://cdnb.artstation.com/p/assets/images/images/072/682/639/large/lorenzo-tagliatesta-photo-2024-02-14-23-08-54.jpg?1707948950",
            "specs": ["Enhanced Charisma", "Combat Augmentation", "Energy Projection"],
            "icon": "Sword"
            },
            {
            "id": 3,
            "name": "Staff of Eden",
            "type": "Staff/Scepter",
            "description": "A staff that can amplify the power of an Apple of Eden, control minds, and even grant a form of immortality.",
            "fullDescription": "The Staff of Eden, also known as the Papal Staff or Staff of Hermes, is a versatile Isu artifact. It can be used as a weapon, a key, and a conduit for immense power. In Assassin's Creed II, Rodrigo Borgia used the Papal Staff to amplify the power of his Apple of Eden. In Assassin's Creed Odyssey, the Staff of Hermes was a central plot device, granting the wielder, Kassandra, a form of biological immortality and a connection to the Isu network.",
            "image": "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/101845495_2602306759870217_7411939699679297536_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bYokEgpHEw8Q7kNvwFK-FZN&_nc_oc=AdnyVyOS870rli44J7MnQtoZiii0L0AIbqhZi05X1NeLA4PcP5g-iDwCosVr7Tt5W2M&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=ZdPx2TD2jGTrtIHn8aY5Hw&oh=00_AfbXgrfqxJcQD4asGdLdS0UQp5t4FIl-4uyJ0ZBU3bNvQw&oe=68F1256A",
            "specs": ["Amplification", "Mind Control", "Immortality"],
            "icon": "Crosshair"
            },
            {
            "id": 4,
            "name": "Shroud of Eden",
            "type": "Linen Cloth",
            "description": "A linen cloth with immense regenerative properties, capable of healing wounds and even resurrecting the recently deceased.",
            "fullDescription": "The Shroud of Eden is a rare and powerful Piece of Eden. It is a linen cloth that can heal any wound and even bring the recently deceased back to life, though not without a price. It was famously known as the Shroud of Turin. In Assassin's Creed Syndicate, the Templar Grand Master, Crawford Starrick, sought to use it to secure absolute power over London. Its regenerative abilities made it one of the most sought-after artifacts by both the Assassins and the Templars.",
            "image": "https://harrisonanderson123.wordpress.com/wp-content/uploads/2018/02/shroud-of-consus.jpg",
            "specs": ["Healing", "Regeneration", "Resurrection"],
            "icon": "ShieldCheck"
            },
            {
            "id": 5,
            "name": "Spear of Eden",
            "type": "Spearhead",
            "description": "A powerful Isu spear, a shattered Piece of Eden that grants its wielder incredible strength and special abilities.",
            "fullDescription": "The Spear of Leonidas is a broken Isu artifact that was passed down through the bloodline of Kassandra and Alexios. Unlike other Pieces of Eden, it is a shattered object that doesn't have a grand, world-ending power, but rather augments the user's physical abilities. It can be upgraded by collecting Fragments of Eden, granting new powers like enhanced stealth, devastating attacks, and health regeneration. The Spear of Leonidas is the central weapon and a key part of the protagonist's identity in Assassin's Creed Odyssey.",
            "image": "https://i5.walmartimages.com/seo/Assassin-s-Creed-Odyssey-Spear-of-Leonidas_00f4f702-95c9-4bcb-99d7-706db7a59907.70b8b81975b8f7b748379db1a5c4d0bf.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
            "specs": ["Combat Augmentation", "Health Regeneration", "Elemental Attacks"],
            "icon": "Shield"
            },
            {
            "id": 6,
            "name": "Koh-i-Noor",
            "type": "Diamond",
            "description": "A diamond-shaped Piece of Eden that can locate other Pieces of Eden and link their powers.",
            "fullDescription": "The Koh-i-Noor, or 'Mountain of Light,' is a legendary diamond that is secretly a Piece of Eden. It has the unique ability to locate and track other Pieces of Eden, making it an invaluable tool for both the Assassins and Templars. In addition, it is capable of linking the consciousness of its wielder to a 'Nexus,' a network of Isu artifacts. It was featured prominently in Assassin's Creed Chronicles: India, where the Assassin Arbaaz Mir sought to retrieve it from the Templars.",
            "image": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/07/assassin-s-creed-chronicles-india-abraaz-giving-koh-i-noor-ethan-frye.jpg?q=49&fit=crop&w=825&dpr=2",
            "specs": ["Artifact Tracking", "Nexus Connection", "Power Linking"],
            "icon": "Crown"
            },
            {
            "id": 7,
            "name": "Crystal Ball",
            "type": "Sphere",
            "description": "A crystalline orb that allows its user to view the past and communicate with the Isu.",
            "fullDescription": "The Crystal Ball is a lesser-known Piece of Eden, but no less powerful. It functions as a communication device and a record of the past, allowing its user to witness historical events and communicate with the Isu. In Assassin's Creed 3, it was used by the protagonist Connor to communicate with the Isu Juno. It is a powerful tool for those seeking to understand the First Civilization's history and their plans for humanity.",
            "image": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/07/assassin-s-creed-valhalla-eivor-holding-crystal-ball.jpg?q=49&fit=crop&w=825&dpr=2",
            "specs": ["Temporal Viewing", "Isu Communication", "Knowledge Transfer"],
            "icon": "Zap"
            },
            {
            "id": 8,
            "name": "Precursor Box",
            "type": "Box",
            "description": "A device that can store and siphon the power of other Pieces of Eden, capable of displaying holographic messages.",
            "fullDescription": "The Precursor Box is an enigmatic Isu artifact that functions as both a data storage device and a power source. It can siphon energy from other Pieces of Eden, and it is capable of displaying holographic messages from the Isu. It was a central object in Assassin's Creed Rogue and Assassin's Creed IV: Black Flag's 'Freedom Cry' DLC, where it was used to access the hidden knowledge of the Isu. It is a testament to the Isu's advanced technology and their ability to store immense amounts of information.",
            "image": "https://i.imgur.com/5VvEB56.jpg",
            "specs": ["Power Storage", "Holographic Projection", "Data Retrieval"],
            "icon": "Car"
            },
            {
            "id": 9,
            "name": "Ankh of Eden",
            "type": "Amulet",
            "description": "A symbol of life and immortality with the ability to heal and prolong a person's life.",
            "fullDescription": "The Ankh of Eden is an Isu artifact that holds the power of life and death. Similar to the Shroud, it possesses significant healing capabilities and can be used to extend a person's lifespan. Its powers are often associated with the Egyptian goddess Isis, and it's believed to be the basis for the mythological Ankh symbol. This piece is a testament to the Isu's advanced understanding of biology and consciousness, making it a valuable and dangerous artifact to possess.",
            "image": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/07/assassin-s-creed-ankh-from-comic.jpg?q=49&fit=crop&w=825&dpr=2",
            "specs": ["Life Extension", "Healing", "Revitalization"],
            "icon": "Heart"
            }
        ],


          groups: [
              {
            "id": 1,
            "name": "The Assassin Brotherhood",
            "type": "Secret Brotherhood",
            "description": "A clandestine organization dedicated to fighting the Templars and preserving free will, guided by their core tenets.",
            "fullDescription": "The Assassin Brotherhood is a centuries-old organization that believes in a world of peace achieved through free will. Their philosophy, known as 'The Creed,' guides their actions. They operate from the shadows, striking down those who would seek to control humanity. The Brotherhood has existed throughout history, with notable members including Altaïr Ibn-La'Ahad, Ezio Auditore da Firenze, and Ratonhnhaké:ton.",
            "image": "https://i.pinimg.com/originals/3e/7b/07/3e7b07579898826f622611e1f2412b4a.jpg",
            "specs": [ "Stealthy",
                        "Agile",
                        "Resilient",
                        "Resourceful",
                        "Loyal"],
            "game": "Assassin's Creed (Multiple)",
            "icon": "Users"
        },
        {
            "id": 2,
            "name": "The Templar Order",
            "type": "Military Order",
            "description": "An ancient organization that seeks to impose order and control on humanity, believing that peace can only be achieved through a lack of free will.",
            "fullDescription": "The Templar Order is the main antagonist force throughout the Assassin's Creed series. They believe that humanity is too chaotic to govern itself and that a new world order must be established through control. They are ruthless, cunning, and have infiltrated every major institution of power, from governments to religious organizations. Their leaders, such as Rodrigo Borgia and Haytham Kenway, are some of the most formidable foes the Assassins have faced.",
            "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f18d4e01-eb24-4b24-9afe-07bf46a17d5b/d85xgje-76c9a6e6-b78c-4350-b1c1-5b17d41d0c3e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9mMThkNGUwMS1lYjI0LTRiMjQtOWFmZS0wN2JmNDZhMTdkNWIvZDg1eGdqZS03NmM5YTZlNi1iNzhjLTQzNTAtYjFjMS01YjE3ZDQxZDBjM2UuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gisy1CZtMqqQ7jLJUmVSONaXB4Puyc_JzLMe09g4d9E",
            "specs": [ "Orderly",
                        "Strategic",
                        "Powerful",
                        "Disciplined",
                        "Ambitious"],
            "game": "Assassin's Creed (Multiple)",
            "icon": "Templar"
        },
        {
            "id": 3,
            "name": "The Crusaders",
            "type": "Religious Army",
            "description": "Catholic European knights who participated in the Crusades, fighting for control of the Holy Land.",
            "fullDescription": "The Crusaders were a powerful military force that arrived in the Holy Land during the Third Crusade. In Assassin's Creed, they are depicted as a zealous and often violent faction, with many Templars secretly operating within their ranks. The Assassins, led by Altaïr, often had to eliminate Templars hiding among the Crusader ranks to protect the innocent from their corrupt ambitions.",
            "image": "https://cdn11.bigcommerce.com/s-o5r3sdh7a5/images/stencil/1280x1280/products/1005/11872/cm-se058p2__22288.1641678491.jpg?c=1",
            "specs": [  "Zealous",
                        "Armored",
                        "Relentless",
                        "Devout",
                        "Disciplined"],
            "game": "Assassin's Creed (1)",
            "icon": "Sword"
        },
        {
            "id": 4,
            "name": "The Saracens",
            "type": "Military Faction",
            "description": "The local Arab forces who controlled the Holy Land and were in conflict with the Crusaders.",
            "fullDescription": "The Saracens were the Muslim forces who fought against the Crusaders during the Third Crusade. They were led by figures like Saladin, a revered and respected military leader. In the first Assassin's Creed, the Saracen guards and soldiers serve as the primary opposition to the Crusaders, and Altaïr must navigate their territories carefully to complete his missions.",
            "image": "https://i.pinimg.com/564x/ee/dc/2a/eedc2a1cdb2321c6c2998be541f8eb7a.jpg",
            "specs": [ "Valiant",
                        "Skilled",
                        "Resourceful",
                        "Resilient",
                        "Strategic"],
            "game": "Assassin's Creed (1)",
            "icon": "Crosshair"
        },
        {
            "id": 5,
            "name": "Mercenaries",
            "type": "Contract Soldiers",
            "description": "Fighters-for-hire who sell their services to the highest bidder, often serving the Templars or other wealthy patrons.",
            "fullDescription": "Mercenaries appear in several Assassin's Creed games, often as a neutral or antagonistic faction. They are not tied to a specific political or religious ideology but are motivated by money. In games like Assassin's Creed II and Brotherhood, Ezio could hire mercenary guilds to fight alongside him, turning the Templars' own tools against them.",
            "image": "https://www.creativeuncut.com/gallery-16/art/acb-mercenaries-fight.jpg",
            "specs": [ "Ruthless",
                        "Skilled",
                        "Greedy",
                        "Unpredictable",
                        "Tough"],
            "game": "Assassin's Creed (Multiple)",
            "icon": "Shield"
        },
        {
            "id": 6,
            "name": "The Papal Army",
            "type": "Religious-Military",
            "description": "The private army of the Borgia Pope, used to enforce their will and maintain control over Rome.",
            "fullDescription": "In Assassin's Creed Brotherhood, the Papal Army serves as the primary military force under the control of the Borgia family. They are well-equipped, disciplined, and loyal to the Pope, Rodrigo Borgia, who is secretly a high-ranking Templar. Ezio and the Assassins of Rome must dismantle their power by eliminating key targets and disrupting their operations across the city.",
            "image": "https://www.magikaverse.com/wp-content/uploads/2024/06/AssassinsCreedBrotherhood_render_Swiss_Guard.jpg",
            "specs": [  "Holy",
                        "Loyal",
                        "Disciplined",
                        "Commanded",
                        "Devoted"],
            "game": "Assassin's Creed: Brotherhood",
            "icon": "Crown"
        },
        {
            "id": 7,
            "name": "The Continental Army",
            "type": "Rebel Military",
            "description": "The unified force of the Thirteen Colonies during the American Revolution, fighting for independence from British rule.",
            "fullDescription": "The Continental Army, led by General George Washington, is a key faction in Assassin's Creed III. The protagonist, Ratonhnhaké:ton (Connor), allies with them in their fight against the British. The Assassins support the Patriots' cause, believing that their fight for freedom aligns with the Brotherhood's ideals of free will.",
            "image": "https://imgc.artprintimages.com/img/print/george-washington-taking-command-of-the-continental-army-american-revolution-july-1775_u-l-q1j4h3y0.jpg?artHeight=550&artPerspective=n&artWidth=550&background=fbfbfb",
            "specs": [  "Unified",
                        "Resistant",
                        "Organized",
                        "Determined",
                        "Resilient"],
            "game": "Assassin's Creed (3)",
            "icon": "Star"
        },
        {
            "id": 8,
            "name": "The British Army",
            "type": "Imperial Military",
            "description": "The disciplined and well-equipped forces of the British Empire, serving as the main antagonists in the American colonies.",
            "fullDescription": "The British Army is the primary military force of the British Empire, and its soldiers are a common sight in Assassin's Creed III and Assassin's Creed IV: Black Flag. In the American Revolution, they are the main opposition to the Continental Army, while in the Caribbean, they fight against pirates and rival colonial powers. They are known for their signature red coats and rigid fighting formations.",
            "image": "https://i.pinimg.com/originals/3e/ed/91/3eed9145bc7c672ce366a6c9bc256271.jpg",
            "specs": [  "Regal",
                        "Disciplined",
                        "Strategic",
                        "Resilient",
                        "Powerful"],
            "game": "Assassin's Creed (3), Black Flag",
            "icon": "ShieldCheck"
        },
        {
            "id": 9,
            "name": "Pirates",
            "type": "Lawless Collective",
            "description": "A group of opportunistic and rebellious seamen who operate outside the law, seeking wealth and freedom in the Caribbean.",
            "fullDescription": "Pirates are the dominant faction in Assassin's Creed IV: Black Flag. Led by historical figures like Edward Kenway and Blackbeard, they form a collective of misfits who seek to live free from the oppressive rule of colonial empires. The Golden Age of Piracy serves as a backdrop for Edward Kenway's journey, as he finds himself caught between the Assassins and Templars.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Capture-of-Blackbeard.jpg",
            "specs": [  "Reckless",
                        "Cunning",
                        "Bold",
                        "Unpredictable",
                        "Savvy"],
            "game": "Assassin's Creed: Black Flag",
            "icon": "Skull"
        },
        {
            "id": 10,
            "name": "The Spanish Army",
            "type": "Colonial Military",
            "description": "The imperial forces of the Spanish Empire, who maintain control over their territories in the Caribbean and Central America.",
            "fullDescription": "The Spanish Army is a major rival to both the British and the pirates in Assassin's Creed IV: Black Flag. They are often tasked with guarding valuable artifacts and treasure, making them a frequent target for Edward Kenway. Their navy is a formidable opponent, and their soldiers are well-trained and loyal to the Spanish Crown.",
            "image": "https://img1.wsimg.com/isteam/ip/9c73235b-179b-4b3b-9073-ef5ed3d1b639/440px-Landing_of_Columbus_(2).jpg/:/",
            "specs": [ "Proud",
                        "Stalwart",
                        "Disciplined",
                        "Historic",
                        "Valiant"],
            "game": "Assassin's Creed: Black Flag",
            "icon": "Target"
        },
        {
            "id": 11,
            "name": "The Isu",
            "type": "First Civilization",
            "description": "A technologically advanced, pre-human civilization that created humanity and the Pieces of Eden.",
            "fullDescription": "The Isu, also known as the First Civilization, were a highly advanced humanoid species that lived on Earth long before humanity. They created humanity as a servitor race and used powerful artifacts known as Pieces of Eden to control them. The Isu were wiped out by a cataclysmic solar flare, but their legacy lives on through their temples and artifacts, which the Assassins and Templars constantly fight over.",
            "image": "https://www.accesstheanimus.com/GIN/29.png",
            "specs": [  "Advanced",
                        "Mysterious",
                        "Intelligent",
                        "Immortal",
                        "Innovative"],
            "game": "Assassin's Creed (Multiple)",
            "icon": "Zap"
        },
        {
            "id": 12,
            "name": "The French Army",
            "type": "Nationalist Military",
            "description": "The armed forces of France, fighting during the tumultuous French Revolution.",
            "fullDescription": "In Assassin's Creed Unity, the French Army and its various factions are a constant presence. The protagonist, Arno Dorian, must navigate the chaos of the French Revolution, fighting alongside revolutionary figures and against the royalist forces. The army's loyalty is divided, with some fighting for the new Republic and others for the old monarchy, making them a complex and unpredictable faction.",
            "image": "https://i0.wp.com/militaryhistorynow.com/wp-content/uploads/2015/11/Napoleon_returned.jpg?resize=650%2C471&ssl=1",
            "specs": [  "Gallant",
                        "Strategic",
                        "Resilient",
                        "Unified",
                        "Historic"],
            "game": "Assassin's Creed: Unity",
            "icon": "Users"
        },
        {
            "id": 13,
            "name": "The Roman Empire",
            "type": "Ancient Empire",
            "description": "The formidable military power that controlled much of Europe and the Mediterranean in ancient times.",
            "fullDescription": "The Roman Empire is a central force in Assassin's Creed Origins and Assassin's Creed Valhalla. In Origins, the Roman occupation of Egypt is a source of conflict, as the people struggle under their oppressive rule. In Valhalla, the remnants of the Roman Empire are seen in the ruins and artifacts left behind, which Eivor can explore to uncover hidden secrets and stories of the First Civilization.",
            "image": "https://kingtravelromania.com/wp-content/uploads/the-aquilifer-of-the-roman-army.jpg",
            "specs": [ "Imperial",
                        "Organized",
                        "Expansive",
                        "Powerful",
                        "Enduring"],
            "game": "Assassin's Creed: Origins, Valhalla",
            "icon": "Crown"
        },
        {
            "id": 14,
            "name": "Ottoman Army",
            "type": "Imperial Military",
            "description": "The vast and disciplined military forces of the Ottoman Empire, who controlled a significant portion of the world in the 16th century.",
            "fullDescription": "The Ottoman Army is the formidable military force of the Ottoman Empire, the primary faction ruling Constantinople in Assassin's Creed: Revelations. Their presence is felt throughout the city as they maintain control and suppress any resistance. While the Janissaries are their most elite and well-known units, the army as a whole presents a significant threat to Ezio and the Assassins as they navigate the city and work to counter the Templar influence.",
            "image": "https://pbs.twimg.com/media/Eeo87WhUMAEAfOw.png",
            "specs": [  "Formidable",
                        "Disciplined",
                        "Historic",
                        "Strategic",
                        "Resilient"],
            "game": "Assassin's Creed: Revelations",
            "icon": "ShieldCheck"
        },
        {
            "id": 15,
            "name": "The Byzantines",
            "type": "Imperial Faction",
            "description": "The remnants of the Eastern Roman Empire, who are in a state of political turmoil and conflict in Constantinople.",
            "fullDescription": "The Byzantines appear in Assassin's Creed Revelations as a rival faction to the Ottoman Empire. They are the descendants of the Eastern Roman Empire and still hold a significant presence in Constantinople, even though the city is now under Ottoman control. The Byzantines are in a state of civil war and are manipulated by the Templars to destabilize the region.",
            "image": "https://www.shutterstock.com/image-photo/byzantine-army-flag-invasion-600nw-2459510139.jpg",
            "specs": [ "Sophisticated",
                        "Resilient",
                        "Historic",
                        "Strategic",
                        "Enduring"],
            "game": "Assassin's Creed: Revelations",
            "icon": "Crown"
        },
        {
                    "id": 16,
                    "name": "Abstergo Industries",
                    "type": "Corporation",
                    "description": "A multinational corporate conglomerate serving as the modern-day front for the Templar Order.",
                    "fullDescription": "Abstergo Industries is a powerful and secretive corporation in the Assassin's Creed universe. It operates as the public face of the Templar Order, using advanced technology and global influence to further the Templars' goals of control and order. Abstergo is responsible for the development of the Animus device, which allows users to relive genetic memories.",
                    "image": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/01/Assassins-Creed-vidic-Cropped-1.v1.jpg?q=50&fit=crop&w=825&dpr=1.5",
                    "specs": [
                        "Corporate",
                        "Innovative",
                        "Secretive",
                        "Influential",
                        "Technological"
                    ],
                    "game": "Assassin's Creed Series",
                    "icon": "Building"
        } 
        ]
    }
    
  };