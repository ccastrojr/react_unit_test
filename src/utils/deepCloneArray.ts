// Can received all array types, because this cannot be typed.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function deepCloneArray(arr: any[]): any {
  return JSON.parse(JSON.stringify(arr));
}
