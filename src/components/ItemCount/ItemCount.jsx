import { useState } from "react";

function ItemCount (){
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleSubstract = () => {
        setCount(count - 1)
    }

    return(
        <div>
            <p style={{border:'solid 1px white'}}>{count}</p>
            <button style={{ backgroundColor: 'red'}} onClick={handleSubstract}>Restar</button>
            <button style={{ backgroundColor: 'green'}} onClick={handleAdd}>Sumar</button>
        </div>
    )
}

export default ItemCount;