"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2, AlertCircle } from "lucide-react";
import { BlogPost, getAdminPostBySlugFromApi } from "@/services/blogService";
import BlogPostForm from "../../_components/BlogPostForm";

export default function EditBlogPostPage() {
  const params = useParams();
  const slug = String(params.slug);

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await getAdminPostBySlugFromApi(slug);
      setPost(data);
      setLoading(false);
    }
    if (slug) load();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-24 text-center">
        <Loader2 className="w-8 h-8 text-[#df1f26] animate-spin mx-auto mb-3" />
        <p className="text-sm text-gray-400">Loading article...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-24 text-center space-y-3">
        <AlertCircle className="w-10 h-10 text-red-400 mx-auto" />
        <p className="text-sm text-gray-300">Article &apos;{slug}&apos; not found.</p>
      </div>
    );
  }

  return <BlogPostForm mode="edit" initialPost={post} />;
}
