"use client";

import clsx from "clsx";
import {useRouter} from 'next/navigation'

type Props = {
    children: React.ReactNode
    isActive: boolean
    updateStatus: (status: string) => Promise<void>
    status: string
}

export default function StatusButton({children, isActive, updateStatus, status}: Props){
    const router = useRouter();
    async function handleClick(){
        await updateStatus(status)
        router.refresh();
    }

    return(
        <button className={clsx(
        'border px-3 py-1 text-xs tracking-widest',
        isActive 
            ? 'border-green-400 text-green-400 bg-green-400/10' 
            : 'border-green-400/30 text-green-400/50'
        )}
        onClick={handleClick}>
            {children}
        </button>
    )
}