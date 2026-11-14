const ARTIFACTS = {
  moon: [
    {
      id: "surveyor3",
      year: "1967",
      shortName: "Surveyor 3",
      name: "Surveyor 3 Robotic Lander",
      mission: "Surveyor Program & Apollo 12 • Ocean of Storms",
      status: "VISITED BY HUMANS",
      coords: "3.016° S, 23.421° W",
      landed: "April 20, 1967",
      ended: "May 4, 1967",
      legacy: "First Hardware Revisited on Another World",
      mapX: 34,
      mapY: 56,
      heroNasaId: "AS12-48-7134",
      nasaQuery: "Surveyor 3 Apollo 12",
      quote: "“I went silent in 1967 after digging tiny trenches in the lunar soil. Two and a half years later, human footsteps walked right up to my side.”",
      story: "Launched as an uncrewed scout to prove spacecraft could soft-land on the Moon without sinking into dust, I sat silent until November 1969, when Apollo 12 astronauts Pete Conrad and Alan Bean landed just 163 meters away and walked over to inspect me.",
      whyLeft: "Surveyor 3 was a one-way robotic lander powered by solar panels and non-rechargeable batteries that froze during its first lunar night.",
      whyMatters: "Apollo 12 astronauts detached my TV camera and soil scoop and returned them to Earth—giving engineers the first real-world data on how 31 months of harsh lunar radiation and vacuum affect metals and electronics.",
      orbitalProof: "NASA's Lunar Reconnaissance Orbiter (LRO) has photographed Surveyor 3 casting a sharp shadow inside Surveyor Crater alongside the Apollo 12 Intrepid descent stage and astronaut footpath tracks.",
      heritageLaw: "NASA's 2011 Lunar Heritage Guidelines recommend a 75-meter buffer zone around Surveyor 3 so future robotic landers do not sandblast its 50-year-old surfaces with rocket exhaust."
    },
    {
      id: "apollo11-eagle",
      year: "1969",
      shortName: "Apollo 11 Eagle",
      name: "Apollo 11 'Eagle' Descent Stage",
      mission: "Apollo 11 • Sea of Tranquility",
      status: "PROTECTED HERITAGE SITE",
      coords: "0.67416° N, 23.47314° E",
      landed: "July 20, 1969",
      ended: "July 21, 1969 (Ascent)",
      legacy: "First Crewed Moon Landing Site",
      mapX: 58,
      mapY: 49,
      heroNasaId: "AS11-40-5922",
      nasaQuery: "Apollo 11 Lunar Module Eagle surface",
      quote: "“They took my upper half back to Earth and left my golden legs in the dust. I have stood motionless in the Sea of Tranquility for over half a century.”",
      story: "When Neil Armstrong and Buzz Aldrin fired the ascent engine to return to Columbia, my descent stage remained behind as a launchpad. Every footprint around me remains undisturbed because the Moon has no wind or rain to erase history.",
      whyLeft: "To save fuel and mass, Lunar Modules were built in two stages. The heavy lower descent stage stayed on the Moon so the lighter ascent stage could reach lunar orbit.",
      whyMatters: "Meters from my legs sits the Lunar Laser Ranging Retroreflector—a mirror array that scientists on Earth STILL bounce lasers off today to measure the Moon drifting away at 3.8 cm per year.",
      orbitalProof: "High-resolution LRO imagery clearly shows the Eagle descent stage, the deployed seismometer, the laser reflector, and the dark paths walked by Armstrong and Aldrin.",
      heritageLaw: "Protected under the U.S. 'One Small Step to Protect Human Heritage in Space Act' (2020), requiring all NASA-partnered missions to respect Tranquility Base boundaries."
    },
    {
      id: "apollo15-lrv",
      year: "1971",
      shortName: "Apollo 15 Rover",
      name: "Apollo 15 Lunar Roving Vehicle (LRV-1)",
      mission: "Apollo 15 • Hadley-Apennine",
      status: "DORMANT ARTIFACT",
      coords: "26.1322° N, 3.6339° E",
      landed: "July 30, 1971",
      ended: "August 2, 1971",
      legacy: "First Crewed Off-World Vehicle",
      mapX: 51,
      mapY: 31,
      heroNasaId: "AS15-88-11901",
      nasaQuery: "Apollo 15 Lunar Roving Vehicle",
      quote: "“I weighed 210 kg on Earth, just 35 kg on the Moon, and carried two astronauts 27.9 kilometers across ancient lunar mountains.”",
      story: "Folded tightly inside the Lunar Module like origami, I unfolded onto the Hadley Plain and allowed astronauts David Scott and James Irwin to explore far beyond walking distance—where they discovered the famous 'Genesis Rock.'",
      whyLeft: "There was zero space or fuel budget to bring a four-wheeled rover back inside the Command Module. Before departing, astronauts parked me 100 meters east so my TV camera could film their liftoff.",
      whyMatters: "Engineering lessons from my wire-mesh wheels and dual-ackermann steering directly shaped the suspension designs used on Mars rovers decades later.",
      orbitalProof: "LRO images reveal the Falcon descent stage, the parked LRV-1 to the east, and double rover wheel tracks winding along the edge of Hadley Rille.",
      heritageLaw: "Designated as an irreplaceable engineering artifact under international Artemis Accords principles on preserving outer space heritage."
    },
    {
      id: "apollo17-challenger",
      year: "1972",
      shortName: "Apollo 17 Challenger",
      name: "Apollo 17 'Challenger' & Last Rover",
      mission: "Apollo 17 • Taurus-Littrow Valley",
      status: "LAST HUMAN FOOTPRINTS",
      coords: "20.1908° N, 30.7717° E",
      landed: "December 11, 1972",
      ended: "December 14, 1972",
      legacy: "Most Recent Human Visit to the Moon",
      mapX: 65,
      mapY: 36,
      heroNasaId: "AS17-134-20384",
      nasaQuery: "Apollo 17 Lunar Module Challenger",
      quote: "“I carry a plaque signed by the last humans to walk on another world—waiting quietly in Taurus-Littrow for humanity's return.”",
      story: "Gene Cernan and Harrison Schmitt spent 75 hours exploring the Taurus-Littrow valley, driving 35.9 kilometers in their rover and discovering orange volcanic glass beads before leaving my descent stage behind.",
      whyLeft: "Like all Apollo landers, the descent stage served as the launch platform for the final ascent stage liftoff of the Apollo era.",
      whyMatters: "Samples gathered around my site revealed the Moon's volcanic history and proved geological fieldwork by trained scientists dramatically increases mission discovery.",
      orbitalProof: "LRO captured the Challenger descent stage, the ALSEP science station, the final Lunar Rover, and twin tire tracks crisscrossing the valley floor.",
      heritageLaw: "Protected under NASA heritage recommendations to preserve the last human footprints of the 20th century."
    }
  ],
  mars: [
    {
      id: "viking1",
      year: "1976",
      shortName: "Viking 1 Lander",
      name: "Viking 1 Lander (Thomas Mutch Station)",
      mission: "Viking Program • Chryse Planitia",
      status: "HISTORIC MONUMENT",
      coords: "22.697° N, 48.222° W",
      landed: "July 20, 1976",
      ended: "November 11, 1982",
      legacy: "First Successful U.S. Mars Landing",
      mapX: 35,
      mapY: 36,
      heroNasaId: "PIA00393",
      nasaQuery: "Viking 1 Lander Mars surface",
      quote: "“I sent humanity its very first clear photograph from the surface of Mars and operated for more than six Earth years.”",
      story: "Touching down on the rocky plains of Chryse Planitia on the 7th anniversary of Apollo 11, I analyzed Martian soil for signs of microbial life and tracked Martian weather patterns until a faulty command accidentally turned my antenna away from Earth.",
      whyLeft: "Powered by twin plutonium radioisotope thermoelectric generators (RTGs), Viking 1 was designed as a permanent stationary weather and biology station.",
      whyMatters: "Viking 1 proved spacecraft could survive on Mars for years and established the baseline atmospheric and soil chemistry data used by every Mars mission since.",
      orbitalProof: "In 2006, NASA's Mars Reconnaissance Orbiter (HiRISE camera) spotted the 3-meter-wide Viking 1 lander sitting intact on Chryse Planitia.",
      heritageLaw: "Named the Thomas Mutch Memorial Station; planetary protection treaties still govern how close modern sterilized rovers can approach early landers."
    },
    {
      id: "opportunity",
      year: "2004",
      shortName: "Opportunity Rover",
      name: "MER-B 'Opportunity' Rover",
      mission: "Mars Exploration Rover • Meridiani Planum",
      status: "SILENT MARATHONER",
      coords: "1.9462° S, 354.4734° E",
      landed: "January 25, 2004",
      ended: "February 13, 2019",
      legacy: "45.16 km Driven (15-Year Mission)",
      mapX: 48,
      mapY: 52,
      heroNasaId: "PIA13659",
      nasaQuery: "Opportunity rover Mars",
      quote: "“I was built to survive 90 Martian days. Instead, I roamed Mars for 15 years until a planet-wide dust storm blotted out my sun.”",
      story: "Rolling into Eagle Crater on arrival, I immediately found 'blueberries'—tiny spheres of hematite proving liquid water once flowed across ancient Mars. I kept driving for 5,111 sols until darkness in Perseverance Valley drained my batteries forever.",
      whyLeft: "All Mars rovers are one-way robotic explorers. When thick dust covered my solar arrays in June 2018, my internal heaters lost power and the Martian cold (-90°C) stopped my clock.",
      whyMatters: "Opportunity transformed our understanding of Mars from a dead desert into a once-habitable water world, paving the direct scientific path for Curiosity and Perseverance.",
      orbitalProof: "MRO's HiRISE camera photographed Opportunity resting inside Perseverance Valley on the western rim of Endeavour Crater.",
      heritageLaw: "Widely proposed by space historians as a primary candidate for future Martian planetary heritage preservation."
    },
    {
      id: "insight",
      year: "2018",
      shortName: "InSight Lander",
      name: "InSight Mars Geophysical Lander",
      mission: "Discovery Program • Elysium Planitia",
      status: "DUST-COVERED LANDER",
      coords: "4.5024° N, 135.6234° E",
      landed: "November 26, 2018",
      ended: "December 21, 2022",
      legacy: "1,319+ Marsquakes Detected",
      mapX: 76,
      mapY: 47,
      heroNasaId: "PIA25680",
      nasaQuery: "InSight Mars lander",
      quote: "“I pressed my ear against the Martian ground and listened to the heartbeat of an entire planet for four years.”",
      story: "Unlike rovers, I stayed anchored in one spot on Elysium Planitia. Using my ultra-sensitive seismometer, I detected over 1,300 marsquakes—including vibrations from meteoroid impacts—allowing scientists to map Mars' crust, mantle, and liquid iron core.",
      whyLeft: "Because I had no robotic brush to wipe my solar panels, layers of fine Martian dust slowly choked my power supply until my final transmission on December 15, 2022.",
      whyMatters: "InSight gave humanity the first-ever internal X-ray of another rocky planet, revealing how terrestrial worlds form and evolve.",
      orbitalProof: "Orbital images from MRO tracked InSight's circular solar panels gradually shifting from dark blue to reddish-brown as Martian dust accumulated.",
      heritageLaw: "Provides ongoing orbital data on Martian wind and dust deposition rates simply by observing how its panels fade from space."
    },
    {
      id: "ingenuity",
      year: "2021",
      shortName: "Ingenuity Helicopter",
      name: "Ingenuity Mars Helicopter",
      mission: "Mars 2020 • Jezero Crater ('Valinor Hills')",
      status: "STATIONARY TESTBED",
      coords: "18.4447° N, 77.4508° E",
      landed: "February 18, 2021",
      ended: "January 18, 2024 (Flight 72)",
      legacy: "First Powered Flight on Another Planet",
      mapX: 66,
      mapY: 38,
      heroNasaId: "PIA24647",
      nasaQuery: "Ingenuity Mars Helicopter",
      quote: "“Carrying a postage-stamp piece of fabric from the 1903 Wright Flyer, I proved flight is possible in Mars' 1% atmosphere—72 times.”",
      story: "Originally a high-risk technology demo meant to fly just 5 times in 30 days, I became Perseverance's aerial scout for nearly three years until a hard landing on Flight 72 snapped my carbon-fiber rotor blades.",
      whyLeft: "Though grounded with damaged blades, my avionics, solar panel, and sensors still wake up—making me a long-term stationary testbed in Jezero Crater.",
      whyMatters: "Ingenuity proved aerial exploration works beyond Earth, directly inspiring NASA's Dragonfly rotorcraft mission to Saturn's moon Titan and future Mars helicopters.",
      orbitalProof: "Perseverance's Mastcam-Z and MRO orbital passes have imaged Ingenuity resting atop a sand ripple at 'Valinor Hills' in Jezero Crater.",
      heritageLaw: "Airfield B on Mars was officially named 'Wright Brothers Field' by the International Civil Aviation Organization (ICAO)."
    }
  ]
};

