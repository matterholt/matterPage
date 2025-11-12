---
title: Things that will be install on the next machine.
slug: new-machine-installs
publishDate: 2025-11-17
tags: [ "terminal", "TUI", "installs" , "setup", "dev_environment" ]
---



## Programing Geared

Brew -> Mac missing packaging manager
Git -> if you know you know
Deno -> Server Side JS, like it
Node -> Server Side JS
NVM -> Node manager
UV -> Python Manager, awesome
sqlite -> Baselevel database
duckDB -> Data Files Explorer, fun
Rust -> Trying to level up

## Terminal Gems

yes it is ranked, must haves at the top

**Atuin**
Command History / Search, Base Terminal can back search for command and go back to previous command. Atuin takes it to another level. Filter through past commands and their biggest sell is to have the history sync up with other machines

**Zoxide**
Basically shortcut to commonly visited directories. The ability to Tab completion, so if you are exploring a new dir or couldn't quite remember how you structure the directories . A better option for visited dirs, would be the interaction mode which brings up a list of visited dirs.

**Tree**
Ever wanted to just see the file structure of a directory, install Tree. Prompt is ```tree -l3```  and you got 3 layers deep of the a dir. A helpful when trying to ```mv``` or ```cp``` a file or dir.

**NeoVim with LazyVim**
Fist NeoVim.  Vim that uses Lua, which is similar to JS.  This it a little easier in building packages, opposed to Vimscript. LazyVim, quick install with all the amenities of a modern editor. A heavy lift for newbies, but you are able to get things going.  One that are not ready to go down the path of a custom NeoVim, One day but not today.

**Difftastic**
This one is a git tool. added visual elements to for comparing what has change in a file. Not a big one but if trying to stay in the terminal. a nice little tool

**grep and fzf**
Only dabbled with these tool directly in the terminal but I have used them inside nvim/lazyvim, and they are pretty powerful to find stuff.  Grep will find any combination of character in any file.  fzf finds file name matches all across the drive.

**Onefetch**
A repo tool for a flex. Just a fun tool that will take data from the repo and print it to the terminal. this could be what tech is used, contributors and authors.

**Fastfetch**
Another fun about the same as OneFetch, this one however does the system

**HTTPie**
Sending and receiving REST API calls. Still exploring the space. I've done some work with this help keep me in the terminal. tricky when sending larger payloads.

**Image stuff**
imagemagick, webp, parallel : not the most important things but I have some bash script that will work with downloaded images and convert them to a webp. Hope to have some time to build up some new script that help. Tauri has a neat little image compiler that saves multiple sizes.

## Some TUIs

**btop**
Better on the eye Htop. Dashboard to show what is going on with the computer. Don't use it a lot but If ever need to see why you computer is taking it's time then this tool is able to get it worked out.

**lazygit**
Found this one by wanting to find a replacement of the VS code git control. Nice to have when a want to look at a large changes and to review before a commit


## Cask , Applications
Krita -> edit images
raycast -> better spotlight
insomnia -> REST API testing
Docker  -> repeat

## Fun

Fonts: font-departure-mono, font-fira-code, font-fira-code-nerd-font
Themes:  Rose Pine and Tokyo Nights


##  Scripts

At work I have a new release branch every 2 to 4 weeks and the branches can stack up. This command can delete any merged branch except develop/main/master

```bash
git branch --merged | egrep -v "(^\*|develop|main|master)" | xargs git branch -d
```


Tree created these files had to remove them from dirs. this did the trick

```bash
 %% print what is found in dir %%
 find . -name "00Tree.html" -type f

 %% take said found then delete %%
 find . -name "00Tree.html" -type f -delete

```


Atuin scripts: Wanting to see what files in a repo have not been touch in over a year. Spits out .txt list so able go through see if there is anything that isn't needed

```bash
comm -23 <(git ls-files | sort) <(git log --since="1 years ago" --name-only --pretty=format: | sort -u) | \
while read -r file; do
    if [ -f "$file" ]; then
        last_date=$(git log -1 --format="%ad" --date=short -- "$file" 2>/dev/null)
        printf "%s | %s\n" "$last_date" "$file"
    fi
done | sort -u > files_olderthan_year.txt
```


## Alias

setup STOW to manage TODO:

- some for GIT
- some for Dir list

#### Terminal Tools

[[Terminal Tools]]
