import React, { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { useState } from 'react';
import { addItem, delItem } from '../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'
import addCartItem from './functions/addCartItem';
import removeCartItem from './functions/removeCartItem';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const navigate = useNavigate();
    {/* Now we need a product id which is pass from the product page. */ }
    // const [product, setProduct] = useState([]);
    const proid = useParams();
    const state = useSelector((state) => state);
    const user = state.getProducts.userID || localStorage.getItem("userID");

    const products = useSelector(store => {
        return store.getProducts.products;
    });

    const proDetail = products.filter(x => x._id == proid.id);
    const product = proDetail[0];

    // We need to store useDispatch in a variable
    const dispatch = useDispatch();

    const handleCart = (products, user) => {
        if (cartBtn === "Add to Cart") {
            // console.log(state.addItem);
            // console.log(products._id);
            if (state.addItem.includes(products._id)) {
                alert("item already in cart");
            } else {
                addCartItem({ dispatch, user, products: [products._id] });
                setCartBtn("Remove from Cart")
            }
        }
        else {
            const item = products;
            const userID = user;
            removeCartItem({ dispatch, item, userID });
            setCartBtn("Add to Cart")
        }
    }

    if (!products.length) {
        return <Navigate to={"/products"} />
    }

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt={product.title} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr />
                        <h2 className="my-4">${product.price}</h2>
                        <p className="lead">{product.desc}</p>
                        <button onClick={() => handleCart(product, user)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
