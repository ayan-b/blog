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