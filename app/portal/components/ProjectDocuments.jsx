export default function ProjectDocuments({
  documents,
}) {
  return (
    <section className="portal-card project-documents">
      <p className="portal-eyebrow">
        Documents
      </p>

      <h4 className="portal-card-title">
        Project Documents
      </h4>

      {documents.length === 0 ? (
        <p className="documents-empty">
          No documents have been uploaded yet.
        </p>
      ) : (
        <div className="documents-list">
          {documents.map((document) => (
            <article
              key={document.id}
              className="document-item"
            >
              <div className="document-info">
                <h5>{document.name}</h5>

                {document.description && (
                  <p>{document.description}</p>
                )}

                {(document.uploadedBy ||
                  document.uploadedByRole) && (
                  <small>
                    Uploaded by{" "}
                    {document.uploadedBy || "Staff"}

                    {document.uploadedByRole &&
                      ` · ${document.uploadedByRole}`}
                  </small>
                )}
              </div>

              <a
                href={`/uploads/${document.filename}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}