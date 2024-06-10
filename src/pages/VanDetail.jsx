import vanImg from "../image/single-van.png"
import React from "react";
import { Link, useParams } from "react-router-dom";

import '../server'


export default function VanDetail(){
    const params = useParams()
    let [van, setVan] = React.useState(null)

    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params])

    console.log(params);
    console.log(van);

    return(
        <>
        { van ?
        <div key={van.id} className="vanDetail">
            <Link to='/vans'>
                <p className="vanDetail-p"><i class="fa-solid fa-arrow-left"></i> Back to all vans</p>
            </Link>
            <img src={van.imageUrl} alt="" />
            <button className="van-button-simple">{van.type}</button>
            <h2>{van.name}</h2>
            <span>${van.price} <p>/day</p></span>
            <p>{van.description}</p>
            <button className="rent-button">Rent this van</button>
        </div>
        : <h1 className="loading">Loading...</h1>
        }
        </>
    )
}