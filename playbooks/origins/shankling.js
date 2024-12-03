export const shanklingPlaybook = {
  name: "Shankling",
  type: "Origin",
  blurb:
    "Those that spent their early lives in cities hanging from the boughs of tallshanks, the wildsea's largest trees. Shanklings usually have a devil-may-care attitude and a great head for heights.",
  edgesQS: ["Grace", "Tides", "Veils"],
  skillsQS: [
    "Flourish",
    "Hack",
    "Harvest",
    "Hunt",
    "Study",
    "Vault",
    "Wavewalk",
  ],
  languagesQS: ["Knock", "Signalling"],
  resourcesQS: {
    salvage: ["Ancient Stone", "Length of Chain"],
    specimens: ["Broadwood Branch", "Crowning Leaf"],
    whispers: ["Sunset Through Branches"],
    charts: ["An Etched Branch-Map"],
  },
  drivesQS: ["Climb the highest shanks", "Establish a high-port"],
  miresQS: [
    "Branches break and bend beneath you",
    "The opposite of vertigo, a deck-level queasiness",
  ],
  aspects: [
    {
      name: "Head for Heights",
      type: "Trait",
      length: 4,
      description:
        "You're immune to vertigo, nausea, and mire caused by heights and precarious positions.",
    },
    {
      name: "Skybridge Step",
      type: "Trait",
      length: 5,
      description:
        "An elegant defensive dance that keeps you our of harm's way.",
    },
    {
      name: "High Ground",
      type: "Trait",
      length: 3,
      description:
        "Once per scene, increase impact on any successful action taken whilst you have the high ground.",
    },
    {
      name: "Rising Meteor",
      type: "Trait",
      length: 4,
      description:
        "Mark to sprint up a surface that would usually require you to climb it, even it it's unstable.",
    },
    {
      name: "From Bough to Brain",
      type: "Trait",
      length: 5,
      description:
        "Use a task to study a tree (of any size) and learn its secrets, age, and condition (supplied by the Firefly).",
    },
    {
      name: "Hawksight",
      type: "Trait",
      length: 4,
      description:
        "You can see much further and in greater clarity than the typical wildsailor.",
    },
    {
      name: "Grappling Hook",
      type: "Gear",
      length: 2,
      description:
        "When the jook is thrown and anchored, it allows you to swing over chasms and climb sheer surfaces. Treat conflicts as triumphs when climbing or swinging.",
    },
    {
      name: "Glider's Cloak",
      type: "Gear",
      length: 3,
      description: "You can land safely after any prepared fall.",
    },
    {
      name: "Balancing Staff",
      type: "Gear",
      length: 4,
      description: "Both a weapon and an acrobatic aid. Deals CQ Blunt damage.",
    },
    {
      name: "Raptor's Claw",
      type: "Gear",
      length: 3,
      description:
        "A talon-like gauntlet inspired by the hunting patterns of wingless birds. Beals CQ Hewing damage, and can be used to make controlled descents down vertical surfaces.",
    },
    {
      name: "Broadwood Bow",
      type: "Gear",
      length: 3,
      description: "Exquisitely crafted. Deals LR Spike or Toxin damage.",
    },
    {
      name: "Feathered Mantle",
      type: "Gear",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Blunt, Serrated, Toxin, Frost, Salt.",
    },
    {
      name: "Sentinel Skywing",
      type: "Companion",
      length: 2,
      description:
        "A watchful bird, often used for scouting remote areas. Mark to learn a secret of the surrounding waves.",
    },
    {
      name: "Bark-Peeling Ferret",
      type: "Companion",
      length: 4,
      description:
        "Expert at routing hidden bugs, even from the mighty ironroots. Mark or use a task to gain an insect specimen from a nearby branch or tree trunk.",
    },
    {
      name: "Feathered Raptor",
      type: "Companion",
      length: 3,
      description:
        "A beautifully feathered lizard, the results of generations of careful breeding to engender a modicum of sociability (still not quite there yet). Deals CQ Hewing damage, and is large enough to ride.",
    },
  ],
};
