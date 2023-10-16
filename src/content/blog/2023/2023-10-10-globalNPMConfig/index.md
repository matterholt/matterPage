---
layout: ../../../../layouts/writeups/MdWriteUpLayout.astro
title: "NPM Config and global packages"
pubDate: 2023-10-10

published: true
slug: "Working with some global packages, changing some npm configs, ended up causing more trouble and had to revert back. These are some commands that where helpful."
author: "Matterholt"
image:
  url: ""
  alt: ""
tags: ["npm,", "development", "frontend", "lessons"]
---

I was doing some research on some new web tech. The guide had a section that could fix an issue that I was having. I thought it may help with the issue I was having so I gave it a go. Without thinking of the overall impact I created more trouble than what it was worth. So I had to backtrack and restore it back to the defaults. These are some commands that were used during this process.

## What packages are installed globally

```bash
npm list -g

npm ls -g --depth=0
```

Command will show the location where the packages are being installed. Along with all the packages that have been installed at the global level.

## Viewing npm configs

```bash
# list basic configs
npm config list


# list all defaults
npm config ls -l
```

Show the current configs setting, any outside registries, global and other basic settings

## Adding new config settings

```bash
sudo npm config set -g prefix ~/.local
```

At the global level, add the "prefix" key to the config file, then redirect any packages installed globally to the './local' file. If you check the packages that are installed globally (command at the top), the command should yield a short list. If setting the "prefix" then can be checked by running the command to view npm configs. !! With this prefix change any global packages will be looking for packages installed in prefix value and any globally installed packages will not be found in the folder.

** Needs more investigation , when I executed the command and tried to install a package global it was unsuccessful. With being a main work computer I don't want to risk being crippled when an issue arises. Hence the next section \***

## Removing config setting

```bash
sudo npm config delete prefix
```

Pretty obvious but it will remove any key value pair in the config. Suggest not removing any key that was not specifically added by the user. Again run the command that will list the basic configs for npm to confirm the key/value was removed.

## Removing global package

```bash
npm uninstall -g package-name
```

Will remove the package from global
