export default function ProjectOverview({
  clientName,
  projectName,
  location,
  targetHandover,
}) {
  const handover = targetHandover
    ? new Intl.DateTimeFormat("en-NG", {
        dateStyle: "medium",
      }).format(new Date(targetHandover))
    : "Not specified";

  return (
    <section className="portal-card project-overview">
      <p className="portal-eyebrow">
        Project
      </p>

      <h4 className="portal-card-title">
        {projectName}
      </h4>

      <div className="project-details">
        <div>
          <span>Client</span>
          <strong>{clientName}</strong>
        </div>

        <div>
          <span>Location</span>
          <strong>
            {location || "Not specified"}
          </strong>
        </div>

        <div>
          <span>Target Handover</span>
          <strong>{handover}</strong>
        </div>
      </div>
    </section>
  );
}