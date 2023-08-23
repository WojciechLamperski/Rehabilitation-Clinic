'use client'
import { useState } from "react"
import GalleryCard from "./galleryCard";

export default function Gallery(){

    const [popupVisible, setPopupVisible] = useState(false);
    const [visibleImage, setVisibleImage] = useState(0);

    return(
        <section className="team main__section main__section--margins">
            <div className="gallery__wrapper">
                <GalleryCard imageNumber={1} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={2} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={3} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={4} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={5} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={6} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={7} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={8} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={9} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={10} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={11} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={12} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={13} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={14} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={15} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={16} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={17} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={18} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={19} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={20} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={21} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={22} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={23} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={24} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
                <GalleryCard imageNumber={25} setVisibleImage={setVisibleImage} setPopupVisible={setPopupVisible} />
            </div>
            <div className={popupVisible ? "popup" : "popup hidden"} id="js-popup">
                <button className="popup__button popup__button--close" id="js-popup-close" onClick={()=>{setPopupVisible(false)}}>
                <svg className="popup__svg" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                    <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                </svg>
                </button>
                <img src={`img/gallery/${visibleImage}.jpg`} className="popup__img" id="js-popup-img" />

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