function createGame(home, status, away) {
  return `
    <li>
      <img src="./assets/icon-${home}.svg" alt="${home} flag" />
      <strong>${status}</strong>
      <img src="./assets/icon-${away}.svg" alt="${away} flag" />
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `
    <header>
      <img src="./assets/logo.svg" alt="Logo" />
    </header>
    <main id="cards">
      ${createCard(
        "23/11",
        "wednesday",
        createGame("germany", "13:00", "japan") +
          createGame("spain", "16:00", "costa-rica") +
          createGame("belgium", "19:00", "canada")
      )}
      ${createCard(
        "24/11",
        "thursday",
        createGame("uruguay", "13:00", "south-korea") +
          createGame("portugal", "16:00", "ghana")
      )}
      ${createCard(
        "27/11",
        "sunday",
        createGame("croatia", "16:00", "canada") +
          createGame("spain", "19:00", "germany")
      )}
      ${createCard(
        "28/11",
        "monday",
        createGame("south-korea", "13:00", "ghana") +
          createGame("portugal", "19:00", "uruguay")
      )}
      ${createCard(
        "01/12",
        "thursday",
        createGame("canada", "15:00", "morocco") +
          createGame("japan", "19:00", "spain")
      )}
      ${createCard(
        "02/12",
        "friday",
        createGame("south-korea", "15:00", "portugal")
      )}
    </main>
`
