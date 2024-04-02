import { NextRequest } from "next/server";
import { AResponse, erMessage, Message, RStatus } from "../../utils/contants";
import prisma from "@/prisma/client";
import { Post, PostSchema } from "../../validators/schema";

interface Props {
  params: { id: string };
}
const tag = "posts";

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const post = await prisma.post.findFirst({ where: { title: id } });
  return AResponse(post, Message(tag, RStatus.SUCCESS));
}

export async function PUT(request: NextRequest) {
  const body: Post = await request.json();
  const isValid = PostSchema.safeParse(request.body);
  if (!isValid.success)
    return AResponse([], erMessage(isValid.error.errors[0].message));

  const post = await prisma.post.findUnique({ where: { id: body.id } });
  if (post) return AResponse([], erMessage("Duplicate value found"), 400);
  const newPost = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: parseInt(body.authorId),
      categoryId: parseInt(body.categoryId),
    },
  });
  return AResponse(newPost, Message(tag, RStatus.UPDATED));
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const post = await prisma.post.findUnique({ where: { id: body.id } });
  if (!post) return AResponse([], erMessage("No data to delete"), 400);

  await prisma.post.delete({where:{id:body.id}})
  return AResponse({},Message(tag,RStatus.DELETED))
}
