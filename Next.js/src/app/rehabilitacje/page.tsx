import ReactMarkdown from "react-markdown";

export default async function Rehab(){

    const res = await fetch("http://172.28.64.1:1337/api/rehabs");
    const json = await res.json();
    const rehabs = json.data;

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
                        Zgodnie z Rozporządzeniem Ministra Zdrowia w sprawie świadczeń
                        gwarantowanych z zakresu rehabilitacji leczniczej (Dz. U. z 2018 r.
                        poz. 465 z późn.zm [1].), zabiegi fizjoterapeutyczne w warunkach
                        domowych są udzielane świadczeniobiorcom z zaburzeniami funkcji
                        motorycznych spowodowanymi:

                        ogniskowymi uszkodzeniami mózgu (stanami po zatorach mózgowych,
                        udarach krwotocznych mózgu, urazach) - przez okres do 12 miesięcy od
                        dnia powstania ogniskowego uszkodzenia mózgu;
                        ciężkimi uszkodzeniami centralnego i obwodowego układu nerwowego
                        odpowiadającymi 5. stopniowi skali oceny stopnia inwalidztwa (warunku
                        tego nie stosuje się do dzieci do ukończenia 18. roku życia);
                        uszkodzeniem rdzenia kręgowego - przez okres 12 miesięcy od dnia
                        powstania uszkodzenia rdzenia kręgowego;
                        chorobami przewlekle postępującymi, w szczególności: miopatiami,
                        chorobą Parkinsona, zapaleniem wielomięśniowym, rdzeniowym zanikiem
                        mięśni, guzami mózgu, procesami demielinizacyjnymi, kolagenozami,
                        przewlekłymi zespołami pozapiramidowymi, reumatoidalnym zapaleniem
                        stawów;
                        chorobami zwyrodnieniowymi stawów biodrowych lub kolanowych, po
                        zabiegach endoprotezoplastyki stawu - przez okres 6 miesięcy od dnia
                        wykonania operacji;
                        urazami kończyn dolnych - przez okres 6 miesięcy od dnia powstania
                        urazu;
                        osobom w stanie wegetatywnym lub apalicznym.
                        Skierowanie na zabiegi fizjoterapii w warunkach domowych wystawia
                        lekarz podstawowej opieki zdrowotnej (POZ) lub inny lekarz
                        ubezpieczenia zdrowotnego.

                        Skierowanie na zabiegi fizjoterapeutyczne w warunkach domowych jest
                        ważne 30 dni od daty wystawienia. W tym czasie skierowanie musi
                        zostać zarejestrowane, bez względu na to, kiedy rozpocznie się
                        rehabilitacja.
                    </p>
                    </div>
                </div>
            </section>
        </>
    )
}