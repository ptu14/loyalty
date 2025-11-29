export const quests = [
  {
    id: 1,
    title: "Zapisz się do newslettera 📬",
    description: "Zasubskrybuj nasz newsletter",
    points: 10,
    steps: 1,
    currentStep: 1,
  },
  {
    id: 2,
    title: "Odwiedź naszą bawialnię 🎈",
    description: "Odwiedź naszą bawialnię 3 razy w ciągu miesiąca.",
    steps: 3,
    points: 150,
    currentStep: 2,
  },
  {
    id: 3,
    title: "Kup kawę ☕️",
    description: "Kup 5 dowolnych kaw.",
    steps: 5,
    points: 200,
    currentStep: 3,
  },
  {
    id: 4,
    title: "Zaproś znajomego 🤝",
    description: "Zaproś znajomego do aplikacji.",
    steps: 1,
    points: 50,
    currentStep: 0,
  },
  {
    id: 5,
    title: "Wystaw opinię 📝",
    description: "Wystaw nam opinię w Google.",
    steps: 1,
    points: 100,
    currentStep: 1,
  },
  {
    id: 6,
    title: "Poranny ptaszek 🦜",
    description: "Odwiedź nas przed godziną 10:00 dwa razy.",
    steps: 2,
    points: 80,
    currentStep: 1,
  },
];

export const allBlogs = [
  ...quests
];
