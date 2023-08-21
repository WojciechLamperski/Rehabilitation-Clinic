'use client'

export default function Hamburger({toggle, setToggle}){
    return(
        <button onClick={()=>{
            setToggle(true)
        }} className={toggle===true ? "header__hamburger hamburger hamburger--active" : "header__hamburger hamburger"}  id="hamburger">
            <span className="hamburger__line"></span>
        </button>
    )
}