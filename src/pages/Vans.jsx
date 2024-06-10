import van from "../image/single-van.png"
import React from "react";
import { Link } from "react-router-dom"
import "../server"

export default function Vans(){
    let [allVans, setAllVans] = React.useState([])

    React.useEffect(()=>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setAllVans(data.vans))
    }, [])

   const vanElement = allVans.map((van) => (
            <div key={van.id} className="single-van">
                <Link to={`/vans/${van.id}`}>
                    <img src={van.imageUrl} alt="van-img" />
                    <div>
                        <h4>{van.name}r</h4>
                        <span>${van.price} <br /> <p>/day</p></span>
                    </div>
                    <button>{van.type}</button>
                </Link>
            </div>
        ))

   console.log(allVans);

    return(
        <div className="vans-contents">
            <h2>Explore our van Options</h2>
            <div className="sort-button">
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
                <button className="clear-vans">Clear filters</button>
            </div>

            <div className="vans-full-details">
                {/* <div className="single-van">
                    <img src={van} alt="" />
                    <div>
                        <h4>Modest Explorer</h4>
                        <span>$60 <br /> <p>/day</p></span>
                    </div>
                    <button>Simple</button>
                </div> */}

                {vanElement}
            </div>
        </div>
    )
}