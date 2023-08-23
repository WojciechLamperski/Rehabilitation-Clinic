'use client'
import Accordion from 'accordion-js';
import { useRef, useEffect } from 'react';

export default function Accordion(){

    const ref = useRef(null);

    useEffect(() => {
        import('accordion-js')
          .then(module => {

            const Accordion = module.default;

            if(ref.current!==null){
                const accordion = new Accordion(ref.current);
            }
            console.log(Accordion) 
            console.log(ref) 
          })
          .catch(error => {
            console.error('Error importing client-side file:', error);
          });

      }, []);
    return(
        <div className="container container--treatments accordion-container" ref={ref}>

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
    )
}