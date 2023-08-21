'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"

export default function TextLink({siteName, url}){

    const pathname = usePathname();
    const title = `${siteName.charAt(0).toUpperCase() + siteName.slice(1)}`;
       

    return(
        <li className={pathname===(url ? url : `/${siteName.toLowerCase().replace(/\s/g, '')}`) ? "menu__item menu__item--active" : "menu__item"}>
            <Link href={url ? url : `/${siteName.toLowerCase().replace(/\s/g, '')}`} className="menu__link">
                {title}
            </Link>
        </li>
    )
}