import ProjectDocuments from "./ProjectDocuments";
import ProjectOverview from "./ProjectOverview";
import ProjectProgress from "./ProjectProgress";

import { getPortalProject } from "./portal-data";

export default async function ProjectPortal({ code, access }) {
  const data = await getPortalProject(code, access);

  if (!data) {
    return (
      <div className="portal-error">
        <h2>Project not found</h2>

        <p>
          We couldn&apos;t find a project with those access details.
          Please check your project code and access code.
        </p>
      </div>
    );
  }

  const { project, documents } = data;

  return (
    <>
      <ProjectOverview
        clientName={project.clientName}
        projectName={project.projectName}
        location={project.location}
        targetHandover={project.targetHandover}
      />

      <ProjectProgress
        stage={project.stage}
      />

      <ProjectDocuments
        documents={documents.map((document) => ({
          id: document.id,
          name: document.originalName || document.filename,
          filename: document.filename,
          uploadedBy: document.uploadedBy,
          uploadedByRole: document.uploadedByRole,
          description: document.description,
        }))}
      />
    </>
  );
}