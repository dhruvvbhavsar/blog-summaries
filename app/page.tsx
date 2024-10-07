import { readdirSync } from "fs";

export default function Home() {
  //read the name of the folders in @/books
  const books = readdirSync("./books");
  return (
    <>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book}>
            <a href={"/book/" + book}>{book}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
