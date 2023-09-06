'use client'
import Accordion from 'accordion-js';
import { useRef, useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";

export default function Accordion({treatments}){

    const [array, setArray] = useState(treatments)

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

            {array.map((treatment: {id: string, attributes: {name:string, body: string}})=>{
                return(
                    <div key={treatment.id} className="ac card card--white">
                        <h2 className="services__title services__title--treatments">
                            <button className="ac-trigger">{treatment.attributes.name}</button>
                        </h2>
                        <div className="ac-panel services__desc">
                            <ReactMarkdown className="ac-text">{treatment.attributes.body}</ReactMarkdown>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}