import { StatsT, CheckT } from '../types'

export const makeCheck = (key: keyof StatsT, offset?: number): CheckT => ({
  key,
  offset,
})
