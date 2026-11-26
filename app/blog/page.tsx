import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, User, FileText } from "lucide-react";
import RedLine from "@/app/ui/RedLine";
import { getPublishedPostsFromApi } from "@/services/blogService";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog | TRITON World Series",
  description:
    "Stories, training insights, race recaps, and official news from TRITON World Series.",
};

export default async function BlogIndexPage() {
  const posts = await getPublishedPostsFromApi();
  const [featuredPost, ...otherPosts] = posts;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">
            Back to Home
          </span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red block mb-2">
              TRITON Journal
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase leading-tight tracking-tight break-words mb-4">
              Stories &amp; <span className="text-triton-red">Insights</span>
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-gray-400">
              Training guides, athlete stories, race previews, and official updates from the TRITON World Series.
            </p>
          </div>
          <RedLine />
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {posts.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl bg-[#141414]">
              <FileText className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <h2 className="text-xl font-bold text-white uppercase">No articles published yet</h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                Check back soon for new stories and training articles.
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-12 rounded-3xl sm:rounded-4xl overflow-hidden bg-[#141414] border border-white/10 hover:border-triton-red/50 transition-all duration-300"
                >
                  <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[360px] bg-zinc-900 overflow-hidden">
                    {featuredPost.coverImage ? (
                      <img
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs uppercase tracking-widest">
                        TRITON World Series
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#141414]/60" />
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="inline-block bg-triton-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>

                      <h2 className="text-2xl sm:text-3xl font-black uppercase leading-tight text-white group-hover:text-triton-red transition-colors">
                        {featuredPost.title}
                      </h2>

                      {featuredPost.excerpt && (
                        <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-triton-red" />
                          {featuredPost.authorName}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-triton-red" />
                          {new Date(
                            featuredPost.publishedAt || featuredPost.createdAt
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-white font-bold uppercase tracking-wider group-hover:text-triton-red transition-colors">
                        Read
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Remaining Posts Grid */}
              {otherPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group rounded-3xl overflow-hidden bg-[#141414] border border-white/10 hover:border-triton-red/50 transition-all duration-300 flex flex-col"
                    >
                      <div className="relative h-52 bg-zinc-900 overflow-hidden">
                        {post.coverImage ? (
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs uppercase tracking-widest">
                            TRITON
                          </div>
                        )}
                        <span className="absolute top-4 left-4 bg-triton-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2.5">
                          <h3 className="text-lg sm:text-xl font-black uppercase leading-snug text-white group-hover:text-triton-red transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          {post.excerpt && (
                            <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed">
                              {post.excerpt}
                            </p>
                          )}
                        </div>

                        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                          <span>
                            {new Date(
                              post.publishedAt || post.createdAt
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="inline-flex items-center gap-1 text-white font-bold uppercase tracking-wider group-hover:text-triton-red transition-colors">
                            Read
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </section>
      </main>
  );
}
