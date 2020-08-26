---
title: "GSoC 2020 Report"
date: "2020-08-26"
description: "GSoC 2020 Report for my work at INCF"
---

## Google Summer of Code, 2020: Upgrade and Fix tvb-gdist C++ Library

## Thank You Note

It was a pleasure working under my mentors Lia and Paula. Thank you for the constant guidance and valuable feedback whenever I was stuck. I express my heartfelt gratitude to Lia, Paula, the whole The Virual Brain and INCF team and, Google for making the last four months such a rewarding experience!

## About

While running simulation on cortical surfaces we need to calculate geodesic distance as opposed to euclidean distance due to the shape of the cortical surface. The virtual brain uses geodesic_library for this calculation. The library implements the original paper in C++. The original source code can be found in Google Code Archive: <https://code.google.com/archive/p/geodesic>. tvb_geodesic repository implements a cython wrapper on top of the C++ code which then is released to Pypi (tvb-gdist) and conda-forge (Tvb Gdist).

However, the code is now outdated and users have reported various issues. In this project, we aim to update the code and fix those issues.

## Usage

The package exposes 3 APIs which can be used for various purposes: `compute_gdist`, `local_gdist_matrix` and `distance_matrix_of_selected_points`. Examples and detailed instructions can be found in the project [readme](https://github.com/the-virtual-brain/tvb-gdist) page.

## Project Status

- **Completed Work**
  - Fixing an issue where numpy requirement is causing installation problems using `pyproject.toml`
  - Lint fixes, the codebase is now PEP8 compliant
  - Adding coverge report functionality
  - Updating the travis CI configuration
  - Fixing memory leak issue for `compute_gdist`
  - Adding a new API for pairwise distance computation
  - Adding documentation in the README file
  - Running different versions of Python on Windows
  - Enabing users to specify if a the faces vertices' are 1-indexed
  - Adding googletest to test and measure coverage of the c++ library

- **Incomplete Work**
  - Using ctypes instead of cython

## Links

- [Link](https://github.com/the-virtual-brain/tvb-gdist) to the project in GitHub
- [Link](https://pypi.org/project/tvb-gdist) to the project in PyPI
- [Link](https://github.com/the-virtual-brain/tvb-gdist/commits?author=ayan-b) to the list of commits
- [Link](https://github.com/the-virtual-brain/tvb-gdist/pulls?q=is%3Apr+author%3Aayan-b+) to the pull requests
- [Link](https://ayan-b.github.io/blog/gsoc-2020-weekly-reports/) to the weekly reports
- [Link](https://req.thevirtualbrain.org/projects/TVB/issues/TVB-2719) to Jira story
