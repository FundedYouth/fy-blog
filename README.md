# FundedYouth Blog

**Active Site:** <a href="https://fundedyouth.org/blog" target="_blank">https://fundedyouth.org/blog</a>

This site was created using https://gohugo.io/ - For the fun of it, the archives page is listed as "The Vault".

<img src="https://gohugo.io/images/hugo-logo-wide.svg" style="width: 150px;">
<br />

```yaml
Theme: PaperMod
https://themes.gohugo.io/themes/hugo-papermod/
```

## LFTP Deploy Script

This site includes a `deploy.sh` script. It's purpose is to run the command:

```sh
hugo --config ./hugo.yaml
```

and then upload to our blog the static site. The shell script is referencing a local `.env` file.

```sh
FTP_HOST="XXX.XXX.XX.XXX"       # Use the **actual IP address** from Hostinger
FTP_USER="your_ftp_username"     # From Hostinger FTP details
FTP_PASS="your_ftp_password"
```

## Article Format

This section is for volunteer and team members interested in writing articles/posts for the blog. - You will be using Markdown format (.md).

When writing most articles you don't need to go over the top. Write the content in grammar formatting tool first like word, google docs, grammarly, etc. Then adapt it for markdown. https://www.markdownguide.org/cheat-sheet/

If you don't want to rewrite it. There are tools online that will automatically format the word document to .md ... like ... https://www.docstomarkdown.pro/convert-word-to-markdown/ (not tested)

### Submission Requirments

When creating the the markdown file on your computer. Please prepare an image directory where you will be storing all your graphics. Once you are ready to submit, please send it as a `.zip`

```sh
# zip file structure
|__ article-name.md
|__ /images
```

### Article Header Requirement

Before sending the completed article. Make sure you add the necessary header formatting. Yes... you must include the opening and closing three dashes above and below the header.

```md
---
draft: false
date: "2025-06-15T19:29:45-07:00"
title: "Python FastAPI Server Tutorial"
summary: "A guided step-by-step tutorial that shows how Web API’s work. You’ll learn how to use API Tools to get data and even build your own web api using python."
cover:
  image: "./images/fast-api-tutorial-up-and-running-locally.png"
  alt: "Learn Python by Building a REST API Server with Fast API"
  caption: "Python and FastAPI Tutorial"
categories: ["coding"]
tags: ["fastapi", "python", "rest api", "server", "venv", "insomnia", "postman"]
---

## Building a Simple API with Python
```

### Categories and Tags

The `categories` and `tags` fields are lists/arrays. And technically do not have a limit. However, we ask that you limit `tags` to 10 max and categories to 3 max.

**Approved Categories**

```sh
- coding
- 3dprint
- 3dmodel
- cad
- lasercraft
- electronics
```
