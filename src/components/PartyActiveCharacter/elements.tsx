import { FlexContainer } from '../../elements/flex'
import { withStyle } from 'styletron-react'
import { Theme } from '../../theme'

export const Row = withStyle(FlexContainer, (props: any) => {
  return {
    alignItems: 'center',
    textShadow: '1px 1px 1px black',
    background: props.$active ? 'rgba(255,255,255,0.2)' : undefined,
    paddingLeft: '8px',
    paddingTop: '2px',
    paddingBottom: '2px',
    transition: 'all 0.2s',
    userSelect: 'none',
    cursor: 'pointer',
    ':hover': {
      background: 'rgba(255,255,255,0.2)',
    },
    textTransform: 'capitalize',
  }
})
export const ActionsRow = withStyle(FlexContainer, (props: any) => {
  return {
    padding: '4px',
    flex: 1,
    justifyContent: 'center',
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    background: Theme.otherGrey,
  }
})
