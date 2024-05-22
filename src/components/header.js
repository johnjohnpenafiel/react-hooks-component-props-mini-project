import React from "react";

function Header({name}) {
    
    const nameTitle = <h1>{name}</h1>
    return (
        <header>
           {nameTitle}
        </header>
    )
}

export default Header