# Luxaeon Spaces

The official website for **Luxaeon Spaces**, an interior design studio creating thoughtful, contemporary spaces shaped around comfort, functionality, and character.

**Live Website:** https://luxaeonspaces.com

---

## About the Project

Luxaeon Spaces is a modern interior design website built to showcase the studio's design philosophy, services, projects, and journal.

The website focuses on a minimal, editorial visual experience that allows the studio's work to take centre stage.

Visitors can explore completed and conceptual projects, learn about the studio and its services, and get in touch to discuss an interior design project.

---

## Features

* Responsive, mobile-first design
* Modern editorial-style interface
* Project portfolio with dynamic project pages
* Journal with dynamic article pages
* Service showcase
* About and studio information
* Contact page
* Dynamic SEO metadata
* Open Graph metadata for social sharing
* Optimised project and journal images
* Smooth page and component animations
* Reusable UI components
* SEO-friendly page structure

---

## Tech Stack

### Frontend

* **Next.js**
* **React**
* **JavaScript**
* **SCSS**
* **Framer Motion**

### Development

* **Git**
* **GitHub**
* **Vercel**

---

## Project Structure

```text
app/
├── about/
├── contact/
├── journal/
│   └── [slug]/
├── projects/
│   └── [slug]/
├── services/
├── _components/
├── layout.js
├── page.js
└── ...

public/
├── project images
├── journal images
├── icons
└── other static assets
```

The application uses the **Next.js App Router**, with dynamic routes for individual projects and journal entries.

---

## Pages

| Route              | Description                                |
| ------------------ | ------------------------------------------ |
| `/`                | Luxaeon Spaces homepage                    |
| `/about`           | About the studio and its design philosophy |
| `/services`        | Interior design services                   |
| `/projects`        | Project portfolio                          |
| `/projects/[slug]` | Individual project pages                   |
| `/journal`         | Design journal                             |
| `/journal/[slug]`  | Individual journal articles                |
| `/contact`         | Contact and enquiry page                   |

---

## SEO

The website uses Next.js's Metadata API to provide page-specific metadata.

Dynamic project and journal pages generate metadata based on their respective content.

SEO implementation includes:

* Page-specific titles
* Meta descriptions
* Open Graph metadata
* Social sharing images
* Dynamic metadata for project pages
* Dynamic metadata for journal pages
* Canonical URLs
* Robots directives
* Sitemap
* `robots.txt`
* Structured data

---

## Design Direction

The website follows a restrained visual direction centred around:

* Minimalism
* Strong typography
* Editorial layouts
* Large-scale imagery
* Contemporary interiors
* Generous whitespace
* Subtle motion

The interface is intentionally understated so that the architecture, materials, furniture, and interior spaces remain the primary visual focus.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Luxaeonspaces/luxaeonwebsite.git
```

Navigate into the project:

```bash
cd luxaeonwebsite
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs the project's linting checks.

---

## Deployment

The website is deployed using **Vercel**.

Production deployments are connected to the GitHub repository, allowing changes pushed to the production branch to be deployed through Vercel.

---

## Project Status

**Active**

The website is actively being developed and refined as the Luxaeon Spaces digital presence evolves.

---

## Credits

Built for **Luxaeon Spaces**.

Interior design by Luxaeon Spaces.

Website design and development by the project development team.

---

## Licence

This project is proprietary to Luxaeon Spaces.

The source code, design, images, written content, and other project assets may not be reproduced, redistributed, or used commercially without permission.

```

One thing I'd **deliberately not do** is make the README excessively technical. This is a company website, so someone landing on the GitHub repository should understand **what Luxaeon Spaces is and what the project does** within the first few seconds.

Also, I included the SEO section based on what we're implementing, but **don't commit that exact README until we've finished the sitemap, robots, canonical and structured-data work**. Otherwise the README will claim features that aren't actually in the repo yet.

If you want, once we finish the SEO setup, we can do one final README pass and make it match the repo **100% exactly**.
```
