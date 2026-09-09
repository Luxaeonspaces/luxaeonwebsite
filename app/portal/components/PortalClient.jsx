"use client";

import { useState } from "react";

import PortalAccess from "./PortalAccess";
import ProjectOverview from "./ProjectOverview";
import ProjectProgress from "./ProjectProgress";
import ProjectDocuments from "./ProjectDocuments";

export default function PortalClient() {
  const [portal, setPortal] = useState(null);

  function handleSuccess(data) {
    setPortal(data);
  }

  function handleReset() {
    setPortal(null);

    // Reset the browser URL without reloading the page
    window.history.replaceState({}, "", "/portal");
  }

  if (!portal) {
    return <PortalAccess onSuccess={handleSuccess} />;
  }

  return (
    <>
      <ProjectOverview
        clientName={portal.project.clientName}
        projectName={portal.project.projectName}
        location={portal.project.location}
        targetHandover={portal.project.targetHandover}
      />

      <ProjectProgress stage={portal.project.stage} />

      <ProjectDocuments documents={portal.documents} />

      <button
        type="button"
        className="portal-reset"
        onClick={handleReset}
      >
        Check another project
      </button>
    </>
  );
}