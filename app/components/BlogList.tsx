import React from "react";
import NewsCard from "./NewsCard";
import { blogs } from "../utils/constants";

const BlogList = () => {

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap -mx-2">
          {blogs.map((blog, i: number) => (
            <NewsCard blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
