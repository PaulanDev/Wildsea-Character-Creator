export const ektusPlaybook = {
  name: "Ektus",
  type: "Bloodline",
  blurb:
    "Towering, spine-studded cactoids whose deserts were eaten by the Verdancy. The ektus are strong, resilient, and in tune with their natural surroundings.",
  edgesQS: ["Iron", "Sharps", "Tides"],
  skillsQS: ["Brace", "Break", "Delve", "Hack", "Harvest", "Sense", "Wavewalk"],
  languagesQS: ["Saprekk", "Brasstongue", "Highvin"],
  resourcesQS: {
    salvage: ["Porous Stone", "Bronze Locket"],
    specimens: ["Scarab Shell", "Iron-Hard Needles"],
    whispers: ["A Desert Lost to Time"],
    charts: ["A Dusty Chart"],
  },
  drivesQS: [
    "Solve problems in ektus settlements",
    "Seek out relics of the eaten desert",
  ],
  miresQS: [
    "Your thorns cut, scratch and catch",
    "Your visions dims, your blooms wilting",
  ],
  aspects: [
    {
      name: "Towering",
      type: "Trait",
      length: 5,
      description: "You stand head and shoulders above most others.",
    },
    {
      name: "1000 Needles",
      type: "Trait",
      length: 3,
      description:
        "Deal Spike damage to any creatures that attacks you with their own body in close quarters (such as with tail or bite attacks)",
    },
    {
      name: "Iris Blossom",
      type: "Trait",
      length: 2,
      description: "You can see heat the way others see color",
    },
    {
      name: "Heliovore",
      type: "Trait",
      length: 3,
      description:
        "Heal a mark of damage on any one of your traits after spending a day in strong sunlight.",
    },
    {
      name: "Cactus-Flesh Filtration",
      type: "Trait",
      length: 3,
      description: "Use a task to give any liquid resource the 'Pure' tag.",
    },
    {
      name: "Longspine",
      type: "Trait",
      length: 4,
      description:
        "Your body is covered in iron-hard spines that deal CQ Spike damage.",
    },
    {
      name: "Tar-Scrawl Tattoos",
      type: "Trait",
      length: 4,
      description: "Resist the effect of bad air and airborne spores.",
    },
    {
      name: "Solid Footing",
      type: "Trait",
      length: 4,
      description:
        "Treat conflicts as triumphs when attempting to avoid being tripped, pushed or forcefully moved.",
    },
    {
      name: "Grafted Limb",
      type: "Trait",
      length: 3,
      description:
        "An ancient seal of a trade and fealty. Burn to call attention to this trophy and request a favor from another non-hostile ektus - it should not be refused.",
    },
    {
      name: "Stone-bound Histories",
      type: "Gear",
      length: 3,
      description:
        "A tattered tome of ancient stories handed down by the eldest ektus survivors of the pre-verdant days. Use a task to gain a sliver of Pre-V information.",
    },
    {
      name: "Zephyrskin Drums",
      type: "Gear",
      length: 4,
      description:
        "A set of hip-drums decorated with Saprekk-influenced patterns. Zephyrskin drums heat the air around them when played.",
    },
    {
      name: "Tower Shield",
      type: "Gear",
      length: 5,
      description: "An immense shield of wood and iron, built to last.",
    },
    {
      name: "Wedge-axe",
      type: "Gear",
      length: 4,
      description: "A long-handled axe that deals CQ Hewing damage.",
    },
    {
      name: "Heavy Chakram",
      type: "Gear",
      length: 3,
      description:
        "A set of weighty throwing blades, dealing LR Keen or Hewing damage.",
    },
    {
      name: "Desert Harness",
      type: "Gear",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Spike, Hewing, Serrated, Frost, Flame.",
    },
    {
      name: "Catekora",
      type: "Companion",
      length: 3,
      description:
        "A quilled fibrous feline with a penchant for firing spines when provoked. Deals LR Spike damage.",
    },
    {
      name: "Burrowing Bees",
      type: "Companion",
      length: 2,
      description:
        "Flightless desert bees that crawl across your body, fiercely territorial. You are immune to damage and effects caused by swarms.",
    },
  ],
};
