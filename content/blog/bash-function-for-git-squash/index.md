---
title: "Bash Shortcut for Git Squash"
date: "2020-06-25"
description: "Aka save seconds of your development time!"
---

![cover-image-for-git-squash](./clock.jpg)

<small><i><span>Cover photo by <a href="https://unsplash.com/@moritz_photography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Moritz Kindler</a> on <a href="/s/photos/clock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></i></small>

I often find myself squashing a lot of unnecessary commits. The usual way to do this is by using `rebase` or `soft reset`. I personally prefer to use the `soft reset` method.

```shell
# soft reset some commits
git reset --soft HEAD~2
git commit -m "Commit message"
```

As you can see the process is rather long. So how we can save some precious seconds ... enter bash functions!

Add this function to your `.bashrc` file:

```shell
function sq {
    if [ -z "$1" ]
    then
        echo "First argument required"
        return 1
    fi
    if [ -z "$2" ]
    then
        message="$(git log --pretty=format:"%B" -1)"
    else
        message=$2
    fi
    git reset --soft HEAD~$1
    git commit -m "$message"
}
```

And then run `source ~/.bashrc`.

## Usage

If you want to squash `2` commits with the commit message `Add tests`, run this: `sq 2 "Add tests"`.

More often than not we want the commit message of the squashed commit to be the same as the recent most commit message. In those cases, simply run `sq 2` if you want to squash 2 commits.

Sometimes we need to squash all the commits that we made after branching off from a branch. For that, add the following function to your `.bashrc` file:

```shell
function cnt {
    compare_branch=${1-master}
    git rev-list --count HEAD ^$compare_branch
}
```
This gives the number of commits made after branching off. Try running `cnt` for the number of commits made after branching off from `master` and `cnt my_branch` for the number of commits made after branching off from `my_branch`. Don't forget to run `source ~/.bashrc` after modifying `.bashrc`!

Now simply run `sq "$(cnt my_branch)"` to squash the commits made after branching off from `my_branch` with the recent-most commit message.

I hope that you have learned something useful from this post and save some seconds of your development time! Let me know if something is not clear.

_This post originally appeared on [Dev](https://dev.to/ayanb/bash-function-for-git-squash-lno)_.
