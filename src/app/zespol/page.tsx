import Image from "next/image"

export default function Team(){
    return(
        <section className="team main__section main__section--margins">
            <div className="team__wrapper">
                <div className="team__card card">
                    <div className="team__image team__image--wrapper">
                        <Image sizes="(max-width: 961px) 270px, (max-width: 1170px) 50vw, 33vw" fill src="/img/team/Irena Waligorska 1.jpg" alt="" />
                    </div>
                    <h3 className="team__name">
                        Dr Irena Waligorska
                    </h3>
                    <p className="team__degree">Lek. med. spec. fizjoterapii i balneoklimatologii</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Katarzyna Rusiecka 2.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Fizjoterapeuta</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Przemysław Duda 3.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Fizjoterapeuta</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Idalia Jarosz 4.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Mgr fizjoterapii</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Daria Mazgoła 5.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Lek. med. spec. fizjoterapii i balneoklimatologii</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Agnieszka Grzegory 6.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Fizjoterapeuta</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Roger Nowacki 7.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Fizjoterapeuta</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Oksana Kaniuk 8.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Mgr fizjoterapii</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Ewa Bajraszewska.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Lek. med. spec. fizjoterapii i balneoklimatologii</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Joanna Zakrzewska.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Fizjoterapeuta</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Małgorzata Łężna.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Fizjoterapeuta</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Marek Stasiak.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Mgr fizjoterapii</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Mariola Bejnarowicz.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Lek. med. spec. fizjoterapii i balneoklimatologii</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Mariola Celmer.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Fizjoterapeuta</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/Patrycja Kawałek.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Mgr fizjoterapii</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/empty.jpg" alt="" />
                    <h3 className="team__name">
                    Karolina Świderska-Karlikowska
                    </h3>
                    <p className="team__degree">Mgr fizjoterapii</p>
                </div>
                <div className="team__card card">
                    <img className="team__image" src="img/team/empty.jpg" alt="" />
                    <h3 className="team__name">
                        Danuta Kamińska 
                    </h3>
                    <p className="team__degree">Masażysta</p>
                </div>
            </div>

        </section>
    )
}