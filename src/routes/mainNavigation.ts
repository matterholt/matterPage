interface Navigations {
  title: string;
  icon: string;
  path: string;
}

export const mainNavigation: Navigations[] = [
  { title: "home", icon: "./", path: "/" },
  { title: "write ups", icon: "./", path: "/writeups" },
  { title: "career", icon: "./", path: "/career" },
  { title: "dates", icon: "./", path: "/dates" },
  { title: "projects", icon: "./", path: "/projects" },
];
