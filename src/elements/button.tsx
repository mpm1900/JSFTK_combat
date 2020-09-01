import React from 'react'
import { styled, withStyle } from 'styletron-react'

export interface ButtonPropsT {}
export const Button = styled('button', (props: ButtonPropsT) => {
  return {
    cursor: 'pointer',
    background: '#222',
    boxShadow: 'inset 0px 0px 3px black',
    textShadow: '0px 1px 3px black',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'rgba(255,255,255,1)',
    ':hover': {
      border: '1px solid rgba(255,255,255,0.4)',
    },
    ':active': {
      outline: 'none',
      border: '1px solid rgba(255,255,255,0.7)',
    },
    ':focus': {
      outline: 'none',
    },
    padding: '10px 30px',
  }
})

export const ConfirmButton = withStyle(Button, (props: ButtonPropsT) => {
  return {
    background:
      'linear-gradient(0deg, rgba(157,0,0,1) 0%, rgba(110,0,0,1) 100%)',
    fontWeight: 'bold',
    borderTop: 'none',
    padding: '10px 30px',
    boxShadow: 'inset 0px 2px 8px black',
    ':hover': {
      borderTop: 'none',
    },
  }
})
