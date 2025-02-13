---
layout: ../../../../layouts/writeups/MdWriteUpLayout.astro
title: "Python Project Managers"
pubDate: 2024-06-01

published: true
slug: "poetry project"
tags: ["project manager", "lock", "venv", "poetry"]
---

## Introduction

More time than not we are installing packages in to our projects. Once we are ready to share our projects, We'll want the person that is interested to spin up the project with ease. Another reason for a manager is to lock packages into a specific version or range of version. Keeping the project from creeping up version when we are not prepared for the update. Know why lets start stepping into the Python ecosystem and what we can do build awesome project that are stable.

## Base: pip3

Python pip , This is a staple, It comes with Python, and it's the main way of installing package into a project. Before installing all the packages under the sun, It's important to know that all the packages are install globally. 
This isn't a really good practice, since there isn't way regulate the versions and share what the version used in the project. 

	If you happen to install package globally with this command in the terminal you'll be able to see what was installed and where

```bash
  pip list -v  
```

To combat this a virtual environment would need to be activated, this is initialized by python by the command below. This will install package in the ".venv//lib/python(version)" directories. Anytime there is work on the project it a good idea to activate the environment. Now this get our own local development locked down but the issue arises when some one else want to spin up our project when we loose or don't have the .venv directory. 

	General rule for naming is to have the dot notation but isn't rigidly enforce
	

```bash
python -m venv .venv

source .venv/bin/activate

# to get out of the virtural environment 
deactivate

```

Pip has a command that allow use to quickly install all the package with a command. To get this feature we'll utilize the pip freeze command. This will generate a requirement.txt file that has all pip installed packages. Now anyone is able to spin up our project with the proper packages. 

	This is a general rule but nothing is enforced

```bash
pip freeze > requirement.txt
```

For hacking round and scripting this would get the job done. For more production work, pip has some holes and maintainability is lacking. There is a standard file for Python projects called pyproject.toml. This is a manual process and can be a challenge to maintain the file. 

PEP 518 – [Specifying Minimum Build System Requirements for Python Projects](https://peps.python.org/pep-0518/)


## Tier 2:  Poetry 

When pip isn't enough there are other tech that can be added to a project. The one that I have selected is called Poetry. Poetry offers all the pip stuff, virtual environment and to boot a lock file for the package installed. Moving forward I be using Poetry to medium to larger projects. 

Cool things that Poetry offers

1. auto generates a pyproject.toml
2. auto generate a package lock file called poetry.lock
3. basic project structure.
4. group dependencies, have the main and can have test or even a dev
5. poetry shell, enters the virtual environment 
6. version control for project 

These are a few things that help manage project and probably more that I don't know. I plan on continue  to learn and find out managing a project with poetry

## Others
1. Pipvenv 
	1. been around for a wail, has lock file, creates and manages package
	2. https://pypi.org/project/pipenv/
2. Conda
	1. born from the data science phase. offers all the things
	2. https://conda.io/projects/conda/en/latest/user-guide/getting-started.html#
3. Hatch
	1. newish kid on the block, has quite a bit of features
	2. https://hatch.pypa.io/


## Resources 

https://python-poetry.org/docs/basic-usage/