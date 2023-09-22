'use client'
import { useState } from "react"
import GalleryCard from "../../components/GalleryCard/galleryCard";

export default function Gallery(){

    const [popupVisible, setPopupVisible] = useState(false);
    const [visibleImage, setVisibleImage] = useState(0);

    return(
        <section className="team main__section main__section--margins">
            <div className="gallery__wrapper">
                {[...Array(16)].map((x, i) =>
                    <GalleryCard key={i+1} imageNumber={i+1} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                )}
            </div>
            <div className={popupVisible ? "popup" : "popup hidden"} id="js-popup">
                <button className="popup__button popup__button--close" id="js-popup-close" onClick={()=>{setPopupVisible(false)}}>
                <svg className="popup__svg" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                    <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                </svg>
                </button>
                <img className="popup__img" id="js-popup-img" src={`img/gallery/${visibleImage}.jpg`} alt="" />

                <button onClick={
                    visibleImage === 25 ? (()=>{setVisibleImage(1)}) : (()=>{setVisibleImage(visibleImage + 1)}) 
                } className="popup__button popup__button--arrow popup__button--arrow-right" id="js-popup-arrow--right">
                <svg className="popup__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="22.8">
                    <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                </svg>
                </button>

                <button onClick={
                    visibleImage === 1 ? (()=>{setVisibleImage(25)}) : (()=>{setVisibleImage(visibleImage - 1)}) 
                } className="popup__button popup__button--arrow popup__button--arrow-left" id="js-popup-arrow--left">
                <svg className="popup__svg popup__svg--left" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="22.8">
                    <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                </svg>
                </button>
            </div>
        </section>
    )
}