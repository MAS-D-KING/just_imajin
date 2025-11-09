// Content Filtering and Search System
class ContentFilter {
    constructor() {
        this.content = [];
        this.filteredContent = [];
        this.filters = {
            type: 'all',
            genre: 'all',
            search: '',
            sort: 'popular'
        };
        this.init();
    }

    init() {
        this.loadContentData();
        this.setupEventListeners();
        this.applyFilters();
    }

    // Load sample content data
    loadContentData() {
        this.content = 
    [
    {
        id: 'attack-on-titan',
        title: 'Attack on Titan',
        type: 'series',
        genres: ['action', 'drama', 'fantasy', 'mystery'],
        rating: 9.2,
        year: 2013,
        episodes: 88,
        poster: 'img/last.jpg',
        description: 'In a world where humanity lives inside cities surrounded by enormous walls that protect them from gigantic man-eating humanoids referred to as Titans, the story follows Eren Yeager and his friends.',
        isNew: false
    },
    {
        id: 'demon-slayer',
        title: 'Demon Slayer: Kimetsu no Yaiba',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 8.9,
        year: 2019,
        episodes: 55,
        poster: 'img/kimetsu.jpg',
        description: 'After his family is slaughtered and his sister turned into a demon, Tanjiro Kamado becomes a demon slayer to find a cure and avenge his family.',
        isNew: true
    },
    {
        id: 'jujutsu-kaisen',
        title: 'Jujutsu Kaisen',
        type: 'series',
        genres: ['action', 'fantasy', 'supernatural'],
        rating: 8.8,
        year: 2020,
        episodes: 47,
        poster: 'img/jjk.jpg',
        description: 'A boy eats a cursed finger to save his friends, becoming the host of a powerful curse and joining a secret organization of Jujutsu Sorcerers.',
        isNew: true
    },
    {
        id: 'chainsaw-man',
        title: 'Chainsaw Man',
        type: 'series',
        genres: ['action', 'fantasy', 'horror'],
        rating: 8.7,
        year: 2022,
        episodes: 12,
        poster: 'img/chainsaw.jpg',
        description: 'A poor young man who gains the ability to transform parts of his body into chainsaws joins a government agency to hunt devils.',
        isNew: true
    },
    {
        id: 'spy-x-family',
        title: 'Spy x Family',
        type: 'series',
        genres: ['action', 'comedy', 'slice-of-life'],
        rating: 8.7,
        year: 2022,
        episodes: 37,
        poster: 'img/sxp.jpg',
        description: 'A spy must build a fake family to complete his mission, unaware that his "daughter" is a telepath and his "wife" is an assassin.',
        isNew: true
    },
    {
        id: 'my-hero-academia',
        title: 'My Hero Academia',
        type: 'series',
        genres: ['action', 'comedy', 'superhero'],
        rating: 8.5,
        year: 2016,
        episodes: 138,
        poster: 'img/mha.jpg',
        description: 'In a world where most people have superpowers, a powerless boy dreams of becoming a hero and gets the chance when the world\'s greatest hero shares his power.',
        isNew: true
    },
    {
        id: 'one-punch-man',
        title: 'One Punch Man',
        type: 'series',
        genres: ['action', 'comedy', 'superhero'],
        rating: 8.7,
        year: 2015,
        episodes: 24,
        poster: 'img/opm.jpg',
        description: 'The story of Saitama, a hero who can defeat any opponent with a single punch but seeks to find a worthy foe after growing bored by a lack of challenge.',
        isNew: true
    },
    {
        id: 'mob-psycho-100',
        title: 'Mob Psycho 100',
        type: 'series',
        genres: ['action', 'comedy', 'supernatural'],
        rating: 8.8,
        year: 2016,
        episodes: 37,
        poster: 'img/mob.jpg',
        description: 'A powerful esper who works as a freelance exorcist tries to live a normal life and not rely on his powers.',
        isNew: true
    },
    {
        id: 'vinland-saga',
        title: 'Vinland Saga',
        type: 'series',
        genres: ['action', 'adventure', 'historical'],
        rating: 8.8,
        year: 2019,
        episodes: 48,
        poster: 'img/vinland.jpg',
        description: 'A young Viking boy swears vengeance against the man who killed his father, embarking on a journey through the brutal world of medieval warfare.',
        isNew: true
    },
    {
        id: 'hells-paradise',
        title: 'Hell\'s Paradise',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 8.3,
        year: 2023,
        episodes: 13,
        poster: 'img/hells.jpg',
        description: 'A ninja on death row is offered a pardon if he can retrieve the elixir of life from a mysterious island where not everything is as it seems.',
        isNew: true
    },
    {
        id: 'mushoku-tensei',
        title: 'Mushoku Tensei: Jobless Reincarnation',
        type: 'series',
        genres: ['drama', 'fantasy', 'isekai'],
        rating: 8.8,
        year: 2021,
        episodes: 38,
        poster: 'img/tensei.jpg',
        description: 'A 34-year-old NEET gets a second chance at life when he\'s reincarnated in a fantasy world with all his memories intact.',
        isNew: true
    },
    {
        id: 're-zero',
        title: 'Re:ZERO -Starting Life in Another World-',
        type: 'series',
        genres: ['drama', 'fantasy', 'isekai', 'psychological'],
        rating: 8.5,
        year: 2016,
        episodes: 50,
        poster: 'img/re.jpg',
        description: 'A boy is transported to a fantasy world where he gains the ability to return from death, but must suffer through painful loops to save those he cares about.',
        isNew: true
    },
    {
        id: 'konosuba',
        title: 'KonoSuba: God\'s Blessing on This Wonderful World!',
        type: 'series',
        genres: ['adventure', 'comedy', 'fantasy', 'isekai'],
        rating: 8.3,
        year: 2016,
        episodes: 20,
        poster: 'img/gods.jpg',
        description: 'After a laughable death, Kazuma Sato is sent to a fantasy world with a useless goddess, forming a dysfunctional party to survive.',
        isNew: true
    },
    {
        id: 'overlord',
        title: 'Overlord',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy', 'isekai'],
        rating: 8.1,
        year: 2015,
        episodes: 52,
        poster: 'img/over.jpg',
        description: 'A player gets trapped in a VRMMORPG as his powerful lich character and decides to conquer this new world.',
        isNew: true
    },
    {
        id: 'that-time-i-got-reincarnated-as-a-slime',
        title: 'That Time I Got Reincarnated as a Slime',
        type: 'series',
        genres: ['action', 'comedy', 'fantasy', 'isekai'],
        rating: 8.3,
        year: 2018,
        episodes: 60,
        poster: 'img/slime.jpg',
        description: 'A man is killed and reincarnated as a powerful slime in a fantasy world, building a nation for monsters.',
        isNew: true
    },
    {
        id: 'the-rising-of-the-shield-hero',
        title: 'The Rising of the Shield Hero',
        type: 'series',
        genres: ['action', 'adventure', 'drama', 'isekai'],
        rating: 8.1,
        year: 2019,
        episodes: 50,
        poster: 'img/shield.jpg',
        description: 'Summoned to another world to become one of four Cardinal Heroes, Naofumi is betrayed and must rise from rock bottom to save the world.',
        isNew: true
    },
    {
        id: 'frieren-beyond-journeys-end',
        title: 'Frieren: Beyond Journey\'s End',
        type: 'series',
        genres: ['adventure', 'drama', 'fantasy'],
        rating: 9.1,
        year: 2023,
        episodes: 28,
        poster: 'img/frieren.jpg',
        description: 'An elf mage who defeated the Demon King embarks on a journey to understand humanity after outliving her human companions.',
        isNew: true
    },
    {
        id: 'heavenly-delusion',
        title: 'Heavenly Delusion',
        type: 'series',
        genres: ['mystery', 'sci-fi', 'adventure'],
        rating: 8.5,
        year: 2023,
        episodes: 13,
        poster: 'img/heavens.jpg',
        description: 'In a post-apocalyptic Japan, two teenagers travel across dangerous wastelands searching for paradise.',
        isNew: true
    },
    {
        id: 'oshi-no-ko',
        title: 'Oshi no Ko',
        type: 'series',
        genres: ['drama', 'mystery', 'supernatural'],
        rating: 8.8,
        year: 2023,
        episodes: 11,
        poster: 'img/oshinoko.jpg',
        description: 'A doctor and his patient are reincarnated as the children of a famous idol, uncovering the dark truths of the entertainment industry.',
        isNew: true
    },
    {
        id: 'bleach-tybw',
        title: 'Bleach: Thousand-Year Blood War',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 9.0,
        year: 2022,
        episodes: 52,
        poster: 'img/bleach.jpg',
        description: 'The final arc of Bleach sees Ichigo and the Soul Society facing their greatest threat yet - the Wandenreich Quincy army.',
        isNew: true
    },
    {
        id: 'fullmetal-alchemist-brotherhood',
        title: 'Fullmetal Alchemist: Brotherhood',
        type: 'series',
        genres: ['action', 'adventure', 'drama', 'fantasy'],
        rating: 9.3,
        year: 2009,
        episodes: 64,
        poster: 'img/full.jpg',
        description: 'Two brothers use alchemy in their quest to find the Philosopher\'s Stone and restore their bodies after a failed attempt to resurrect their mother.',
        isNew: false
    },
    {
        id: 'death-note',
        title: 'Death Note',
        type: 'series',
        genres: ['mystery', 'psychological', 'supernatural'],
        rating: 9.0,
        year: 2006,
        episodes: 37,
        poster: 'img/deathnote.jpg',
        description: 'A high school student discovers a notebook that allows him to kill anyone whose name he writes in it, leading to a psychological battle with the world\'s greatest detective.',
        isNew: false
    },
    {
        id: 'code-geass',
        title: 'Code Geass: Lelouch of the Rebellion',
        type: 'series',
        genres: ['action', 'drama', 'mecha', 'psychological'],
        rating: 8.8,
        year: 2006,
        episodes: 50,
        poster: 'img/codegeas.jpg',
        description: 'An exiled prince gains the power to command anyone to obey him and uses it to overthrow the tyrannical empire that rules over Japan.',
        isNew: false
    },
    {
        id: 'steins-gate',
        title: 'Steins;Gate',
        type: 'series',
        genres: ['drama', 'sci-fi', 'thriller'],
        rating: 9.1,
        year: 2011,
        episodes: 24,
        poster: 'img/steins.jpg',
        description: 'A group of friends accidentally invent a time machine and must deal with the devastating consequences of altering the past.',
        isNew: false
    },
    {
        id: 'cowboy-bebop',
        title: 'Cowboy Bebop',
        type: 'series',
        genres: ['action', 'adventure', 'sci-fi'],
        rating: 8.9,
        year: 1998,
        episodes: 26,
        poster: 'img/cowboy.jpg',
        description: 'The adventures of a group of bounty hunters traveling on the spaceship Bebop in the year 2071.',
        isNew: false
    },
    {
        id: 'hunter-x-hunter',
        title: 'Hunter x Hunter',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 9.1,
        year: 2011,
        episodes: 148,
        poster: 'img/hxh.jpg',
        description: 'A young boy embarks on a journey to become a Hunter and find his father, encountering friends and formidable foes along the way.',
        isNew: false
    },
    {
        id: 'one-piece',
        title: 'One Piece',
        type: 'series',
        genres: ['action', 'adventure', 'comedy', 'fantasy'],
        rating: 9.0,
        year: 1999,
        episodes: 1100,
        poster: 'img/piecer.jpg',
        description: 'Monkey D. Luffy and his pirate crew explore the Grand Line in search of the world\'s ultimate treasure to become the next Pirate King.',
        isNew: false
    },
    {
        id: 'naruto-shippuden',
        title: 'Naruto: Shippuden',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 8.7,
        year: 2007,
        episodes: 500,
        poster: 'img/naruts.jpg',
        description: 'Naruto Uzumaki continues his journey to become the strongest ninja and bring peace to the shinobi world.',
        isNew: false
    },
    {
        id: 'bleach',
        title: 'Bleach',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 8.2,
        year: 2004,
        episodes: 366,
        poster: 'img/bleacch.jpg',
        description: 'A teenager with the ability to see ghosts becomes a Soul Reaper, defending humans from evil spirits and guiding departed souls to the afterlife.',
        isNew: false
    },
    {
        id: 'dragon-ball-z',
        title: 'Dragon Ball Z',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 8.5,
        year: 1989,
        episodes: 291,
        poster: 'img/Dragon ball.jpg',
        description: 'The adventures of Goku and his friends as they defend Earth from extraterrestrial enemies and powerful androids.',
        isNew: false
    },
    {
        id: 'evangelion',
        title: 'Neon Genesis Evangelion',
        type: 'series',
        genres: ['action', 'drama', 'mecha', 'psychological'],
        rating: 8.5,
        year: 1995,
        episodes: 26,
        poster: 'img/evangelion.jpg',
        description: 'Teenagers pilot giant mechs to protect Earth from mysterious beings called Angels, while dealing with deep psychological trauma.',
        isNew: false
    },
    {
        id: 'berserk',
        title: 'Berserk',
        type: 'series',
        genres: ['action', 'adventure', 'drama', 'fantasy'],
        rating: 8.7,
        year: 1997,
        episodes: 25,
        poster: 'img/beserk.jpg',
        description: 'The story of Guts, a lone mercenary, and his journey through a dark medieval world filled with demons and political intrigue.',
        isNew: false
    },
    {
        id: 'monster',
        title: 'Monster',
        type: 'series',
        genres: ['drama', 'mystery', 'psychological', 'thriller'],
        rating: 8.8,
        year: 2004,
        episodes: 74,
        poster: 'img/monster.jpg',
        description: 'A brilliant neurosurgeon pursues a former patient who has become a ruthless serial killer across Germany.',
        isNew: false
    },
    {
        id: 'legend-of-the-galactic-heroes',
        title: 'Legend of the Galactic Heroes',
        type: 'series',
        genres: ['drama', 'military', 'sci-fi'],
        rating: 9.1,
        year: 1988,
        episodes: 110,
        poster: 'img/galactic.jpg',
        description: 'An epic space opera following two brilliant military strategists on opposite sides of an interstellar war.',
        isNew: false
    },
    {
        id: 'clannad-after-story',
        title: 'Clannad: After Story',
        type: 'series',
        genres: ['drama', 'romance', 'slice-of-life'],
        rating: 9.1,
        year: 2008,
        episodes: 24,
        poster: 'img/clanned.jpg',
        description: 'The continuation of Tomoya and Nagisa\'s story as they face the challenges of adulthood, marriage, and family.',
        isNew: false
    },
    {
        id: 'gintama',
        title: 'Gintama',
        type: 'series',
        genres: ['action', 'comedy', 'sci-fi'],
        rating: 9.0,
        year: 2006,
        episodes: 367,
        poster: 'img/Gintama.jpg',
        description: 'In an alternate Edo period where aliens have taken over, a samurai does odd jobs to make ends meet in this comedy series with serious arcs.',
        isNew: false
    },
    {
        id: 'haikyuu',
        title: 'Haikyuu!!',
        type: 'series',
        genres: ['comedy', 'drama', 'sports'],
        rating: 8.7,
        year: 2014,
        episodes: 85,
        poster: 'img/haikyu.jpg',
        description: 'A short boy joins his high school volleyball team and works with his teammates to become national champions.',
        isNew: false
    },
    {
        id: 'your-lie-in-april',
        title: 'Your Lie in April',
        type: 'series',
        genres: ['drama', 'music', 'romance'],
        rating: 8.7,
        year: 2014,
        episodes: 22,
        poster: 'img/your.jpg',
        description: 'A piano prodigy who can no longer hear his own playing meets a violinist who helps him rediscover his love for music.',
        isNew: false
    },
    {
        id: 'violet-evergarden',
        title: 'Violet Evergarden',
        type: 'series',
        genres: ['drama', 'fantasy', 'slice-of-life'],
        rating: 8.7,
        year: 2018,
        episodes: 13,
        poster: 'img/violet.jpg',
        description: 'A former child soldier becomes an Auto Memory Doll, writing letters for others while searching for the meaning of her commander\'s final words.',
        isNew: true
    },
    {
        id: 'made-in-abyss',
        title: 'Made in Abyss',
        type: 'series',
        genres: ['adventure', 'drama', 'fantasy', 'sci-fi'],
        rating: 8.8,
        year: 2017,
        episodes: 21,
        poster: 'img/abyys.jpg',
        description: 'A young girl and a robot descend into a massive, mysterious abyss that holds ancient relics and terrible dangers.',
        isNew: true
    },
    {
        id: 'houseki-no-kuni',
        title: 'Land of the Lustrous',
        type: 'series',
        genres: ['action', 'drama', 'fantasy'],
        rating: 8.4,
        year: 2017,
        episodes: 12,
        poster: 'img/lustrous.jpg',
        description: 'In a world where gemstone-based life forms fight moon dwellers, a young gem seeks to find her purpose and protect her home.',
        isNew: true
    },
    {
        id: 'the-promised-neverland',
        title: 'The Promised Neverland',
        type: 'series',
        genres: ['mystery', 'psychological', 'sci-fi'],
        rating: 8.7,
        year: 2019,
        episodes: 23,
        poster: 'img/neverland.jpg',
        description: 'Children living in an orphanage discover the horrifying truth about their existence and plan an escape.',
        isNew: true
    },
    {
        id: 'dr-stone',
        title: 'Dr. Stone',
        type: 'series',
        genres: ['adventure', 'comedy', 'sci-fi'],
        rating: 8.3,
        year: 2019,
        episodes: 47,
        poster: 'img/dr stone.jpg',
        description: 'Thousands of years after humanity is turned to stone, a scientific genius awakens and works to rebuild civilization.',
        isNew: true
    },
    {
        id: 'kaguya-sama-love-is-war',
        title: 'Kaguya-sama: Love Is War',
        type: 'series',
        genres: ['comedy', 'psychological', 'romance'],
        rating: 8.7,
        year: 2019,
        episodes: 37,
        poster: 'img/kaguna.jpg',
        description: 'Two prideful student council members scheme to make the other confess their love first in this psychological romantic comedy.',
        isNew: true
    },
    {
        id: 'to-your-eternity',
        title: 'To Your Eternity',
        type: 'series',
        genres: ['adventure', 'drama', 'fantasy'],
        rating: 8.4,
        year: 2021,
        episodes: 40,
        poster: 'img/eternity.jpg',
        description: 'An immortal being travels through a fantasy world, taking on various forms and experiencing the pain and beauty of life.',
        isNew: true
    },
    { 
        id: '86-eighty-six',
        title: '86 EIGHTY-SIX',
        type: 'series',
        genres: ['action', 'drama', 'mecha', 'military'],
        rating: 8.7,
        year: 2021,
        episodes: 23,
        poster: 'img/86.jpg',
        description: 'In a war against autonomous drones, a commander leads a squadron of "86" - young soldiers discriminated against by their own nation.',
        isNew: true
    },
    {
        id: 'vivy-fluorite-eyes-song',
        title: 'Vivy: Fluorite Eye\'s Song',
        type: 'series',
        genres: ['action', 'drama', 'sci-fi'],
        rating: 8.5,
        year: 2021,
        episodes: 13,
        poster: 'img/vivy.jpg',
        description: 'An AI songstress is tasked with a 100-year mission to prevent a war between AI and humanity.',
        isNew: true
    },
    {
        id: 'odd-taxi',
        title: 'Odd Taxi',
        type: 'series',
        genres: ['mystery', 'drama', 'comedy'],
        rating: 8.7,
        year: 2021,
        episodes: 13,
        poster: 'img/oddtaxi.jpg',
        description: 'A walrus taxi driver gets involved in the mysterious disappearance of a high school girl through his conversations with eccentric passengers.',
        isNew: true
    },
    {
        id: 'summertime-rendering',
        title: 'Summertime Rendering',
        type: 'series',
        genres: ['mystery', 'supernatural', 'thriller'],
        rating: 8.6,
        year: 2022,
        episodes: 25,
        poster: 'img/summer.jpg',
        description: 'A young man returns to his hometown for a funeral and gets caught in a time loop while investigating mysterious deaths and shadowy creatures.',
        isNew: true
    },
    {
        id: 'cyberpunk-edgerunners',
        title: 'Cyberpunk: Edgerunners',
        type: 'series',
        genres: ['action', 'drama', 'sci-fi'],
        rating: 8.7,
        year: 2022,
        episodes: 10,
        poster: 'img/cyberpunk.jpg',
        description: 'In Night City, a street kid survives by becoming an edgerunner - a mercenary outlaw also known as a cyberpunk.',
        isNew: true
    },
    {
        id: 'bocchi-the-rock',
        title: 'Bocchi the Rock!',
        type: 'series',
        genres: ['comedy', 'music', 'slice-of-life'],
        rating: 8.6,
        year: 2022,
        episodes: 12,
        poster: 'img/bochi.jpg',
        description: 'An extremely socially anxious guitarist joins a band and tries to become popular while dealing with her crippling anxiety.',
        isNew: true
    },
    {
        id: 'ousama-ranking',
        title: 'Ranking of Kings',
        type: 'series',
        genres: ['adventure', 'fantasy'],
        rating: 8.7,
        year: 2021,
        episodes: 23,
        poster: 'img/ranking.jpg',
        description: 'A deaf and powerless prince, seen as worthless by his kingdom, embarks on a journey to prove he can become the greatest king.',
        isNew: true
    },
    {
        id: 'lycoris-recoil',
        title: 'Lycoris Recoil',
        type: 'series',
        genres: ['action', 'comedy', 'slice-of-life'],
        rating: 8.3,
        year: 2022,
        episodes: 13,
        poster: 'img/recoil.jpg',
        description: 'Teenage agents work undercover to maintain peace in Japan, running a café while taking on dangerous missions.',
        isNew: true
    },
    {
        id: 'blue-lock',
        title: 'Blue Lock',
        type: 'series',
        genres: ['action', 'sports', 'psychological'],
        rating: 8.3,
        year: 2022,
        episodes: 24,
        poster: 'img/bluelock.jpg',
        description: '300 strikers are isolated and forced to compete in a brutal training program to create the world\'s greatest egotist striker.',
        isNew: true
    },
    {
        id: 'tokyo-revengers',
        title: 'Tokyo Revengers',
        type: 'series',
        genres: ['action', 'drama', 'supernatural'],
        rating: 8.1,
        year: 2021,
        episodes: 37,
        poster: 'img/Tokyo Revengers.jpg',
        description: 'A loser discovers he can time travel and uses this ability to save his middle school girlfriend from a tragic fate.',
        isNew: true
    },
    {
        id: 'the-eminence-in-shadow',
        title: 'The Eminence in Shadow',
        type: 'series',
        genres: ['action', 'comedy', 'fantasy', 'isekai'],
        rating: 8.2,
        year: 2022,
        episodes: 32,
        poster: 'img/eminence.jpg',
        description: 'A boy obsessed with being a "mastermind in the shadows" gets reincarnated in a fantasy world and accidentally creates a real secret organization.',
        isNew: true
    },
    {
        id: 'so-im-a-spider-so-what',
        title: 'So I\'m a Spider, So What?',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy', 'isekai'],
        rating: 7.9,
        year: 2021,
        episodes: 24,
        poster: 'img/spider.jpg',
        description: 'A high school class is reincarnated in a fantasy world, with the protagonist reborn as a weak spider monster in a deadly dungeon.',
        isNew: true
    },
    {
        id: 'ascendance-of-a-bookworm',
        title: 'Ascendance of a Bookworm',
        type: 'series',
        genres: ['drama', 'fantasy', 'isekai'],
        rating: 8.4,
        year: 2019,
        episodes: 36,
        poster: 'img/bookworm.jpg',
        description: 'A book-loving college student is reincarnated in a medieval world where books are rare and expensive, so she decides to make her own.',
        isNew: true
    },
    {
        id: 'log-horizon',
        title: 'Log Horizon',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy', 'isekai'],
        rating: 8.0,
        year: 2013,
        episodes: 62,
        poster: 'img/Log Horizon.jpg',
        description: 'Thousands of players are trapped in an MMORPG and must learn to survive and build a society in their new world.',
        isNew: false
    },
    {
        id: 'saga-of-tanya-the-evil',
        title: 'Saga of Tanya the Evil',
        type: 'series',
        genres: ['action', 'fantasy', 'isekai', 'military'],
        rating: 8.0,
        year: 2017,
        episodes: 12,
        poster: 'img/tanya.jpg',
        description: 'An atheist Japanese salaryman is reincarnated as a little girl in an alternate World War I-esque world with magic.',
        isNew: true
    },
    {
        id: 'no-game-no-life',
        title: 'No Game No Life',
        type: 'series',
        genres: ['adventure', 'comedy', 'fantasy', 'isekai'],
        rating: 8.1,
        year: 2014,
        episodes: 12,
        poster: 'img/game.jpg',
        description: 'Two NEET siblings are transported to a world where all conflicts are resolved through games rather than violence.',
        isNew: true
    },
    {
        id: 'the-twelve-kingdoms',
        title: 'The Twelve Kingdoms',
        type: 'series',
        genres: ['action', 'adventure', 'drama', 'fantasy'],
        rating: 8.4,
        year: 2002,
        episodes: 45,
        poster: 'img/twelve.jpg',
        description: 'A high school girl is transported to a fantasy world based on Chinese mythology and must learn to survive and rule.',
        isNew: false
    },
    {
        id: 'now-and-then-here-and-there',
        title: 'Now and Then, Here and There',
        type: 'series',
        genres: ['adventure', 'drama', 'fantasy', 'sci-fi'],
        rating: 8.2,
        year: 1999,
        episodes: 13,
        poster: 'img/there.jpg',
        description: 'A boy is transported to a dystopian world where water is scarce and children are forced to become soldiers.',
        isNew: false
    },
    {
        id: 'the-vision-of-escaflowne',
        title: 'The Vision of Escaflowne',
        type: 'series',
        genres: ['adventure', 'fantasy', 'mecha', 'romance'],
        rating: 8.0,
        year: 1996,
        episodes: 26,
        poster: 'img/esca.jpg',
        description: 'A high school girl is transported to a fantasy world where she gets involved in a war between kingdoms and giant robots.',
        isNew: false
    },
    {
        id: 'magic-knight-rayearth',
        title: 'Magic Knight Rayearth',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy', 'magical-girl'],
        rating: 7.8,
        year: 1994,
        episodes: 29,
        poster: 'img/rayearth.jpg',
        description: 'Three middle school girls are transported to a fantasy world to become Magic Knights and save the land from destruction.',
        isNew: false
    },
    {
        id: 'fate-zero',
        title: 'Fate/Zero',
        type: 'series',
        genres: ['action', 'fantasy', 'supernatural'],
        rating: 8.5,
        year: 2011,
        episodes: 25,
        poster: 'img/fate.jpg',
        description: 'Seven mages summon heroic spirits to battle in a deadly war for the Holy Grail, which can grant any wish.',
        isNew: false
    },
    {
        id: 'madoka-magica',
        title: 'Puella Magi Madoka Magica',
        type: 'series',
        genres: ['drama', 'fantasy', 'psychological', 'magical-girl'],
        rating: 8.4,
        year: 2011,
        episodes: 12,
        poster: 'img/puella.jpg',
        description: 'A deconstruction of the magical girl genre where girls make contracts to become magical girls, but at a terrible cost.',
        isNew: false
    },
    {
        id: 'revolutionary-girl-utena',
        title: 'Revolutionary Girl Utena',
        type: 'series',
        genres: ['drama', 'fantasy', 'psychological'],
        rating: 8.2,
        year: 1997,
        episodes: 39,
        poster: 'img/fillete.jpg',
        description: 'A girl who wants to be a prince enters a duelist revolution to protect a mysterious girl known as the Rose Bride.',
        isNew: false
    },
    {
        id: 'serial-experiments-lain',
        title: 'Serial Experiments Lain',
        type: 'series',
        genres: ['drama', 'mystery', 'psychological', 'sci-fi'],
        rating: 8.1,
        year: 1998,
        episodes: 13,
        poster: 'img/lain.jpg',
        description: 'A young girl\'s reality begins to unravel after she receives a message from a classmate who recently committed suicide.',
        isNew: false
    },
    {
        id: 'texhnolyze',
        title: 'Texhnolyze',
        type: 'series',
        genres: ['drama', 'psychological', 'sci-fi'],
        rating: 8.1,
        year: 2003,
        episodes: 22,
        poster: 'img/tex.jpg',
        description: 'In a decaying underground city, a fighter loses his limbs and receives advanced cybernetic prosthetics in this bleak cyberpunk tale.',
        isNew: false
    },
    {
        id: 'ergo-proxy',
        title: 'Ergo Proxy',
        type: 'series',
        genres: ['mystery', 'psychological', 'sci-fi'],
        rating: 8.0,
        year: 2006,
        episodes: 23,
        poster: 'img/proxy.jpg',
        description: 'In a post-apocalyptic domed city, an inspector investigates mysterious murders involving androids gaining sentience.',
        isNew: false
    },
    {
        id: 'ghost-in-the-shell-sac',
        title: 'Ghost in the Shell: Stand Alone Complex',
        type: 'series',
        genres: ['action', 'mystery', 'sci-fi'],
        rating: 8.5,
        year: 2002,
        episodes: 52,
        poster: 'img/ghost.jpg',
        description: 'An elite police force deals with cybercrime and terrorism in a future where the line between human and machine has blurred.',
        isNew: false
    },
    {
        id: 'psycho-pass',
        title: 'Psycho-Pass',
        type: 'series',
        genres: ['action', 'mystery', 'sci-fi'],
        rating: 8.3,
        year: 2012,
        episodes: 41,
        poster: 'img/psycho.jpg',
        description: 'In a future where people\'s mental states are constantly monitored, inspectors enforce the law against those whose "crime coefficient" is too high.',
        isNew: false
    },
    {
        id: 'paranoia-agent',
        title: 'Paranoia Agent',
        type: 'series',
        genres: ['mystery', 'psychological', 'thriller'],
        rating: 7.9,
        year: 2004,
        episodes: 13,
        poster: 'img/agent.jpg',
        description: 'A series of attacks by a mysterious boy on roller skates exposes the underlying fears and anxieties of modern Tokyo.',
        isNew: false
    },
    {
        id: 'ping-pong-the-animation',
        title: 'Ping Pong the Animation',
        type: 'series',
        genres: ['drama', 'psychological', 'sports'],
        rating: 8.7,
        year: 2014,
        episodes: 11,
        poster: 'img/theanimation.jpg',
        description: 'Two childhood friends and table tennis prodigies take different approaches to the sport as they compete at the highest level.',
        isNew: false
    },
    {
        id: 'tatami-galaxy',
        title: 'The Tatami Galaxy',
        type: 'series',
        genres: ['comedy', 'drama', 'psychological'],
        rating: 8.6,
        year: 2010,
        episodes: 11,
        poster: 'img/tatami.jpg',
        description: 'A college student relives his university years through different parallel timelines, searching for the perfect "rose-colored campus life."',
        isNew: false
    },
    {
        id: 'march-comes-in-like-a-lion',
        title: 'March Comes in Like a Lion',
        type: 'series',
        genres: ['drama', 'slice-of-life'],
        rating: 8.7,
        year: 2016,
        episodes: 44,
        poster: 'img/sangatsu.jpg',
        description: 'A professional shogi player dealing with depression finds warmth and support from three sisters who help him reconnect with life.',
        isNew: false
    },
    {
        id: 'nana',
        title: 'Nana',
        type: 'series',
        genres: ['drama', 'music', 'romance', 'slice-of-life'],
        rating: 8.6,
        year: 2006,
        episodes: 47,
        poster: 'img/nana.jpg',
        description: 'Two women with the same name but completely different personalities become roommates and form a deep friendship in Tokyo.',
        isNew: false
    },
    {
        id: 'paradise-kiss',
        title: 'Paradise Kiss',
        type: 'series',
        genres: ['drama', 'romance', 'slice-of-life'],
        rating: 8.0,
        year: 2005,
        episodes: 12,
        poster: 'img/paradise.jpg',
        description: 'A high school student gets involved with a group of fashion design students who convince her to become their model.',
        isNew: false
    },
    {
        id: 'beck',
        title: 'Beck',
        type: 'series',
        genres: ['drama', 'music', 'slice-of-life'],
        rating: 8.3,
        year: 2004,
        episodes: 26,
        poster: 'img/beck.jpg',
        description: 'A teenager discovers rock music and joins a band, working hard to achieve success in the competitive music industry.',
        isNew: false
    },
    {
        id: 'great-teacher-onizuka',
        title: 'Great Teacher Onizuka',
        type: 'series',
        genres: ['comedy', 'drama', 'slice-of-life'],
        rating: 8.7,
        year: 1999,
        episodes: 43,
        poster: 'img/gto.jpg',
        description: 'A former gang member becomes a teacher and uses unorthodox methods to reach his problematic students.',
        isNew: false
    },
    {
        id: 'golden-boy',
        title: 'Golden Boy',
        type: 'series',
        genres: ['comedy', 'ecchi', 'slice-of-life'],
        rating: 8.2,
        year: 1995,
        episodes: 6,
        poster: 'img/golden.jpg',
        description: 'A genius college dropout travels Japan taking odd jobs and learning valuable life lessons from the women he meets.',
        isNew: false
    },
    {
        id: 'excel-saga',
        title: 'Excel Saga',
        type: 'series',
        genres: ['comedy', 'parody', 'sci-fi'],
        rating: 7.8,
        year: 1999,
        episodes: 26,
        poster: 'img/excel.jpg',
        description: 'An over-enthusiastic girl works for a secret organization trying to conquer the world in this absurd parody anime.',
        isNew: false
    },
    {
        id: 'azumanga-daioh',
        title: 'Azumanga Daioh',
        type: 'series',
        genres: ['comedy', 'slice-of-life'],
        rating: 8.1,
        year: 2002,
        episodes: 130,
        poster: 'img/daioh.jpg',
        description: 'The daily lives of a group of high school girls and their eccentric teachers from freshman year to graduation.',
        isNew: false
    },
    {
        id: 'lucky-star',
        title: 'Lucky Star',
        type: 'series',
        genres: ['comedy', 'slice-of-life'],
        rating: 7.7,
        year: 2007,
        episodes: 24,
        poster: 'img/lucky.jpg',
        description: 'Four high school girls navigate daily life, anime conventions, and the challenges of being otaku in this slice-of-life comedy.',
        isNew: false
    },
    {
        id: 'aria-the-animation',
        title: 'Aria the Animation',
        type: 'series',
        genres: ['fantasy', 'slice-of-life', 'sci-fi'],
        rating: 8.3,
        year: 2005,
        episodes: 52,
        poster: 'img/aria.jpg',
        description: 'On a terraformed Mars, a young girl trains to become an Undine - a gondolier tour guide in the beautiful city of Neo-Venezia.',
        isNew: false
    },
    {
        id: 'mushishi',
        title: 'Mushishi',
        type: 'series',
        genres: ['adventure', 'fantasy', 'mystery', 'slice-of-life'],
        rating: 8.8,
        year: 2005,
        episodes: 46,
        poster: 'img/mushishi.jpg',
        description: 'A "Mushishi" travels through rural Japan helping people deal with mysterious life forms called Mushi that are neither plant nor animal.',
        isNew: false
    },
    {
        id: 'kino-no-tabi',
        title: 'Kino\'s Journey',
        type: 'series',
        genres: ['adventure', 'drama', 'fantasy'],
        rating: 8.3,
        year: 2003,
        episodes: 13,
        poster: 'img/kinos.jpg',
        description: 'A traveler and their talking motorcycle visit various countries, each with its own unique customs and philosophical dilemmas.',
        isNew: false
    },
    {
        id: 'girls-last-tour',
        title: 'Girls\' Last Tour',
        type: 'series',
        genres: ['adventure', 'drama', 'sci-fi', 'slice-of-life'],
        rating: 8.2,
        year: 2017,
        episodes: 12,
        poster: 'img/girls last tour.jpg',
        description: 'Two girls travel through the ruins of a post-apocalyptic civilization, finding beauty and meaning in the desolate landscape.',
        isNew: true
    },
    {
        id: 'land-of-the-lustrous',
        title: 'Land of the Lustrous',
        type: 'series',
        genres: ['action', 'drama', 'fantasy'],
        rating: 8.4,
        year: 2017,
        episodes: 12,
        poster: 'img/lustrous.jpg',
        description: 'In a world where gemstone-based life forms fight moon dwellers, a young gem seeks to find her purpose and protect her home.',
        isNew: true
    },
    {
        id: 'keep-your-hands-off-eizouken',
        title: 'Keep Your Hands Off Eizouken!',
        type: 'series',
        genres: ['comedy', 'slice-of-life'],
        rating: 8.2,
        year: 2020,
        episodes: 12,
        poster: 'img/girlss.jpg',
        description: 'Three high school girls start an animation club and work together to create the ultimate anime.',
        isNew: true
    },
    {
        id: 'dorohedoro',
        title: 'Dorohedoro',
        type: 'series',
        genres: ['action', 'comedy', 'fantasy', 'horror'],
        rating: 8.2,
        year: 2020,
        episodes: 12,
        poster: 'img/doro.jpg',
        description: 'In a grim fantasy world, a man with a lizard head searches for the sorcerer who cursed him while working for a powerful crime family.',
        isNew: true
    },
    {
        id: 'golden-kamuy',
        title: 'Golden Kamuy',
        type: 'series',
        genres: ['action', 'adventure', 'historical'],
        rating: 8.3,
        year: 2018,
        episodes: 49,
        poster: 'img/kamuy.jpg',
        description: 'A veteran of the Russo-Japanese war teams up with an Ainu girl to find hidden gold in Hokkaido, competing with other dangerous factions.',
        isNew: true
    },
    {
        id: 'kingdom',
        title: 'Kingdom',
        type: 'series',
        genres: ['action', 'historical', 'military'],
        rating: 8.5,
        year: 2012,
        episodes: 133,
        poster: 'img/kingdom.jpg',
        description: 'During the Warring States period in China, a war orphan dreams of becoming the greatest general under the heavens.',
        isNew: false
    },
    {
        id: 'moriarty-the-patriot',
        title: 'Moriarty the Patriot',
        type: 'series',
        genres: ['mystery', 'psychological', 'historical'],
        rating: 8.1,
        year: 2020,
        episodes: 24,
        poster: 'img/moriaty.jpg',
        description: 'In 19th century England, William James Moriarty uses crime to dismantle the corrupt class system that plagues the country.',
        isNew: true
    },
    {
        id: 'vanitas-no-carte',
        title: 'The Case Study of Vanitas',
        type: 'series',
        genres: ['fantasy', 'historical', 'supernatural'],
        rating: 8.1,
        year: 2021,
        episodes: 24,
        poster: 'img/vanitas.jpg',
        description: 'In a steampunk Paris, a human doctor who specializes in vampires claims he can cure them of their bloodlust using a cursed grimoire.',
        isNew: true
    },
    {
        id: 'call-of-the-night',
        title: 'Call of the Night',
        type: 'series',
        genres: ['comedy', 'supernatural', 'romance'],
        rating: 8.0,
        year: 2022,
        episodes: 13,
        poster: 'img/call.jpg',
        description: 'A sleepless teenager begins exploring the night world and meets a mysterious vampire girl, falling into a strange romance.',
        isNew: true
    },
    {
        id: 'insomniacs-after-school',
        title: 'Insomniacs After School',
        type: 'series',
        genres: ['drama', 'romance', 'slice-of-life'],
        rating: 8.4,
        year: 2023,
        episodes: 13,
        poster: 'img/insomiacs.jpg',
        description: 'Two high school insomniacs bond over their shared condition and start spending their nights together in the school observatory.',
        isNew: true
    },
    {
        id: 'heaven-officials-blessing',
        title: 'Heaven Official\'s Blessing',
        type: 'series',
        genres: ['action', 'fantasy', 'romance', 'supernatural'],
        rating: 8.5,
        year: 2020,
        episodes: 11,
        poster: 'img/heavens.jpg',
        description: 'A banished heavenly official ascends to the heavens for the third time and meets a mysterious ghost king who has been waiting for him for 800 years.',
        isNew: true
    },
    {
        id: 'link-click',
        title: 'Link Click',
        type: 'series',
        genres: ['drama', 'mystery', 'supernatural', 'thriller'],
        rating: 8.9,
        year: 2021,
        episodes: 23,
        poster: 'img/link.jpg',
        description: 'Two friends run a photo studio with a secret ability to travel into photographs, taking on clients\' requests but facing dangerous consequences.',
        isNew: true
    },
    {
        id: 'classroom-of-the-elite',
        title: 'Classroom of the Elite',
        type: 'series',
        genres: ['drama', 'psychological', 'thriller'],
        rating: 8.3,
        year: 2017,
        episodes: 37,
        poster: 'img/class.jpg',
        description: 'In a prestigious school where students are ranked by merit, a seemingly average boy in the lowest-ranked class manipulates the entire system from the shadows.',
        isNew: true
    },
    {
        id: 'bungo-stray-dogs',
        title: 'Bungo Stray Dogs',
        type: 'series',
        genres: ['action', 'mystery', 'supernatural'],
        rating: 8.1,
        year: 2016,
        episodes: 61,
        poster: 'img/bungo.jpg',
        description: 'A suicidal boy joins a detective agency of supernatural ability users, each named after famous literary figures, to solve mysterious cases in Yokohama.',
        isNew: true
    },
    {
        id: 'the-apothecary-diaries',
        title: 'The Apothecary Diaries',
        type: 'series',
        genres: ['drama', 'mystery', 'historical'],
        rating: 8.8,
        year: 2023,
        episodes: 24,
        poster: 'img/apothecary.jpg',
        description: 'A kidnapped apothecary uses her brilliant mind to solve medical mysteries in the inner palace, catching the eye of influential figures.',
        isNew: true
    },
    {
        id: 'solo-leveling',
        title: 'Solo Leveling',
        type: 'series',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 8.7,
        year: 2024,
        episodes: 12,
        poster: 'img/level.jpg',
        description: 'The world\'s weakest hunter, Sung Jin-Woo, gets a second chance at life and power when he is chosen as the sole player of a mysterious system.',
        isNew: true
    }
];

        console.log('📦 Loaded content:', this.content.length, 'items');
    }

