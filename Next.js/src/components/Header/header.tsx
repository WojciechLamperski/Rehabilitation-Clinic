import Link from "next/link"
import MenuWithHamburger from "./menuWithHamburger"
import Image from "next/image"

export default function Header(){

    return(

          <header className="header">
            <div className="header--container container">
      
              <Link className="header__logo logo" href="/">
                <Image alt="" className="logo__img" src="/img/logo/logo.png" />
              </Link>
              
              <MenuWithHamburger />
            
            </div>
          </header>
    )
}