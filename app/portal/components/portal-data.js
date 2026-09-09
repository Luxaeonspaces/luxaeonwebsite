import { cache } from "react";

import { prisma } from "@/lib/prisma";

export const getPortalProject = cache(async (code, access) => {
  if (!code || !access) {
    return null;
  }

  const project = await prisma.project.findFirst({
    where: {
      projectCode: code,
      clientAccessCode: access,
    },
    select: {
      projectCode: true,
      clientName: true,
      projectName: true,
      stage: true,
      location: true,
      targetHandover: true,
    },
  });

  if (!project) {
    return null;
  }

  const documents = await prisma.clientDocument.findMany({
    where: {
      projectCode: project.projectCode,
    },
    select: {
      id: true,
      originalName: true,
      filename: true,
      uploadedBy: true,
      uploadedByRole: true,
      description: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    project,
    documents,
  };
});