import { useOutletContext } from "react-router-dom";
import Button from "../Button.jsx";

import {useContext} from "react";
import {AppContext} from "./AppContext.jsx";

export default function ChocoDetailsInfo(){
    const product=useOutletContext();
    // context
    const context = useContext(AppContext);
    return(
        <>
        <h1>Description: {product.description}</h1>
        <Button className='btn-primary' onClick={() => context.onProductAdd(product)}>${product.price}</Button>
        {/* <Button className='btn-primary'>${product.price}</Button> */}
        </>
    )
}