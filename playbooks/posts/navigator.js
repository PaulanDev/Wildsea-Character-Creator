export const navigatorPlaybook = {
  name: "Navigator",
  type: "Post",
  blurb:
    "Experienced pathfinders in a shifting world. An experienced navigator makes journeys across the rustling waves faster, safer, and far more profitable.",
  edgesQS: ["Grace", "Sharps", "Tides"],
  skillsQS: ["Brace", "Delve", "Hack", "Outwit", "Study", "Vault", "Wavewalk"],
  languagesQS: ["Signalling", "Old Hand", "Highvin"],
  resourcesQS: {
    salvage: ["Torn Canvas", "Ship's Timber"],
    specimens: ["Glowing Mushrooms", "Ancient Amber"],
    whispers: ["A Spit On The Rise", "Dawn Over New Waves"],
    charts: ["A Leather-Bound Journal", "A Detailed Chart"],
  },
  drivesQS: [
    "Discover a great secret of the distant waves",
    "Have an island named after you",
  ],
  miresQS: [
    "The waves seem callous, unpredictable",
    "You're tongue-tied when trying to relay important information",
  ],
  aspects: [
    {
      name: "In The Firefly's Glow",
      type: "Trait",
      length: 4,
      description:
        "You know the secret paths of the fireflied. Mark to discover a location without using a chart (once per scene).",
    },
    {
      name: "Years at Sea",
      type: "Trait",
      length: 4,
      description:
        "Mark to request an omen of the future (supplied by the Firefly).",
    },
    {
      name: "Wildlung",
      type: "Trait",
      length: 3,
      description:
        "You resist the effects of bad air, and are immune to airborne spores.",
    },
    {
      name: "Revelatory",
      type: "Trait",
      length: 3,
      description:
        "When you discover a new route or location, uncover a secret about that area as well.",
    },
    {
      name: "Hullsight",
      type: "Trait",
      length: 4,
      description:
        "While aboard your ship you can see as though you has eyes at any point across the outer gull.",
    },
    {
      name: "At The Right Moment",
      type: "Trait",
      length: 2,
      description:
        "Whenever your crew take a montage during a journey, choose one crewmember to perform an extra ask of their choice (you can't choose yourself).",
    },
    {
      name: "Journeys Unfinished",
      type: "Trait",
      length: 4,
      description:
        "Mark to learn the never-reached destination or port of origin for any wreck you come across. Burn to learn it for a ship still travelling.",
    },
    {
      name: "Skoinesis",
      type: "Trait",
      length: 2,
      description:
        "You have uncanny control over nearby ropes and rigging, which twist and move according to your will.",
    },
    {
      name: "Gale Flute",
      type: "Gear",
      length: 3,
      description:
        "A simple musical instrument at first glance, playing the gale flute has the curious property of bringing favourable winds your way.",
    },
    {
      name: "Cartographika",
      type: "Gear",
      length: 3,
      description:
        "A map-maker's ordinator. Use a task to create a rare resource, Chart of the Rustling Waves.",
    },
    {
      name: "Bundled Charts",
      type: "Gear",
      length: 3,
      description:
        "When you uncover a new route or location, you can mark this aspect. If you do so, the Firefly will inform you of a second route or location at the same time.",
    },
    {
      name: "Ornate Spyglass",
      type: "Gear",
      length: 3,
      description:
        "A spyglass that allows you to see mcuh further and in greater clarity than the average wildsailor. When you have a commanding view, mark to learn a secret of the surrounding waves.",
    },
    {
      name: "Flare Pistol",
      type: "Gear",
      length: 2,
      description:
        "A small sidearm loaded with chemical flares. Deals LR Acide damage. Can also be used to shed light over extremely large areas at will.",
    },
    {
      name: "Scout Falcon",
      type: "Companion",
      length: 2,
      description:
        "Once per journey allows a crewmember to roll 2d6 when on watch, then pick the preferred result. Also deals LR Keen damage.",
    },
    {
      name: "Weatherbug",
      type: "Companion",
      length: 3,
      description:
        "Mark to accurately predict the weather for the next few days.",
    },
  ],
};
