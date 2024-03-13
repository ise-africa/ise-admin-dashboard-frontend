export type sideNavItemsType = {
  title: string;
  route: string | null;
  keywords?: string[];
  otherOptions: {
    isActive: boolean;
    data: { title: string; route: string; isLive: boolean }[];
  } | null;
  isVisible: boolean;
  children?: {
    title: string; route: string;
  }[]
}[];

export const sideNavItems: sideNavItemsType = [
  {
    title: "Home",
    route: "/home",
    keywords: ["home"],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: "Users",
    route: "/users",
    keywords: ["users"],
    otherOptions: null,
    isVisible: true,
    children: [
      { title: "Students", route: "/users/students" },
      { title: "Tutors", route: "/users/tutors" },
      { title: "Administrator", route: "/users/admins" },
    ]
  },

  {
    title: "Analytics",
    route: "/analytcs",
    keywords: ["analytcs"],
    otherOptions: null,
    isVisible: true,
    children: [{ title: "Courses curriculum", route: "/courses/courses-curriculum" }, { title: "Feedback", route: "/courses/feedback" }]
  },

  {
    title: "Content control",
    route: "/contents",
    keywords: ["contents"],
    otherOptions: null,
    isVisible: true,
    children: [{ title: "Quiz", route: "/students/quiz" }, { title: "Assignment", route: "/students/assignment" }]

  },

  {
    title: "Schools management",
    route: "/schools",
    keywords: ["schools"],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: "Communication",
    route: "/communication",
    keywords: ["communication"],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: "Feedback",
    route: "/feedback",
    keywords: ["feedback"],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: "Promotions",
    route: "/promotions",
    keywords: ["promotions"],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: "Support tickets",
    route: "/support",
    keywords: ["support"],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: "Referral",
    route: "/referral",
    keywords: ["referral"],
    otherOptions: null,
    isVisible: true,
  },
];
