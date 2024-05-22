import React from "react";
import Article from "./article.js"

function ArticleList({posts}) {
    console.log(posts)
        const articleItems = posts.map((post) => {
            return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
        })

    return(
        <main>
            {articleItems}
        </main>
        
    )
    
}

export default ArticleList