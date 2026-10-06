export const categories = [
  {
    id: "cakes",
    name: "Cakes",
    slug: "Cakes",
    description: "Celebration-ready handcrafted cakes with velvety frostings and artisan sponges.",
    itemCount: 5,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    tagline: "Celebrate sweet milestones"
  },
  {
    id: "pastries",
    name: "Pastries",
    slug: "Pastries",
    description: "Mille-feuille, éclairs, and fruit tarts laminated with pure cultured butter.",
    itemCount: 4,
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80",
    tagline: "Delicate Parisian layers"
  },
  {
    id: "cookies",
    name: "Cookies",
    slug: "Cookies",
    description: "Crisp golden edges with soft, chewy centers and rich melted chocolate chunks.",
    itemCount: 4,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    tagline: "Warm, buttery comfort"
  },
  {
    id: "breads",
    name: "Breads",
    slug: "Breads",
    description: "Slow-fermented sourdoughs, brioche buns, and classic artisan loaves.",
    itemCount: 4,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    tagline: "Crusty artisan loaves"
  },
  {
    id: "desserts",
    name: "Desserts",
    slug: "Desserts",
    description: "Silky chocolate mousses, creamy cheesecakes, and Italian tiramisu.",
    itemCount: 4,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    tagline: "Decadent indulgences"
  }
];

