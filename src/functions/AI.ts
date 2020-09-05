import { ProcessedCharacterT, ProcessedPartyT, SkillT } from '../types'
import { getRandom } from '../util'
import { getSkillTargetOptions } from './Skill'

export interface AIActionT {
  skill: SkillT
  target: ProcessedCharacterT | ProcessedPartyT
}
export const getAIAction = (
  source: ProcessedCharacterT,
  playerParty: ProcessedPartyT,
  enemyParty: ProcessedPartyT,
): AIActionT => {
  const skill = getRandom(source.skills)
  const targetedCharacters = playerParty.characters.filter(
    (c) => c.status.map((t) => t.type).includes('targeted') && !c.dead,
  )
  const target =
    skill.targetType === 'single'
      ? targetedCharacters.length > 0
        ? getRandom(targetedCharacters)
        : getRandom(playerParty.characters.filter((c) => !c.dead))
      : getRandom<ProcessedPartyT | ProcessedCharacterT>(
          getSkillTargetOptions(source, enemyParty, playerParty, skill),
        )

  return { skill, target }
}
