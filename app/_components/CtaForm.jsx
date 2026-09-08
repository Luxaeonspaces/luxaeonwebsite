"use client";

import { useActionState } from "react";
import { createLead } from "../_lib/cta-actions";
import SubmitButton from "./SubmitButton";

const initialState = {
  success: false,
  errors: {},
  message: "",
};

function CtaForm() {
  const [state, formAction] = useActionState(
    createLead,
    initialState
  );

  return (
    <form
      className="home_cta-form flex-col"
      action={formAction}
    >
      <label className="visually-hidden" htmlFor="name">
        Name
      </label>

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your Full name*"
        required
      />

      {state?.errors?.fullName && (
        <p className="form-error">
          {state.errors.fullName[0]}
        </p>
      )}

      <label className="visually-hidden" htmlFor="email">
        Email
      </label>

      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your Email*"
        required
      />

      {state?.errors?.email && (
        <p className="form-error">
          {state.errors.email[0]}
        </p>
      )}

      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="Your Phone number*"
        required
      />

      {state?.errors?.phone && (
        <p className="form-error">
          {state.errors.phone[0]}
        </p>
      )}

      <textarea
        id="message"
        name="message"
        placeholder="Tell us about your project"
        rows={4}
      />

      {state?.errors?.message && (
        <p className="form-error">
          {state.errors.message[0]}
        </p>
      )}

      {state?.message && (
        <p className="form-error">
          {state.message}
        </p>
      )}

      {state?.success && (
        <p className="form-success">
          Thanks, we'll be in touch shortly.
        </p>
      )}

      <SubmitButton />
    </form>
  );
}

export default CtaForm;