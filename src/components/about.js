import React from "react";
const defaultImage = "https://via.placeholder.com/215"
function About({image = defaultImage, about}) {
    const aboutCard = () => {
        return(
            <aside>
                <img src={image} alt="blog logo" />
                <p>{about}</p>
            </aside>
        )
    }

    return(
        aboutCard()
    )
    
}

export default About