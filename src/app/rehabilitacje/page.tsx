export default function Rehab(){
    return(
        <>
            <h1 className="heading">Oferujemy dwa rodzaje rehabilitacji</h1>

            <section className="main__section main__section--margins">
            <div className="card__container">
                    <div className="card">
                        <h1 className="rehab__title">
                            <svg className="rehab__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg>
                            Rehabilitacja w warunkach domowych
                        </h1>
                        <p className="card__desc">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                        </p>
                    </div>
                </div>
            </section>
            <section className="main__section main__section--margins">
                <div className="card__container">
                    <div className="card">
                    <h1 className="rehab__title">
                            <svg className="rehab__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M426-136v-250L210-261l-55-93 217-126-216-125 54-93 216 125v-251h108v251l216-125 54 93-216 125 217 126-55 93-216-125v250H426Z"/></svg>
                            Rehabilitacja ambulatoryjna
                        </h1>
                    <p className="card__desc">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                    </p>
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