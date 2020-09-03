import React from 'react'
import { SkillT, StatsT } from '../../types'
import { FlexContainer } from '../../elements/flex'
import { STATI_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { Badge } from '../../elements/badge'
import { CheckKVT } from '../RoundResultRenderer'
import X from '../../icons/svg/lorc/split-cross.svg'

export interface SkillChecksPropsT {
  skill: SkillT
}
export const SkillChecks = (props: SkillChecksPropsT) => {
  const { skill } = props
  return (
    <FlexContainer
      style={{ justifyContent: 'center', padding: '0px 0 24px 0' }}
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
    <div
      style={{
        padding: '0px 12px',
        opacity: check.result === undefined ? 0.5 : 1,
      }}
    >
      <Badge $absolute={false} $size={36}>
        <Icon
          src={STATI_ICONS[(check.label as keyof StatsT) || 'strength'] || ''}
          fill={getColor(check.result)}
          size={32}
        />
        {check.result === false && (
          <Icon
            src={X}
            fill={'lightcoral'}
            size={32}
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
