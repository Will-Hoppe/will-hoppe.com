// app/blog/[slug]/page.tsx
import Link from "next/link";
import { getPostData, getPostContentHtml, getPostSlugs } from "@/lib/posts";

interface PageProps {
  params: { slug: string };
}

// Pre-generate all post paths at build time
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: PageProps) {
  const postData = getPostData(params.slug);
  const contentHtml = await getPostContentHtml(postData.content);

  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/30 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Arrow to Home */}
        <div className="mb-4">
          <Link href="/blog" legacyBehavior>
            <a className="flex items-center text-sky-400 hover:text-sky-200">
              <span className="mr-2">&larr;</span> Back to DevBlog
            </a>
          </Link>
        </div>

        {/* Post Content Box */}
        <div className="mx-auto w-full max-w-6xl p-4 rounded-lg border border-gray-500 bg-gray-900 bg-opacity-50 text-left">
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <p className="text-gray-400 text-sm mb-4">{postData.date}</p>
          <div
            className="article prose tracking-wide max-w-none text-gray-300"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}
