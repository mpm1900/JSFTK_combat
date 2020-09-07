import React from 'react'
import { CharacterT } from '../../types'
import { tCharacter } from '../../game/Character/type'

export interface CharacterImagePropsT {
  character: tCharacter
  size: number
}
export const CharacterImage = (props: CharacterImagePropsT) => {
  const { character, size } = props
  return (
    <img
      alt='profile'
      height={size}
      width={size}
      src={`https://picsum.photos/seed/${character.name}/94/94`}
      style={{
        height: size,
        width: size,
      }}
    />
  )
}
