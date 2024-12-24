export const hunterPlaybook = {
  name: "Hunter",
  type: "Post",
  blurb:
    "Patient trackers who bring in food and supplies for their crews. Many hunters specialize in bringing down a particular type of quarry.",
  edgesQS: ["Grace", "Instinct", "Teeth"],
  skillsQS: [
    "Hack",
    "Harvest",
    "Hunt",
    "Outwit",
    "Rattle",
    "Sense",
    "Wavewalk",
  ],
  languagesQS: ["Raka Spit", "Signalling"],
  resourcesQS: {
    salvage: ["Leather Cord", "Rusted Mantrap"],
    specimens: ["Scorpion Carapace", "Bait Worms"],
    whispers: ["Leviathan Breeding Grounds"],
    charts: ["A Chart of Old Hollows"],
  },
  drivesQS: ["Bring down a leviathan", "Provide meat for a grand feast"],
  miresQS: [
    "Crezzersear pushes you to the brink of madness",
    "Something is hunting you - you're sure of it",
  ],
  aspects: [
    {
      name: "Ghost of the Wilds",
      type: "Trait",
      length: 3,
      description:
        "Choose either wild or urban areas.You leave barely any trace (and are almost impossible to track) when moving through your chosen area.",
    },
    {
      name: "From Nowhere",
      type: "Trait",
      length: 3,
      description:
        "Increase impact when attacking from a hidden position, or attacking an unaware target.",
    },
    {
      name: "Whisper on the Wind",
      type: "Trait",
      length: 3,
      description:
        "Consume a whisper to gain cryptic information on a target's whereabouts and actions.",
    },
    {
      name: "Bloodhound",
      type: "Trait",
      length: 3,
      description:
        "Your sense of smell is highly developed, allowing you to hunt and track by scent alone.",
    },
    {
      name: "Running Quiet",
      type: "Trait",
      length: 2,
      description:
        "Your guidance allows your vessel to keep a lower profile, disturbing fewer creatures and leaving less of a telltale trail. Increase your ship's Stealth rating by one when you're abroad.",
    },
    {
      name: "Rare Musk",
      type: "Gear",
      length: 4,
      description:
        "Collected from sleeping leviathans, apparently. Burn to drive a beast or insect of the waves into an intense instinctual behavior (such as fear, hunger, or frenzy).",
    },
    {
      name: "Slacker's Line",
      type: "Gear",
      length: 2,
      description:
        "A fishing rode designed to be left unattended. Once per journey, gain a live specimen appropriate to the area you're travelling through.",
    },
    {
      name: "Butchery Kit",
      type: "Gear",
      length: 3,
      description:
        "You can butcher dangerous specimens without risk or cutting for difficulty, and increase impact when gathering resources from a creature you've hunted.",
    },
    {
      name: "Snare Set",
      type: "Gear",
      length: 3,
      description:
        "Count conflicts as triumphs when readying traps, snares, or ambushes.",
    },
    {
      name: "Venomous Trophy",
      type: "Gear",
      length: 3,
      description: "Use a task to create a resource, Paralyzing Venom.",
    },
    {
      name: "Masterwork Leathers",
      type: "Gear",
      length: 2,
      description:
        "When you take this trait choose either beasts, plants, or insects. You're resistant to all damage from your chosen source.",
    },
    {
      name: "Boot-Knife",
      type: "Gear",
      length: 3,
      description:
        "Deal Keen damage to any creature that attacks you with their own body in close quarters (such as with tail or bite attacks).",
    },
    {
      name: "Jawspear",
      type: "Gear",
      length: 4,
      description:
        "A long-bladed spear with cruelly curving teeth. Deals CQ Serrated damage.",
    },
    {
      name: "Manifold Bow",
      type: "Gear",
      length: 2,
      description:
        "A finely crafted bow painted with an expansive quiver. Can deal LR damage of three types chosen from the following list: Spike, Toxin, Blast, Bolt, Salt.",
    },
    {
      name: "Target Dragonfly",
      type: "Companion",
      length: 3,
      description:
        "Every moment of its life is a hunt. Mark to identify a weak point or weakness of a creature you can see.",
    },
  ],
};
