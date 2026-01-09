
  const products = [
    {
      title: "Wires & Cables",
      sub: "Branded copper wires, flexible cables, control cables, and more — for residential and industrial use.",
      icon: "./assests/productIcon.svg"
    },
    {
      title: "Switchgears",
      sub: "MCCBs, isolators, MCBs,DB boxes, and panel boards from top-rated brands.",
      icon: "./assests/Icon.svg"
    },
    {
      title: "Switches",
      sub: "Modular switches, sockets, and accessories — ideal for modern interiors and commercial spaces",
      icon: "./assests/Icon1.svg"
    },
    {
      title: "LED Profile & Lights",
      sub: "Ceiling lights, LED panels, flood lights, spotlights,and decorativefixtures.",
      icon: "./assests/Icon2.svg"
    },
    {
      title: "Instruments & Meters",
      sub: "Digital meters, voltmeters, ammeters, timers, and energy monitoringdevices.",
      icon: "./assests/Icon3.svg"
    },
    {
      title: "Tools",
      sub: "Power tools, hand tools, drill bits, and accessories for electrical, plumbing, and general installation use",
      icon: "./assests/Icon4.svg"
    },
    {
      title: "Hardware",
      sub: "Essential hardware items including fasteners, screws, clamps, tapes, and anchors for safe and secure installations.",
      icon: "./assests/Icon5.svg"
    },
    {
      title: "Plumbing",
      sub: "CPVC pipes, taps, elbows, valves, and fittings — all sizes available for domestic, commercial, and project use.",
      icon: "./assests/Icon6.svg"
    }
  ];

  const wrapper = document.getElementById("productWrapper");

  products.forEach(product => {
    wrapper.innerHTML += `
      <div class="product-card">
        <div class="pro-container">
          <div class="product-logo">
            <img src="${product.icon}" alt="${product.title}">
          </div>

          <div class="product-title">${product.title}</div>

          <div class="product-sub">
            ${product.sub}
          </div>
        </div>
      </div>
    `;
  });

  const testimonials = [
    {
      text: "Got branded wires and switches for our flat. Owner was very polite. Explained wire load properly.",
      name: "Karthikeyan",
      role: "Project Manager"
    },
    {
      text: "Na romba places la poi paathen. Finally found rare plumbing materials here. Very helpful staff.",
      name: "Ramesh",
      role: "Electrical Contractor"
    },
    {
      text: "Excellent collection of electrical items. Pricing was reasonable and service was quick.",
      name: "Suresh",
      role: "Builder"
    },
    {
      text: "Best electrical shop in the area. Good quality products and friendly support.",
      name: "Vignesh",
      role: "Site Engineer"
    }
  ];

  let currentIndex = 0;

  function loadSlides() {
    const left = testimonials[currentIndex];
    const right = testimonials[(currentIndex + 1) % testimonials.length];

    document.getElementById("leftText").textContent = left.text;
    document.getElementById("leftName").textContent = left.name;
    document.getElementById("leftRole").textContent = left.role;

    document.getElementById("rightText").textContent = right.text;
    document.getElementById("rightName").textContent = right.name;
    document.getElementById("rightRole").textContent = right.role;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 2) % testimonials.length;
    loadSlides();
  }

  function prevSlide() {
    currentIndex =
      (currentIndex - 2 + testimonials.length) % testimonials.length;
    loadSlides();
  }

  // Initial load
  loadSlides();

  const wcImages = [
    "./assests/Banner 1.svg",
    "./assests/Banner 2.svg",
    "./assests/Banner 3.svg",
    "./assests/Banner 4.svg",
    "./assests/Banner 5.svg"
  ];

  const wcCards = document.getElementById("wcCards");
  const visibleCount = 3;
  let startIndex = 0;

  function renderWC() {
    wcCards.innerHTML = "";

    for (let i = 0; i < visibleCount; i++) {
      const imgIndex = (startIndex + i) % wcImages.length;

      wcCards.innerHTML += `
        <div class="wc-card">
          <img src="${wcImages[imgIndex]}" alt="Why Choose Us">
        </div>
      `;
    }
  }

  function nextWC() {
    startIndex = (startIndex + visibleCount) % wcImages.length;
    renderWC();
  }

  function prevWC() {
    startIndex =
      (startIndex - visibleCount + wcImages.length) % wcImages.length;
    renderWC();
  }

  // Initial load
  renderWC();
  

  // ================================
