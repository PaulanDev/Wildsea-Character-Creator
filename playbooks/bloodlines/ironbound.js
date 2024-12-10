export const ironboundPlaybook = {
  name: "Ironbound",
  type: "Bloodline",
  blurb:
    "Ship-spirits with driftwood bodies, out to sail the waves once more. The Ironbound are naturally spiritual and sturdily built.",
  edgesQS: ["Iron", "Teeth", "Tides"],
  skillsQS: [
    "Brace",
    "Break",
    "Delve",
    "Hack",
    "Rattle",
    "Scavenge",
    "Wavewalk",
  ],
  languagesQS: ["Old Hand", "Signalling", "Raka Spit"],
  resourcesQS: {
    salvage: ["Sawprow Teeth", "Defused Shells"],
    specimens: ["Crezzerin's Leaves", "Rooted Fungus"],
    whispers: ["Woken to Thought"],
    charts: ["An Old Tradeway"],
  },
  drivesQS: ["Rescue an abandoned ship", "Free a shackled ship-construct"],
  miresQS: [
    "The world away from the waves is quiet, distant",
    "Your body cracks and splits, weakness spreading",
  ],
  aspects: [
    {
      name: "Titanic",
      type: "Trait",
      length: 5,
      description: "You're an imposing presence, a weight on the world.",
    },
    {
      name: "Ghost-Heart",
      type: "Trait",
      length: 3,
      description:
        "You count as fluent when communicating with ghosts, spirits, and other ironbound, regardless of languages used.",
    },
    {
      name: "Monument to Travel",
      type: "Trait",
      length: 4,
      description:
        "Whenever you gain a chart, mark to gain a related whisper as well.",
    },
    {
      name: "Fruiting Limb",
      type: "Trait",
      length: 3,
      description: "Use a task to create a resource, Keel-Fruit",
    },
    {
      name: "Attenuate",
      type: "Trait",
      length: 2,
      description:
        "Your animating spark can leave your body for a short time, becoming ghost-like and insubstantial, but still capable of movement.",
    },
    {
      name: "Structural Integration",
      type: "Trait",
      length: 3,
      description:
        "Once per journey you may repair a mark of damage on your ship without rolling.",
    },
    {
      name: "Vocal Recovery",
      type: "Trait",
      length: 3,
      description:
        "You can dredge up the voices of sailors long-lost, changing your pitch, tone, and accent on a whim. Burn to speak the truth of a lost sailor.",
    },
    {
      name: "Spotlight Lantern",
      type: "Gear",
      length: 4,
      description:
        "Flameless, but terribly bright nonetheless. Consume a resource as fuel to allow your entire crew to see perfectly in darkness, sporeclouds, and general murk.",
    },
    {
      name: "Ancient Tar-Seals",
      type: "Gear",
      length: 2,
      description: "You're immune to the effects of crezzerin.",
    },
    {
      name: "Living Workshop",
      type: "Gear",
      length: 4,
      description:
        "Your own wreck-salvaged body contains an array of useful tools - all crewmates gain an automatic 2d6 advantage on rolls taken to create temporary gear and machinery in your presence.",
    },
    {
      name: "Prowhammer",
      type: "Gear",
      length: 4,
      description:
        "A ship's prow, refashioned into a massive bludgeoning weapon. Deals CQ Blunt damage.",
    },
    {
      name: "Ornate Cannon",
      type: "Gear",
      length: 2,
      description:
        "A huge ship's cannon loaded with explosive shells. Deals LR Blast damage. Increase impact when targeting a horde or swarm of targets.",
    },
    {
      name: "Broadwood Carapace",
      type: "Gear",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Blunt, Keen, Serrated, Acid, Volt.",
    },
    {
      name: "Reef-Iron Plating",
      type: "Gear",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Spike, Hewing, Serrated, Frost, Flame.",
    },
    {
      name: "Shipside Symbiote",
      type: "Companion",
      length: 3,
      description:
        "When your ship would take damage to any of its ratings, you may mark boxes equal to that damage on this companion instead.",
    },
    {
      name: "Sailghast",
      type: "Companion",
      length: 4,
      description:
        "A mass of living canvas capable of flight. Mark to have it tangle around a target, restricting their movement.",
    },
  ],
};
