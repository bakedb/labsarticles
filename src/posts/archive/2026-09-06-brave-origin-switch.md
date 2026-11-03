---
layout: article.njk
title: "I Switched to Brave Origin for a Week, This is What I Found"
description: "How does a stripped down version of Brave compare to my beloved LibreWolf?"
date: 2026-09-06
cover: "https://imgur.com/FUTN5P3.png"
coverAlt: "Brave Origin First Setup Screen"
---

For the past year, I have been using LibreWolf as my main browser on all of my computers. I much prefer the Firefox-based browser over any other due to it's fully open source nature, security, and the fact that Google has almost nothing to do with it. I love the sync feature that allows me to view everything on all of my other Firefox and LibreWolf instances on other devices, and also lets me send tabs to those devices. The time it takes from right-clicking the tab (or pressing share on mobile) to having the tab on the other device is often no longer than a second. Try doing that, AirDrop. LibreWolf's protection measures and ad-blocking abilities are also nothing to put lightly. The only place I see ads at home now is on Twitch. And yes, YouTube, I definitely made an exception for you. Please don't ban me.

![](https://imgur.com/GOXlT2y.png)

> The browser in question.

So it's safe to say that I quite enjoy LibreWolf. However, I love casting terror onto my workflow, so I'm abandoning it for a week. What's the worst that could happen?

Back in June, Brave Software released a stripped-down version of their Brave browser Brave Origin. I'm going into this knowing that I didn't like Brave the few times that I have tried it. I heard about their crypto affiliate code controversy and experienced their annoying promotion of Brave Rewards and their Crypto wallet. What Brave Origin seems to offer is a premium experience with all of the Web3 annoyances removed. At least, I hope that's what it is. I'll have to tolerate it for a week, after all.

With a Brave Origin license coming in at $60 USD, I am glad that I'm not one of the poor saps on Windows or macOS. Brave has made the brilliant decision to give Linux users access to the browser for free! Amazing, 60 Freedom Bux® have been spared.

![](https://imgur.com/xKu6GDw.png)

> Brave's comparison of differences across operating systems.
# Day 1

I installed the `brave-origin-bin` package from the AUR, and went ahead and opened it.

![](https://imgur.com/thLShv6.png)

![](https://imgur.com/FUTN5P3.png)

Seems good (and free) so far. You can't take the small things for granted. It actually gave you the choice of setting itself as the default browser!

![](https://imgur.com/iQCn7PA.png)

> The import settings menu.

Well this seems to be quite an inconvenience... I can't seem to find a way to import all of my stuff from LibreWolf, only bookmarks. On second thought, the only other useful things that I can think of wanting to transfer is history and extensions. The former isn't necessary, and the latter isn't really possible between a Firefox and Chromium browser.

Well, it's time to close LibreWolf for the last time for the next 7 days. Let's see what happens!

First up on the to-do list is extensions. I need Proton Pass to be able to log into most of my stuff, so that will need to be taken care of first.

![](https://imgur.com/txaKPNr.png)

It turns out that even through Google discontinued support for Manifest v2 extensions, Brave continues to support some of them! The most important of which is uBlock Origin, which is my daily-driver ad-blocker and the one that comes preinstalled with LibreWolf.

![](https://imgur.com/lURt4Mv.png)

It seems that I have come across my first tiny issue with Brave Origin: you cannot middle-click the top bar to open a new tab, you have to use \<C-t> or the + button. Another thing that I find annoying at the moment is that middle-clicking the + button looks up whatever is on your clipboard. My muscle memory is not happy right now, but I bet I'll get used to it.

Brave Search is the default search engine, and it seems pretty similar to any other. 

![](https://imgur.com/4gAQww8.png)

Of course, it has it's own AI search thingy that all browsers seem to require now just to be able to exist. However, you can turn it off using the settings button in the top-right.

![](https://imgur.com/DYQRT1l.png)

DuckDuckGo has more granularity when it comes to choosing when it's Search Assist feature pops up, which I like better than this, but I am still happy that you have the option.

![](https://imgur.com/WhZUQvk.png)

Now onto YouTube. Signing in was quick using a Proton Pass passkey. My first order of business was disabling autoplay, which was quite easy.

![](https://imgur.com/g41qhcg.png)
> You can disable autoplay by going into site settings and setting it to "Block".

Next is getting the [Vorapis V3](https://vorapis.pages.dev/#/) extension working to bring back the pre-2020 Hitchhiker layout.

![](https://imgur.com/BxmdGTE.png)

And it works perfectly! It's not as smooth of an installation process as it is on Firefox, however. It's still simple: unzip the archive, turn on Developer Mode on the extensions page, and open the unpacked extension.

So far, Brave seems to be everything I need it to be. I predict that the rest will just be finding the little things that I don't like about it.