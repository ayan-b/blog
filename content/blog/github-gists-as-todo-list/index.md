---
title: GitHub Action - Use GitHub Gists as a Todo List
date: "2020-09-04"
description: Gist-todo-list-action - My submission for GitHub Hackathon!
---

Want to use GitHub gists as a todo list? ☑️ Introducing [gist-todo-list-action](https://github.com/ayan-b/gist-todo-list-action)! Be sure to check the README
for more info on how to use it. I will soon write a blog post how I created the
action.

This is my submission for [GitHub Hackathon](https://githubhackathon.com)!

**Update:**

GitHub declared everyone as a winner 🎉🥳 and I received this nice glass and a
pack of stickers! Here's the [winner list](https://docs.google.com/spreadsheets/d/1YL6mjJXGt3-75GejQCubsOvWwtYcGaqbJA7msnsh7Tg/edit#gid=0).
My submission is on line 159 😉.

![GitHub Hackathon Glass](./github-hackathon-glass.jpg)
_GitHub Hackathon Glass_


![GitHub Hackathon Stickers Pack](./github-hackathon-stickers-pack.jpg)
_GitHub Hackathon Stickers Pack_


_The following text is taken from the project readme._


## Features

### Before

Create a Todo List in a GitHub Gist (following the
[task list syntax](https://help.github.com/en/github/managing-your-work-on-github/about-task-lists#creating-task-lists))
and create a list, and check the tasks you have done off during the day.

![before todo](https://raw.githubusercontent.com/ayan-b/gist-todo-list-action/master/images/before-todo.png)

### After

After midnight your done tasks will be transferred to the done list. In this
way you will have a history of your list!

|               Todo                   |          Done            |
|--------------------------------------|--------------------------|
| ![after todo](https://raw.githubusercontent.com/ayan-b/gist-todo-list-action/master/images/after-todo.png) | ![done](https://raw.githubusercontent.com/ayan-b/gist-todo-list-action/master/images/done.png) |

## Usage

- First create two gists from <https://gist.github.com>, namely `todo` and `done`.
- Add file `todo.md` and `done.md` to them respectively. The file content should
  be a single header `# Todo` and `# Done` respectively.

- Generate a new personal access token with gist scope from
  here: <https://github.com/settings/tokens/new>.

- Fork this repository. Note that if you want to use GitHub Action from market place,
  you don't need to fork this repository. See [this](#using-with-github-action) for more instruction.

- Add the gist IDs as `TODO_GIST`, `DONE_GIST` and the personal access token as
 `GH_TOKEN` to your repository secrets: `https://github.com/<your_username>/<repository_name>/settings/secrets`.
  It will look something like this:

  ![secrets.jpg](https://raw.githubusercontent.com/ayan-b/gist-todo-list-action/master/images/secrets.png)

  > Gist ID is the part of the URL after your username. For example the gist ID
  of this gist `https://gist.github.com/ayan-b/1b44e52eifj09bc75c914f6fedf95304`
  is `1b44e52eifj09bc75c914f6fedf95304`.

- Now you have your todo list using GitHub gist!
- **Optional**: Change the time of [cron job](https://github.com/ayan-b/gist-todo-list-action/blob/master/.github/workflows/update-list.yml)
  in the workflow file according to your time zone so that the todo and done
  list update exactly at midnight (and not at UTC midnight)!

  Here's one for IST time zone (UTC +5:30). Note the use of `TIME_ZONE` environment
  variable and the change in cron job.

```yaml
name: Update Todo List IST

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]
  schedule:
    - cron: "30 5 * * *"  # 0 + time zone difference time

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python 3.8
      uses: actions/setup-python@v1
      with:
        python-version: 3.8
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Lint with flake8
      run: |
        pip install flake8
        # stop the build if there are Python syntax errors or undefined names
        flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
        # exit-zero treats all errors as warnings.
        flake8 . --count --exit-zero --max-complexity=10 --max-line-length=79 --statistics
    - name: Update todo list
      run: |
        python3 construct_todo.py
      env:
        GH_TOKEN: ${{ secrets.GH_TOKEN }}
        TODO_GIST: ${{ secrets.TODO_GIST }}
        DONE_GIST: ${{ secrets.DONE_GIST }}
        TIME_ZONE: "Asia/Kolkata" # IST
```

Note that you can use docker as well in the last step (`Update todo list`) as done
in the [`update-list.yml`](https://github.com/ayan-b/gist-todo-list-action/blob/master/.github/workflows/update-list.yml) file. But it will
be slower. You can also omit the `Lint with flake8` step.

### Using with GitHub action

If you want to use GitHub action, your workflow yaml file will look something like
this (be sure to change the version to the latest one):

```yaml
name: Update Todo List IST

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]
  schedule:
    - cron: "30 5 * * *"  # 0 + time zone difference time

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Todo List using GitHub Gist
      uses: ayan-b/gist-todo-list-action@0.1.0
      env:
        GH_TOKEN: ${{ secrets.GH_TOKEN }}
        TODO_GIST: ${{ secrets.TODO_GIST }}
        DONE_GIST: ${{ secrets.DONE_GIST }}
        TIME_ZONE: "Asia/Kolkata" # IST
```
