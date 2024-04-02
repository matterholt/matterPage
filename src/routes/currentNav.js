export default function activeNavigationPage(pageId) {
  let navigationLinks = [
    {
      id: "home",
      link: "\\",
      title: "home",
      isPublish: true,
      activeClass: pageId == "home" ? "current" : "",
    },
    {
      id: "writeups",
      link: "\\writeups",
      title: "write ups",
      isPublish: true,
      activeClass: pageId == "writeups" ? "current" : "",
    },
    {
      id: "career",
      link: "\\career",
      title: "career",
      isPublish: true,
      activeClass: pageId == "career" ? "current" : "",
    },
    {
      id: "projects",
      link: "\\projects",
      title: "projects",
      isPublish: false,
      activeClass: pageId == "projects" ? "current" : "",
    },
  ];
  return navigationLinks;
}
