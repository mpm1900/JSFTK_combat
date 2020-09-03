import React from 'react'
import { CharacterT } from '../../types'

export interface CharacterImagePropsT {
  character: CharacterT
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
