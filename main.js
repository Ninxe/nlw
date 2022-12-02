function createGame(home, status, away, link) {
  return `
    <li>
      <a href="${link}" target="_blank">
        <img src="./assets/icon-${home}.svg" alt="${home} flag" />
        <strong>${status}</strong>
        <img src="./assets/icon-${away}.svg" alt="${away} flag" />
      </a>
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
        createGame(
          "germany",
          "1 - 2",
          "japan",
          "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11spnyrxp_;2;/m/030q7;ms;fp;1;;;"
        ) +
          createGame(
            "spain",
            "7 - 0",
            "costa-rica",
            "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11spnyqzsy;2;/m/030q7;dt;fp;1;;;"
          ) +
          createGame(
            "belgium",
            "1 - 0",
            "canada",
            "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11spnyvbdl;2;/m/030q7;dt;fp;1;;;"
          )
      )}
      ${createCard(
        "24/11",
        "thursday",
        createGame(
          "uruguay",
          "0 - 0",
          "south-korea",
          "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11spny_y9v;2;/m/030q7;dt;fp;1;;;"
        ) +
          createGame(
            "portugal",
            "3 - 2",
            "ghana",
            "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11rq1z2nn2;2;/m/030q7;dt;fp;1;;;"
          )
      )}
      ${createCard(
        "27/11",
        "sunday",
        createGame(
          "japan",
          "0 - 1",
          "costa-rica",
          "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11pz0xg9v5;2;/m/030q7;dt;fp;1;;;"
        ) +
          createGame(
            "croatia",
            "4 - 1",
            "canada",
            "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11spnytbtg;2;/m/030q7;dt;fp;1;;;"
          ) +
          createGame(
            "spain",
            "1 - 1",
            "germany",
            "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11spnywqh1;2;/m/030q7;dt;fp;1;;;"
          )
      )}
      ${createCard(
        "28/11",
        "monday",
        createGame(
          "south-korea",
          "2 - 3",
          "ghana",
          "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11pz0xnh3t;2;/m/030q7;dt;fp;1;;;"
        ) +
          createGame(
            "portugal",
            "2 - 0",
            "uruguay",
            "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11rq1z5w1m;2;/m/030q7;dt;fp;1;;;"
          )
      )}
      ${createCard(
        "01/12",
        "thursday",
        createGame(
          "canada",
          "1 - 2",
          "morocco",
          "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11rq1z3ddq;2;/m/030q7;dt;fp;1;;;"
        ) +
          createGame(
            "japan",
            "2 - 1",
            "spain",
            "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11pz0xg2kk;2;/m/030q7;dt;fp;1;;;"
          )
      )}
      ${createCard(
        "02/12",
        "friday",
        createGame(
          "south-korea",
          "2 - 1",
          "portugal",
          "https://www.google.com/search?q=world+cup+2022+games&sxsrf=ALiCzsbBRfd78jSSqmStBFFvm2B-proNlw%3A1669062663831&source=hp&ei=B-B7Y8_DL9GekdUP1PixkA0&iflsig=AJiK0e8AAAAAY3vuF5LvwurHoOaOgvYZL14NyBtHQwt2&ved=0ahUKEwiP47r5jsD7AhVRT6QEHVR8DNIQ4dUDCAg&uact=5&oq=world+cup+2022+games&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOgQIABBDOgsILhCABBDHARDRAzoFCC4QgAQ6BQguEJECOg4ILhCABBDHARDRAxDUAjoHCC4Q1AIQQzoHCAAQgAQQCjoHCCMQsQIQJzoQCC4QgAQQxwEQ0QMQ1AIQCjoNCC4QxwEQ0QMQ1AIQQzoKCC4QxwEQ0QMQQzoICC4QgAQQ1AI6CAguENQCEIAEUABY1BpgtRtoBHAAeACAAZ8BiAHcE5IBBDguMTWYAQCgAQE&sclient=gws-wiz#sie=m;/g/11pz0xr3gs;2;/m/030q7;dt;fp;1;;;"
        )
      )}
    </main>
`
