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

            <section className="main__section main__section--margins">
            <div className="card__container">
                    <div className="card">
                        <h1 className="rehab__title">
                            Rehabilitacja w warunkach domowych
                        </h1>
                        <ReactMarkdown className="card__desc">
                            {rehabs[0].attributes.body} 
                        </ReactMarkdown>
                    </div>
                </div>
            </section>
            <section className="main__section main__section--margins">
                <div className="card__container">
                    <div className="card">
                        <h1 className="rehab__title">Rehabilitacja ambulatoryjna</h1>
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