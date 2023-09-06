export default async function Team(){

    const res = await fetch("http://172.28.64.1:1337/api/teams");
    const json = await res.json();
    const team = json.data;

    return(
        <section className="team main__section main__section--margins">
            <div className="team__wrapper">

                {team.map((member: {id: string, attributes: {imageURL: string, name:string, title:string} })=>{
                    return(
                        <div key={member.id} className="team__card card">
                            <img className="team__image" src={member.attributes.imageURL} alt="an image of one of our team members" />
                            <h3 className="team__name">
                                {member.attributes.name}
                            </h3>
                            <p className="team__degree">{member.attributes.title}</p>
                        </div>
                    )
                })}
                
                {/* <div className="team__card card">
                    <img className="team__image" src="img/team/team_01.jpg" alt="" />
                    <h3 className="team__name">
                        Lorem Ipsum
                    </h3>
                    <p className="team__degree">Lek. med. spec. fizjoterapii i balneoklimatologii</p>
                </div>

                <div className="team__card card">
                <img className="team__image" src="img/team/team_02.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Mgr rehabilitacji ruchowej</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_05.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Mgr rehabilitacji ruchowej</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_04.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Mgr fizjoterapii</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_01.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Lek. med. spec. fizjoterapii i balneoklimatologii</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_02.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Mgr rehabilitacji ruchowej</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_03.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Mgr rehabilitacji ruchowej</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_04.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Mgr fizjoterapii</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_01.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Lek. med. spec. fizjoterapii i balneoklimatologii</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_02.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Mgr rehabilitacji ruchowej</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_03.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Mgr rehabilitacji ruchowej</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_04.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Mgr fizjoterapii</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_01.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Lek. med. spec. fizjoterapii i balneoklimatologii</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_02.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Mgr rehabilitacji ruchowej</p>
                </div>
                <div className="team__card card">
                <img className="team__image" src="img/team/team_04.jpg" alt="" />
                <h3 className="team__name">
                    Lorem Ipsum
                </h3>
                <p className="team__degree">Mgr fizjoterapii</p>
                </div> */}
            </div>

        </section>
    )
}