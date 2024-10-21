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

    return(
       <>
           <button onClick={startCounter}>Start counter</button>
           <button onClick={()=>{setCounting(false)}}>Stop counter</button>
           <div>{seconds}</div>
           <button onClick={countRefFunc}>Count with Ref</button>
           <button onClick={countStateFunc}>Count with State</button>

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
               <div className={popupVisible ? "popup" : "popup hidden"} id="js-popup">
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