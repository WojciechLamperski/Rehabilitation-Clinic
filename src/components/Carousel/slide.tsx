import Link from "next/link"
export default function Slide({indexNumber, index, whitesmoke}){

    return(
        <div className={index===indexNumber ? "carousel__slide carousel__slide--1 carousel__slide--data-activ" : "carousel__slide carousel__slide--1"}>

            <img className="carousel__img carousel__img--1" alt="lekarz w okularach uśmiechający się i spoglądający w stronę ekranu" src={`/img/home/${indexNumber}.jpg`} />

            <div className="carousel__overlay"></div>

            <div className="carousel__jumbotron jumbotron carousel__jumbotron--overlay">
                <div className={index===indexNumber ? `jumbotron__wrapper inAnimation ${whitesmoke && "jumbotron__wrapper--whitesmoke"}` : `jumbotron__wrapper ${whitesmoke && "jumbotron__wrapper--whitesmoke"}`}>
                <div className="carousel__title">
                    {indexNumber===0 &&  "W NZOZ Rehabilitacja-Majowe oferujemy"}
                    {indexNumber===1 &&  "W naszej przychodni znajdą Państwo"}
                    {indexNumber===2 &&  "Zapraszamy Państwa do kontaktu!"}
                </div>
                <div className="carousel__desc">
                    {indexNumber===0 &&  "wysoką jakość usług, konsultacji i sprzętu rehabilitacyjnego."}
                    {indexNumber===1 &&  "szeroką gamę zabiegów mających za zadanie przywrócenie Państwu sprawności fizycznej."}
                    {indexNumber === 2 && <span>Telefonicznego lub bezpośredniego <br/ > w siedzibie Poradni.</span>}
                   
                </div>
                    <Link href={indexNumber === 2 ? "/kontakt" : indexNumber === 1 ? "/cennik" : "/zabiegi"} className={index===0 ? "btn carousel__btn carousel__btn--darkGreen" : (index===1 ? "btn carousel__btn carousel__btn--pink" : "btn carousel__btn carousel__btn--lightGreen") } tabIndex="-1">
                    {indexNumber===0 &&  "Zobacz opis zabiegów"}
                    {indexNumber===1 &&  "Poznaj naszą ofertę"}
                    {indexNumber===2 &&  "Zobacz dane kontaktowe"}
                </Link>
                </div>

            </div>
        </div>
    )
}