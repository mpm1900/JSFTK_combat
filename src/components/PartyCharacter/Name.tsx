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
        background: Theme.otherGrey2,
        overflow: 'visible',
        position: 'relative',
        marginTop: -3,
        marginRight: -3,
        marginLeft: -3,
        zIndex: 2,
      }}
    >
      <FlexContainer
        $full
        style={{
          position: 'relative',

          paddingLeft: 52,
          paddingRight: 8,
          background:
            'linear-gradient(30deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%)',
          height: 24,
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '-5px 0 10px black',
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
          {character.weapon.name === 'Fists' && (
            <span
              style={{
                color: 'red',
                display: 'inline-block',
                paddingTop: 4,
                paddingRight: 15,
                textTransform: 'uppercase',
                textShadow: '1px 1px 3px black',
              }}
            >
              No Weapon Equiped
            </span>
          )}
        </div>
      </FlexContainer>
    </FlexContainer>
  )
}
