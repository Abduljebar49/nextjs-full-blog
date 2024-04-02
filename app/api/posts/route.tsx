import { NextRequest, NextResponse } from "next/server";
import { AResponse, erMessage, Message, RStatus } from "../utils/contants";
import prisma from "@/prisma/client";
import { Post, PostSchema } from "../validators/schema";

const tag = "posts";

export async function GET(request: NextRequest) {
  const blogs = await prisma.post.findMany();
  return AResponse(blogs, Message(tag, RStatus.SUCCESS));
}

export async function POST(request: NextRequest) {
  const body: Post = await request.json();
  const isValid = PostSchema.safeParse(request.body);
  if (!isValid.success)
    AResponse([], erMessage(isValid.error.errors[0].message));

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: parseInt(body.authorId),
      categoryId: parseInt(body.categoryId),
    },
  });
  return AResponse(post, Message(tag, RStatus.SUCCESS));
}
