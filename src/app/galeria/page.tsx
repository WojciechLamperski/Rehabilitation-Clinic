'use client'
import { useState } from "react"

export default function Gallery(){

    const [popupVisible, setPopupVisible] = useState(false);
    const [visibleImage, setVisibleImage] = useState(0);

    return(
        <section className="team main__section main__section--margins">
            <div className="gallery__wrapper">
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(1);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/1.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg gallery__svg-overlay" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(2);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/2.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(3);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/3.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(4);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/4.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(5);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/5.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(6);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/6.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(7);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/7.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(8);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/8.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(9);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/9.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(10);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/10.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(11);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/11.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(12);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/12.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(13);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/13.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(14);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/14.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(15);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/15.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(16);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/16.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(17);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/17.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(18);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/18.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(19);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/19.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(20);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/20.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(21);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/21.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(22);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/22.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(23);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/23.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(24);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/24.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
                <div className="gallery__card" onClick={()=>{
                    setVisibleImage(25);
                    setPopupVisible(true);
                }}>
                    <img src="img/gallery/25.jpg" alt="" className="gallery__image" />
                    <div tabIndex="0" className="gallery__overlay js-thumbnail">
                        <svg className="gallery__svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                        </svg>
                    </div>
                </div>
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