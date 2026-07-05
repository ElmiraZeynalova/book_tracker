"use client";

import {useRouter} from 'next/navigation'

type Props = {
    children: React.ReactNode
}

export default function BackButton({children}: Props){
    const router = useRouter()
    return(
        <button onClick={() => router.back()}>{children}</button>
    )
}