import React, { CSSProperties } from 'react'
import { BoxContainer } from '../../elements/box'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { HoverToolTip } from '../Tooltip'
import { Monodiv } from '../../elements/monospace'
import { ProcessedCharacterT } from '../../types'
import { noneg } from '../../util'

export interface GaugePropsT {
  name?: string
  color: string
  height?: number
  max: number
  value: number
  style?: CSSProperties
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
        style={{ borderLeft: 'none' }}
        substyle={{
          padding: 0,
          background: '#555',
          height: height - 2,
          position: 'relative',
          borderColor: '1px rgba(255,255,255,0.3)',
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

export interface HealthGaugePropsT {
  character: ProcessedCharacterT
  height?: number
}
export const HealthGauge = (props: HealthGaugePropsT) => {
  const { character, height = 12 } = props
  const health = noneg(character.health - character.stats.healthOffset)
  return (
    <Gauge
      name='Health'
      color='#8f4e4d'
      max={character.health}
      value={health}
      height={height}
    >
      {health}/{character.health}
    </Gauge>
  )
}
export interface XPGaugePropsT {
  character: ProcessedCharacterT
}
export const XPGauge = (props: HealthGaugePropsT) => {
  const { character } = props
  const health = noneg(character.health - character.stats.healthOffset)
  return (
    <Gauge name='XP' color='#5e8575' max={3300} value={1256} height={12}>
      1256/3300
    </Gauge>
  )
}
