import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "運営者情報";
const PAGE_DESCRIPTION =
  "車 修理vs買い替え診断ツールの運営者情報・お問い合わせ先・サイトの目的について。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-full">
      <main className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-12 sm:py-16">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-sky-900 sm:text-3xl">運営者情報</h1>
        </header>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">サイト名</h2>
          <p className="text-sm text-slate-700">車 修理vs買い替え診断</p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">運営者</h2>
          <p className="text-sm text-slate-700">個人で運営しています。</p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">お問い合わせ</h2>
          <p className="text-sm text-slate-700">
            ikedaiko1 [アットマーク] gmail.com
          </p>
          <p className="text-xs text-slate-500">
            ※迷惑メール対策のため記号化して記載しています。お手数ですが [アットマーク] を @ に置き換えてご連絡ください。
          </p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">サイトの目的</h2>
          <p className="text-sm text-slate-700">
            年式・走行距離・修理見積もり額を入力するだけで、車を修理して乗り続けるべきか買い替えるべきかの目安が分かる無料診断ツールを提供しています。あわせて、ハイブリッド車種別の故障実例・修理費用・自己診断方法をまとめた解説記事を掲載しています。
          </p>
        </section>

        <p className="text-center text-sm">
          <Link href="/" className="font-medium text-sky-600 underline hover:text-sky-700">
            ← トップページに戻る
          </Link>
        </p>
      </main>
    </div>
  );
}
