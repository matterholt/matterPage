---
layout: ../../../../layouts/writeups/MdWriteUpLayout.astro
title: Micro FrontEnds, There are several options
pubDate: 2023-08-27
published: true
slug: Breaking a front end into separate app so it is easier to deploy and make change quickly, There are several way below list 5 different ways
author: Matterholt
image:
  url:
  alt:
tags: [micro, development, frontend, architecture]
---

# Micro Front ends

- Breaking an app into multiple sections taking larger section and componentizing them. Allowing the possibility to have multiple repositories for one web app.
- Say adding an a messaging feature to the application. Instead of building into the main app extract that feature out into a separate repo. This will allow another team to focus on building that out without slowing down main app team. If done properly should be able to build and release without the main app need to be build/release
- Methods of incorporating the architecture.
  - Server-side template composition : Using routes to decide what html pages should be shown.
  - Build-time integration: Declare the section of app as a package, and make it a dependency in the main application.
  - Run-time integration option 1: use iframe, simple, isolated so not flexible.
  - Run-time integration option 2 : JavaScript, flexible and highly adopted method. On Index page there is a script tag for each micro- FrontEnd.
  - Run-time option 3: Web Components: Similar to the JS option. But leveraging the browser spec for custom components.
    Like everything there are trade offs and will need to be based off of what is best for the project. If there is a section of a component that doesn’t get changed too often maybe a build-time integration could be an easy way to get things done. With a run-time integration would ship more Javascript to the browser. But chance are you are build a SPA so that might not be a concern. Lol.

At this stage my application doesn’t need to be a micro-front end, I don’t think I’ll need to implement any of these. But by knowing these methods I can keep them in mind so I am able to construct my code to where they could be possible to removed from the main app into its own.

More information

REFS:
https://martinfowler.com/articles/micro-frontends.html#IntegrationApproaches

https://fabrity.com/blog/micro-frontends-pros-and-cons/
