import Header from "@/components/Header"

export default function Layout({children}: {children: React.ReactNode}){
    return(
        <div className="relative">
            <Header/>
            <main>{children}</main>
        </div>
    )
}