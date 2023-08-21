'use client'
import { useState } from "react";
import PageTitle from "./pageTitle";
import Hamburger from "./hamburger";

export default function MenuWithHamburger(){

    const [toggle, setToggle] = useState(false);

    return(
        <>
              <nav className={toggle===true ? "header__menu menu menu--active" : "header__menu menu"} id="menu">
                <ul className="menu__list">
                 <PageTitle siteName="Zabiegi" />
                 <PageTitle siteName="Cennik" />
                 <PageTitle siteName="Rehabilitacje" />
                 <PageTitle siteName="Nasz Zespół" url="zespol"  />
                 <PageTitle siteName="Galeria" />
                 <PageTitle siteName="Kontakt" />
                </ul>
              </nav>
      
              <Hamburger toggle={toggle} setToggle={setToggle} />
        </>
    )
}