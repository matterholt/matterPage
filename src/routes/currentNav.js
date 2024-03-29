export default function activeNavigationPage(pageId) {
  let navigationLinks = [
    {
      id: "home",
      link: "\\",
      title: "home",
      activeClass: pageId == "home" ? "current" : "",
    },
    {
      id: "writeups",
      link: "\\writeups",
      title: "write ups",
      activeClass: pageId == "writeups" ? "current" : "",
    },
    {
      id: "career",
      link: "\\career",
      title: "career",
      activeClass: pageId == "career" ? "current" : "",
    },
    {
      id: "projects",
      link: "\\projects",
      title: "projects",
      activeClass: pageId == "projects" ? "current" : "",
    },
  ];
  return navigationLinks;
}
