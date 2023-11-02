'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"

export default function PageTitle(Props: {siteName: string, url?: string, toggle: boolean, setToggle: any}){
    const { siteName, url, toggle, setToggle } = Props;
    const pathname = usePathname();
    const title = `${siteName.charAt(0).toUpperCase() + siteName.slice(1)}`;
       

    return(
        <li onClick={()=>{toggle===true && setToggle(false)}} className={pathname===(url ? url : `/${siteName.toLowerCase().replace(/\s/g, '')}`) ? "menu__item menu__item--active" : "menu__item"}>
            <Link href={url ? url : `/${siteName.toLowerCase().replace(/\s/g, '')}`} className="menu__link">
                {title}
            </Link>
        </li>
    )
}