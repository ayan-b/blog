---
title: "GSoC 2020 Proposal - INCF"
date: "2020-09-12"
---

## Table of Contents

* [Upgrade and Fix tvb-gdist C++ Library](#upgrade-and-fix-tvb-gdist-c---library)
* [1. Contact Details](#1-contact-details)
* [2. Project details](#2-project-details)
    + [2.1. Project synopsis/summary: What is the project about?](#21-project-synopsis-summary--what-is-the-project-about-)
    + [2.2. Why is it important?](#22-why-is-it-important-)
    + [2.3. Project in Detail](#23-project-in-detail)
    + [2.4. How will you handle the project? Detailed description of your planned approach](#24-how-will-you-handle-the-project--detailed-description-of-your-planned-approach)
        - [2.4.1. Implementation](#241-implementation)
        - [2.4.2. Testing](#242-testing)
    + [2.5. Project implementation and timeline:](#25-project-implementation-and-timeline-)
        - [2.5.1. Minimal set of deliverables](#251-minimal-set-of-deliverables)
        - [2.5.2. Additional ‘if time allows’ deliverables](#252-additional--if-time-allows--deliverables)
        - [2.5.3. Detailed timeline](#253-detailed-timeline)
        - [2.5.4. Plan for communication with mentors: How will you and the mentors keep in contact?](#254-plan-for-communication-with-mentors--how-will-you-and-the-mentors-keep-in-contact-)
    * [3. Candidate details](#3-candidate-details)
    + [3.1. Motivation](#31-motivation)
    + [3.2. Match](#32-match)
    + [3.3. Is this the only project that you will apply for?](#33-is-this-the-only-project-that-you-will-apply-for-)
    + [3.4. Working time and commitments - will you be working full time on this?](#34-working-time-and-commitments---will-you-be-working-full-time-on-this-)
    + [3.5. Do you have any other plans for the summer (school work, another job, planned vacation)?](#35-do-you-have-any-other-plans-for-the-summer--school-work--another-job--planned-vacation--)
    + [3.6. Past experience](#36-past-experience)
    + [3.7. CV](#37-cv)
* [4. References](#4-references)

## Upgrade and Fix tvb-gdist C++ Library


## 1. Contact Details

*   **Full name**: Ayan Banerjee
*   **Email**:
    *   Primary: [ayanbn7@gmail.com](mailto:ayanbn7@gmail.com) 
    *   Secondary: [ayanbanerjee7777@gmail.com](mailto:ayanbanerjee7777@gmail.com) 
*   **Location**: Durgapur, India
*   **Blog**: [https://ayanb.me/blog](https://ayanb.me/blog) 
*   **Hangouts ID**: [ayanbn7@gmail.com](mailto:ayanbn7@gmail.com) 


## 2. Project details

### 2.1. Project synopsis/summary: What is the project about?

The project is about upgrading and fixing `tvb_geodesic` library which is used to calculate geodesic distance on cortical surfaces.


### 2.2. Why is it important?

In the mathematical simulation of the brain, geodesic distance is of utmost importance. Geodesic distance is used instead of Euclidean distance while running simulation on cortical surfaces. Thus, it is important to calculate the distance properly.


### 2.3. Project in Detail

While running simulation on cortical surfaces we need to calculate geodesic distance as opposed to Euclidean distance due to the shape of the cortical surface. The virtual brain uses `geodesic_library `for this calculation. The library implements the [original paper](https://pdfs.semanticscholar.org/f890/2dc723ac2a49ee52efbc58947c21f8d0970b.pdf) in C++. The original source code can be found in the Google Code Archive: [https://code.google.com/archive/p/geodesic](https://code.google.com/archive/p/geodesic/). `tvb_geodesic`  repository implements a cython wrapper on top of the C++ code which then is released to Pypi ([tvb-gdist](https://pypi.org/project/tvb-gdist/)) and conda-forge ([Tvb Gdist](https://anaconda.org/conda-forge/tvb-gdist)).

However, the code is now outdated and users have reported various [issues](http://github.com/the-virtual-brain/tvb-geodesic/issues/). In this project, we aim to update the code and fix those issues.


### 2.4. How will you handle the project? Detailed description of your planned approach


#### 2.4.1. Implementation

The project can be split into various parts and they are discussed below:

1. **Making the Geodesic Library compatible with C++ 17**

    Some of the possible improvements:

*   _Remove the use of deprecated `auto_ptr` and replace it by `unique_ptr`_: `auto_ptr` was deprecated in C++ 11 in favor of `unique_ptr` and will be deleted in a future version of C++. There are a number of instances where `auto_ptr` is used in the code. We need to replace it by `unique_ptr` and test the code.
*   _Include `cstring` where `memcpy` is used_: `cstring` needs to be included while using `memcpy`. This is to be done for the file [`geodesic_algorithm_exact.h`](https://github.com/the-virtual-brain/tvb-geodesic/blob/trunk/geodesic_library/geodesic_algorithm_exact.h).

2. **Fix warning while running setup.py install:**

    There are various warnings that come up while running python setup.py install, for example:

  ```python
  FutureWarning: Cython directive 'language_level' not set, using 2 for now (Py2). This will change in a later release! File: tvb-geodesic/gdist.pyx
    tree = Parsing.p_module(s, pxd, full_module_name)
  warning: gdist.pyx:277:47: local variable 'distance' referenced before assignment
  warning: gdist.pyx:279:16: local variable 'distance' referenced before assignment
  warning: gdist.pyx:279:51: local variable 'distance' referenced before assignment
  warning: gdist.pyx:282:28: local variable 'distance' referenced before assignment
  ```
  
Fixing these warnings should be fairly straightforward.


3. **[Add Python3 support](https://github.com/the-virtual-brain/tvb-geodesic/issues/20)**

    Python 2 has reached EOL (end-of-life) in January 2020. We should update this package to be Python 3 compatible to make it future-proof.

4. **[Installation problem caused by numpy](https://github.com/the-virtual-brain/tvb-geodesic/issues/19)**

    The warnings that are coming while installing numpy is due to the usage of deprecated apis. This issue will be fixed after upgrading the `geodesic_library` to C++ 17.

5. **[Local distances return faulty output](https://github.com/the-virtual-brain/tvb-geodesic/issues/21)**
6. **[Crash on small meshes](https://github.com/the-virtual-brain/tvb-geodesic/issues/22)**

    In order to fix these issues, we will first try the inputs on the C++ `geodesic_library` itself and if the output is expected, we will then move forward to fix the cython wrapper.


    We will write at least one unit-test which is failing with the current code and should pass when this step is complete.

7. **[Commit C source of Cython](https://github.com/the-virtual-brain/tvb-geodesic/issues/11)**

    This is an old task, based on cython dependency status at the moment of reporting. We should first analyze if this is still valid.


    Also, we can create simpler bindings, a small C++ library with a C API for using the geodesic functions. After that, we can create object files (with `.o` extension) and shared object files (with `.so` extension) and then use it from Python using `ctypes` module instead of `cython`. The resulting shared library can be built per platform into wheels and then put on the PyPI and conda-forge.

8. **[Use Cython parallel](https://github.com/the-virtual-brain/tvb-geodesic/issues/10)**

    We can use [OpenMP with Cython](https://cython.readthedocs.io/en/latest/src/userguide/parallelism.html) to speed up the program and then test it to make sure everything works expectedly.


    Here we will need at least one performance test, to prove that in parallel mode, it actually works faster. We should be able to increase the number of threads, and see how it scales.

9. **Release to Pypi and Conda-forge**

    The TVB team already has a Jenkins build used for the automatic building of PyPi packages. The work in this project will stay compatible with those builds, and [update the recipes](https://conda-forge.org/#update_recipe), to be actual.

#### 2.4.2. Testing

*   The C++ library will have some basic test cases to make sure that any future API changes produce correct outputs.
*   All the functions will have their own unit tests.
*   We can use pytests to test the python code.
*   Tests should run automatically on the Jenkins builds, on windows and Unix OS.


### 2.5. Project implementation and timeline:

#### 2.5.1. Minimal set of deliverables

*   Fix the 6 [issues](https://github.com/the-virtual-brain/tvb-geodesic/issues )
*   Make `geodesic_library` C++ 17 compatible
*   Update the package in [conda-forge](https://anaconda.org/conda-forge/tvb-gdist) and [pypi](https://pypi.org/project/tvb-gdist/)

#### 2.5.2. Additional ‘if time allows’ deliverables

*   Blog explaining the work done
*   Auto-publishing whenever a new tag is added to the GitHub repo

#### 2.5.3. Detailed timeline



<table>
   <tr>
      <td>Phase
      </td>
      <td>Date
      </td>
      <td>Tasks
      </td>
   </tr>
   <tr>
      <td>Community Bonding: May 4 - Jun 1
      </td>
      <td>May 4 - Jun 1
      </td>
      <td>
         <ul>
            <li>Study the original paper on Geodesic distance calculation and get a basic idea.
            <li>Study the <code>geodesic_library.</code>
            <li>Set up a time for weekly meetings.
            <li>Set up a communication channel.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td rowspan="5" >Phase 1: Jun 1 - Jul 3
      </td>
      <td>Week 1: Jun 1 - Jun 7 
      </td>
      <td>
         <ul>
            <li>Make sure the Jenkins CI is working properly.
            <li>Add some basic tests to the C++ library <a href="https://github.com/google/googletest">using Google Test framework</a>.
            <li>Fix lints following the <a href="https://www.python.org/dev/peps/pep-0008/">PEP8</a> guidelines.
            <li>Document the testing part.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Week 2: Jun 8 - Jun 14
      </td>
      <td>
         <ul>
            <li>Make <code>geodesic_library</code> C++ 17 compatible.
            <li>Implement the code which will fix warnings while running the <code>python setup.py install</code> command.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Week 3: Jun 15 - Jun 21
      </td>
      <td>
         <ul>
            <li>Make the code python 3 compatible.
            <li>Write unit tests and documentation.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Week 4: Jun 22 - Jun 28
      </td>
      <td>
         <ul>
            <li>Investigate and fix the problem while installing numpy.
            <li>Prepare a report that is to be submitted for phase 1 evaluation.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Jun 29 - Jul 3
      </td>
      <td>Phase 1 Evaluation
      </td>
   </tr>
   <tr>
      <td rowspan="3" >Phase 2: Jul 6 - Jul 31
      </td>
      <td>Week 5 - 6: Jul 6 - Jul 19
      </td>
      <td>
         <ul>
            <li>Work on mentor’s feedback from phase 1.
            <li>Investigate and fix the issue of <em>local distances return faulty output</em> and <em>crash on small meshes.</em>
            <li>Write tests and documentation.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Week 7: Jul 20 - Jul 26
      </td>
      <td>
         <ul>
            <li>Work on <em>commit C source</em> issue.
            <li>Write tests and documentation.
            <li>Prepare a report that is to be submitted for phase 2 evaluation.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Jul 27 - Jul 31
      </td>
      <td>Phase 2 Evaluation
      </td>
   </tr>
   <tr>
      <td rowspan="4" >Phase 3: Aug 3 - Aug 31
      </td>
      <td>Week 8: Aug 3 - Aug 9
      </td>
      <td>
         <ul>
            <li>Work on mentor’s feedback from phase 2.
            <li>Work on <em>using Cython parallel </em>issue.
            <li>Write performance tests.
            <li>Write documentation.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Week 9: Aug 10 - Aug 16
      </td>
      <td>
         <ul>
            <li>Update tvb-gdist package to pypi and conda-forge.
            <li>Build docs using <a href="https://www.sphinx-doc.org">Sphinx</a> and publish it to readthedocs/GitHub pages.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Week 10: Aug 17 - Aug 23
      </td>
      <td>
         <ul>
            <li>Buffer week for any unfinished work
            <li>Write any leftover unit tests
            <li>Write any leftover documentation
            <li>Prepare a report that is to be submitted for final evaluation</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Aug 24 - Aug 31
      </td>
      <td>Final Evaluation
      </td>
   </tr>
   <tr>
      <td>Post - GSoC
      </td>
      <td>-
      </td>
      <td>Maintain the package, fix bugs and implement feature requests
      </td>
   </tr>
</table>


#### 2.5.4. Plan for communication with mentors: How will you and the mentors keep in contact?

I will keep in touch with mentors via Slack. I will also be having video chat via Google Hangouts with my mentors every week. I will submit a weekly report to the mentors in a shared Google Doc/GitHub Gist.


## 3. Candidate details


### 3.1. Motivation

For a while I wanted to see how C/C++ code can improve the performance of Python code. This project will give me the opportunity to do that.

Last summer, I worked on bioinformatics and my work is currently used by thousands of bioinformatics users worldwide. The virtual brain is also used by [tens of thousands of users](https://www.thevirtualbrain.org/tvb/zwei/newswire-blog/single/186267-10-000-installations-of-the-virtual-brain-thank-you-) worldwide. Impacting thousands of virtual brain users’  work is an opportunity I would not want to miss!


### 3.2. Match

I have been coding in C++ and in Python for the last 3 years. I have also taken courses in data structures whose knowledge will be beneficial while fixing/updating the C++ geodesic library. Last year I was also a Google Summer of Code student under the UCSC Xena organization where I worked in a bioinformatics project. Before that I contributed to the organization coala for around 1.5 years (I have added more details on my open source experience [below](##36-past-experience)). I hope that these open-source experiences will help me to successfully complete the current project.

I am the maintainer of 6 [projects](https://pypi.org/user/ayanb/) in Pypi and also familiar with conda-forge.

I have also made some contributions to the INCF.

*   [the-virtual-brain/tvb-geodesic#25](https://github.com/the-virtual-brain/tvb-geodesic/pull/25)
*   [the-virtual-brain/tvb-geodesic#26](https://github.com/the-virtual-brain/tvb-geodesic/pull/26)
*   [the-virtual-brain/tvb-geodesic#27](https://github.com/the-virtual-brain/tvb-geodesic/pull/27)
*   [the-virtual-brain/tvb-geodesic#28](https://github.com/the-virtual-brain/tvb-geodesic/pull/28)
*   [pyxnat/pyxnat#127](https://github.com/pyxnat/pyxnat/pull/127)


### 3.3. Is this the only project that you will apply for?

I am also applying for [this](https://github.com/dart-lang/sdk/wiki/Dart-GSoC-2020-Project-Ideas#idea-spdx-license-detection-package) project.


### 3.4. Working time and commitments - will you be working full time on this?

My end semester examination ends in the first week of May. I have no other commitments this summer. Thus, I will be able to work full time on the project.

I will be able to devote approx 40 hours every week during the summer.


### 3.5. Do you have any other plans for the summer (school work, another job, planned vacation)?

No, I have no other plans for the summer.


### 3.6. Past experience

I was introduced to open source by my university club and since then I have been mesmerized by the impact open source software has made to our day-to-day life.

My first contribution to open source was to the organization [coala](https://coala.io), which is a linting tool built for most of the programming languages. I have started contributing there from September 2018 and in the process got elevated to the team of main developers at coala. I have submitted and reviewed various PRs, opened and reviewed many issues. Contributing to coala was a great learning experience, it prepared me in Git, Code Coverage and Open Source etiquette.

I have also been the Google Code-In 2018 mentor for coala where I guided many pre-university students to get them started with open source development. I also maintained 2 repositories for coala during that period. I mainly handled documentation (sphinx), moban, coAST, and artwork tasks.

I have also contributed to the [moremoban](https://github.com/moremoban) organization for the moban and yehua project. “moban” is a CLI for static text generation and “yehua” is used to generate a Python package quickly. I made two plugins ([https://github.com/moremoban/moban-velocity](https://github.com/moremoban/moban-velocity) and [https://github.com/moremoban/moban-haml](https://github.com/moremoban/moban-haml)) for the moremoban and released them to PyPi. I am a collaborator of 4 repositories in the organization.

My biggest contribution in open source comes in the form of being a **Google Summer of Code developer at UCSC Xena**. UCSC Xena builds the [Xena browser](https://xenabrowser.net), which allows users to explore functional genomic data sets for correlations between genomic and/or phenomic data. I worked on building an ETL pipeline for the browser which takes data from GDC and creates datasets that are digestible to the Xena browser. The report can be found here: [https://github.com/ucscXena/ucsc-xena-client/wiki/Update-GDC-Data-Ingestion-Pipeline-and-Run.](https://github.com/ucscXena/ucsc-xena-client/wiki/Update-GDC-Data-Ingestion-Pipeline-and-Run.)

In the 2018 summer, I was also an intern at IIT Bombay, where I worked on integrating a plagiarism detection tool with [yaksh](https://yaksh.fossee.in), a course, and coding test-taking web app. In my free time, I also love to make tiny useful projects. All of them can be found in my [GitHub profile](https://github.com/ayan-b).


### 3.7. CV

My resume can be found here [https://ayanb.me/profile](https://ayanb.me/profile).


## 4. References


*   Original paper implementing geodesic distance: [THE DISCRETE GEODESIC PROBLEM](https://pdfs.semanticscholar.org/f890/2dc723ac2a49ee52efbc58947c21f8d0970b.pdf)
*   Wrapping C++ in Cython: [https://cython.readthedocs.io/en/latest/src/userguide/wrapping_CPlusPlus.html](https://cython.readthedocs.io/en/latest/src/userguide/wrapping_CPlusPlus.html)
