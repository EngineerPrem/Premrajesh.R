import { BlogData } from "@/data/blogData";
import InfiniteBlogSlider from "./InfiniteBlogSlider";

export const MiniBlogSection = () => {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
        📚 My Blogs
      </h2>

      <InfiniteBlogSlider blogs={BlogData} />
    </div>
  );
};
