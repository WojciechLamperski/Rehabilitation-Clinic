import Accordion from "@/components/Accordion/accordion"
import 'accordion-js/dist/accordion.min.css';
import Image from "next/image";
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
                    <h1 className="card__title card--treatments treatments--title">
                        <svg className="treatments__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M440-497Zm0 376-99-91q-87-80-144.5-137T104-452q-35-46-49.5-86.5T40-625q0-90 60.5-152.5T250-840q57 0 105.5 26.5T440-736q42-54 89-79t101-25q80.576 0 135.288 55Q820-730 832-652h-59q-9-55-46.5-91.5T630-780q-51 0-95 31t-71 88h-49q-26-56-70-87.5T250-780q-66 0-108 44.5T100-625q0 39 15.5 76t53.888 84.067q38.388 47.068 104.5 110Q340-292 440-200q32-29 60.5-54t56.5-49l6.632 6.474L578-282.5l14.368 14.026L599-262q-27 24-56 49t-62 55l-41 37Zm290-159v-130H600v-60h130v-130h60v130h130v60H790v130h-60Z"/></svg>
                        Jak się przygotować do zabiegu
                    </h1>
                    <ReactMarkdown className="card__desc">
                        {preparation.attributes.body}
                    </ReactMarkdown>
                    </div>
                    <Image className="card__img" alt="pacjentka z lekarką uśmiechające się." src="img/treatments/patient.jpg" />
                </div>

            </section>

            <section className="treatments">
                <Accordion treatments={treatments} />
            </section>
        </>
    )
}

