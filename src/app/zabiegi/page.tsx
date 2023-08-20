export default function Treatments(){

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
                <img className="card__img" alt="pacjentka z lekarką uśmiechające się." src="img/treatments/patient.jpg" aboutUsImage />
            </div>

        </section>

        <section className="treatments">

            <div className="container container--treatments accordion-container">

                <div className="ac card card--white">
                <h2 className="services__title services__title--treatments">
                    <button className="ac-trigger"> wizyta fizjoterapeutyczna</button>
                </h2>
                <div className="ac-panel services__desc">
                    <p className="ac-text">Nulla et sodales nisl. Nam auctor quis odio eu congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div className="ac card card--white">
                <h2 className="services__title services__title--treatments">
                    <button className="ac-trigger">terapia indywidualna</button>
                </h2>
                <div className="ac-panel services__desc">
                    <p className="ac-text">Nulla et sodales nisl. Nam auctor quis odio eu congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div className="ac card card--white">
                <h2 className="services__title services__title--treatments">
                    <button className="ac-trigger">elektroterapia</button>
                </h2>
                <div className="ac-panel services__desc">
                    <p className="ac-text">Nulla et sodales nisl. Nam auctor quis odio eu congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div className="ac card card--white">
                <h2 className="services__title services__title--treatments">
                    <button className="ac-trigger">Światłolecznictwo</button>
                </h2>
                <div className="ac-panel services__desc">
                    <p className="ac-text">Nulla et sodales nisl. Nam auctor quis odio eu congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div className="ac card card--white">
                <h2 className="services__title services__title--treatments">
                    <button className="ac-trigger">Magnetoterapia</button>
                </h2>
                <div className="ac-panel services__desc">
                    <p className="ac-text">Nulla et sodales nisl. Nam auctor quis odio eu congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div className="ac card card--white">
                <h2 className="services__title services__title--treatments">
                    <button className="ac-trigger">laseroterapia</button>
                </h2>
                <div className="ac-panel services__desc">
                    <p className="ac-text">Nulla et sodales nisl. Nam auctor quis odio eu congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div className="ac card card--white">
                <h2 className="services__title services__title--treatments">
                    <button className="ac-trigger">krioterapia</button>
                </h2>
                <div className="ac-panel services__desc">
                    <p className="ac-text">Nulla et sodales nisl. Nam auctor quis odio eu congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div className="ac card card--white">
                <h2 className="services__title services__title--treatments">
                    <button className="ac-trigger">Ultradźwięki</button>
                </h2>
                <div className="ac-panel services__desc">
                    <p className="ac-text">Nulla et sodales nisl. Nam auctor quis odio eu congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div className="ac card card--white">
                <h2 className="services__title services__title--treatments">
                    <button className="ac-trigger">wodolecznictwo</button>
                </h2>
                <div className="ac-panel services__desc">
                    <p className="ac-text">Nulla et sodales nisl. Nam auctor quis odio eu congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div className="ac card card--white">
                <h2 className="services__title services__title--treatments">
                    <button className="ac-trigger">masaż</button>
                </h2>
                <div className="ac-panel services__desc">
                    <p className="ac-text">Nulla et sodales nisl. Nam auctor quis odio eu congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>

            </div>

        </section>

        {/* <script>
        new Accordion('.accordion-container');
        </script> */}
        </>
    )
}