    // Setup event listeners
    setupEventListeners() {
        // Tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setFilter('type', btn.dataset.type);
                this.updateActiveTab(btn);
            });
        });

        // Genre filter
        document.getElementById('genreSelect').addEventListener('change', (e) => {
            this.setFilter('genre', e.target.value);
        });

        // Sort filter
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.setFilter('sort', e.target.value);
        });

        // Search input
        document.getElementById('contentSearch').addEventListener('input', (e) => {
            this.setFilter('search', e.target.value);
        });

        // Reset filters
        document.getElementById('resetFilters').addEventListener('click', () => {
            this.resetFilters();
        });

        // Debounce search input
        this.debounceSearch();
    }

    // Debounce search for better performance
    debounceSearch() {
        let timeout;
        const searchInput = document.getElementById('contentSearch');
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                this.setFilter('search', e.target.value);
            }, 300);
        });
    }

    // Set filter and apply
    setFilter(key, value) {
        this.filters[key] = value;
        this.applyFilters();
    }

    // Update active tab
    updateActiveTab(activeBtn) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }

    // Apply all filters
    applyFilters() {
        this.showLoading(true);

        // Simulate loading delay
        setTimeout(() => {
            let filtered = [...this.content];

            // Type filter
            if (this.filters.type !== 'all') {
                filtered = filtered.filter(item => item.type === this.filters.type);
            }

            // Genre filter
            if (this.filters.genre !== 'all') {
                filtered = filtered.filter(item => 
                    item.genres.includes(this.filters.genre)
                );
            }

            // Search filter
            if (this.filters.search.trim()) {
                const searchTerm = this.filters.search.toLowerCase();
                filtered = filtered.filter(item =>
                    item.title.toLowerCase().includes(searchTerm) ||
                    item.description.toLowerCase().includes(searchTerm) ||
                    item.genres.some(genre => genre.includes(searchTerm))
                );
            }

            // Sort results
            filtered = this.sortContent(filtered);

            this.filteredContent = filtered;
            this.renderContent();
            this.updateResultsInfo();
            this.updateActiveFilters();
            this.showLoading(false);
        }, 500);
    }

    // Sort content based on selected option
    sortContent(content) {
        switch (this.filters.sort) {
            case 'rating':
                return content.sort((a, b) => b.rating - a.rating);
            case 'newest':
                return content.sort((a, b) => b.year - a.year);
            case 'oldest':
                return content.sort((a, b) => a.year - b.year);
            case 'title':
                return content.sort((a, b) => a.title.localeCompare(b.title));
            case 'popular':
            default:
                return content.sort((a, b) => {
                    // Combine rating and new status for "popularity"
                    const aScore = a.rating + (a.isNew ? 0.5 : 0);
                    const bScore = b.rating + (b.isNew ? 0.5 : 0);
                    return bScore - aScore;
                });
        }
    }

    // Render content to grid
    renderContent() {
        const grid = document.getElementById('contentGrid');
        
        if (this.filteredContent.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No content found</h3>
                    <p>Try adjusting your filters or search terms</p>
                    <button class="btn btn-primary" onclick="contentFilter.resetFilters()">
                        Reset Filters
                    </button>
                </div>
            `;
            return;
        }

        grid.innerHTML = this.filteredContent.map(item => `
            <div class="content-item" data-anime-id="${item.id}">
                <img src="${item.poster}" alt="${item.title}" class="content-poster">
                <div class="content-info">
                    <h3 class="content-title">${item.title}</h3>
                    <div class="content-meta">
                        <span class="content-rating">⭐ ${item.rating}/10</span>
                        <span class="content-type">${this.formatType(item.type)}</span>
                    </div>
                    <div class="content-genres">
                        ${item.genres.map(genre => `
                            <span class="genre-tag">${this.formatGenre(genre)}</span>
                        `).join('')}
                    </div>
                    <p class="content-description">${item.description}</p>
                    <div class="content-actions">
                        <button class="btn btn-primary" onclick="watchAnime('${item.id}')">
                            <i class="fas fa-play"></i> Watch
                        </button>
                        <button class="btn btn-secondary watchlist-btn" onclick="toggleWatchlist('${item.id}')" data-anime-id="${item.id}">
                            <i class="fas fa-plus"></i> Watchlist
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Update watchlist buttons
        if (window.authSystem) {
            window.authSystem.updateAllWatchlistButtons();
        }
    }

    // Format type for display
    formatType(type) {
        const types = {
            'movie': 'Movie',
            'series': 'Series',
            'specials': 'Special'
        };
        return types[type] || type;
    }

    // Format genre for display
    formatGenre(genre) {
        return genre.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    // Update results information
    updateResultsInfo() {
        const countElement = document.getElementById('resultsCount');
        const total = this.content.length;
        const showing = this.filteredContent.length;
        
        let text = `Showing ${showing} of ${total} items`;
        
        if (this.filters.search) {
            text += ` for "${this.filters.search}"`;
        }
        if (this.filters.type !== 'all') {
            text += ` in ${this.formatType(this.filters.type)}`;
        }
        if (this.filters.genre !== 'all') {
            text += ` • ${this.formatGenre(this.filters.genre)}`;
        }

        countElement.textContent = text;
    }

    // Update active filters display
    updateActiveFilters() {
        const container = document.getElementById('activeFilters');
        const activeFilters = [];

        if (this.filters.type !== 'all') {
            activeFilters.push({
                key: 'type',
                label: `Type: ${this.formatType(this.filters.type)}`,
                value: this.filters.type
            });
        }

        if (this.filters.genre !== 'all') {
            activeFilters.push({
                key: 'genre',
                label: `Genre: ${this.formatGenre(this.filters.genre)}`,
                value: this.filters.genre
            });
        }

        if (this.filters.search) {
            activeFilters.push({
                key: 'search',
                label: `Search: "${this.filters.search}"`,
                value: this.filters.search
            });
        }

        container.innerHTML = activeFilters.map(filter => `
            <div class="filter-tag">
                ${filter.label}
                <button class="remove-filter" onclick="contentFilter.removeFilter('${filter.key}')">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }

    // Remove specific filter
    removeFilter(key) {
        switch (key) {
            case 'type':
                this.filters.type = 'all';
                document.querySelector('.tab-btn[data-type="all"]').click();
                break;
            case 'genre':
                this.filters.genre = 'all';
                document.getElementById('genreSelect').value = 'all';
                break;
            case 'search':
                this.filters.search = '';
                document.getElementById('contentSearch').value = '';
                break;
        }
        this.applyFilters();
    }

    // Reset all filters
    resetFilters() {
        this.filters = {
            type: 'all',
            genre: 'all',
            search: '',
            sort: 'popular'
        };

        // Update UI elements
        document.querySelector('.tab-btn[data-type="all"]').click();
        document.getElementById('genreSelect').value = 'all';
        document.getElementById('sortSelect').value = 'popular';
        document.getElementById('contentSearch').value = '';

        this.applyFilters();
    }

    // Show/hide loading spinner
    showLoading(show) {
        const spinner = document.getElementById('loadingSpinner');
        spinner.style.display = show ? 'block' : 'none';
    }
}

// Initialize content filter
document.addEventListener('DOMContentLoaded', () => {
    window.contentFilter = new ContentFilter();
});

// Global function to watch anime
function watchAnime(animeId) {
    // Add to watch history if user is logged in
    if (window.authSystem && window.authSystem.isAuthenticated()) {
        window.authSystem.addToWatchHistory(animeId, 1, 0);
    }
    
    // Navigate to player page
    window.location.href = `player.html?anime=${animeId}`;
}

// Add search functionality to main search bar
function setupMainSearch() {
    const mainSearchInput = document.querySelector('.search-input');
    const mainSearchBtn = document.querySelector('.search-btn');
    
    if (mainSearchInput && mainSearchBtn) {
        const performSearch = () => {
            const searchTerm = mainSearchInput.value.trim();
            if (searchTerm) {
                // Scroll to content section
                document.querySelector('.content-section')?.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Set search filter
                if (window.contentFilter) {
                    window.contentFilter.setFilter('search', searchTerm);
                    document.getElementById('contentSearch').value = searchTerm;
                }
            }
        };
        
        mainSearchBtn.addEventListener('click', performSearch);
        mainSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupMainSearch();
});