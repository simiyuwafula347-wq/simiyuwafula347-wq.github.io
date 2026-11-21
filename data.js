/* =========================================================
   ALL YOUR CONTENT LIVES HERE. Edit this file, push, done.
   ========================================================= */
const SITE = {
  name: "Larry Simiyu",
  tag: "Studio",
  place: "Nairobi", timezone: "Africa/Nairobi",
  /* Email is stored in two pieces so simple spam bots can't read it from the page. */
  emailParts: ["waspecosystem", "gmail.com"],
  showEmail: true,               // set to false once the contact form works, to hide your address completely
  /* Contact form: free key from https://web3forms.com (sent to your email). Leave "" to fall back to the visitor's email app. */
  formKey: "",
  formEndpoint: "https://api.web3forms.com/submit",
  pinterest: "https://www.pinterest.com/Larrysmyl/",
  gumroad: "https://simiyuwafula.gumroad.com",
  itch: "https://larrysmyl.itch.io",
  intro: "Vet by training. Builder, writer & composer by habit. Welcome to my studio: ambience worlds, music player kits and free tools, made slowly and made well.",
  about: [
    "Vet by training. Builder, writer and composer by habit. This is my little corner: ambience worlds, music player kits and, soon, website templates, made slowly and made well.",
    "Everything here is drawn by code. The worlds write their own music live in your browser, so there are no image or audio files to manage.",
    "Previews live on my Pinterest boards. Only Pixel Beach is playable here, so the code stays with the people who buy it. Downloads are on Gumroad and itch.io."
  ],
  doing: [
    "Design & build websites, tools and templates",
    "Compose ambience & music",
    "Write fiction and poetry",
    "Release free projects for others to use"
  ],
  skills: ["Web design", "HTML / CSS / JS", "Pixel art", "Music composition", "Fiction & poetry", "Veterinary science", "Ambience design"],
  footer: "Made with patience in Kenya"
};

const DAILY = [
  { t: "Slow progress is still progress.", by: "Reminder" },
  { t: "Build the thing you wish already existed.", by: "Studio note" },
  { t: "Be still, and know.", by: "Psalm 46:10" },
  { t: "Peace at home is the foundation of every other work.", by: "Reminder" },
  { t: "Small and finished beats grand and imagined.", by: "Studio note" },
  { t: "I can do all things through Christ who strengthens me.", by: "Philippians 4:13" },
  { t: "Rise, not to be seen, but to be higher.", by: "Reminder" }
];

/* The six ambience worlds. buy/pin = links ("" hides the button). */
const BUNDLE = { price: "$24", buy: "https://simiyuwafula.gumroad.com/l/yxzyof", pin: "https://pin.it/75BnBdWzp" };
const WORLDS = [
  { id: "beach", title: "Pixel Beach", price: "Free", tags: ["sunset", "waves", "beam"], thumb: "ambience/thumbs/beach.png", play: "ambience/beach/",
    desc: "A girl and her dog walk the shore, then watch the sun set and the stars come out. A beam rises from a boat on the horizon." },
  { id: "rain", title: "Rainy Window", price: "Pay what you want", tags: ["storm", "thunder", "lofi"], thumb: "ambience/thumbs/rain.png",
    desc: "A storm over the night city, a cat on the sill, a bus in the street and a distant tower pulsing light. Lightning, then a rainbow at dawn." },
  { id: "camp", title: "Campfire Cabin", price: "$6", tags: ["aurora", "crickets", "guitar"], thumb: "ambience/thumbs/camp.png",
    desc: "A camper by the fire at a lake cabin. A fox wanders in, an owl calls, fireflies drift, and the aurora dances over the pines." },
  { id: "dungeon", title: "Firefly Dungeon", price: "$6", tags: ["fireflies", "bells", "dragon"], thumb: "ambience/thumbs/dungeon.png",
    desc: "A lantern-bearer and a swarm of fireflies walk a ruined corridor, open a rune door and wake a sleeping dragon on its gold." },
  { id: "forest", title: "Magical Blue Forest", price: "Bundle only", tags: ["antlers", "harp", "swirls"], thumb: "ambience/thumbs/forest.png",
    desc: "A white spirit stag walks through a quiet forest of a few great trees. Its antlers begin to glow, and magical swirls of light rise around it." },
  { id: "oasis", title: "Green Sun Oasis", price: "$6", tags: ["oasis", "green sun", "oud"], thumb: "ambience/thumbs/oasis.png",
    desc: "A man and his camel rest by a tent at a desert oasis as dusk falls. Then a green sun rises over the dunes, with a light that rings out in music." }
];

