export type JudgeInput = {
  mileageKm: number;
  repairCostYen: number;
  tradeInValueYen: number | null;
};

export type JudgeResult = {
  recommendation: "replace" | "repair";
  remainingYearsEstimate: number;
  annualizedRepairCostYen: number;
  warnings: string[];
};

// 走行距離に応じた残り使用可能年数の目安(高走行になるほど短くなる粗い目安)
function estimateRemainingYears(mileageKm: number): number {
  if (mileageKm >= 300000) return 1.5;
  if (mileageKm >= 250000) return 2;
  if (mileageKm >= 200000) return 3;
  if (mileageKm >= 150000) return 4;
  if (mileageKm >= 100000) return 5;
  return 7;
}

// 走行距離が伸びるほど壊れやすくなる部位(エスティマHV系の実例ベース、参考情報として表示)
function nextFailurePointWarning(mileageKm: number): string | null {
  if (mileageKm >= 250000) {
    return "走行距離25万km超は駆動用バッテリー・インバーターの故障報告が増える距離帯です。次の修理に備えておきましょう。";
  }
  if (mileageKm >= 150000) {
    return "走行距離15万km超はCVT・エアコン関連部品の故障報告が出始める距離帯です。";
  }
  return null;
}

export function judge(input: JudgeInput): JudgeResult {
  const remainingYearsEstimate = estimateRemainingYears(input.mileageKm);
  const annualizedRepairCostYen = input.repairCostYen / remainingYearsEstimate;

  const warnings: string[] = [];
  const failureWarning = nextFailurePointWarning(input.mileageKm);
  if (failureWarning) warnings.push(failureWarning);

  // 下取り額が分かっている場合: 修理額が下取り額の6割を超えるなら買い替え推奨
  // 下取り額が不明な場合: 残り使用年数で割った年間コストが10万円/年を超えるなら買い替え推奨(簡易判定)
  let recommendation: "replace" | "repair";
  if (input.tradeInValueYen !== null) {
    recommendation =
      input.repairCostYen > input.tradeInValueYen * 0.6 ? "replace" : "repair";
  } else {
    recommendation = annualizedRepairCostYen > 100000 ? "replace" : "repair";
    warnings.push(
      "下取り額が未入力のため、年間コストのみで簡易判定しています。一括査定で実際の下取り額を調べるとより正確に判断できます。"
    );
  }

  return { recommendation, remainingYearsEstimate, annualizedRepairCostYen, warnings };
}
