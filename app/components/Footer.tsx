import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-20 px-10 py-8 bg-slate-200">
        <div className="max-w-5xl mx-auto text-slate-700 text-center">
          © {new Date().getFullYear()}{" "}
          <a href="/" className="font-medium" target="_blank" rel="noopener">
            DebbalBlog
          </a>
          using{" "}
          <a href="https://www.11ty.dev" target="_blank" rel="noopener">
            Nestjs
          </a>{" "}
        </div>
      </footer>
    </>
  );
};

export default Footer;
