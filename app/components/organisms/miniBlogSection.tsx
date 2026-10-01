'use client';

import { BlogData } from "@/data/blogData";
import InfiniteBlogSlider from "./InfiniteBlogSlider";

export const MiniBlogSection = () => {
  return (
    <div className="w-full">
      <InfiniteBlogSlider blogs={BlogData} />
    </div>
  );
};
