import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { STAT_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { Badge } from '../../elements/badge'
import { CheckKVT } from '../RoundResultRenderer'
import X from '../../icons/svg/lorc/split-cross.svg'
import { tSkill } from '../../game/Skill/type'
import { tStats, tBaseStats } from '../../game/Stats/type'

export interface SkillChecksPropsT {
  stat: keyof tBaseStats
  skill: tSkill
}
export const SkillChecks = (props: SkillChecksPropsT) => {
  const { stat, skill } = props
  return (
    <FlexContainer
      style={{ justifyContent: 'center', padding: '0px 0 24px 0' }}
    >
      {Array(skill.rolls)
        .fill(null)
        .map((_, i) => (
          <SkillCheck key={i} check={{ label: stat, result: undefined }} />
        ))}
    </FlexContainer>
  )
}

export interface SkillCheckT {
  check: CheckKVT
  size?: number
  padding?: number
}
export const SkillCheck = (props: SkillCheckT) => {
  const { check, size = 36, padding = 12 } = props
  return (
    <div
      style={{
        padding: `0px ${padding}px`,
        opacity: check.result === undefined ? 0.5 : 1,
      }}
    >
      <Badge $absolute={false} $size={size}>
        <Icon
          src={STAT_ICONS[check.label as keyof tBaseStats]}
          fill={getColor(check.result)}
          size={size - 4}
        />
        {check.result === false && (
          <Icon
            src={X}
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
  if (result === false) return 'rgba(255,255,255,0.6)'
  return 'rgba(255,255,255,0.6)'
}
