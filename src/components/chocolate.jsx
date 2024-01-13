import { useState, useEffect } from "react";
import useFetch from "./useFetch.jsx";
import ChocoProduct from "./ChocoProduct.jsx";

export default function Chocolate() {
    const [products, setProducts] = useState([]);
    const { get, loading } = useFetch(
        // "https://react-tutorial-demo.firebaseio.com/"
        "https://restapi-production-c9fb.up.railway.app/api/"
    );

    useEffect(() => {
        // get("supermarket.json")
        get("products")
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.log("Could not load products", error));
    }, [get]);

    return (
        <>
            <div className="products-layout text-center">
                <h1>Chocolates</h1>
                <p>Pick your Chocolate</p>
                <div className="products-grid container text-center">
                    {loading && <p className="loading">loading...</p>}
                    {products.map((product) => {
                        return (
                            <ChocoProduct key={product.id} details={product} />

                        );
                    })}
                </div>
            </div>
        </>
    )
}