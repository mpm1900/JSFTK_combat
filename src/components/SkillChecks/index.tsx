import React from 'react'
import { SkillT, StatsT } from '../../types'
import { FlexContainer } from '../../elements/flex'
import { STATI_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { Badge } from '../../elements/badge'
import { CheckKVT } from '../RoundResultRenderer'

export interface SkillChecksPropsT {
  skill: SkillT
}
export const SkillChecks = (props: SkillChecksPropsT) => {
  const { skill } = props
  return (
    <FlexContainer
      style={{ justifyContent: 'space-evenly', padding: '12px 0 24px 0' }}
    >
      {skill.rolls.map((roll, i) => (
        <SkillCheck
          key={i}
          check={{ label: roll.key || 'strength', result: undefined }}
        />
      ))}
    </FlexContainer>
  )
}

export interface SkillCheckT {
  check: CheckKVT
}
export const SkillCheck = (props: SkillCheckT) => {
  const { check } = props
  return (
    <Badge $absolute={false} $size={36}>
      <Icon
        src={STATI_ICONS[(check.label as keyof StatsT) || 'strength'] || ''}
        fill={getColor(check.result)}
        size={32}
      />
    </Badge>
  )
}

const getColor = (result: boolean | undefined) => {
  if (result === true) return 'lightgreen'
  if (result === false) return 'lightcoral'
  return 'rgba(255,255,255,0.6)'
}
