import { styled } from 'styletron-react'

export interface FlexContainerPropsT {
  $direction?: 'row' | 'column' | 'column-reverse'
  $full?: boolean
}
export const FlexContainer = styled('div', (props: FlexContainerPropsT) => ({
  display: 'flex',
  flexDirection: props.$direction || 'row',
  flex: props.$full ? 1 : 'default',
}))
export const FullContainer = styled('div', () => ({
  flex: 1,
}))