export const products = [
  // CAKES (1-5)
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    category: "Cakes",
    description: "Decadent dark Belgian chocolate ganache layered with moist cocoa sponge.",
    longDescription: "Our signature masterpiece. Crafted using 70% single-origin Belgian dark chocolate, layered between melt-in-the-mouth cocoa sponge and glazed with a glossy mirror ganache. Perfectly balanced richness without overwhelming sweetness.",
    price: 750,
    rating: 4.9,
    reviews: 248,
    popularity: 98,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Belgian Dark Chocolate (70%)", "Fresh Dairy Cream", "Dutch Cocoa Powder", "Organic Flour", "Pure Madagascar Vanilla"],
    available: true,
    isBestSeller: true,
    weight: "500g / 1kg"
  },
  {
    id: 2,
    name: "Red Velvet Cake",
    category: "Cakes",
    description: "Crimson cocoa sponge layered with silky Philadelphia cream cheese frosting.",
    longDescription: "A timeless classic with a velvet texture and mild hint of cocoa. Sandwiched and crowned with authentic Philadelphia cream cheese frosting, topped with ruby sponge crumbs and edible dried rose petals.",
    price: 820,
    rating: 4.8,
    reviews: 195,
    popularity: 94,
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Philadelphia Cream Cheese", "Cultured Buttermilk", "Organic Wheat Flour", "Natural Cocoa", "Pure Butter"],
    available: true,
    isBestSeller: true,
    weight: "500g / 1kg"
  },
  {
    id: 3,
    name: "Black Forest Cake",
    category: "Cakes",
    description: "Fluffy chocolate sponge with Tart Kirsch-infused cherries and fresh whipped cream.",
    longDescription: "Authentic German Black Forest recipe featuring light-as-air chocolate sponge soaked in tart cherry compote, layered with cloud-like dairy whipped cream and shaved Belgian chocolate curls.",
    price: 680,
    rating: 4.7,
    reviews: 162,
    popularity: 88,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Fresh Dark Cherries", "Whipping Cream", "Dark Chocolate Curls", "Cocoa Sponge", "Vanilla Pod"],
    available: true,
    isBestSeller: false,
    weight: "500g / 1kg"
  },
  {
    id: 4,
    name: "Vanilla Celebration Cake",
    category: "Cakes",
    description: "Tender bourbon vanilla sponge enveloped in French buttercream and golden pearls.",
    longDescription: "Made with genuine Bourbon vanilla bean caviar. Exceptionally soft and tender crumb, kissed with French mousseline buttercream and handcrafted golden sugar pearls. An ode to classic baking.",
    price: 650,
    rating: 4.8,
    reviews: 140,
    popularity: 85,
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Bourbon Vanilla Beans", "Unsalted French Butter", "Cane Sugar", "Pastry Flour", "Farm Eggs"],
    available: true,
    isBestSeller: false,
    weight: "500g / 1kg"
  },
  {
    id: 5,
    name: "Butterscotch Cake",
    category: "Cakes",
    description: "Brown butter sponge with homemade praline crunch and caramel drizzle.",
    longDescription: "Slow-simmered caramel butterscotch sauce folded into whipped cream and layered with nutty caramelized cashew praline crunch for that irresistible contrast of textures in every bite.",
    price: 690,
    rating: 4.9,
    reviews: 180,
    popularity: 91,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Cashew Praline", "Caramelized Brown Sugar", "Fresh Cream", "Cultured Butter", "Soft Sponge"],
    available: true,
    isBestSeller: true,
    weight: "500g / 1kg"
  },

  // PASTRIES (6-9)
  {
    id: 6,
    name: "Chocolate Pastry",
    category: "Pastries",
    description: "Single-origin dark chocolate slice topped with gold leaf and silky glaze.",
    longDescription: "An individual slice of pure luxury. Triple-layered chocolate génoise sponge filled with satin dark chocolate crème and finished with a mirror glaze and delicate gold leaf flake.",
    price: 180,
    rating: 4.8,
    reviews: 130,
    popularity: 93,
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Valrhona Chocolate", "Fresh Heavy Cream", "Dutch Cocoa", "Butter Biscuit Base"],
    available: true,
    isBestSeller: true,
    weight: "1 slice (~120g)"
  },
  {
    id: 7,
    name: "Strawberry Pastry",
    category: "Pastries",
    description: "Light sponge layered with fresh Mahabaleshwar strawberry coulis and chantilly.",
    longDescription: "Bursting with seasonal brightness! Prepared with real farm-fresh strawberries cooked into an artisanal compote, layered over light génoise sponge and whipped vanilla mascarpone.",
    price: 210,
    rating: 4.7,
    reviews: 112,
    popularity: 87,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Fresh Strawberries", "Mascarpone Cheese", "Vanilla Sponge", "Strawberry Coulis"],
    available: true,
    isBestSeller: false,
    weight: "1 slice (~130g)"
  },
  {
    id: 8,
    name: "Vanilla Pastry",
    category: "Pastries",
    description: "Choux pastry filled with Tahitian vanilla bean pastry cream and powdered sugar.",
    longDescription: "Fluffy, delicate French choux pastry buns filled to bursting with authentic chilled Tahitian vanilla diplomate cream, finished with a generous dusting of snow sugar.",
    price: 160,
    rating: 4.6,
    reviews: 88,
    popularity: 79,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Tahitian Vanilla", "Choux Pastry Dough", "Custard Cream", "Powdered Sugar"],
    available: true,
    isBestSeller: false,
    weight: "1 piece (~110g)"
  },
  {
    id: 9,
    name: "Caramel Pastry",
    category: "Pastries",
    description: "Crisp tartlet filled with salted butter caramel and milk chocolate mousse.",
    longDescription: "Hand-pressed butter pastry shell filled with salted fleur de sel caramel that oozes gracefully, crowned with a silky milk chocolate quenelle and roasted pecan pieces.",
    price: 195,
    rating: 4.9,
    reviews: 145,
    popularity: 92,
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Fleur de Sel Sea Salt", "Artisan Caramel", "Milk Chocolate Ganache", "Shortcrust Pastry"],
    available: true,
    isBestSeller: true,
    weight: "1 slice (~125g)"
  },

  // COOKIES (10-13)
  {
    id: 10,
    name: "Chocolate Chip Cookies",
    category: "Cookies",
    description: "Classic New York-style thick cookies packed with gooey semi-sweet chocolate chunks.",
    longDescription: "Crispy on the perimeter with a gloriously soft, chewy center. Packed generously with Belgian semi-sweet chocolate pools and sprinkled with Maldon sea salt flakes right out of the oven.",
    price: 240,
    rating: 4.9,
    reviews: 310,
    popularity: 99,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Belgian Chocolate Chunks", "Brown Cane Sugar", "Grass-fed Butter", "Organic Flour", "Maldon Sea Salt"],
    available: true,
    isBestSeller: true,
    weight: "Box of 6 (~300g)"
  },
  {
    id: 11,
    name: "Butter Cookies",
    category: "Cookies",
    description: "Traditional melt-in-mouth Danish style butter swirls baked with slow churned butter.",
    longDescription: "Crafted with 82% fat slow-churned butter and pure cane sugar. Delicately piped into golden swirls that dissolve on your tongue with an authentic buttery aroma.",
    price: 220,
    rating: 4.7,
    reviews: 175,
    popularity: 84,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Slow-Churned Butter", "Wheat Flour", "Castor Sugar", "Pure Vanilla Extract"],
    available: true,
    isBestSeller: false,
    weight: "Box of 8 (~250g)"
  },
  {
    id: 12,
    name: "Double Chocolate Cookies",
    category: "Cookies",
    description: "Fudge-like dark cocoa cookies loaded with white and dark chocolate chips.",
    longDescription: "For passionate chocoholics. Intense black cocoa base baked to a brownie-like chewiness, packed with twin pools of velvety white chocolate and 55% dark chocolate chips.",
    price: 260,
    rating: 4.8,
    reviews: 198,
    popularity: 95,
    image: "https://images.unsplash.com/photo-1618923834413-2770b904ee10?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Black Cocoa Powder", "White Chocolate Chunks", "Dark Chocolate Chips", "Pure Butter", "Brown Sugar"],
    available: true,
    isBestSeller: true,
    weight: "Box of 6 (~300g)"
  },
  {
    id: 13,
    name: "Almond Cookies",
    category: "Cookies",
    description: "Crunchy roasted Californian almond flakes folded into aromatic shortbread.",
    longDescription: "Gently toasted Californian almond slivers blended into fragrant buttery shortbread with a whisper of almond liqueur and cardamom notes. Perfect tea-time companion.",
    price: 280,
    rating: 4.6,
    reviews: 120,
    popularity: 81,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Roasted Almond Flakes", "Almond Flour", "Cultured Butter", "Sugar Cane", "Cardamom"],
    available: true,
    isBestSeller: false,
    weight: "Box of 6 (~280g)"
  },

  // BREADS (14-17)
  {
    id: 14,
    name: "Milk Bread",
    category: "Breads",
    description: "Ultra-soft Japanese Hokkaido milk bread loaf with a pillowy cotton-candy crumb.",
    longDescription: "Baked using the traditional Japanese Yudane/Tangzhong technique for unparalleled softness that stays fresh for days. Silky, slightly sweet, and unbelievably tender.",
    price: 90,
    rating: 4.8,
    reviews: 215,
    popularity: 90,
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Whole Cow Milk", "Tangzhong Starter", "High-Protein Bread Flour", "Pure Butter", "Yeast"],
    available: true,
    isBestSeller: false,
    weight: "1 Loaf (~400g)"
  },
  {
    id: 15,
    name: "Garlic Bread",
    category: "Breads",
    description: "Artisan sourdough baguette infused with roasted garlic confit and garden parsley butter.",
    longDescription: "Crusty baguette scored and lathered with slow-roasted garlic confit butter, freshly chopped parsley, and a pinch of cracked black pepper. Crisp crust with an herb-scented interior.",
    price: 130,
    rating: 4.7,
    reviews: 165,
    popularity: 86,
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Roasted Garlic Confit", "Fresh Italian Parsley", "Cultured Salted Butter", "Artisan Baguette Dough"],
    available: true,
    isBestSeller: false,
    weight: "1 Baguette (~350g)"
  },
  {
    id: 16,
    name: "Croissant",
    category: "Breads",
    description: "Hand-rolled French all-butter croissant with honeycomb interior and shattering golden crust.",
    longDescription: "Crafted over a rigorous 3-day lamination process using imported French butter. Boasts 27 gossamer-thin layers that shatter delicately with every bite, revealing an airy, buttery honeycomb web.",
    price: 140,
    rating: 4.9,
    reviews: 290,
    popularity: 97,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    ingredients: ["AOP French Butter (84% fat)", "Organic Flour T55", "Sourdough Levain", "Mineral Water", "Sea Salt"],
    available: true,
    isBestSeller: true,
    weight: "Pack of 2 (~180g)"
  },
  {
    id: 17,
    name: "Multigrain Bread",
    category: "Breads",
    description: "Wholesome sourdough loaf encrusted with flax, sunflower, chia, and pumpkin seeds.",
    longDescription: "Naturally fermented for 24 hours without commercial additives. Packed with ancient grains, rolled oats, toasted sesame, pumpkin, and sunflower seeds for a deep, nutty complexity and superior nutrition.",
    price: 120,
    rating: 4.6,
    reviews: 110,
    popularity: 80,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Whole Wheat Flour", "Rye Starter", "Flaxseeds", "Pumpkin Seeds", "Chia Seeds", "Rolled Oats"],
    available: true,
    isBestSeller: false,
    weight: "1 Loaf (~450g)"
  },

  // DESSERTS (18-21)
  {
    id: 18,
    name: "Brownie",
    category: "Desserts",
    description: "Rich, fudgy Belgian dark chocolate brownie with a paper-thin crinkly top crust.",
    longDescription: "Dense, gooey, and unapologetically fudgy. Baked using pure 70% dark chocolate and European butter. Features the coveted shiny crackled top and intense cocoa depth.",
    price: 150,
    rating: 4.9,
    reviews: 275,
    popularity: 96,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Belgian Dark Chocolate", "European Butter", "Raw Brown Sugar", "Cocoa Powder", "Sea Salt"],
    available: true,
    isBestSeller: true,
    weight: "Pack of 2 (~200g)"
  },
  {
    id: 19,
    name: "Chocolate Mousse",
    category: "Desserts",
    description: "Airy, velvety chocolate mousse topped with Chantilly cream and chocolate curls.",
    longDescription: "Silky French chocolate mousse whipped to cloud-like perfection. Light yet intensely chocolaty, served chilled in a glass jar with a dollop of fresh vanilla Chantilly and shaved curls.",
    price: 170,
    rating: 4.8,
    reviews: 142,
    popularity: 89,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Dark Chocolate 64%", "Heavy Cream", "Organic Eggs", "Espresso Reduction", "Vanilla"],
    available: true,
    isBestSeller: false,
    weight: "Jar (~150ml)"
  },
  {
    id: 20,
    name: "Cheesecake",
    category: "Desserts",
    description: "Authentic New York baked cheesecake on a graham cracker crust with berry compote.",
    longDescription: "Slowly baked in a gentle water bath for a velvety, dense, and creamy consistency. Rests upon a spiced graham cracker butter crust and is crowned with house-made wild berry compote.",
    price: 250,
    rating: 4.9,
    reviews: 220,
    popularity: 95,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Cream Cheese", "Graham Cracker Crumbs", "Sour Cream", "Wild Berry Compote", "Butter"],
    available: true,
    isBestSeller: true,
    weight: "1 slice (~150g)"
  },
  {
    id: 21,
    name: "Tiramisu",
    category: "Desserts",
    description: "Espresso-soaked ladyfingers layered with zabaione cream and dusted with bitter cocoa.",
    longDescription: "The crown jewel of Italian desserts. Light Savoiardi sponge ladyfingers drenched in freshly brewed dark roast espresso, layered between whipped mascarpone cream and dusted with Dutch cocoa.",
    price: 230,
    rating: 4.8,
    reviews: 185,
    popularity: 92,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Italian Mascarpone", "Fresh Roasted Espresso", "Savoiardi Ladyfingers", "Dutch Cocoa Powder"],
    available: true,
    isBestSeller: false,
    weight: "Tub (~180g)"
  }
];

