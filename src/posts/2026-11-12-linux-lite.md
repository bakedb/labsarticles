---
layout: article.njk
title: "Distro Test: Linux Lite"
description: "After taking a break from testing, will Linux Lite hold up against the competition?"
date: 2026-11-12
cover: "https://github.com/bakedb/distro-tests/blob/master/Review%20Logs/linux-lite/screenshot1.png?raw=true"
coverAlt: "Default Linux Lite XFCE environment"
---

# Day 1
I took a pretty long break from these reviews, but I'm happy to be back to it! This one started out pretty fine. The only thing that made me a bit worried was the AI-generated icon on the desktop in the live environment.

![Linux Lite live environment desktop](https://github.com/bakedb/distro-tests/blob/master/Review%20Logs/linux-lite/screenshot0.png?raw=true)

It had the usual Calamares installer that let me set my current home partition as /home in the installation which is always appreciated when switching distros, but not having a fresh home directory would end up biting me in a second. The installation took a bit, but once it was done, it dropped me into... normal, boring XFCE. With none of the Linux Lite customizations that were in the live image...

![Default XFCE environment](https://github.com/bakedb/distro-tests/blob/master/Review%20Logs/linux-lite/screenshot1.png?raw=true)

It turns out that because I had a stock XFCE installation on my already existing /home partition, the Linux Lite customizations did not apply. Whatever, I just installed a Gruvbox theme and Powerline to make it look a bit nicer.

![Default terminal emulator](https://github.com/bakedb/distro-tests/blob/master/Review%20Logs/linux-lite/screenshot2.png?raw=true)
> Before Powerline...

![Terminal emulator with Powerline installed](https://github.com/bakedb/distro-tests/blob/master/Review%20Logs/linux-lite/screenshot3.png?raw=true)
> After Powerline

# Day 6
Oops, I skipped writing for a few days... but I suppose that's a good thing since I haven't had many problems to talk about.

I have only had 2 problems so far:

Some theming issues with the Gruvbox theme I downloaded (but that might be a problem with either the theme or the updater application that broke with it),

![Dark mode theming issue](https://github.com/bakedb/distro-tests/blob/master/Review%20Logs/linux-lite/screenshot5.png?raw=true)

and some battery draining issues due to AppImages stopping the computer from entering deep sleep that I fixed by switching away from AppImages.

One thing that I have noticed is the new Rust-based sudo implementation that shows asterisks when typing your password instead of just showing nothing.

![Asterisks while typing password](https://github.com/bakedb/distro-tests/blob/master/Review%20Logs/linux-lite/screenshot4.png?raw=true)

I would say that Linux Lite is a pretty solid distro. I am comfortable with XFCE and all of the applications that it shipped with (Thundar for files, Mousepad for text editing, etc.)

# Day 8
After more than a week of using this distribution, I can confidently say that I would recommend it to someone else. I might stay on it for a while because it's so solid. It feels like Linux Mint with less default applications, a different default desktop environment, and is closer to a vanilla Debian/Ubuntu experience. It barely got in my way, but I can see the appeal for a more modern-looking desktop environment that this distro doesn't seem to provide in a beginner-friendly manner. I would set it around an 8/10, but that can vary depending on how much you like XFCE.

> Editor's note, 12 November 2026: Interestingly, the Fastfetch configuration is still set to display Xubuntu's information.
![Fastfetch](https://imgur.com/a/9af9mtU.png)