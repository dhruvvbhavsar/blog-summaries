import { readdirSync } from "fs";
import { notFound } from "next/navigation";

export default function Chapters({ params }: { params: { id: string } }) {
  if (!params.id) {
    return notFound();
  }

  //read the name of the folders in @/books
  let chapters;
  try {
    chapters = readdirSync(`./books/${params.id}`);
  } catch (e) {
    console.error(e);
    return notFound();
  }
  return (
    <>
      <h1>{params.id}</h1>
      <ul>
        {chapters
          .sort((a, b) => {
            const num = (str: string) => parseInt(str.split("-")[1]);

            return num(a) - num(b);
          })
          .map((chapter) => (
            <li key={chapter}>
              <a href={"/book/" + params.id + "/" + chapter}>
                {chapter.split(".")[0]}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}
