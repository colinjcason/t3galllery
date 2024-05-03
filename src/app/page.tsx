import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/75427f11-2226-42e8-894f-d8d5ddc0ec4d-y5kdvl.jpg",
  "https://utfs.io/f/52a1c959-b4ef-4f1f-841a-07f474914346-nhto6v.jpg",
  "https://utfs.io/f/bb0c71a2-b26d-4d51-a285-e997b171717b-53p221.jpg",
  "https://utfs.io/f/86c06b13-62c0-4a43-8cea-bc9a8902776b-utt5ky.jpg",
  "https://utfs.io/f/60609176-a7b3-4132-b1f4-c076d308b3f1-en01t6.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1, 
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + '-' + index} className="w-48 object-contain">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello World
    </main>
  );
}
