import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "編集方針・情報の確認方法",
  description: "車 修理vs買い替え診断における情報の確認方法、更新方針、免責事項。",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-full">
      <main className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-12 sm:py-16">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-sky-900 sm:text-3xl">編集方針・情報の確認方法</h1>
          <p className="text-sm text-slate-600">最終更新日: 2026年8月16日</p>
        </header>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">このサイトが扱うこと</h2>
          <p className="text-sm leading-7 text-slate-700">修理見積もりを受け取った後に、故障原因・交換範囲・保証・総額を確認し、修理と買い替えを比較するための一般情報を掲載します。</p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">情報の確認方法</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>メーカーの取扱説明書、保証案内、救援資料などの一次資料を優先します。</li>
            <li>価格・保証・部品構成は、掲載元と確認日を示し、全国共通の相場として断定しません。</li>
            <li>危険を伴う高電圧部品の分解・測定・交換方法は案内しません。</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">更新・訂正について</h2>
          <p className="text-sm leading-7 text-slate-700">価格、保証、車両仕様は変わるため、重要な情報は確認日を付けます。誤りや古い情報に気付いた場合は、運営者情報の連絡先からお知らせください。確認できた内容は訂正します。</p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">判断と安全について</h2>
          <p className="text-sm leading-7 text-slate-700">当サイトは整備・診断サービスではありません。警告灯、異音、出力低下、焦げたにおいなどがある場合は運転を控え、販売店、整備工場またはロードサービスへ相談してください。</p>
        </section>

        <p className="text-center text-sm"><Link href="/" className="font-medium text-sky-600 underline hover:text-sky-700">← トップページに戻る</Link></p>
      </main>
    </div>
  );
}
