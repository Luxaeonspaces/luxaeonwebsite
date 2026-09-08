import CTA from "../_components/CTA";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Luxaeon Spaces to discuss your interior design project, consultation, renovation, or design needs.",
};

function page() {
  return (
    <>
      <div className="page-start">
        <CTA />
      </div>
    </>
  );
}

export default page;
