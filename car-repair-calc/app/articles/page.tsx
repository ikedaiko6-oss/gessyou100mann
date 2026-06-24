import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/app/lib/articles";

export const metadata: Metadata = {
  title: "記事一覧",
  description:
    "高走行ハイブリッド車(プリウス・アクア・エスティマ・アルファード等)のよくある故障・修理費用に関する記事一覧。",
  alternates: { canonical: "/articles" },
};

export default function ArticlesIndexPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-full">
      <main className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-12 sm:py-16">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-sky-900 sm:text-3xl">記事一覧</h1>
          <p className="text-sm text-slate-600">
            高走行ハイブリッド車のよくある故障・修理費用に関する記事をまとめています。
          </p>
        </header>

        <ul className="flex flex-col gap-3">
          {articles.map((a) => (
            <li
              key={a.slug}
              className="rounded-2xl bg-white p-5 shadow-sm shadow-sky-100 ring-1 ring-sky-100 transition-shadow hover:shadow-md"
            >
              <Link href={`/articles/${a.slug}`} className="flex flex-col gap-1">
                <span className="text-xs font-medium text-teal-600">{a.car}</span>
                <span className="font-bold text-sky-900 hover:underline">
                  {a.title}
                </span>
                <span className="text-sm text-slate-600">{a.description}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-center text-sm text-slate-600">
          <Link href="/" className="font-medium text-sky-600 underline hover:text-sky-700">
            ← 無料診断ツールに戻る
          </Link>
        </p>
      </main>
    </div>
  );
}
