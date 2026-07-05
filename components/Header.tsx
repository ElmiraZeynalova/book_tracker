import NavItems from './NavItems'
import logo from '@/assets/logo.svg'

export default function Header(){
    return(
        <header className="flex items-center sticky top-0 right-0 left-0 bg-background gap-10 px-6 py-3 border-b-2 border-palest-green">
            <img
                src={logo.src}
                alt="BookVault logo"
                className="w-40 h-auto mr-auto"
                />
            <NavItems/>
        </header>
    )
}