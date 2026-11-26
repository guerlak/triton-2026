"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Upload,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { uploadMediaApi } from "@/services/backendEventService";
import {
  BlogPost,
  BlogPostStatus,
  createBlogPostApi,
  updateBlogPostApi,
} from "@/services/blogService";
import TiptapEditor from "./TiptapEditor";

interface BlogPostFormProps {
  mode: "create" | "edit";
  initialPost?: BlogPost;
}

export default function BlogPostForm({ mode, initialPost }: BlogPostFormProps) {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [title, setTitle] = useState(initialPost?.title || "");
  const [slug, setSlug] = useState(initialPost?.slug || "");
  const [excerpt, setExcerpt] = useState(initialPost?.excerpt || "");
  const [category, setCategory] = useState(initialPost?.category || "News");
  const [tagsInput, setTagsInput] = useState((initialPost?.tags || []).join(", "));
  const [authorName, setAuthorName] = useState(
    initialPost?.authorName || "TRITON Editorial"
  );
  const [status, setStatus] = useState<BlogPostStatus>(
    initialPost?.status || "Draft"
  );
  const [coverImage, setCoverImage] = useState(initialPost?.coverImage || "");
  const [content, setContent] = useState(initialPost?.content || "");

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (mode === "create") {
      const autoSlug = val
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setSlug(autoSlug);
    }
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingCover(true);
    setFeedback(null);

    const folder = `blog/${slug || "covers"}`;
    const res = await uploadMediaApi(file, folder);

    setUploadingCover(false);
    if (res.success && res.data?.url) {
      setCoverImage(res.data.url);
      setFeedback({
        type: "success",
        message: "Cover image uploaded successfully to Cloudflare R2!",
      });
    } else {
      setFeedback({
        type: "error",
        message: res.message || "Error uploading cover image.",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !slug.trim()) {
      setFeedback({
        type: "error",
        message: "Please fill in the required fields (Title and Slug).",
      });
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload: Partial<BlogPost> = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      category: category.trim() || "News",
      tags,
      authorName: authorName.trim() || "TRITON Editorial",
      status,
      coverImage: coverImage.trim() || undefined,
      content,
    };

    const result =
      mode === "create"
        ? await createBlogPostApi(payload)
        : await updateBlogPostApi(initialPost!.id, payload);

    setSubmitting(false);

    if (result.success) {
      setFeedback({
        type: "success",
        message:
          mode === "create"
            ? "Article created successfully!"
            : "Article updated successfully!",
      });
      setTimeout(() => {
        router.push("/admin/blog");
      }, 1200);
    } else {
      setFeedback({
        type: "error",
        message: result.message || "Error saving article.",
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/admin/blog"
          className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog Articles</span>
        </Link>
      </div>

      <div className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">
              {mode === "create" ? "Write New Article" : `Edit Article: ${title}`}
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Articles are published in English. Images are optimized and stored in Cloudflare R2.
            </p>
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded ${
              status === "Published"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
            }`}
          >
            {status}
          </span>
        </div>

        {feedback && (
          <div
            className={`m-6 p-4 rounded-xl flex items-center space-x-3 text-sm ${
              feedback.type === "success"
                ? "bg-emerald-950/40 border border-emerald-500/40 text-emerald-300"
                : "bg-red-950/40 border border-red-500/40 text-red-300"
            }`}
          >
            {feedback.type === "success" ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. How to Prepare for TRITON 3"
                className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Slug (URL) *
              </label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="how-to-prepare-for-triton-3"
                className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-[#df1f26] transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as BlogPostStatus)}
                className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Category
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="News, Training, Race Recap..."
                className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Author Name
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="TRITON Editorial"
                className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Tags <span className="text-zinc-500">(comma separated)</span>
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="triathlon, swim, training"
                className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Excerpt / Summary
            </label>
            <textarea
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Short summary displayed on the blog listing cards and SEO meta description..."
              className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#df1f26] transition"
            />
          </div>

          {/* Cover Image */}
          <div className="p-4 bg-[#171717] border border-white/10 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white">Cover Image</h3>
                <p className="text-xs text-gray-400">
                  Featured banner displayed on the blog card and article header.
                </p>
              </div>
              {uploadingCover && (
                <span className="flex items-center space-x-1.5 text-xs text-[#df1f26]">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Uploading to R2...</span>
                </span>
              )}
            </div>

            {coverImage && (
              <div className="relative h-48 rounded-xl overflow-hidden border border-white/10">
                <img
                  src={coverImage}
                  alt="Cover preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex items-center space-x-3">
              <label className="cursor-pointer inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-4 py-2 rounded-xl text-xs font-medium transition">
                <Upload className="w-4 h-4 text-[#df1f26]" />
                <span>{coverImage ? "Replace Cover" : "Select Cover Image"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverUpload}
                  className="hidden"
                />
              </label>

              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="Or paste the image URL directly..."
                className="flex-1 bg-[#1b1b1b] border border-white/10 rounded-xl px-3 py-2 text-white text-xs font-mono focus:outline-none focus:border-[#df1f26] transition"
              />
            </div>
          </div>

          {/* TipTap Rich Text Content */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Article Content
            </label>
            <TiptapEditor content={content} onChange={setContent} slug={slug} />
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <Link
              href="/admin/blog"
              className="text-xs text-gray-400 hover:text-white transition px-4 py-2"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className="bg-[#df1f26] hover:bg-red-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition flex items-center space-x-2 shadow-lg shadow-red-600/30 disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <span>
                  {mode === "create"
                    ? status === "Published"
                      ? "Publish Article"
                      : "Save Draft"
                    : "Save Changes"}
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
