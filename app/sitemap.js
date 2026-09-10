import { PROJECT_DETAILS } from "./_lib/projects";
import { JOURNAL_DETAILS } from "./_lib/journals";

const BASE_URL = "https://luxaeonspaces.com";

export default function sitemap() {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/journal",
    "/contact",
  ];

  const projectPages = PROJECT_DETAILS.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
   lastModified: new Date(project.date).toISOString(),
  }));

  const journalPages = JOURNAL_DETAILS.map((post) => ({
    url: `${BASE_URL}/journal/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }));

    const pages = [
      ...staticPages.map((page) => ({
        url: `${BASE_URL}${page}`,
        lastModified: new Date().toISOString(),
      })),

      ...projectPages,
      ...journalPages,
    ];

    return pages.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
}