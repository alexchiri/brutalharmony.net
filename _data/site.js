module.exports = {
  meta: {
    title: "brutalharmony.net",
    description: "A blog about the brutal harmony in the world of tech.",
    lang: "en",
    siteUrl: "https://brutalharmony.net/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "A blog about the brutal harmony in the world of tech.",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://brutalharmony.net/",
    authorName: "Alexandru Chiritescu",
    authorEmail: "alex.chiri@gmail.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Brutal Harmony",
    description: "A blog about the brutal harmony in the world of tech."
  }
}