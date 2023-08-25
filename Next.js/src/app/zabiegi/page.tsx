import Accordion from "@/components/Accordion/accordion"
import 'accordion-js/dist/accordion.min.css';

export default async function Treatments(){

    const res = await fetch("http://172.28.64.1:1337/api/treatments");
    const json = await res.json();
    const treatments = json.data;

    console.log(treatments)

    return(
        <>
            <section className="preperation main__section main__section--margins">

                <div className="card__container">
                    <div className="card--horizontal card">
                    <h1 className="card__title">Jak się przygotować do zabiegu</h1>
                    <p className="card__desc">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                    </p>
                    </div>
                    <img className="card__img" alt="pacjentka z lekarką uśmiechające się." src="img/treatments/patient.jpg" />
                </div>

            </section>

            <section className="treatments">
                <Accordion treatments={treatments} />
            </section>
        </>
    )
}

