---
layout: post
title: "Generating a Table of Commits of a User for a Repository"
author: "Ayan Banerjee"
date: "2019-08-21"
tags: blog
comments: true
---

First check out to the desired branch: `git checkout upstream/master`. Here,
I am checking into the `master` branch of `upstream` alias.

Now, you can use gits author argument to generate a list of commits of that
particular user. Using that on this repo:

```shell
git log --author="Ayan Banerjee"

commit 6bfaed7f39827f15d4f66ffc756f77af74bde4e2
Author: Ayan Banerjee <ayanbanerjee7777@gmail.com>
Date:   Thu Jun 13 23:35:45 2019 +0530

    Show bullets

commit e734af7e0658449ed0262c830d04b2990182b306
Author: Ayan Banerjee <ayanbanerjee7777@gmail.com>
Date:   Thu Jun 13 21:58:31 2019 +0530

    Add GSoC proposal
```

Now, you can use git's [`pretty-formats`](https://git-scm.com/docs/pretty-formats) to generate a table.

```shell
git log --author="Ayan Banerjee" --pretty=format:"<tr><td>%h</td><td>%ad</td><td>%s</td></tr>" > commits.txt
```

Here, I am saving the output into a file `commits.txt`, which ends up looking
like this:

```html
<tr><td>6433d44</td><td>Mon Aug 19 23:15:16 2019 +0530</td><td>Update docs (#96)</td></tr>
<tr><td>5373a5b</td><td>Mon Aug 19 22:51:30 2019 +0530</td><td>Drop list fields from XML files (#95)</td></tr>
<tr><td>6538ed1</td><td>Mon Aug 19 22:43:45 2019 +0530</td><td>Add Pan-Can phenotype (#94)</td></tr>
<tr><td>d559739</td><td>Mon Aug 19 22:33:25 2019 +0530</td><td>Add GISTIC and CNV Pan-can (#93)</td></tr>
<tr><td>4b97675</td><td>Mon Aug 5 21:53:58 2019 +0530</td><td>Add GDCAPIPhenoset (#91)</td></tr>
<tr><td>5ce4f9b</td><td>Thu Aug 1 00:02:50 2019 +0530</td><td>Update illuminaMethyl probemaps (#92)</td></tr>
<tr><td>674ff02</td><td>Mon Jul 29 21:47:39 2019 +0530</td><td>Reorder merge (#90)</td></tr>
...
```

After adding the `table` tag and some proper headers it ends up looking
like this:
<table>
<tr><th>Commit SHA</th><th>Date</th><th>Commit Message</th></tr>
<tr><td>6433d44</td><td>Mon Aug 19 23:15:16 2019 +0530</td><td>Update docs (#96)</td></tr>
<tr><td>5373a5b</td><td>Mon Aug 19 22:51:30 2019 +0530</td><td>Drop list fields from XML files (#95)</td></tr>
<tr><td>6538ed1</td><td>Mon Aug 19 22:43:45 2019 +0530</td><td>Add Pan-Can phenotype (#94)</td></tr>
<tr><td>d559739</td><td>Mon Aug 19 22:33:25 2019 +0530</td><td>Add GISTIC and CNV Pan-can (#93)</td></tr>
<tr><td>4b97675</td><td>Mon Aug 5 21:53:58 2019 +0530</td><td>Add GDCAPIPhenoset (#91)</td></tr>
<tr><td>5ce4f9b</td><td>Thu Aug 1 00:02:50 2019 +0530</td><td>Update illuminaMethyl probemaps (#92)</td></tr>
<tr><td>674ff02</td><td>Mon Jul 29 21:47:39 2019 +0530</td><td>Reorder merge (#90)</td></tr>
</table>

In this way you can generate a table of commits for a particular user in a
repository!
