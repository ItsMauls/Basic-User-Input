// import { useState } from "react"

const Button = props => {
    // let [count, setCount] = useState(0)
    return (
        <div>
            <button 
            type={props.type || 'button'}
            className="bg-blue-200  my-4 px-8 py-1"
            onClick={props.onClick}
            >
            {props.children}
            </button>
        </div>

        // <div>
        //     <h3 className="bg-green-500">count : {count} </h3>
        //     <button onClick={buttonHandler}>Ini Tombol</button>
        // </div>
    )
}

export default Button