import React from "react";
import blogData from "../data/blog";
import Header from "./header.js"
import About from "./about.js"
import ArticleList from "./articleList.js"

// console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
