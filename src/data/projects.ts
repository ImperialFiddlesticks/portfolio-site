interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  galleryImages?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FOLIO",
    year: "2026",
    description:
      "A mobile app for searching and saving books with a large focus on accessibility. Search through text, speech recordings (iOS only), or by scanning barcodes. Save your books to favorites, sort them into collections or create a reading list.",
    image: "/FolioFull.jpg",
    tags: ["React Native", "TypeScript", "CSS", "Expo"],
    github: "https://github.com/ImperialFiddlesticks/book-search",
    galleryImages: ["/folio1.jpg", "/folio2.jpg", "/folio4.jpg", "/folio5.jpg"],
  },
  {
    id: 2,
    title: "MindPop",
    year: "2026",
    description:
      "A quiz game that tests your knowledge of random facts, with different modifiers and power-ups to give your session an edge. Designed for quick, satisfying play sessions.",
    image: "/MindPop.png",
    tags: ["React", "TypeScript", "CSS"],
    github: "https://github.com/annagroshkova/maca-quiz-app",
    demo: "https://annagroshkova.github.io/maca-quiz-app/start",
    galleryImages: [
      "/mindpop1.png",
      "/mindpop2.png",
      "/mindpop3.png",
      "/mindpop4.png",
    ],
  },
  {
    id: 3,
    title: "Brainless Fitness",
    year: "2026",
    description:
      "A playful fitness app that encourages movement through the feeding of brains to a little zombie pet. Built for Chas Hack II — focused on making exercise feel more fun!",
    image: "/brainless1.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ImperialFiddlesticks/brainless-health",
    galleryImages: [
      "/brainless2.png",
      "/brainless3.png",
      "/brainless4.png",
      "/brainless5.png",
    ],
  },
  {
    id: 4,
    title: "P-anik!",
    year: "2026",
    description:
      "An app to help navigate the panic of parking in Stockholm. Winner of the Innovation category at the first ever Chas Hack Hackathon. Reads parking signs so you don't have to.",
    image: "/Panik.png",
    tags: ["React", "TypeScript", "CSS"],
    github: "https://github.com/ImperialFiddlesticks/panik-app",
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    year: "2026",
    description:
      "A classic game of tic tac toe with a sci-fi neon twist. A focused exercise in game logic, state management, and creating atmosphere through CSS alone.",
    image: "/tictactoe1.png",
    tags: ["React", "TypeScript", "CSS"],
    github: "https://github.com/ImperialFiddlesticks/tictactoe",
    galleryImages: ["/tictactoe2.png", "/tictactoe3.png"],
  },
  {
    id: 6,
    title: "Adventure Shop",
    year: "2025",
    description:
      "My first project in React! A fantasy-themed shop UI with a shopkeeper, inventory system, and in-game currency. Built to practise states in a Single Page Application, with a theme that lies close to my heart - games.",
    image: "/adventureshop1.png",
    tags: ["React", "TypeScript", "CSS"],
    github: "https://github.com/ImperialFiddlesticks/adventure-shop-main",
    galleryImages: [
      "/adventureshop2.png",
      "/adventureshop3.png",
      "/adventureshop4.png",
    ],
  },
];
