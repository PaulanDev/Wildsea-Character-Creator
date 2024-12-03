export const rootlessPlaybook = {
  name: "Rootless",
  type: "Origin",
  blurb:
    "Those born to the seafaring life, on a ship cutting through the rustling waves. The rootless learn how to handle the dangers of the sea from a young age.",
  edgesQS: ["Grace", "Instinct", "Tides"],
  skillsQS: [
    "Delve",
    "Flourish",
    "Harvest",
    "Rattle",
    "Scavenge",
    "Sway",
    "Wavewalk",
  ],
  languagesQS: ["Brasstongue", "Raka Spit", "Signalling"],
  resourcesQS: {
    salvage: ["Rusted Cogs", "Sailcloth"],
    specimens: ["Wormapple", "Firefly Bulbs"],
    whispers: ["A Welcoming Fleet"],
    charts: ["A Many-Folded Chart"],
  },
  drivesQS: [
    "Aid rootless ships and colonies",
    "Solve the problems of your family members",
  ],
  miresQS: [
    "The open sky is wide, oppressive",
    "Outsiders are difficult to trust",
  ],
  aspects: [
    {
      name: "Family Ties",
      type: "Trait",
      length: 3,
      description:
        "When you make a discovery during a journey, mark to tie it to your family in some way (such as blood relative, fleetfamily member, or family friend).",
    },
    {
      name: "Hull Hearted",
      type: "Trait",
      length: 3,
      description:
        "Once per scene, increase impact on any successful action taken whilst aboard a ship you own or crew.",
    },
    {
      name: "Wild Words",
      type: "Trait",
      length: 3,
      description:
        "Mark to remember a rumour or folktale pertinent to your situation (supplied by the Firefly).",
    },
    {
      name: "Needs Met",
      type: "Trait",
      length: 4,
      description:
        "You never mark mire for consuming food or drink, no matter the source or condition.",
    },
    {
      name: "Born to Sail",
      type: "Trait",
      length: 4,
      description:
        "You always know true North, and ignore cut on movement-related actions caused by adverse seas or damage to your ship.",
    },
    {
      name: "Sundew Senses",
      type: "Trait",
      length: 3,
      description:
        "You can instantly identify the presence and optential dangers of nearby predatory plants, no matter how well they're camouflaged.",
    },
    {
      name: "Fleetfamily Scarf",
      type: "Gear",
      length: 3,
      description:
        "A beautifully made sporescarf passed from traveller to seasoned traveller. You're immune to the effects of bad air and airborne spores.",
    },
    {
      name: "Nomad's Phrasebook",
      type: "Gear",
      length: 2,
      description:
        "Whenever you take a montage, you can study your phrasebook (in addition to your usual task), gaining a smattering of any one language until your next montage.",
    },
    {
      name: "Mechanical Limb",
      type: "Gear",
      length: 5,
      description: "A rusting prosthetic that feels no pain.",
    },
    {
      name: "Fishing Lure",
      type: "Gear",
      length: 3,
      description:
        "Add a positive tag to any living specimen you acquire while fishing.",
    },
    {
      name: "Patterened Sash",
      type: "Gear",
      length: 3,
      description:
        "Treat conflicts as triumphs when using social skills to affect animals.",
    },
    {
      name: "Shortspear",
      type: "Gear",
      length: 4,
      description:
        "Traditionally used for deckside defence. Deals CQ Spike damage.",
    },
    {
      name: "Slingshot",
      type: "Gear",
      length: 3,
      description:
        "A simple slingshot, loaded with anything from stones to scrap to seeds. Deals LR BLunt or Blast damage.",
    },
    {
      name: "Tarscale Armour",
      type: "Gear",
      length: 4,
      description:
        "Resist the hazardous effects of crezzerin exposure (searing, hallucinations, mutation).",
    },
    {
      name: "Springfox",
      type: "Companion",
      length: 3,
      description:
        "A nimble wildsea vulpine known to dance in the wake of larger ships. Once per journey you may treat the outcome of a watch roll as peace, no matter the result.",
    },
    {
      name: "Ring-Tailed Rabble-Rouser",
      type: "Companion",
      length: 4,
      description:
        "A pugnacious lemur companion with a natural curiosity when it comes to the running of a wildsea vessel.",
    },
  ],
};
