import React from 'react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { tProcessedCharacter } from '../../game/Character/type'
import { FISTS } from '../../game/Weapon/fists'
import { Theme } from '../../theme'
export interface NamePropsT {
  character: tProcessedCharacter
}

export const Name = (props: NamePropsT) => {
  const { character } = props

  return (
    <FlexContainer
      style={{
        marginTop: -3,
        marginRight: -3,
        marginLeft: -3,
        paddingLeft: 52,
        paddingRight: 8,
        background: Theme.otherGrey2,
        height: 24,
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0px 4px 5px black',
        zIndex: 2,
      }}
    >
      <FullContainer
        style={{
          fontFamily: Theme.titleFont,
          textShadow: '1px 1px 3px black',
          flex: 1,
          fontSize: 20,
        }}
      >
        {character.name}
      </FullContainer>
      <div
        style={{
          fontSize: 12,
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        {character.weapon.name !== 'Fists' ? (
          character.class
        ) : (
          <span
            style={{
              color: 'red',
              display: 'inline-block',
              paddingTop: 4,
              textTransform: 'uppercase',
              textShadow: '1px 1px 3px black',
            }}
          >
            No Weapon Equiped
          </span>
        )}
      </div>
    </FlexContainer>
  )
}
