---
layout: ../../../../layouts/writeups/MdWriteUpLayout.astro
title: "Wanta: Setup Project to tracking my animals"
pubDate: 2024-02-10

published: false
slug: "django app htmx animal tracker "
tags: ["wanta", "server", "django", "app"]
---

## Introduction

I'm a bit of a hobby farmer, I like taking care of animals, letting them graze and grow. Now that some of them are lambing it is getting more difficult to keep them all straight. Now I could use an Excel base program or even get a subscription with some app. But how would I learn and grow as a developer. So I want to build a Django app using Htmx. Let's dig in and set up a project...

## Why

Django because it server, I haven't done too much work on the server would like to build get more familiar with it. Django handles a lot of aspects of an app which is nice, and has been around for a while, so there fair amount of resources that I can tap into. On top of that I can use Python, I haven't used it for a while and would be nice to get some exposure to other way to program.

Htmx : this one is a last minute addition, currently is on the hype train but it sounds interesting to me. It's simple and light weight and has a different way to tackle front end interactions.

## Scope

- Add any new animals that have arrived on the farm
- Document animal relations
- Track animal health and other events

## Stories

- a page to see all animal on the farm
- form to add new animal
- pages for each animal to where it can add a new status update
- on animals page, if they have children have them listed

## Note

I can keep adding to an app till I get over whelmed and bail on app due to the shear size and complication. I could see tracking multiple thing but I need to narrow my focus so I am able to "release" something into the world. So keeping the app at a minimal viable product, plan on having a data table with with just animal species and general information pertaining to the animal.

## Data

<strong>Animal_Species</strong>

- breed
- species

<strong>Animal_GeneralInfo</strong>

- Name/id
- mother
- father
- male/female
- date of arrival

<strong>Animal_status_updates</strong>

- status
- notes

## Stack Set up

### Django

- python 3
- virtual environment, venv
  - create: python3 -m venv .venv
  - activate: source .venv/bin/activate
  - exit out: deactivate
  - packages: pip freeze > requirements.txt
- Install django
  - active venv, install Django
  - django-admin startproject livestocks
  - cd livestocks
  - python3 manage.py runserver
  - http://127.0.0.1:8000/

### HTMX

- Install
  - '<script src="https://unpkg.com/htmx.org@1.3.3"></script>'
- add script to template

yeah thats it.

## Conslusion

I have a basic stucture for an App and feel like that I got a good base to start building something. The Tech listed the main tools that I want to use. I pretty sure once I get into I'll be adding more, but I want to get something done. Any new additions I provide a note on what get added and when.

[github repo](https://github.com/matterholt/livestock_rollcall/tree/3ef5d9c13da4a10c9abf9bcaef5d0ffeb98c4d9f)

## Resources

[htmx link](https://htmx.org/)

[Django link](https://www.djangoproject.com/)
