import Link from "next/link"
import TextLink from "./textLink";

export default function Header(){

    return(

          <header className="header">
            <div className="header--container container">
      
              <Link className="header__logo logo" href="/">
                <img className="logo__img" src="/img/logo/logo.png" />
              </Link>
      
              <nav className="header__menu menu" id="menu">
      
                <ul className="menu__list">
                 <TextLink siteName="Zabiegi" />
                 <TextLink siteName="Cennik" />
                 <TextLink siteName="Rehabilitacje" />
                 <TextLink siteName="Nasz Zespół" url="zespol"  />
                 <TextLink siteName="Galeria" />
                 <TextLink siteName="Kontakt" />
                </ul>
              </nav>
      
              <button className="header__hamburger hamburger" id="hamburger">
                <span className="hamburger__line"></span>
              </button>
            </div>
          </header>
    )
}