import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from "react-rating";
import './Product.css';


const Product = (props) => {
    const {name, img, stock, price, seller, star} = props.product;
    // console.log(props)
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p className='price'>$ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol='far fa-star icon-color'
                    fullSymbol='fas fa-star icon-color' 
                    randomly></Rating>
                <button onClick={()=> props.handleAddToCart(props.product)}  className='btn-regular'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
}

export default Product;