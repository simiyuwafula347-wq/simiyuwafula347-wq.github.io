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
    "Vet by training. Builder, writer and composer by habit. This is my little corner: ambience worlds, music player kits and website templates, made slowly and made well.",
    "Everything here is drawn by code. The worlds write their own music live in your browser, so there are no image or audio files to manage.",
    "Previews live on my Pinterest boards. Only Pixel Beach is playable here, so the code stays with the people who buy it. Downloads are on itch.io and Gumroad."
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

/* The ambience worlds. Pixel Beach plays here; the rest are sold on itch.io.
   Paste a world's own itch.io page into itch:"" (leave "" to link to your itch.io profile). */
const WORLDS = [
  { id: "beach", title: "Pixel Beach", price: "Free", tags: ["sunset", "waves", "beam"], thumb: "ambience/thumbs/beach.png", play: "ambience/beach/",
    desc: "A girl and her dog walk the shore, then watch the sun set and the stars come out. A beam rises from a boat on the horizon." },
  { id: "pier", title: "The Pier Cove", price: "$4", tags: ["fishing", "day & night", "game"], thumb: "img/pier-cove.png", itch: "",
    desc: "One old fisherman, one pier, a whole day and night. Watch the 200-second ambience loop, or fish with him: pick a rod or a net, catch tilapia and rare Nile Perch, and let him doze off under the moon." },
  { id: "camp", title: "Campfire Cabin", price: "$3.50", tags: ["aurora", "crickets", "guitar"], thumb: "ambience/thumbs/camp.png", itch: "https://larrysmyl.itch.io/campfire-cabin-aurora-night-scene-kit",
    desc: "A camper by the fire at a lake cabin. A fox wanders in, an owl calls, fireflies drift, and the aurora dances over the pines." },
  { id: "dungeon", title: "Firefly Dungeon", price: "$5", tags: ["fireflies", "bells", "dragon"], thumb: "ambience/thumbs/dungeon.png", itch: "",
    desc: "A lantern-bearer and a swarm of fireflies walk a ruined corridor, open a rune door and wake a sleeping dragon on its gold." },
  { id: "forest", title: "Magical Blue Forest", price: "$5", tags: ["antlers", "harp", "swirls"], thumb: "ambience/thumbs/forest.png", itch: "",
    desc: "A white spirit stag walks through a quiet forest of a few great trees. Its antlers begin to glow, and magical swirls of light rise around it." },
  { id: "rain", title: "Rainy Window", price: "On itch.io", tags: ["storm", "thunder", "lofi"], thumb: "ambience/thumbs/rain.png", itch: "",
    desc: "A storm over the night city, a cat on the sill, a bus in the street and a distant tower pulsing light. Lightning, then a rainbow at dawn." },
  { id: "oasis", title: "Green Sun Oasis", price: "On itch.io", tags: ["oasis", "green sun", "oud"], thumb: "ambience/thumbs/oasis.png", itch: "",
    desc: "A man and his camel rest by a tent at a desert oasis as dusk falls. Then a green sun rises over the dunes, with a light that rings out in music." }
];

