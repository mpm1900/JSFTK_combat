import { styled } from 'styletron-react'

export const FakeLink = styled('span', (props: any) => {
  return {
    ':hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  }
})