// INDUSTRIES SLIDER (3 cards)
// ================================

// DATA

 const industriesData = [
  {
    img: "./assests/commercial&buildings.svg",
    title: "Commercial Buildings",
    desc: "Offices, retail spaces, and malls need efficient electrical and plumbing setups. We supply modular fittings, lighting solutions, DB boxes, and energy meters tailored for commercial loads."
  },
  {
    img: "./assests/contractors&builders.svg",
    title: "Contractors & Builders",
    desc: "Your go-to supply partner for large-scale construction projects—wires, pipes, switches, panels, and everything in between. Bulk deals and dependable delivery timelines."
  },
  {
    img: "./assests/Healthcare-Facilities.svg",
    title: "Healthcare Facilities",
    desc: "Hospitals and labs require reliable electrical performance and backup systems. We offer MCBs, control panels, timers, and fittings compliant with high-precision environments."
  },
  {
    img: "./assests/Infrastructure-Projects.svg",
    title: "Infrastructure Projects",
    desc: "For metro, highway, and smart city works—rugged cabling, outdoor floodlights, and panel boards designed for open-site conditions."
  },
  {
    img: "./assests/it companies.svg",
    title: "IT Companies",
    desc: "IT parks and offices need reliable wiring and metering. We supply branded network cables, backup solutions, DBs, and panels for safe performance."
  },

  {
    img: "./assests/CoWorking.svg",
    title: "Co-Working Spaces",
    desc: "Shared workspaces require safe and efficient fittings. We provide lighting, switches, sockets, fans, and plumbing essentials tailored for co-working infrastructure."
  },
  {
   
    img: "./assests/Architect & Interiors.svg",
    title: "Architect & Interiors",
    desc: "WE support architects and interior designers with stylish lighting solutions, modular switches, concealed boxes, and ceiling fans that enhance modern interiors with a perfect balance of functionality, comfort, and aesthetic appeal"
  },
  {
    
    img: "./assests/MEPContractor.svg",
    title: "MEP Contractor",
    desc:"We supply certified electrical wires, switchgear, digital meters, pipes, and distribution boxes trusted by MEP contractors for bulk requirements and project-ready execution, ensuring safety, compliance, and reliability"
  },
  {
    
    img: "./assests/Manufacturing Industries.svg",
    title: "Manufacturing Industries",
    desc:"Factories and warehouses depend on robust, high-load systems, and we deliver industrial-grade fans, cables, isolators, and plumbing materials designed to perform efficiently in demanding industrial environments"
  }
  
];


// ELEMENT
const indGrid = document.getElementById("indGrid");

// CONFIG
const indVisibleCards = 3;
let indStartIndex = 0;

// RENDER FUNCTION
function renderIndustries() {
  indGrid.innerHTML = "";

  for (let i = 0; i < indVisibleCards; i++) {
    const index = (indStartIndex + i) % industriesData.length;
    const item = industriesData[index];

    indGrid.innerHTML += `
      <article class="ind-card">
        <img src="${item.img}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </article>
    `;
  }
}

// NEXT SLIDE
function nextSlide() {
  indStartIndex =
    (indStartIndex + indVisibleCards) % industriesData.length;
  renderIndustries();
}

// PREVIOUS SLIDE
function prevSlide() {
  indStartIndex =
    (indStartIndex - indVisibleCards + industriesData.length) %
    industriesData.length;
  renderIndustries();
}

// INITIAL LOAD
renderIndustries();
