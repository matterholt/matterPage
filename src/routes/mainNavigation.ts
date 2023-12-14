interface Navigations {
  title: string;
  icon: string;
  path: string;
}

export const mainNavigation: Navigations[] = [
  { title: "home", icon: "./", path: "/" },
  { title: "write ups", icon: "./", path: "/writeups" },
  { title: "career", icon: "./", path: "/career" },
  { title: "accomplishments", icon: "./", path: "/accomplishments" },
  { title: "projects", icon: "./", path: "/projects" },
];
