import ReactMarkdown from "react-markdown";

export default async function Rehab(){

    const resRehabs = await fetch("http://172.28.64.1:1337/api/rehabs");
    const jsonRehabs = await resRehabs.json();
    const rehabs = jsonRehabs.data;

    const resFunding = await fetch("http://172.28.64.1:1337/api/funding");
    const jsonFunding = await resFunding.json();
    const funding = jsonFunding.data;

    return(
        <>
            <h1 className="heading">Oferujemy dwa rodzaje rehabilitacji</h1>

            <section className="main__section main__section--margins main__section--rehab">
            <div className="card__container">
                    <div className="card">
                        <h1 className="rehab__title">
                            <svg className="rehab__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg>
                            Rehabilitacja w warunkach domowych
                        </h1>
                        <ReactMarkdown className="card__desc">
                            {rehabs[0].attributes.body} 
                        </ReactMarkdown>
                    </div>
                </div>
            </section>
            <section className="main__section main__section--margins main__section--rehab">
                <div className="card__container">
                    <div className="card">
                        <h1 className="rehab__title">
                            <svg className="rehab__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M426-136v-250L210-261l-55-93 217-126-216-125 54-93 216 125v-251h108v251l216-125 54 93-216 125 217 126-55 93-216-125v250H426Z"/></svg>
                            Rehabilitacja ambulatoryjna
                        </h1>
                        <ReactMarkdown className="card__desc">
                            {rehabs[1].attributes.body}  
                        </ReactMarkdown>
                    </div>
                </div>
            </section>

            <h1>Informacja w sprawie świadczeń</h1>
            <section className="main__section main__section--margins">
                <div className="card__container">
                    <div className="card">
                    <p className="card__desc">
                       {funding.attributes.body}
                    </p>
                    </div>
                </div>
            </section>
        </>
    )
}