import Accordion from "@/components/Accordion/accordion"
import 'accordion-js/dist/accordion.min.css';

export const metadata = {
    title: "Zabiegi | NZOZ Rehabilitacja-Majowe",
};

export default function Treatments(){

    return(
        <>
            <section className="preperation main__section main__section--margins">

                <div className="card__container">
                    <div className="card--horizontal card">
                    <h1 className="card__title">Przed pierwszym zabiegiem:</h1>
                    <p className="card__desc">
                        Należy pamiętać, że każdy zabieg fizykalny stanowi formę leczenia specjalistycznego możliwą do wykonania
                        jedynie na podstawie wskazań określonych przez lekarza lub fizjoterapeutę. W przypadku braku skierowania
                        istnieje możliwość odbycia rehabilitacji jedynie po wcześniejszej konsultacji, na której nasi terapeuci
                        dobiorą optymalny zestaw zabiegów oraz wykluczą przeciwwskazania zdrowotne. Szczegóły dotyczące
                        przebiegu terapii są przedstawiane na wizycie fizjoterapeutycznej lub lekarskiej, jednak do większości
                        z nich nie trzeba się specjalnie przygotowywać. Zazwyczaj prosimy pacjenta o przyniesienie swojego
                        ręcznika i wygodnego stroju nie krępującego ruchów. Do niektórych zabiegów wymagane jest użycie
                        środków farmaceutycznych dostępnych w każdej aptece.
                    </p>
                    </div>
                    <img className="card__img" alt="pacjentka z lekarką uśmiechające się." src="img/treatments/patient.jpg" />
                </div>

            </section>

            <section className="treatments">
                <Accordion />
            </section>
        </>
    )
}