import React from 'react'
import { StatsT } from '../../types'
import { FlexContainer } from '../../elements/flex'
import {
  DEFENSE_BONUS_KEYS,
  DAMAGE_BONUS_KEYS,
  STAT_KEY_LABELS,
  STAT_BONUS_KEYS,
} from '../../objects'

export interface StatsPreviewPropsT {
  stats: StatsT
}

export const StatsPreview = (props: StatsPreviewPropsT) => {
  const { stats } = props
  return (
    <FlexContainer $direction='column' style={{ fontSize: 14 }}>
      {DEFENSE_BONUS_KEYS.map(
        (key) =>
          stats[key] > 0 && (
            <span style={{ textTransform: 'capitalize' }}>
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
                color: 'lightblue',
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