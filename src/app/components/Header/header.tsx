'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"

export default function Header(){

    const pathname = usePathname();

    return(

          <header className="header">
            <div className="header--container container">
      
              <Link className="header__logo logo" href="/">
                <img className="logo__img" src="/img/logo/logo.png" />
              </Link>
      
              <nav className="header__menu menu" id="menu">
      
                <ul className="menu__list">
                  <li className={pathname==="/zabiegi" ? "menu__item menu__item--active" : "menu__item"}>
                    <Link href="/zabiegi" className="menu__link">
                      Zabiegi
                    </Link>
                  </li>
      
                  <li className={pathname==="/cennik" ? "menu__item menu__item--active" : "menu__item"}>
                    <Link href="/cennik" className="menu__link">
                      Cennik
                    </Link>
                  </li>
      
                  <li className={pathname==="/rehabilitacje" ? "menu__item menu__item--active" : "menu__item"}>                   
                    <Link href="/rehabilitacje" className="menu__link">
                      Rehabilitacje
                    </Link>
                  </li>
      
      
                  <li className={pathname==="/zespol" ? "menu__item menu__item--active" : "menu__item"}>                   
                    <Link href="/zespol" className="menu__link">
                      Nasz Zespół
                    </Link>
                  </li>
      
      
      
                  <li className={pathname==="/galeria" ? "menu__item menu__item--active" : "menu__item"}> 
                    <Link href="/galeria" className="menu__link">
                      Galeria
                    </Link>
                  </li>
      
      
                  <li className={pathname==="/kontakt" ? "menu__item menu__item--active" : "menu__item"}> 
                    <Link href="/kontakt" className="menu__link">
                      Kontakt
                    </Link>
                  </li>
      
                </ul>
              </nav>
      
              <button className="header__hamburger hamburger" id="hamburger">
                <span className="hamburger__line"></span>
              </button>
            </div>
          </header>
    )
}