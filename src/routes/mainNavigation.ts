interface Navigations {
  title: string;
  icon: string;
  path: string;
  isPublish: boolean;
}

export const mainNavigation: Navigations[] = [
  { title: "home", icon: "./", path: "/", isPublish: true },
  { title: "write ups", icon: "./", path: "/writeups", isPublish: true },
  { title: "career", icon: "./", path: "/career", isPublish: true },
  { title: "projects", icon: "./", path: "/projects", isPublish: false },
];
