import { JOURNAL_DETAILS } from "@/app/_lib/journals";
import PostHero from "./_sections/PostHero";
import PostIntro from "./_sections/PostIntro";
import PostSection from "./_sections/PostSection";
import OtherPosts from "./_sections/OtherPosts";
import CTA from "@/app/_components/CTA";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/app/_components/JsonLd";

export function generateStaticParams() {
  return JOURNAL_DETAILS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = JOURNAL_DETAILS.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Journal",
      description:
        "Ideas, insights, and perspectives on interior design, architecture, materials, and everyday living from Luxaeon Spaces.",
    };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `/journal/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      images: post.heroImage
        ? [
            {
              url: post.heroImage,
              alt: post.title,
            },
          ]
        : undefined,
    },
  };
}

async function page({ params }) {
  const { slug } = await params;
  const post = JOURNAL_DETAILS.find((p) => p.slug === slug);
  if (!post)
    return (
      <div className="page-start">
        <h1>Page not found</h1>
        <Link href={"/"} className="btn">
          Go to home
        </Link>
      </div>
    );
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.metaDescription,
          image: post.heroImage,
          datePublished: new Date(post.date).toISOString(),
          dateModified: new Date(post.date).toISOString(),
          author: {
            "@type": "Organization",
            name: "Luxaeon Spaces",
          },
          publisher: {
            "@type": "Organization",
            name: "Luxaeon Spaces",
            logo: {
              "@type": "ImageObject",
              url: "https://luxaeonspaces.com/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://luxaeonspaces.com/journal/${post.slug}`,
          },
        }}
      />
      <PostHero
        tag={post.tag}
        date={post.date}
        title={post.title}
        hook={post.hook}
        heroImage={post.heroImage}
      />

      <PostIntro paragraphs={post.intro} />

      {post.sections.map((section, i) => (
        <PostSection
          key={i}
          heading={section.heading}
          paragraphs={section.paragraphs}
          list={section.list}
          image={section.image}
        />
      ))}

      <OtherPosts currentSlug={post.slug} />
      <div className="container">
        <CTA />
      </div>
    </>
  );
}

export default page;
