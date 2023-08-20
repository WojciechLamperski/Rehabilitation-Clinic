export default function Header(){
    return(

          <header className="header">
            <div className="header--container container">
      
              <a className="header__logo logo " href="/">
                <img className="logo__img" src="/img/logo/logo.png" />
              </a>
      
              <nav className="header__menu menu" id="menu">
      
                <ul className="menu__list">
                  <li className="menu__item">
                    <a href="/zabiegi" className="menu__link">
                      Zabiegi
                    </a>
                  </li>
      
                  <li className="menu__item">
                    <a href="/cennik" className="menu__link">
                      Cennik
                    </a>
                  </li>
      
                  <li className="menu__item">                   
                    <a href="/rehabilitacje" className="menu__link">
                      Rehabilitacje
                    </a>
                  </li>
      
      
                  <li className="menu__item">                   
                    <a href="/zespol" className="menu__link">
                      Nasz Zespół
                    </a>
                  </li>
      
      
      
                  <li className="menu__item"> 
                    <a href="/galeria" className="menu__link">
                      Galeria
                    </a>
                  </li>
      
      
                  <li className="menu__item"> 
                    <a href="/kontakt" className="menu__link">
                      Kontakt
                    </a>
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