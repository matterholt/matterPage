---
title: Life in the Terminal Lane
slug: dive-into-the-terminal
publishDate: 2025-11-10
tags: [ "terminal", "shell", "setup", "dev_environment" ]
---


As starting dev in the 2020, all i wanted is to get spun up as quick I could to start developing. I wasn't sure what the terminal was or did i care, all that I new is that when you got your mac you installed iterm2 and oh-my-zsh. It worked fine and got work done. but there was a lull in work and I started to wonder what was installed with OhMyZsh and how many feature did i actually leverage.

## Un-OhMyZsh Myself

The questions lead me down a path of multiplexer, shells, terminals and aliases. At home I was using a linux distro, Pop Os. I wanted to find terminals to work on both environments. Iterm2 wasn't going to cut it and plus the work was already done and I really wanted to explore the area.  Alacritty, rust base terminal, multi-platform and nothing installed. This was the starting line. From there I asked what did I use the most with ohMyZsh and how to get it on Alacritty

Multiple windows in a single terminal. The tool to do this is called a multiplexer. The front runner is called tmux and the other I found is Zellij. I liked Zellij hand a alias that would jumping me into a session and have all my repo pulled up and running.

Making it look good, Alacritty has a setting files that can change colors , set fonts and spacing. but the prompt line was missing some flare. Found Starship make it look good tons of options , git images, language and whatever prompt style you can imagine

Changing directories. I can't remember how oh-my-zsh handle it but I didn't really find a replacement for it. Zellij helped  but wasn't quite the same. However I have just found a terminal program called Zoxide. Basically creates a database of your frequently visited directories and allow to target folder name and would change to the closes related directory. Another cool feature is the interactive mode (zi) which show all directories visited

I went fully in and got to busy to maintain and had some breaking changes. So I let it ride for a bit and util Ghostty was released and cleared my config and jump into that terminal. I reverted starship but at a default setting and don't have Zellij set up. Haven't need it since Ghostty has a built in that does all that I need. Themes are available so I bounce between Rose Pine and Tokyo
Night themes.

#### TERMINALS
- Alacritty -> barebones
- Ghostty -> future
- Kitty -> herd good things

#### Shell
- bash -> the OG & Linux
- zsh -> Mac default
- Elvish -> have no experience; had to mention

#### Configs
- Themes any light or dark:  'Rose Pine' and 'Tokyo Night'
- Fonts : Ghosty defaults and Departure mono.

### Main goals

1. Explore terminals and tools available
2. Get most if not all features of 'oh-my-zsh'
3. Capable to use on Linux and Mac workstations
4. last but no least make it good looking.
