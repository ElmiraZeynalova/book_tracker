import Link from "next/link"

type Props = {
    books: any
}

export default function BooksGrid({books}: Props){
    console.log(books)

    return(
        <div className="flex flex-col gap-4 p-5">
            {books.items?.map((book: any) => {
                const title = book.volumeInfo.title
                return <Link href={`/books/${book.id}`} key={book.id}>
                    <p className="text-2xl">{title}</p>
                </Link>
            })}
        </div>
    )
}