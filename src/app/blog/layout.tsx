import { features } from "@/lib/features";
import { notFound } from "next/navigation";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  if (!features.blog) {
    notFound();
  }

  return children;
}