let currentWorld = "moon";
let currentArtifact = ARTIFACTS.moon[0];
let currentHeroPhoto = null;
let galleryItemsCache = [];
let isSpeaking = false;

document.addEventListener("DOMContentLoaded", () => {
  switchWorld("moon");
});

function switchWorld(world) {
  stopNarration();
  currentWorld = world;

  document.getElementById("btn-moon").classList.toggle("active", world === "moon");
  document.getElementById("btn-mars").classList.toggle("active", world === "mars");

  const mapEl = document.getElementById("surface-map");
  mapEl.className = `surface-map ${world}-bg`;
  document.getElementById("world-title").textContent =
    world === "moon" ? "Lunar Surface Map (NASA LRO)" : "Martian Surface Map (NASA Viking/MRO)";

  const items = ARTIFACTS[world];
  document.getElementById("artifact-count").textContent = `${items.length} Artifacts`;

  const quickList = document.getElementById("quick-list");
  mapEl.innerHTML = "";
  quickList.innerHTML = "";

  items.forEach((item, index) => {
    const pin = document.createElement("button");
    pin.className = `pin ${index === 0 ? "active" : ""}`;
    pin.style.left = `${item.mapX}%`;
    pin.style.top = `${item.mapY}%`;
    pin.dataset.id = item.id;
    pin.innerHTML = `<span class="pin-dot"></span> ${item.shortName}`;
    pin.onclick = () => selectArtifact(item);
    mapEl.appendChild(pin);

    const chip = document.createElement("button");
    chip.className = `quick-chip ${index === 0 ? "active" : ""}`;
    chip.dataset.id = item.id;
    chip.textContent = `${item.year} • ${item.shortName}`;
    chip.onclick = () => selectArtifact(item);
    quickList.appendChild(chip);
  });

  selectArtifact(items[0]);
}

