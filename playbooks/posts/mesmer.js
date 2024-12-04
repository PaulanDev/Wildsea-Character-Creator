export const mesmerPlaybook = {
  name: "Mesmer",
  type: "Post",
  blurb:
    "The mind is a difficult place to plumb, but mesmers do it anyway - sometimes their own, sometimes the minds of those around them.",
  edgesQS: ["Sharps", "Instinct", "Veils"],
  skillsQS: ["Concoct", "Flourish", "Outwit", "Sense", "Study", "Sway", "Tend"],
  languagesQS: ["Signalling", "Old Hand", "Highvin"],
  resourcesQS: {
    salvage: ["Broken Pocketwatch"],
    specimens: ["Hallucinogenic Leaf", "Soporific Draught"],
    whispers: ["Beneath the Surface"],
    charts: ["A Dream-Drawn Sketch"],
  },
  drivesQS: [
    "Uncover a great mystery buried in the mind",
    "Help those suffering from great distraction",
  ],
  miresQS: [
    "Your own thoughts are cloudy, mercurial",
    "Clam eludes you; you are full of nervous energy",
  ],
  aspects: [
    {
      name: "Autohypnosis",
      type: "Trait",
      length: 5,
      description:
        "You've learned to meditate rather than sleep, allowing you to stay far more aware while resting than most.",
    },
    {
      name: "Meditative Healing",
      type: "Trait",
      length: 4,
      description:
        "Using a task a meditate in a peaceful environment allows you to heal each of your damaged traits or each of your injury tracks by one.",
    },
    {
      name: "An Uncomfortable Understanding",
      type: "Trait",
      length: 4,
      description: "Burn to clear one of a crewmate's mire tracks entirely.",
    },
    {
      name: "Empty the Mind",
      type: "Trait",
      length: 4,
      description:
        "Ignore cut from pain, hallucination and distractions while trying to act.",
    },
    {
      name: "Knowing The Unknown",
      type: "Trait",
      length: 3,
      description:
        "Mark to identify a target's secret fear, or burn to accurately evaluate the truth of a statement.",
    },
    {
      name: "Parasite Thought",
      type: "Trait",
      length: 2,
      description:
        "A living thought that's taken root in your mind, invisible but able to interact with the world. Allows you to hold and manipulate more objects than usual.",
    },
    {
      name: "Intricate Tattoos",
      type: "Trait",
      length: 3,
      description:
        "You're immune to confusion and hallucinations that you don't invite or create yourself.",
    },
    {
      name: "Staredown",
      type: "Trait",
      length: 5,
      description:
        "Locking eyes with an opponent allows you to assail their mind with unwanted sensation, manifesting as LR Salt damage. Only works on creatures with sight.",
    },
    {
      name: "Chameleon Veil",
      type: "Gear",
      length: 3,
      description:
        "Use a task to hold still and blend in with your surroundings, becoming almost impossible to notice until you move again.",
    },
    {
      name: "Shard of Dream-Soaked Amber",
      type: "Gear",
      length: 3,
      description:
        "Consume a specimen to experience a thought or memory from a nearby individual.",
    },
    {
      name: "Seven-Eye Scrawl",
      type: "Gear",
      length: 2,
      description:
        "Eyes are daubed across your body, each of them able to perceive the world in a different way. Mark to gain a specialized for of sight for a brief time (such as the ability to see ghosts, or heat, or magnetism).",
    },
    {
      name: "Smoked-Glass Hookah",
      type: "Gear",
      length: 3,
      description:
        "Releases a steady stream of wispy smoke. Mark to control smoke of vapours.",
    },
    {
      name: "Chromiguana",
      type: "Companion",
      length: 4,
      description:
        "Slow-moving and sleepy, usually found curled up around your shoulders or at the bottom of a bag. A surprisingly relaxing presence - treat conflicts as triumphs when trying to calm yourself or others.",
    },
    {
      name: "Pinned Butterfly",
      type: "Companion",
      length: 3,
      description:
        "Mark to wake the butterfly up for a brief time. While awake, the hypnotic patterns of the butterfly's wings induce drowsiness in those that catch sight of them.",
    },
  ],
};
