export const promotions = [
  {
    id: 1,
    imageSrc: "/assets/images/promotions/coffe.webp",
    altText: "Darmowa Kawa",
    category: "Nagroda",
    title: "Darmowa Kawa",
    excerpt:
      "Ciesz się pyszną, świeżo parzoną kawą za darmo! Wymień swoje punkty na chwilę relaksu.",
    authorImage: "/assets/images/avatars/02.png",
    authorName: "Barista",
    date: "Apr 26, 2024",
    requiredPoints: 50,
    status: "active",
  },
  {
    id: 2,
    imageSrc: "/assets/images/promotions/icecream.webp",
    altText: "Zniżka 50%",
    category: "Nagroda",
    title: "Darmowe lody",
    excerpt:
      "Zimne lody z naszej oferty za darmo!",
    authorImage: "/assets/images/avatars/04.png",
    authorName: "Zespół",
    date: "Apr 22, 2024",
    requiredPoints: 50,
    status: "active"
  },
  {
    id: 2,
    imageSrc: "/assets/images/promotions/playroom.webp",
    altText: "Darmowa Wizyta",
    category: "Nagroda",
    title: "Darmowa Wizyta",
    excerpt:
      "Skorzystaj z darmowej wizyty w naszym lokalu. Idealna okazja, by spędzić czas z dziećmi.",
    authorImage: "/assets/images/avatars/01.png",
    authorName: "Manager",
    date: "Apr 24, 2024",
    requiredPoints: 100,
    status: "inactive",
  }
];

export const allPromotions = [
  ...promotions
];
