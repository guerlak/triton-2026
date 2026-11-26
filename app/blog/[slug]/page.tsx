import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Calendar, User, Clock, Compass } from "lucide-react";
import CustomNavbar from "@/app/components/CustomNavbar";
import NavButton from "@/app/ui/NavButton";
import { getPublishedPostBySlugFromApi } from "@/services/blogService";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlugFromApi(slug);

  if (!post) {
    return { title: "Article Not Found | TRITON World Series" };
  }

  return {
    title: `${post.title} | TRITON Blog`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      ...(post.coverImage ? { images: [{ url: post.coverImage }] } : {}),
    },
  };
}

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, " ").trim();
  const words = text ? text.split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPublishedPostBySlugFromApi(slug);

  if (!post) {
    notFound();
  }

  const readMinutes = estimateReadingTime(post.content);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog", active: true },
  ];

  return (
    <>
      <CustomNavbar
        links={navLinks}
        actions={
          <NavButton
            isRed
            text="Find a Race"
            href="/events"
            icon={<Compass className="w-4 h-4 shrink-0" />}
          />
        }
      />

      <main className="min-h-screen bg-[#0a0a0a] text-white pt-28 sm:pt-32 pb-16 sm:pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-triton-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          <header className="space-y-5">
            <span className="inline-block bg-triton-red text-white text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-tight tracking-tight break-words">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 pt-2 border-t border-white/10">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-4 h-4 text-triton-red" />
                {post.authorName}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-triton-red" />
                {new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-triton-red" />
                {readMinutes} min read
              </span>
            </div>
          </header>

          {post.coverImage && (
            <div className="relative rounded-3xl overflow-hidden border border-white/10 max-h-[480px]">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Rich Text Article Body */}
          <div
            className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed space-y-4
              [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-black [&_h2]:uppercase [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-5
              [&_a]:text-triton-red [&_a]:underline [&_a]:hover:text-white [&_a]:transition-colors
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-gray-300 [&_ul]:mb-5
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:text-gray-300 [&_ol]:mb-5
              [&_blockquote]:border-l-4 [&_blockquote]:border-triton-red [&_blockquote]:pl-5 [&_blockquote]:py-1 [&_blockquote]:italic [&_blockquote]:text-gray-300 [&_blockquote]:my-6
              [&_img]:rounded-2xl [&_img]:border [&_img]:border-white/10 [&_img]:my-8 [&_img]:w-full [&_img]:h-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.tags && post.tags.length > 0 && (
            <div className="pt-8 border-t border-white/10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </main>
    </>
  );
}
