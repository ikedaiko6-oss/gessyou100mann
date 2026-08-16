export type JudgeInput = {
  mileageKm: number;
  repairCostYen: number;
  tradeInValueYen: number | null;
};

export type JudgeResult = {
  repairToValueRatio: number | null;
  comparisonPoints: string[];
};

export function judge(input: JudgeInput): JudgeResult {
  const repairToValueRatio =
    input.tradeInValueYen && input.tradeInValueYen > 0
      ? input.repairCostYen / input.tradeInValueYen
      : null;

  const comparisonPoints = [
    "見積書に、故障コードと交換が必要な根拠が書かれているか確認する",
    "部品代・工賃・診断料・保証範囲を含む総額で、必要なら別の整備工場にも確認する",
    "修理後にどのくらい乗る予定か、車検やタイヤなど近い時期の出費も書き出す",
  ];

  if (repairToValueRatio !== null) {
    comparisonPoints.unshift(
      `修理見積もりは入力した下取り想定額の約${Math.round(repairToValueRatio * 100)}%です。金額だけで結論を出さず、修理範囲と今後の出費を比較します。`
    );
  } else {
    comparisonPoints.unshift(
      "下取り想定額が未入力です。修理と買い替えを比べる前に、現在の査定額を確認すると比較しやすくなります。"
    );
  }

  return { repairToValueRatio, comparisonPoints };
}
