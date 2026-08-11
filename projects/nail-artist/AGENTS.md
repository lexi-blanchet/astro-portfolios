# Nail Artist Portfolio

A modern portfolio website built with Astro, showcasing projects, work experience, and technical skills.

## Project Overview
This project is an Astro-based portfolio site. It leverages Keystatic for content management, React for interactive components, and TailwindCSS for styling.

## Tech Stack
- **Framework**: Astro
- **Tailwind CSS Plugin**: DaisyUI
- **Frontend**: React
- **Styling**: TailwindCSS (v4)
- **Content Management**: Keystatic
- **Adapter**: Node.js

## Project Structure
- `src/content/`: Main content repository.
    - `projects/`: Portfolio projects (Markdown/YAML).
    - `work/`: Professional work history.
    - `projectCategories/`: Categories for project filtering.
- `src/layouts/`: Page layouts and templates.
- `src/pages/`: Routing and page definitions.
- `src/styles/`: Global styles and Tailwind configurations.
- `src/utils/`: Helper functions and utility scripts.
- `src/assets/`: Images, icons, and other static assets.

## Development Workflow
To run the development server, use background mode:

```bash
astro dev --background
```

Manage the background server using:
- `astro dev stop`
- `astro dev status`
- `astro dev logs`

## Content Management
Content is managed through **Keystatic**. You can update project details, work experience, and other site content via the Keystatic interface.

## Documentation & Resources
- **Astro Documentation**: https://docs.astro.build
- **Keystatic Documentation**: https://keystatic.com/docs
- **TailwindCSS Documentation**: https://tailwindcss.com

## Guides
Refer to these specific Astro guides before starting tasks:
- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

