'use client'
import { useState } from "react";
import PageTitle from "./pageTitle";
import Hamburger from "./hamburger";

export default function MenuWithHamburger({ toggle, setToggle }: { toggle: boolean, setToggle: Function }){

    return(
        <>
              <nav className={toggle===true ? "header__menu menu menu--active" : "header__menu menu"} id="menu">
                <ul className="menu__list">
                 <PageTitle url={'/'} setToggle={setToggle} toggle={toggle} siteName="Home" />
                 <PageTitle setToggle={setToggle} toggle={toggle} siteName="Zabiegi" />
                 <PageTitle setToggle={setToggle} toggle={toggle} siteName="Cennik" />
                 <PageTitle setToggle={setToggle} toggle={toggle} siteName="Rehabilitacja" />
                 <PageTitle setToggle={setToggle} toggle={toggle} siteName="Nasz Zespół" url="/zespol"  />
                 <PageTitle setToggle={setToggle} toggle={toggle} siteName="Galeria" />
                 <PageTitle setToggle={setToggle} toggle={toggle} siteName="Kontakt" />
                </ul>
              </nav>
      
              <Hamburger toggle={toggle} setToggle={setToggle} />
        </>
    )
}