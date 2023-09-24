// import { useState } from "react";

const Card = props => {

    return (
        <div className="mx-auto border-2 rounded-xl mt-4 border-black w-5/6 shadow-lg"
       >
            {props.children}
        </div>
    )
}

export default Card