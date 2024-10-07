import fs from 'fs/promises';
import path from 'path';

async function getBooks() {
  const booksDirectory = path.join(process.cwd(), 'public', 'books');
  try {
    const books = await fs.readdir(booksDirectory);
    return books;
  } catch (error) {
    console.error('Error reading books directory:', error);
    return [];
  }
}

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book}>
            <a href={`/book/${book}`}>{book}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}