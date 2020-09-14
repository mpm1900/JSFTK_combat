import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { STAT_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { Badge } from '../../elements/badge'
import { CheckKVT } from '../RoundResultRenderer'
import X from '../../icons/svg/lorc/split-cross.svg'
import { tSkill } from '../../game/Skill/type'
import { tBaseStats } from '../../game/Stats/type'
import { tStatusType } from '../../game/Status/type'
import { Theme } from '../../theme'

export interface SkillChecksPropsT {
  stat: keyof tBaseStats
  skill?: tSkill
  rolls?: number
  results?: boolean[]
}
export const SkillChecks = (props: SkillChecksPropsT) => {
  const { stat, skill, rolls, results = [] } = props
  return (
    <FlexContainer
      style={{ justifyContent: 'center', padding: '0px 0 24px 0' }}
    >
      {Array(skill?.rolls || rolls)
        .fill(null)
        .map((_, i) => (
          <SkillCheck
            key={i}
            skill={skill}
            perfect={
              results.every((r) => r === true) && results.length === rolls
            }
            check={{ label: stat, result: results[i] }}
          />
        ))}
    </FlexContainer>
  )
}

export interface SkillCheckT {
  check: CheckKVT
  size?: number
  padding?: number
  perfect?: boolean
  crit?: boolean
  skill?: tSkill
}
export const SkillCheck = (props: SkillCheckT) => {
  const { check, size = 36, padding = 12, perfect = false, skill, crit } = props
  const colors = getPerfectStatusColors(skill?.perfectStatus || [], crit)
  return (
    <div
      style={{
        padding: `0px ${padding}px`,
        opacity: check.result === undefined ? 0.75 : 1,
      }}
    >
      <Badge
        $absolute={false}
        $size={size}
        $style={{
          borderColor: perfect ? colors.border : undefined,
          background: perfect ? colors.background : Theme.darkBgColorSolid,
        }}
      >
        <Icon
          src={STAT_ICONS[check.label as keyof tBaseStats]}
          fill={perfect ? colors.fill : getColor(check.result)}
          size={size - 4}
        />
        {check.result === false && (
          <Icon
            src={X}
            shadow
            fill={'lightcoral'}
            size={size - 4}
            style={{ position: 'absolute', top: 0 }}
          />
        )}
      </Badge>
    </div>
  )
}

const getColor = (result: boolean | undefined) => {
  if (result === true) return 'white'
  if (result === false) return 'rgba(255,255,255,0.3)'
  return 'rgba(255,255,255,0.3)'
}
interface SCColorsT {
  border: string
  background: string
  fill: string
}
export const getPerfectStatusColors = (
  status: tStatusType[],
  crit: boolean = false,
): SCColorsT => {
  if (crit) {
    return {
      border: '#white',
      background: '#00134a',
      fill: '#d9e3ff',
    }
  }
  if (status.includes('burning')) {
    return {
      border: '#ff9100',
      background: '#5c2c00',
      fill: '#d48a46',
    }
  }
  if (status.includes('poisoned')) {
    return {
      border: '#00870f',
      background: '#001202',
      fill: '#888f88',
    }
  }
  if (status.includes('bleeding')) {
    return {
      border: '#ff0000',
      background: '#120000',
      fill: '#d19999',
    }
  }
  if (status.includes('cursed-vigor')) {
    return {
      border: '#6400a3',
      background: '#10001a',
      fill: '#b093c2',
    }
  }
  if (status.includes('frozen')) {
    return {
      border: '#009ac4',
      background: '#00161c',
      fill: '#a5c8d1',
    }
  }

  return {
    border: '#ffd400',
    background: '#261d00',
    fill: '#ede5be',
  }
}
