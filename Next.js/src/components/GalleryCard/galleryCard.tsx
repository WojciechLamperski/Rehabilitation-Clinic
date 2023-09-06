

export default function GalleryCard({setVisibleImage, setPopupVisible, imageNumber}){

    return(
        <div className="gallery__card" onClick={()=>{
            setVisibleImage(imageNumber);
            setPopupVisible(true);
        }}>
            <img alt="a photo of one of our equipments" src={`img/gallery/${imageNumber}.jpg`} className="gallery__image" />
            <div tabIndex={0} className="gallery__overlay js-thumbnail">
                <svg className="gallery__svg gallery__svg-overlay" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z" />
                </svg>
            </div>
        </div>
    )

}