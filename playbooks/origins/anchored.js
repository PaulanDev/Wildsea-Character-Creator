export const anchoredPlaybook = {
    name: "Anchored",
    type: "Origin",
    blurb: "Those lost to the waves but unable to rest, their true origins superseded by spiritual energies. Anchored are spectral, souls given solid form.",
    edgesQS: ["Iron", "Tides", "Veils"],
    skillsQS: ["Brace", "Delve", "Hack", "Hunt", "Outwit", "Sense", "Wavewalk"],
    languagesQS: ["Old Hand", "Signalling"],
    resourcesQS: {
        salvage: ["Old Memento", "Broken Locket"],
        specimens: ["Glowing Plasm", "Spectral Flower"],
        whispers: ["Back from Beyond", "Drowned and Not"],
        charts: ["A Sketch of Shadowed Paths"],
    },
    drivesQS: ["Send other spirits to a peaceful rest", "Reconnect with your friends and family"],
    miresQS: ["Your material control wavers erratically", "Vision of your past death are difficult to banish"],
    aspects: [
        {
        name: "By a Thread",
        type: "Trait",
        length: 1,
        description: "Your grip on the world is tentative, but that does come with certain benefits. You are weak to Salt and Volt damage, but immune to Blunt, Keen, and Spike.",
    },
    {
        name: "Spectral Variance",
        type: "Trait",
        length: 3,
        description: "Mark to become insubstantial for a short time, allowing you to float and pass through solid objects.",
    },
    {
        name: "Mortal Needs",
        type: "Trait",
        length: 2,
        description: "Though you can do so if you choose, you have no real need to eat, drink, sleep or breathe.",
    },
    {
        name: "Ethereal Healing",
        type: "Trait",
        length: 3,
        description: "When being healer or having your gear repeaired, resources used are not consumed as normal - instead they degrade, giving them a negative tag (if they already have a negative tag, they're consumed as normal).",
    },
    {
        name: "Touch of the Beyond",
        type: "Trait",
        length: 2,
        description: "Once per scene, when your crew gains a resource, you can choose to give it the 'Spectral' tag.",
    },
    {
        name: "Geist Hand",
        type: "Trait",
        length: 3,
        description: "You can manipulate nearby objects without touching them, though the heavier they are, the harder it is.",
    },
    {
        name: "Death Mask",
        type: "Gear",
        length: 3,
        description: "Some anchored prefer to hide their face, letting the memories of their time among the living fade. Treat conflicts as triumphs when attempting to unnerve or unsettle.",
    },
    {
        name: "Siphoning Fork",
        type: "Gear",
        length: 3,
        description: "Whenever your crew gains a piece of cargo, gain a whisper related to it (or its previous owners) for yourself.",
    },
    {
        name: "Phantom Blade",
        type: "Gear",
        length: 3,
        description: "The ghost of a sword hovering at your hip. Deals CQ Salt damage, and doesn't have to be held to be used.",
    },
    {
        name: "Anchor Fragment",
        type: "Gear",
        length: 3,
        description: "A smaller piece hewed from a greater whole. Burn to immediately and completely heal any one of your injuries.",
    },
    {
        name: "Resonant Tether",
        type: "Gear",
        length: 2,
        description: "Spirits and the spectral realm become more visible and tangible to your entire crew in your presence.",
    },
    {
        name: "Battered Anja",
        type: "Gear",
        length: 4,
        description: "A stringed instrument meant to be played in tandem by the living and the dead, but you can play both parts. Empowers nearby spirits when played.",
    },
    {
        name: "Tempered Anchor",
        type: "Gear",
        length: 5,
        description: "Your anchor to the world is reinforced against damage and tampering, a wise move for a fleeting ghost.",
    },
    {
        name: "Faithful Spirit",
        type: "Companion",
        length: 4,
        description: "Loyal to the grave, and beyond. Mark to ignore the effect of an active mire for the rest of the scene.",
    }
]
}