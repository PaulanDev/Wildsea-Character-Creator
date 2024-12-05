export const slingerPlaybook = {
  name: "Slinger",
  type: "Post",
  blurb:
    "The long-range equivalents of the corsair, slingers engage their enemies from a distance with well-placed bolts and arrows or barrages of gunfire.",
  edgesQS: ["Grace", "Iron", "Sharps"],
  skillsQS: ["Break", "Flourish", "Hack", "Hunt", "Outwit", "Rattle", "Vault"],
  languagesQS: ["Saprekk", "Brasstongue", "Lyrebite"],
  resourcesQS: {
    salvage: ["Shell Casings", "Blackpowder Pouch"],
    specimens: ["Wormapple Cores"],
    whispers: ["Distant Thunder"],
    charts: ["An Old Drunkard's Log"],
  },
  drivesQS: [
    "Protect the crew from boarders and pirates",
    "Find and restore a legendary pre-verdant weapon",
  ],
  miresQS: [
    "Your weapons jam and misfire at inopportune times",
    "Your distance vision blurs, turns hazy",
  ],
  aspects: [
    {
      name: "Gunslinger's Poise",
      type: "Trait",
      length: 5,
      description: "You're hard to shake, no matter what comes your way.",
    },
    {
      name: "Trigger Discipline",
      type: "Trait",
      length: 3,
      description:
        "When attacking at long range, mark to count a conflict result as a triumph.",
    },
    {
      name: "Deadeye",
      type: "Trait",
      length: 3,
      description:
        "You can target attacks precisely (such as when aiming for a weak point) without cutting for difficulty.",
    },
    {
      name: "From On High",
      type: "Trait",
      length: 4,
      description:
        "A true eagle's view. Increase impact when attacking from an elevated position.",
    },
    {
      name: "Thunder",
      type: "Trait",
      length: 4,
      description: "Mark to increase impact when attacking at long range.",
    },
    {
      name: "Trick Shot",
      type: "Trait",
      length: 5,
      description:
        "Burn to attack a target you can't see or don't have line of sight to.",
    },
    {
      name: "Amateur Gunsmith",
      type: "Trait",
      length: 4,
      description:
        "Extend the track of any temporary LR weapon you craft for yourself by two boxes.",
    },
    {
      name: "Toe to Toe",
      type: "Trait",
      length: 4,
      description:
        "You can use LR weapons in close quarters combat and tight engagements without cutting for difficulty.",
    },
    {
      name: "Essence Grinder",
      type: "Gear",
      length: 2,
      description:
        "Consume a specimen to add a thematically appropriate damage type to one of your existing LR weapons. This added damage type persists until you use Essence Grinder again.",
    },
    {
      name: "Precision Denial",
      type: "Gear",
      length: 4,
      description:
        "Once per scene, you may instantly hijack focus when targeted by a ranged attack.",
    },
    {
      name: "Barrage",
      type: "Trait",
      length: 4,
      description:
        "You can deal damage to multiple distant opponents with a successful LR attack.",
    },
    {
      name: "Smoke Bombs",
      type: "Gear",
      length: 4,
      description:
        "Mark to produce a cloud of smoke, obscuring vision in your area for others, but not for you.",
    },
    {
      name: "Hammerpin Revolver",
      type: "Gear",
      length: 3,
      description:
        "A heavy revolver with a rotating cylinder. Deals LR Blunt or Blast damage.",
    },
    {
      name: "Bolt-Action Rifle",
      type: "Gear",
      length: 2,
      description:
        "A long-barrelled rifle with an amber-lensed scope. Deals LR Blast damage. Increase impact when attacking from a hidden position.",
    },
    {
      name: "Copper Sawn-Off",
      type: "Gear",
      length: 3,
      description:
        "A sawn-off shotgun that can be loaded with shrapnel or salt rounds. Deals LR Blast or Salt damage.",
    },
  ],
};
