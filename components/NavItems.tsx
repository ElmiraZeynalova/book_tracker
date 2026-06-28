"use client";

import { NAV_ITEMS } from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavItems(){
    const pathname = usePathname()

    function isActive(path: string){
        if(path === '/') return pathname === '/'
        return pathname.startsWith(path)
    }

    const base = "font-vt323 text-lg tracking-widest text-pale-green";
    const active = "font-vt323 text-lg tracking-widest text-bright-green underline underline-offset-5";

    return(
        <div className="flex gap-5 items-center">
            {NAV_ITEMS.map(item => (
                <Link 
                    key={item.href} 
                    href={item.href} 
                    className={`${isActive(item.href) ? active : base}`}
                    >{item.label}</Link>
            ))}
        </div>
    )
}