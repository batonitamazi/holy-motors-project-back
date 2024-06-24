const mongoose = require('mongoose');
const ProjectScreen = require('../models/ProjectScreen');
const WorkScreen = require('../models/WorkScreen');
const Story = require('../models/Story');

const projectScreens = [
    {
        id: 1,
        title: 'City Mall',
        subtitle: 'City Mall is a shopping destination that brings people together from all walks of life.',
        image: { src: 'assets/projects/slide-01.png', alt: 'city mall' },
        description: [
            'To help visitors find precisely what they are looking for, we doubled down on multiple arrows in the original symbol, updated and expanded them into a navigation-friendly design system.',
            'Typography also got a bold upgrade integrating a custom Georgian adaptation of Pangram typeface.'
        ],
    },
    {
        id: 2,
        title: 'neyco',
        subtitle: 'Out of nothing, a new source of wealth - Neyco shines through.',
        image: { src: 'assets/projects/slide-02.png', alt: 'Neyco' },
        description: [
            'Whether it’s trading cryptocurrencies or pawning your bitcoin wallets to get fastaccess to cash.',
            "Inspired by the eternal Creation of Adam our photo series for Neyco website tries to reframe the struggle between old and new forces, and help the viewers reimagine brand new source of wealth."
        ],
    },
    {
        id: 3,
        title: 'KIND & NOBLE',
        subtitle: 'Out of nothing, if you get tired chewing on your daily fruits and veggies, you can now drink them.',
        image: { src: 'assets/projects/slide-03.png', alt: 'KIND & NOBLE' },
        description: [
            "«Kind and Noble» or [ke-ti-li da pa-ti-o-sa-ni] in our native Georgian language isn't just a name! This noble beverage is made exclusively by mixing fresh fruit and vegetable purees to bring mother nature's kindness to humans in the most convenient form."
        ],
    }
];

const workScreens = [
    {
        id: 1,
        title: 'MEGOBAR - GEORGIAN FOOD SHOP',
        image: { src: 'assets/works/slide-01.png', alt: 'MEGOBAR - GEORGIAN FOOD SHOP' },
        description: [
            'Friendliest food in the neighborhood ',
            'Megobar is a new chain of food shops wish a mission to make delicious Georgian food accessible to everyone around the world. Megobar is a new chain of food shops wish a mission to make delicious Georgian food accessible to everyone around the world. Megobar (mdmn) means "a friend" in Georgian, and originally only referred to people you share a meal with, proving that food and friendship are colossally important to our culture.'
        ],
    },
    {
        id: 2,
        title: 'BLAUENSTEIN FARM',
        image: { src: 'assets/works/slide-02.png', alt: 'BLAUENSTEIN FARM' },
        description: [
            "Blauenstein is a Swiss-Georgian company creating the finest meat products in pristine highlands of Racha, Georgia. With a culture of respect to nature and local traditions, Swiss-trained professionals and an absolute control over the entire chain of production, Blauenstein shops are always full of meat connoisseurs."
        ],
    },
    {
        id: 3,
        title: 'CCLA - LAW CONSULTING AGENCY',
        image: { src: 'assets/works/slide-03.png', alt: 'CCLA - LAW CONSULTING AGENCY' },
        description: [
            "Out of nothing comes the brand new visual identity for CCLA, Tbilisi-based law consulting agency which uses creativity to open right doors for its clients."
        ],
    },
    {
        id: 4,
        title: 'WOMEN FROM THE BAZAAR',
        image: { src: 'assets/works/slide-04.png', alt: 'WOMEN FROM THE BAZAAR' },
        description: [
            "This is not Harper’s Bazaar. The exclusive issue of Women From The Bazaar unites six trader women from Tbilisi's open-air markets. ",
            "In addition to working 70 hours a week, trader women are often synonymous with waist bags, which are used as self-made cash registers. In collaboration with Cosmo, a handmade accessories brand, we decided to launch an extraordinary fashion magazine about universal, everyday fashion."
        ],
    }
];

const storyData = {
    title: 'Story',
    subtitle: "Holy Motors is a holistic design agency helping brands leave their mark on culture.",
    story_description: 'On the first day of April, 3 years ago holistic design agency Holy Motors opened for business.',
    descriptions: [
        'With multidisciplinary teams of designers, developers, strategists, writers, creators, and artists, we work closely with founders and brand owners through all stages of bringing their vision to life.',
        "As most glorious human endeavours often are, Holy Motors was created out of nothing when Georgia’s renowned creative duo Giorgi Avaliani and Nick Kumbari joined their forces to be reborn. Bringing together years of creative and design excellence."
    ]
};

mongoose.connect('mongodb://127.0.0.1:27017/holy_motors_db')
    .then(async () => {
        console.log('Connected to MongoDB');

        await ProjectScreen.deleteMany({});
        await WorkScreen.deleteMany({});
        await Story.deleteMany({});

        await ProjectScreen.insertMany(projectScreens);
        await WorkScreen.insertMany(workScreens);
        await Story.create(storyData);

        console.log('Data successfully inserted');
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
        mongoose.disconnect();
    });
