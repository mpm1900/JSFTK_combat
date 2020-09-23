import React from 'react'
import { BoxContainer } from '../../elements/box'
import { tProcessedCharacter } from '../../game/Character/type'
import { getDamageResistance } from '../../game/Character/util'
import { tSkill } from '../../game/Skill/type'
import { Theme } from '../../theme'
import { noneg } from '../../util'

export interface DamagePreviewPropsT {
  skill: tSkill
  source: tProcessedCharacter
  target: tProcessedCharacter
}

export const DamagePreview = (props: DamagePreviewPropsT) => {
  const { skill, source, target } = props
  const damageModifier =
    source.stats.attackDamageModifier * skill.damageModifier
  const raw = Math.round(
    ((skill.weaponDamageOverride || source.weapon.damage.value) +
      source.stats.attackDamageOffset) *
      damageModifier,
  )
  const min = noneg(
    Math.round(
      raw / skill.rolls - getDamageResistance(target, source.weapon.damage),
    ),
  )
  const max = noneg(
    Math.round(raw - getDamageResistance(target, source.weapon.damage)),
  )

  return (
    <BoxContainer
      substyle={{ background: Theme.darkBgColor, textAlign: 'center' }}
    >
      <strong>
        Damage: ({min}-{max})
      </strong>
    </BoxContainer>
  )
}
