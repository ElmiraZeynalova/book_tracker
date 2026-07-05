"use server";

import BackButton from '@/components/BackButton'
import StatusButton from '@/components/StatusButton'
import { getOrCreateBook, updateBookStatus } from "@/lib/supabase/crud"
import { revalidatePath } from "next/cache";

type Props = {
    params: Promise<{id: string}>
}

export default async function BookPage({params}: Props){
    const {id} = await params
    const book = await getOrCreateBook(id)

    const currentBookStatus = book.status

    async function updateStatus(status: string){
        "use server";
        await updateBookStatus(id, status)
        revalidatePath(`/books/${id}`);
    }
    
    return(
        <div>
            <BackButton>Back to search</BackButton>
            <section>
                <img src={book.cover_url}/>
            </section>
            <section>
                <p>{book.description}</p>
            </section>
            <section className="flex gap-10">
                {["queued", "reading", "read"].map(status => (
                    <StatusButton key={status} isActive={status === currentBookStatus} updateStatus={updateStatus} status={status}>{status.toUpperCase()}</StatusButton> 
                ))}
            </section>
        </div>
    )
}