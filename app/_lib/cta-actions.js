"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const leadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    // .optional()
    .or(z.literal("")),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number"),

  message: z
    .string()
    .trim()
    .max(2000, "Message is too long")
    .optional()
    .or(z.literal("")),
});

export async function createLead(prevState, formData) {
  const validatedFields = leadSchema.safeParse({
    fullName: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { fullName, email, phone, message } = validatedFields.data;

  try {
    await prisma.lead.create({
      data: {
        id: crypto.randomUUID(),
        fullName,
        email: email || null,
        phone: phone || null,
        notes: message || null,
        source: "Website",
      },
    });

    return {
      success: true,
      errors: {},
      message: "",
    };
  } catch (error) {
    console.error("Failed to create lead:", error);

    return {
      success: false,
      errors: {},
      message: "Something went wrong. Please try again.",
    };
  }
}