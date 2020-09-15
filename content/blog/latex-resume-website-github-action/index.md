---
title: "GitHub Action - Create a LaTeX Resume and Website from a Single Data File"
date: "2020-09-06"
description: "Focus on the data, not the style!"
---

### My Workflow

How about creating a site without touching HTML or creating a LaTeX resume without knowing LaTeX!? Enter [resume-generator-action](github.com/ayan-b/resume-generator-action/)! 🎉

Simply fill in this [`data.yml`](https://github.com/ayan-b/resume-generator-action/blob/master/data.yml) file and your website and resume will be live in GitHub pages. Make sure to [enable GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) in your repository. Point the publishing source to `gh-pages`.

**More Customization**: 🎨
- Change the Jekyll theme in the [`_config.yml_jj2`](https://github.com/ayan-b/resume-generator-action/blob/master/templates/_config.yml_jj2) file for a different look of your site
- Modify the [resume template](https://github.com/ayan-b/resume-generator-action/blob/master/templates/resume.tex_jj2) and [markdown template](https://github.com/ayan-b/resume-generator-action/blob/master/templates/resume.md_jj2) for a different layout of resume and your site respectively

### Submission Category: 

DIY Deployments

### Yaml File or Link to Code

[GitHub Repo](https://github.com/ayan-b/resume-generator-action/)


### Additional Resources / Info

Live demo: [Website](https://ayan-b.github.io/resume-generator-action/) | [Resume](https://ayan-b.github.io/resume-generator-action/main.pdf)

This project would not have been possible without the following open source projects:
- [moban](https://github.com/moremoban/moban): for generating the tex and markdown file from template
- [latex-action](https://github.com/dante-ev/latex-action): for compiling LaTeX and creating PDF
- [actions-gh-pages](peaceiris/actions-gh-pages): for deploying to GitHub pages
- [sb2nov/resume](https://github.com/sb2nov/resume): for the awesome resume design

Please let me know if you have any feedback or if you want me to add new features! Thank you!
