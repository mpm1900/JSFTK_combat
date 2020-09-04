import React from 'react'
import { ProcessedCharacterT, CharacterClassT } from '../../types'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { BoxContainer } from '../../elements/box'
import { usePartyContext } from '../../contexts/PartyContext'
import { makeCharacter } from '../../functions'
import { WeaponPreview } from '../WeaponPreview'
import { ArmorPreview } from '../ArmorPreview'

export interface PartyActiveCharacterPropsT {
  character: ProcessedCharacterT
}

export const PartyActiveCharacter = (props: PartyActiveCharacterPropsT) => {
  const { character } = props
  const { upsertCharacter } = usePartyContext()
  const { weapon } = character
  console.log(character)
  return (
    <FlexContainer $full>
      <FullContainer />
      <FlexContainer $direction='column'>
        <FullContainer />
        <BoxContainer substyle={{ background: '#111' }}>
          <FlexContainer>
            <FlexContainer $direction='column' style={{ paddingRight: 10 }}>
              <h1 style={{ margin: 0 }}>{character.name}</h1>
              <select
                style={{
                  background: '#333',
                  border: '1px solid rgba(255,255,255,0.4)',
                  padding: 8,
                  color: 'white',
                  marginBottom: 8,
                }}
                value={character.class}
                onChange={(e) => {
                  upsertCharacter({
                    ...makeCharacter(e.target.value as CharacterClassT),
                    id: character.id,
                    name: character.name,
                  })
                }}
              >
                <option value='blacksmith'>blacksmith</option>
                <option value='hunter'>hunter</option>
                <option value='scholar'>scholar</option>
                <option value='bard'>bard</option>
              </select>
              <span>Level {character.level}</span>
              <span>
                Health {character.health - character.stats.healthOffset}/
                {character.health}
              </span>
            </FlexContainer>
            <div>
              <WeaponPreview weapon={weapon} />
            </div>
            <FlexContainer $direction='column'>
              {character.armor.map((armor) => (
                <ArmorPreview armor={armor} />
              ))}
            </FlexContainer>
          </FlexContainer>
        </BoxContainer>
        <FullContainer />
      </FlexContainer>
      <FullContainer />
    </FlexContainer>
  )
}