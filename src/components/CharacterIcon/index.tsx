import React, { CSSProperties } from 'react'
import { FlexContainer } from '../../elements/flex'
import { CHARACTER_CLASS_COLORS } from '../../game/Character/constants'
import { tCharacter } from '../../game/Character/type'
import { Icon } from '../Icon'
import { CHARACTER_CLASS_ICONS } from '../../icons/maps'

export interface CharacterIconPropsT {
  character: tCharacter
  size: number
  height?: number
  width?: number
  index?: number
  style?: CSSProperties
  iconStyle?: CSSProperties
}
export const CharacterIcon = (props: CharacterIconPropsT) => {
  const { character, size, height, width, index, style, iconStyle } = props

  return (
    <FlexContainer
      style={{
        background: CHARACTER_CLASS_COLORS[character.class],
        border: '2px solid rgba(255,255,255,0.8)',
        height: height || size - 10,
        width: width || size - 7,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        ...(style || {}),
      }}
    >
      <Icon
        src={character.icon || CHARACTER_CLASS_ICONS[character.class]}
        shadow
        fill={'white'}
        size={size - 7}
        style={{
          zIndex: index || 1,
          position: 'relative',
          ...(iconStyle || {}),
        }}
      />
    </FlexContainer>
  )
}
