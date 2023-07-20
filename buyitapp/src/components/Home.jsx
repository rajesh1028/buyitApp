import React, { useEffect, useState } from 'react';
import "./styles/home.css"
import { useDispatch, useSelector } from 'react-redux';
import getProducts from './functions/getProducts';
import getCartItems from './functions/getCartItems';

const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const state = useSelector((state) => state);
    const userID = state.getProducts.userID || localStorage.getItem("userID");

    useEffect(() => {
        getProducts({ dispatch, setLoading });
        getCartItems({ userID, dispatch });
    }, []);

    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/img1.jpg" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/img2.jpg" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/img3.jpg" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/img4.jpg" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div id='advertisements'>
                <div>
                    <img src="/assets/images/home/img5.png" alt="card" />
                </div>
                <br />
                <div>
                    <img src="/assets/images/home/img6.png" alt="phone 1" />
                </div>
                <br />
                <div>
                    <img src="/assets/images/home/img7.png" alt="phone 2" />
                </div>
                <br />
            </div>
            <div id='brands'>
                <img src="/assets/images/home/img8.jpg" alt="brands" />
            </div>
        </div>
    )
}

export default Home;
