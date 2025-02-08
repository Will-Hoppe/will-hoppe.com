// app/blog/page.tsx
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import removeMd from "remove-markdown";

export default async function BlogListingPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/30 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Arrow to Home */}
        <div className="mb-4">
          <Link href="/" legacyBehavior>
            <a className="flex items-center text-sky-400 hover:text-sky-200">
              <span className="mr-2">&larr;</span> Back to Home
            </a>
          </Link>
        </div>

        {/* DevBlog Title */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Froggy's Big Leap DevBlog
        </h1>

        {/* Posts Listing */}
        <div className="grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="mx-auto w-full max-w-3xl p-4 rounded-lg border border-gray-500 bg-gray-900 bg-opacity-50 text-left"
            >
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                <a className="text-2xl font-bold text-zinc-300 hover:text-zinc-100">
                  {post.title}
                </a>
              </Link>
              <p className="text-gray-400 text-sm mt-2">{post.date}</p>
              <p className="text-gray-300 mt-4 tracking-wide">
                {removeMd(post.content).substring(0, 400)}...
              </p>
              <div className="mt-4 flex justify-end">
                <Link href={`/blog/${post.slug}`} legacyBehavior>
                  <a className="text-sky-400 hover:text-sky-200">Read More &rarr;</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
