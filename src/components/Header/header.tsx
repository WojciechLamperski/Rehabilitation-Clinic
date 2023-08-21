import Link from "next/link"
import MenuWithHamburger from "./menuWithHamburger"

export default function Header(){

    return(

          <header className="header">
            <div className="header--container container">
      
              <Link className="header__logo logo" href="/">
                <img className="logo__img" src="/img/logo/logo.png" />
              </Link>
              
              <MenuWithHamburger />
            
            </div>
          </header>
    )
}