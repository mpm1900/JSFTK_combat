import React from 'react'
import { styled, withStyleDeep } from 'styletron-react'
import { FlexContainer } from '../../elements/flex'
import { tCharacterTag, tProcessedCharacter } from '../../game/Character/type'
import { tStats } from '../../game/Stats/type'

export const StatRow = withStyleDeep(FlexContainer, (props: any) => ({
  flexDirection: 'column',
  flex: props.$full ? 1 : undefined,
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
}))

export interface StatsPropsT {
  character: tProcessedCharacter
}
export const Stats = (props: StatsPropsT) => {
  const { character } = props
  return (
    <FlexContainer style={{ padding: 8 }}>
      <FlexContainer $full $direction='column' style={{ marginRight: 16 }}>
        <Stat character={character} stat={'strength'} />
        <Stat character={character} stat={'dexterity'} />
        <Stat character={character} stat={'intelligence'} />
        <Stat character={character} stat={'charisma'} />
        <Stat character={character} stat={'vigor'} />
        <Stat character={character} stat={'agility'} />
        <Stat character={character} stat={'luck'} />
        <Stat character={character} stat={'evasion'} />
        <Stat character={character} stat={'armor'} />
        <Stat
          character={character}
          stat={'resistance'}
          label='Magic Resistance'
        />

        <Stat
          character={character}
          stat={'criticalChance'}
          label='% Critical Chance'
        />

        <Stat
          character={character}
          stat={'consumableHealthGainOffset'}
          label={'Consumable Healing'}
        />
        <Stat
          character={character}
          stat={'healthRegeneration'}
          label={'Health Regeneration'}
        />
        <Stat
          character={character}
          stat={'goldModifier'}
          label={'% More Gold'}
        />
        <Stat
          character={character}
          stat={'maxHealthOffset'}
          label={'+ Max Health'}
        />
        <Stat
          character={character}
          stat={'maxInspirationOffset'}
          label={'+ Max Inspiration'}
        />
        <Stat
          character={character}
          stat={'visionRange'}
          label={'Vison Range'}
        />
      </FlexContainer>
      <FlexContainer $full $direction='column'>
        {Object.keys(character.stats.damageModifiers)
          .filter(
            (k) => character.stats.damageModifiers[k as tCharacterTag] !== 0,
          )
          .map((key) => (
            <FlexContainer $full>
              <StatRow $full>
                +{character.stats.damageModifiers[key as tCharacterTag] * 100}
                {'% '}
                vs {key}
              </StatRow>
            </FlexContainer>
          ))}
      </FlexContainer>
    </FlexContainer>
  )
}

interface StatPropsT {
  character: tProcessedCharacter
  stat: keyof tStats
  label?: string
}
const Stat = (props: StatPropsT) => {
  const { stat, label, character } = props
  return (
    <FlexContainer $full>
      <StatRow $full>{label || stat}</StatRow>
      <StatRow>{character.stats[stat]}</StatRow>
    </FlexContainer>
  )
}
