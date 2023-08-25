import Accordion from "@/components/Accordion/accordion"
import 'accordion-js/dist/accordion.min.css';
import ReactMarkdown from "react-markdown";

export default async function Treatments(){

    const resTreatments = await fetch("http://172.28.64.1:1337/api/treatments");
    const jsonTreatments = await resTreatments.json();
    const treatments = jsonTreatments.data;

    const resPreparation = await fetch("http://172.28.64.1:1337/api/preparation");
    const jsonPreparation = await resPreparation.json();
    const preparation = jsonPreparation.data;

    return(
        <>
            <section className="preperation main__section main__section--margins">

                <div className="card__container">
                    <div className="card--horizontal card">
                    <h1 className="card__title">Jak się przygotować do zabiegu</h1>
                    <ReactMarkdown className="card__desc">
                        {preparation.attributes.body}
                    </ReactMarkdown>
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

