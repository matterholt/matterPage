---
layout: ../../../../layouts/writeups/MdWriteUpLayout.astro
title: "Django App for tracking my animals"
pubDate: 2024-02-10

published: true
slug: "django app htmx animal tracker "
tags: ["server", "django", "app"]
---

## Introduction

I'm a bit of a hobby farmer, I like taking care of animals, letting them graze and grow. Now that some of them are lambing it is getting more difficult to keep them all straight. Now I could use an Excel base program or even get a subscription with some app. But how would I learn and grow as a developer. So I want to build a Django app using Htmx. Let's dig in and set up a project...

## Why

Django because it server, I haven't done too much work on the server would like to build get more familiar with it. Django handles a lot of aspects of an app which is nice, and has been around for a while, so there fair amount of resources that I can tap into. On top of that I can use Python, I haven't used it for a while and would be nice to get some exposure to other way to program.

Htmx : this one is a last minute addition, currently is on the hype train but it sounds interesting to me. It's simple and light weight and has a different way to tackle front end interactions.

## Getting set up

I can keep adding to an app till I get over whelmed and bail on app due to the shear size and complication. I could see tracking multiple thing but I need to narrow my focus so I am able to "release" something into the world.

### Data

Keeping the app at a minimal viable product, plan on having a data table with with just animal species and general information pertaining to the animal. I think the mother/father

<strong>Animal_Species</strong>

- breed
- species

<strong>Animal_Specs</strong>

- Name/id
- mother
- father
- sex
- date of arrival

### Django

- python 3
- virtual environment, venv
  - create: python3 -m venv .venv
  - activate: source .venv/bin/activate
  - exit out: deactivate
  - packages: pip freeze > requirements.txt
- Install django
  - render "Add Animal" form
  - render list of all Animals

## Resources

[htmx link](https://htmx.org/)

[Django link](https://www.djangoproject.com/)
