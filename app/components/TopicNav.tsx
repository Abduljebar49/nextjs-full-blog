import React from "react";
import { blogTypes } from "../utils/constants";

const TopicNav = () => {
  return (
    <nav
      className="w-full py-2 mb-8 border-t border-b bg-gray-100"
      x-data="{ open: false }"
    >
      {/* <div className="block sm:hidden">
        <a
          href="#"
          className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
        >
          Topics{" "}
          <i
            className={"open ? 'fa-chevron-down': 'fa-chevron-up'"}
            className="fas ml-2"
          ></i>
        </a>
      </div> */}
      <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
          {blogTypes.map((blog,index:number) => (
            <div key={index} className="hover:bg-gray-400 cursor-pointer rounded py-2 px-4 mx-2">
              {blog.title}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TopicNav;
