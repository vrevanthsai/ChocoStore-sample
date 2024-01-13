import {createContext,useState} from "react";
import PropTypes from 'prop-types';

const AppContext=createContext();

function AppProvider(props){
    const [cart, setCart] = useState([]);
    function handleProductAdd(newProduct) {
    // check if item exists
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }
  // minus
  function handleProductMinus(newProduct){
    // console.log(newProduct.id);
    const updatedCart = cart.map((product) =>{
      if (product.id === newProduct.id) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    } );
    setCart(updatedCart);
  }

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }
  function getCartCount(){
  return cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  }
  function getTotalPrice(){
    return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  }
  function getProductFromCart(productId){
    return cart.find(
    (product) => product.id === productId
  );
  }

  const value={
    cart:cart,
    onProductAdd: handleProductAdd,
    onProductDelete:handleProductDelete,
    // minus
    onProductMinus: handleProductMinus,
    getCartCount,
    getTotalPrice,
    getProductFromCart
  }
  return(
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}
export {AppContext,AppProvider}

AppProvider.propTypes = {
    children: PropTypes.array.isRequired,
   
};