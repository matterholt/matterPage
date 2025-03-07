---
layout: ../../../../layouts/writeups/MdWriteUpLayout.astro
title: "Converting an old laptop to a DNS sinkhole"
pubDate: 2023-11-26

published: true
slug: "detail write up about making an old laptop into and server with Ubuntu, adding the ability to remote desktop using open-SSH, Finally adding a network level ad-blocker with adGuard home"
tags: ["server", "AdGuard", "ubuntu", "ad-blocker"]
---

# Converting an old laptop to a DNS sinkhole

The goal of the project is to start blocking ads and secure our data being used by other websites. I wanted to use my raspberry pi but couldn't find it. So I opted to use an old laptop that was running Pop_os, that wasn't doing anything.

## Project Objectives.

1.  Want to gain more experience with working with servers, So <strong>Ubuntu Server</strong> for OS.
1.  Having the ability to tuck the server away and remotely connect to the server.
1.  Installing the DNS Sinkhole on the server by SSHing

## Installing Ubuntu Server

1. Download image
1. Burn to USB, needs at least 2 GB
1. Plug in USB, Reboot, Franticly hit f12 to get in set up mode
1. Change the boot setting to USB, continue
1. set up with installer, (see below @ Resources), Wait...
1. reboot and log in

I have a general idea of servers but you never know until you get your hands dirty. At first login, I felt a bit lost, not sure what needed to be done or even how it should be done. There is just a full screen of a terminal. So I threw in some terminal commands as if it were a regular computer. Back to my goals for the server and that is to set up a DNS sinkhole. But before that, I wanted to connect to the server by SSH.

What kinda got all this started was wanting to build a home lab. Which is getting a server, network, and all the stuff in between set on at home. Then I wanted to get a better understanding of networks and how to store and host data. There are tons of things that can be done so it can be overwhelming. My advice start small, with low investment, and build on if desired.

## Setting up SSHing

openSSH-server will allow us to have remote access on our main workstation to the server. It is a very common practice to access the server. However, there are other options for remote but I haven't dug too deep into the subject. Also, there is a chance that it could have been installed when the server was set up. Either way going to walk through it just so I know that everything is up-to-date.

### Server Task, Ubuntu/Linux specific

1. apt update and apt upgrade. Best practice to ensure the package manager is up to date
1. apt install openSSH-server, and get it up and running

   a. Check with: `bash sudo service ssh status`

   b. Alternative: ` bash sudo systemctl status ssh`

   c. Should see a prompt at the active key should be running

   d. If unsuccessful: `bash  systemctl enable --now shh `

1. Firewall opening for SSH

   a. `bash sudo ufw allow ssh`

   b. `bash sudo ufw status`

1. Getting the IP address for the server

   a. `bash ip a`

   b. Prompt will display and will need to look for the group of numbers like `192.168.1.111`

### Client tasks

1. install ssh-client
1. connecting from a client in the terminal.
1. log in by the username at IP
1. password **\*\***
1. on success then the ability to see the server.

Once the SSH client can log in, then the laptop lid can be closed and tucked away. But before that, there is a setting that will be needed. If the setting is not turned off then the SSH-client will show the server but is unable to use the keyboard.

### Keep laptop active while the lid is closed

1. on the server either local or ssh. to /etc/systemd/logind.conf
1. in file find '#HandlelidSwitch=suspend' and change it to 'HandlelidSwitch=ignore'
1. I didn't have this option but just check for 'LidSwitchIgnoreInhibited=no'
1. Lastly a reboot `bash sudo service systemd-logind restart`
1. Now close the lid and hide it way

\*\* Extra bonus for using a laptop as a server if the power ever goes out the battery will keep the server running.

## Adding AdGuard Home to the server

Now to get to the main objective, and add a DNS sinkhole. So what exactly is it, when a site is requested it not only requests the information but it also lets all their friends know what you are looking at. So it can be thought of as an ad-blocker for the home network. With a little amount of research, I got 2 options pi-hole and AdGuard Home. In this write-up, I'm going with AdGuard Home, a bit more options and I found a nice tutorial on youtube.

### Tasks

1. ssh into the server.
1. sudo apt update
1. curl the git hub

   a. ` curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v`

   b. The curl will install on the server and will automatically run, you should be able to tell by the command in the terminal saying "AdGuard Home is now available at the following address....". Then copy and paste that address into your favorite browser and off you go.

   c. !! IMPORTANT, originally used snap to install but it would not run. I'm sure I could have figured out how to get it running but I didn't have enough time.

1. Upon entering the address in the browser ADGAURD interface will appear and will walk through a set-up.
1. On the Admin Web Interface, Using Ubuntu server there is a config file that will need be be changed on the server. It has to do with DNS server Port 53. Ubuntu has created a file to do some magic. So DO NOT change the value on AdGuard Home setup page. O

   a. If you are using a server distro besides Ubuntu There shouldn't be any changes and continue setting up the sinkhole the rest of the way.

1. Change or disconnect the Port 53 on the server.
   a. FIND NOTES I MADE ON MY SERVER !!!!!!!!!!

1. After user name and password are set up AdGuard Home is up and running,
1. Telling the router to use the DNS server, the way is explained in the AdGuard Home interface.
1. Extra settings and such. Check out NetworkChuck or the AdGuard Documents

- how to check if it is working, wireshark on Pop_OS based Ubuntu which is based on a Debian fork. To run it just sudo it in the terminal.

## Versions log

- Ubuntu Server , 22.04.3 LTS , 2023-10-24
- openssh , 9.5 , 2023-11-24
- AdGuard Home , v0.107.41 , 2023-11-24

## RESOURCES

### Ubuntu Server Install

[Ubuntu Server Basic installation, ubuntu.com](https://ubuntu.com/server/docs/installation)

### Home Lab Inspiration

[Homelab nerds, unite!, Changelog podcast](https://changelog.com/friends/9)

### Setting up AdGuard Home, and other network stuff

[Block ALL ads with this…(and speed up your internet), NetworkChuck Youtube](https://www.youtube.com/watch?v=B2V_8M9cjYw)

### Home lab stuff

[TechnoTim youtube](https://www.youtube.com/@TechnoTim)

### Setting up SSH on Server

[Complete Guide to Configuring SSH in Ubuntu, itsfloss.com](https://itsfoss.com/set-up-ssh-ubuntu/)

### SSH Connecting Client

[How To Use SSH to Connect to a Remote Server, digitalocean.com](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-to-connect-to-a-remote-server)

### Setting up Server

[Initial Server Setup with Ubuntu 20.04, digitalocean.com](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04)

### What AdGaurd Home can do

[AdGuard vs AdAway (and other hosts-based ad blockers - DNS66, Netguard etc),ADGAURD.com](https://adguard.com/en/blog/adguard-vs-adaway-dns66.html)

### Keep laptop running when lid is closed

[Keep Ubuntu Server running on a laptop with the lid closed?, askubuntu.com](https://askubuntu.com/questions/141866/keep-ubuntu-server-running-on-a-laptop-with-the-lid-closed)
