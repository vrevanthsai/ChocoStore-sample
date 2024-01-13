import Product from "./Product.jsx";
import {useState} from "react";

export default function StoreFront() {
    const [products,setProducts]=useState([]);
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [price,setPrice]=useState("");
    const [validation,setValidation]=useState("");
    function handleSubmitForm(e){
        e.preventDefault();
       if(!name){
           setValidation("Please enter your name")
           return ;
       }
       if(!description){
           setValidation("Please enter your description")
           return ;
       }
        setProducts([...products,
        {
            id:products.length+1,
            name:name,
            description:description,
            image:image,
            price:price
        }]);
        // reset
        setName("");
        setDescription("");
        setImage("");
        setPrice("");
        setValidation("");
    }
    function handleDeleteProduct(id){
        setProducts(products.filter(product=>product.id!==id))
    }
    return <>
        <form onSubmit={handleSubmitForm}>
            <div>
                <label htmlFor="n">Enter Product name:</label>
                <input type="text" id="n" placeholder="Enter the name" className="textfield" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="des">Enter Product description:</label>
                <input type="text" id="des" placeholder="Enter the description" className="textfield" value={description} onChange={e=>setDescription(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="n">Enter Product image-URL:</label>
                <input type="text" id="n" placeholder="Enter the name" className="textfield" value={image} onChange={e=>setImage(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="n">Enter Product price:</label>
                <input type="text" id="n" placeholder="Enter the name" className="textfield" value={price} onChange={e=>setPrice(e.target.value)}/>
            </div>
            <div className="form-footer">
                <div className="validation-message">{validation}</div>
                <input type="submit" className="btn btn-primary" value="Add product" />
            </div>
        </form>
        <div>{products.length===0 && <p>Add your first product</p>}</div>
        <ul className="store-front">{
            products.map(product=><li key={product.id}>
                <Product details={product} />
                <button className="btn-outline btn-delete" onClick={()=>handleDeleteProduct(product.id)} >Delete</button>
            </li>
            )}</ul>
    </>;
}