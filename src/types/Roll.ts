import { StatsT } from './Stats'

export interface CheckT {
  key?: keyof StatsT
  offset?: number
}

export interface CheckResultT {
  input: CheckT
  result: boolean
  total: number
  averageTotal: number
  maxTotal: number
  minTotal: number
  output: string
}
