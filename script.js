const focusContent = {
  games: {
    kicker: "Signature games",
    title: "The library introduced genre-defining experiences.",
    copy: "Super Mario 64, Ocarina of Time, Mario Kart 64, GoldenEye 007, and Star Fox 64 gave the console a lineup that still anchors conversations about gaming's best eras.",
    points: [
      "Set new expectations for 3D movement and adventure pacing.",
      "Balanced Nintendo polish with experimental ideas.",
      "Created a lasting shorthand for what a classic console library looks like."
    ]
  },
  multiplayer: {
    kicker: "Living-room energy",
    title: "It made local multiplayer feel built in, not bolted on.",
    copy: "The four controller ports made the Nintendo 64 unusually social. It turned game nights into a default use case rather than a special event.",
    points: [
      "Quick setup made four-player matches easy to start.",
      "Series like Mario Party and Smash thrived because the console supported them naturally.",
      "Competitive split-screen became one of the system's most lasting memories."
    ]
  },
  controller: {
    kicker: "Hardware identity",
    title: "The controller made analog movement part of console history.",
    copy: "Its three-pronged shape was unusual, but the analog stick changed how players navigated 3D spaces and how designers built them.",
    points: [
      "Helped make fine movement control feel natural on consoles.",
      "Worked hand in hand with camera experimentation in 3D games.",
      "Remains one of the system's most recognizable design choices."
    ]
  },
  legacy: {
    kicker: "Lasting influence",
    title: "Its ideas stayed relevant long after the hardware cycle ended.",
    copy: "The best Nintendo 64 games are still replayed, remixed, and studied because they landed foundational ideas with clarity and personality.",
    points: [
      "Speedrunning communities still keep the system active.",
      "Designers still reference its standout titles when discussing 3D game evolution.",
      "Its cultural nostalgia remains unusually strong for a console era."
    ]
  }
};

const focusButtons = document.querySelectorAll("[data-focus]");
const focusKicker = document.getElementById("focus-kicker");
const focusTitle = document.getElementById("focus-title");
const focusCopy = document.getElementById("focus-copy");
const focusPoints = document.getElementById("focus-points");

function renderFocus(key) {
  const content = focusContent[key];
  if (!content) {
    return;
  }

  focusKicker.textContent = content.kicker;
  focusTitle.textContent = content.title;
  focusCopy.textContent = content.copy;
  focusPoints.innerHTML = content.points.map((point) => `<li>${point}</li>`).join("");

  focusButtons.forEach((button) => {
    const active = button.dataset.focus === key;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });
}

focusButtons.forEach((button) => {
  button.addEventListener("click", () => renderFocus(button.dataset.focus));
});

const filterButtons = document.querySelectorAll("[data-filter]");
const gameCards = document.querySelectorAll(".game-card");
const filterSummary = document.getElementById("filter-summary");

function renderFilter(filter) {
  let visibleCount = 0;

  gameCards.forEach((card) => {
    const matches = filter === "all" || card.dataset.genre === filter;
    card.classList.toggle("is-hidden", !matches);
    if (matches) {
      visibleCount += 1;
    }
  });

  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });

  if (filter === "all") {
    filterSummary.textContent = `Showing all ${visibleCount} featured games.`;
  } else {
    filterSummary.textContent = `Showing ${visibleCount} ${filter} highlight${visibleCount === 1 ? "" : "s"}.`;
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => renderFilter(button.dataset.filter));
});
