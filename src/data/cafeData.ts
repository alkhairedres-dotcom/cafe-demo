export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'brunch' | 'bakery' | 'drinks';
  price: number;
  description: string;
  notes?: string;
  tags?: string[];
  signature?: boolean;
  dietary?: string[];
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  quote: string;
  source: string;
  date: string;
}

export interface CoffeeOrigin {
  id: string;
  name: string;
  region: string;
  altitude: string;
  process: string;
  notes: string[];
  roastLevel: string;
  bestBrew: string;
  recommendedAudPrice: number;
}

export const COFFEE_ORIGINS: CoffeeOrigin[] = [
  {
    id: 'ethiopia-guji',
    name: 'Guji Highlands Micro-Lot',
    region: 'Oromia, Ethiopia',
    altitude: '2,100m MASL',
    process: 'Natural Anaerobic 72h',
    notes: ['Jasmine Florals', 'Wild Peach', 'Bergamot Citrus'],
    roastLevel: 'Light Filter',
    bestBrew: 'Hario V60 / Batch Brew',
    recommendedAudPrice: 28.0,
  },
  {
    id: 'colombia-huila',
    name: 'Huila Pink Bourbon',
    region: 'Acevedo, Colombia',
    altitude: '1,850m MASL',
    process: 'Double Washed',
    notes: ['Panela Sugar', 'Blood Orange', 'Dark Cocoa'],
    roastLevel: 'Omni Roast',
    bestBrew: 'Espresso / Aeropress',
    recommendedAudPrice: 26.5,
  },
  {
    id: 'laneway-house-blend',
    name: 'Melbourne Laneway Blend',
    region: 'Brazil Cerrado & Guatemala Antigua',
    altitude: '1,400 - 1,700m',
    process: 'Pulped Natural & Washed',
    notes: ['Salted Caramel', 'Roasted Hazelnut', 'Silky Chocolate Crema'],
    roastLevel: 'Medium Roast',
    bestBrew: 'Flat White / Magic',
    recommendedAudPrice: 22.0,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Artisan Coffee Bar
  {
    id: 'c1',
    name: 'Melbourne Magic',
    category: 'coffee',
    price: 5.5,
    description: 'Double ristretto with three-quarter flat white silky steamed milk in an artisanal ceramic tulip cup.',
    notes: 'Intense sweet extraction, signature Melbourne creation',
    signature: true,
    dietary: ['Dairy', 'Oat / Soy / Almond +0.80'],
  },
  {
    id: 'c2',
    name: 'Single Origin Pour Over (Hario V60)',
    category: 'coffee',
    price: 8.5,
    description: 'Rotating micro-lot hand-poured at 93°C. Served alongside origin card and cupping notes.',
    notes: 'Clean, tea-like clarity with floral sweetness',
    signature: true,
    dietary: ['Vegan', 'Gluten-Free'],
  },
  {
    id: 'c3',
    name: 'Micro-Lot Batch Brew (Ever-Changing)',
    category: 'coffee',
    price: 6.0,
    description: 'Filtered through gold-tone Moccamaster, thermal carafe fresh every 30 minutes.',
    notes: 'Effortless, layered complexity for filter purists',
    dietary: ['Vegan', 'Gluten-Free'],
  },
  {
    id: 'c4',
    name: '18-Hour Slow Cold Drip',
    category: 'coffee',
    price: 7.5,
    description: 'Ice-water extraction dripping through single-origin Ethiopian grounds over pure crystalline ice sphere.',
    notes: 'Whiskey-like clarity, ripe berry finish',
    signature: true,
    dietary: ['Vegan', 'Gluten-Free'],
  },
  {
    id: 'c5',
    name: 'Espresso Flight (Deconstructed Duo)',
    category: 'coffee',
    price: 11.0,
    description: 'Single-origin espresso shot alongside a piccolo milk pairing and sparkling mineral water palate cleanser.',
    notes: 'The ultimate barista tasting experience',
    signature: true,
    dietary: ['Dairy / Alt Milk'],
  },
  {
    id: 'c6',
    name: 'Classic Flat White / Latte',
    category: 'coffee',
    price: 5.2,
    description: 'Extracted on our custom Synesso MVP with St David Dairy organic milk from regional Victoria.',
    notes: 'Velvety micro-foam with rich espresso heart',
    dietary: ['Dairy', 'Oat / Almond / Soy +0.80'],
  },

  // All-Day Brunch Classics
  {
    id: 'b1',
    name: 'St Ali Chilli Scrambled Eggs',
    category: 'brunch',
    price: 26.5,
    description: 'Silky free-range eggs folded with house crispy chili crisp, whipped Meredith goat curd, scallions, and fresh herbs on toasted Baker D. Chirico sourdough.',
    notes: 'Our cult-favorite staple since day one',
    signature: true,
    dietary: ['Vegetarian', 'Gluten-Free Opt +3.00'],
  },
  {
    id: 'b2',
    name: 'Heritage Smashed Avocado & Finger Lime',
    category: 'brunch',
    price: 24.0,
    description: 'Crushed Hass avocado on grilled seeded sourdough, whipped sheep labneh, native finger lime pearls, toasted pepitas, and cold-pressed olive oil.',
    notes: 'Fresh, zesty Melbourne morning perfection',
    dietary: ['Vegetarian', 'Vegan Opt', 'Gluten-Free Opt +3.00'],
  },
  {
    id: 'b3',
    name: '14-Hour Braised Brisket Benny',
    category: 'brunch',
    price: 28.5,
    description: 'Smoked Victorian beef brisket on crispy potato rosti, two poached pasture-raised eggs, apple cider vinegar hollandaise, and house pickled shallots.',
    notes: 'Hearty, melt-in-your-mouth savory luxury',
    signature: true,
    dietary: ['Gluten-Free'],
  },
  {
    id: 'b4',
    name: 'Soufflé Ricotta Hotcakes',
    category: 'brunch',
    price: 25.0,
    description: 'Fluffy baked ricotta hotcake adorned with seasonal poached rhubarb, whipped mascarpone, candied macadamias, and pure Yarra Valley ironbark honeycomb.',
    notes: 'Takes 15 min to bake fresh to order',
    signature: true,
    dietary: ['Vegetarian'],
  },
  {
    id: 'b5',
    name: 'Melbourne Laneway Brekkie Roll',
    category: 'brunch',
    price: 19.5,
    description: 'Free-range smoked bacon, fried duck egg, aged cheddar, tomato chili relish, and wild rocket in a toasted brioche bun.',
    notes: 'Pairs ideally with a double flat white',
    dietary: ['Dairy'],
  },
  {
    id: 'b6',
    name: 'Wild Forest Mushroom Tartine',
    category: 'brunch',
    price: 25.5,
    description: 'Pan-seared pine mushrooms and king oyster mushrooms with garlic thyme butter, cashew truffle creme, and shaved Pecorino on grilled rye.',
    notes: 'Earthy, fragrant, and deeply comforting',
    dietary: ['Vegetarian', 'Vegan Opt'],
  },

  // Bakery & Artisanal Pastries
  {
    id: 'p1',
    name: 'Cult French Butter Croissant',
    category: 'bakery',
    price: 7.2,
    description: 'Slow-laminated Normandy butter croissant, baked golden with honeycomb air pockets and a light flake.',
    notes: 'Delivered fresh at 6:30am daily',
    dietary: ['Vegetarian'],
  },
  {
    id: 'p2',
    name: 'Twice-Baked Almond & Frangipane Croissant',
    category: 'bakery',
    price: 9.5,
    description: 'Soaked in orange blossom syrup, filled with roasted almond frangipane and topped with toasted almond flakes.',
    notes: 'Crispy outer shell with moist almond heart',
    signature: true,
    dietary: ['Vegetarian', 'Contains Nuts'],
  },
  {
    id: 'p3',
    name: 'Valrhona Dark Chocolate Babka Knot',
    category: 'bakery',
    price: 8.5,
    description: 'Braided brioche ribboned with 70% dark Valrhona chocolate, sea salt flakes, and cardamom syrup.',
    notes: 'Rich and decadent morning treat',
    dietary: ['Vegetarian'],
  },
  {
    id: 'p4',
    name: 'Native Wattle Seed & Cardamom Cannelé',
    category: 'bakery',
    price: 6.5,
    description: 'Caramelized crunchy beeswax crust with a soft custard center infused with native Australian wattle seed.',
    notes: 'Traditional Bordeaux technique meets native botanicals',
    dietary: ['Vegetarian'],
  },

  // Specialty Drinks & Refreshers
  {
    id: 'd1',
    name: 'House Cascara Sparkling Spritz',
    category: 'drinks',
    price: 8.0,
    description: 'Brewed dried coffee cherry tea infused with fresh ruby grapefruit juice, native lemon myrtle, and soda water.',
    notes: 'Low-caffeine, effervescent, antioxidant-rich',
    signature: true,
    dietary: ['Vegan', 'Gluten-Free'],
  },
  {
    id: 'd2',
    name: 'Single Origin Stone-Ground Matcha Latte',
    category: 'drinks',
    price: 7.5,
    description: 'Ceremonial grade Uji matcha whisked with warm oat milk and a hint of local raw blossom honey.',
    notes: 'Vibrant jade color, umami finish',
    dietary: ['Vegetarian', 'Dairy-Free'],
  },
  {
    id: 'd3',
    name: 'Sticky Prana Chai (Brewed on Soy)',
    category: 'drinks',
    price: 7.0,
    description: 'Handcrafted wet chai with whole spices and raw bush honey, simmered gently in Bonsoy milk.',
    notes: 'Warming, authentic Victorian chai ritual',
    dietary: ['Vegetarian'],
  },
  {
    id: 'd4',
    name: 'Cold-Pressed Green Tonic',
    category: 'drinks',
    price: 9.0,
    description: 'Granny Smith apple, kale, celery, cucumber, ginger root, and fresh lime juice.',
    notes: 'Unpasteurized and bottled fresh each dawn',
    dietary: ['Vegan', 'Gluten-Free'],
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Elena Rostova',
    role: 'Food & Coffee Columnist',
    source: 'The Melbourne Broadsheet',
    rating: 5,
    quote: 'St Ali is where Melbourne’s specialty coffee identity was forged. The Chilli Scramble remains unchallenged across the southern hemisphere, and their Guji pour over is a revelation of floral balance.',
    date: 'October 2026',
  },
  {
    id: 'r2',
    author: 'Marcus Vance',
    role: 'Q-Grader & Roaster',
    source: 'World Coffee Chronicle',
    rating: 5,
    quote: 'From the cast-iron vintage roaster humming in the background to the surgical precision of their espresso extractions, St Ali sets the benchmark that cafes worldwide still strive to emulate.',
    date: 'September 2026',
  },
  {
    id: 'r3',
    author: 'Sophie & Liam T.',
    role: 'South Melbourne Locals',
    source: 'Google Verified Patron',
    rating: 5,
    quote: 'Our unmissable Saturday ritual for seven years. The industrial warehouse atmosphere is warm and welcoming, the waitstaff know our names, and the brisket benny is transcendent.',
    date: 'October 2026',
  },
  {
    id: 'r4',
    author: 'Julian Thorne',
    role: 'Architectural Digest Australia',
    source: 'Good Food Guide 2026',
    rating: 5,
    quote: 'Exposed weathered red brick, solid ironbark timber, and the sweet aroma of roasting beans. It is the purest distillation of Melbourne laneway hospitality done with effortless swagger.',
    date: 'August 2026',
  },
];
