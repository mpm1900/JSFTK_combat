import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { useCombatContext } from '../../contexts/CombatContext'
import { Button } from '../../elements/button'
import { SkillPreview } from '../SkillPreview'
import { SkillChecks } from '../SkillChecks'
import { SKILL_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { Hover } from '../Hover'
import { PLAYER_PARTY_ID } from '../../game/Party/constants'
import { Theme } from '../../theme'
import { useModalContext } from '../../contexts/ModalContext'
import { EquipItemModal } from '../EquipItemModal'
import Inventory from '../../icons/svg/lorc/knapsack.svg'
import { HEAL } from '../../game/Skill/skills/armor'

export const CombatActions = () => {
  const {
    party,
    activeCharacter,
    selectedSkill,
    selectedTargets,
    onSkillSelect,
    equipItemCombat,
  } = useCombatContext()
  const { open } = useModalContext()

  if (!activeCharacter || activeCharacter.partyId !== PLAYER_PARTY_ID)
    return null

  const stat = selectedSkill?.weaponStatOverride || activeCharacter.weapon.stat
  const skills = activeCharacter.skills.filter((skill) => {
    if (activeCharacter.healthOffset === 0 && skill.id === HEAL.id) {
      return false
    } else {
      return true
    }
  })
  return (
    <FlexContainer $direction='column' style={{ minWidth: 340 }}>
      {selectedSkill && <SkillChecks stat={stat} skill={selectedSkill} />}
      <FlexContainer style={{ justifyContent: 'center', minHeight: 42 }}>
        {skills.map((skill) => (
          <React.Fragment key={skill.id}>
            {SKILL_ICONS[skill.name] ? (
              <Hover delay={0}>
                {({ isHovering }) => (
                  <Icon
                    src={SKILL_ICONS[skill.name]}
                    size={42}
                    shadow={true}
                    style={{
                      cursor: 'pointer',
                      padding: '0 12px',
                    }}
                    onClick={() => {
                      onSkillSelect(skill)
                    }}
                    fill={
                      skill.id === selectedSkill?.id
                        ? 'lightsalmon'
                        : isHovering
                        ? 'white'
                        : 'rgba(255,255,255,0.8)'
                    }
                  />
                )}
              </Hover>
            ) : (
              <Button
                key={skill.id}
                onClick={() => onSkillSelect(skill)}
                style={{
                  background: Theme.darkBgColor,
                  borderColor:
                    selectedSkill && skill.id === selectedSkill.id
                      ? 'white'
                      : undefined,
                }}
              >
                {skill.name}
              </Button>
            )}
          </React.Fragment>
        ))}
        {party.items.length > 0 && (
          <Hover delay={0}>
            {({ isHovering }) => (
              <Icon
                src={Inventory}
                size={42}
                shadow={true}
                style={{
                  cursor: 'pointer',
                  padding: '0 12px',
                }}
                onClick={() =>
                  open(<EquipItemModal equipItemCombat={equipItemCombat} />)
                }
                fill={isHovering ? 'white' : 'rgba(255,255,255,0.8)'}
              />
            )}
          </Hover>
        )}
      </FlexContainer>
      {selectedSkill && (
        <SkillPreview
          skill={selectedSkill}
          source={activeCharacter}
          targets={selectedTargets}
        />
      )}
    </FlexContainer>
  )
}
