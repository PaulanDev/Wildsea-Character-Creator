export const steepPlaybook = {
  name: "Steep",
  type: "Post",
  blurb:
    "Meditative brewers and herbologists with a strong connection to the spiritual world.",
  edgesQS: ["Veils", "Tides", "Instinct"],
  skillsQS: [
    "Concoct",
    "Cook",
    "Flourish",
    "Harvest",
    "Outwit",
    "Sense",
    "Sway",
  ],
  languagesQS: ["Old Hand", "Lyrebite", "Raka Spit"],
  resourcesQS: {
    salvage: ["Ancestral China", "Blackened Brew-Pot"],
    specimens: ["Hightower Tes-Leaves", "Drip-Crystal"],
    whispers: ["Circle of Friends", "Truth in Steam"],
    charts: ["A Tea-Stained Map"],
  },
  drivesQS: [
    "Bring calm to others in the midst of turbulence",
    "Brew with leaves from the most remote regions",
  ],
  miresQS: [
    "Your gear is scalding, too hot to touch",
    "Paranoia engulfs you - has something taken root",
  ],
  aspects: [
    {
      name: "Anima Presence",
      type: "Trait",
      length: 2,
      description:
        "Spirits can always see and hear you, and you can always see and hear them.",
    },
    {
      name: "Rite of Bloom",
      type: "Trait",
      length: 3,
      description:
        "Old flavours burst in novel ways. Consume a whisper when an ally inbibes one of your concoctions, and benefit from an aspect of theirs until the concoction has worn off.",
    },
    {
      name: "Potion of Youth",
      type: "Trait",
      length: 5,
      description:
        "Your body doesn't look it, but you are far older than you seem. You have learned many tricks to keep it so.",
    },
    {
      name: "Steeping Reality",
      type: "Trait",
      length: 3,
      description:
        "Tangible things steep and disperse their essence through the Physical Realm. Mark to know the past of an object.",
    },
    {
      name: "Not a Drop Wasted",
      type: "Trait",
      length: 4,
      description:
        "A steep never spills. Once per journey, a crewmate may suffer your disaster to add a box and a word to a benefit you brewed. If there was no twist you both may alter a word in a whisper.",
    },
    {
      name: "Reading the Remains",
      type: "Trait",
      length: 3,
      description:
        "Whether leaves, grounds, draff or bones, all concoctions leave remnants. Consume a specimen to ask a question and read an omen in your remnants.",
    },
    {
      name: "Zephyrous Sitr-Spoon",
      type: "Gear",
      length: 2,
      description:
        "The cooling breezes carried by this lengthy spit spoon always reach the bottom of the pot. It'll carry you, haltingly, too. Mark to poorly fly upon it for the duration of the scene.",
    },
    {
      name: "Coterie Drugget",
      type: "Gear",
      length: 4,
      description:
        "A place setting made of woven complexities. Allies may mark an aspect to benefit from one of your concoctions (with reduced impact).",
    },
    {
      name: "The Winning Wishbone",
      type: "Gear",
      length: 3,
      description:
        "Given the proper time and equipment, a steep can brew a hearty stock using this arm-length wishbone chunk. Triumphs on rolls made to brew heal one mark of damage for all cremates who shate in the result.",
    },
    {
      name: "Crezzagrean Kantharos",
      type: "Gear",
      length: 2,
      description:
        "A vessel ancient even in the pre-Verdancy, used to infuse more than just flavour into a mull. While brewing with this vessel, cut 1 to add 1 rank of a skill or language you know as an additional boon to the benefit provided.",
    },
    {
      name: "Ossein Kettles",
      type: "Gear",
      length: 2,
      description:
        "This heirloom, eternities old, is used to create beverages that warm more than your body. Triumphs on Concoct rolls gran a whisper.",
    },
    {
      name: "Salamini",
      type: "Companion",
      length: 3,
      description:
        "Like a salamax, just smaller. Their boiling spit is just the perfect temperature for a mull. Their scalding saliva deals CQ Flame damage.",
    },
    {
      name: "Steam-Familiar",
      type: "Companion",
      length: 4,
      description:
        "Warmth, wonder, and moisture are familiar to a steep, and sometimes the spirits they call linger on to comfort others. Mark to neutralize the effects of bad air, spores, or cold.",
    },
  ],
};
