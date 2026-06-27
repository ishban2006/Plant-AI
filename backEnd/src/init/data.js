const plantData = [
  {
    common: "Bitter Lettuce",
    bota: "Lactuca virosa",
    medB: [
      "Traditionally used as a mild sedative.",
      "Used in herbal medicine to promote sleep.",
      "Historically used to relieve cough and nervous tension."
    ],
    family: "Asteraceae"
  },
  {
    common: "Rose-scented Pelargonium",
    bota: "Pelargonium capitatum",
    medB: [
      "Leaves are traditionally used for minor skin irritations.",
      "Essential oil is used in aromatherapy for relaxation.",
      "Traditionally applied to help soothe inflammation."
    ],
    family: "Geraniaceae"
  },
  {
    common: "Rose Geranium",
    bota: "Pelargonium graveolens",
    medB: [
      "Essential oil is used for skin care.",
      "Traditionally used to reduce stress and anxiety.",
      "Applied in herbal remedies for minor wounds."
    ],
    family: "Geraniaceae"
  },
  {
    common: "Canada Thistle",
    bota: "Cirsium arvense",
    medB: [
      "Traditionally used as a diuretic.",
      "Roots have been used in folk medicine for digestive complaints.",
      "Used in traditional herbal preparations for inflammation."
    ],
    family: "Asteraceae"
  },
  {
    common: "Spear Thistle",
    bota: "Cirsium vulgare",
    medB: [
      "Traditionally applied to minor wounds.",
      "Used in folk medicine for digestive discomfort.",
      "Historically used for mild inflammatory conditions."
    ],
    family: "Asteraceae"
  },
  {
    common: "Apple Geranium",
    bota: "Pelargonium odoratissimum",
    medB: [
      "Leaves are traditionally used in herbal teas.",
      "Used in aromatherapy for relaxation.",
      "Traditionally applied for skin care."
    ],
    family: "Geraniaceae"
  },
  {
    common: "Ivy Geranium",
    bota: "Pelargonium peltatum",
    medB: [
      "Leaves have been used in folk medicine for minor skin ailments.",
      "Traditionally used as a soothing herbal poultice.",
      "Used in ornamental herbal preparations."
    ],
    family: "Geraniaceae"
  },
  {
    common: "Oak-leaved Geranium",
    bota: "Pelargonium quercifolium",
    medB: [
      "Aromatic leaves are used traditionally for respiratory comfort.",
      "Essential oil is valued in herbal preparations.",
      "Traditionally used to freshen indoor air."
    ],
    family: "Geraniaceae"
  },
  {
    common: "Zonal Geranium",
    bota: "Pelargonium zonale",
    medB: [
      "Traditionally applied to minor cuts.",
      "Used in folk remedies for skin care.",
      "Leaves have mild aromatic properties."
    ],
    family: "Geraniaceae"
  },
  {
    common: "Annual Mercury",
    bota: "Mercurialis annua",
    medB: [
      "Historically used as a purgative.",
      "Traditionally used in European folk medicine.",
      "Used cautiously due to its toxic properties."
    ],
    family: "Euphorbiaceae"
  },
  {
    common: "Mascarene Leaf-flower",
    bota: "Phyllanthus tenellus",
    medB: [
      "Traditionally used to support kidney health.",
      "Used in herbal medicine for urinary complaints.",
      "Consumed in folk medicine for digestive wellness."
    ],
    family: "Phyllanthaceae"
  },
  {
    common: "St. John's Wort",
    bota: "Hypericum perforatum",
    medB: [
      "Traditionally used to support mild depression.",
      "Applied to minor burns and wounds.",
      "Used in herbal medicine for nerve discomfort."
    ],
    family: "Hypericaceae"
  },
  {
    common: "Brazilian Waterweed",
    bota: "Egeria densa",
    medB: [
      "Used primarily as an aquatic ornamental plant.",
      "Limited traditional medicinal use has been reported.",
      "Occasionally used in local folk practices."
    ],
    family: "Hydrocharitaceae"
  },
  {
    common: "Devil's Claw",
    bota: "Ibicella lutea",
    medB: [
      "Traditionally used in local folk remedies.",
      "Applied externally for minor skin conditions.",
      "Historically used for inflammation."
    ],
    family: "Martyniaceae"
  },
  {
    common: "Small-leaf Spiderwort",
    bota: "Tradescantia fluminensis",
    medB: [
      "Used traditionally for minor skin irritation.",
      "Applied as a cooling herbal poultice.",
      "Used in folk remedies for insect bites."
    ],
    family: "Commelinaceae"
  },
  {
    common: "Wandering Jew",
    bota: "Tradescantia zebrina",
    medB: [
      "Traditionally used to reduce minor inflammation.",
      "Applied to cuts in folk medicine.",
      "Used as a cooling herbal preparation."
    ],
    family: "Commelinaceae"
  },
  {
    common: "Henbit Deadnettle",
    bota: "Lamium amplexicaule",
    medB: [
      "Traditionally consumed as an edible medicinal herb.",
      "Used in herbal teas for digestive support.",
      "Applied for minor wounds."
    ],
    family: "Lamiaceae"
  },
  {
    common: "Fringed Lavender",
    bota: "Lavandula dentata",
    medB: [
      "Used in aromatherapy for stress relief.",
      "Traditionally used to improve sleep.",
      "Applied in herbal preparations for headaches."
    ],
    family: "Lamiaceae"
  },
  {
    common: "Witchweed",
    bota: "Striga asiatica",
    medB: [
      "Used in some traditional medicinal systems.",
      "Applied in folk remedies for fever.",
      "Traditionally used in small quantities for digestive complaints."
    ],
    family: "Orobanchaceae"
  },
  {
    common: "White Sweet Clover",
    bota: "Melilotus albus",
    medB: [
      "Traditionally used to support circulation.",
      "Used in herbal compresses for swelling.",
      "Applied in folk medicine for varicose veins."
    ],
    family: "Fabaceae"
  },
  {
  common: "Strawberry Clover",
  bota: "Trifolium fragiferum",
  medB: [
    "Traditionally consumed as a nutritious forage herb.",
    "Used in folk medicine for mild digestive support.",
    "Contains antioxidant plant compounds."
  ],
  family: "Fabaceae"
},
{
  common: "Chinese Violet",
  bota: "Asystasia gangetica",
  medB: [
    "Traditionally used for treating wounds.",
    "Used in herbal remedies to reduce inflammation.",
    "Consumed in folk medicine for stomach discomfort."
  ],
  family: "Acanthaceae"
},
{
  common: "Blue Water Lily",
  bota: "Nymphaea nouchali",
  medB: [
    "Traditionally used to reduce fever.",
    "Flowers have been used as a calming herbal remedy.",
    "Applied in Ayurvedic medicine for skin conditions."
  ],
  family: "Nymphaeaceae"
},
{
  common: "Hay-scented Buckler Fern",
  bota: "Dryopteris aemula",
  medB: [
    "Traditionally used as an anthelmintic.",
    "Rhizomes were used in European folk medicine.",
    "Historically used for digestive ailments."
  ],
  family: "Dryopteridaceae"
},
{
  common: "Scaly Male Fern",
  bota: "Dryopteris affinis",
  medB: [
    "Rhizomes were traditionally used against intestinal worms.",
    "Used in historical herbal medicine.",
    "Applied cautiously due to potential toxicity."
  ],
  family: "Dryopteridaceae"
},
{
  common: "Male Fern",
  bota: "Dryopteris filix-mas",
  medB: [
    "Traditionally used as a vermifuge.",
    "Rhizomes were used in European herbal medicine.",
    "Historically employed for digestive disorders."
  ],
  family: "Dryopteridaceae"
},
{
  common: "Tuber Sword Fern",
  bota: "Nephrolepis cordifolia",
  medB: [
    "Traditionally used for cough relief.",
    "Used in folk medicine for fever.",
    "Applied to minor wounds."
  ],
  family: "Nephrolepidaceae"
},
{
  common: "Boston Fern",
  bota: "Nephrolepis exaltata",
  medB: [
    "Used traditionally for skin irritation.",
    "Leaves have been applied as cooling poultices.",
    "Popular in folk remedies for respiratory discomfort."
  ],
  family: "Nephrolepidaceae"
},
{
  common: "Royal Fern",
  bota: "Osmunda regalis",
  medB: [
    "Traditionally used as a blood tonic.",
    "Rhizomes were used in folk remedies for joint pain.",
    "Applied externally for wounds."
  ],
  family: "Osmundaceae"
},
{
  common: "Prickly Chaff Flower",
  bota: "Achyranthes aspera",
  medB: [
    "Used in Ayurveda for cough and asthma.",
    "Traditionally used for wound healing.",
    "Used to support urinary health."
  ],
  family: "Amaranthaceae"
},
{
  common: "Shrubby Gromwell",
  bota: "Lithodora fruticosa",
  medB: [
    "Limited traditional medicinal use.",
    "Occasionally used in regional herbal preparations.",
    "Primarily valued as an ornamental species."
  ],
  family: "Boraginaceae"
},
{
  common: "Common Hop",
  bota: "Humulus lupulus",
  medB: [
    "Traditionally used to improve sleep.",
    "Used for relieving anxiety.",
    "Supports healthy digestion in herbal medicine."
  ],
  family: "Cannabaceae"
},
{
  common: "Cowherb",
  bota: "Vaccaria hispanica",
  medB: [
    "Used in Traditional Chinese Medicine.",
    "Traditionally used to support lactation.",
    "Applied in herbal medicine for improving circulation."
  ],
  family: "Caryophyllaceae"
},
{
  common: "Sand Spurrey",
  bota: "Spergularia rubra",
  medB: [
    "Traditionally used as a mild diuretic.",
    "Used in folk medicine for urinary disorders.",
    "Historically consumed in herbal infusions."
  ],
  family: "Caryophyllaceae"
},
{
  common: "Three-nerved Sandwort",
  bota: "Moehringia trinervia",
  medB: [
    "Occasionally used in European folk medicine.",
    "Traditionally used for minor inflammation.",
    "Limited documented medicinal applications."
  ],
  family: "Caryophyllaceae"
},
{
  common: "Pot Marigold",
  bota: "Calendula officinalis",
  medB: [
    "Widely used for wound healing.",
    "Traditionally applied to soothe skin inflammation.",
    "Used in herbal teas for digestive comfort."
  ],
  family: "Asteraceae"
},
{
  common: "Star Marigold",
  bota: "Calendula stellata",
  medB: [
    "Traditionally used for skin care.",
    "Applied in herbal preparations for inflammation.",
    "Flowers are used in folk medicine."
  ],
  family: "Asteraceae"
},
{
  common: "Blue Safflower",
  bota: "Carthamus caeruleus",
  medB: [
    "Traditionally used to improve circulation.",
    "Used in herbal remedies for inflammation.",
    "Contains antioxidant compounds."
  ],
  family: "Asteraceae"
},
{
  common: "Woolly Distaff Thistle",
  bota: "Carthamus lanatus",
  medB: [
    "Used in Mediterranean folk medicine.",
    "Traditionally applied for minor wounds.",
    "Used for digestive discomfort."
  ],
  family: "Asteraceae"
},
{
  common: "Montpellier Thistle",
  bota: "Cirsium monspessulanum",
  medB: [
    "Traditionally used as a mild diuretic.",
    "Applied in folk medicine for inflammation.",
    "Young leaves have been used as edible greens."
  ],
  family: "Asteraceae"
},
{
  common: "Bristly Oxtongue",
  bota: "Helminthotheca echioides",
  medB: [
    "Traditionally used to soothe minor skin irritations.",
    "Applied in folk medicine for wound care.",
    "Occasionally used as a mild anti-inflammatory herb."
  ],
  family: "Asteraceae"
},
{
  common: "Hyoseris",
  bota: "Hyoseris radiata",
  medB: [
    "Young leaves have been consumed as a medicinal green.",
    "Traditionally used to aid digestion.",
    "Contains antioxidant plant compounds."
  ],
  family: "Asteraceae"
},
{
  common: "Wall Lettuce",
  bota: "Lactuca muralis",
  medB: [
    "Traditionally used as a mild calming herb.",
    "Young leaves have been eaten as a wild vegetable.",
    "Used in folk remedies for digestive discomfort."
  ],
  family: "Asteraceae"
},
{
  common: "Willowleaf Lettuce",
  bota: "Lactuca saligna",
  medB: [
    "Traditionally used as a mild sedative.",
    "Used in folk medicine for cough relief.",
    "Applied in herbal preparations for relaxation."
  ],
  family: "Asteraceae"
},
{
  common: "Slender Lettuce",
  bota: "Lactuca tenerrima",
  medB: [
    "Traditionally used as a cooling herb.",
    "Consumed as a wild edible plant.",
    "Limited use in regional herbal medicine."
  ],
  family: "Asteraceae"
},
{
  common: "Golden Samphire",
  bota: "Limbarda crithmoides",
  medB: [
    "Traditionally used as a digestive herb.",
    "Contains antioxidant phytochemicals.",
    "Consumed as an edible coastal plant."
  ],
  family: "Asteraceae"
},
{
  common: "Goldmoss Stonecrop",
  bota: "Sedum acre",
  medB: [
    "Traditionally applied externally for warts.",
    "Used cautiously because fresh sap can irritate skin.",
    "Historically used in folk medicine for skin conditions."
  ],
  family: "Crassulaceae"
},
{
  common: "White Stonecrop",
  bota: "Sedum album",
  medB: [
    "Applied traditionally to minor wounds.",
    "Used externally for burns in folk medicine.",
    "Historically used for skin irritation."
  ],
  family: "Crassulaceae"
},
{
  common: "Clasping Stonecrop",
  bota: "Sedum amplexicaule",
  medB: [
    "Traditionally used for minor skin ailments.",
    "Applied externally as a soothing poultice.",
    "Limited medicinal documentation exists."
  ],
  family: "Crassulaceae"
},
{
  common: "Tiny Stonecrop",
  bota: "Sedum andegavense",
  medB: [
    "Occasionally used in folk herbal preparations.",
    "Traditionally applied to small wounds.",
    "Limited medicinal evidence is available."
  ],
  family: "Crassulaceae"
},
{
  common: "Short-leaved Stonecrop",
  bota: "Sedum brevifolium",
  medB: [
    "Used traditionally for minor cuts.",
    "Applied externally as a cooling herb.",
    "Limited documented medicinal use."
  ],
  family: "Crassulaceae"
},
{
  common: "Blue Stonecrop",
  bota: "Sedum caeruleum",
  medB: [
    "Traditionally used in regional herbal medicine.",
    "Applied to soothe irritated skin.",
    "Limited pharmacological research exists."
  ],
  family: "Crassulaceae"
},
{
  common: "Dwarf Stonecrop",
  bota: "Sedum caespitosum",
  medB: [
    "Historically used for skin care.",
    "Applied externally to minor wounds.",
    "Limited medicinal applications are documented."
  ],
  family: "Crassulaceae"
},
{
  common: "Tasteless Stonecrop",
  bota: "Sedum cepaea",
  medB: [
    "Used as a traditional cooling herb.",
    "Applied externally for minor burns.",
    "Occasionally included in folk remedies."
  ],
  family: "Crassulaceae"
},
{
  common: "Thick-leaved Stonecrop",
  bota: "Sedum dasyphyllum",
  medB: [
    "Traditionally used for minor skin conditions.",
    "Applied to cuts and abrasions.",
    "Contains succulent tissues used as soothing poultices."
  ],
  family: "Crassulaceae"
},
{
  common: "Rock Stonecrop",
  bota: "Sedum forsterianum",
  medB: [
    "Historically used in European folk medicine.",
    "Applied externally to wounds.",
    "Limited medicinal research is available."
  ],
  family: "Crassulaceae"
},
{
  common: "Hairy Stonecrop",
  bota: "Sedum hirsutum",
  medB: [
    "Traditionally used to soothe skin irritation.",
    "Applied externally for insect bites.",
    "Limited herbal documentation exists."
  ],
  family: "Crassulaceae"
},
{
  common: "Coastal Stonecrop",
  bota: "Sedum litoreum",
  medB: [
    "Used traditionally in coastal folk medicine.",
    "Applied to minor wounds.",
    "Limited medicinal evidence is available."
  ],
  family: "Crassulaceae"
},
{
  common: "Miniature Pine Tree",
  bota: "Sedum multiceps",
  medB: [
    "Primarily cultivated as an ornamental succulent.",
    "Very limited traditional medicinal use.",
    "Occasionally used in local herbal practices."
  ],
  family: "Crassulaceae"
},
{
  common: "Red Stonecrop",
  bota: "Sedum rubens",
  medB: [
    "Traditionally applied to skin irritation.",
    "Used externally for minor wounds.",
    "Limited ethnobotanical records are available."
  ],
  family: "Crassulaceae"
},
{
  common: "Mediterranean Stonecrop",
  bota: "Sedum sediforme",
  medB: [
    "Traditionally applied to minor wounds.",
    "Used as a soothing poultice.",
    "Historically used for skin ailments."
  ],
  family: "Crassulaceae"
},
{
  common: "Garlic Mustard",
  bota: "Alliaria petiolata",
  medB: [
    "Traditionally used for respiratory infections.",
    "Leaves aid digestion in folk medicine.",
    "Applied to minor wounds."
  ],
  family: "Brassicaceae"
},
{
  common: "African Shepherd's Tree",
  bota: "Boscia angustifolia",
  medB: [
    "Used traditionally to treat fever.",
    "Applied for stomach disorders.",
    "Used in African herbal medicine."
  ],
  family: "Capparaceae"
},
{
  common: "Shield Cabbage",
  bota: "Fibigia clypeata",
  medB: [
    "Young leaves are edible.",
    "Limited traditional medicinal use.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Brassicaceae"
},
{
  common: "African Caper",
  bota: "Maerua angolensis",
  medB: [
    "Traditionally used for fever.",
    "Applied for digestive disorders.",
    "Used in indigenous medicine."
  ],
  family: "Capparaceae"
},
{
  common: "Virginia Copperleaf",
  bota: "Acalypha virginica",
  medB: [
    "Traditionally used for skin conditions.",
    "Applied to minor cuts.",
    "Used in folk medicine as a mild herbal remedy."
  ],
  family: "Euphorbiaceae"
},
{
  common: "Dog's Mercury",
  bota: "Mercurialis perennis",
  medB: [
    "Historically used as a purgative.",
    "Used cautiously because of toxicity.",
    "Formerly used in European herbal medicine."
  ],
  family: "Euphorbiaceae"
},
{
  common: "Black Honey Shrub",
  bota: "Phyllanthus reticulatus",
  medB: [
    "Used in Ayurveda for liver support.",
    "Traditionally used for diarrhea.",
    "Applied to inflammatory conditions."
  ],
  family: "Phyllanthaceae"
},
{
  common: "Tutsan",
  bota: "Hypericum androsaemum",
  medB: [
    "Applied to cuts and wounds.",
    "Traditionally used for inflammation.",
    "Used in European herbal medicine."
  ],
  family: "Hypericaceae"
},
{
  common: "St. John's Wort",
  bota: "Hypericum australe",
  medB: [
    "Traditionally used for wound healing.",
    "Used as an herbal tonic.",
    "Contains antioxidant compounds."
  ],
  family: "Hypericaceae"
},
{
  common: "Canary St. John's Wort",
  bota: "Hypericum canariense",
  medB: [
    "Used in traditional medicine for skin care.",
    "Applied to wounds.",
    "Limited pharmacological evidence."
  ],
  family: "Hypericaceae"
},
{
  common: "Rock St. John's Wort",
  bota: "Hypericum empetrifolium",
  medB: [
    "Traditionally used as an antiseptic herb.",
    "Applied to skin irritations.",
    "Used for minor inflammation."
  ],
  family: "Hypericaceae"
},
{
  common: "Aaron's Beard",
  bota: "Hypericum hircinum",
  medB: [
    "Traditionally used for wound healing.",
    "Applied to inflamed skin.",
    "Contains bioactive flavonoids."
  ],
  family: "Hypericaceae"
},
{
  common: "Hairy St. John's Wort",
  bota: "Hypericum hirsutum",
  medB: [
    "Used traditionally for cuts.",
    "Applied to skin infections.",
    "Used in herbal infusions."
  ],
  family: "Hypericaceae"
},
{
  common: "Trailing St. John's Wort",
  bota: "Hypericum humifusum",
  medB: [
    "Traditionally used for wound care.",
    "Applied to burns.",
    "Used as a soothing herb."
  ],
  family: "Hypericaceae"
},
{
  common: "Flax-leaved St. John's Wort",
  bota: "Hypericum linariifolium",
  medB: [
    "Used in traditional herbal medicine.",
    "Applied to skin disorders.",
    "Contains antioxidant constituents."
  ],
  family: "Hypericaceae"
},
{
  common: "Mountain St. John's Wort",
  bota: "Hypericum montanum",
  medB: [
    "Traditionally used as an antiseptic.",
    "Applied to wounds.",
    "Used for minor inflammation."
  ],
  family: "Hypericaceae"
},
{
  common: "Clasping St. John's Wort",
  bota: "Hypericum perfoliatum",
  medB: [
    "Used traditionally for burns.",
    "Applied to cuts.",
    "Used as an herbal antiseptic."
  ],
  family: "Hypericaceae"
},
{
  common: "Square-stemmed St. John's Wort",
  bota: "Hypericum tetrapterum",
  medB: [
    "Traditionally used for wound healing.",
    "Applied externally to skin.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Hypericaceae"
},
{
  common: "Downy St. John's Wort",
  bota: "Hypericum tomentosum",
  medB: [
    "Traditionally used for inflammation.",
    "Applied to skin wounds.",
    "Used in regional herbal medicine."
  ],
  family: "Hypericaceae"
},
{
  common: "Cut-leaved Deadnettle",
  bota: "Lamium bifidum",
  medB: [
    "Traditionally used for wound care.",
    "Used in herbal teas.",
    "Applied for skin irritation."
  ],
  family: "Lamiaceae"
},
{
  common: "Wavy Deadnettle",
  bota: "Lamium flexuosum",
  medB: [
    "Used in folk medicine for inflammation.",
    "Consumed as a medicinal herb.",
    "Applied externally to cuts."
  ],
  family: "Lamiaceae"
},
{
  common: "Gargano Deadnettle",
  bota: "Lamium garganicum",
  medB: [
    "Traditionally used for minor wounds.",
    "Used in herbal infusions.",
    "Applied to inflamed skin."
  ],
  family: "Lamiaceae"
},
{
  common: "Henbit Deadnettle",
  bota: "Lamium hybridum",
  medB: [
    "Used in herbal teas.",
    "Traditionally aids digestion.",
    "Applied to minor wounds."
  ],
  family: "Lamiaceae"
},
{
  common: "Red Deadnettle",
  bota: "Lamium purpureum",
  medB: [
    "Used to stop minor bleeding.",
    "Applied to cuts and scrapes.",
    "Traditionally used as an anti-inflammatory herb."
  ],
  family: "Lamiaceae"
},
{
  common: "Canary Lavender",
  bota: "Lavandula canariensis",
  medB: [
    "Used in aromatherapy.",
    "Traditionally relieves stress.",
    "Applied for headaches."
  ],
  family: "Lamiaceae"
},
{
  common: "Minutoli's Lavender",
  bota: "Lavandula minutolii",
  medB: [
    "Traditionally used as a calming herb.",
    "Essential oil used in aromatherapy.",
    "Limited medicinal studies."
  ],
  family: "Lamiaceae"
},
{
  common: "Fernleaf Lavender",
  bota: "Lavandula multifida",
  medB: [
    "Used traditionally for anxiety.",
    "Applied for headaches.",
    "Used as a mild antiseptic."
  ],
  family: "Lamiaceae"
},
{
  common: "French Lavender",
  bota: "Lavandula stoechas",
  medB: [
    "Traditionally used for headaches.",
    "Used to relieve stress.",
    "Applied for respiratory discomfort."
  ],
  family: "Lamiaceae"
},
{
  common: "Wait-a-bit Thorn",
  bota: "Acacia mellifera",
  medB: [
    "Traditionally used for diarrhea.",
    "Applied to wounds.",
    "Used in African herbal medicine."
  ],
  family: "Fabaceae"
},
{
  common: "Red Acacia",
  bota: "Acacia seyal",
  medB: [
    "Gum is traditionally used to soothe sore throats.",
    "Bark decoctions are used for digestive ailments.",
    "Applied to minor wounds in African folk medicine."
  ],
  family: "Fabaceae"
},
{
  common: "Umbrella Thorn",
  bota: "Acacia tortilis",
  medB: [
    "Bark is traditionally used for diarrhea.",
    "Pods are used in indigenous medicine.",
    "Applied externally for wound healing."
  ],
  family: "Fabaceae"
},
{
  common: "Goat's Rue",
  bota: "Galega officinalis",
  medB: [
    "Traditionally used to support milk production.",
    "Historically used for blood sugar management.",
    "Used as a mild diuretic."
  ],
  family: "Fabaceae"
},
{
  common: "Blue Lupin",
  bota: "Lupinus cosentinii",
  medB: [
    "Seeds have traditional nutritional value.",
    "Limited medicinal applications are reported.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Fabaceae"
},
{
  common: "Small-flowered Lupin",
  bota: "Lupinus micranthus",
  medB: [
    "Traditionally cultivated as a protein-rich legume.",
    "Limited ethnomedicinal use.",
    "Contains beneficial plant proteins."
  ],
  family: "Fabaceae"
},
{
  common: "Italian Sweet Clover",
  bota: "Melilotus italicus",
  medB: [
    "Traditionally supports circulation.",
    "Used in herbal compresses.",
    "Contains natural coumarins."
  ],
  family: "Fabaceae"
},
{
  common: "Grooved Sweet Clover",
  bota: "Melilotus sulcatus",
  medB: [
    "Traditionally used for mild swelling.",
    "Supports circulation in folk medicine.",
    "Contains antioxidant compounds."
  ],
  family: "Fabaceae"
},
{
  common: "Narrow-leaved Clover",
  bota: "Trifolium angustifolium",
  medB: [
    "Consumed as a nutritious forage.",
    "Traditionally used for digestive wellness.",
    "Contains antioxidant flavonoids."
  ],
  family: "Fabaceae"
},
{
  common: "Rabbit-foot Clover",
  bota: "Trifolium arvense",
  medB: [
    "Traditionally used in herbal teas.",
    "Used for mild coughs.",
    "Contains antioxidant compounds."
  ],
  family: "Fabaceae"
},
{
  common: "Golden Clover",
  bota: "Trifolium aureum",
  medB: [
    "Used traditionally as a mild tonic.",
    "Supports digestion in folk medicine.",
    "Rich in plant polyphenols."
  ],
  family: "Fabaceae"
},
{
  common: "Hop Trefoil",
  bota: "Trifolium campestre",
  medB: [
    "Used in traditional herbal infusions.",
    "Supports digestive health.",
    "Contains antioxidant flavonoids."
  ],
  family: "Fabaceae"
},
{
  common: "Cherler's Clover",
  bota: "Trifolium cherleri",
  medB: [
    "Traditionally consumed as forage.",
    "Limited medicinal documentation.",
    "Contains beneficial phytochemicals."
  ],
  family: "Fabaceae"
},
{
  common: "Hairy Clover",
  bota: "Trifolium hirtum",
  medB: [
    "Used in folk herbal preparations.",
    "Traditionally supports digestion.",
    "Contains antioxidant compounds."
  ],
  family: "Fabaceae"
},
{
  common: "Alsike Clover",
  bota: "Trifolium hybridum",
  medB: [
    "Traditionally used as a forage herb.",
    "Contains antioxidant flavonoids.",
    "Limited medicinal use."
  ],
  family: "Fabaceae"
},
{
  common: "Crimson Clover",
  bota: "Trifolium incarnatum",
  medB: [
    "Flowers are used in herbal teas.",
    "Contains antioxidant compounds.",
    "Traditionally supports general wellness."
  ],
  family: "Fabaceae"
},
{
  common: "Bristly Clover",
  bota: "Trifolium lappaceum",
  medB: [
    "Limited traditional medicinal use.",
    "Consumed occasionally as forage.",
    "Contains beneficial plant nutrients."
  ],
  family: "Fabaceae"
},
{
  common: "Balansa Clover",
  bota: "Trifolium michelianum",
  medB: [
    "Primarily valued as forage.",
    "Contains antioxidant phytochemicals.",
    "Limited medicinal documentation."
  ],
  family: "Fabaceae"
},
{
  common: "Slender Clover",
  bota: "Trifolium micranthum",
  medB: [
    "Used traditionally as forage.",
    "Contains plant flavonoids.",
    "Limited medicinal evidence."
  ],
  family: "Fabaceae"
},
{
  common: "Mountain Clover",
  bota: "Trifolium montanum",
  medB: [
    "Traditionally used in herbal infusions.",
    "Supports digestion in folk medicine.",
    "Contains antioxidant compounds."
  ],
  family: "Fabaceae"
},
{
  common: "Sulphur Clover",
  bota: "Trifolium ochroleucon",
  medB: [
    "Traditionally consumed as forage.",
    "Contains antioxidant phytochemicals.",
    "Limited medicinal use."
  ],
  family: "Fabaceae"
},
{
  common: "Hungarian Clover",
  bota: "Trifolium pannonicum",
  medB: [
    "Used as a forage crop.",
    "Contains plant antioxidants.",
    "Limited traditional medicinal use."
  ],
  family: "Fabaceae"
},
{
  common: "Spreading Clover",
  bota: "Trifolium patens",
  medB: [
    "Consumed as forage.",
    "Contains beneficial flavonoids.",
    "Limited ethnomedicinal reports."
  ],
  family: "Fabaceae"
},
{
  common: "Red Clover",
  bota: "Trifolium pratense",
  medB: [
    "Traditionally used to support women's health.",
    "Rich in isoflavones.",
    "Used in herbal medicine for skin disorders."
  ],
  family: "Fabaceae"
},
{
  common: "Purple Clover",
  bota: "Trifolium purpureum",
  medB: [
    "Traditionally used in herbal infusions.",
    "Contains antioxidant compounds.",
    "Limited medicinal evidence."
  ],
  family: "Fabaceae"
},
{
  common: "Persian Clover",
  bota: "Trifolium resupinatum",
  medB: [
    "Consumed as a nutritious forage.",
    "Contains antioxidant phytochemicals.",
    "Limited traditional medicinal use."
  ],
  family: "Fabaceae"
},
{
  common: "Rough Clover",
  bota: "Trifolium scabrum",
  medB: [
    "Traditionally used as forage.",
    "Contains beneficial plant compounds.",
    "Limited medicinal applications."
  ],
  family: "Fabaceae"
},
{
  common: "Bladder Clover",
  bota: "Trifolium spumosum",
  medB: [
    "Traditionally used as forage.",
    "Contains antioxidant flavonoids.",
    "Limited medicinal records."
  ],
  family: "Fabaceae"
},
{
  common: "Scaled Clover",
  bota: "Trifolium squamosum",
  medB: [
    "Used as a forage species.",
    "Contains beneficial phytochemicals.",
    "Limited medicinal use."
  ],
  family: "Fabaceae"
},
{
  common: "Star Clover",
  bota: "Trifolium stellatum",
  medB: [
    "Consumed traditionally as forage.",
    "Contains antioxidant compounds.",
    "Limited ethnobotanical use."
  ],
  family: "Fabaceae"
},
{
  common: "Soft Knotted Clover",
  bota: "Trifolium striatum",
  medB: [
    "Traditionally used as forage.",
    "Contains beneficial flavonoids.",
    "Limited medicinal applications."
  ],
  family: "Fabaceae"
},
{
  common: "Subterranean Clover",
  bota: "Trifolium subterraneum",
  medB: [
    "Traditionally consumed as nutritious forage.",
    "Contains antioxidant flavonoids.",
    "Limited use in folk herbal medicine."
  ],
  family: "Fabaceae"
},
{
  common: "Woolly Clover",
  bota: "Trifolium tomentosum",
  medB: [
    "Used primarily as forage.",
    "Contains beneficial phytochemicals.",
    "Limited medicinal documentation."
  ],
  family: "Fabaceae"
},
{
  common: "Pomegranate",
  bota: "Punica granatum",
  medB: [
    "Rich in antioxidants that help reduce oxidative stress.",
    "Traditionally used to support heart health.",
    "Fruit rind has been used for digestive disorders."
  ],
  family: "Lythraceae"
},
{
  common: "Hollyhock",
  bota: "Alcea rosea",
  medB: [
    "Flowers are traditionally used to soothe sore throats.",
    "Contains mucilage that helps relieve coughs.",
    "Applied to calm skin irritation."
  ],
  family: "Malvaceae"
},
{
  common: "Hemp-leaved Marsh Mallow",
  bota: "Althaea cannabina",
  medB: [
    "Traditionally used for respiratory irritation.",
    "Roots contain soothing mucilage.",
    "Used to calm digestive inflammation."
  ],
  family: "Malvaceae"
},
{
  common: "Marsh Mallow",
  bota: "Althaea officinalis",
  medB: [
    "Widely used to soothe sore throats.",
    "Helps relieve dry coughs.",
    "Supports digestive tract health through its mucilage."
  ],
  family: "Malvaceae"
},
{
  common: "White Water Lily",
  bota: "Nymphaea alba",
  medB: [
    "Traditionally used as a calming herb.",
    "Rhizomes have been used for diarrhea.",
    "Applied externally for inflamed skin."
  ],
  family: "Nymphaeaceae"
},
{
  common: "Mexican Tulip Poppy",
  bota: "Hunnemannia fumariifolia",
  medB: [
    "Primarily grown as an ornamental.",
    "Limited medicinal use is documented.",
    "Contains alkaloids requiring cautious use."
  ],
  family: "Papaveraceae"
},
{
  common: "Atlas Poppy",
  bota: "Papaver atlanticum",
  medB: [
    "Traditionally valued as an ornamental.",
    "Limited medicinal evidence.",
    "Contains naturally occurring alkaloids."
  ],
  family: "Papaveraceae"
},
{
  common: "Moroccan Poppy",
  bota: "Papaver rupifragum",
  medB: [
    "Limited traditional medicinal use.",
    "Primarily cultivated ornamentally.",
    "Contains poppy alkaloids."
  ],
  family: "Papaveraceae"
},
{
  common: "Tatarian Sea Lavender",
  bota: "Goniolimon tataricum",
  medB: [
    "Roots have been used in traditional medicine.",
    "Contains tannins with astringent properties.",
    "Applied for minor inflammation."
  ],
  family: "Plumbaginaceae"
},
{
  common: "Summer Pheasant's Eye",
  bota: "Adonis aestivalis",
  medB: [
    "Historically used as a cardiac herb.",
    "Contains potent cardiac glycosides.",
    "Must not be used without medical supervision."
  ],
  family: "Ranunculaceae"
},
{
  common: "Annual Pheasant's Eye",
  bota: "Adonis annua",
  medB: [
    "Historically used for heart conditions.",
    "Contains cardiac glycosides.",
    "Potentially toxic if misused."
  ],
  family: "Ranunculaceae"
},
{
  common: "Scarlet Pheasant's Eye",
  bota: "Adonis flammea",
  medB: [
    "Traditionally used in folk medicine.",
    "Contains bioactive cardiac compounds.",
    "Use requires extreme caution."
  ],
  family: "Ranunculaceae"
},
{
  common: "Small-fruited Pheasant's Eye",
  bota: "Adonis microcarpa",
  medB: [
    "Historically used for cardiovascular support.",
    "Contains cardiac glycosides.",
    "Potentially poisonous."
  ],
  family: "Ranunculaceae"
},
{
  common: "Crown Anemone",
  bota: "Anemone coronaria",
  medB: [
    "Historically applied externally for rheumatic pain.",
    "Contains protoanemonin and is toxic when fresh.",
    "Rarely used in modern herbal medicine."
  ],
  family: "Ranunculaceae"
},
{
  common: "Palm Anemone",
  bota: "Anemone palmata",
  medB: [
    "Traditional medicinal use is limited.",
    "Contains irritant compounds.",
    "Historically used only in small quantities."
  ],
  family: "Ranunculaceae"
},
{
  common: "Diamond Flower",
  bota: "Oldenlandia corymbosa",
  medB: [
    "Used in Ayurveda for fever.",
    "Traditionally supports liver health.",
    "Used for inflammatory disorders."
  ],
  family: "Rubiaceae"
},
{
  common: "White Henbane",
  bota: "Hyoscyamus albus",
  medB: [
    "Historically used as a pain reliever.",
    "Contains potent tropane alkaloids.",
    "Highly toxic without medical supervision."
  ],
  family: "Solanaceae"
},
{
  common: "Black Henbane",
  bota: "Hyoscyamus niger",
  medB: [
    "Historically used as a sedative.",
    "Contains atropine-like alkaloids.",
    "Highly poisonous if improperly used."
  ],
  family: "Solanaceae"
},
{
  common: "Flax-leaved Daphne",
  bota: "Daphne gnidium",
  medB: [
    "Historically applied externally.",
    "Contains toxic diterpenes.",
    "Not recommended for internal use."
  ],
  family: "Thymelaeaceae"
},
{
  common: "Spurge Laurel",
  bota: "Daphne laureola",
  medB: [
    "Historically used in folk medicine.",
    "Contains toxic compounds.",
    "Modern medicinal use is discouraged."
  ],
  family: "Thymelaeaceae"
},
{
  common: "Olive Daphne",
  bota: "Daphne oleoides",
  medB: [
    "Traditional medicinal use is limited.",
    "Contains biologically active diterpenes.",
    "Handled cautiously because of toxicity."
  ],
  family: "Thymelaeaceae"
},
{
  common: "Lesser Water Parsnip",
  bota: "Berula erecta",
  medB: [
    "Traditionally used as a diuretic.",
    "Applied for urinary disorders.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Apiaceae"
},
{
  common: "Rough Chervil",
  bota: "Chaerophyllum temulum",
  medB: [
    "Historically used in folk medicine.",
    "Contains toxic constituents.",
    "Medicinal use is no longer recommended."
  ],
  family: "Apiaceae"
},
{
  common: "Rough Carrot",
  bota: "Daucus muricatus",
  medB: [
    "Traditionally used as a digestive herb.",
    "Seeds have mild aromatic properties.",
    "Contains antioxidant compounds."
  ],
  family: "Apiaceae"
},
{
  common: "Baldmoney",
  bota: "Meum athamanticum",
  medB: [
    "Used traditionally for indigestion.",
    "Acts as a mild carminative.",
    "Used in European herbal medicine."
  ],
  family: "Apiaceae"
},
{
  common: "Deadly Carrot",
  bota: "Thapsia garganica",
  medB: [
    "Historically applied externally for rheumatism.",
    "Contains powerful bioactive compounds.",
    "Can cause severe skin irritation."
  ],
  family: "Apiaceae"
},
{
  common: "Hairy Deadly Carrot",
  bota: "Thapsia villosa",
  medB: [
    "Traditionally used externally.",
    "Contains irritant diterpenes.",
    "Requires careful handling."
  ],
 family: "Apiaceae"
},
{
  common: "Spur Valerian",
  bota: "Centranthus calcitrapae",
  medB: [
    "Traditionally used as a mild calming herb.",
    "Limited medicinal documentation.",
    "Contains antioxidant compounds."
  ],
  family: "Caprifoliaceae"
},
{
  common: "Horn of Plenty",
  bota: "Fedia cornucopiae",
  medB: [
    "Young leaves are edible.",
    "Traditionally consumed as a nutritious wild green.",
    "Contains natural antioxidants."
  ],
  family: "Caprifoliaceae"
},
{
  common: "Canary Sea Daffodil",
  bota: "Pancratium canariense",
  medB: [
    "Bulbs contain alkaloids studied for medicinal potential.",
    "Traditionally used in folk medicine in very small amounts.",
    "Not suitable for self-medication due to toxicity."
  ],
  family: "Amaryllidaceae"
},
{
  common: "Sea Daffodil",
  bota: "Pancratium maritimum",
  medB: [
    "Contains bioactive alkaloids under pharmaceutical research.",
    "Traditionally used for skin ailments.",
    "Bulbs are toxic if consumed raw."
  ],
  family: "Amaryllidaceae"
},
{
  common: "St. Bernard's Lily",
  bota: "Anthericum liliago",
  medB: [
    "Limited traditional medicinal use.",
    "Occasionally used in regional herbal remedies.",
    "Primarily valued as an ornamental."
  ],
  family: "Asparagaceae"
},
{
  common: "Flowering Rush",
  bota: "Butomus umbellatus",
  medB: [
    "Rhizomes were historically eaten during food scarcity.",
    "Limited medicinal documentation.",
    "Contains starch-rich underground parts."
  ],
  family: "Butomaceae"
},
{
  common: "Heath Grass",
  bota: "Danthonia decumbens",
  medB: [
    "Primarily a forage grass.",
    "Very limited medicinal use.",
    "Occasionally used in traditional pasture medicine."
  ],
  family: "Poaceae"
},
{
  common: "Rice Cutgrass",
  bota: "Leersia oryzoides",
  medB: [
    "Limited medicinal records.",
    "Traditionally associated with wetland herbal practices.",
    "Primarily an ecological grass."
  ],
  family: "Poaceae"
},
{
  common: "Sun Canary Grass",
  bota: "Phalaris coerulescens",
  medB: [
    "Traditionally cultivated as forage.",
    "Contains antioxidant phytochemicals.",
    "Limited medicinal evidence."
  ],
  family: "Poaceae"
},
{
  common: "Portuguese Squill",
  bota: "Oncostema elongata",
  medB: [
    "Bulbs contain biologically active compounds.",
    "Traditional medicinal use is limited.",
    "Not recommended for consumption."
  ],
  family: "Asparagaceae"
},
{
  common: "Peruvian Squill",
  bota: "Oncostema peruviana",
  medB: [
    "Contains cardiac-active compounds.",
    "Historically used in folk medicine.",
    "Potentially toxic."
  ],
  family: "Asparagaceae"
},
{
  common: "Canadian Waterweed",
  bota: "Elodea canadensis",
  medB: [
    "Limited medicinal use.",
    "Occasionally used in local folk remedies.",
    "Primarily an aquatic oxygenating plant."
  ],
  family: "Hydrocharitaceae"
},
{
  common: "Dense-flowered Orchid",
  bota: "Neotinea maculata",
  medB: [
    "Traditional medicinal use is poorly documented.",
    "Related orchids have been used for salep.",
    "Primarily valued for conservation."
  ],
  family: "Orchidaceae"
},
{
  common: "Bee Orchid",
  bota: "Ophrys apifera",
  medB: [
    "Little documented medicinal use.",
    "Historically valued more for ornamentation.",
    "Protected in many regions."
  ],
  family: "Orchidaceae"
},
{
  common: "Bumblebee Orchid",
  bota: "Ophrys bombyliflora",
  medB: [
    "Limited ethnomedicinal evidence.",
    "Primarily an ornamental wild orchid.",
    "Protected in its native habitats."
  ],
  family: "Orchidaceae"
},
{
  common: "Dark Ophrys",
  bota: "Ophrys fusca",
  medB: [
    "No significant medicinal use documented.",
    "Conserved as a native orchid.",
    "Important for pollinator ecology."
  ],
  family: "Orchidaceae"
},
{
  common: "Yellow Bee Orchid",
  bota: "Ophrys lutea",
  medB: [
    "Traditional medicinal use is negligible.",
    "Valued for biodiversity.",
    "Protected in many habitats."
  ],
  family: "Orchidaceae"
},
{
  common: "Woodcock Orchid",
  bota: "Ophrys scolopax",
  medB: [
    "Very limited medicinal history.",
    "Important ecological species.",
    "Mostly cultivated for conservation."
  ],
  family: "Orchidaceae"
},
{
  common: "Mirror Orchid",
  bota: "Ophrys speculum",
  medB: [
    "No established medicinal use.",
    "Highly valued for its unique flowers.",
    "Protected in several countries."
  ],
  family: "Orchidaceae"
},
{
  common: "Sawfly Orchid",
  bota: "Ophrys tenthredinifera",
  medB: [
    "Little medicinal evidence.",
    "Primarily a wild ornamental orchid.",
    "Ecologically important for pollinators."
  ],
  family: "Orchidaceae"
},
{
  common: "Opposite-leaved Pondweed",
  bota: "Groenlandia densa",
  medB: [
    "No significant medicinal use.",
    "Important aquatic habitat plant.",
    "Supports freshwater ecosystems."
  ],
  family: "Potamogetonaceae"
},
{
  common: "Water Chickweed",
  bota: "Myosoton aquaticum",
  medB: [
    "Traditionally used to soothe skin irritation.",
    "Applied to minor wounds.",
    "Consumed as an edible wild herb."
  ],
  family: "Caryophyllaceae"
},
{
  common: "Marsh Thistle",
  bota: "Cirsium palustre",
  medB: [
    "Young shoots were eaten traditionally.",
    "Used in folk medicine for digestion.",
    "Contains antioxidant compounds."
  ],
  family: "Asteraceae"
},
{
  common: "Yellow Archangel",
  bota: "Lamium galeobdolon",
  medB: [
    "Applied traditionally to wounds.",
    "Used in herbal infusions.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Lamiaceae"
},
{
  common: "English Lavender",
  bota: "Lavandula angustifolia",
  medB: [
    "Widely used to reduce anxiety.",
    "Traditionally promotes restful sleep.",
    "Applied for minor burns and insect bites."
  ],
  family: "Lamiaceae"
},
{
  common: "River She-oak",
  bota: "Casuarina cunninghamiana",
  medB: [
    "Bark is traditionally used as an astringent.",
    "Applied to minor wounds.",
    "Used in indigenous medicine."
  ],
  family: "Casuarinaceae"
},
{
  common: "Red Feather Clover",
  bota: "Trifolium rubens",
  medB: [
    "Contains antioxidant flavonoids.",
    "Traditionally used in herbal teas.",
    "Limited medicinal documentation."
  ],
  family: "Fabaceae"
},
{
  common: "Sickleweed",
  bota: "Falcaria vulgaris",
  medB: [
    "Traditionally used for digestive disorders.",
    "Applied to skin wounds.",
    "Contains antioxidant compounds."
  ],
  family: "Apiaceae"
},
{
  common: "Triquetrous St. John's Wort",
  bota: "Hypericum triquetrifolium",
  medB: [
    "Traditionally used for wound healing.",
    "Applied for skin inflammation.",
    "Contains hypericin-related compounds."
  ],
  family: "Hypericaceae"
},
{
  common: "Caracas Wigandia",
  bota: "Wigandia caracasana",
  medB: [
    "Leaves are traditionally applied to wounds.",
    "Used externally for inflammation.",
    "Limited scientific evidence exists."
  ],
  family: "Boraginaceae"
},
{
  common: "Egyptian White Lotus",
  bota: "Nymphaea lotus",
  medB: [
    "Traditionally used as a calming herb.",
    "Rhizomes have been used for digestive ailments.",
    "Flowers are used in traditional African medicine."
  ],
  family: "Nymphaeaceae"
},
{
  common: "Hairy Stonecrop",
  bota: "Sedum villosum",
  medB: [
    "Traditionally applied to minor wounds.",
    "Used as a soothing herbal poultice.",
    "Limited medicinal evidence exists."
  ],
  family: "Crassulaceae"
},
{
  common: "Broad-leaved Helleborine",
  bota: "Epipactis helleborine",
  medB: [
    "Historically used as a mild sedative.",
    "Traditional medicinal use is limited.",
    "Contains naturally occurring bioactive compounds."
  ],
  family: "Orchidaceae"
},
{
  common: "Bastard Toadflax",
  bota: "Thesium humifusum",
  medB: [
    "Traditionally used as a mild diuretic.",
    "Applied in folk medicine for urinary complaints.",
    "Limited scientific documentation."
  ],
  family: "Santalaceae"
},
{
  common: "Etbaica Acacia",
  bota: "Acacia etbaica",
  medB: [
    "Bark is traditionally used for wound healing.",
    "Used in East African herbal medicine.",
    "Contains tannin-rich extracts."
  ],
  family: "Fabaceae"
},
{
  common: "Narrow-leaved Spur Valerian",
  bota: "Centranthus angustifolius",
  medB: [
    "Traditionally used as a calming herb.",
    "Supports relaxation in folk medicine.",
    "Contains antioxidant compounds."
  ],
  family: "Caprifoliaceae"
},
{
  common: "Lecoq's Spur Valerian",
  bota: "Centranthus lecoqii",
  medB: [
    "Limited medicinal documentation.",
    "Used occasionally in herbal infusions.",
    "Contains beneficial phytochemicals."
  ],
  family: "Caprifoliaceae"
},
{
  common: "English Stonecrop",
  bota: "Sedum anglicum",
  medB: [
    "Applied traditionally to cuts.",
    "Used as a cooling poultice.",
    "Historically used for skin irritation."
  ],
  family: "Crassulaceae"
},
{
  common: "Rock Stonecrop",
  bota: "Sedum rupestre",
  medB: [
    "Traditionally used for minor burns.",
    "Applied to insect bites.",
    "Contains antioxidant compounds."
  ],
  family: "Crassulaceae"
},
{
  common: "Fly Orchid",
  bota: "Ophrys insectifera",
  medB: [
    "No significant medicinal use documented.",
    "Protected in many regions.",
    "Primarily valued for biodiversity."
  ],
  family: "Orchidaceae"
},
{
  common: "Freesia",
  bota: "Freesia refracta",
  medB: [
    "Primarily cultivated as an ornamental.",
    "Very limited traditional medicinal use.",
    "Valued mainly for its fragrance."
  ],
  family: "Iridaceae"
},
{
  common: "Tuber Star",
  bota: "Diatelia tuberaria",
  medB: [
    "Traditional medicinal use is poorly documented.",
    "Primarily an ornamental species.",
    "Limited ethnobotanical evidence."
  ],
  family: "Iridaceae"
},
{
  common: "Purple Heart",
  bota: "Tradescantia pallida",
  medB: [
    "Traditionally applied to wounds.",
    "Used to reduce skin inflammation.",
    "Contains antioxidant pigments."
  ],
  family: "Commelinaceae"
},
{
  common: "Spiny Burr Grass",
  bota: "Cenchrus longispinus",
  medB: [
    "Limited medicinal applications.",
    "Traditionally used as livestock forage.",
    "Contains antioxidant plant compounds."
  ],
  family: "Poaceae"
},
{
  common: "Umbrella Tree",
  bota: "Schefflera actinophylla",
  medB: [
    "Limited traditional medicinal use.",
    "Used in some Pacific folk remedies.",
    "Primarily grown as an ornamental tree."
  ],
  family: "Araliaceae"
},
{
  common: "Kikuyu Grass",
  bota: "Cenchrus clandestinus",
  medB: [
    "Traditionally valued as forage.",
    "Very limited medicinal documentation.",
    "Contains beneficial plant nutrients."
  ],
  family: "Poaceae"
},
{
  common: "Elephant Grass",
  bota: "Cenchrus purpureus",
  medB: [
    "Used mainly as nutritious livestock fodder.",
    "Traditional medicinal use is uncommon.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Poaceae"
},
{
  common: "Fountain Grass",
  bota: "Cenchrus setaceus",
  medB: [
    "Primarily an ornamental grass.",
    "Limited ethnomedicinal use.",
    "Occasionally used in local herbal traditions."
  ],
  family: "Poaceae"
},
{
  common: "Broad-leaved Anemone",
  bota: "Anemone hortensis",
  medB: [
    "Historically used externally for joint pain.",
    "Contains protoanemonin.",
    "Fresh plant is considered toxic."
  ],
  family: "Ranunculaceae"
},
{
  common: "Blue Spiderwort",
  bota: "Tradescantia cerinthoides",
  medB: [
    "Traditionally used for skin irritation.",
    "Applied to cuts and bruises.",
    "Contains antioxidant flavonoids."
  ],
  family: "Commelinaceae"
},
{
  common: "Prickly Poppy",
  bota: "Papaver argemone",
  medB: [
    "Contains naturally occurring alkaloids.",
    "Historically used in folk medicine.",
    "Limited modern medicinal use."
  ],
  family: "Papaveraceae"
},
{
  common: "Round Pricklyhead Poppy",
  bota: "Papaver hybridum",
  medB: [
    "Traditionally valued in herbal preparations.",
    "Contains poppy alkaloids.",
    "Medicinal use is limited."
  ],
  family: "Papaveraceae"
},
{
  common: "Common Poppy",
  bota: "Papaver rhoeas",
  medB: [
    "Flowers are traditionally used to soothe coughs.",
    "Acts as a mild calming herb.",
    "Used in herbal teas for relaxation."
  ],
  family: "Papaveraceae"
},
{
  common: "Long-headed Poppy",
  bota: "Papaver dubium",
  medB: [
    "Traditionally used in mild sedative preparations.",
    "Contains naturally occurring alkaloids.",
    "Limited medicinal evidence."
  ],
  family: "Papaveraceae"
},
{
  common: "Opium Poppy",
  bota: "Papaver somniferum",
  medB: [
    "Source of morphine and codeine.",
    "Used medically for pain management under strict supervision.",
    "Seeds are widely used as food."
  ],
  family: "Papaveraceae"
},
{
  common: "Wild Carrot",
  bota: "Daucus carota",
  medB: [
    "Seeds are traditionally used as a diuretic.",
    "Roots are rich in beta-carotene.",
    "Used in herbal medicine for digestive support."
  ],
  family: "Apiaceae"
},
{
  common: "Rough Smilax",
  bota: "Smilax aspera",
  medB: [
    "Traditionally used as a blood purifier.",
    "Supports treatment of rheumatic conditions.",
    "Roots have mild anti-inflammatory properties."
  ],
  family: "Smilacaceae"
},
{
  common: "Canary Aizoon",
  bota: "Aizoon canariense",
  medB: [
    "Succulent leaves are traditionally applied to skin.",
    "Limited medicinal evidence.",
    "Contains antioxidant compounds."
  ],
  family: "Aizoaceae"
},
{
  common: "Horned Pondweed",
  bota: "Zannichellia palustris",
  medB: [
    "No well-established medicinal use.",
    "Important aquatic ecosystem species.",
    "Limited ethnobotanical documentation."
  ],
  family: "Potamogetonaceae"
},
{
  common: "Rye",
  bota: "Secale cereale",
  medB: [
    "Whole grains support digestive health.",
    "Rich source of dietary fiber.",
    "Contains beneficial antioxidants."
  ],
  family: "Poaceae"
},
{
  common: "Buffel Grass",
  bota: "Cenchrus ciliaris",
  medB: [
    "Traditionally used as nutritious forage.",
    "Limited medicinal applications.",
    "Contains beneficial plant compounds."
  ],
  family: "Poaceae"
},
{
  common: "Southern Sandbur",
  bota: "Cenchrus echinatus",
  medB: [
    "Traditionally used in folk remedies for minor inflammation.",
    "Occasionally applied to skin conditions.",
    "Limited scientific medicinal evidence."
  ],
  family: "Poaceae"
},
{
  common: "Harding Grass",
  bota: "Phalaris aquatica",
  medB: [
    "Primarily cultivated as forage.",
    "Limited traditional medicinal use.",
    "Contains antioxidant plant compounds."
  ],
  family: "Poaceae"
},
{
  common: "Reed Canary Grass",
  bota: "Phalaris arundinacea",
  medB: [
    "Traditionally used for erosion control and fodder.",
    "Limited medicinal documentation.",
    "Contains naturally occurring alkaloids."
  ],
  family: "Poaceae"
},
{
  common: "Canary Grass",
  bota: "Phalaris canariensis",
  medB: [
    "Seeds are rich in dietary fiber.",
    "Traditionally consumed as a nutritious grain.",
    "Contains antioxidant compounds."
  ],
  family: "Poaceae"
},
{
  common: "Little Seed Canary Grass",
  bota: "Phalaris minor",
  medB: [
    "Limited medicinal use.",
    "Traditionally grown as forage.",
    "Contains beneficial phytochemicals."
  ],
  family: "Poaceae"
},
{
  common: "Hood Canary Grass",
  bota: "Phalaris paradoxa",
  medB: [
    "Traditionally used as fodder.",
    "Limited ethnomedicinal reports.",
    "Contains natural antioxidants."
  ],
  family: "Poaceae"
},
{
  common: "Spanish Stonecrop",
  bota: "Sedum hispanicum",
  medB: [
    "Applied traditionally to minor wounds.",
    "Used as a cooling poultice.",
    "Limited medicinal evidence."
  ],
  family: "Crassulaceae"
},
{
  common: "Sunn Hemp",
  bota: "Crotalaria juncea",
  medB: [
    "Traditionally used to aid wound healing.",
    "Applied in folk medicine for skin disorders.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Fabaceae"
},
{
  common: "Narrow-leaved Lupin",
  bota: "Lupinus angustifolius",
  medB: [
    "Seeds are rich in plant protein.",
    "Traditionally consumed as food after processing.",
    "Supports heart-healthy diets."
  ],
  family: "Fabaceae"
},
{
  common: "Yellow Lupin",
  bota: "Lupinus luteus",
  medB: [
    "Seeds are protein-rich after detoxification.",
    "Traditionally cultivated for nutrition.",
    "Contains antioxidant compounds."
  ],
  family: "Fabaceae"
},
{
  common: "Blue Lupin",
  bota: "Lupinus pilosus",
  medB: [
    "Traditionally grown as forage.",
    "Contains beneficial phytochemicals.",
    "Limited medicinal use."
  ],
  family: "Fabaceae"
},
{
  common: "White Lupin",
  bota: "Lupinus albus",
  medB: [
    "Seeds are high in protein and fiber.",
    "Traditionally consumed after removing bitter alkaloids.",
    "Supports healthy cholesterol levels."
  ],
  family: "Fabaceae"
},
{
  common: "Egyptian Clover",
  bota: "Trifolium alexandrinum",
  medB: [
    "Nutritious forage crop.",
    "Contains antioxidant flavonoids.",
    "Limited medicinal documentation."
  ],
  family: "Fabaceae"
},
{
  common: "Lesser Trefoil",
  bota: "Trifolium dubium",
  medB: [
    "Traditionally consumed in herbal teas.",
    "Contains antioxidant compounds.",
    "Used occasionally for digestive support."
  ],
  family: "Fabaceae"
},
{
  common: "Cluster Clover",
  bota: "Trifolium glomeratum",
  medB: [
    "Traditionally valued as forage.",
    "Contains beneficial flavonoids.",
    "Limited medicinal evidence."
  ],
  family: "Fabaceae"
},
{
  common: "Ball Clover",
  bota: "Trifolium nigrescens",
  medB: [
    "Used as forage.",
    "Contains antioxidant phytochemicals.",
    "Limited ethnobotanical use."
  ],
  family: "Fabaceae"
},
{
  common: "White Clover",
  bota: "Trifolium repens",
  medB: [
    "Traditionally used in herbal teas.",
    "Applied to minor skin irritation.",
    "Contains isoflavones and antioxidants."
  ],
  family: "Fabaceae"
},
{
  common: "African Blackwood",
  bota: "Dalbergia melanoxylon",
  medB: [
    "Bark is used traditionally for stomach ailments.",
    "Applied for minor wounds.",
    "Contains antioxidant compounds."
  ],
  family: "Fabaceae"
},
{
  common: "Indian Sweet Clover",
  bota: "Melilotus indicus",
  medB: [
    "Traditionally supports circulation.",
    "Used for mild swelling.",
    "Contains natural coumarins."
  ],
  family: "Fabaceae"
},
{
  common: "Yellow Sweet Clover",
  bota: "Melilotus officinalis",
  medB: [
    "Supports healthy circulation.",
    "Traditionally used for varicose veins.",
    "Applied as herbal compresses."
  ],
  family: "Fabaceae"
},
{
  common: "Silver Wattle",
  bota: "Acacia dealbata",
  medB: [
    "Bark is traditionally used as an astringent.",
    "Applied for minor skin injuries.",
    "Contains tannins."
  ],
  family: "Fabaceae"
},
{
  common: "Sydney Golden Wattle",
  bota: "Acacia longifolia",
  medB: [
    "Traditionally used for digestive disorders.",
    "Applied externally for wounds.",
    "Contains antioxidant tannins."
  ],
  family: "Fabaceae"
},
{
  common: "Black Wattle",
  bota: "Acacia mearnsii",
  medB: [
    "Rich in tannins with astringent properties.",
    "Traditionally used for diarrhea.",
    "Applied to minor wounds."
  ],
  family: "Fabaceae"
},
{
  common: "Golden Wattle",
  bota: "Acacia pycnantha",
  medB: [
    "Bark has traditional astringent uses.",
    "Used in Australian indigenous medicine.",
    "Contains antioxidant polyphenols."
  ],
  family: "Fabaceae"
},
{
  common: "Swamp Wattle",
  bota: "Acacia retinodes",
  medB: [
    "Traditionally used for skin care.",
    "Contains tannins with antimicrobial properties.",
    "Limited medicinal studies."
  ],
  family: "Fabaceae"
},
{
  common: "Winter Cress",
  bota: "Barbarea verna",
  medB: [
    "Rich in vitamin C.",
    "Traditionally consumed to prevent deficiency diseases.",
    "Supports digestion."
  ],
  family: "Brassicaceae"
},
{
  common: "Intermediate Winter Cress",
  bota: "Barbarea intermedia",
  medB: [
    "Young leaves are edible.",
    "Contains antioxidant compounds.",
    "Limited medicinal use."
  ],
  family: "Brassicaceae"
},
{
  common: "Mouse-tail",
  bota: "Myosurus minimus",
  medB: [
    "Very limited traditional medicinal use.",
    "Historically used in regional folk medicine.",
    "Contains bioactive compounds under study."
  ],
  family: "Ranunculaceae"
},
{
  common: "Wild Strawberry",
  bota: "Fragaria vesca",
  medB: [
    "Leaves are used in herbal teas for diarrhea.",
    "Fruit is rich in vitamin C and antioxidants.",
    "Supports digestive health."
  ],
  family: "Rosaceae"
},
{
  common: "Indian Mock Strawberry",
  bota: "Duchesnea indica",
  medB: [
    "Traditionally used for fever.",
    "Applied to burns and wounds.",
    "Contains anti-inflammatory phytochemicals."
  ],
  family: "Rosaceae"
},
{
  common: "Red Valerian",
  bota: "Centranthus ruber",
  medB: [
    "Traditionally used as a mild sedative.",
    "Used in herbal preparations for nervous tension.",
    "Contains antioxidant compounds."
  ],
  family: "Caprifoliaceae"
},
{
  common: "Niger Seed",
  bota: "Guizotia abyssinica",
  medB: [
    "Seeds are rich in healthy oils.",
    "Traditionally used for skin nourishment.",
    "Contains antioxidant vitamin E."
  ],
  family: "Asteraceae"
},
{
  common: "Mexican Marigold",
  bota: "Tagetes minuta",
  medB: [
    "Traditionally used for digestive discomfort.",
    "Essential oil possesses antimicrobial activity.",
    "Used as a natural insect repellent."
  ],
  family: "Asteraceae"
},
{
  common: "French Marigold",
  bota: "Tagetes patula",
  medB: [
    "Traditionally applied to minor skin infections.",
    "Contains antioxidant flavonoids.",
    "Used for soothing insect bites."
  ],
  family: "Asteraceae"
},
{
  common: "Field Marigold",
  bota: "Calendula arvensis",
  medB: [
    "Traditionally used for wound healing.",
    "Applied to skin inflammation.",
    "Contains anti-inflammatory compounds."
  ],
  family: "Asteraceae"
},
{
  common: "Nipplewort",
  bota: "Lapsana communis",
  medB: [
    "Young leaves are edible.",
    "Traditionally used for minor wounds.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Asteraceae"
},
{
  common: "Safflower",
  bota: "Carthamus tinctorius",
  medB: [
    "Used traditionally to improve blood circulation.",
    "Seeds provide heart-healthy oil.",
    "Flowers are used in Traditional Chinese Medicine."
  ],
  family: "Asteraceae"
},
{
  common: "Garden Lettuce",
  bota: "Lactuca sativa",
  medB: [
    "Rich source of vitamins A and K.",
    "Traditionally consumed for digestive health.",
    "Contains lactucin with mild calming properties."
  ],
  family: "Asteraceae"
},
{
  common: "Prickly Lettuce",
  bota: "Lactuca serriola",
  medB: [
    "Traditionally used as a mild sedative.",
    "Used to relieve coughs.",
    "Contains bitter latex with medicinal history."
  ],
  family: "Asteraceae"
},
{
  common: "Small Carp Grass",
  bota: "Arthraxon hispidus",
  medB: [
    "Limited medicinal documentation.",
    "Occasionally used in Asian folk medicine.",
    "Contains antioxidant plant compounds."
  ],
  family: "Poaceae"
},
{
  common: "Kunth's Grass",
  bota: "Microchloa kunthii",
  medB: [
    "Traditionally used as forage.",
    "Limited medicinal evidence.",
    "Contains beneficial phytochemicals."
  ],
  family: "Poaceae"
},
{
  common: "Schimper's Grass",
  bota: "Harpachne schimperi",
  medB: [
    "Limited traditional medicinal use.",
    "Occasionally used as forage.",
    "Contains natural antioxidants."
  ],
  family: "Poaceae"
},
{
  common: "Spanish Cedar",
  bota: "Cedrela odorata",
  medB: [
    "Bark is traditionally used for fever.",
    "Applied to skin infections.",
    "Contains antimicrobial compounds."
  ],
  family: "Meliaceae"
},
{
  common: "American Jointvetch",
  bota: "Aeschynomene americana",
  medB: [
    "Traditionally used for wound care.",
    "Applied for skin inflammation.",
    "Limited scientific evidence."
  ],
  family: "Fabaceae"
},
{
  common: "White Mesquite",
  bota: "Prosopis alba",
  medB: [
    "Pods are rich in nutrients.",
    "Traditionally used for digestive health.",
    "Bark is used as an astringent."
  ],
  family: "Fabaceae"
},
{
  common: "Mesquite",
  bota: "Prosopis juliflora",
  medB: [
    "Pods provide nutritious flour.",
    "Leaves are traditionally used for wounds.",
    "Contains antimicrobial phytochemicals."
  ],
  family: "Fabaceae"
},
{
  common: "Showy Rattlepod",
  bota: "Crotalaria spectabilis",
  medB: [
    "Limited medicinal use due to toxicity.",
    "Contains pyrrolizidine alkaloids.",
    "Used cautiously in traditional medicine."
  ],
  family: "Fabaceae"
},
{
  common: "Golden Crotalaria",
  bota: "Crotalaria chrysochlora",
  medB: [
    "Traditionally used in local herbal remedies.",
    "Contains antioxidant compounds.",
    "Medicinal use is limited."
  ],
  family: "Fabaceae"
},
{
  common: "Deflers' Rattlepod",
  bota: "Crotalaria deflersii",
  medB: [
    "Traditional medicinal use is poorly documented.",
    "Contains bioactive alkaloids.",
    "Requires cautious handling."
  ],
 family: "Fabaceae"
},
{
  common: "Many-seeded Rattlepod",
  bota: "Crotalaria polysperma",
  medB: [
    "Limited ethnomedicinal evidence.",
    "Contains naturally occurring alkaloids.",
    "Traditionally used in local medicine."
  ],
  family: "Fabaceae"
},
{
  common: "Uguenensis Rattlepod",
  bota: "Crotalaria uguenensis",
  medB: [
    "Traditionally used in East African herbal medicine.",
    "Contains antioxidant compounds.",
    "Limited pharmacological studies."
  ],
  family: "Fabaceae"
},
{
  common: "Blue Rattlepod",
  bota: "Crotalaria verrucosa",
  medB: [
    "Traditionally used for skin diseases.",
    "Applied to wounds.",
    "Used in Ayurveda for fever."
  ],
  family: "Fabaceae"
},
{
  common: "Perennial Lupine",
  bota: "Lupinus perennis",
  medB: [
    "Seeds are protein-rich after detoxification.",
    "Limited medicinal use.",
    "Contains antioxidant compounds."
  ],
  family: "Fabaceae"
},
{
  common: "Large-leaved Lupine",
  bota: "Lupinus polyphyllus",
  medB: [
    "Primarily cultivated as an ornamental.",
    "Seeds contain alkaloids.",
    "Limited traditional medicinal use."
  ],
  family: "Fabaceae"
},
{
  common: "East Indian Rosewood",
  bota: "Dalbergia latifolia",
  medB: [
    "Bark is traditionally used for digestive disorders.",
    "Applied to skin diseases.",
    "Contains antioxidant compounds."
  ],
  family: "Fabaceae"
},
{
  common: "Wild Mango",
  bota: "Cordyla africana",
  medB: [
    "Bark is used traditionally for stomach ailments.",
    "Fruit is nutritious.",
    "Applied in African herbal medicine."
  ],
  family: "Fabaceae"
},
{
  common: "Fever Tree",
  bota: "Acacia xanthophloea",
  medB: [
    "Bark is traditionally used for fever.",
    "Applied to eye infections.",
    "Contains antimicrobial tannins."
  ],
  family: "Fabaceae"
},
{
  common: "Whistling Thorn",
  bota: "Acacia drepanolobium",
  medB: [
    "Used in East African traditional medicine.",
    "Bark is applied to wounds.",
    "Contains antioxidant compounds."
  ],
  family: "Fabaceae"
},
{
  common: "Hock's Acacia",
  bota: "Acacia hockii",
  medB: [
    "Traditionally used for stomach disorders.",
    "Applied for skin infections.",
    "Limited medicinal research."
  ],
  family: "Fabaceae"
},
{
  common: "White Acacia",
  bota: "Acacia angustissima",
  medB: [
    "Traditionally used as livestock medicine.",
    "Leaves possess antioxidant compounds.",
    "Limited human medicinal use."
  ],
  family: "Fabaceae"
},
{
  common: "Balloon Cotton Bush",
  bota: "Gomphocarpus integer",
  medB: [
    "Traditionally applied to skin ailments.",
    "Latex has been used externally in folk medicine.",
    "Contains cardiac glycosides and should be used cautiously."
  ],
  family: "Apocynaceae"
},
{
  common: "Star Jasmine",
  bota: "Trachelospermum jasminoides",
  medB: [
    "Traditionally used to relieve joint pain.",
    "Used in Chinese herbal medicine for inflammation.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Apocynaceae"
},
{
  common: "False Aralia",
  bota: "Gymnosporia putterlickioides",
  medB: [
    "Traditionally used for stomach ailments.",
    "Applied to wounds in African folk medicine.",
    "Contains antioxidant compounds."
  ],
  family: "Celastraceae"
},
{
  common: "Kenyan Conostomium",
  bota: "Conostomium kenyense",
  medB: [
    "Traditional medicinal use is poorly documented.",
    "Limited ethnobotanical records.",
    "Primarily of botanical interest."
  ],
  family: "Melastomataceae"
},
{
  common: "Four-angled Conostomium",
  bota: "Conostomium quadrangulare",
  medB: [
    "Little documented medicinal use.",
    "Contains naturally occurring phytochemicals.",
    "Primarily studied botanically."
  ],
  family: "Melastomataceae"
},
{
  common: "Wild Mussaenda",
  bota: "Mussaenda frondosa",
  medB: [
    "Traditionally used for fever.",
    "Leaves are applied to wounds.",
    "Used in Ayurveda for skin disorders."
  ],
  family: "Rubiaceae"
},
{
  common: "Red Flag Bush",
  bota: "Mussaenda erythrophylla",
  medB: [
    "Traditionally used in African herbal medicine.",
    "Leaves are applied to skin infections.",
    "Contains antioxidant compounds."
  ],
  family: "Rubiaceae"
},
{
  common: "Noni",
  bota: "Morinda citrifolia",
  medB: [
    "Traditionally used to support immunity.",
    "Fruit is used for digestive health.",
    "Contains antioxidant and anti-inflammatory compounds."
  ],
  family: "Rubiaceae"
},
{
  common: "Bay-rum Tree",
  bota: "Pilocarpus racemosus",
  medB: [
    "Leaves contain pilocarpine.",
    "Traditionally used to stimulate sweating.",
    "Source of compounds used in glaucoma medications."
  ],
  family: "Rutaceae"
},
{
  common: "Wild Geranium",
  bota: "Pelargonium alchemilloides",
  medB: [
    "Traditionally used for respiratory infections.",
    "Applied to wounds.",
    "Contains antimicrobial compounds."
  ],
  family: "Geraniaceae"
},
{
  common: "Five-lobed Geranium",
  bota: "Pelargonium quinquelobatum",
  medB: [
    "Traditionally used for coughs.",
    "Leaves are applied to minor wounds.",
    "Contains aromatic essential oils."
  ],
  family: "Geraniaceae"
},
{
  common: "Ivy-scented Geranium",
  bota: "Pelargonium glechomoides",
  medB: [
    "Traditionally used as an aromatic herb.",
    "Applied to skin irritation.",
    "Contains essential oils."
  ],
  family: "Geraniaceae"
},
{
  common: "Purple Passion Plant",
  bota: "Gynura aurantiaca",
  medB: [
    "Traditionally used for minor skin irritation.",
    "Contains antioxidant pigments.",
    "Primarily cultivated as an ornamental."
  ],
  family: "Asteraceae"
},
{
  common: "Longevity Spinach",
  bota: "Gynura procumbens",
  medB: [
    "Traditionally used to help regulate blood sugar.",
    "Used in Southeast Asian medicine for hypertension.",
    "Contains antioxidant flavonoids."
  ],
  family: "Asteraceae"
},
{
  common: "African Marigold",
  bota: "Tagetes erecta",
  medB: [
    "Flowers support eye health due to lutein.",
    "Traditionally used for skin inflammation.",
    "Applied to minor wounds."
  ],
  family: "Asteraceae"
},
{
  common: "Yellow Wild Sunflower",
  bota: "Aspilia mossambicensis",
  medB: [
    "Traditionally used for wound healing.",
    "Applied to cuts to reduce bleeding.",
    "Used in African herbal medicine."
  ],
  family: "Asteraceae"
},
{
  common: "Aspilia",
  bota: "Aspilia pluriseta",
  medB: [
    "Traditionally used for stomach disorders.",
    "Applied externally for wounds.",
    "Contains antimicrobial phytochemicals."
  ],
  family: "Asteraceae"
},
{
  common: "Common Dwarf Marigold",
  bota: "Schkuhria pinnata",
  medB: [
    "Traditionally used for malaria symptoms.",
    "Used for digestive disorders.",
    "Contains anti-inflammatory compounds."
  ],
  family: "Asteraceae"
},
{
  common: "Tree Daisy",
  bota: "Montanoa hibiscifolia",
  medB: [
    "Traditionally used for fever.",
    "Applied in Central American herbal medicine.",
    "Contains antioxidant compounds."
  ],
  family: "Asteraceae"
},
{
  common: "Copperleaf",
  bota: "Acalypha crenata",
  medB: [
    "Traditionally used for skin infections.",
    "Applied to wounds.",
    "Contains antimicrobial phytochemicals."
  ],
  family: "Euphorbiaceae"
},
{
  common: "Chenille Plant",
  bota: "Acalypha hispida",
  medB: [
    "Traditionally used for skin disorders.",
    "Leaves are applied to cuts.",
    "Limited medicinal studies exist."
  ],
  family: "Euphorbiaceae"
},
{
  common: "Fischer's Leaf Flower",
  bota: "Phyllanthus fischeri",
  medB: [
    "Traditionally used for liver disorders.",
    "Supports urinary health in folk medicine.",
    "Contains antioxidant compounds."
  ],
  family: "Phyllanthaceae"
},
{
  common: "Shrubby Leaf Flower",
  bota: "Phyllanthus suffrutescens",
  medB: [
    "Traditionally used for kidney ailments.",
    "Applied for digestive disorders.",
    "Contains bioactive lignans."
  ],
  family: "Phyllanthaceae"
},
{
  common: "Star Gooseberry",
  bota: "Phyllanthus acidus",
  medB: [
    "Fruit is rich in vitamin C.",
    "Traditionally used for constipation.",
    "Leaves are used for skin problems."
  ],
  family: "Phyllanthaceae"
},
{
  common: "Stonebreaker",
  bota: "Phyllanthus amarus",
  medB: [
    "Widely used for liver support.",
    "Traditionally used for kidney stones.",
    "Contains antiviral and antioxidant compounds."
  ],
  family: "Phyllanthaceae"
},
{
  common: "Chinese Tallow Tree",
  bota: "Triadica sebifera",
  medB: [
    "Seeds have been used in traditional medicine.",
    "Applied externally for skin disorders.",
    "Contains bioactive compounds requiring caution."
  ],
  family: "Euphorbiaceae"
},
{
  common: "Guinea Hen Weed",
  bota: "Petiveria alliacea",
  medB: [
    "Traditionally used to support immunity.",
    "Used for joint pain in folk medicine.",
    "Contains sulfur-containing bioactive compounds."
  ],
  family: "Phytolaccaceae"
},
{
  common: "Shiny Bush",
  bota: "Peperomia pellucida",
  medB: [
    "Traditionally used for gout.",
    "Applied to boils and acne.",
    "Contains anti-inflammatory compounds."
  ],
  family: "Piperaceae"
},
{
  common: "Lignum Vitae",
  bota: "Guaiacum officinale",
  medB: [
    "Traditionally used for rheumatism.",
    "Historically used for gout.",
    "Wood resin possesses anti-inflammatory activity."
  ],
  family: "Zygophyllaceae"
},
{
  common: "Ringed St. John's Wort",
  bota: "Hypericum annulatum",
  medB: [
    "Traditionally used for wound healing.",
    "Applied to skin inflammation.",
    "Contains antioxidant flavonoids."
  ],
  family: "Hypericaceae"
},
{
  common: "Philippine Mussaenda",
  bota: "Mussaenda philippica",
  medB: [
    "Traditionally used for treating skin infections.",
    "Leaves are applied to wounds.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Rubiaceae"
},
{
  common: "Stinging Wigandia",
  bota: "Wigandia urens",
  medB: [
    "Traditionally applied to inflamed skin.",
    "Used externally for minor wounds.",
    "Limited scientific medicinal evidence."
  ],
  family: "Boraginaceae"
},
{
  common: "African Shepherd's Tree",
  bota: "Boscia mossambicensis",
  medB: [
    "Traditionally used for stomach disorders.",
    "Roots are used in African folk medicine.",
    "Contains antioxidant compounds."
  ],
  family: "Capparaceae"
},
{
  common: "Corkwood",
  bota: "Boscia coriacea",
  medB: [
    "Used traditionally for digestive ailments.",
    "Applied to skin infections.",
    "Limited medicinal research."
  ],
  family: "Capparaceae"
},
{
  common: "Water Hyssop",
  bota: "Mecardonia procumbens",
  medB: [
    "Traditionally used for fever.",
    "Applied to skin irritation.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Plantaginaceae"
},
{
  common: "Jamaican Browallia",
  bota: "Browallia americana",
  medB: [
    "Traditional medicinal use is limited.",
    "Contains naturally occurring alkaloids.",
    "Primarily cultivated as an ornamental."
  ],
  family: "Solanaceae"
},
{
  common: "Mangium",
  bota: "Acacia mangium",
  medB: [
    "Bark is traditionally used as an astringent.",
    "Applied for wound healing.",
    "Contains antimicrobial tannins."
  ],
  family: "Fabaceae"
},
{
  common: "Australian Pine",
  bota: "Casuarina equisetifolia",
  medB: [
    "Bark is used traditionally for diarrhea.",
    "Applied to ulcers and wounds.",
    "Contains high levels of tannins."
  ],
  family: "Casuarinaceae"
},
{
  common: "Blue Aristea",
  bota: "Aristea abyssinica",
  medB: [
    "Limited traditional medicinal use.",
    "Occasionally used in African herbal medicine.",
    "Contains antioxidant compounds."
  ],
  family: "Iridaceae"
},
{
  common: "Blue Stars",
  bota: "Aristea ecklonii",
  medB: [
    "Traditionally used in local remedies.",
    "Limited medicinal evidence.",
    "Primarily an ornamental species."
  ],
  family: "Iridaceae"
},
{
  common: "Mistletoe",
  bota: "Erianthemum dregei",
  medB: [
    "Traditionally used for hypertension.",
    "Applied in African herbal medicine.",
    "Contains bioactive flavonoids."
  ],
  family: "Loranthaceae"
},
{
  common: "Fig-leaf Gourd",
  bota: "Cucurbita ficifolia",
  medB: [
    "Traditionally used for diabetes management.",
    "Fruit supports digestive health.",
    "Rich in antioxidants."
  ],
  family: "Cucurbitaceae"
},
{
  common: "Pumpkin",
  bota: "Cucurbita pepo",
  medB: [
    "Seeds support prostate health.",
    "Rich in zinc and antioxidants.",
    "Traditionally used for intestinal parasites."
  ],
  family: "Cucurbitaceae"
},
{
  common: "Ridge Gourd",
  bota: "Luffa acutangula",
  medB: [
    "Traditionally used for liver disorders.",
    "Supports digestion.",
    "Rich in antioxidant compounds."
  ],
  family: "Cucurbitaceae"
},
{
  common: "Bottle Gourd",
  bota: "Lagenaria siceraria",
  medB: [
    "Traditionally used for urinary health.",
    "Supports heart health in Ayurveda.",
    "Rich in water and dietary fiber."
  ],
  family: "Cucurbitaceae"
},
{
  common: "Wild Bottle Gourd",
  bota: "Lagenaria sphaerica",
  medB: [
    "Limited medicinal documentation.",
    "Traditionally used in African herbal medicine.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Cucurbitaceae"
},
{
  common: "Creeping Foxglove",
  bota: "Asystasia riparia",
  medB: [
    "Traditionally applied to wounds.",
    "Used for digestive complaints.",
    "Contains antioxidant compounds."
  ],
  family: "Acanthaceae"
},
{
  common: "Fish Poison Tree",
  bota: "Barringtonia asiatica",
  medB: [
    "Traditionally used for skin diseases.",
    "Seeds are used externally only.",
    "Contains potent saponins."
  ],
  family: "Lecythidaceae"
},
{
  common: "Cannonball Tree",
  bota: "Couroupita guianensis",
  medB: [
    "Traditionally used for skin infections.",
    "Leaves possess antimicrobial activity.",
    "Used in Ayurveda for inflammation."
  ],
  family: "Lecythidaceae"
},
{
  common: "Asystasia",
  bota: "Asystasia charmian",
  medB: [
    "Traditionally used in herbal medicine.",
    "Applied to minor wounds.",
    "Limited scientific evidence."
  ],
  family: "Acanthaceae"
},
{
  common: "Raffia Palm",
  bota: "Raphia farinifera",
  medB: [
    "Sap is traditionally consumed as a tonic.",
    "Roots are used in African medicine.",
    "Contains antioxidant phytochemicals."
  ],
  family: "Arecaceae"
},
{
  common: "ZZ Plant",
  bota: "Zamioculcas zamiifolia",
  medB: [
    "Primarily an ornamental plant.",
    "Traditional medicinal use is minimal.",
    "Contains calcium oxalate crystals and should not be ingested."
  ],
  family: "Araceae"
},
{
  common: "Red-hot Poker",
  bota: "Kniphofia linearifolia",
  medB: [
    "Traditionally used for wound healing.",
    "Applied in African folk medicine.",
    "Limited pharmacological evidence."
  ],
  family: "Asphodelaceae"
},
{
  common: "African Greenbrier",
  bota: "Smilax anceps",
  medB: [
    "Roots are traditionally used as a blood purifier.",
    "Used for rheumatic disorders.",
    "Contains anti-inflammatory phytochemicals."
  ],
  family: "Smilacaceae"
},
{
  common: "Vanilla",
  bota: "Vanilla planifolia",
  medB: [
    "Contains antioxidant vanillin.",
    "Traditionally used to aid digestion.",
    "Used in aromatherapy for relaxation."
  ],
  family: "Orchidaceae"
},
{
  common: "Leopard Orchid",
  bota: "Ansellia africana",
  medB: [
    "Traditional medicinal use is limited.",
    "Used in some African herbal remedies.",
    "Primarily valued as an ornamental orchid."
  ],
  family: "Orchidaceae"
},
{
  common: "Mallorca St. John's Wort",
  bota: "Hypericum balearicum",
  medB: [
    "Traditionally used for wound healing.",
    "Applied for skin inflammation.",
    "Contains antioxidant flavonoids."
  ],
  family: "Hypericaceae"
},
{
  common: "Druent Bee Orchid",
  bota: "Ophrys druentica",
  medB: [
    "No documented medicinal use.",
    "Protected wild orchid species.",
    "Important for pollinator conservation."
  ],
  family: "Orchidaceae"
},
{
  common: "Long-flowered Lilac",
  bota: "Macrosyringion longiflorum",
  medB: [
    "Traditional medicinal use is poorly documented.",
    "Contains naturally occurring phytochemicals.",
    "Primarily valued botanically."
  ],
  family: "Apocynaceae"
},
{
  common: "Taiwan Firethorn",
  bota: "Pyracantha koidzumii",
  medB: [
    "Fruits are rich in antioxidants.",
    "Traditionally consumed in small quantities.",
    "Limited medicinal documentation."
  ],
  family: "Rosaceae"
},
];

module.exports = { data : plantData};