/* UI kits. cat: "ui" | "scene". price: "Free", "Pay what you want" or "$15". */
const KITS = [
  { title: "Abyss Sonar Kit", price: "$15", tags: ["UI kit", "beat-synced"], shots: ["img/abyss-sonar.jpg"], buy: "", pin: "",
    desc: "A deep-sea music player UI: a pixel sonar scope that sweeps with the beat, an anglerfish that opens its jaw on the kick, brass buttons and a depth-line progress bar. Load your own audio and it finds the beat." },
  { title: "Wasp UI Kit", price: "Free", tags: ["UI kit", "3 themes"], buy: "https://simiyuwafula.gumroad.com/l/wfhvif", pin: "https://pin.it/1QHsNIx9b",
    desc: "Three beat-synced player themes in plain HTML, CSS and JS: Lofi Record Cat, Chrono Gamer and Glitch Cyber Wasp. Instant theme switching, light and easy to recolour." },
  { title: "Glass Rainy Season Kit", price: "Pay what you want", tags: ["UI kit", "storm"], buy: "https://simiyuwafula.gumroad.com/l/vmlwem", pin: "https://pin.it/5O2d1ehEC",
    desc: "Frosted-glass storm player: silent lightning, a cheeky cat who tells you to close the window, a snail slime-trail progress bar and puddle buttons." },
  { title: "Puddle Day", price: "Pay what you want", tags: ["pixel scene", "ambience"], buy: "https://simiyuwafula.gumroad.com/l/olitib", pin: "https://pin.it/5O2d1ehEC",
    desc: "A calm pixel scene in a retro window: a girl, her gold cat, an umbrella and the rain, with a synth and lofi ambience player." },
  { title: "Muscovy Duck Kit", price: "Pay what you want", tags: ["UI kit", "feathers"], shots: ["img/muscovy-duck.png"], buy: "", pin: "",
    desc: "A cosy player with a Muscovy duck that preens and shakes its tail when you tap it, and a progress bar made of feathers that straighten and glow as the song plays." },
  { title: "Blurred City Puddle-Jump Kit", price: "Pay what you want", tags: ["UI kit", "lo-fi city"], buy: "", pin: "https://pin.it/5O2d1ehEC",
    desc: "Out-of-focus city lights, a pixel girl in a clear raincoat and yellow gumboots who splashes into a puddle on the beat, and a ripple-ring playhead that pulses with the music." }
];


/* Free things you can open and use right in the browser. */
const FREEBIES = [
  { title: "Bear Ambience", price: "Free", tags: ["ambience", "6 songs", "free"], shots: ["img/free-bear.jpg"], play: "free/bear-ambience/",
    desc: "Six slow songs made live in your browser, and one soft pixel bear with headphones. Pick a colour for each song and scrub the stitched thread. Headphones on." },
  { title: "Red Thread", price: "Free", tags: ["toy", "touch", "sound"], shots: ["img/free-thread.jpg"], play: "free/red-thread/",
    desc: "A red thread wanders across paper and tangles itself. Touch to steer it. Tap the sound button for a soft drone and plucks that follow the turns." },
  { title: "Deep Verse Bible", price: "Free", tags: ["reader", "offline", "KJV"], shots: ["img/free-verse.jpg"], play: "free/deep-verse/",
    desc: "A pixel Bible reader that works offline (KJV text). Search words or jump to a verse, highlight in four colours, write reflections and notes, with optional ambient sound." }
];

/* Not released yet: shown honestly as "coming soon". */
const SOON = [
  { icon: "🧱", title: "Website templates", desc: "Pixel-styled, single-folder website templates for artists, indie developers and music pages. Plain HTML, CSS and JS, no build step." },
  { icon: "🎮", title: "Games", desc: "Small playable worlds, made slowly." },
  { icon: "📱", title: "Apps & utilities", desc: "Small useful tools with one job each." },
  { icon: "🧩", title: "Game assets", desc: "Sprites, tiles and sounds you can drop into your own game." },
  { icon: "📖", title: "Books", desc: "Stories, poems and writing." }
];

/* Journal. "id" = link (letters, numbers, hyphens). Blank line = new paragraph.
   "# " heading, "> " quote, "- " list. **bold** *italic* `code`. */
const POSTS = [
  { id: "welcome-to-the-cove", title: "Welcome to the cove", date: "2026-11-20", tag: "notes",
    body: "This is a small corner of the internet for the things I make: pixel worlds, music player kits and, soon, website templates.\n\n# What you will find here\n\n- the shop, with everything I sell or give away\n- this journal, for notes on how things get made\n- one free world you can play right now: Pixel Beach\n\n> Small things get finished.\n\nI will write here when something is worth saying. No schedule, no pressure." },
  { id: "music-from-code", title: "How the worlds make their music", date: "2026-11-18", tag: "making",
    body: "None of the ambience worlds use an audio file. The pads, the bells, the rain and the little melodies are all generated live in your browser.\n\n# One voice per world\n\n- the rainy window has a soft electric piano\n- the campfire has a plucked guitar, and glass bells when the aurora appears\n- the beach has a music box, and the lighthouse calls with two slow notes\n\nEach world also follows its own story, so the music is low in the storm and brighter at dawn." },
  { id: "why-previews-live-on-pinterest", title: "Why you only see previews on Pinterest", date: "2026-11-15", tag: "notes",
    body: "Anyone can open a web page and read its code. That is fine for a free thing, but not for something I spent weeks drawing.\n\nSo the full kits and worlds are not playable on this site. You will find short previews on Pinterest and one complete free world, **Pixel Beach**, here.\n\n> Free to enjoy, paid to keep.\n\nIf you want the whole thing, the links are in the shop." }
];

/* Shelf on the home page. page = where the board opens. */
const BOARDS = [
  { name: "Ambience", color: "#7d8aa3", blurb: "Pixel worlds with live music", page: "projects/ambience.html", count: WORLDS.length + " worlds" },
  { name: "UI Kits", color: "#a8774a", blurb: "Music player kits", page: "projects/ui-kits.html", count: KITS.length + " kits" },
  { name: "Free", color: "#5f6a52", blurb: "Take them, use them", page: "projects/free.html", count: (FREEBIES.length + 3) + " free things" },
  { name: "Journal", color: "#3b3a35", blurb: "Notes on making things", page: "journal.html", count: POSTS.length + " entries" },
  { name: "Templates", color: "#e6dcc0", blurb: "Start your site here", page: "projects/coming-soon.html", count: "coming soon" },
  { name: "More", color: "#8a8a72", blurb: "Games · Apps · Books", page: "projects/coming-soon.html", count: "coming soon" }
];
