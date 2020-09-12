import { styled } from 'styletron-react'

export const FakeLink = styled('span', (props: any) => {
  return {
    whiteSpace: 'nowrap',
    ':hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  }
})
