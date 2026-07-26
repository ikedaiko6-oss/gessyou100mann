import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "プライバシーポリシー";
const PAGE_DESCRIPTION =
  "車 修理vs買い替え診断における広告配信、Cookie、アクセス情報、お問い合わせ情報の取り扱いについて。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-full">
      <main className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-12 sm:py-16">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-sky-900 sm:text-3xl">
            プライバシーポリシー
          </h1>
          <p className="text-xs text-slate-500">制定日: 2026年7月26日</p>
        </header>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">広告配信について</h2>
          <p className="text-sm leading-7 text-slate-700">
            当サイトでは、第三者配信の広告サービス「Google AdSense」を利用します。
            Googleなどの第三者配信事業者は、Cookieを使用して、利用者が当サイトや他のサイトへ過去にアクセスした情報に基づく広告を配信することがあります。
          </p>
          <p className="text-sm leading-7 text-slate-700">
            Googleによる広告Cookieの使用により、Googleとそのパートナーは利用者に適切な広告を表示できます。利用者は
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-600 underline hover:text-sky-700"
            >
              Googleの広告設定
            </a>
            から、パーソナライズ広告を無効にできます。
          </p>
          <p className="text-sm leading-7 text-slate-700">
            Googleが広告サービスを利用するサイトから取得した情報の扱いは、
            <a
              href="https://policies.google.com/technologies/partner-sites?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-600 underline hover:text-sky-700"
            >
              Googleの案内
            </a>
            をご確認ください。
          </p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">
            診断ツールに入力した情報
          </h2>
          <p className="text-sm leading-7 text-slate-700">
            走行距離、修理見積もり額、下取り想定額は、お使いの端末上で診断結果を計算するためだけに使用します。当サイトのサーバーへの保存や、運営者による収集は行いません。
          </p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">
            アクセス情報とCookie
          </h2>
          <p className="text-sm leading-7 text-slate-700">
            サイトの提供、安全性の確保、広告配信のため、IPアドレス、ブラウザの種類、閲覧日時、参照元などの情報が、ホスティング事業者または広告配信事業者によって自動的に処理される場合があります。これらは個人を直接特定する目的では使用しません。
          </p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">
            アフィリエイトプログラム
          </h2>
          <p className="text-sm leading-7 text-slate-700">
            当サイトにはアフィリエイト広告を含む場合があります。紹介したサービスへの申し込みや購入が行われた場合、当サイトが紹介料を受け取ることがあります。掲載内容は、報酬の有無にかかわらず、利用者の判断材料となることを優先して作成します。
          </p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">
            お問い合わせとポリシーの変更
          </h2>
          <p className="text-sm leading-7 text-slate-700">
            お問い合わせ時に提供された情報は、回答に必要な範囲でのみ利用します。連絡先は
            <Link
              href="/about"
              className="font-medium text-sky-600 underline hover:text-sky-700"
            >
              運営者情報
            </Link>
            に記載しています。
          </p>
          <p className="text-sm leading-7 text-slate-700">
            法令や利用サービスの変更に応じて、本ポリシーを改定することがあります。重要な変更は当ページでお知らせします。
          </p>
        </section>

        <p className="text-center text-sm">
          <Link
            href="/"
            className="font-medium text-sky-600 underline hover:text-sky-700"
          >
            ← トップページに戻る
          </Link>
        </p>
      </main>
    </div>
  );
}
