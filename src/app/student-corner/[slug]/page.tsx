import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { STUDENT_CELLS } from "@/content/committees";
import { StudentCellDetailView } from "@/components/shared/StudentCellDetailView";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return STUDENT_CELLS.map((cell) => ({ slug: cell.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cell = STUDENT_CELLS.find((c) => c.slug === slug);
  if (!cell) return {};
  return buildPageMetadata({
    title: cell.title,
    description: cell.summary,
    path: `/student-corner/${cell.slug}`,
  });
}

export default async function StudentCellPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cell = STUDENT_CELLS.find((c) => c.slug === slug);
  if (!cell) notFound();
  return <StudentCellDetailView cell={cell} />;
}
