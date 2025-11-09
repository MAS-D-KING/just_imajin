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
        this.content = [
    {
        id: 'spirited-away',
        title: 'Spirited Away',
        type: 'movie',
        genres: ['adventure', 'fantasy', 'drama'],
        rating: 9.0,
        year: 2001,
        episodes: 1,
        poster: 'img/away.jpg',
        description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
        isNew: false
    },
    {
        id: 'your-name',
        title: 'Your Name.',
        type: 'movie',
        genres: ['romance', 'drama', 'fantasy'],
        rating: 9.0,
        year: 2016,
        episodes: 1,
        poster: 'img/name.jpg',
        description: 'Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.',
        isNew: false
    },
    {
        id: 'grave-of-the-fireflies',
        title: 'Grave of the Fireflies',
        type: 'movie',
        genres: ['drama', 'historical'],
        rating: 8.8,
        year: 1988,
        episodes: 1,
        poster: 'img/grave.jpg',
        description: 'A young boy and his little sister struggle to survive in Japan during World War II.',
        isNew: false
    },
    {
        id: 'princess-mononoke',
        title: 'Princess Mononoke',
        type: 'movie',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 8.9,
        year: 1997,
        episodes: 1,
        poster: 'img/mono.jpg',
        description: 'On a journey to find the cure for a Tatarigami\'s curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.',
        isNew: false
    },
    {
        id: 'howls-moving-castle',
        title: 'Howl\'s Moving Castle',
        type: 'movie',
        genres: ['adventure', 'fantasy', 'romance'],
        rating: 8.7,
        year: 2004,
        episodes: 1,
        poster: 'img/howl.jpg',
        description: 'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
        isNew: false
    },
    {
        id: 'akira',
        title: 'Akira',
        type: 'movie',
        genres: ['action', 'sci-fi', 'drama'],
        rating: 8.3,
        year: 1988,
        episodes: 1,
        poster: 'img/akira.jpg',
        description: 'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers and a group of psychics can stop.',
        isNew: false
    },
    {
        id: 'ghost-in-the-shell',
        title: 'Ghost in the Shell',
        type: 'movie',
        genres: ['action', 'sci-fi', 'philosophical'],
        rating: 8.2,
        year: 1995,
        episodes: 1,
        poster: 'img/ghost.jpg',
        description: 'A cyborg policewoman and her partner hunt a mysterious and powerful hacker called the Puppet Master.',
        isNew: false
    },
    {
        id: 'my-neighbor-totoro',
        title: 'My Neighbor Totoro',
        type: 'movie',
        genres: ['adventure', 'fantasy', 'family'],
        rating: 8.4,
        year: 1988,
        episodes: 1,
        poster: 'img/totoro.jpg',
        description: 'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.',
        isNew: false
    },
    {
        id: 'perfect-blue',
        title: 'Perfect Blue',
        type: 'movie',
        genres: ['drama', 'psychological', 'thriller'],
        rating: 8.3,
        year: 1997,
        episodes: 1,
        poster: 'img/blude.jpg',
        description: 'A pop singer gives up her career to become an actress, but she slowly goes insane when she starts being stalked by an obsessed fan and what seems to be a ghost of her past.',
        isNew: false
    },
    {
        id: 'the-wind-rises',
        title: 'The Wind Rises',
        type: 'movie',
        genres: ['drama', 'historical', 'romance'],
        rating: 8.0,
        year: 2013,
        episodes: 1,
        poster: 'img/rises.jpg',
        description: 'A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II.',
        isNew: false
    },
    {
        id: 'weathering-with-you',
        title: 'Weathering With You',
        type: 'movie',
        genres: ['romance', 'drama', 'fantasy'],
        rating: 8.1,
        year: 2019,
        episodes: 1,
        poster: 'img/weathering.jpg',
        description: 'A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.',
        isNew: false
    },
    {
        id: 'a-silent-voice',
        title: 'A Silent Voice',
        type: 'movie',
        genres: ['drama', 'romance'],
        rating: 9.0,
        year: 2016,
        episodes: 1,
        poster: 'img/silent.jpg',
        description: 'A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.',
        isNew: false
    },
    {
        id: 'castle-in-the-sky',
        title: 'Castle in the Sky',
        type: 'movie',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 8.3,
        year: 1986,
        episodes: 1,
        poster: 'img/castle.jpg',
        description: 'A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.',
        isNew: false
    },
    {
        id: 'kikis-delivery-service',
        title: 'Kiki\'s Delivery Service',
        type: 'movie',
        genres: ['adventure', 'fantasy', 'slice-of-life'],
        rating: 8.2,
        year: 1989,
        episodes: 1,
        poster: 'img/kiki.jpg',
        description: 'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.',
        isNew: false
    },
    {
        id: 'ponyo',
        title: 'Ponyo',
        type: 'movie',
        genres: ['adventure', 'fantasy', 'family'],
        rating: 8.0,
        year: 2008,
        episodes: 1,
        poster: 'img/ponyo.jpg',
        description: 'A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.',
        isNew: false
    },
    {
        id: 'nausicaa-of-the-valley-of-the-wind',
        title: 'Nausicaä of the Valley of the Wind',
        type: 'movie',
        genres: ['adventure', 'fantasy', 'sci-fi'],
        rating: 8.3,
        year: 1984,
        episodes: 1,
        poster: 'img/nausica.jpg',
        description: 'Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.',
        isNew: false
    },
    {
        id: 'the-tale-of-the-princess-kaguya',
        title: 'The Tale of the Princess Kaguya',
        type: 'movie',
        genres: ['drama', 'fantasy', 'historical'],
        rating: 8.3,
        year: 2013,
        episodes: 1,
        poster: 'img/kaguya.jpg',
        description: 'Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady.',
        isNew: false
    },
    {
        id: 'wolf-children',
        title: 'Wolf Children',
        type: 'movie',
        genres: ['drama', 'fantasy', 'slice-of-life'],
        rating: 8.5,
        year: 2012,
        episodes: 1,
        poster: 'img/wold.jpg',
        description: 'After her werewolf lover unexpectedly dies in an accident, a woman must find a way to raise the two children she had with him.',
        isNew: false
    },
    {
        id: 'the-girl-who-leapt-through-time',
        title: 'The Girl Who Leapt Through Time',
        type: 'movie',
        genres: ['drama', 'romance', 'sci-fi'],
        rating: 8.1,
        year: 2006,
        episodes: 1,
        poster: 'img/time.jpg',
        description: 'A high-school girl gains the ability to travel through time, leading her to change the past and present, with unintended consequences.',
        isNew: false
    },
    {
        id: 'paprika',
        title: 'Paprika',
        type: 'movie',
        genres: ['sci-fi', 'fantasy', 'psychological'],
        rating: 8.0,
        year: 2006,
        episodes: 1,
        poster: 'img/paprika.jpg',
        description: 'When a machine that allows therapists to enter their patients\' dreams is stolen, all hell breaks loose. Only a young female therapist can stop it.',
        isNew: false
    },
    {
        id: 'millennium-actress',
        title: 'Millennium Actress',
        type: 'movie',
        genres: ['drama', 'romance', 'fantasy'],
        rating: 8.2,
        year: 2001,
        episodes: 1,
        poster: 'img/milenium.jpg',
        description: 'A documentary filmmaker and his cameraman interview a former actress and learn of her lifelong search for a lost love.',
        isNew: false
    },
    {
        id: 'tokyo-godfathers',
        title: 'Tokyo Godfathers',
        type: 'movie',
        genres: ['adventure', 'drama', 'comedy'],
        rating: 8.0,
        year: 2003,
        episodes: 1,
        poster: 'img/godfather.jpg',
        description: 'Three homeless people find an abandoned baby on Christmas Eve and set out to find its parents.',
        isNew: false
    },
    {
        id: '5-centimeters-per-second',
        title: '5 Centimeters Per Second', 
        type: 'movie',
        genres: ['drama', 'romance'],
        rating: 8.0,
        year: 2007,
        episodes: 1,
        poster: 'img/5cent.jpg',
        description: 'Told in three interconnected segments, we follow a young man named Takaki through his life as cruel winters, cold technology, and finally, adult obligations and responsibility converge to test the delicate petals of love.',
        isNew: false
    },
    {
        id: 'the-disappearance-of-haruhi-suzumiya',
        title: 'The Disappearance of Haruhi Suzumiya',
        type: 'movie',
        genres: ['mystery', 'sci-fi', 'drama'],
        rating: 8.7,
        year: 2010,
        episodes: 1,
        poster: 'img/suzuma.jpg',
        description: 'Kyon wakes up one day to find that the SOS Brigade never existed, and Haruhi Suzumiya is just a normal, quiet girl. He must unravel the mystery of this new world.',
        isNew: false
    },
    {
        id: 'vampire-hunter-d-bloodlust',
        title: 'Vampire Hunter D: Bloodlust',
        type: 'movie',
        genres: ['action', 'horror', 'romance'],
        rating: 8.1,
        year: 2000,
        episodes: 1,
        poster: 'img/vampire.jpg',
        description: 'When a girl is abducted by a vampire, the legendary dhampir D is hired to retrieve her before a rival band of mercenaries gets to her first.',
        isNew: false
    },
    {
        id: 'ninja-scroll',
        title: 'Ninja Scroll',
        type: 'movie',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 8.1,
        year: 1993,
        episodes: 1,
        poster: 'img/scroll.jpg',
        description: 'A vagabond swordsman is forced to face a demonic conspiracy and a team of super-powered assassins.',
        isNew: false
    },
    {
        id: 'redline',
        title: 'Redline',
        type: 'movie',
        genres: ['action', 'sci-fi', 'sports'],
        rating: 8.2,
        year: 2009,
        episodes: 1,
        poster: 'img/REDLINE.jpg',
        description: 'A daredevil driver participates in the biggest and most deadly racing tournament in the universe.',
        isNew: false
    },
    {
        id: 'summer-wars',
        title: 'Summer Wars',
        type: 'movie',
        genres: ['action', 'sci-fi', 'comedy'],
        rating: 8.0,
        year: 2009,
        episodes: 1,
        poster: 'img/summer.jpg',
        description: 'A young math genius is recruited by a crush to pretend to be her fiancé at a family gathering, but must save the world from a rogue AI in a virtual world.',
        isNew: false
    },
    {
        id: 'the-boy-and-the-beast',
        title: 'The Boy and the Beast',
        type: 'movie',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 8.1,
        year: 2015,
        episodes: 1,
        poster: 'img/thebb.jpg',
        description: 'A young boy shunned by the world wanders into a realm of beasts and becomes the disciple of a gruff, warrior beast-man.',
        isNew: false
    },
    {
        id: 'maquia',
        title: 'Maquia: When the Promised Flower Blooms',
        type: 'movie',
        genres: ['drama', 'fantasy'],
        rating: 8.3,
        year: 2018,
        episodes: 1,
        poster: 'img/maquia.jpg',
        description: 'A young woman from a clan of immortal beings must raise a human child she finds in the aftermath of a war.',
        isNew: false
    },
    {
        id: 'in-this-corner-of-the-world',
        title: 'In This Corner of the World',
        type: 'movie',
        genres: ['drama', 'historical', 'slice-of-life'],
        rating: 8.3,
        year: 2016,
        episodes: 1,
        poster: 'img/corner.jpg',
        description: 'A young woman\'s peaceful life in Hiroshima is torn apart after she marries and World War II reaches her doorstep.',
        isNew: false
    },
    {
        id: 'i-want-to-eat-your-pancreas',
        title: 'I Want to Eat Your Pancreas',
        type: 'movie',
        genres: ['drama', 'romance'],
        rating: 8.5,
        year: 2018,
        episodes: 1,
        poster: 'img/pancreas.jpg',
        description: 'A high school student discovers his popular classmate is suffering from a terminal pancreatic disease, and she chooses to share her secret with him.',
        isNew: false
    },
    {
        id: 'ride-your-wave',
        title: 'Ride Your Wave',
        type: 'movie',
        genres: ['drama', 'romance', 'fantasy'],
        rating: 7.8,
        year: 2019,
        episodes: 1,
        poster: 'img/waves.jpg',
        description: 'A surf-loving college student has her life turned upside down after meeting a firefighter, but a tragic accident leaves her lost, until his spirit begins to appear in water.',
        isNew: false
    },
    {
        id: 'promare',
        title: 'Promare',
        type: 'movie',
        genres: ['action', 'sci-fi', 'mecha'],
        rating: 8.0,
        year: 2019,
        episodes: 1,
        poster: 'img/joxp.jpg',
        description: 'A futuristic firefighting mecha team battles a radical terrorist group with fire-based abilities.',
        isNew: false
    },
    {
        id: 'josee-the-tiger-and-the-fish',
        title: 'Josee, the Tiger and the Fish',
        type: 'movie',
        genres: ['drama', 'romance'],
        rating: 8.3,
        year: 2020,
        episodes: 1,
        poster: 'img/tiger.jpg',
        description: 'The story of a college student and a wheelchair-bound woman who bond over their shared love of books and the ocean.',
        isNew: false
    },
    {
        id: 'demon-slayer-infinity-castle',
        title: 'Demon Slayer: Infinity Castle',
        type: 'movie',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 8.7,
        year: 2020,
        episodes: 1,
        poster: 'img/infinity.jpg',
        description: 'Tanjiro and the group board the Mugen Train to assist the Flame Hashira, Kyojuro Rengoku, in hunting a demon that has killed many demon slayers.',
        isNew: false
    },
    {
        id: 'one-piece-film-red',
        title: 'One Piece Film: Red',
        type: 'movie',
        genres: ['action', 'adventure', 'fantasy'],
        rating: 9.2,
        year: 2022,
        episodes: 1,
        poster: 'img/red.jpg',
        description: 'The Straw Hat Pirates attend a concert by the famous singer Uta, only to discover her mysterious connection to Shanks.',
        isNew: false
    },
    {
        id: 'jujutsu-kaisen-0',
        title: 'Jujutsu Kaisen 0',
        type: 'movie',
        genres: ['action', 'fantasy', 'supernatural'],
        rating: 8.8,
        year: 2021,
        episodes: 1,
        poster: 'img/kaisen.jpg',
        description: 'Yuta Okkotsu gains control of an extremely powerful, cursed spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by sorcerers to help him control his power.',
        isNew: false
    },
    {
        id: 'the-garden-of-words',
        title: 'The Garden of Words',
        type: 'movie',
        genres: ['drama', 'romance'],
        rating: 8.2,
        year: 2013,
        episodes: 1,
        poster: 'img/thegarden.jpg',
        description: 'A 15-year-old boy and a 27-year-old woman form an unlikely relationship when they meet by chance in a beautiful garden on rainy mornings.',
        isNew: false
    },
    {
        id: 'when-marnie-was-there',
        title: 'When Marnie Was There',
        type: 'movie',
        genres: ['drama', 'mystery', 'psychological'],
        rating: 8.1,
        year: 2014,
        episodes: 1,
        poster: 'img/marnie.jpg',
        description: 'A young girl is sent to live with relatives in the countryside, where she meets a mysterious young girl named Marnie and they form a deep friendship.',
        isNew: false
    },
    {
        id: 'from-up-on-poppy-hill',
        title: 'From Up on Poppy Hill',
        type: 'movie',
        genres: ['drama', 'historical', 'romance'],
        rating: 7.8,
        year: 2011,
        episodes: 1,
        poster: 'img/poppy.jpg',
        description: 'A group of Yokohama teens work to save their school\'s clubhouse from being torn down before the 1964 Tokyo Olympics.',
        isNew: false
    },
    {
        id: 'the-secret-world-of-arrietty',
        title: 'The Secret World of Arrietty',
        type: 'movie',
        genres: ['adventure', 'fantasy', 'family'],
        rating: 8.0,
        year: 2010,
        episodes: 1,
        poster: 'img/secret.jpg',
        description: 'The Clock family are tiny people who live anonymously in another family\'s residence, borrowing simple items to make their home. But when their daughter Arrietty is discovered, their existence is threatened.',
        isNew: false
    },
    {
        id: 'porco-rosso',
        title: 'Porco Rosso',
        type: 'movie',
        genres: ['adventure', 'drama', 'romance'],
        rating: 8.1,
        year: 1992,
        episodes: 1,
        poster: 'img/porco.jpg',
        description: 'In 1930s Italy, a veteran World War I pilot is cursed to look like an anthropomorphic pig and makes a living fighting air pirates.',
        isNew: false
    },
    {
  id: 'naruto-the-last',
  title: 'The Last: Naruto the Movie',
  type: 'movie',
  genres: ['action', 'romance', 'fantasy'],
  rating: 8.0,
  year: 2014,
  episodes: 1,
  poster: 'img/narutol.jpg',
  description: 'Two years after the Fourth Great Ninja War, Naruto must rescue Hinata’s sister Hanabi and stop the moon from colliding with Earth, while finally confronting his true feelings for Hinata.',
  isNew: false
},
    {
        id: 'ocean-waves',
        title: 'Ocean Waves',
        type: 'movie',
        genres: ['drama', 'romance', 'slice-of-life'],
        rating: 7.2,
        year: 1993,
        episodes: 1,
        poster: 'img/waves.jpg',
        description: 'A love triangle develops between two best friends and a new girl who transfers to their school.',
        isNew: false
    },
    {
        id: 'whisper-of-the-heart',
        title: 'Whisper of the Heart',
        type: 'movie',
        genres: ['drama', 'romance', 'slice-of-life'],
        rating: 8.2,
        year: 1995,
        episodes: 1,
        poster: 'img/whisper.jpg',
        description: 'A lovesick junior high school student discovers her true talent and finds inspiration while writing a novel and chasing a dream.',
        isNew: false
    },
    {
        id: 'pom-poko',
        title: 'Pom Poko',
        type: 'movie',
        genres: ['adventure', 'comedy', 'fantasy'],
        rating: 7.7,
        year: 1994,
        episodes: 1,
        poster: 'img/pomoko.jpg',
        description: 'A community of tanuki (raccoon dogs) use their shape-shifting powers to defend their forest home from urban development.',
        isNew: false
    },
    {
        id: 'my-youth-romance-is-wrong-as-i-expected',
        title: 'The Movie: My Youth Romantic Comedy Is Wrong As I Expected',
        type: 'movie',
        genres: ['drama', 'romance', 'comedy'],
        rating: 8.5,
        year: 2018,
        episodes: 1,
        poster: 'img/myteen.jpg',
        description: 'Hachiman, Yukino, and Yui go on a school trip to Kyoto where they must confront their complicated feelings for each other.',
        isNew: false
    },
    {
        id: 'the-anthem-of-the-heart',
        title: 'The Anthem of the Heart',
        type: 'movie',
        genres: ['drama', 'romance'],
        rating: 8.0,
        year: 2015,
        episodes: 1,
        poster: 'img/heart.jpg',
        description: 'A young girl who was cursed by a fairy to never be able to speak again finds her voice through music and a school musical production.',
        isNew: false
    },
    {
        id: 'liz-and-the-blue-bird',
        title: 'Liz and the Blue Bird',
        type: 'movie',
        genres: ['drama', 'music', 'slice-of-life'],
        rating: 8.2,
        year: 2018,
        episodes: 1,
        poster: 'img/liz.jpg',
        description: 'The delicate relationship between two high school girls who are best friends is explored through their final musical performance together.',
        isNew: false
    },
    {
        id: 'a-whisker-away',
        title: 'A Whisker Away',
        type: 'movie',
        genres: ['drama', 'fantasy', 'romance'],
        rating: 7.8,
        year: 2020,
        episodes: 1,
        poster: 'img/whisker.jpg',
        description: 'A peculiar girl transforms into a cat to catch her crush\'s attention. But she may soon learn the dangers of pretending to be something you\'re not.',
        isNew: false
    },
    {
        id: 'words-bubble-up-like-soda-pop',
        title: 'Words Bubble Up Like Soda Pop',
        type: 'movie',
        genres: ['drama', 'romance'],
        rating: 7.7,
        year: 2021,
        episodes: 1,
        poster: 'img/words.jpg',
        description: 'A shy boy who expresses himself through haiku and a bubbly girl who hides behind a mask meet one summer and change each other\'s lives.',
        isNew: false
    },
    {
        id: 'fortune-favors-lady-nikkuko',
        title: 'Fortune Favors Lady Nikuko',
        type: 'movie',
        genres: ['drama', 'comedy', 'slice-of-life'],
        rating: 7.8,
        year: 2021,
        episodes: 1,
        poster: 'img/nikuku.jpg',
        description: 'The story follows a bright young girl named Kikuko and her mother Nikuko, who live on a boat in a harbor town.',
        isNew: false
    },
    {
        id: 'the-night-is-short-walk-on-girl',
        title: 'The Night is Short, Walk on Girl',
        type: 'movie',
        genres: ['comedy', 'fantasy', 'romance'],
        rating: 8.1,
        year: 2017,
        episodes: 1,
        poster: 'img/night.jpg',
        description: 'A college student goes on a surreal, all-night adventure through Kyoto as her senpai tries increasingly elaborate schemes to get her to notice him.',
        isNew: false
    },
    {
        id: 'inu-oh',
        title: 'Inu-Oh',
        type: 'movie',
        genres: ['drama', 'historical', 'music'],
        rating: 7.8,
        year: 2021,
        episodes: 1,
        poster: 'img/inu-oh.jpg',
        description: 'The story of a 14th-century Japanese dancer and a musician who rise to stardom while confronting a dark curse.',
        isNew: false
    },
    {
  id: 'attack-on-titan-chronicle',
  title: 'Attack on Titan: Chronicle',
  type: 'movie',
  genres: ['action', 'drama', 'dark fantasy'],
  rating: 8.5,
  year: 2020,
  episodes: 1,
  poster: 'img/last.jpg',
  description: 'A compilation film that recaps the first three seasons of Attack on Titan, detailing humanity’s desperate struggle against the Titans and Eren Yeager’s journey for freedom.',
  isNew: false
},
    {
        id: 'the-first-slam-dunk',
        title: 'The First Slam Dunk',
        type: 'movie',
        genres: ['sports', 'drama'],
        rating: 8.7,
        year: 2022,
        episodes: 1,
        poster: 'img/slam.jpg',
        description: 'A new story focusing on Ryota Miyagi and his journey with the Shohoku High School basketball team.',
        isNew: false
    },
    {
        id: 'suzume',
        title: 'Suzume',
        type: 'movie',
        genres: ['adventure', 'drama', 'fantasy'],
        rating: 8.3,
        year: 2022,
        episodes: 1,
        poster: 'img/suzume.jpg',
        description: 'A 17-year-old girl must team up with a mysterious young man to prevent disasters across Japan by closing mysterious doors.',
        isNew: false
    },
    {
        id: 'blue-giant',
        title: 'Blue Giant',
        type: 'movie',
        genres: ['drama', 'music'],
        rating: 8.6,
        year: 2023,
        episodes: 1,
        poster: 'img/bllue.jpg',
        description: 'A passionate young man dedicates his life to becoming the world\'s greatest jazz saxophonist.',
        isNew: true
    },
    {
        id: 'the-yokai-family',
        title: 'The Yokai Family',
        type: 'movie',
        genres: ['fantasy', 'family', 'adventure'],
        rating: 7.9,
        year: 2023,
        episodes: 1,
        poster: 'img/unknown-34.jpg',
        description: 'A human boy moves in with his eccentric yokai relatives and discovers a magical world hidden within his new home.',
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