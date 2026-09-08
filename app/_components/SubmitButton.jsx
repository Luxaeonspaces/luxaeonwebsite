"use client";

import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn--inverted"
      disabled={pending}
    >
      {pending ? "Sending..." : "Get in touch"}
    </button>
  );
}

export default SubmitButton;