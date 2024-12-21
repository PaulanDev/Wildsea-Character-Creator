export const wordbearerPlaybook = {
  name: "Wordbearer",
  type: "Post",
  blurb:
    "The last previous few tasked with ensuring messages and packages get from place to place across the vast expanse of the treetop sea.",
  edgesQS: ["Iron", "Tides", "Veils"],
  skillsQS: ["Delve", "Hunt", "Scavenge", "Study", "Sway", "Vault", "Wavewalk"],
  languagesQS: ["Chthonic", "Old Hand"],
  resourcesQS: {
    salvage: ["Packaging Twine", "Dented Birdcage", "Old Wax"],
    specimens: ["Inscribed Centipede", "Slug-Gum Sealant"],
    whispers: ["My Heart to Yours", "Safe and Secure"],
    charts: [
      "A Junction Network Book",
      "A Scrawled Envelope",
      "A Tattered Schedule",
    ],
  },
  drivesQS: [
    "Deliver a fragile package or missive to a distant receiver",
    "Establish connection and community between disparates",
  ],
  miresQS: [
    "Of course you could open one... Who would know?",
    "Sad old secrets from messages past tug at your dreams",
  ],
  aspects: [
    {
      name: "Respect Runs Deep",
      type: "Trait",
      length: 3,
      description:
        "Your clothes, your posture, your look - wordbearers are afforded a rare respect. Treat conflicts as triumphs when commanding authority in a settlement with a junction.",
    },
    {
      name: "The Words Always Know",
      type: "Trait",
      length: 3,
      description:
        "Once per scene you can gain a fragment of accurate information on the whereabouts of any individual you're trying to deliver to.",
    },
    {
      name: "The Safest Wrapping",
      type: "Trait",
      length: 4,
      description:
        "Use a task to convert a spoken or physical message of some kind into a whisper (if the message was a resource, you keep it in addition to gaining the whisper).",
    },
    {
      name: "Rightful Owner",
      type: "Trait",
      length: 4,
      description:
        "Increase impact when defending your deliveries, and when attempting to retrieve something stolen from yourself or your crew.",
    },
    {
      name: "Oathbound",
      type: "Trait",
      length: 4,
      description:
        "You're immune to chemical, arconautic, and mesmeric effects designed to draw information from you.",
    },
    {
      name: "Weatherbeaten",
      type: "Trait",
      length: 3,
      description:
        "You're resistant to three damage types, chosen form the folowing list: Blast, Acid, Toxin, Frost, Flame.",
    },
    {
      name: "Promise-Twine",
      type: "Gear",
      length: 4,
      description:
        "When a resource you're trying to deliver would be destroyed or lost it degrades instead, gaining a negative tag (if it has a negative tag, it is consumed as normal).",
    },
    {
      name: "Courier's Cage",
      type: "Gear",
      length: 3,
      description:
        "Consume a specimen to call a nearby messenger creature to you safely, and retrieve both the creature and whatever message they're holding as resources.",
    },
    {
      name: "Glyph Flares",
      type: "Gear",
      length: 4,
      description:
        "A set of chemical fireworks that burst into bright, recognisable glyph shapes.",
    },
    {
      name: "Pattern-Reader",
      type: "Gear",
      length: 4,
      description:
        "A miniature gramophone for playing scribed cylinders of wax, ceramics, or cured bark. Mark to record a fragment of conversation or sound you can hear, to be played back at a later time.",
    },
    {
      name: "Undeliverables",
      type: "Gear",
      length: 5,
      description:
        "Sometimes the oath is broken by the death of a receiver. You carry those undelievered letter and parcels around as a memorial, or possibly a penance.",
    },
    {
      name: "Canvas Sling",
      type: "Gear",
      length: 3,
      description:
        "A simple of effective weapon. Deals LR Blunt damage, and increases impact on CQ actions made to trip or retrain a target.",
    },
    {
      name: "Sortomaton",
      type: "Companion",
      length: 2,
      description:
        "A wheezing machine used for the sorting and categorzing of mail. You count as fluent in all languages, but only when reading addresses, listening to directions, or commiting a sender's message to memory.",
    },
    {
      name: "Retired Courier Dragonfly",
      type: "Companion",
      length: 4,
      description:
        "Still swift, but lacking stamina. Mark to gain a resource from your surroundings with some kind of text as a component, such as a chart of painted sign.",
    },
  ],
};
