---
title: "Change Your Desktop Wallpaper Anytime from a Variety of Source"
date: "2018-06-01"
description: "Desktop Wallpaper Changer fetches images from popular sources and set those as your desktop wallpaper"
---

Are you bored out of same wallpaper on your machine? Check out [Desktop Wallpaper
Changer](https://github.com/ayan-b/Desktop-Wallpaper-Changer)🖥️!

## How to install?

You can install from `pip` using the command `pip install dtwc`. You can also
get the latest code from GitHub by running: `pip install git+https://github.com/ayan-b/Desktop-Wallpaper-Changer`.
If you do not have pip on your system, follow this [page](https://pip.pypa.io/en/stable/installing).

## How to use?

In order to change the background you can use the CLI:

- `dwc -i` will open all the wallpaper sources and you can select the one you like.
- `dwc <number>` will update the wallpaper from the number-th source as specified above.

As of now, Windows and some Linux distributions are supported. See this [issue](https://github.com/ayan-b/Desktop-Wallpaper-Changer/issues/4)
for more info.

## Update Wallpaper Periodically

You can use [cron](https://en.wikipedia.org/wiki/Cron) to schedule the program to update the wallpaper in Unix-like OSes.
[Task scheduler](https://docs.microsoft.com/en-us/windows/win32/taskschd/task-scheduler-start-page) can be used for the same in Windows.
