"use client";

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBar(){
    const [query, setQuery] = useState<string>("")
    const router = useRouter()

    function handleSubmit(e: React.SyntheticEvent){
        e.preventDefault();
        router.push(`/search?q=${encodeURIComponent(query)}`)
    }

    return(
        <div className="group flex w-full items-center border-2 border-palest-green px-3 py-2">
            <svg className="w-12 h-12 fill-pale-green group-focus-within:fill-bright-green" viewBox="0 0 32 32" version="1.1" stroke="#000000" strokeWidth="0.00020"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.044"></g><g id="SVGRepo_iconCarrier"> <path d="M14.392 17.894h6.432v1.608h-6.432v-1.608zM9.568 19.502l4.824-4.824-4.824-4.824-1.608 1.608 3.216 3.216-3.216 3.216z"></path> </g></svg>
            <form className="flex grow gap-3" onSubmit={handleSubmit}>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="SEARCH VAULT..." 
                    className="
                        grow
                        py-2
                        px-3
                        bg-[#2C2C2A]
                        border-2 border-[#424240]
                        rounded-md
                        focus:border-bright-green
                        focus:ring-0
                        focus:outline-none
                        text-white
                        font-vt323
                        text-xl
                        placeholder:text-pale-green
                        placeholder:font-vt323
                        placeholder:text-xl
                        tracking-wide
                    "
                    />
                    <button className="
                        cursor-pointer
                        py-2
                        px-5
                        bg-none 
                        border-2 border-[#424240] 
                        rounded-md                         
                        text-white
                        font-vt323
                        text-xl
                        tracking-wide">
                            SCAN</button>
            </form>

        </div>
    )
}