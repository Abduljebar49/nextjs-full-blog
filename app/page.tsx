import React from "react";
import TopNavBar from "./components/TopNavBar";
import BlogHeader from "./components/BlogHeader";
import TopicNav from "./components/TopicNav";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      <TopNavBar />
      <BlogHeader />
      <TopicNav />
      <BlogList />
      <Footer />
    </>
  );
};

export default HomePage;
