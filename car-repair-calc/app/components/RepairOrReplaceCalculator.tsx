"use client";

import { useState } from "react";
import { judge, type JudgeResult } from "../lib/judge";

// TODO: 整備工場比較側の提携が承認されたら実際のアフィリエイトリンクに置き換える
const AFFILIATE_LINKS = {
  tradeIn: "https://px.a8.net/svt/ejp?a8mat=4B614L+5HNXMA+3O80+5Z6WX",
  repairShop: "#",
};

export default function RepairOrReplaceCalculator() {
  const [mileage, setMileage] = useState("");
  const [repairCost, setRepairCost] = useState("");
  const [tradeInValue, setTradeInValue] = useState("");
  const [result, setResult] = useState<JudgeResult | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mileageKm = Number(mileage);
    const repairCostYen = Number(repairCost);
    const tradeInValueYen = tradeInValue === "" ? null : Number(tradeInValue);

    if (!mileageKm || !repairCostYen) return;

    setResult(judge({ mileageKm, repairCostYen, tradeInValueYen }));
  }

  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-md shadow-sky-100 ring-1 ring-sky-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field
          label="走行距離(km)"
          value={mileage}
          onChange={setMileage}
          placeholder="例: 280000"
          required
        />
        <Field
          label="修理見積もり額(円)"
          value={repairCost}
          onChange={setRepairCost}
          placeholder="例: 320000"
          required
        />
        <Field
          label="下取り想定額(円)・分からなければ空欄でOK"
          value={tradeInValue}
          onChange={setTradeInValue}
          placeholder="例: 150000"
        />
        <button
          type="submit"
          className="mt-2 rounded-full bg-sky-500 px-4 py-3 font-medium text-white shadow-sm transition-colors hover:bg-sky-400"
        >
          診断する
        </button>
      </form>

      {result && <ResultView result={result} />}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm text-slate-700">
      {label}
      <input
        type="number"
        inputMode="numeric"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-xl border border-sky-200 px-3 py-2 text-base outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
      />
    </label>
  );
}

function ResultView({ result }: { result: JudgeResult }) {
  const isReplace = result.recommendation === "replace";

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-slate-500">診断結果</span>
        <span
          className={`text-xl font-bold ${isReplace ? "text-amber-500" : "text-teal-600"}`}
        >
          {isReplace ? "買い替えがおすすめです" : "まだ修理して乗り続けて大丈夫です"}
        </span>
      </div>

      <div className="text-sm text-slate-600">
        想定残り使用年数: 約{result.remainingYearsEstimate}年 / 年あたりの修理コスト換算:
        約{Math.round(result.annualizedRepairCostYen).toLocaleString()}円
      </div>

      {result.warnings.length > 0 && (
        <ul className="flex flex-col gap-1 text-sm text-amber-600">
          {result.warnings.map((w, i) => (
            <li key={i}>⚠️ {w}</li>
          ))}
        </ul>
      )}

      {isReplace ? (
        <a
          href={AFFILIATE_LINKS.tradeIn}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="rounded-full bg-amber-400 px-4 py-3 text-center font-medium text-white shadow-sm transition-colors hover:bg-amber-300"
        >
          無料で一括査定して今の車の価値を調べる
        </a>
      ) : (
        <a
          href={AFFILIATE_LINKS.repairShop}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="rounded-full bg-teal-500 px-4 py-3 text-center font-medium text-white shadow-sm transition-colors hover:bg-teal-400"
        >
          近くの整備工場の見積もりを比較する
        </a>
      )}
    </div>
  );
}
