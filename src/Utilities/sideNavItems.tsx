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
    title: string;
    route: string;
  }[];
}[];

export const sideNavItems: sideNavItemsType = [
  {
    title: "Home",
    route: "/dashboard",
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
    ],
  },

  {
    title: "Analytics",
    route: "/analytcs",
    keywords: ["analytcs"],
    otherOptions: null,
    isVisible: true,
    children: [
      { title: "Revenue", route: "/analytics/revenue" },
      { title: "Enrolment", route: "/analytics/enrolment" },
      { title: "Engagement", route: "/analytics/engagement" },
    ],
  },

  {
    title: "Schools management",
    route: "/schools",
    keywords: ["schools"],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: "Course management ",
    route: "/courses",
    keywords: ["contents"],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: "Blog management",
    route: "/blogs",
    keywords: ["blog"],
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

  {
    title: "Integrations",
    route: "/integrations",
    keywords: ["integrations"],
    otherOptions: null,
    isVisible: true,
  },
];
