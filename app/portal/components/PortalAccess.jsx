"use client";

import { useState } from "react";

export default function PortalAccess({ onSuccess }) {
  const [code, setCode] = useState("");
  const [access, setAccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedCode = code.trim();
    const trimmedAccess = access.trim();

    if (!trimmedCode || !trimmedAccess) {
      setError("Please enter your project code and access code.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: trimmedCode,
          access: trimmedAccess,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.error || "Unable to find your project."
        );
        return;
      }

      onSuccess(data);
    } catch (error) {
      console.error(error);

      setError(
        "Unable to connect to the portal. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="portal-access">
      <div className="portal-section-heading">
        <h2>Access your project</h2>

        <p>
          Enter your project code and access code.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="portal-access-form"
      >
        <div className="portal-field">
          <label htmlFor="project-code">
            Project Code
          </label>

          <input
            id="project-code"
            value={code}
            onChange={(event) =>
              setCode(event.target.value)
            }
            placeholder="e.g. LUX-001"
            autoComplete="off"
            disabled={loading}
          />
        </div>

        <div className="portal-field">
          <label htmlFor="access-code">
            Access Code
          </label>

          <input
            id="access-code"
            value={access}
            onChange={(event) =>
              setAccess(event.target.value)
            }
            placeholder="Enter your access code"
            autoComplete="off"
            disabled={loading}
          />
        </div>

        {error && (
          <p className="portal-form-error">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Checking..." : "View Project"}
        </button>
      </form>
    </section>
  );
}