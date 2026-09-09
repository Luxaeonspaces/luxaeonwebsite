import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();

    const code = body.code?.trim();
    const access = body.access?.trim();

    if (!code || !access) {
      return NextResponse.json(
        {
          error: "Project code and access code are required.",
        },
        { status: 400 }
      );
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
      return NextResponse.json(
        {
          error: "Invalid project code or access code.",
        },
        { status: 404 }
      );
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

    return NextResponse.json({
      project,
      documents: documents.map((document) => ({
        id: document.id,
        name: document.originalName || document.filename,
        filename: document.filename,
        uploadedBy: document.uploadedBy,
        uploadedByRole: document.uploadedByRole,
        description: document.description,
      })),
    });
  } catch (error) {
    console.error("Portal lookup error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}