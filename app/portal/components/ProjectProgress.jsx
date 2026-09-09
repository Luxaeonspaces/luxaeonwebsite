const stages = [
  "Planning",
  "Design",
  "Procurement",
  "Construction",
  "Installation",
  "Completed",
];

export default function ProjectProgress({ stage }) {
  const currentIndex = stages.findIndex(
    (item) =>
      item.toLowerCase() === stage?.toLowerCase()
  );

  return (
    <section className="portal-card project-progress">
      <p className="portal-eyebrow">
        Project Progress
      </p>

      <h4 className="portal-card-title">
        {stage || "Not started"}
      </h4>

      <div className="project-stages">
        {stages.map((item, index) => {
          const completed = currentIndex >= index;
          const current = currentIndex === index;

          return (
            <div
              key={item}
              className={`project-stage ${
                completed ? "is-completed" : ""
              } ${current ? "is-current" : ""}`}
            >
              <div className="project-stage-number">
                {index + 1}
              </div>

              <span>
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}