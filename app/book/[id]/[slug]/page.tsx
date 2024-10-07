import { Suspense } from "react";
import dynamic from "next/dynamic";

export default function BookPage({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const BookComponent = dynamic(
    () => import(`@/public/books/${params.id}/${params.slug}`),
    {
      loading: () => <p>Loading book...</p>,
    }
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{params.slug.split(".")[0]}</h1>
      <Suspense fallback={<p>Loading book...</p>}>
        <BookComponent />
      </Suspense>
    </div>
  );
}