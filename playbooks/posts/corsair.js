export const corsairPlaybook = {
  name: "Corsair",
  type: "Post",
  blurb:
    "Dextrous masters of close quarter combat, ready to take on anything that threatens their ship.",
  edgesQS: ["Grace", "Iron", "Teeth"],
  skillsQS: ["Brace", "Break", "Hack", "Hunt", "Tend", "Vault", "Wavewalk"],
  languagesQS: ["Old Hand", "Signalling"],
  resourcesQS: {
    salvage: ["Armour Shards", "Blackpowder Pouch"],
    specimens: ["Suspicious Finger", "Beast Bones"],
    whispers: ["A Sobbing Mawship"],
    charts: ["A Stolen Starchart"],
  },
  drivesQS: [
    "Protect the crew from terrifying entities",
    "Make a name for yourself among bandits and raiders",
  ],
  miresQS: [
    "You cause more pain than necessary",
    "Your weapons dull and rust, even when maintained",
  ],
  aspects: [
    {
      name: "Steel-Step Dance",
      type: "Trait",
      length: 5,
      description:
        "The key to survival is mobility. They can't hurt you if they can't hit you.",
    },
    {
      name: "Stamp-Down Samba",
      type: "Trait",
      length: 5,
      description:
        "The key to survival is solidity. You can take whatever they throw your way and stay standing.",
    },
    {
      name: "Dirty Fighter",
      type: "Trait",
      length: 3,
      description:
        "Treat conflicts as triuphms when attempting to trip, knock down, blind, or stun opponents.",
    },
    {
      name: "Surgical Strike",
      type: "Trait",
      length: 3,
      description:
        "You can target attacks precisely (such as when aiming for a weak point) without cutting for difficulty.",
    },
    {
      name: "Prowess",
      type: "Trait",
      length: 4,
      description: "Mark to increase impact when attacking at close quarters",
    },
    {
      name: "Dangersense",
      type: "Trait",
      length: 4,
      description: "Mark to hijack focus from a trap or ambush as it triggers.",
    },
    {
      name: "Chain Attack",
      type: "Trait",
      length: 4,
      description:
        "You can deal damage to multiple nearby opponents with a successful CQ attack.",
    },
    {
      name: "Scars That Tell Stories",
      type: "Trait",
      length: 4,
      description:
        "Mark to gain a whisper based on damage or an injust you've just taken, supplied by the Firefly.",
    },
    {
      name: "Protective Beacon",
      type: "Gear",
      length: 5,
      description:
        "Treat conflicts as triumphs when attempting to prevent harm being done to a member of the undercrew.",
    },
    {
      name: "Berserker",
      type: "Trait",
      length: 4,
      description:
        "You're immune to mire while in combat, or any mire that would be caused by witnessing violence.",
    },
    {
      name: "Flashpowder Pouches",
      type: "Gear",
      length: 4,
      description:
        "Shake gently to produce a temporary torchlight, or mark to produce a blinding flash.",
    },
    {
      name: "Corsair's Sabre",
      type: "Gear",
      length: 4,
      description: "A classic wildsea blade. Deals CQ Keen damage.",
    },
    {
      name: "Boarding Axe",
      type: "Gear",
      length: 2,
      description:
        "A savage weapon used to chop through foes. Deals CQ Hewing damage. Increase impact when attacking ships, objects, and structures.",
    },
    {
      name: "Slinghammer",
      type: "Gear",
      length: 3,
      description:
        "A versatile weighted hammer with a fabric tether. Deals Blunt damage at CQ or LR.",
    },
    {
      name: "Throwing Knives",
      type: "Gear",
      length: 3,
      description: "Perfectly weighted. Deals LR Keen or Spike damage.",
    },
    {
      name: "Dragonfly Mantle",
      type: "Gear",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Blunt, Keen, Spike, Hewing, Blast.",
    },
    {
      name: "Hooded Crow",
      type: "Companion",
      length: 3,
      description:
        "A loyal bird trained to distract opponents in close-range combat. Mark to hijack focus from a nearby enemy as they attempt to attack, once per scene.",
    },
  ],
};
