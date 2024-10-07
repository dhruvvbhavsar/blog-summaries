import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';

async function getChapters(bookId: string) {
  const bookDirectory = path.join(process.cwd(), 'public', 'books', bookId);
  try {
    const chapters = await fs.readdir(bookDirectory);
    return chapters.sort((a, b) => {
      const num = (str: string) => parseInt(str.split("-")[1]);
      return num(a) - num(b);
    });
  } catch (error) {
    console.error('Error reading chapters directory:', error);
    return null;
  }
}

export default async function ChaptersPage({ params }: { params: { id: string } }) {
  if (!params.id) {
    notFound();
  }

  const chapters = await getChapters(params.id);

  if (!chapters) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1>{params.id}</h1>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter}>
            <Link href={`/book/${params.id}/${chapter}`}>
              {chapter.split(".")[0]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
