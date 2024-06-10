import vansImg from "../image/vans-img.png"
import React from 'react';
import { Link } from 'react-router-dom'

export default function About(){
    return(
        <div className="about-container">
            <img src={vansImg} alt="" />
            <div className="about-div-content">
                <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="explore-content">
                    <h3>Your destination is waiting.<br />Your van is ready.</h3>
                    <Link className="link-button" to="/vans">Explore our vans</Link>
                </div>
            </div>
        </div>
    )
}