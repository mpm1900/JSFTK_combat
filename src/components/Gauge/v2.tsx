import { GaugePropsT } from '.'

import React, { useState, useEffect } from 'react'
import { HoverToolTip } from '../Tooltip'
import { BoxContainer } from '../../elements/box'
import { Spring } from 'react-spring/renderprops'
import { FullContainer } from '../../elements/flex'
import { Monodiv } from '../../elements/monospace'

export const Gauge2 = (props: GaugePropsT) => {
  const { name = '', value, color, height = 30, children, style } = props
  const max = props.max < 1 ? 1 : props.max
  const p = (value / max) * 100
  const percentage = p > 100 ? 100 : p
  const [oldPercentage, setOldPercentage] = useState(percentage)
  useEffect(() => {
    setOldPercentage(percentage)
  }, [percentage])
  return (
    <HoverToolTip
      direction='right'
      content={<BoxContainer>{`${name} (${value} / ${max})`}</BoxContainer>}
    >
      <BoxContainer
        style={{ borderLeft: 'none', ...(style || {}) }}
        substyle={{
          padding: 0,
          background: '#555',
          height: height - 2,
          position: 'relative',
          border: 'none',
        }}
      >
        <Spring
          from={{ value: oldPercentage || 0 }}
          to={{ value: percentage }}
          config={{ friction: 200, mass: 4, tension: 600 }}
        >
          {(p) => (
            <div
              style={{
                position: 'absolute',
                left: 0,
                boxSizing: 'border-box',
                height: height - 2,
                maxWidth: `${p.value}%`,
                minWidth: `${p.value}%`,
                boxShadow: 'inset 0px 0px 1px rgba(0,0,0,0.5)',
                textShadow: '1px 1px 1px black',
                backgroundColor: 'rgba(255,255,255,0.5)',
                color: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            ></div>
          )}
        </Spring>
        <div
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
          }}
        ></div>
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
