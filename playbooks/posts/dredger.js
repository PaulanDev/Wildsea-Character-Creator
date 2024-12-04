export const dredgerPlaybook = {
  name: "Dredger",
  type: "Post",
  blurb:
    "Scavengers who trawl wrecks and ruins for loot and treasures. Most dredgers can gain entry to closed-off areas and pick out valuable trinkets at a glance.",
  edgesQS: ["Sharps", "Tides", "Veils"],
  skillsQS: [
    "Break",
    "Delve",
    "Outwit",
    "Rattle",
    "Scavenge",
    "Study",
    "Vault",
  ],
  languagesQS: ["Brasstongue", "Highvin"],
  resourcesQS: {
    salvage: ["Copper Rings", "Ancient Engine"],
    specimens: ["Soporific Sap", "Leviathan Claw"],
    whispers: ["A Risen Wreck"],
    charts: ["An ancient Shipping Manifest"],
  },
  drivesQS: [
    "Discover an untouched pre-verdant ruin",
    "Salvage a working machine from an ancient wreck",
  ],
  miresQS: [
    "Doors and seals stay stubbornly closed to you",
    "Your movements cause wrecks to shift and creak",
  ],
  aspects: [
    {
      name: "Seared Skin",
      type: "Trait",
      length: 4,
      description:
        "Resist the hazardous effects of crezzerin exposure (searing, hallucinations, mutation)",
    },
    {
      name: "Master Salvager",
      type: "Trait",
      length: 1,
      description:
        "Add a positive tag of your choice to any salvage you acquire from wrecks, reefs, and ruins.",
    },
    {
      name: "Mental Catalogue",
      type: "Trait",
      length: 4,
      description: "Mark to discern the use or history of something ancient.",
    },
    {
      name: "Lurid Cartography",
      type: "Trait",
      length: 3,
      description:
        "You can use charts to find shipwrecks and disasters, as well as the usual islands and oddities.",
    },
    {
      name: "Devil May Care",
      type: "Trait",
      length: 3,
      description:
        "Treat conflicts as triumphs when avoiding traps and environmental hazards.",
    },
    {
      name: "Arborafathometer",
      type: "Gear",
      length: 3,
      description:
        "A complex depth-gauge for measuring your precise distance from the Darkness-Under-Eaves. Increase your ship's Tilt rating by one when you're aboard.",
    },
    {
      name: "Scrounge",
      type: "Trait",
      length: 3,
      description:
        "Whenever you crew gains a piece of cargo, gain a resource (likely salvage, but perhaps a specimen or whisper) related to that cargo for yourself.",
    },
    {
      name: "Cramped Conditioning",
      type: "Trait",
      length: 3,
      description:
        "Ingore cut that would be imposed for taking actions in enclosed or architecturally unstable spaces.",
    },
    {
      name: "Silkwire Coil",
      type: "Gear",
      length: 5,
      description:
        "A near-unbreakable coil of thick wire that is somehow soft to the touch. Can be re-coiled with a simple flick after being unwound.",
    },
    {
      name: "Amber Lenses",
      type: "Gear",
      length: 4,
      description:
        "Goggles that allow you to see perfectly through smoke, mists, and sporeclouds.",
    },
    {
      name: "Moth Lantern",
      type: "Gear",
      length: 4,
      description: "Uses luminous moths to illuminate a small area around you.",
    },
    {
      name: "Springheel Boots",
      type: "Gear",
      length: 4,
      description:
        "Mark to make a prodigious leap and land safely without having to roll.",
    },
    {
      name: "Tomb Hammer",
      type: "Gear",
      length: 2,
      description:
        "As much a tool as it is a weapon. Deals CQ Blunt damage. Increases impact when smashing stonework and structures.",
    },
    {
      name: "Key-Tail Scorpion",
      type: "Companion",
      length: 2,
      description:
        "A curious little beast with a skeleton-sky stinger. Once per scene, you may open any mundane lock.",
    },
    {
      name: "Sanctipede",
      type: "Companion",
      length: 3,
      description:
        "Drawn to history and forgotten things. Consume a chart to indentify and retrieve a piece of ancient and valuable salvage in your vicinity if possible.",
    },
    {
      name: "Tickerclick",
      type: "Companion",
      length: 4,
      description:
        "A punchcard intelligence in a noisy construct body, the whirring and clanking of the mouse-like companion is useful for drawing attention away from your positions.",
    },
  ],
};
