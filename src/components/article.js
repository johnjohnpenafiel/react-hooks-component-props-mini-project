import React from "react";

function Article({title, date = "January 1, 1970" , preview}) {
    const articles = () => {
        return(
            <article>
                <h3>{title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
            </article>
        )
    }
    
    return (
        articles()
    )
}

export default Article