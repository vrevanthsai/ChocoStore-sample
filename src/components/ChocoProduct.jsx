import PropTypes from 'prop-types';
import Button from '../Button';
import { Link } from 'react-router-dom';
// context
import { useContext } from "react";
import { AppContext } from "./AppContext.jsx";

export default function ChocoProduct(props) {
    const { details } = props;
    //  get cart from context
    const context = useContext(AppContext);
    const productFromCart = context.getProductFromCart(details.id);
    const quantity = productFromCart ? productFromCart.quantity : 0;

    return (
        <>
            <div className="products-info ">
                <Link to={`/chocolates/${details.id}`}>
                    <img src={details.image} alt={details.name} width="100" height="100" />
                </Link>

                {quantity > 0 && (
                    <div className="product-quantity-container">
                        <div className="product-quantity">{quantity}</div>
                    </div>
                )}

                <div className="products-info2">
                    <h1>{details.name}</h1>
                    <p>{details.description}</p>
                </div>

                <div className="product-checkout">
                    <div>
                        {/* full clear (x) */}
                        {quantity > 0 && (
                            <Button onClick={() =>
                                context.onProductDelete(details.id)} className="product-delete btn-primary">x</Button>
                        )}
                        {/* Reducing one quantity value(minus) */}
                        {quantity > 0 && (
                            <Button onClick={() => context.onProductMinus(details)} className="product-delete btn-primary">-</Button>
                        )}
                    </div>
                    <Button className='btn-primary' onClick={() => context.onProductAdd(details)}>
                        ${details.price}
                    </Button>
                </div>
                
            </div>
        </>
    )

}
ChocoProduct.propTypes = {
    details: PropTypes.object.isRequired,
};