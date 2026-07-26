import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import { getAllSlugs, getArticleBySlug } from "@/app/lib/articles";

const SITE_URL = "https://car-repair-calc.vercel.app";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const modifiedTime = article.updatedDate ?? article.publishedDate;

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/articles/${slug}`,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime,
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const html = await marked.parse(article.content);
  const modifiedDate = article.updatedDate ?? article.publishedDate;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    dateModified: modifiedDate,
    mainEntityOfPage: `${SITE_URL}/articles/${slug}`,
  };

  return (
    <div className="min-h-full">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-12 sm:py-16">
        <header className="flex flex-col gap-2">
          <h1 className="break-keep text-2xl font-bold text-sky-900 sm:text-3xl">
            {article.title}
          </h1>
          <p className="text-sm text-slate-600">{article.description}</p>
          <p className="text-xs text-slate-500">
            公開日: {article.publishedDate}
            {article.updatedDate ? ` / 更新日: ${article.updatedDate}` : ""}
          </p>
        </header>

        <article
          className="prose prose-slate prose-headings:text-sky-900 prose-a:text-sky-600 prose-img:rounded-2xl prose-img:shadow-sm prose-img:ring-1 prose-img:ring-sky-100 max-w-none overflow-x-auto rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <section className="flex flex-col gap-3 rounded-3xl bg-gradient-to-br from-sky-500 to-teal-400 p-6 text-white shadow-md">
          <h2 className="text-lg font-bold">修理すべきか買い替えるべきか迷ったら</h2>
          <p className="text-sm text-sky-50">
            走行距離・修理見積もり額を入力するだけで、修理を続けるべきか買い替えるべきかの目安が分かる無料診断ツールを用意しています。
          </p>
          <Link
            href="/"
            className="self-start rounded-full bg-white px-4 py-2 text-sm font-medium text-sky-700 transition-colors hover:bg-sky-50"
          >
            無料診断ツールを使う →
          </Link>
        </section>

        <p className="text-center text-sm text-slate-600">
          <Link href="/articles" className="font-medium text-sky-600 underline hover:text-sky-700">
            他の記事一覧を見る →
          </Link>
        </p>
      </main>
    </div>
  );
}