function selectArtifact(artifact) {
  stopNarration();
  currentArtifact = artifact;

  document.querySelectorAll(".pin").forEach((p) => {
    p.classList.toggle("active", p.dataset.id === artifact.id);
  });
  document.querySelectorAll(".quick-chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.id === artifact.id);
  });

  document.getElementById("artifact-tag").textContent = artifact.status;
  document.getElementById("artifact-name").textContent = artifact.name;
  document.getElementById("artifact-meta").textContent = artifact.mission;

  document.getElementById("tele-coords").textContent = artifact.coords;
  document.getElementById("tele-landed").textContent = artifact.landed;
  document.getElementById("tele-ended").textContent = artifact.ended;
  document.getElementById("tele-legacy").textContent = artifact.legacy;

  document.getElementById("first-person-quote").textContent = artifact.quote;
  document.getElementById("story-body").textContent = artifact.story;
  document.getElementById("why-left").textContent = artifact.whyLeft;
  document.getElementById("why-matters").textContent = artifact.whyMatters;
  document.getElementById("orbital-proof").textContent = artifact.orbitalProof;
  document.getElementById("heritage-law").textContent = artifact.heritageLaw;

  loadMachinePhotos(artifact);
}

function showTab(tabName, btnEl) {
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));

  btnEl.classList.add("active");
  document.getElementById(`tab-${tabName}`).classList.add("active");
}

