"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText,
  PlusCircle,
  Trash2,
  Edit2,
  ExternalLink,
  Search,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import {
  BlogPost,
  deleteBlogPostApi,
  getAllAdminPostsFromApi,
} from "@/services/blogService";

export default function AdminBlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Published" | "Draft">("All");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllAdminPostsFromApi();
      setPosts(data);
    } catch {
      setError("Failed to load blog posts from the API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = async (post: BlogPost) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${post.title}" (${post.slug})? This action cannot be undone.`
    );
    if (!confirmed) return;

    setDeletingId(post.id);
    const result = await deleteBlogPostApi(post.id);
    setDeletingId(null);

    if (result.success) {
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
    } else {
      alert(result.message || "Error deleting article.");
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesStatus = statusFilter === "All" || post.status === statusFilter;
    const q = searchTerm.toLowerCase();
    const matchesQuery =
      post.title.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q) ||
      post.slug.toLowerCase().includes(q) ||
      post.authorName.toLowerCase().includes(q);
    return matchesStatus && matchesQuery;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center space-x-2">
            <span>Blog Management</span>
            <span className="text-xs bg-[#df1f26]/20 text-[#df1f26] border border-[#df1f26]/30 px-2.5 py-0.5 rounded-full font-semibold">
              English
            </span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Write, edit, and publish articles for the TRITON World Series blog.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={loadPosts}
            disabled={loading}
            className="p-2.5 rounded-lg border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition disabled:opacity-50"
            title="Reload articles"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-[#df1f26]" : ""}`} />
          </button>

          <Link
            href="/admin/blog/new"
            className="flex items-center space-x-2 bg-[#df1f26] hover:bg-red-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition shadow-lg shadow-red-600/20"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Write New Article</span>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 flex items-center bg-[#171717] border border-white/10 rounded-xl px-4 py-2.5 focus-within:border-[#df1f26] transition">
          <Search className="w-4 h-4 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search by title, category, author, or slug..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none w-full"
          />
        </div>

        <div className="flex items-center bg-[#171717] border border-white/10 rounded-xl p-1">
          {(["All", "Published", "Draft"] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                statusFilter === s
                  ? "bg-[#df1f26] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 flex items-center space-x-3 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {loading ? (
        <div className="py-20 text-center">
          <RefreshCw className="w-8 h-8 text-[#df1f26] animate-spin mx-auto mb-3" />
          <p className="text-sm text-gray-400">Loading articles...</p>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl bg-[#121212]/50">
          <FileText className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-white">No articles found</h3>
          <p className="text-sm text-gray-400 max-w-sm mx-auto mt-1 mb-5">
            {searchTerm || statusFilter !== "All"
              ? "No articles match your current filters."
              : "You haven't written any blog articles yet."}
          </p>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center space-x-2 bg-[#df1f26] hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Write First Article</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition flex flex-col group"
            >
              <div className="relative h-44 bg-gradient-to-t from-[#141414] to-black/60 overflow-hidden">
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-700 text-xs">
                    No cover image
                  </div>
                )}

                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="bg-[#df1f26] text-white text-[11px] font-black uppercase px-2 py-0.5 rounded shadow">
                    {post.category}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded shadow backdrop-blur-md ${
                      post.status === "Published"
                        ? "bg-emerald-500/80 text-white"
                        : "bg-amber-500/80 text-white"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white line-clamp-2">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-xs text-gray-400 line-clamp-2">{post.excerpt}</p>
                  )}
                  <div className="text-[11px] text-zinc-500">
                    By {post.authorName} ·{" "}
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  {post.status === "Published" ? (
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="text-xs text-gray-400 hover:text-white flex items-center space-x-1.5 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View post</span>
                    </Link>
                  ) : (
                    <span className="text-xs text-zinc-600">Draft only</span>
                  )}

                  <div className="flex items-center space-x-2">
                    <Link
                      href={`/admin/blog/${post.slug}/edit`}
                      className="text-xs text-blue-400 hover:text-blue-300 flex items-center space-x-1 p-1.5 rounded hover:bg-blue-500/10 transition"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </Link>

                    <button
                      onClick={() => handleDelete(post)}
                      disabled={deletingId === post.id}
                      className="text-xs text-red-400 hover:text-red-300 flex items-center space-x-1 p-1.5 rounded hover:bg-red-500/10 transition disabled:opacity-50"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>{deletingId === post.id ? "Deleting..." : "Delete"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
