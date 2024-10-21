'use client'
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import GalleryCard from "../../components/GalleryCard/galleryCard";

export default function Gallery(){

    const [popupVisible, setPopupVisible] = useState(false);
    const [visibleImage, setVisibleImage] = useState(0);

    // ------------------------------------------------

    const ref = useRef(null);
    // const scrollToBottom = () => {
    //     scroll.current?.scrollIntoView({ behavior: 'smooth' });
    // };
    const test = () => {
        ref.current?.alertHi();
    };

    // ------------------------------------------------

    const [countState, setCountState] = useState(0);
    const countRef = useRef(0);

    useEffect(()=>{
        console.log(countState);
        // return () => {
        //     setCountState(0);
        // }
    }, [countState])

    const countStateFunc = () => {
        setCountState((prev)=>prev+1)
    };

    // Watch out for pitfall: https://react.dev/reference/react/useRef example below is good but still good to know.
    const countRefFunc = () => {
        countRef.current = countRef.current + 1;
        console.log(countRef.current);
    };

    // ------------------------------------------------

    const [counting, setCounting] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    useEffect(()=>{
        if(counting && seconds===0){
            intervalRef.current = setInterval(()=>{setSeconds((prev)=>prev+1)}, 100);
        } else {
            if(intervalRef.current){
                clearInterval(intervalRef.current)
                intervalRef.current = null
                setCounting(false);
            }
        }

        return () => {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }, [counting])

    const startCounter = () => {
        setSeconds(0)
        setCounting(true);
    };

    // ------------------------------------------------
    // ------------------ TO DO LIST ------------------

    // const [list, setList] = useState([]);
    // const [input, setInput] = useState('');
    //
    // const addToList = (e) => {
    //     e.preventDefault()
    //     setList((prev)=>[...prev, input]);
    // }

    const [list, setList] = useState([]);
    const [input, setInput] = useState('');
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        if(update){
            const search = list.find(x => x.key === input)
            console.log(search)
            if(search){
                const position = list.findIndex(x => x.key === input)
                const newList = list
                newList[position].value += 1
                setList(newList);
            }
            else{
                setList((prev) => {
                    return [...prev, { 'key': input, 'value': 1 } ]
                });
            }
            setUpdate(false)
        }
    }, [list, update]);

    const addToList = (e) => {
        e.preventDefault()
        setUpdate(true)
    }

    // ------------------------------------------------

    const [pokemon, setPokemon] = useState('');

    useEffect(() => {
        async function fetchPokemon (){
            await fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON response
            }).then((jsonData) => {
                setPokemon(jsonData.weight);
            }).catch()
        }

        if(!pokemon){
            void fetchPokemon()
        }else{
            console.log(pokemon);
        }
    }, [pokemon]);

    return(
       <>
           <button onClick={startCounter}>Start counter</button>
           <button onClick={() => {
               setCounting(false)
           }}>Stop counter
           </button>
           <div>{seconds}</div>
           <button onClick={countRefFunc}>Count with Ref</button>
           <button onClick={countStateFunc}>Count with State</button>

           <form onSubmit={addToList}>
               <br/>
               <label htmlFor="todo">Add to list:</label>
               <br/>
               <input onChange={(e)=>{setInput(e.target.value)}} value={input} type="text" id="todo"></input>
               <br/>
               <button type="submit">Submit</button>
           </form>

           <br/>
           <ul>
               {list.map((element)=>{
                    return(
                       // Don't use index as key.
                       // https://www.youtube.com/watch?v=cyAbjx0mfKM
                       // https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements
                       <li key={element.key}>{element.key} : {element.value}</li>
                       // Instead what I would do is use the value of element as unique id, and when there is the second same value input simply add one more to it.
                       // That would require the creation of an object that holds how many values exist
                    )
               })}
           </ul>

           <div>Did you know that Pikachus weight is {pokemon} kilograms? :o</div>

           {/*Previously had scrollToBottom*/}
           <button onClick={test}>Scroll down</button>
           <section className="team main__section main__section--margins">
               <div className="gallery__wrapper">
                   {[...Array(16)].map((x, i) =>
                      i === 15 ? (
                         // <GalleryCard scrollRef={scroll} key={i + 1} imageNumber={i + 1} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible}/>
                         <GalleryCard ref={ref} key={i + 1} imageNumber={i + 1} setVisibleImage={setVisibleImage}
                                      setPopupVisible={setPopupVisible}/>
                      ) : (
                         <GalleryCard key={i + 1} imageNumber={i + 1} setVisibleImage={setVisibleImage}
                                      setPopupVisible={setPopupVisible}/>
                      )
                   )}
               </div>
               <div className={popupVisible ? 'popup' : 'popup hidden'} id="js-popup">
                   <button className="popup__button popup__button--close" id="js-popup-close" onClick={() => {
                       setPopupVisible(false)
                   }}>
                       <svg className="popup__svg" xmlns="http://www.w3.org/2000/svg" height="30"
                            viewBox="0 -960 960 960" width="30">
                           <path
                              d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
                       </svg>
                   </button>
                   <img className="popup__img" id="js-popup-img" src={`img/gallery/${visibleImage}.jpg`} alt=""/>

                   <button onClick={
                       visibleImage === 25 ? (() => {
                           setVisibleImage(1)
                       }) : (() => {
                           setVisibleImage(visibleImage + 1)
                       })
                   } className="popup__button popup__button--arrow popup__button--arrow-right"
                           id="js-popup-arrow--right">
                       <svg className="popup__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960"
                            width="22.8">
                           <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"/>
                       </svg>
                   </button>

                   <button onClick={
                       visibleImage === 1 ? (() => {
                           setVisibleImage(25)
                       }) : (() => {
                           setVisibleImage(visibleImage - 1)
                       })
                   } className="popup__button popup__button--arrow popup__button--arrow-left" id="js-popup-arrow--left">
                       <svg className="popup__svg popup__svg--left" xmlns="http://www.w3.org/2000/svg" height="48"
                            viewBox="0 96 960 960" width="22.8">
                           <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"/>
                       </svg>
                   </button>
               </div>
           </section>
       </>
    )
}