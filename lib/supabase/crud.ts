import { getSupabaseClient } from "./server";
import { getBookDetails } from "../google-books";

export async function saveBook(book: any) {
  const supabase = await getSupabaseClient()
  const {data: { user },} = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from('books')
    .insert(
      { 
        book_id: book.bookId, 
        title: book.title, 
        authors: book.authors, 
        status: book.status, 
        published_year: book.publishedYear, 
        cover_url: book.coverUrl, 
        page_count: book.pageCount,
        description: book.description,
        categories: book.categories,
        user_id: user?.id
      }
    )
    .select()
    if(error) throw error

    return data[0]
}

export async function getBookByBookId(id: string){
  const supabase = await getSupabaseClient()
  const {data: { user },} = await supabase.auth.getUser();
  const {data, error} = await supabase
    .from('books')
    .select("*")
    .eq('book_id', id)
    .eq('user_id', user?.id)

  if(error) throw error
  return data[0]
}

export async function updateBookStatus(id: string, status: string){
  const supabase = await getSupabaseClient()
  const {data: { user },} = await supabase.auth.getUser();
  const {error} = await supabase
    .from('books')
    .update({status: status})
    .eq('book_id', id)
    .eq('user_id', user?.id)

  if(error) throw error
}

export async function getOrCreateBook(id: string){
  const existing = await getBookByBookId(id)
  if(existing) return existing

  const book = await getBookDetails(id)

  const inserted = await saveBook(book)
  return inserted

}

export async function getAllBooksForLibrary(){
  const supabase = await getSupabaseClient()
  const {data: { user },} = await supabase.auth.getUser();
  const {data, error} = await supabase
    .from('books')
    .select("*")
    .neq('status', null)
    .eq('user_id', user?.id)

  if(error) throw error
  return data
}