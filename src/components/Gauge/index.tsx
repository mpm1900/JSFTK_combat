import React from 'react'
import Color from 'color'
import { BoxContainer } from '../../elements/box'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { HoverToolTip } from '../Tooltip'
import { Monodiv } from '../../elements/monospace'

export interface GaugePropsT {
  name?: string
  color: string
  height?: number
  max: number
  value: number
  children?: React.ReactNode | React.ReactNode[]
}
export const Gauge = (props: GaugePropsT) => {
  const { name = '', value, max, color, height = 30, children } = props
  const p = (value / max) * 100
  const percentage = p > 100 ? 100 : p
  return (
    <HoverToolTip
      direction='right'
      content={<BoxContainer>{`${name} (${value} / ${max})`}</BoxContainer>}
    >
      <BoxContainer
        substyle={{
          padding: 0,
          background: '#555',
          height: height - 2,
          position: 'relative',
        }}
      >
        <FlexContainer
          style={{
            position: 'absolute',
            left: 0,
            boxSizing: 'border-box',
            height: height - 2,
            maxWidth: `${percentage}%`,
            minWidth: `${percentage}%`,
            boxShadow: 'inset 0px 0px 1px rgba(0,0,0,0.5)',
            textShadow: '1px 1px 1px black',
            backgroundColor: color,
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.5s',
          }}
        ></FlexContainer>
        <FullContainer
          style={{
            position: 'absolute',
            height,
            lineHeight: `${height - 2}px`,
            right: 4,
            top: 0,
            fontSize: 10,
            fontWeight: 'bold',
            overflow: 'hidden',
            textShadow: '0px 0px 3px black',
          }}
        >
          <Monodiv>{children}</Monodiv>
        </FullContainer>
      </BoxContainer>
    </HoverToolTip>
  )
}
