import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-sky-100 bg-white/80">
      <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-x-5 gap-y-2 px-4 py-6 text-xs text-slate-500">
        <Link href="/about" className="underline hover:text-slate-700">
          運営者情報
        </Link>
        <Link href="/privacy" className="underline hover:text-slate-700">
          プライバシーポリシー
        </Link>
      </div>
    </footer>
  );
}