/* UI kits. cat: "ui" | "scene". price: "Free", "Pay what you want" or "$15". */
const KITS = [
  { title: "Abyss Sonar Kit", price: "$3", tags: ["UI kit", "beat-synced"], shots: ["img/abyss-sonar.jpg"], buy: SITE.itch, buyLabel: "Get it on itch.io", pin: "",
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

/* Not released yet: shown honestly as "coming soon". img = optional picture instead of the icon. */
const SOON = [
  { img: "img/wasp-player.jpg", title: "Wasp Player", desc: "My offline music player with 10 pixel skins. No ads, no tracking. Still a work in progress." },
  { icon: "🎮", title: "More games", desc: "Small playable worlds, made slowly." },
  { icon: "📱", title: "Apps & utilities", desc: "Small useful tools with one job each." },
  { icon: "🧩", title: "Game assets", desc: "Sprites, tiles and sounds you can drop into your own game." },
  { icon: "📖", title: "Books", desc: "Stories, poems and writing." }
];

/* Personal website templates (Gumroad, pay what you want). */
const TEMPLATES = [
  { title: "Website Template Bundle: 5 Personal Site Templates", price: "Pay what you want", tags: ["5 templates", "HTML & CSS"], shots: ["img/tpl-bundle.jpg"],
    buy: "https://simiyuwafula.gumroad.com/l/guvzgy", buyLabel: "Get the bundle",
    desc: "Portfolio, CV and certificates, analog clock, link-in-bio, and music & video. Five plain HTML and CSS templates in one download. Edit them in minutes." },
  { title: "Orbit: Space-Themed Link-in-Bio", price: "Pay what you want", tags: ["template", "HTML & CSS"], shots: ["img/tpl-orbit.jpg"],
    buy: "https://simiyuwafula.gumroad.com/l/cyoaqc", buyLabel: "Get Orbit",
    desc: "A space-themed link-in-bio template with three button styles. Add your own wallpaper. Plain HTML and CSS." }
];

/* The five templates inside the bundle, shown as previews. */
const BUNDLE_INSIDE = [
  { title: "CV & Certificates", tags: ["in the bundle", "3 themes"], shots: ["img/tpl-cv.jpg"],
    desc: "Experience, training and certificates with verify links, plus a print-ready CV. Three themes." },
  { title: "Music & Video Link-in-bio", tags: ["in the bundle", "space"], shots: ["img/tpl-music.jpg"],
    desc: "A page with a built-in player for your tracks and videos, and one link for everything else." },
  { title: "Link-in-bio Wallpaper", tags: ["in the bundle", "3 button styles"], shots: ["img/tpl-links.jpg"],
    desc: "A link-in-bio page that doubles as a wallpaper. Three button styles." },
  { title: "Analog Clock Portfolio", tags: ["in the bundle", "live time"], shots: ["img/tpl-clock.jpg"],
    desc: "Your face on the dial of a live analog clock showing your local time, with an Available now badge. Porcelain, Midnight and Moss themes." },
  { title: "Portfolio: Three Moods", tags: ["in the bundle", "3 themes"], shots: ["img/tpl-portfolio.jpg"],
    desc: "A bold portfolio with a theme switcher (Serious, Coast, Night) and an animated wallpaper." }
].map(t => ({ ...t, price: "In the bundle", buy: "https://simiyuwafula.gumroad.com/l/guvzgy", buyLabel: "Get the bundle" }));

/* Journal. "id" = link (letters, numbers, hyphens). Blank line = new paragraph.
   tag: "build log" | "observation" | "field note".  cover = card picture, dek = one-line standfirst, pull = quote shown on the journal grid.
   Body: "# " heading, "> " pull quote, "- " list, ![caption](img/journal/file.jpg) picture. **bold** *italic* `code`. */
const POSTS = [
  { id: "wasp-player-ten-skins", title: "Wasp Player: ten skins, one tiny player", date: "2026-11-23", tag: "build log", status: "Work in progress",
    dek: "A pixel wasp eats the music bars. Fully offline, no ads, no tracking.", cover: "img/journal/wasp-wip-cover.jpg",
    pull: "A tiny offline music player where a pixel wasp eats the music bars.",
    body: "Wasp Player is the app I am building right now. It plays your own music, fully offline, with no ads and no tracking, and a small pixel wasp that eats the music bars as the song moves.\n\n![Wasp Player in three of its skins: the green wasp screen, the quiet cove, and the lofi teddy](img/journal/wasp-wip.jpg)\n\n# One player, ten skins\n\nThe idea was simple: the player stays the same underneath, and the skin changes everything you touch. Every skin has its own buttons, its own screen, its own progress bar and its own font.\n\n![The ten skins: Wasp Player, Lofi Teddy, Cassette Deck, FM Stereo, Early 2000s, Vinyl Hub, Monkey Arcade, Pocket Calculator, Quiet Cove and Moonwood](img/journal/wasp-skins.jpg)\n\n- Wasp Player, Lofi Teddy, Cassette Deck, FM Stereo, Early 2000s\n- Vinyl Hub, Monkey Arcade, Pocket Calculator, Quiet Cove, Moonwood\n\n# Where it stands\n\nIt is still a work in progress, so I am not selling it yet. The skins are drawn and the player works. What is left is the slow part: polishing, testing on real phones, and making sure it stays small.\n\n> Fully offline. No ads. No tracking.\n\nWhen it is ready it will go on the shelf under Apps & Games. Until then, this page is the honest status." },

  { id: "from-notebook-sketch-to-live-website", title: "From notebook sketch to live website", date: "2026-11-22", tag: "build log",
    dek: "How this site started: boxes on paper first, code second.", cover: "img/journal/sketch-to-site-cover.jpg",
    pull: "Boxes first, no code.",
    body: "This site began in a notebook. Before any code, I drew the zones: a photo, a hero line, a clock for Nairobi, daily words, what I do, a music bar and a few themes to switch between.\n\n![The notebook sketch redrawn clean, next to the live site it became](img/journal/sketch-to-site.jpg)\n\n# Three steps\n\n- **Draw the zones.** Hero, daily words, themes, shelf, contact. Boxes first, no code.\n- **Pick the moods.** One layout, several themes. Switching changes the whole look.\n- **Build it plain.** HTML, CSS and JS. One data file holds all the content.\n\n> One layout, many moods.\n\nI started with three themes: paper drawing, modern pixel and Muscovy. The site now has six, with man cave, retro magazine and brutalist added. The layout never changed. Only the clothes did.\n\n![The three first themes side by side: Paper drawing, Modern pixel and Muscovy](img/journal/studio-portfolio.jpg)\n\nThe music bar on the sketch became a free-to-play world, Pixel Beach. Plans change a little when they meet the real thing, and that is fine." },

  { id: "projects-on-a-shelf", title: "Projects on a shelf, like a library", date: "2026-11-21", tag: "build log",
    dek: "Why every category became a book spine you can slide through.", cover: "img/journal/shelf-cover.jpg",
    pull: "I wanted browsing to feel like finding a book.",
    body: "I wanted browsing to feel like finding a book in a library, or a vinyl or a cassette on a shelf, not like scrolling a boring grid.\n\n# The idea\n\nIn the notebook, every kind of thing I make was a bubble: ambience, UI kits, web templates, free projects, games, game assets, books, apps and more to come. The plan was to group them as one shelf you slide through.\n\n![The shelf: each category became a book spine with a code, a name and an open link](img/journal/shelf.jpg)\n\nEach category became a book spine with a code number, a name written sideways, and a short line about what is inside. Tap one and it opens.\n\n# It keeps changing\n\nThe shelf has already changed since the first drawing. It now holds five books, Ambience, Utility, Apps & Games, Templates and UI Kits, and Free is a tag you can jump to instead of a book of its own.\n\n> Each category became a book spine.\n\nThat is the nice thing about a shelf. You can always add a book." },

  { id: "a-hello-that-reads-your-clock", title: "A hello that reads your clock", date: "2026-11-20", tag: "field note",
    dek: "Good morning, good afternoon, good evening. Small detail, big difference.", cover: "img/journal/hello-cover.jpg",
    pull: "Hope you have a wonderful time today.",
    body: "There is a tiny greeting on this site that reads the visitor's own clock. Good morning, good afternoon or good evening, and then a short wish for the rest of the day, or the night.\n\n![The greeting sketch, and what visitors actually see](img/journal/hello.jpg)\n\nIt is a very small piece of code. It is also one of my favourite details, because it makes a page feel like it noticed you." },

  { id: "welcome-to-the-cove", title: "Welcome to the cove", date: "2026-11-20", tag: "field note",
    dek: "A small corner of the internet for the things I make.",
    body: "This is a small corner of the internet for the things I make: pixel worlds, music player kits and website templates.\n\n# What you will find here\n\n- the shop, with everything I sell or give away\n- this journal, for notes on how things get made\n- one free world you can play right now: Pixel Beach\n\n> Small things get finished.\n\nI will write here when something is worth saying. No schedule, no pressure." },

  { id: "small-things-get-finished", title: "Small and finished beats grand and imagined", date: "2026-11-19", tag: "observation",
    dek: "A note to myself, which I also keep as the first daily words.",
    pull: "Small and finished beats grand and imagined.",
    body: "I keep a line on the front page of this site: small and finished beats grand and imagined. I wrote it for myself.\n\nA grand idea feels wonderful for about a week. It has no edges yet, so nothing in it can disappoint you. A small thing that is actually finished has edges, and mistakes, and a date. It is real, and someone else can use it.\n\n> Slow progress is still progress.\n\nMost of what is on this site started as a small thing. A beach that plays its own music. A player with a wasp in it. I would rather release the small version and make the next one better." },

  { id: "music-from-code", title: "How the worlds make their music", date: "2026-11-18", tag: "build log",
    dek: "No audio files. Every note is made live in your browser.",
    body: "None of the ambience worlds use an audio file. The pads, the bells, the rain and the little melodies are all generated live in your browser.\n\n# One voice per world\n\n- the rainy window has a soft electric piano\n- the campfire has a plucked guitar, and glass bells when the aurora appears\n- the beach has a music box, and the lighthouse calls with two slow notes\n\nEach world also follows its own story, so the music is low in the storm and brighter at dawn." },

  { id: "the-clock-in-the-corner", title: "The clock in the corner", date: "2026-11-17", tag: "field note",
    dek: "Wherever you are reading this, it is a real afternoon somewhere.",
    body: "In the top corner of the front page there is a small clock. It always shows Nairobi time.\n\nI added it so that anyone visiting could see that this is a place with a person behind it, in a real hour of a real day. Yours might be morning while mine is evening.\n\nIt is a small, quiet detail. I like that it never needs anything from you." },

  { id: "why-previews-live-on-pinterest", title: "Why you only see previews on Pinterest", date: "2026-11-15", tag: "observation",
    dek: "Free to enjoy, paid to keep.",
    pull: "Free to enjoy, paid to keep.",
    body: "Anyone can open a web page and read its code. That is fine for a free thing, but not for something I spent weeks drawing.\n\nSo the full kits and worlds are not playable on this site. You will find short previews on Pinterest and one complete free world, **Pixel Beach**, here.\n\n> Free to enjoy, paid to keep.\n\nIf you want the whole thing, the links are in the shop." }
];

/* Shelf on the home page. page = where the board opens. tagOnly = chip only, no book on the shelf. */
const BOARDS = [
  { name: "Ambience", color: "#7d8aa3", blurb: "Pixel worlds with live music", page: "shop/ambience.html", count: WORLDS.length + " worlds" },
  { name: "Utility", color: "#3b3a35", blurb: "Tools & notes on making them", page: "shop/utility.html", count: "tools · journal" },
  { name: "Apps & Games", color: "#5f6a52", blurb: "Small games, small apps", page: "shop/apps-games.html", count: "playable · soon" },
  { name: "Templates", color: "#e6dcc0", blurb: "Personal sites, pay what you want", page: "shop/templates.html", count: (TEMPLATES.length + BUNDLE_INSIDE.length) + " templates" },
  { name: "UI Kits", color: "#a8774a", blurb: "Music player kits", page: "shop/ui-kits.html", count: KITS.length + " kits" },
  { name: "Free", tagOnly: true, page: "shop/free.html" }
];
