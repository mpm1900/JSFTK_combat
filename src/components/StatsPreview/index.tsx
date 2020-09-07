import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { tStats } from '../../game/Stats/type'
import {
  DEFENSE_BONUS_KEYS,
  STAT_KEY_LABELS,
  DAMAGE_BONUS_KEYS,
  STAT_BONUS_KEYS,
} from '../../game/Stats/constants'

export interface StatsPreviewPropsT {
  stats: tStats
}

const defense_key_colors: any = {
  armor: 'lightblue',
  resistance: 'plum',
}

export const StatsPreview = (props: StatsPreviewPropsT) => {
  const { stats } = props
  return (
    <FlexContainer $direction='column' style={{ fontSize: 14 }}>
      {DEFENSE_BONUS_KEYS.map(
        (key) =>
          stats[key] > 0 && (
            <span
              style={{
                textTransform: 'capitalize',
                color: defense_key_colors[key],
              }}
            >
              +{stats[key]}
              {STAT_KEY_LABELS[key]}
            </span>
          ),
      )}
      {DAMAGE_BONUS_KEYS.map(
        (key) =>
          stats[key] > 0 && (
            <span style={{ textTransform: 'capitalize' }}>
              +{stats[key]}
              {STAT_KEY_LABELS[key]}
            </span>
          ),
      )}
      {STAT_BONUS_KEYS.map(
        (key) =>
          stats[key] > 0 && (
            <span
              style={{
                textTransform: 'capitalize',
                color: 'lightgreen',
              }}
            >
              +{stats[key]}
              {STAT_KEY_LABELS[key]}
            </span>
          ),
      )}
      {STAT_BONUS_KEYS.map(
        (key) =>
          stats[key] < 0 && (
            <span
              style={{
                textTransform: 'capitalize',
                color: 'lightcoral',
              }}
            >
              {stats[key]}
              {STAT_KEY_LABELS[key]}
            </span>
          ),
      )}
    </FlexContainer>
  )
}
