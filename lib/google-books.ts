const API_KEY = process.env.GOOGLE_BOOKS_API_KEY

export async function searchBooks(query: string){
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`)

    if(!res.ok){
        throw new Error("Failed to find books.")
    }

    return res.json()

}

export async function getBookDetails(id: string){

    const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
    )

    if(!res.ok){
        throw new Error("Failed to find books.")
    }

    const data = await res.json()
    console.log(data)
    return formatBookData(data)
}

const formatBookData = (book: any) => {
  return {
    bookId: book.id,
    title: book.volumeInfo.title || 'Title unknown',
    authors: book.volumeInfo.authors || [],
    publishedYear: book.volumeInfo.publishedDate.split("-")[0] || 'Year unknown',
    description: book.volumeInfo.description || 'No description',
    coverUrl:  book.volumeInfo.imageLinks.thumbnail || "",
    pageCount: book.volumeInfo.pageCount || 0,
    categories: book.volumeInfo.categories || []
  }
}
