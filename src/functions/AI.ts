import {
  ProcessedCharacterT,
  ProcessedPartyT,
  SkillT,
  SkillTargetT,
} from '../types'
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
  const targetedCharacters = playerParty.characters.filter((c) =>
    c.tags.map((t) => t.type).includes('targeted'),
  )
  const target =
    skill.targetType === 'single'
      ? targetedCharacters.length > 0
        ? getRandom(targetedCharacters)
        : getRandom(playerParty.characters)
      : getRandom<ProcessedPartyT | ProcessedCharacterT>(
          getSkillTargetOptions(source, enemyParty, playerParty, skill),
        )

  return { skill, target }
}
