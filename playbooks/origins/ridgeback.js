export const ridgebackPlaybook = {
  name: "Ridgeback",
  type: "Origin",
  blurb: "",
  edgesQS: ["Grace", "Iron", "Teeth"],
  skillsQS: ["Brace", "Break", "Cook", "Harvest", "Rattle", "Tend", "Vault"],
  languagesQS: ["Chthonic", "Brasstongue", "Old Hand"],
  resourcesQS: {
    salvage: ["Knucklebone Dice", "Sharpened Stones"],
    specimens: ["Giant Wolf Jaw", "Gorse Root"],
    whispers: ["Caves Beneath"],
    charts: ["A Faded Almanac"],
  },
  drivesQS: [
    "Climb the highest peaks",
    "Discover and claim an unknown mountain-top",
  ],
  miresQS: [
    "The roll of the waves sickens you",
    "Your mind turns to sacrifice in times of trouble",
  ],
  aspects: [
    {
      name: "Barrel-Chested",
      type: "Trait",
      length: 5,
      description: "You may not be built fancy, but you are built sturdy.",
    },
    {
      name: "Stone Hearted",
      type: "Trait",
      length: 4,
      description:
        "Once per scene, increase impact on any successful action taken whilst on ancient ground.",
    },
    {
      name: "Search for Omens",
      type: "Trait",
      length: 3,
      description:
        "Mark to ask a question and receive an omen to interpret in return (supplied by the Firefly).",
    },
    {
      name: "Thick Skin",
      type: "Trait",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Blunt, Toxin, Cold, Salt, Volt",
    },
    {
      name: "Crushing Blows",
      type: "Trait",
      length: 4,
      description:
        "Your fists and feet are the only weapons you need. They deal CQ Blunt damage.",
    },
    {
      name: "Fragments Like Gods",
      type: "Trait",
      length: 3,
      description:
        "Whenever you gain a stone-based resource, give it the 'Sacred' tag.",
    },
    {
      name: "Archaeodermis",
      type: "Trait",
      length: 2,
      description:
        "Your skin (or whatever you have as an outer covering) mimics the mountain you were raised on. You're immune to Keen damage, as well as bites and stings from small creatures.",
    },
    {
      name: "Chipping Tools",
      type: "Gear",
      length: 3,
      description:
        "Treat conflicts as triumphs when altering or working with stone or bone.",
    },
    {
      name: "Leviathan Furs",
      type: "Gear",
      length: 4,
      description:
        "You never mark mire when confronted with an unknown or terrifying beast, no matter the size.",
    },
    {
      name: "Ritual Mask",
      type: "Gear",
      length: 3,
      description: "You can clearly see spirits and the spectral realm.",
    },
    {
      name: "Whispering Charm",
      type: "Gear",
      length: 3,
      description:
        "Consume a whisper to learn a secret about a nearby (supplied by the Firefly).",
    },
    {
      name: "Hexed Tooth",
      type: "Gear",
      length: 3,
      description: "Mark to levitate and control exposed bone.",
    },
    {
      name: "Great Beast Horns",
      type: "Gear",
      length: 3,
      description:
        "These might have deep cetemonial meaning, or just cut an impressive silhouette - either way these horns deal CQ Spike damage, and you ignore cut when defending yourself against charging opponents.",
    },
    {
      name: "Shamanic Idol",
      type: "Gear",
      length: 4,
      description:
        "Holds a sliver or power from a not-quite-god. Deals LR Salt damage.",
    },
    {
      name: "Swift Hawk",
      type: "Companion",
      length: 2,
      description:
        "A surly, vicious bird that can deal LR Keen damage. Once per scene, hiijack focus to temporarily blind or distract an attacking opponent.",
    },
    {
      name: "Mountain Snouter",
      type: "Companion",
      length: 3,
      description:
        "An ill-tempered boar with cruel tusks. Deals CQ Spike damage, and is large enough to ride.",
    },
  ],
};
