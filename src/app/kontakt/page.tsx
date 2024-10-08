export const metadata = {
    title: "Kontakt | Rehabilitacja-Majowe",
};

export default function Contact(){
    return (
        <section className="contact main__section main__section--margins">
            <div className="contact__wrapper">

                <iframe className="google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1415.1943991605153!2d14.663345019442097!3d53.37790803186555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700a7b07c986695%3A0x466e1f81c377e111!2sNZOZ%20Rehabilitacja-Majowe%20s.c.!5e0!3m2!1spl!2spl!4v1683221503953!5m2!1spl!2spl" width="100%" height="450px" loading="lazy"></iframe>


                <div className="contact__jumbotron">
                    <div className="card contact__card contact__card--left ">
                        <ul className="contact__list">
                        <li className="contact__item">
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                            <path d="M776 569q-5-121-89-205t-205-89v-60q72 2 135.5 30.5T729 322q48 48 76.5 111.5T836 569h-60Zm-169 0q-5-50-40-84.5T482 445v-60q75 5 127.5 57T667 569h-60Zm188 367q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z" />
                            </svg>
                            <p className="contact__pargraph">
                            <a className="contact__link contact__link--top unsetLink" href="tel:+48914643945">(+48)914643945</a>
                            </p>

                        </li>
                        <li className="contact__item">
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                            <path d="M480.089 566Q509 566 529.5 545.411q20.5-20.588 20.5-49.5Q550 467 529.411 446.5q-20.588-20.5-49.5-20.5Q451 426 430.5 446.589q-20.5 20.588-20.5 49.5Q410 525 430.589 545.5q20.588 20.5 49.5 20.5ZM480 897q133-121 196.5-219.5T740 504q0-117.79-75.292-192.895Q589.417 236 480 236t-184.708 75.105Q220 386.21 220 504q0 75 65 173.5T480 897Zm0 79Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976Zm0-472Z" />
                            </svg>
                            <p className="contact__pargraph">
                            Jarosława Iwaszkiewicza 89 <br />
                            70-786 Szczecin
                            </p>

                        </li>
                        <li className="contact__item">
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                            <path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
                            </svg>
                            <p className="contact__pargraph">
                            <a className="contact__link" href="mailto:poradnia@rehabilitacja-majowe.pl">
                                poradnia@rehabilitacja-majowe.pl
                            </a>
                            </p>

                        </li>
                        <li className="contact__item">
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                            <path d="m627 769 45-45-159-160V363h-60v225l174 181ZM480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-82 31.5-155t86-127.5Q252 239 325 207.5T480 176q82 0 155 31.5t127.5 86Q817 348 848.5 421T880 576q0 82-31.5 155t-86 127.5Q708 913 635 944.5T480 976Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480 236q-140 0-240 100T140 576q0 140 100 240t240 100Z" />
                            </svg>
                            <p className="contact__pargraph">
                                pn, śr, pt: 7:30 - 18:00 <br/>
                                wt, czw: 7:30 - 19:00
                            </p>

                        </li>
                        </ul>
                    </div>
                    <div className="card contact__card  contact__card--right">
                        <table className="table">
                        <caption className="table__caption">
                            <span className="table__caption--wrapper">
                            <svg className="svg svg--block" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path d="M440 936v-60h340V572q0-58-25-111.5T688 366q-42-41-96-65.5T480 276q-58 0-112 24.5T272 366q-42 41-67 94.5T180 572v244h-20q-33 0-56.5-23.5T80 736v-80q0-23 11-40.5t29-28.5l3-53q9-73 41.5-132t81-100q48.5-41 109-63.5T480 216q66 0 126.5 22.5t108.5 64q48 41.5 80.5 100T837 533l3 52q18 9 29 26.5t11 38.5v92q0 22-11 39t-29 26v69q0 24.75-17.625 42.375T780 936H440Zm-80-290q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.625T390 616q0 12-8.625 21T360 646Zm240 0q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.625T630 616q0 12-8.625 21T600 646Zm-359-52q-4-59 16.5-107t55-81.5Q347 372 392 354t90-18q91 0 153 57.5T711 537q-94-1-165.5-50.5T435 358q-16 81-67.5 143.5T241 594Z" />
                            </svg> Rejestracja telefoniczna
                            </span>
                        </caption>
                        <tbody className="table__body">
                            <tr className="table__row">
                            <td className="table__cell" data-label="Day">pn</td>
                            <td className="table__cell" data-label="Time">8:00 - 15:00</td>
                            </tr>
                            <tr className="table__row">
                            <td className="table__cell" scope="row" data-label="Day">wt</td>
                            <td className="table__cell" data-label="Time">11:00 - 17:30</td>
                            </tr>
                            <tr className="table__row">
                            <td className="table__cell" scope="row" data-label="Day">śr</td>
                            <td className="table__cell" data-label="Time">8:00 - 15:00</td>
                            </tr>
                            <tr className="table__row">
                            <td className="table__cell" scope="row" data-label="Day">czw</td>
                            <td className="table__cell" data-label="Time">11:00 - 17:30</td>
                            </tr>
                            <tr className="table__row">
                            <td className="table__cell" scope="row" data-label="Day">pt</td>
                            <td className="table__cell" data-label="Time">8:00 - 15:00</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>

                </div>

            </div>

        </section>
    )
}

