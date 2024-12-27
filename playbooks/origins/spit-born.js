export const spitbornPlaybook = {
  name: "Spit-born",
  type: "Origin",
  blurb:
    "Raised in the relative safety of an island or ruin caught up in the wildsea's growth. Most spit-born value trade, trust, and hospitality to strangers.",
  edgesQS: ["Iron", "Sharps", "Veils"],
  skillsQS: ["Break", "Cook", "Delve", "Outwit", "Rattle", "Study", "Sway"],
  languagesQS: ["Brasstongue", "Highvin"],
  resourcesQS: {
    salvage: ["Engine Piping", "Ancient Glass"],
    specimens: ["Hog Bones", "Chicken Feathers"],
    whispers: ["A Newly-Risen Spit"],
    charts: ["A Cryptic Map"],
  },
  drivesQS: [
    "Supply spit-born colonies with food and fresh water",
    "Deal harshly with gangs and grifters",
  ],
  miresQS: [
    "A keen fear of shakes and quakes",
    "A ravenous hunger for novel and exotic foodstuffs",
  ],
  aspects: [
    {
      name: "Pit-Fight Survivor",
      type: "Trait",
      length: 5,
      description: "You learnt how to take a beating and stay standing.",
    },
    {
      name: "Urban Exploration",
      type: "Trait",
      length: 3,
      description:
        "Mark to discover a friendly lead on services or information when in a port or city.",
    },
    {
      name: "Cobble Hearted",
      type: "Trait",
      length: 3,
      description:
        "Once per scene, increase impact on any successful action taken while in a port or city.",
    },
    {
      name: "Every Street Tells a Story",
      type: "Trait",
      length: 3,
      description: "Mark to learn a secret of a port or city you're docked at.",
    },
    {
      name: "Through the Throng",
      type: "Trait",
      length: 3,
      description:
        "Treat conflicts as triumphs when moving through crowds, herds, and swarms.",
    },
    {
      name: "Shrewd Marketeer",
      type: "Trait",
      length: 3,
      description:
        "Treat conflicts as triumphs when haggling over an exchange of cargo or resources.",
    },
    {
      name: "Spit & Polish",
      type: "Trait",
      length: 3,
      description:
        "Use a task to remove a negative trait (such as 'Rusted' or 'Broken') from any piece of salvage.",
    },
    {
      name: "Life of Scraps",
      type: "Trait",
      length: 3,
      description:
        "When gaining a benefit from a meal or alchemical concoction, ignore any associated negative effects.",
    },
    {
      name: "Scrutineer Eyepiece",
      type: "Gear",
      length: 4,
      description:
        "You can tell a fake, forgery, or counterfeit item at a glance.",
    },
    {
      name: "Acrid Long-Stem",
      type: "Gear",
      length: 4,
      description:
        "A spice-filled pipe made to burn it contents with acid rather than flame. Injury tracks you become subject to are one box shorter than normal.",
    },
    {
      name: "Docker Threads",
      type: "Gear",
      length: 4,
      description:
        "Resist the hazardous effects of crezzerin exposure (searing, hallucinations, mutation).",
    },
    {
      name: "Brass Knuckle",
      type: "Gear",
      length: 4,
      description:
        "A brute but reliable weapon for street figths. Deals CQ Blunt damage.",
    },
    {
      name: "Black-Market Pistol",
      type: "Gear",
      length: 4,
      description:
        "A firearm sources from unsavoury types. Deals LR Blast damage.",
    },
    {
      name: "Trained Ratroach",
      type: "Companion",
      length: 1,
      description:
        "A gutter-scavenger by nature, now working on your behalf. Once per montage gain a small salvage or specimen resource with a negative tag (in addition to your usual task).",
    },
    {
      name: "Calico Slink",
      type: "Companion",
      length: 3,
      description:
        "A semi-spectral cat winds its way around your legs. You have the ability to see clearly without light.",
    },
    {
      name: "Pangopod",
      type: "Companion",
      length: 4,
      description: "Half pangolin, half squid. Surprisingly cute.",
    },
  ],
};
