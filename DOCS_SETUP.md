# MkDocs Documentation Setup

This repository contains the complete HTML, CSS and JavaScript Course 2025-2026, published as a documentation website using MkDocs.

This guide explains how to install the dependencies, run the documentation locally, and build the static site.

## Setup Instructions

1. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

2. Serve the documentation locally (live preview with auto-reload):

   ```bash
   mkdocs serve
   ```

3. Build the static site (for offline distribution or deployment):

   ```bash
   mkdocs build
   ```

## Documentation Structure

- `docs/` contains all source Markdown files for the course.
  - Each module is stored in its own subdirectory under `docs/` (paths and filenames are preserved).
  - Typical module content:
    - `README.md`: main module content
    - `cas-pratique.md`: Practical Project
    - `exercices-maison.md`: Homework Exercises

- `site/` is the generated output directory created by `mkdocs build`.
  - It contains the static HTML, assets, and compiled site.
  - Do not edit files in `site/` manually; always edit content in `docs/` and rebuild with MkDocs.

## Benefits for Students

- Offline access: the generated `site/` can be shared for use without an internet connection.
- Better navigation: clear sidebar navigation and structured modules.
- Responsive design: works on desktop, tablet, and mobile.
- Searchable content: built-in search makes it easy to find topics.

## Module Overview

The modules in the documentation follow these themes (URLs and directory names remain unchanged):

- Module 01 - Introduction to Web Development
- Module 02 - HTML Structure and Semantics
- Module 03 - CSS Fundamentals
- Module 04 - CSS Layout and Responsive Design
- Module 05 - JavaScript Basics
- Module 06 - JavaScript Functions and Objects
- Module 07 - Advanced JavaScript and APIs
- Module 08 - Full-Stack Web Applications
- Module 09 - Advanced Topics and Best Practices