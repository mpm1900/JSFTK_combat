import React from 'react'
import { styled } from 'styletron-react'

export interface ButtonPropsT {}
export const Button = styled('button', (props: ButtonPropsT) => {
  return {
    cursor: 'pointer',
    background: '#222',
    boxShadow: 'inset 0px 0px 3px black',
    textShadow: 'inset 0px 1px 3px black',
    border: '1px solid #555',
    color: 'rgba(255,255,255,1)',
    ':hover': {
      border: '1px solid #999',
    },
    ':active': {
      outline: 'none',
      border: '1px solid #ccc',
    },
    ':focus': {
      outline: 'none',
    },
    padding: '10px 30px',
  }
})
