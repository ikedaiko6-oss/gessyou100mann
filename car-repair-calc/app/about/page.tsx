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
          <p className="text-sm text-slate-700">池田 大介（個人運営）</p>
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
            修理見積もりを受け取った方が、修理と買い替えを比べる前に確認したい項目を整理する無料ツールを提供しています。記事では、公開資料を参照しながら、部品・保証・見積書の見方と安全上の注意を解説しています。
          </p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">免責事項</h2>
          <p className="text-sm leading-7 text-slate-700">
            当サイトは整備工場ではなく、個別の故障診断・修理判断・見積もり作成は行いません。掲載内容とツールの結果は一般的な情報整理を目的としたもので、車両の安全性や修理の必要性を保証するものではありません。
          </p>
        </section>

        <p className="text-center text-sm">
          <Link href="/editorial-policy" className="font-medium text-sky-600 underline hover:text-sky-700">
            編集方針・情報の確認方法を見る
          </Link>
        </p>

        <p className="text-center text-sm">
          <Link href="/" className="font-medium text-sky-600 underline hover:text-sky-700">
            ← トップページに戻る
          </Link>
        </p>
      </main>
    </div>
  );
}
