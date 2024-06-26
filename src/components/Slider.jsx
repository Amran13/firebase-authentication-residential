import React from 'react';
import img1 from '../assets/Banner/dorian-mongel-BSOv5_J0eSg-unsplash.jpg'
import img2 from '../assets/Banner/eugene-kuznetsov-U1JDjSfAQ_s-unsplash.jpg'
import img3 from '../assets/Banner/gus-ruballo-h5QNclJUiA8-unsplash.jpg'
import img4 from '../assets/Banner/jose-rago-LNlJ0WZHiEs-unsplash.jpg'

const Slider = () => {
    return (
        <div>
                <div className="text-center w-1/2 mx-auto mb-10 mt-16">
                    <h1 className="mb-5 text-5xl font-bold">Buy Your Happiness.</h1>
                    <p className="mb-5">We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.</p>
                </div>
                <div className="carousel w-full h-[700px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={img4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Slider;