import { getAllBooksForLibrary } from "@/lib/supabase/crud";

export default async function Library() {
  const books = await getAllBooksForLibrary()
  return (
      <div>
        <div className="flex gap-4">{books.map(b => (
          <div className="flex flex-col items-center justify-center p-5 border border-green-400" key={b.book_id}>
            <img src={b.cover_url}/>
            <p>{b.title}</p>
          </div>
        ))}
        </div>
      </div>
  );
}
