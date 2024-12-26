export const normalizeToRange = (
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number
) => {
  const normalizedValue = (value - inputMin) / (inputMax - inputMin); // 正規化して0 ~ 1にする
  return normalizedValue * (outputMax - outputMin) + outputMin; // 出力範囲に変換
};
