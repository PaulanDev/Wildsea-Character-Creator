export const tempestPlaybook = {
  name: "Tempest",
  type: "Post",
  blurb:
    "Those that have taste the storm, and come back changed - destructive dervishes of thunder and lightning.",
  edgesQS: ["Grace", "Sharps", "Teeth"],
  skillsQS: [
    "Break",
    "Flourish",
    "Outwit",
    "Rattle",
    "Scavenge",
    "Sense",
    "Vault",
  ],
  languagesQS: ["Old Hand", "Signalling"],
  resourcesQS: {
    salvage: ["Ceramic Battery"],
    specimens: ["Phosphorescent Beetle"],
    whispers: ["The Calm Before", "In the Blood"],
    charts: ["A Sketched Lightning-Strike"],
  },
  drivesQS: [
    "Communicate with a living storm on equal terms",
    "Avert a disaster by causing another disaster",
  ],
  miresQS: [
    "Sparks pinwheel from you as you move",
    "Your voce is thunder, impossible to lower from a shout",
  ],
  aspects: [
    {
      name: "Storm-Stride",
      type: "Trait",
      length: 4,
      description:
        "Mark to float for a brief time, electricity crackling around you as you do so.",
    },
    {
      name: "The Pulse",
      type: "Trait",
      length: 3,
      description:
        "You can sense nearby electrical fields, such as those produced by living organisms.",
    },
    {
      name: "Bolt-Switch",
      type: "Trait",
      length: 3,
      description:
        "Mark to instantly switch places with a willing crewmate within sight, or burn to switch with them and hijack focus at the same time.",
    },
    {
      name: "Old Accord",
      type: "Trait",
      length: 3,
      description:
        "Use a task and mark to quiet or banish a storm, or use a task and burn to summon one.",
    },
    {
      name: "The Skies Agree",
      type: "Trait",
      length: 4,
      description:
        "Increase impact when dealing Volt or Blast damage during an electrical storm or heavy rainfall.",
    },
    {
      name: "Thunder's Tone",
      type: "Trait",
      length: 3,
      description:
        "You can raise your voice to an ear-splitting shout, dealing CQ Blast damage and being easily heard over long distances.",
    },
    {
      name: "Lightning's Call",
      type: "Trait",
      length: 3,
      description:
        "You can direct bursts of voltaic energy through your palsm or fingers, dealing LR Volt damage.",
    },
    {
      name: "Ground Zero Overload",
      type: "Trait",
      length: 1,
      description:
        "Mark to deal Volt damage to all nearby foes, or burn to increase it to massive Volt damage.",
    },
    {
      name: "Ironjaw Seven-String",
      type: "Gear",
      length: 5,
      description:
        "A guitar-like instrument sarved from the bones of an ironjaw ray. Produces a harsh, buzzing tone when played that seems to awaken the spirit of rebellion in some.",
    },
    {
      name: "Mesh Relay",
      type: "Gear",
      length: 3,
      description:
        "Deal Volt damage to any creature that attacks you with their own body in close quarters (such as with tail or bite attacks).",
    },
    {
      name: "Voltamotive Interfacing",
      type: "Gear",
      length: 3,
      description:
        "You can act as an additional (or main) engine for your ship, powering its bite with your mere presence. Increase your ship's Speed rating by oen when you're aboard.",
    },
    {
      name: "Voltaic Lantern",
      type: "Gear",
      length: 3,
      description:
        "A simple light source that runs off of your own internal charge. Mark to delete a nearby source of electricity, absorbing it into the lantern for a brighter glow.",
    },
    {
      name: "Singed Coat",
      type: "Gear",
      length: 3,
      description:
        "You're resistant to three damage types, chosen from the following list: Frost, Flame, Salt, Blast, Volt",
    },
    {
      name: "Internal Battery",
      type: "Gear",
      length: 4,
      description:
        "Mark to kickstart a machine, charge a depleted power source, or temporarily increase the effectiveness of an engine.",
    },
    {
      name: "Squallkitten",
      type: "Companion",
      length: 2,
      description:
        "A small, playful feline made of roiling stormclouds. Gives your entire crew resistance to Volt damage.",
    },
    {
      name: "Sparking-Eel",
      type: "Companion",
      length: 4,
      description:
        "Winds abound limbs and under clothes, always moving. Mark to identify the nearest source of potent electricity no matter the distance.",
    },
  ],
};
