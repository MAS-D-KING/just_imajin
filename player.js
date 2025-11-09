// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Video Player Data - All anime from HTML file
const animeData = {
    'solo-leveling': {
        title: 'Solo Leveling',
        poster: 'img/Solo.jpg',
        description: 'Once the world\'s weakest hunter, Sung Jin-Woo is reborn through blood, death, and mystery into something more—something terrifying. In a world where gates unleash monsters, he doesn\'t just survive them… he levels up. Each dungeon is a gamble—but with each kill, he inches closer to a power no one can stop.',
        rating: '⭐ 9.6/10',
        genre: 'Action, Fantasy',
        year: '2024',
        status: 'Ongoing',
        totalEpisodes: 12,
        episodeDuration: '24m',
        studio: 'A-1 Pictures',
        episodes: [
            { number: 1, title: 'I\'m Used to It', duration: '23:45', quality: 'HD', sources: [{ src: 'img/feature.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'If I Had One More Chance', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 3, title: 'It\'s Like a Game', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 4, title: 'I\'ve Gotta Get Stronger', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 5, title: 'A Pretty Good Deal', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 6, title: 'The Real Hunt Begins', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 7, title: 'Let\'s See How Far I Can Go', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 8, title: 'This Is Fustrating', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 9, title: 'You\'ve Been Hididng Your Skills', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 10, title: 'What Is This, A Picnic?', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 11, title: 'A Knight Who Defends An Empty Throne', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 12, title: 'Arise', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'kaiju-no8': {
        title: 'Kaiju No. 8',
        poster: 'img/kaiju.jpg',
        description: 'Kafka Hibino cleans up kaiju corpses—until one fuses with him. Now half-human, half-monster, he\'s humanity\'s last hope… and biggest threat. Packed with explosive fights, military squads, and emotional stakes, Kaiju No. 8 is a beast of modern shonen greatness.',
        rating: '⭐ 8.8/10',
        genre: 'Action, Fantasy',
        year: '2024',
        status: 'Ongoing',
        totalEpisodes: 12,
        episodeDuration: '24m',
        studio: 'Production I.G',
        episodes: [
            { number: 1, title: 'The Man Who Became A Kaiju', duration: '24:00', quality: 'HD', sources: [{ src: 'img/feature.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'The Kaiju Who Defeats Kaiju', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 3, title: 'Revenge Match', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 4, title: 'Fortitude 9.8', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 5, title: 'Joining Up', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 6, title: 'Sagamihara Neutralization Operation at Daybreak', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 7, title: 'Kaiju No.9', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 8, title: 'Welcome To The Defense Force', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 9, title: 'Raid on Tachikawa Base', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 10, title: 'Secret Revealed', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 11, title: 'Kaiju No.8 Captured', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] },
            { number: 12, title: 'Kafka Hibino', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'my-hero-academia': {
        title: 'My Hero Academia',
        poster: 'img/mha.jpg',
        description: 'In a world where powers—Quirks—are the norm, Izuku Midoriya is born powerless. But when fate grants him the greatest Quirk of all, he must rise from zero to symbol. With heroism, heartbreak, and epic battles, MHA asks: What does it mean to truly be a hero?',
        rating: '⭐ 8.6/10',
        genre: 'Action, Heroism',
        year: '2016',
        status: 'Ongoing',
        totalEpisodes: 138,
        episodeDuration: '24m',
        studio: 'Bones',
        episodes: [
            { number: 1, title: 'Izuku Midoriya: Origin', duration: '23:50', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'What It Takes to Be a Hero', duration: '24:05', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'fan-letter': {
        title: 'Fan Letter',
        poster: 'img/fan letter.jpg',
        description: 'In a world where powers—Quirks—are the norm, Izuku Midoriya is born powerless. But when fate grants him the greatest Quirk of all, he must rise from zero to symbol. With heroism, heartbreak, and epic battles, MHA asks: What does it mean to truly be a hero?',
        rating: '⭐ 8.6/10',
        genre: 'Action, Heroism',
        year: '2016',
        status: 'Ongoing',
        totalEpisodes: 138,
        episodeDuration: '24m',
        studio: 'Bones',
        episodes: [
            { number: 1, title: 'Izuku Midoriya: Origin', duration: '23:50', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'What It Takes to Be a Hero', duration: '24:05', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'fire-force': {
        title: 'Fire Force',
        poster: 'img/ff.jpg',
        description: 'Spontaneous human combustion turns people into flaming demons—and only the Fire Force can stop them. Shinra Kusakabe, with his devil\'s grin and foot-fired fury, races into the inferno. Stylish, fast, and infernally cool—this is firefighting at its most supernatural.',
        rating: '⭐ 9.2/10',
        genre: 'Action, Shounen',
        year: '2019',
        status: 'Completed',
        totalEpisodes: 48,
        episodeDuration: '24m',
        studio: 'David Production',
        episodes: [
            { number: 1, title: 'Shinra Kusakabe Enlists', duration: '23:40', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'The Heart of a Fire Soldier', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'dan-da-dan': {
        title: 'Dan Da Dan',
        poster: 'img/ddd.jpg',
        description: 'Psychics, aliens, curses, and one absurdly chaotic love story collide in Dandadan. When a nerd and a spiritual girl go ghost-hunting, they unleash a barrage of bizarre threats. Expect the unexpected—because this supernatural comedy doesn\'t hold back.',
        rating: '⭐ 9.0/10',
        genre: 'Action, Fantasy',
        year: '2024',
        status: 'Ongoing',
        totalEpisodes: 12,
        episodeDuration: '24m',
        studio: 'Science SARU',
        episodes: [
            { number: 1, title: 'That\'s How Love Starts, Ya Know!', duration: '24:20', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'That\'s a Space Alien, Ain\'t It?!', duration: '23:55', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'gachiakuta': {
        title: 'Gachiakuta',
        poster: 'img/gach.jpg',
        description: 'Thrown into a pit of filth for a crime he didn\'t commit, Rudo finds power in the trash. He awakens an ability to weaponize hatred through discarded objects, and in this junkyard hell, he will use his rage to climb back up and take revenge on the world that discarded him.',
        rating: '⭐ 9.0/10',
        genre: 'Action, Fantasy',
        year: '2024',
        status: 'Ongoing',
        totalEpisodes: 12,
        episodeDuration: '24m',
        studio: 'Bones',
        episodes: [
            { number: 1, title: 'The Trash Pit', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Weaponized Hatred', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'wind-breaker': {
        title: 'Wind Breaker',
        poster: 'img/wind.jpg',
        description: 'Haruka Sakura believes strength is everything. He enrolls at Furin High, a school of brawlers, to prove he\'s the strongest. But he discovers these delinquents are the town\'s protectors, and he must learn that true power isn\'t standing alone, but fighting for others.',
        rating: '⭐ 9.0/10',
        genre: 'Action, Fantasy',
        year: '2024',
        status: 'Ongoing',
        totalEpisodes: 13,
        episodeDuration: '24m',
        studio: 'CloverWorks',
        episodes: [
            { number: 1, title: 'Arrival at Furin High', duration: '23:45', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'The Town\'s Protectors', duration: '24:05', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'one-piece': {
        title: 'One Piece',
        poster: 'img/One Piece.jpg',
        description: 'A legendary tale of pirates seeking the ultimate treasure. With wild adventures, heartfelt bonds, and grand battles, it sails across the seas of dreams and danger nonstop.',
        rating: '⭐ 10/10',
        genre: 'Shounen',
        year: '1999',
        status: 'Ongoing',
        totalEpisodes: 1000,
        episodeDuration: '24m',
        studio: 'Toei Animation',
        episodes: [
            { number: 1, title: 'I\'m Luffy! The Man Who\'s Gonna Be King of the Pirates!', duration: '24:30', quality: 'HD', sources: [{ src: 'img/feature.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Enter the Great Swordsman!', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'naruto': {
        title: 'Naruto/Naruto Shippuden',
        poster: 'img/naruto.jpg',
        description: 'A boy born with a beast fights for recognition and peace. Through pain and friendship, he rises to become the hope of a world torn by war and hate.',
        rating: '⭐ 9.9/10',
        genre: 'Shounen',
        year: '2002',
        status: 'Completed',
        totalEpisodes: 720,
        episodeDuration: '23m',
        studio: 'Pierrot',
        episodes: [
            { number: 1, title: 'Enter: Naruto Uzumaki!', duration: '23:40', quality: 'HD', sources: [{ src: '', type: 'video/mp4' }] },
            { number: 2, title: 'My Name is Konohamaru!', duration: '23:45', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'bleach': {
        title: 'Bleach',
        poster: 'img/bleach.jpg',
        description: 'A teen becomes a Soul Reaper and battles ghosts and gods. In a world between life and death, loyalty, fate, and power clash with explosive intensity.',
        rating: '⭐ 9.6/10',
        genre: 'Shounen',
        year: '2004',
        status: 'Ongoing',
        totalEpisodes: 366,
        episodeDuration: '24m',
        studio: 'Pierrot',
        episodes: [
            { number: 1, title: 'The Day I Became a Shinigami', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'A Shinigami\'s Work', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'dragon-ball': {
        title: 'Dragon Ball Franchise',
        poster: 'img/Dragon ball.jpg',
        description: 'Martial arts, aliens, and gods collide as Goku seeks strength. Earth\'s mightiest heroes defend the universe in epic duels that defy logic and gravity.',
        rating: '⭐ 9.7/10',
        genre: 'Shounen',
        year: '1996',
        status: 'Ongoing',
        totalEpisodes: 600,
        episodeDuration: '24m',
        studio: 'Toei Animation',
        episodes: [
            { number: 1, title: 'The Secret of the Dragon Balls', duration: '24:20', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'The Emperor\'s Quest', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'demon-slayer': {
        title: 'Kimetsu No Yaiba',
        poster: 'img/kimetsu.jpg',
        description: 'A brother fights demons to save his sister\'s soul. In a world of swords and blood, he rises through despair, flames, and moonlit battles against evil.',
        rating: '⭐ 9.6/10',
        genre: 'Action, Fantasy',
        year: '2019',
        status: 'Ongoing',
        totalEpisodes: 55,
        episodeDuration: '24m',
        studio: 'ufotable',
        episodes: [
            { number: 1, title: 'Cruelty', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Trainer Sakonji Urokodaki', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'jujutsu-kaisen': {
        title: 'Jujutsu Kaisen',
        poster: 'img/jjk.jpg',
        description: 'Cursed spirits lurk in shadows as students master deadly arts. With chaos and courage, they fight to break the cycle of fear, fate, and corruption.',
        rating: '⭐ 9.6/10',
        genre: 'Action',
        year: '2020',
        status: 'Ongoing',
        totalEpisodes: 47,
        episodeDuration: '24m',
        studio: 'MAPPA',
        episodes: [
            { number: 1, title: 'Ryomen Sukuna', duration: '23:50', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'For Myself', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'attack-on-titan': {
        title: 'Attack On Titan',
        poster: 'img/aot.jpg',
        description: 'Walls fall, secrets rise. In a broken world overrun by giants, humanity\'s last soldiers uncover horrifying truths while waging a desperate final stand.',
        rating: '⭐ 9.9/10',
        genre: 'Action',
        year: '2013',
        status: 'Completed',
        totalEpisodes: 87,
        episodeDuration: '24m',
        studio: 'Wit Studio/MAPPA',
        episodes: [
            { number: 1, title: 'To You, in 2000 Years', duration: '24:30', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'That Day', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'hunter-x-hunter': {
        title: 'Hunter X Hunter',
        poster: 'img/hxh.jpg',
        description: 'A boy hunts for his father and faces twisted trials. In a world where danger smiles and morals blur, his journey becomes one of growth and grit.',
        rating: '⭐ 9.4/10',
        genre: 'Shounen',
        year: '2011',
        status: 'Completed',
        totalEpisodes: 148,
        episodeDuration: '24m',
        studio: 'Madhouse',
        episodes: [
            { number: 1, title: 'Departure × And × Friends', duration: '23:40', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Test × Of × Tests', duration: '23:50', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'black-clover': {
        title: 'Black Clover',
        poster: 'img/blackclover.jpg',
        description: 'Asta dreams of magic with no magic at all. Rivals, wizards, and war await as he climbs with sheer willpower toward a destiny forged in flame and steel.',
        rating: '⭐ 9.0/10',
        genre: 'Action, Fantasy',
        year: '2017',
        status: 'Completed',
        totalEpisodes: 170,
        episodeDuration: '24m',
        studio: 'Pierrot',
        episodes: [
            { number: 1, title: 'Asta and Yuno', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'The Magic Knights Entrance Exam', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'pokemon': {
        title: 'Pokémon',
        poster: 'img/pokemon.jpg',
        description: 'A ten-year-old leaves home with a dream and a Pikachu—and the world changes forever. From iconic Gym Battles to friendships forged in fire, Pokémon is more than nostalgia—it\'s a saga of growth, teamwork, and chasing greatness across ever-expanding horizons.',
        rating: '⭐ 8.5/10',
        genre: 'Action, Fantasy',
        year: '1997',
        status: 'Ongoing',
        totalEpisodes: 1200,
        episodeDuration: '22m',
        studio: 'OLM',
        episodes: [
            { number: 1, title: 'Pokémon - I Choose You!', duration: '22:30', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Pokémon Emergency!', duration: '22:25', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'cowboy-bebop': {
        title: 'Cowboy Bebop',
        poster: 'img/cow.jpg',
        description: 'Bounty hunters. Broken pasts. A saxophone playing in the void of space. Cowboy Bebop is a genre-defying masterpiece where every episode is a mood, every character is haunted, and the future feels heartbreakingly human. See you, space cowboy.',
        rating: '⭐ 8.8/10',
        genre: 'Action, Fantasy',
        year: '1998',
        status: 'Completed',
        totalEpisodes: 26,
        episodeDuration: '24m',
        studio: 'Sunrise',
        episodes: [
            { number: 1, title: 'Asteroid Blues', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Stray Dog Strut', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'beyblade-burst': {
        title: 'Beyblade Burst',
        poster: 'img/bey.jpg',
        description: 'Spinning tops become avatars of passion, spirit, and pure explosive energy! With legendary clashes and high-octane tournaments, the Bladers of this generation battle not just for victory—but to etch their names into the storm of legends. Let it rip!',
        rating: '⭐ 9.9/10',
        genre: 'Action, Fantasy',
        year: '2016',
        status: 'Completed',
        totalEpisodes: 51,
        episodeDuration: '23m',
        studio: 'OLM',
        episodes: [
            { number: 1, title: 'Let\'s Go! Valtryek!!', duration: '23:30', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Let\'s Fight! Beyblade Club!!', duration: '23:25', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'rurouni-kenshin': {
        title: 'Rurouni Kenshin',
        poster: 'img/ruro.jpg',
        description: 'He was once the most feared assassin of the Meiji era—the Battōsai. Now, Kenshin Himura roams Japan with a vow to never kill again. But ghosts from his bloody past won\'t rest easy… A samurai tale of redemption, love, and blade-to-blade showdowns with a heart as sharp as its steel.',
        rating: '⭐ 9.9/10',
        genre: 'Action, Fantasy',
        year: '1996',
        status: 'Completed',
        totalEpisodes: 94,
        episodeDuration: '24m',
        studio: 'Gallop/Studio Deen',
        episodes: [
            { number: 1, title: 'The Handsome Swordsman of Legend', duration: '24:20', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Kid Samurai', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'yu-yu-hakusho': {
        title: 'Yu Yu Hakusho',
        poster: 'img/yuy.jpg',
        description: 'A delinquent dies saving a kid—and earns a second shot at life… as a Spirit Detective. With demons, tournaments, and a rough-edged heart, this classic balances dark stakes and iconic friendships in pure 90s shonen glory.',
        rating: '⭐ 9.9/10',
        genre: 'Action, Fantasy',
        year: '1992',
        status: 'Completed',
        totalEpisodes: 112,
        episodeDuration: '24m',
        studio: 'Pierrot',
        episodes: [
            { number: 1, title: 'Surprised to be Dead', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Koenma Appears', duration: '24:05', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'saint-seiya': {
        title: 'Saint Seiya - Knights of the Zodiac',
        poster: 'img/saint.jpg',
        description: 'When gods rise, warriors rise higher. Clad in shining armor of constellations, the Saints defend Athena against mythic threats that could shatter the cosmos. An eternal battle of destiny, cosmos, and sacrifice, where every punch breaks limits—and stars.',
        rating: '⭐ 9.9/10',
        genre: 'Action, Fantasy',
        year: '1986',
        status: 'Completed',
        totalEpisodes: 114,
        episodeDuration: '24m',
        studio: 'Toei Animation',
        episodes: [
            { number: 1, title: 'The Saints of Athena', duration: '24:30', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Burn! Pegasus Meteor Fist', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'ninja-scroll': {
        title: 'Ninja Scroll',
        poster: 'img/ninja.jpg',
        description: 'Blood, blades, and betrayal. Ninja Scroll is a feudal fever dream where demonic assassins, dark sorcery, and lone warriors collide in a deadly dance. Gritty, raw, and legendary—this is one of the anime that shaped the path of all that followed.',
        rating: '⭐ 9.9/10',
        genre: 'Action, Fantasy',
        year: '1993',
        status: 'Completed',
        totalEpisodes: 1,
        episodeDuration: '94m',
        studio: 'Madhouse',
        episodes: [
            { number: 1, title: 'Ninja Scroll (Movie)', duration: '94:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] }
        ]
    },
    'rezero': {
        title: 'Re:Zero – Starting Life in Another World',
        poster: 'img/re.jpg',
        description: 'Transported to a fantasy world with no powers and no clue why, Subaru Natsuki discovers one terrifying gift: he can come back to life every time he dies—painfully. But with every reset, the cost to his mind, soul, and heart grows heavier.',
        rating: '⭐ 9.9/10',
        genre: 'Isekai, Fantasy',
        year: '2016',
        status: 'Ongoing',
        totalEpisodes: 50,
        episodeDuration: '25m',
        studio: 'White Fox',
        episodes: [
            { number: 1, title: 'The End of the Beginning and the Beginning of the End', duration: '49:30', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Reunion with the Witch', duration: '25:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'slime': {
        title: 'That Time I Got Reincarnated as a Slime',
        poster: 'img/slime.jpg',
        description: 'After a dying wish, Satoru Mikami is reborn in a fantasy world as a weak slime. But he possesses a unique power: to devour anything and acquire its skills. This unassuming blob begins an incredible journey, befriending monsters and building a nation that defies all fate.',
        rating: '⭐ 9.9/10',
        genre: 'Isekai, Fantasy',
        year: '2018',
        status: 'Ongoing',
        totalEpisodes: 48,
        episodeDuration: '24m',
        studio: '8bit',
        episodes: [
            { number: 1, title: 'The Storm Dragon, Veldora', duration: '23:45', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Meeting the Goblins', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'sword-art-online': {
        title: 'Sword Art Online',
        poster: 'img/sao.jpg',
        description: 'Trapped in a deadly virtual world, Kirito must clear 100 floors to escape. But in this game, death is permanent. He doesn\'t just play to win—he fights to survive, leveling up through treacherous dungeons and deadly battles to see the real world again.',
        rating: '⭐ 9.9/10',
        genre: 'Action, Isekai',
        year: '2012',
        status: 'Ongoing',
        totalEpisodes: 96,
        episodeDuration: '24m',
        studio: 'A-1 Pictures',
        episodes: [
            { number: 1, title: 'The World of Swords', duration: '24:40', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Beater', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'overlord': {
        title: 'Overlord',
        poster: 'img/over.jpg',
        description: 'When his favorite game shuts down, player Momonga is trapped in the body of his skeletal overlord avatar. His NPC servants are now alive, viewing him as their supreme ruler. To survive, he must embrace his role and conquer this new world, one terrified subject at a time.',
        rating: '⭐ 9.9/10',
        genre: 'Dark Fantasy, Isekai',
        year: '2015',
        status: 'Ongoing',
        totalEpisodes: 52,
        episodeDuration: '24m',
        studio: 'Madhouse',
        episodes: [
            { number: 1, title: 'The End and the Beginning', duration: '24:30', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Floor Guardians', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'grimgar': {
        title: 'Grimgar Of Fantasy & Ash',
        poster: 'img/grim.jpg',
        description: 'A group awakens in a fantasy world with no memory and no power. They are not heroes. They must earn every coin and suffer every loss together. In this brutally realistic world, they don\'t level up—they are worn down by grief and forged in the fight to survive.',
        rating: '⭐ 9.9/10',
        genre: 'Fantasy, Drama',
        year: '2016',
        status: 'Completed',
        totalEpisodes: 12,
        episodeDuration: '24m',
        studio: 'A-1 Pictures',
        episodes: [
            { number: 1, title: 'Whisper, Chant, Prayer, Awaken', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Seeing is Believing', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'erased': {
        title: 'Erased',
        poster: 'img/erased.jpg',
        description: 'Satoru Fujinuma is sent back 18 years to his childhood. He now has a chance to prevent the tragic kidnappings that haunted his past. To save the future, he must save a lonely classmate, unraveling a killer\'s identity before time runs out.',
        rating: '⭐ 9.9/10',
        genre: 'Mystery, Drama',
        year: '2016',
        status: 'Completed',
        totalEpisodes: 12,
        episodeDuration: '23m',
        studio: 'A-1 Pictures',
        episodes: [
            { number: 1, title: 'Flashing Before My Eyes', duration: '23:40', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Palm of the Hand', duration: '23:30', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'realist-hero': {
        title: 'The Realist Hero',
        poster: 'img/real.jpg',
        description: 'Summoned as a "hero," Souya Kazuya isn\'t given a sword—he\'s given the crown to a bankrupt kingdom. He forgoes slaying monsters to wield economic reform and political strategy, rebuilding a failing nation from the ground up with cold, hard logic.',
        rating: '⭐ 9.9/10',
        genre: 'Isekai, Strategy',
        year: '2021',
        status: 'Ongoing',
        totalEpisodes: 26,
        episodeDuration: '24m',
        studio: 'J.C.Staff',
        episodes: [
            { number: 1, title: 'The Realistic Kingdom', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'If You Possess an Aptitude, We\'ll Make Use of It', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'your-name': {
        title: 'Your Name',
        poster: 'img/name.jpg',
        description: 'Mitsuha and Taki are two strangers connected by a bizarre phenomenon: they randomly swap bodies. Through this chaotic connection, a bond forms. But they are separated by more than distance, and must race against time to prevent an impending disaster.',
        rating: '⭐ 9.9/10',
        genre: 'Romance, Drama',
        year: '2016',
        status: 'Completed',
        totalEpisodes: 1,
        episodeDuration: '106m',
        studio: 'CoMix Wave Films',
        episodes: [
            { number: 1, title: 'Your Name (Movie)', duration: '106:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] }
        ]
    },
    'horimiya': {
        title: 'Horimiya',
        poster: 'img/hori.jpg',
        description: 'On the surface, Kyouko Hori is a popular, perfect high school girl. Izumi Miyamura is a quiet, glasses-wearing loner. But their after-school selves are a secret: Hori is a homebody, and Miyamura is a gentle punk covered in tattoos and piercings. When they discover each other\'s hidden lives, an unlikely bond forms, revealing that everyone is more than they appear.',
        rating: '⭐ 9.9/10',
        genre: 'Romance, Slice of Life',
        year: '2021',
        status: 'Completed',
        totalEpisodes: 13,
        episodeDuration: '24m',
        studio: 'CloverWorks',
        episodes: [
            { number: 1, title: 'A Tiny Happenstance', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'You Wear More Than One Face', duration: '24:05', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'fruits-basket': {
        title: 'Fruits Basket',
        poster: 'img/fruit.jpg',
        description: 'After a family tragedy, orphan Tohru Honda ends up living in a tent—on the land of the mysterious Sohma family. She soon uncovers their ancient curse: certain members transform into animals of the Chinese zodiac when hugged by the opposite sex. In a house of secrets and sorrow, her kindness becomes the key to breaking their generational spell.',
        rating: '⭐ 9.9/10',
        genre: 'Romance, Drama',
        year: '2019',
        status: 'Completed',
        totalEpisodes: 63,
        episodeDuration: '24m',
        studio: 'TMS Entertainment',
        episodes: [
            { number: 1, title: 'See You When the Snow Thaws', duration: '24:30', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Looks Like I Have to Get Along With Everyone', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'your-lie-in-april': {
        title: 'Your Lie in April',
        poster: 'img/your.jpg',
        description: 'Piano prodigy Kousei Arima hasn\'t played a note since the death of his mother. His world is monochrome and silent, until he meets the spirited violinist Kaori Miyazono. Dragged back into the world of music by her free-spirited playing, he must confront his past to find the strength to perform again, and add color to his world.',
        rating: '⭐ 9.9/10',
        genre: 'Romance, Drama',
        year: '2014',
        status: 'Completed',
        totalEpisodes: 22,
        episodeDuration: '23m',
        studio: 'A-1 Pictures',
        episodes: [
            { number: 1, title: 'Monotone/Colorful', duration: '23:40', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Friend A', duration: '23:50', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'kaguya-sama': {
        title: 'Kaguya-sama: Love is War',
        poster: 'img/kagu.jpg',
        description: 'Two elite student council geniuses are perfect for each other. Too proud to confess, they see love as a war. They scheme, manipulate, and lay elaborate traps to make the other admit their feelings first, in a hilarious battle of romantic wills.',
        rating: '⭐ 9.9/10',
        genre: 'Romance, Comedy',
        year: '2019',
        status: 'Completed',
        totalEpisodes: 37,
        episodeDuration: '24m',
        studio: 'A-1 Pictures',
        episodes: [
            { number: 1, title: 'I Will Make You Confess', duration: '24:10', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'I Can\'t Hear the Fireworks', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'dress-up-darling': {
        title: 'My Dress-Up Darling',
        poster: 'img/dress.jpg',
        description: 'Wakana Gojo, a shy doll-maker, meets Marin Kitagawa, a radiant cosplayer. When she discovers his sewing skill, she pulls him into her vibrant world. Together, they pour their passion into crafting perfect costumes, stitching together an unlikely connection.',
        rating: '⭐ 9.9/10',
        genre: 'Romance, Comedy',
        year: '2022',
        status: 'Completed',
        totalEpisodes: 12,
        episodeDuration: '24m',
        studio: 'CloverWorks',
        episodes: [
            { number: 1, title: 'Someone Who Lives in the Exact Opposite World as Me', duration: '24:20', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Wanna Hurry Up, and Do It?', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    'lost-in-starlight': {
        title: 'Lost in Starlight',
        poster: 'img/lost.jpg',
        description: 'Ambitious paparazzo Saya targets the world\'s hottest boy band. But when she gets too close, she uncovers their deadly secret: they are vampires. Now, she\'s torn between exposing the truth and her growing attraction to their enigmatic, brooding leader.',
        rating: '⭐ 9.9/10',
        genre: 'Romance, Sci-Fi',
        year: '2024',
        status: 'Ongoing',
        totalEpisodes: 12,
        episodeDuration: '24m',
        studio: 'Original',
        episodes: [
            { number: 1, title: 'The Secret Unveiled', duration: '24:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] },
            { number: 2, title: 'Blood and Stardom', duration: '24:15', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }] }
        ]
    },
    // Movies
    'spirited-away': {
        title: 'Spirited Away',
        poster: 'img/away.jpg',
        description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
        rating: '⭐ 9.0/10',
        genre: 'Adventure, Fantasy',
        year: '2001',
        status: 'Completed',
        totalEpisodes: 1,
        episodeDuration: '125m',
        studio: 'Studio Ghibli',
        episodes: [
            { number: 1, title: 'Spirited Away (Full Movie)', duration: '125:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] }
        ]
    },
    'your-name': {
        title: 'Your Name',
        poster: 'img/name.jpg',
        description: 'Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.',
        rating: '⭐ 9.0/10',
        genre: 'Romance, Drama',
        year: '2016',
        status: 'Completed',
        totalEpisodes: 1,
        episodeDuration: '106m',
        studio: 'CoMix Wave Films',
        episodes: [
            { number: 1, title: 'Your Name (Full Movie)', duration: '106:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] }
        ]
    },
    'one-piece-film-red': {
        title: 'One Piece Film: Red',
        poster: 'img/red.jpg',
        description: 'The Straw Hat Pirates attend a concert by the famous singer Uta, only to discover her mysterious connection to Shanks.',
        rating: '⭐ 9.2/10',
        genre: 'Action, Adventure',
        year: '2022',
        status: 'Completed',
        totalEpisodes: 1,
        episodeDuration: '115m',
        studio: 'Toei Animation',
        episodes: [
            { number: 1, title: 'One Piece Film: Red (Full Movie)', duration: '115:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] }
        ]
    },
    'spirited-away': {
        title: 'Spirited Away',
        poster: 'img/away.jpg',
        description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
        rating: '⭐ 9.0/10',
        status: 'completed',
        totalEpisodes: 1,
        episodeDuration: '115m',
        studio: 'Gibili',
        episodes: [
            { number: 1, title: 'One Piece Film: Red (Full Movie)', duration: '115:00', quality: 'HD', sources: [{ src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }] }
        ]
    }
};

// Anime categorized by genre for smart recommendations
const animeByGenre = {
    action: [
        { id: 'solo-leveling', title: 'Solo Leveling', poster: 'img/Solo.jpg', rating: '9.6/10', episodeCount: 12 },
        { id: 'kaiju-no8', title: 'Kaiju No. 8', poster: 'img/kaiju.jpg', rating: '8.8/10', episodeCount: 12 },
        { id: 'my-hero-academia', title: 'My Hero Academia', poster: 'img/mha.jpg', rating: '8.6/10', episodeCount: 138 },
        { id: 'fire-force', title: 'Fire Force', poster: 'img/ff.jpg', rating: '9.2/10', episodeCount: 48 },
        { id: 'dan-da-dan', title: 'Dan Da Dan', poster: 'img/ddd.jpg', rating: '9.0/10', episodeCount: 12 },
        { id: 'gachiakuta', title: 'Gachiakuta', poster: 'img/gach.jpg', rating: '9.0/10', episodeCount: 12 },
        { id: 'wind-breaker', title: 'Wind Breaker', poster: 'img/wind.jpg', rating: '9.0/10', episodeCount: 13 },
        { id: 'demon-slayer', title: 'Kimetsu No Yaiba', poster: 'img/kimetsu.jpg', rating: '9.6/10', episodeCount: 55 },
        { id: 'jujutsu-kaisen', title: 'Jujutsu Kaisen', poster: 'img/jjk.jpg', rating: '9.6/10', episodeCount: 47 },
        { id: 'attack-on-titan', title: 'Attack On Titan', poster: 'img/aot.jpg', rating: '9.9/10', episodeCount: 87 },
        { id: 'black-clover', title: 'Black Clover', poster: 'img/blackclover.jpg', rating: '9.0/10', episodeCount: 170 },
        { id: 'cowboy-bebop', title: 'Cowboy Bebop', poster: 'img/cow.jpg', rating: '8.8/10', episodeCount: 26 },
        { id: 'sword-art-online', title: 'Sword Art Online', poster: 'img/sao.jpg', rating: '9.9/10', episodeCount: 96 }
    ],
    shounen: [
        { id: 'one-piece', title: 'One Piece', poster: 'img/One Piece.jpg', rating: '10/10', episodeCount: 1000 },
        { id: 'naruto', title: 'Naruto/Naruto Shippuden', poster: 'img/naruto.jpg', rating: '9.9/10', episodeCount: 720 },
        { id: 'bleach', title: 'Bleach', poster: 'img/bleach.jpg', rating: '9.6/10', episodeCount: 366 },
        { id: 'dragon-ball', title: 'Dragon Ball Franchise', poster: 'img/Dragon ball.jpg', rating: '9.7/10', episodeCount: 600 },
        { id: 'hunter-x-hunter', title: 'Hunter X Hunter', poster: 'img/hxh.jpg', rating: '9.4/10', episodeCount: 148 },
        { id: 'fire-force', title: 'Fire Force', poster: 'img/ff.jpg', rating: '9.2/10', episodeCount: 48 },
        { id: 'my-hero-academia', title: 'My Hero Academia', poster: 'img/mha.jpg', rating: '8.6/10', episodeCount: 138 },
        { id: 'fan-letter', title: 'Fan Letter', poster: 'img/fan letter.jpg', rating: '9.9/10', episodeCount: 1 }
    ],
    classics: [
        { id: 'pokemon', title: 'Pokémon', poster: 'img/pokemon.jpg', rating: '8.5/10', episodeCount: 1200 },
        { id: 'cowboy-bebop', title: 'Cowboy Bebop', poster: 'img/cow.jpg', rating: '8.8/10', episodeCount: 26 },
        { id: 'beyblade-burst', title: 'Beyblade Burst', poster: 'img/bey.jpg', rating: '9.9/10', episodeCount: 51 },
        { id: 'rurouni-kenshin', title: 'Rurouni Kenshin', poster: 'img/ruro.jpg', rating: '9.9/10', episodeCount: 94 },
        { id: 'yu-yu-hakusho', title: 'Yu Yu Hakusho', poster: 'img/yuy.jpg', rating: '9.9/10', episodeCount: 112 },
        { id: 'saint-seiya', title: 'Saint Seiya', poster: 'img/saint.jpg', rating: '9.9/10', episodeCount: 114 },
        { id: 'ninja-scroll', title: 'Ninja Scroll', poster: 'img/ninja.jpg', rating: '9.9/10', episodeCount: 1 }
    ],
    isekai: [
        { id: 'rezero', title: 'Re:Zero', poster: 'img/re.jpg', rating: '9.9/10', episodeCount: 50 },
        { id: 'slime', title: 'That Time I Got Reincarnated as a Slime', poster: 'img/slime.jpg', rating: '9.9/10', episodeCount: 48 },
        { id: 'sword-art-online', title: 'Sword Art Online', poster: 'img/sao.jpg', rating: '9.9/10', episodeCount: 96 },
        { id: 'overlord', title: 'Overlord', poster: 'img/over.jpg', rating: '9.9/10', episodeCount: 52 },
        { id: 'grimgar', title: 'Grimgar Of Fantasy & Ash', poster: 'img/grim.jpg', rating: '9.9/10', episodeCount: 12 },
        { id: 'realist-hero', title: 'The Realist Hero', poster: 'img/real.jpg', rating: '9.9/10', episodeCount: 26 }
    ],
    romance: [
        { id: 'your-name', title: 'Your Name', poster: 'img/name.jpg', rating: '9.9/10', episodeCount: 1 },
        { id: 'horimiya', title: 'Horimiya', poster: 'img/hori.jpg', rating: '9.9/10', episodeCount: 13 },
        { id: 'fruits-basket', title: 'Fruits Basket', poster: 'img/fruit.jpg', rating: '9.9/10', episodeCount: 63 },
        { id: 'your-lie-in-april', title: 'Your Lie in April', poster: 'img/your.jpg', rating: '9.9/10', episodeCount: 22 },
        { id: 'kaguya-sama', title: 'Kaguya-sama: Love is War', poster: 'img/kagu.jpg', rating: '9.9/10', episodeCount: 37 },
        { id: 'dress-up-darling', title: 'My Dress-Up Darling', poster: 'img/dress.jpg', rating: '9.9/10', episodeCount: 12 },
        { id: 'lost-in-starlight', title: 'Lost in Starlight', poster: 'img/lost.jpg', rating: '9.9/10', episodeCount: 12 }
    ],
    mystery: [
        { id: 'erased', title: 'Erased', poster: 'img/erased.jpg', rating: '9.9/10', episodeCount: 12 },
        { id: 'attack-on-titan', title: 'Attack On Titan', poster: 'img/aot.jpg', rating: '9.9/10', episodeCount: 87 },
        { id: 'rezero', title: 'Re:Zero', poster: 'img/re.jpg', rating: '9.9/10', episodeCount: 50 }
    ]
};

// Function to get related anime based on current anime's genre
function getRelatedAnime(currentAnimeId) {
    const currentAnime = animeData[currentAnimeId];
    if (!currentAnime) return [];

    // Determine genre category based on anime genre
    let genreCategory = 'action'; // default
    const genre = currentAnime.genre.toLowerCase();

    if (genre.includes('romance') || genre.includes('slice of life')) {
        genreCategory = 'romance';
    } else if (genre.includes('isekai')) {
        genreCategory = 'isekai';
    } else if (genre.includes('shounen')) {
        genreCategory = 'shounen';
    } else if (genre.includes('mystery') || genre.includes('drama')) {
        genreCategory = 'mystery';
    } else if (currentAnimeId === 'pokemon' || currentAnimeId === 'cowboy-bebop' || 
               currentAnimeId === 'beyblade-burst' || currentAnimeId === 'rurouni-kenshin' ||
               currentAnimeId === 'yu-yu-hakusho' || currentAnimeId === 'saint-seiya' || 
               currentAnimeId === 'ninja-scroll') {
        genreCategory = 'classics';
    }

    // Get anime from the same genre, excluding the current one
    let related = animeByGenre[genreCategory].filter(anime => anime.id !== currentAnimeId);
    
    // Limit to 5 recommendations
    return related.slice(0, 5);
}

// Current state
let currentAnime = null;
let currentEpisodeIndex = 0;

// Get anime ID from URL parameters
function getAnimeIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('anime') || 'solo-leveling';
}

// Load Anime Data
function loadAnimeData(animeId) {
    const anime = animeData[animeId];
    if (!anime) {
        console.error('Anime not found:', animeId);
        return;
    }

    currentAnime = anime;
    currentEpisodeIndex = 0;

    // Update page title
    document.title = `Watch ${anime.title} - JustImajin`;

    // Update anime details
    document.getElementById('animeTitle').textContent = anime.title;
    document.getElementById('animePoster').src = anime.poster;
    document.getElementById('animeDescription').textContent = anime.description;
    document.getElementById('animeRating').textContent = anime.rating;
    document.getElementById('animeGenre').textContent = anime.genre;
    document.getElementById('animeYear').textContent = anime.year;
    document.getElementById('animeStatus').textContent = anime.status;
    document.getElementById('totalEpisodes').textContent = anime.totalEpisodes;
    document.getElementById('episodeDuration').textContent = anime.episodeDuration;
    document.getElementById('animeStudio').textContent = anime.studio;

    // Load episodes
    loadEpisodes(anime.episodes);

    // Load first episode by default
    if (anime.episodes.length > 0) {
        loadEpisode(anime.episodes[0], 0);
    }

    // Load related anime
    loadRelatedAnime();
}

// Load Episodes List
function loadEpisodes(episodes) {
    const episodeList = document.getElementById('episodeList');
    episodeList.innerHTML = '';

    episodes.forEach((episode, index) => {
        const episodeBtn = document.createElement('button');
        episodeBtn.className = 'episode-btn';
        episodeBtn.textContent = episode.number;
        episodeBtn.title = episode.title;
        
        if (index === 0) {
            episodeBtn.classList.add('active');
        }

        episodeBtn.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.episode-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            // Add active class to clicked button
            episodeBtn.classList.add('active');
            // Load the episode
            currentEpisodeIndex = index;
            loadEpisode(episode, index);
        });

        episodeList.appendChild(episodeBtn);
    });
}

// Load Episode Video
function loadEpisode(episode, index) {
    const video = document.getElementById('mainVideo');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const videoTitle = document.getElementById('videoTitle');
    const episodeInfo = document.getElementById('episodeInfo');
    const videoQuality = document.getElementById('videoQuality');
    const episodeDescription = document.getElementById('episodeDescription'); // Add this line

    currentEpisodeIndex = index;

    // In loadEpisode function, add:
const episodeDetailTitle = document.getElementById('episodeDetailTitle');
if (episodeDetailTitle) {
    episodeDetailTitle.textContent = `Episode ${episode.number}: ${episode.title}`;
}

    // Show loading spinner
    loadingSpinner.classList.add('show');

    // Update episode info
    videoTitle.textContent = `Episode ${episode.number}: ${episode.title}`;
    episodeInfo.textContent = `Episode ${episode.number} • ${episode.duration}`;
    videoQuality.textContent = episode.quality;
    
    // Update episode description - Add these lines
    if (episodeDescription) {
        episodeDescription.textContent = episode.description || 'No description available for this episode.';
    }

    // Clear existing sources
    while (video.firstChild) {
        video.removeChild(video.firstChild);
    }

    // Add new sources
    episode.sources.forEach(source => {
        const sourceElement = document.createElement('source');
        sourceElement.src = source.src;
        sourceElement.type = source.type;
        video.appendChild(sourceElement);
    });

    // Load the new video
    video.load();

    // Hide loading spinner when video can play
    video.addEventListener('canplay', () => {
        loadingSpinner.classList.remove('show');
    });

    // Handle video errors
    video.addEventListener('error', () => {
        loadingSpinner.classList.remove('show');
        alert('Error loading video. Please try another episode or check your connection.');
    });
}
// Load Related Anime
function loadRelatedAnime() {
    const relatedContainer = document.getElementById('relatedAnime');
    relatedContainer.innerHTML = '';

    // Get smart recommendations based on current anime's genre
    const relatedAnime = getRelatedAnime(getAnimeIdFromURL());

    relatedAnime.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'related-anime-card';
        animeCard.innerHTML = `
            <img src="${anime.poster}" alt="${anime.title}" class="related-poster">
            <div class="related-info">
                <div class="related-title">${anime.title}</div>
                <div class="related-meta">
                    <span>${anime.rating}</span>
                    <span>${anime.episodeCount} EP</span>
                </div>
            </div>
        `;

        animeCard.addEventListener('click', () => {
            window.location.href = `player.html?anime=${anime.id}`;
        });

        relatedContainer.appendChild(animeCard);
    });
}

// Video Player Controls
function setupVideoControls() {
    const video = document.getElementById('mainVideo');
    
    // Next Episode Button
    const nextEpisodeBtn = document.getElementById('nextEpisodeBtn');
    if (nextEpisodeBtn) {
        nextEpisodeBtn.addEventListener('click', () => {
            if (currentAnime && currentEpisodeIndex < currentAnime.episodes.length - 1) {
                currentEpisodeIndex++;
                const nextEpisode = currentAnime.episodes[currentEpisodeIndex];
                
                // Update active episode button
                const episodeBtns = document.querySelectorAll('.episode-btn');
                episodeBtns.forEach((btn, idx) => {
                    btn.classList.toggle('active', idx === currentEpisodeIndex);
                });
                
                loadEpisode(nextEpisode, currentEpisodeIndex);
            } else {
                alert('You\'re watching the last episode!');
            }
        });
    }

    // Forward 10 seconds
    const forwardBtn = document.getElementById('forwardBtn');
    if (forwardBtn) {
        forwardBtn.addEventListener('click', () => {
            video.currentTime = Math.min(video.currentTime + 10, video.duration);
        });
    }

    // Backward 10 seconds
    const backwardBtn = document.getElementById('backwardBtn');
    if (backwardBtn) {
        backwardBtn.addEventListener('click', () => {
            video.currentTime = Math.max(video.currentTime - 10, 0);
        });
    }

    // Volume Control
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeIcon = document.getElementById('volumeIcon');
    
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const volume = e.target.value / 100;
            video.volume = volume;
            
            // Update volume icon
            if (volumeIcon) {
                if (volume === 0) {
                    volumeIcon.className = 'fas fa-volume-mute';
                } else if (volume < 0.5) {
                    volumeIcon.className = 'fas fa-volume-down';
                } else {
                    volumeIcon.className = 'fas fa-volume-up';
                }
            }
        });
    }

    // Volume button toggle mute
    const volumeBtn = document.getElementById('volumeBtn');
    if (volumeBtn) {
        volumeBtn.addEventListener('click', () => {
            if (video.volume > 0) {
                video.volume = 0;
                if (volumeSlider) volumeSlider.value = 0;
                if (volumeIcon) volumeIcon.className = 'fas fa-volume-mute';
            } else {
                video.volume = 0.5;
                if (volumeSlider) volumeSlider.value = 50;
                if (volumeIcon) volumeIcon.className = 'fas fa-volume-up';
            }
        });
    }

    // Quality/Resolution selector
    const qualityBtn = document.getElementById('qualityBtn');
    if (qualityBtn) {
        qualityBtn.addEventListener('click', () => {
            const options = ['Auto', '1080p', '720p', '480p', '360p'];
            const currentQuality = qualityBtn.textContent;
            const currentIndex = options.indexOf(currentQuality);
            const nextIndex = (currentIndex + 1) % options.length;
            qualityBtn.textContent = options[nextIndex];
            
            // In a real implementation, you would switch video sources here
            console.log('Quality changed to:', options[nextIndex]);
        });
    }

    // Auto-play next episode when current ends
    video.addEventListener('ended', () => {
        if (currentAnime && currentEpisodeIndex < currentAnime.episodes.length - 1) {
            setTimeout(() => {
                currentEpisodeIndex++;
                const nextEpisode = currentAnime.episodes[currentEpisodeIndex];
                
                // Update active episode button
                const episodeBtns = document.querySelectorAll('.episode-btn');
                episodeBtns.forEach((btn, idx) => {
                    btn.classList.toggle('active', idx === currentEpisodeIndex);
                });
                
                loadEpisode(nextEpisode, currentEpisodeIndex);
            }, 2000); // 2 second delay before auto-playing next episode
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    const animeId = getAnimeIdFromURL();
    
    // Check if we're on the player page
    if (animeId && document.getElementById('mainVideo')) {
        loadAnimeData(animeId);
        setupVideoControls();
    }
    
    // Add click handlers to all Watch buttons (for main page and any dynamic content)
    setupWatchButtons();
});

// Setup watch buttons functionality
function setupWatchButtons() {
    document.querySelectorAll('.btn-primary').forEach(button => {
        // Skip if already has onclick attribute
        if (button.hasAttribute('onclick')) {
            return;
        }
        
        const card = button.closest('.card');
        if (card) {
            button.addEventListener('click', () => {
                const titleElement = card.querySelector('.movie-title');
                if (titleElement) {
                    const title = titleElement.textContent.trim();
                    const animeId = getAnimeIdFromTitle(title);
                    if (animeId) {
                        watchAnime(animeId);
                    }
                }
            });
        }
    });
}

// Helper function to convert title to anime ID
function getAnimeIdFromTitle(title) {
    const titleMap = {
        'Solo Leveling': 'solo-leveling',
        'Kaiju No. 8': 'kaiju-no8',
        'My Hero Academia': 'my-hero-academia',
        'Fire Force': 'fire-force',
        'Dan Da Dan': 'dan-da-dan',
        'Gachiakuta': 'gachiakuta',
        'Wind Breaker': 'wind-breaker',
        'One Piece': 'one-piece',
        'Naruto/Naruto Shipuden': 'naruto',
        'Bleach': 'bleach',
        'Dragon ball Franchise': 'dragon-ball',
        'Kimetsu No Yaiba': 'demon-slayer',
        'Jujutsu Kaisen (TV)': 'jujutsu-kaisen',
        'Attack On Titan': 'attack-on-titan',
        'Hunter X Hunter': 'hunter-x-hunter',
        'Black Clover': 'black-clover',
        'Pokemon': 'pokemon',
        'Pokémon': 'pokemon',
        'Cowboy Bebop': 'cowboy-bebop',
        'Beyblade Burst': 'beyblade-burst',
        'Rurouni Kenshin': 'rurouni-kenshin',
        'Yu Yu Hakusho': 'yu-yu-hakusho',
        'Saint Seiya - Knights of the Zodiac': 'saint-seiya',
        'Ninja Scroll': 'ninja-scroll',
        'Re:Zero – Starting Life in Another World': 'rezero',
        'That Time I Got Reincarnated as a Slime': 'slime',
        'Sword Art Online': 'sword-art-online',
        'Overlord': 'overlord',
        'Grimgar Of Fantasy & Ash': 'grimgar',
        'Erased': 'erased',
        'The Realist Hero': 'realist-hero',
        'Your Name': 'your-name',
        'Horimiya': 'horimiya',
        'Fruits Basket': 'fruits-basket',
        'Your Lie in April': 'your-lie-in-april',
        'Kaguya-sama: Love is War': 'kaguya-sama',
        'My Dress-Up Darling': 'dress-up-darling',
        'Lost in Starlight': 'lost-in-starlight'
    };
    return titleMap[title] || null;
}

// Function to navigate to player page
function watchAnime(animeId) {
    window.location.href = `player.html?anime=${animeId}`;
}