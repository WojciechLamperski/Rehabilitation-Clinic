import Link from "next/link"

export default function Slide({indexNumber, index}){
    return(
        <div className={index===indexNumber ? "carousel__slide carousel__slide--1 carousel__slide--data-activ" : "carousel__slide carousel__slide--1"}>

            <img className="carousel__img carousel__img--1" alt="lekarz w okularach uśmiechający się i spoglądający w stronę ekranu" src={`/img/home/${indexNumber}.jpg`} />

            <div className="carousel__overlay"></div>

            <div className="carousel__jumbotron jumbotron carousel__jumbotron--overlay">
                <div className={index===indexNumber ? "jumbotron__wrapper inAnimation" : "jumbotron__wrapper"}>
                <div className="carousel__title">
                    W NZOZ rehabilitacja majowe oferujemy:
                </div>
                <div className="carousel__desc">
                    Wysoką jakość usług, konsultacji i sprzętu rehabilitacyjnego
                </div>
                <Link href="/zabiegi" className="btn carousel__btn carousel__btn--darkGreen" tabIndex="-1">
                    Zobacz opis zabiegów
                </Link>
                </div>

            </div>
        </div>
    )
}