import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { tStats } from '../../game/Stats/type'
import {
  DEFENSE_BONUS_KEYS,
  STAT_KEY_LABELS,
  DAMAGE_BONUS_KEYS,
  STAT_BONUS_KEYS,
  HEALTH_FOCUS_BONUS_KEYS,
} from '../../game/Stats/constants'
import { tCharacterTag } from '../../game/Character/type'
import { Theme } from '../../theme'

export interface StatsPreviewPropsT {
  stats: tStats
}

const defense_key_colors: any = {
  armor: Theme.physicalColor,
  resistance: Theme.magicColor,
  evasion: Theme.evasionColor,
}

export const StatsPreview = (props: StatsPreviewPropsT) => {
  const { stats } = props
  return (
    <FlexContainer $direction='column' style={{ fontSize: 14 }}>
      {DEFENSE_BONUS_KEYS.map(
        (key) =>
          (stats[key] as number) > 0 && (
            <span
              key={key}
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
          (stats[key] as number) > 0 && (
            <span key={key} style={{ textTransform: 'capitalize' }}>
              +{stats[key]}
              {STAT_KEY_LABELS[key]}
            </span>
          ),
      )}
      {HEALTH_FOCUS_BONUS_KEYS.map(
        (key) =>
          (stats[key] as number) > 0 && (
            <span key={key} style={{ textTransform: 'capitalize' }}>
              +{stats[key]}
              {STAT_KEY_LABELS[key]}
            </span>
          ),
      )}
      {STAT_BONUS_KEYS.map(
        (key) =>
          stats[key] > 0 && (
            <span
              key={key}
              style={{
                textTransform: 'capitalize',
                color: Theme.evasionColor,
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
              key={key}
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
      {(Object.keys(stats.damageModifiers) as tCharacterTag[])
        .filter((tag) => stats.damageModifiers[tag] > 0)
        .map((tag) => (
          <span key={tag}>
            +{Math.floor(stats.damageModifiers[tag] * 100)}% damage against{' '}
            {tag}
          </span>
        ))}
    </FlexContainer>
  )
}
