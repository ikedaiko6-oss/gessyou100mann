import type { Metadata } from "next";
import Link from "next/link";
import RepairOrReplaceCalculator from "./components/RepairOrReplaceCalculator";
import { getAllArticles } from "@/app/lib/articles";

export const metadata: Metadata = {
  title: "無料・登録不要",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "車 修理vs買い替え診断ツール",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  url: "https://car-repair-calc.vercel.app",
  description:
    "年式・走行距離・修理見積もり額を入力するだけで、車を修理して乗り続けるべきか買い替えるべきかの目安が分かる無料診断ツール。",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
};

const FEATURED_SLUGS = [
  "prius30-hv-battery-life",
  "hybrid-inverter-failure-guide",
  "rebuilt-vs-new-hv-battery",
];

export default function Home() {
  const allArticles = getAllArticles();
  const articles = FEATURED_SLUGS.map((slug) =>
    allArticles.find((a) => a.slug === slug)
  ).filter((a): a is NonNullable<typeof a> => a !== undefined);

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
        <header className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-bold text-sky-900 sm:text-3xl">
            車、修理 vs 買い替え 診断ツール
          </h1>
          <p className="text-sm text-slate-600">
            警告灯が点いた、見積もりが出た——その車種ごとの「よくある原因と費用感」を知ってから判断したほうが、納得のいく結果になります。
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-base font-bold text-sky-900">
            まずは車種別の解説記事をチェック
          </h2>
          <p className="text-sm text-slate-600">
            車種ごとに、公開資料・見積書で確認したい項目・安全上の注意を整理しています。診断ツールはこの後にあります。
          </p>
          <ul className="flex flex-col gap-3">
            {articles.map((a) => (
              <li
                key={a.slug}
                className="rounded-2xl bg-white p-5 shadow-sm shadow-sky-100 ring-1 ring-sky-100 transition-shadow hover:shadow-md"
              >
                <Link href={`/articles/${a.slug}`} className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-teal-600">{a.car}</span>
                  <span className="font-bold text-sky-900 hover:underline">{a.title}</span>
                  <span className="text-sm text-slate-600">{a.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/articles"
            className="self-start text-sm font-medium text-sky-600 underline hover:text-sky-700"
          >
            記事一覧をすべて見る →
          </Link>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-base font-bold text-sky-900">
            原因や費用感がだいたい分かったら、診断ツールへ
          </h2>
          <p className="text-sm text-slate-600">
            走行距離・修理見積もり額・下取り想定額を入力し、修理と買い替えを比べる前に確認したい項目を整理します。
          </p>
          <RepairOrReplaceCalculator />
        </section>

        <footer className="flex flex-col items-center gap-2 text-center text-xs text-slate-500">
          <p>※本ツールの結果は簡易的な目安です。実際の判断は専門業者の見積もりも参考にしてください。</p>
        </footer>
      </main>
    </div>
  );
}