// Fetch the featured spacecraft photo + 6 gallery photos directly from NASA's Image API
async function loadMachinePhotos(artifact) {
  const heroImg = document.getElementById("hero-machine-img");
  const heroId = document.getElementById("hero-nasa-id");
  const heroCaption = document.getElementById("hero-caption");
  const gallery = document.getElementById("nasa-gallery");

  heroCaption.textContent = "Fetching official NASA spacecraft photo...";
  gallery.innerHTML = "<p>Querying NASA Image and Video Library...</p>";

  try {
    // 1. Fetch exact hero photo by NASA ID first, plus general search results
    const [heroRes, searchRes] = await Promise.all([
      fetch(`https://images-api.nasa.gov/search?nasa_id=${encodeURIComponent(artifact.heroNasaId)}`),
      fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(artifact.nasaQuery)}&media_type=image`)
    ]);

    const heroData = await heroRes.json();
    const searchData = await searchRes.json();

    const searchItems = searchData.collection.items || [];
    const exactHeroItem = (heroData.collection.items && heroData.collection.items[0]) || searchItems[0];

    if (exactHeroItem && exactHeroItem.links) {
      const info = exactHeroItem.data[0];
      const imgUrl = exactHeroItem.links[0].href;
      heroImg.src = imgUrl;
      heroImg.alt = info.title;
      heroId.textContent = `OFFICIAL NASA HARDWARE PHOTO • ID: ${info.nasa_id}`;
      heroCaption.textContent = info.title;

      currentHeroPhoto = {
        img: imgUrl,
        id: info.nasa_id,
        title: info.title,
        desc: info.description || info.title
      };
    }

    // 2. Populate the 6-card gallery in the "More NASA Photos" tab
    const gallerySlice = searchItems.slice(0, 6);
    galleryItemsCache = gallerySlice.map((item) => {
      const info = item.data[0];
      return {
        img: item.links ? item.links[0].href : "",
        id: info.nasa_id,
        title: info.title,
        desc: info.description || info.title
      };
    });

    if (!galleryItemsCache.length) {
      gallery.innerHTML = "<p>No additional archival images returned.</p>";
      return;
    }

    gallery.innerHTML = galleryItemsCache
      .map(
        (photo, idx) => `
          <div class="nasa-card" onclick="openLightbox(galleryItemsCache[${idx}])">
            <img src="${photo.img}" alt="${photo.title}" loading="lazy" />
            <div class="nasa-card-info">
              <h4>${photo.title.slice(0, 48)}${photo.title.length > 48 ? "..." : ""}</h4>
              <span>NASA ID: ${photo.id}</span>
            </div>
          </div>
        `
      )
      .join("");
  } catch (err) {
    heroCaption.textContent = "Connect to internet to load live NASA spacecraft photo.";
    gallery.innerHTML = "<p>Unable to reach NASA API. Check your internet connection.</p>";
  }
}

function openLightbox(photoObj) {
  if (!photoObj) return;
  document.getElementById("lightbox-img").src = photoObj.img;
  document.getElementById("lightbox-id").textContent = `NASA ARCHIVE ID: ${photoObj.id}`;
  document.getElementById("lightbox-title").textContent = photoObj.title;
  document.getElementById("lightbox-desc").textContent = photoObj.desc;
  document.getElementById("lightbox").classList.add("open");
}

function closeLightbox(event, force = false) {
  if (force || event.target.id === "lightbox") {
    document.getElementById("lightbox").classList.remove("open");
  }
}

function toggleNarration() {
  if (isSpeaking) {
    stopNarration();
    return;
  }

  if (!("speechSynthesis" in window)) {
    alert("Your browser does not support text-to-speech narration.");
    return;
  }

  const text = `${currentArtifact.name}. ${currentArtifact.quote} ${currentArtifact.story}`;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;

  utterance.onend = () => {
    isSpeaking = false;
    document.getElementById("narrate-btn").textContent = "🔊 Listen to Story";
  };

  window.speechSynthesis.speak(utterance);
  isSpeaking = true;
  document.getElementById("narrate-btn").textContent = "⏹ Stop Audio";
}

function stopNarration() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  const btn = document.getElementById("narrate-btn");
  if (btn) btn.textContent = "🔊 Listen to Story";
}