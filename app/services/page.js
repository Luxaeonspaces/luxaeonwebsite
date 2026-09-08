import CTA from "../_components/CTA";
import Services from "../_components/Services";

export const metadata = {
  title: "Interior Design Services",
  description:
    "Explore Luxaeon Spaces' interior design services, from consultations and e-design to full-service interior design.",
};

function page() {
  return (
    <>
      <div className="page-start">
        <Services />
      </div>

      <div className="container">
        <CTA />
      </div>
    </>
  );
}

export default page;
