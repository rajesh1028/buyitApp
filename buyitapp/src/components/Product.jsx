import './styles/products.css';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import getProducts from './functions/getProducts';
import getCartItems from './functions/getCartItems';


const Product = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const userID = state.getProducts.userID || localStorage.getItem("userID");
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const products = useSelector(store => {
        return store.getProducts.products;
    })

    if (loading) {
        return <h2 style={{ textAlign: "center", marginTop: "3%" }}>Loading...</h2>
    }

    if (!products.length) {
        setLoading(true);
        getProducts({ dispatch, setLoading })
        getCartItems({ userID, dispatch });
    }

    const handleSort = (e) => {
        if (e.target.value === "LTH") {
            products.sort((a, b) => a.price - b.price);
            setItems([]);
        } else if (e.target.value === "HTL") {
            products.sort((a, b) => b.price - a.price);
            setItems([]);
        }
    }

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item._id} style={{ width: "18rem" }}>
                <img src={item.img} class="card-img-top" alt={item.title} />
                <div class="card-body text-center">
                    <h5 class="card-title">{item.title}</h5>
                    <p className="lead">${item.price}</p>
                    <NavLink style={{ textDecoration: 'none' }} to={`/products/${item._id}`} id='buyNow' class="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                    <div id="functionalities">
                        <select onChange={handleSort} name="sort" id="sort">
                            <option value="">Sort By Price</option>
                            <option value="LTH">Low To High</option>
                            <option value="HTL">High To Low</option>
                        </select>
                        <input onChange={(e) => setSearch(e.target.value)} type="text" id="search" placeholder="Type to Search" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {products.filter(item => {
                        return search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search);
                    }).map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default Product