export const fallbackBakeryImage = "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80";

export const testimonials = [
  {
    id: 1,
    name: "Ananya Deshmukh",
    role: "Food & Lifestyle Critic",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "The Chocolate Truffle Cake from Crème & Crust is unlike anything in the city. The crumb is impossibly tender and the chocolate has that deep, silky European nuance. Truly artisanal!",
    favorite: "Chocolate Truffle Cake"
  },
  {
    id: 2,
    name: "Vikram Singhania",
    role: "Culinary Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Their butter croissants rival the best patisseries in Saint-Germain. You can literally hear the 27 layers shatter when you bite in! And their lightning-fast delivery keeps them warm.",
    favorite: "French Butter Croissant"
  },
  {
    id: 3,
    name: "Pooja Hegde",
    role: "Interior Designer & Mother",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Ordered the New York Cheesecake and Red Velvet for our anniversary party. The packaging was immaculate, and every single guest asked where we ordered from. Crème & Crust is now our family bakery!",
    favorite: "New York Cheesecake"
  }
];

export const bakeryFeatures = [
  {
    id: 1,
    title: "Fresh Ingredients",
    description: "100% pure butter, single-origin Belgian chocolate, and stone-ground organic flours. No preservatives ever.",
    icon: "FaLeaf"
  },
  {
    id: 2,
    title: "Made Daily",
    description: "Our ovens fire up at 4:00 AM every morning so your breads and pastries arrive warm and freshly baked.",
    icon: "FaClock"
  },
  {
    id: 3,
    title: "Quality Guaranteed",
    description: "Every delicacy is crafted by master patissiers. If you're not in love with your treat, we make it right.",
    icon: "FaAward"
  },
  {
    id: 4,
    title: "Fast Delivery",
    description: "Carefully packaged in temperature-safe temperature boxes and delivered straight to your doorsteps in under 45 mins.",
    icon: "FaTruck"
  }
];
