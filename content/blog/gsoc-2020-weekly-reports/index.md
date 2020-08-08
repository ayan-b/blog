---
title: "GSoC 2020 Weekly Reports"
date: "2020-06-12"
description: "GSoC 2020 Weekly Reports"
---

## Work done till Jun 12, 2020

### Pull Requests

- [#27](https://github.com/the-virtual-brain/tvb-gdist/pull/27): Modernizes the travis syntax
- [#28](https://github.com/the-virtual-brain/tvb-gdist/pull/28): Adds missing files to the `geodesic_library`
- [#31](https://github.com/the-virtual-brain/tvb-gdist/pull/31): Adds a job which enables Windows testing
- [#33](https://github.com/the-virtual-brain/tvb-gdist/pull/33): Replaces `auto_ptr` by `unique_ptr` as `auto_ptr` is deprecated
- [#35](https://github.com/the-virtual-brain/tvb-gdist/pull/35): Adds tests for the Cython library
- [#37](https://github.com/the-virtual-brain/tvb-gdist/pull/37): Fix build_ext warnings
- [#38](https://github.com/the-virtual-brain/tvb-gdist/pull/38): Add local_gdist_matrix tests and fix Bug 21
- [#39](https://github.com/the-virtual-brain/tvb-gdist/pull/39): pyproject.toml: Set up minimum build system

### Issues Fixed

- [#19](https://github.com/the-virtual-brain/tvb-gdist/issues/19): Numpy requirement in setup is causing installation problems
- [#21](https://github.com/the-virtual-brain/tvb-gdist/issues/21): local distances return faulty output

---

## Weekly Report for Week 3 (Jun 13 - Jun 19)

This week I mostly focused on issue [#11](https://github.com/the-virtual-brain/tvb-gdist/issues/11) where we planned to use `ctypes`
instead of the current implementation in `cython`. PR [#40](https://github.com/the-virtual-brain/tvb-gdist/pull/40) addressed issue [#11](https://github.com/the-virtual-brain/tvb-gdist/issues/11) and as of now implementation
in Linux and macOS is completed.

I also worked on issue [#22](https://github.com/the-virtual-brain/tvb-gdist/issues/22) and the [surface data](https://github.com/the-virtual-brain/tvb-data/blob/master/tvb_data/surfaceData/) datasets in the current
implementation worked fine for all the datasets except [cortex 2x120k](https://github.com/the-virtual-brain/tvb-gdist/issues/41). I am currently
investigating why the code failed for that dataset.

### Pull Requests

- [#40](https://github.com/the-virtual-brain/tvb-gdist/pull/40): Use ctypes instead of cython

### Issues Addressed

- [#11](https://github.com/the-virtual-brain/tvb-gdist/issues/11): Commit C source
- [#22](https://github.com/the-virtual-brain/tvb-gdist/issues/22): Crash on small meshes

---

## Weekly Report for Week 4 (Jun 20 - Jun 26)

This week I finished PR [#40](https://github.com/the-virtual-brain/tvb-gdist/pull/40) (moving from `cython` to `ctypes`) which was made last week. Also, I figured out what was causing the failure of cortex 2x120k mesh and fixed that in PR [#44](https://github.com/the-virtual-brain/tvb-gdist/pull/44).

### Pull Requests

- [#40](https://github.com/the-virtual-brain/tvb-gdist/pull/40): Use ctypes instead of cython
- [#44](https://github.com/the-virtual-brain/tvb-gdist/pull/44): Add ability to specify if faces' vertices are 1-indexed

### Issues Fixed

- [#11](https://github.com/the-virtual-brain/tvb-gdist/issues/11): Commit C source
- [#36](https://github.com/the-virtual-brain/tvb-gdist/issues/36): Add Coverage report
- [#41](https://github.com/the-virtual-brain/tvb-gdist/issues/41): Failing on cortex 2x120k

---

## Weekly Report for Week 5 (Jun 27 - Jul 3)

This week I faced an issue on windows where the current implementation of ctypes is throwing segmentation fault occasionally. I am still investigating what's causing the segmentation fault. I also wrote a test for `local_gdist_matrix` for `inner_skull_642` surface.

### Pull Requests

- [#40](https://github.com/the-virtual-brain/tvb-gdist/pull/40): Use ctypes instead of cython
- [#46](https://github.com/the-virtual-brain/tvb-gdist/pull/46): Test equality with stable (`local_gdist_matrix` test for `inner_skull_642` surface)

### Issues Addressed

- [#11](https://github.com/the-virtual-brain/tvb-gdist/issues/11): Commit C source

---

## Weekly Report for Week 6 & 7 (Jul 4 - Jul 17)

Last couple of weeks I continued my investigation on the Ctypes segmentation fault issue. At the same time, I have also started working on the Cython implementation.

### Pull Requests

- [#48](https://github.com/the-virtual-brain/tvb-gdist/pull/48): Add ability to specify if faces' vertices are 1-indexed (Cython implementation)
- [#49](https://github.com/the-virtual-brain/tvb-gdist/pull/49): Cython parallel

### Issues Addressed

- [#41](https://github.com/the-virtual-brain/tvb-gdist/issues/41): Failing on cortex 2x120k
- [#10](https://github.com/the-virtual-brain/tvb-gdist/issues/10): Use Cython parallel

---

## Weekly Report for Week 8 (Jul 18 - Jul 24)

This week a user reported an issue regarding memory leak. I fixed this issue and also added an API to address a new use case.

### Pull Requests

- [#50](https://github.com/the-virtual-brain/tvb-gdist/pull/50): Improve documentation
- [#53](https://github.com/the-virtual-brain/tvb-gdist/pull/53): Fix memory leak issue
- [#54](https://github.com/the-virtual-brain/tvb-gdist/pull/54): gdist.pyx: New API distance_matrix_of_selected_points

### Issues Fixed

- [#43](https://github.com/the-virtual-brain/tvb-gdist/issues/43): Add documentation
- [#51](https://github.com/the-virtual-brain/tvb-gdist/issues/51): Possible memory leak
- [#52](https://github.com/the-virtual-brain/tvb-gdist/issues/52): Add API for new use case

---

## Weekly Report for Week 9 (Jul 25 - Jul 31)

This week I worked on adding coverage report functionality and OpenMP for parallelization. I also added a PR removing 2 redundant files.

### Pull Requests

- [#49](https://github.com/the-virtual-brain/tvb-gdist/pull/49): Use OpenMP parallel
- [#55](https://github.com/the-virtual-brain/tvb-gdist/pull/55): Add coverage report functionality
- [#56](https://github.com/the-virtual-brain/tvb-gdist/pull/56): Remove 2 files

### Issues Fixed

- [#10](https://github.com/the-virtual-brain/tvb-gdist/issues/10): Use Cython parallel
- [#36](https://github.com/the-virtual-brain/tvb-gdist/issues/36): Add coverage report

---

## Weekly Report for Week 10 (Aug 1 - Aug 7)

This week I continued to improve previous week's OpenMP PR and also made 2 new PRs releated to linting and more rigorous testing.

### Pull Requests

- [#49](https://github.com/the-virtual-brain/tvb-gdist/pull/49): Use OpenMP parallel
- [#58](https://github.com/the-virtual-brain/tvb-gdist/pull/58): Add 100% test coverage
- [#62](https://github.com/the-virtual-brain/tvb-gdist/pull/62): .travis.yml: Test on multiple versions of python
- [#63](https://github.com/the-virtual-brain/tvb-gdist/pull/63): lint: Use same convention everywhere

### Issues Addressed

- [#10](https://github.com/the-virtual-brain/tvb-gdist/issues/10): Use Cython parallel
- [#57](https://github.com/the-virtual-brain/tvb-gdist/issues/57): Improve code coverage
- [#59](https://github.com/the-virtual-brain/tvb-gdist/issues/59): Run different versions of python in windows
- [#60](https://github.com/the-virtual-brain/tvb-gdist/issues/60): Lint: Use same convention everywhere
