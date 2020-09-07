import { tSkill } from '../Skill/type'
import { tProcessedCharacter } from '../Character/type'
import { tProcessedParty } from '../Party/type'
import { getRandom } from '../../util'
import { getSkillTargetOptions } from '../Skill/util'

export interface tAIAction {
  skill: tSkill
  target: tProcessedCharacter | tProcessedParty
}
export const getAIAction = (
  source: tProcessedCharacter,
  playerParty: tProcessedParty,
  enemyParty: tProcessedParty,
): tAIAction => {
  const skill = getRandom(source.skills)
  const targetedCharacters = playerParty.characters.filter(
    (c) => c.status.map((t) => t.type).includes('targeted') && c.health > 0,
  )
  const target =
    skill.targetType === 'single'
      ? targetedCharacters.length > 0
        ? getRandom(targetedCharacters)
        : getRandom(playerParty.characters.filter((c) => c.health > 0))
      : getRandom<tProcessedParty | tProcessedCharacter>(
          getSkillTargetOptions(source, enemyParty, playerParty, skill),
        )

  return { skill, target }
}
