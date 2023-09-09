import Link from "next/link"
import MenuWithHamburger from "./menuWithHamburger"

export default function Header(){

    return(

          <header className="header">
            <div className="header--container container">
      
              <Link className="header__logo logo" href="/">
                <img className="logo__img" src="/img/logo/logo.png" alt="a picture of our logo - a name of our business with circles in calm green colors behind" />
              </Link>
              
              <MenuWithHamburger />
            
            </div>
          </header>
    )
}