"use client";

import { useState } from "react";
import { judge, type JudgeResult } from "../lib/judge";

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
          比較ポイントを整理する
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
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-slate-500">比較のための確認項目</span>
        <span className="text-xl font-bold text-sky-900">見積もりの中身を確認してから判断</span>
      </div>

      <ul className="flex flex-col gap-2 text-sm leading-6 text-slate-700">
        {result.comparisonPoints.map((point, i) => (
          <li key={i} className="flex gap-2">
            <span className="font-bold text-sky-600">{i + 1}.</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <p className="text-xs leading-5 text-slate-500">
        このツールは修理または買い替えを推奨・保証するものではありません。走行に支障がある症状や警告灯がある場合は、運転を控えて整備事業者へ相談してください。
      </p>
    </div>
  );
}
