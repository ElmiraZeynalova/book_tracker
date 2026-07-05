"use client";

import { signInWithMagicLink } from "@/lib/supabase/auth";
import {useAuthStore} from '@/stores/auth.store'
import { useState } from "react";

export default function Login(){
    const email = useAuthStore(state => state.email)
    const setEmail = useAuthStore(state => state.setEmail)
    const [sent, setSent] = useState<boolean>(false)

    async function handleSubmit(e: React.SyntheticEvent){
        e.preventDefault()
        const result = await signInWithMagicLink(email!)

        if(result.success){
            setSent(true)
        }
    }
    
    if(sent){
        return(
            <div>
                <h2>Chtck your email</h2>
                <p>We sent a magic link to {email}</p>
            </div>
        )
    }

    return(
        <div className="w-150">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="example@gmail.com" 
                    required
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
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
                        tracking-wide"
                    />
                <button 
                    type="submit"
                    className="
                            cursor-pointer
                            py-2
                            px-5
                            bg-none 
                            border-2 border-[#424240] 
                            rounded-md                         
                            text-white
                            font-vt323
                            text-xl
                            tracking-wide"
                    >SEND MAGIC LINK</button>
            </form>
        </div>
    )
}