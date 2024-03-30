import Link from "next/link";
import React from "react";
import { Blog } from "../utils/interfaces";
import { truncateText } from "../utils/funtions";

interface Props {
  blog: Blog;
}
const NewsCard = ({ blog }: Props) => {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
        <div className="rounded shadow-md h-full">
          <img src={blog.image} className="" alt="" />
          <div key={blog.id} className="px-6 py-5">
            <div className="font-semibold text-lg mb-2">
              <Link href={""} className="text-slate-900 hover:text-slate-700">
                {blog.title}
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="text-slate-700 mb-1" title="published-date">
                {blog.createdAt.toDateString()}
              </p>
              <p className="text-slate-800">{truncateText(blog.description)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
