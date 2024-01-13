import { useOutletContext } from "react-router-dom"

export default function ChocoDetailsStorage(){
    const data=useOutletContext();
    return(
        <h1>Storage: {data.storage}</h1>
    )
}