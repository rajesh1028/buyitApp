import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import getCartItems from './functions/getCartItems'
import getProducts from './functions/getProducts'
import removeCartItem from './functions/removeCartItem'


const Cart = () => {
    const items = useSelector((state) => state.addItem);
    const state = useSelector((state) => state);
    const userID = state.getProducts.userID || localStorage.getItem("userID");
    const products = state.getProducts.products;
    const [loading, setLoading] = useState(false);
    // console.log(products); // from products

    const dispatch = useDispatch();

    const handleClose = (item) => {
        // console.log(item);
        removeCartItem({ dispatch, item, userID });
    }

    const productsToDisplay = [];
    if (items && products) {
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < products.length; j++) {
                if (items[i] == products[j]._id) {
                    productsToDisplay.push(products[j]);
                    break;
                }
            }
        }
        // console.log(productsToDisplay);
    }

    useEffect(() => {
        getProducts({ dispatch, setLoading });
        getCartItems({ userID, dispatch });
    }, []);

    // useEffect(() => {
    //     getCartItems({ userID, dispatch });
    // }, [])

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem._id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {productsToDisplay.length === 0 && emptyCart()}
            {productsToDisplay.length !== 0 && productsToDisplay.map(cartItems)}
            {productsToDisplay.length !== 0 && button()}
        </>
    )
}

export default Cart