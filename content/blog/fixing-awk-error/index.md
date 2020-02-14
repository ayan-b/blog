---
title: "Fixing `awk: error while loading shared libraries: libreadline.so.7: cannot open shared object file: No such file or directory`"
date: "2019-06-25"
description: "Fixing `awk: error while loading shared libraries: libreadline.so.7: cannot open shared object file: No such file or directory`"
---

First install libreadline using your package installer: `sudo pacman -S readline`.

Now make a symlink between your current libreadline version and to libreadline.so.7,
like: `ln -s /usr/lib/libreadline.so.8 /usr/lib/libreadline.so.7`, since `8` is
the version as of the time when this blog is written.

This should solve the issue!
