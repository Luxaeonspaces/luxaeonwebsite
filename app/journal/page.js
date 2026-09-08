import JournalHero from "./_sections/JournalHero";
import CTA from "../_components/CTA";
import JournalGrid from "./_sections/JournalGrid";

export const metadata = {
  title: "Journals",
  description:
    "Ideas, insights, and perspectives on interior design, architecture, materials, and everyday living from Luxaeon Spaces.",
};

export default function page() {
  return (
    <>
      <JournalHero />
      <JournalGrid />

      <div className="container">
        <CTA />
      </div>
    </>
  );
}
