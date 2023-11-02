'use client'
import Link from "next/link"
import MenuWithHamburger from "./menuWithHamburger"
import { useState } from "react";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    return(
          <header className="header">
            <div className="header--container container">
              <Link onClick={() => toggle===true && setToggle(false)} className="header__logo logo" href="/">
                <img className="logo__img" src="/img/logo/logo.png" alt="a picture of our logo - a name of our business with circles in calm green colors behind" />
              </Link>
              
              <MenuWithHamburger setToggle={setToggle} toggle={toggle} />
            </div>
          </header>
    )
}