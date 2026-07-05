import SearchBar from "@/components/SearchBar"
import BooksGrid from "@/components/BooksGrid"
import { searchBooks } from "@/lib/google-books"

type Props = {
    searchParams: Promise<{q?: string}>
}

export default async function Search({searchParams}: Props){

    const {q} = await searchParams

    const books = q ? await searchBooks(q) : [] 
    console.log(books)

    return(
        <div className="flex flex-col">
            <section className="p-4 border-b-2 border-palest-green">
                <SearchBar/>
                
            </section>
            <section>
                <BooksGrid books={books}/>
            </section>
            
        </div>
    )
}