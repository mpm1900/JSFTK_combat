import { tEncounter } from '../game/Encounter/type'

export interface HexT {
  id: string
  q: number
  r: number
  s: number
}

export type EncounterArrayT = Record<
  number,
  Record<number, Record<number, tEncounter | undefined>>
>
