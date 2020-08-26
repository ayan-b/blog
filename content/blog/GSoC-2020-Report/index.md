---
title: "GSoC 2020 Report: Upgrade and Fix tvb-gdist C++ Library"
date: "2020-08-26"
description: "GSoC 2020 Report for my work at INCF"
---

## Thank You Note

It was a pleasure working under my mentors Lia and Paula. Thank you for the constant guidance and valuable feedback whenever I was stuck. I express my heartfelt gratitude to Lia, Paula, the whole The Virual Brain and INCF team and, Google for making the last four months such a rewarding experience!

## About

While running simulation on cortical surfaces we need to calculate geodesic distance as opposed to euclidean distance due to the shape of the cortical surface. The virtual brain uses geodesic_library for this calculation. The library implements the original paper in C++. The original source code can be found in Google Code Archive: <https://code.google.com/archive/p/geodesic>. tvb_geodesic repository implements a cython wrapper on top of the C++ code which then is released to Pypi (tvb-gdist) and conda-forge (Tvb Gdist).

However, the code is now outdated and users have reported various issues. In this project, we aim to update the code and fix those issues.

## Usage

The package exposes 3 APIs which can be used for various purposes: `compute_gdist`, `local_gdist_matrix` and `distance_matrix_of_selected_points`. Examples and detailed instructions can be found in the project [readme](https://github.com/the-virtual-brain/tvb-gdist) page.

<details>
    <summary><b>List of Commits</b></summary>
<table>
<tr><th>Commit SHA</th><th>Date</th><th>Commit Message</th></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/69aef68cd16572308bdea0743c7e4bd439343234"> 69aef68 </a></td><td>Aug 24</td><td>Merge multiple codecov reports</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/553ea7d188c1c392a7ffd6cc869b6c7ed802971b"> 553ea7d </a></td><td>Aug 24</td><td>Checking why pyx is no longer reported</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/0d585f22631e80fc11ce6427ba094422d979cb1a"> 0d585f2 </a></td><td>Aug 24</td><td>On top of master</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/c45220887c91812191eefbd1e35f4b666f66005b"> c452208 </a></td><td>Aug 24</td><td>Ignore tests/*</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/3d8f501ba695644717c667e2b7437fb4372d4c81"> 3d8f501 </a></td><td>Aug 24</td><td>Add googletest set-up</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/0f400adfb1abb17b05c21ab848254d6bccbcec6f"> 0f400ad </a></td><td>Aug 10</td><td>Add reasons for ignores</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/d8b792b51297ec05b3b04e804abcce90dba558e3"> d8b792b </a></td><td>Aug 7 </td><td>Add flake8 rules comment</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/3f5893cfa7b1f3b0bd9c6bfdc35dc5cc61a6cdb7"> 3f5893c </a></td><td>Aug 5 </td><td>Enable linting for cython file</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/fc8aed9b1a263d3633977307eff9f50eaa9a6095"> fc8aed9 </a></td><td>Aug 5 </td><td>Enable linting for cython file</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/206df7cf6b1ffa2fececf6babd2434ec9ce7e4da"> 206df7c </a></td><td>Aug 4 </td><td>lint: Use same convention everywhere</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/0ed985e537363b97441ca5a99df4125841b0cbb5"> 0ed985e </a></td><td>Aug 4 </td><td>Fix Python 3.6</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/e965f578c3a02e5293dfb330ee871739e9b00e93"> e965f57 </a></td><td>Aug 4 </td><td>.travis.yml: Test on multiple versions of python</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/9960f57df0f0f8a191c84eda09f235530367f567"> 9960f57 </a></td><td>Jul 31</td><td>Add 100% test coverage</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/2a0d166bf28eb0b5c98933a6f802a37ac2d4c64c"> 2a0d166 </a></td><td>Jul 31</td><td>Add 100% test coverage</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/cc71328966ed8beace269c8b45074653625ffc04"> cc71328 </a></td><td>Aug 1 </td><td>Simplify setup.py</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/7c2839f5b8ca0cb7b445eec9acbe7469edfe4b11"> 7c2839f </a></td><td>Jul 31</td><td>.travis.yml: Only install pytest-cov in linux</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/f777c278acf6b351db485ddfa64971dc33f86e80"> f777c27 </a></td><td>Jul 31</td><td>setup.py: Improve</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/24af9120db15c86fa0a0b219bf79b467c53dfc91"> 24af912 </a></td><td>Jul 31</td><td>Add coverage report functionality</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/649123a9ed1b5f1144710eea7b3aa8f4b2b5c51c"> 649123a </a></td><td>Jul 29</td><td>Remove 2 files</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/314e014897ea0ce0b1fd86fcf197d456f4ddf61a"> 314e014 </a></td><td>Jul 25</td><td>gdist.pyx: New API distance_matrix_of_selected_points</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/e809fc0187f7b10806efa8a0ab8cbac18a068ede"> e809fc0 </a></td><td>Jul 24</td><td>gdist.pyx: Offload compute_gdist to c++</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/7ca0c9dd3edaa9907260faab041c8e9b1350784a"> 7ca0c9d </a></td><td>Jul 20</td><td>Improve documentation</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/ff850c609134169a485386473ba7fc44234a836c"> ff850c6 </a></td><td>Jul 17</td><td>Add ability to specify if faces' vertices are 1-indexed</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/b4049d3e6cab32ca077cae25149ae96903caee26"> b4049d3 </a></td><td>Jul 2 </td><td>macOS fix</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/4e22195204a34bd428a1ad45e2c279839bd77da1"> 4e22195 </a></td><td>Jul 2 </td><td>macOS fix</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/1453e1f26ab0da6da64c14850cfeff3931b5e62e"> 1453e1f </a></td><td>Jul 2 </td><td>Include numpy</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/326f64a38a9c16895241e061b75bd079578415ea"> 326f64a </a></td><td>Jul 2 </td><td>Add macOS job</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/92f13b0c37dcda260dd88119ec68d4e9373194f6"> 92f13b0 </a></td><td>Jul 2 </td><td>Test equality with stable</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/1835d6e1b990d957fb551e047d765247e5e451b1"> 1835d6e </a></td><td>Jun 8 </td><td>pyproject.toml: Set up minimun build system</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/c0d52c2fbd2b8beeb42eb1aaecb904a800f0bd26"> c0d52c2 </a></td><td>Jun 8 </td><td>pyproject.toml: Set up minimun build system</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/7db0ce1ffd1d407fe144d3ed488193dd75976a45"> 7db0ce1 </a></td><td>Jun 8 </td><td>pyproject.toml: Set up minimun build system</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/557bbe97e8a0c7f626d11b1d1a6851ecf943ff34"> 557bbe9 </a></td><td>Jun 8 </td><td>Use same epsilon everywhere</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/f893905795eca20b0dbd7043106314c2a15fa931"> f893905 </a></td><td>Jun 7 </td><td>Add local_gdist_matrix tests</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/3fbcbd13cda32cb4542f78e5e6f0064532affed6"> 3fbcbd1 </a></td><td>Jun 1 </td><td>Use language_level=3</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/8ddb6d86f98dc59aba46369087f917934a3f2dff"> 8ddb6d8 </a></td><td>Jun 1 </td><td>Fix local variable referenced before assignment</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/6a68fc3caea6d70738e2df789433df86f686efe0"> 6a68fc3 </a></td><td>Jun 1 </td><td>.travis.yml: Include build_ext</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/e0ffe2604a1c3f97b3771a2fe2a7d431dd025959"> e0ffe26 </a></td><td>Jun 1 </td><td>Move similar code to a function</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/38a6291dff57f0a1c3b99d9b659338f8fe77809f"> 38a6291 </a></td><td>May 20</td><td>Use same convention everywhere</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/862dc80b70f9003f96e2b12bfa1eea4e80069a10"> 862dc80 </a></td><td>May 19</td><td>Add another test</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/4f77f1699017c7accd9df652833eb3a279f973f5"> 4f77f16 </a></td><td>May 19</td><td>Remove coverage for now</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/486e0a56c1f0ce7f529f779e126cd1571a4ba8db"> 486e0a5 </a></td><td>May 19</td><td>Remove coverage for now</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/01f710a28563973b433d7da2da812cf20dd89d05"> 01f710a </a></td><td>May 19</td><td>Add a gdist test</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/ee47a567884adca24990d3a9437b7c535062acc5"> ee47a56 </a></td><td>May 18</td><td>Drop python 2 from CI configuration</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/78ca2e308dfbbb528e121f89aed530baabcaf35e"> 78ca2e3 </a></td><td>May 18</td><td>Install C++ MSVS 2017</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/dcf6c81fe2aafec7154d036a0c77cc55bc2572f8"> dcf6c81 </a></td><td>May 18</td><td>Use c++14 setup.py</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/56c7a8d71f8f65a40a72ec9f8feddeaa3732f156"> 56c7a8d </a></td><td>May 17</td><td>Use unique_ptr instead of auto_ptr</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/cdb2afb7f85c940cd43f3ab76228b983cca9168c"> cdb2afb </a></td><td>May 11</td><td>Fix travis badge link</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/f626539707d2c459fba0fb508eb98dff39bba94f"> f626539 </a></td><td>May 11</td><td>Fix the lint stage</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/b61943ffefb6b9c17ed542e4166de136b9dfe115"> b61943f </a></td><td>May 11</td><td>Test on windows as well</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/da94954d36de803bd3f54b4b5bc221effd774a7f"> da94954 </a></td><td>Mar 14</td><td>Fix flake8 reported errors</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/ec15b2ff5f76c4358955cf10786484b1d7871797"> ec15b2f </a></td><td>Mar 13</td><td>Downsize .gitignore</td></tr>
<tr><td><a href="https://github.com/the-virtual-brain/tvb-gdist/commit/062a4466f32ec5c11477a64f91efe0a3f12727be"> 062a446 </a></td><td>Mar 13</td><td>Restore License text</td></tr>
</table>
</details>

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
