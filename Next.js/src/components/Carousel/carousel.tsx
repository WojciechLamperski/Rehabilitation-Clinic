'use client'
import { useState } from "react"
import Slide from "./slide"
import Link from "next/link";

export default function Carousel(){

    const [index, setIndex] = useState(0);

    return(
        <section className="carousel main__banner" id="data-carousel">

            <Slide index={index} indexNumber={0}>
                <div className="carousel__title">
                    W NZOZ rehabilitacja majowe oferujemy:
                </div>
                <div className="carousel__desc">
                    Wysoką jakość usług, konsultacji i sprzętu rehabilitacyjnego
                </div>
                <Link href="/zabiegi" className="btn carousel__btn carousel__btn--darkGreen" tabIndex="-1">
                    Zobacz opis zabiegów
                </Link>
            </Slide>

            <Slide index={index} indexNumber={1} whitesmoke={true}>
                <div className="carousel__title">
                    W naszej przychodni znajdą Państwo:
                </div>
                <div className="carousel__desc">
                    Szeroką gamę zabiegów mających za zadanie przywrócenie Państwu sprawności fizycznej.
                </div>
                <Link href="/cennik" className="btn carousel__btn carousel__btn--pink" tabIndex="-1">
                    Poznaj naszą ofertę
                </Link>
            </Slide>

            <Slide index={index} indexNumber={2}>
                <div className="carousel__title">
                    Zapraszamy Państwa do kontaktu!
                </div>
                <div className="carousel__desc">
                    Telefonicznie, lub z umówieniem na miejscu
                </div>
                <Link href="/kontakt" className="btn carousel__btn carousel__btn--lightGreen" tabIndex="-1">
                    Zobacz dane kontaktowe
                </Link>
            </Slide>

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