import { z } from "zod";

export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface Post {
  id?: number;
  title: string;
  content: string;
  authorId: string;
  categoryId: string;
}
export interface Category {
  title: string;
  description: string;
}

export interface Tag {
  title: string;
  description: string;
}

export interface Comment {
  content: string;
  postId: string;
  authorId: string;
}
const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(12),
  firstName: z.string().min(4).max(12),
  lastName: z.string().min(4).max(12),
});

const PostSchema = z.object({
  title: z.string().min(10),
  content: z.string().min(20),
  authorId: z.number(),
  categoryId: z.number().optional(),
});

const CategorySchema = z.object({
  name: z.string().min(10),
  description: z.string().min(20),
});

const TagSchema = z.object({
  name: z.string().min(10),
  description: z.string().min(20),
});

const CommentSchema = z.object({
  content: z.string().min(20),
  postId: z.number(),
  authorId: z.number(),
});

export { PostSchema, UserSchema, TagSchema, CommentSchema, CategorySchema };
