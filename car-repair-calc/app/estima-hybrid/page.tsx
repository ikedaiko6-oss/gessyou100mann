import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "エスティマハイブリッドのよくある故障部位と修理費用まとめ";
const PAGE_DESCRIPTION =
  "エスティマハイブリッド(20系/50系)でよくある故障部位を、走行距離別の傾向と実際の修理費用の実例とともに解説。修理すべきか買い替えるべきか迷ったら診断ツールもチェック。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/estima-hybrid",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/estima-hybrid",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

// 公開日: このページを実際に作成・公開した日
const PUBLISHED_DATE = "2026-06-22";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  datePublished: PUBLISHED_DATE,
  dateModified: PUBLISHED_DATE,
  mainEntityOfPage: "https://car-repair-calc.vercel.app/estima-hybrid",
  // 画像未設定: 専用のOG画像を用意したら image プロパティを追加する
};

export default function EstimaHybridPage() {
  return (
    <div className="min-h-full ">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-12 sm:py-16">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-sky-900 sm:text-3xl">
            エスティマハイブリッドのよくある故障部位と修理費用まとめ
          </h1>
          <p className="text-sm text-slate-600">
            「警告灯が点いた」「バッテリーがダメなのか不安」という方向けに、結論→理由→実例の順でまとめました。
          </p>
        </header>

        {/* 結論 */}
        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">
            結論: 警告灯が点いても「即バッテリー交換」と決めつけなくていい
          </h2>
          <p className="text-sm text-slate-700">
            エスティマハイブリッドで警告灯が点いたとき、多くの人が真っ先に「駆動用バッテリーがダメになった」と考えますが、実際に故障が増え始めるのは<strong>インバーター(10万km以上から)</strong>のほうが早く、駆動用バッテリーそのものの寿命は<strong>20万km〜28万km</strong>まで持つ事例も珍しくありません。つまり、まず「どの部位が原因か」を診断で切り分けることが、無駄な大出費を避ける一番の近道です。
          </p>
        </section>

        {/* 理由 */}
        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">
            理由: 故障しやすい部位には順番があり、症状の出方も決まっている
          </h2>
          <p className="text-sm text-slate-700">
            なぜ「即バッテリー交換」と決めつけてはいけないのか。それは、エスティマハイブリッドの故障には走行距離に応じたパターンがあり、駆動用バッテリー以外の部位が先に症状を出すことが多いためです。
          </p>
          <ol className="flex flex-col gap-3 text-sm text-slate-700">
            <li>
              <span className="font-semibold text-sky-900">1. インバーター</span>
              <br />
              ハイブリッドシステムの中核部品で、<strong>10万km以上から故障が増える傾向</strong>。水冷で冷やされているため、冷却水(クーラント)の漏れや劣化が引き金になることがあります。
            </li>
            <li>
              <span className="font-semibold text-sky-900">2. 駆動用バッテリー</span>
              <br />
              一般的な寿命目安は走行距離10万km前後からですが、状態が良ければ<strong>20万〜28万km</strong>まで持つケースもあります。機能が50%を切ったタイミングが交換の判断ラインとされ、寿命の目安は10年程度です。
            </li>
            <li>
              <span className="font-semibold text-sky-900">
                3. ハイブリッドビークルトランスアクスル
              </span>
              <br />
              モーターと変速機構を兼ねる部品で、こちらも故障報告が一定数あります。
            </li>
            <li>
              <span className="font-semibold text-sky-900">
                4. CVT(無段変速機)
              </span>
              <br />
              初代モデルではベルトが切れる事例も報告されています。
            </li>
            <li>
              <span className="font-semibold text-sky-900">
                5. エアコン関連部品
              </span>
              <br />
              エアコンプレッサーの焼き付きや、エキスパンションバルブ・リキッドタンクの不具合が起きやすい部位です。
            </li>
          </ol>
          <p className="text-sm text-slate-700">
            つまり、警告灯の原因として最も先に疑うべきは駆動用バッテリーではなくインバーターであり、その不調がバッテリー残量表示やエンジンの動き方に連鎖して影響を及ぼす、という順序になっていることが多いのです。
          </p>
        </section>

        {/* 具体例 */}
        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">
            具体例①: 実体験で確認された症状の進行パターン
          </h2>
          <p className="text-sm text-slate-700">
            34万km自己メンテナンスを続けてきたオーナー自身の実体験として、次のような症状の進行パターンが報告されています。これはまさに「インバーターが先に症状を出す」という上記の理由を裏付ける実例です。
          </p>
          <img
            src="/images/articles/estima-symptom-progression.svg"
            alt="エスティマハイブリッドの症状進行図。インバーターの100Vボタンが機能しなくなる、バッテリー残量表示が1目盛まで下がる、エンジンがかかりっぱなしになる、VSCシステムチェック警告が出始める、という4段階の流れを示す"
            className="rounded-2xl ring-1 ring-sky-100"
          />
          <ol className="flex flex-col gap-2 text-sm text-slate-700">
            <li>
              <span className="font-semibold text-sky-900">①インバーターの100Vボタン(AC100V電源系統)が機能しなくなる</span>
            </li>
            <li>
              <span className="font-semibold text-sky-900">②ハイブリッド残量計の表示が1目盛まで下がる</span>
            </li>
            <li>
              <span className="font-semibold text-sky-900">③エンジンがかかりっぱなしの状態になる</span>(EV走行・アイドルストップができなくなる)
            </li>
            <li>
              <span className="font-semibold text-sky-900">④これが日常的に起こるようになると、VSC(横滑り防止装置)システムチェックの警告が出始める</span>
            </li>
          </ol>
          <p className="text-sm text-slate-700">
            警告灯だけを見て「バッテリーがダメだ」と判断するのではなく、AC100V電源(車内で家電を使うためのコンセント機能)が正常に機能しているかどうかも確認しておくと、原因の切り分けがしやすくなります。
          </p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">具体例②: 国内の修理費用の実例</h2>
          <ul className="flex flex-col gap-2 text-sm text-slate-700">
            <li>
              走行27万km超でハイブリッドシステムの警告灯が点灯し、バッテリー交換の見積もりが
              <span className="font-semibold"> 約32万円</span>だった例
            </li>
            <li>
              <span className="font-semibold">駆動用バッテリーが28万kmまで持った</span>という事例と、
              <span className="font-semibold">25万km時点でハイブリッドエラーが出た</span>という事例があり、走行距離だけでは劣化タイミングを断定できないことが分かります
            </li>
            <li>
              ディーラーでの<span className="font-semibold">駆動用バッテリー新品交換は工賃込みで約35万円</span>、交渉により約30万円まで値引きされた事例も報告されています
            </li>
            <li>
              インバーターのASSY(アセンブリ)交換が必要になると<span className="font-semibold">15万円以上</span>かかることがほとんどです。ある事例では、外注での修理により新品購入より約25万円安く済んだという報告もあります
            </li>
            <li>
              インバーター用の冷却水(クーラント)がリザーブタンクから漏れ、バッテリー過熱を防ぐための出力制限モードに入った事例も報告されています
            </li>
            <li>
              補機バッテリー(12V)は走行距離65,473km・登録から5年6ヶ月の時点で、カーナビ画面の電圧低下表示をきっかけに交換した事例があります。費用はディーラーで約4万4千円、最安値では23,800円程度という報告もあります
            </li>
          </ul>
          <p className="text-xs text-slate-500">
            ※上記はみんカラ等のユーザー投稿事例・一般的な目安であり、すべての車両に当てはまるわけではありません。実際の状態は専門業者の診断・見積もりで確認してください。
          </p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">
            具体例③: 補機バッテリーと駆動用バッテリーでは対応が全く違う
          </h2>
          <p className="text-sm text-slate-700">
            エスティマハイブリッドには「補機バッテリー(12V)」と「駆動用バッテリー(202V)」という2種類のバッテリーが搭載されており、どちらが上がったかによって取れる対応が大きく異なります。
          </p>
          <img
            src="/images/articles/estima-battery-types-diagram.svg"
            alt="エスティマハイブリッドの2種類のバッテリーの比較図。補機バッテリー(12V)はジャンプスタート可能、駆動用バッテリー(202V)はジャンプスタート絶対NGで感電の危険があることを示す"
            className="rounded-2xl ring-1 ring-sky-100"
          />
          <p className="text-sm text-slate-700">
            補機バッテリーは普通車と同じ12Vの鉛バッテリーなので、電圧が下がった場合は通常のジャンプスタートで対応できます。一方、駆動用バッテリーは非常に高い電圧(202V)を持っているため、<strong>救援車を使ったジャンプスタートは絶対に行ってはいけません</strong>。感電事故につながる危険があるため、ロードサービスなど専門知識を持つ業者に依頼する必要があります。また、ハイブリッド車は構造上「救援される側」にはなれても、他の車を救援する側にはなれない点も覚えておくと安心です。
          </p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">具体例④: 海外での実例</h2>
          <p className="text-sm text-slate-700">
            エスティマハイブリッドは日本国内中心の車種ですが、中古車として英国・ニュージーランド・オーストラリアなどに輸出され、現地のハイブリッド専門業者が修理を手がけている実例があります。
          </p>
          <ul className="flex flex-col gap-2 text-sm text-slate-700">
            <li>
              英国(ロンドン)のハイブリッド専門業者は、エスティマハイブリッド用の新品駆動用バッテリーを保証・配送・取付込みのパッケージ価格で販売しており、現地でも専用部品の入手ルートが確立されています
            </li>
            <li>
              オーストラリアの輸入業者も「Toyota Estima Hybrid」を専用に輸入・販売しており、現地のハイブリッド専門ショップ向けに故障診断・修理体制が整っていることが分かります
            </li>
            <li>
              海外のオーナーフォーラムでは、インバーター不調による「失速・警告灯点灯・完全停止」が共通の故障パターンとして報告されており、症状の出方は国内事例と近い傾向があります
            </li>
          </ul>
          <p className="text-xs text-slate-500">
            ※エスティマハイブリッドは右ハンドル輸出が中心で、北米向けの正式販売はありません。海外事例は中古車輸出後の現地修理業者の情報に基づきます。
          </p>
        </section>

        {/* 結論(まとめ) */}
        <section className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
          <h2 className="text-lg font-bold text-sky-900">まとめ: 結局どうすればいいか</h2>
          <p className="text-sm text-slate-700">
            警告灯が点いたら、まず「インバーター由来の症状かどうか」(AC100V電源の不調、エンジンがかかりっぱなしになるなど)を確認し、駆動用バッテリー本体の劣化と決めつけないことが、無駄な大出費を避ける一番の近道です。駆動用バッテリーは20万kmを超えても使える事例が多く、補機バッテリー(12V)の上がりであれば自分でジャンプスタートできますが、駆動用バッテリー(202V)が上がった場合は絶対に自分で対処せず、ロードサービスに任せてください。
          </p>
          <p className="text-sm text-slate-700">
            修理費用の見積もりが出た後、修理して乗り続けるべきか買い替えるべきか迷う場合は、走行距離と見積もり額を入力するだけで目安が分かる
            <Link href="/" className="font-medium text-sky-600 underline hover:text-sky-700">
              無料診断ツール
            </Link>
            も参考にしてください。
          </p>
        </section>
      </main>
    </div>
  );
}
