import React from 'react'
import { styled, withWrapper } from 'styletron-react'

const Div = styled('div', {
  transform: 'rotateY(0deg) rotate(-45deg)',
})
export const Badge = withWrapper(Div, (Element) => (props: any) => {
  return (
    <div
      style={{
        position: props.$absolute === false ? 'relative' : 'absolute',
        background: '#111',
        padding: '4px',
        border: '1px solid rgba(255,255,255,0.5)',
        boxShadow: '1px 1px 0px black',
        height: props.$size || '20px',
        width: props.$size || '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '20px',
        fontWeight: 'bolder',
        borderRadius: '30%',
        transform: 'rotateY(0deg) rotate(45deg)',
        color: props.$color || 'white',
        top: props.$top,
        bottom: props.$bottom,
        right: props.$right,
        left: props.$left,
      }}
    >
      <Element {...props} />
    </div>
  )
})
