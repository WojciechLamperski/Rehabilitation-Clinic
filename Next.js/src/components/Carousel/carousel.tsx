'use client'
import { useState } from "react"
import Slide from "./slide"

export default function Carousel(){

    const [index, setIndex] = useState(0);

    return(
        <section className="carousel main__banner" id="data-carousel">

            <Slide index={index} indexNumber={0} />
            <Slide index={index} indexNumber={1} whitesmoke={true} />
            <Slide index={index} indexNumber={2} />

            <button onClick={()=>{index===2 ? setIndex(0) : setIndex(index+1)}} className="carousel__nav carousel__nav--right" data-carousel-button="next">
            <svg className="carousel__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="22.8">
                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>

            </button>
            <button onClick={()=>{index===0 ? setIndex(2) : setIndex(index-1)}} className="carousel__nav carousel__nav--left" data-carousel-button="prev">
            <svg className="carousel__svg carousel__svg--left" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="22.8">
                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
            </button>

        </section>
    )
}