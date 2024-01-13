import { useState, useEffect } from 'react';
import useFetch from "./useFetch.jsx";
import {useParams,NavLink,Outlet} from "react-router-dom";
export default function ChocoDetails() {
    const [product, setProduct] = useState([]);
    const params=useParams();
    const { get, loading } = useFetch(
        "https://react-tutorial-demo.firebaseio.com/"
    );
    useEffect(
        () => {
            get(`productinfo/id${params.id}.json`)
            .then((data)=>{
                setProduct(data)
            })
            .catch((error)=>{
                console.log("Could not load products",error)
            })
    }, [get, params.id])

    return (
        <div className="product-info container">
            {loading && <p className="loading">loading...</p>}
            <div>
                <h1>{product.name}</h1>
                <img src={product.image} alt={product.name} width="200" height="200" />
            </div>
            {/* tabs or Subpages or Nested pages */}
            <div>
                <div className="tabs">
                    <ul className='tabs-ul'>
                        <li>
                        <NavLink className={({isActive})=>
                            isActive?"tab-active":""
                        } to="" end>Details</NavLink>
                        </li>
                        <li>
                        <NavLink className={({isActive})=>
                            isActive ?"tab-active":""
                        } to="storage">Storage</NavLink>
                        </li>
                    </ul>   
                </div>
                <Outlet context={product}/>
            </div>
        </div>
        
    )
}