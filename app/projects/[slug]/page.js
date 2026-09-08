import { notFound } from "next/navigation";
import { PROJECT_DETAILS } from "@/app/_lib/projects";
import CTA from "@/app/_components/CTA";
import ProjectHero from "./_sections/ProjectHero";
import TextBlock from "./_sections/TextBlock";
import Gallery from "./_sections/Gallery";
import KeyFeatures from "./_sections/KeyFeatures";
import Callout from "./_sections/Callout";
import MaterialPalette from "./_sections/MaterialPalette";
import MoreProjects from "./_sections/MoreProjects";
import JsonLd from "@/app/_components/JsonLd";

export function generateStaticParams() {
  return PROJECT_DETAILS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = PROJECT_DETAILS.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Projects",
      description:
        "Explore selected interior design p rojects by Luxaeon Spaces.",
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      images: project.heroImage
        ? [
            {
              url: project.heroImage,
              alt: project.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function page({ params }) {
  const { slug } = await params;
  const project = PROJECT_DETAILS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          image: `https://luxaeonspaces.com${project.heroImage}`,
          url: `https://luxaeonspaces.com/projects/${project.slug}`,
          creator: {
            "@type": "Organization",
            name: "Luxaeon Spaces",
          },
        }}
      />
      <ProjectHero
        title={project.title}
        service={project.service}
        category={project.category}
        heroImage={project.heroImage}
      />

      <TextBlock label={"vision"} body={project.vision} />

      <Gallery images={project?.galleryOne} title={project.title} />

      <TextBlock
        label={project.secondSection.label}
        body={project.secondSection.body}
      />
      <Gallery images={project?.galleryTwo} title={project.title} />

      <TextBlock label={"approach"} body={project.approach} />

      <KeyFeatures features={project.keyFeatures} />

      <Callout
        eyebrow="Design Direction"
        label={project.designDirection.label}
        body={project.designDirection.body}
      />

      <MaterialPalette palette={project.materialPalette} />

      <Gallery images={project?.galleryThree} title={project.title} />

      <TextBlock label={project.closing.label} body={project.closing.body} />

      {project.favouriteDetail && (
        <Callout
          eyebrow="Favourite Detail"
          label={project.favouriteDetail.title}
          body={project.favouriteDetail.description}
        />
      )}

      <MoreProjects currentSlug={project.slug} />

      <div className="container">
        <CTA />
      </div>
    </>
  );
}
