export const crashPlaybook = {
  name: "Crash",
  type: "Post",
  blurb:
    "Sturdy individuals with an eye for demolition and an appetite for destruction.",
  edgesQS: ["Instinct", "Teeth", "Sharps"],
  skillsQS: [
    "Brace",
    "Break",
    "Concoct",
    "Delve",
    "Outwit",
    "Scavenge",
    "Study",
  ],
  languagesQS: ["Knock", "Raka Spit"],
  resourcesQS: {
    salvage: ["Fine Red Powder", "Slab of Masonry"],
    specimens: ["Flare Beetle Horn", "Vermillion Herbs"],
    whispers: ["A Creeping Seam"],
    charts: ["A Weathered Chart"],
  },
  drivesQS: [
    "Carve our livable space from a spit",
    "Destroy a monument to something you hate",
  ],
  miresQS: [
    "Your burns, bruises and scars make others distrustful",
    "Things around you break at the slightest touch",
  ],
  aspects: [
    {
      name: "Thick Skin",
      type: "Trait",
      length: 5,
      description:
        "A history of breaking yourself while breaking other things has thoughened you up.",
    },
    {
      name: "Zero Days",
      type: "Trait",
      length: 3,
      description:
        "Once per scene, ignore any damage to yourself that comes as a result of your own destructive actions.",
    },
    {
      name: "The Seams Bear Secrets",
      type: "Trait",
      length: 4,
      description:
        "Ancient buildings remember. Receive a whisper when you destroy an ancient structure.",
    },
    {
      name: "Load-Bearing Wall",
      type: "Trait",
      length: 4,
      description:
        "Use a task to identify hidden elements essential to the integrity of a structure.",
    },
    {
      name: "Cannonball Dreams",
      type: "Trait",
      length: 3,
      description:
        "You jump headfirst into destruction. Literally. You can use your body as a projectile, dealing LR Blunt damage. You end up wherever you land.",
    },
    {
      name: "Padded Boilersuit",
      type: "Trait",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Blunt, Spike, Hewing, Blast, Volt",
    },
    {
      name: "Broken Points",
      type: "Trait",
      length: 4,
      description:
        "Increase impact when you break something as a show of strength or intimidation.",
    },
    {
      name: "Crude Rools",
      type: "Trait",
      length: 3,
      description:
        "Your solutions may not be clever, but they work. You may use the Break skill to construct simple tools.",
    },
    {
      name: "Canis Box Detonator",
      type: "Gear",
      length: 4,
      description:
        "A simple detonator used to set off explosives from a (presumably) safe distance.",
    },
    {
      name: "Crash Mask",
      type: "Gear",
      length: 2,
      description:
        "A mask favoured by those who work in dusty environments. You can see clearly through dust and smoke, and resist the effects of spores and bad air.",
    },
    {
      name: "Baby Bombs",
      type: "Gear",
      length: 2,
      description:
        "Handheld explosives waiting to be thrown. Dealers LR Blast damage to multiple nearby targets at once.",
    },
    {
      name: "Demolisher",
      type: "Gear",
      length: 2,
      description:
        "An over-sized weapon, usually a hammer or pickaxe. Deals CQ Blunt or Spike damage. Increase impact when destroying architecture.",
    },
    {
      name: "Wrecker's Globe",
      type: "Gear",
      length: 3,
      description:
        "A large, heavy ball on the end of a chain. Deals CQ Blunt damage. Useful for knocking foes back.",
    },
    {
      name: "Torteaver",
      type: "Companion",
      length: 4,
      description:
        "A small creature with a hard shell known for gnawing through wood and stone.",
    },
    {
      name: "Burrowhip Colony",
      type: "Companion",
      length: 4,
      description:
        "A small colony of burrowing insects. Mark to weaking a structure without destroying it.",
    },
    {
      name: "Blitceros",
      type: "Companion",
      length: 3,
      description:
        "A quadruped large enough to be ridden. Tends to bring down barriers by charging into them horn-first.",
    },
  ],
};
