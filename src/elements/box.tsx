import React from 'react'
import { Hover } from '../components/Hover'
import { Theme } from '../theme'

export interface BoxContainerPropsT extends React.HTMLProps<HTMLDivElement> {
  substyle?: React.CSSProperties
  tag?: any
  to?: string
}
export const BoxContainer = (props: BoxContainerPropsT) => {
  const {
    style = {},
    substyle = {},
    children,
    tag: Element = 'div',
    ...rest
  } = props
  return (
    <div
      style={{
        border: '1px solid #000',
        display: 'flex',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      <Element
        style={{
          border: substyle.border || `1px solid ${Theme.lightBgColor}`,
          background: `linear-gradient(0deg, ${Theme.mediumBgColor} 0%, rgba(42,42,44) 100%)`,
          padding: 10,
          color: '#ccc',
          flex: 1,
          boxShadow: 'inset 0px 0px 2px black',
          ...substyle,
        }}
        {...rest}
      >
        {children}
      </Element>
    </div>
  )
}

export const SmallBox = (props: BoxContainerPropsT) => (
  <BoxContainer
    {...props}
    style={{
      height: 40,
      width: 40,
      ...props.style,
    }}
    substyle={{
      display: 'flex',
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center',
      background: Theme.darkBgColor,
      ...props.substyle,
    }}
  >
    {props.children}
  </BoxContainer>
)

export const BoxButton = (props: BoxContainerPropsT) => {
  return (
    <Hover delay={0}>
      {({ isHovering }) => (
        <BoxContainer
          {...props}
          tag='button'
          style={{
            margin: 0,
            ...(props.style || {}),
          }}
          substyle={{
            borderColor:
              isHovering && !props.disabled ? '#999' : Theme.lightBgColor,
            padding: '4px',
            cursor: props.disabled ? 'default' : 'pointer',
            background: props.disabled ? '#444' : Theme.darkBgColor,
            boxShadow: props.disabled ? 'none' : undefined,
            ...(props.substyle || {}),
          }}
        />
      )}
    </Hover>
  )
}
