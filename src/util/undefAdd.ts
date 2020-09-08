export const undefAdd = (
  a: number | undefined,
  b: number | undefined,
): number | undefined => {
  if (a === undefined && b === undefined) return undefined
  if (a === undefined && b !== undefined) return b
  if (a !== undefined && b === undefined) return a
  if (a !== undefined && b !== undefined) return a + b
}
