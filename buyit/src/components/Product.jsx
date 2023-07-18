import './styles/products.css';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { URL_LINK as url } from './link';
import { useSelector, useDispatch } from 'react-redux';

const Product = () => {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");

    const products = useSelector(store => {
        return store.getProducts.products;
    })

    const dispatch = useDispatch();

    const getProducts = () => {
        fetch(`${url}/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }).then(res => res.json())
            .then(data => {
                dispatch({ type: "GET_PRODUCTS", payload: data });
            })
            .catch(error => console.log(error));
    }


    useEffect(() => {
        getProducts();
    }, []);

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
                    <NavLink to={`/products/${item._id}`} class="btn btn-outline-primary">Buy Now</NavLink>
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
