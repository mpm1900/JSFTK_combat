import { styled } from 'styletron-react'
import { Theme } from '../theme'

export const FakeLink = styled('span', (props: any) => {
  return {
    whiteSpace: 'nowrap',
    ':hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  }
})

export const HeadingSm = styled('span', (props: any) => {
  return {
    fontFamily: Theme.titleFont,
    color: 'white',
    fontSize: '20px',
    display: 'inline-block',
    marginBottom: '16px',
  }
})

export const Text = styled('span', (props: any) => {
  return {
    color: 'rgba(255,255,255,0.75)',
    lineHeight: '1.4',
    marginBottom: 16,
  }
})
