import React, { useState } from 'react'
import Color from 'color'
import { Hexagon } from 'react-hexgrid'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { HexT } from '../../grid/types'
import { getDepth, isAdjacent, isValueEqual } from '../../grid/util'
import { Boss } from '../../icons/static/Boss'
import { Combat } from '../../icons/static/Combat'
import { Random } from '../../icons/static/Random'
import { Shrine } from '../../icons/static/Shine'
import { Shop } from '../../icons/static/Shop'
import { Start } from '../../icons/static/Start'
import { Theme } from '../../theme'

export interface HexPropsT {
  hex: HexT
  size: number
}
export const Hex = (props: HexPropsT) => {
  const { hex, size } = props
  const { currentHex, chooseNext, encounters } = useGameStateContext()
  const [isHovering, setIsHovering] = useState(false)
  const encounter = encounters[hex.q][hex.r][hex.s]
  const active = currentHex ? isValueEqual(hex, currentHex) : false
  const adjacent = isAdjacent(currentHex)(hex)
  const depth = getDepth(hex, size)
  const fill =
    !encounter || encounter.completed || active || isHovering
      ? 'white'
      : 'rgba(255,255,255,0.6)'
  return (
    <Hexagon
      q={hex.q}
      r={hex.r}
      s={hex.s}
      cellStyle={{
        fontSize: '7px',
        stroke: 'black',
        fill:
          encounter?.completed || encounter === undefined || active
            ? 'green'
            : adjacent
            ? Color(Theme.physicalColor).darken(0.5).rgb().toString()
            : Theme.otherGrey,
        cursor: adjacent ? 'pointer' : 'default',
      }}
      onClick={(c: any, h: any) => {
        if (adjacent) {
          chooseNext(hex)
        }
      }}
      onMouseEnter={() => adjacent && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <g style={{ cursor: adjacent ? 'pointer' : 'default' }}>
        {depth === size - 1 ? (
          <Boss fill={fill} />
        ) : encounter === undefined ? (
          <Start fill={fill} />
        ) : encounter?.type === 'shop' ? (
          <Shop fill={fill} />
        ) : encounter?.completed ? (
          encounter?.type === 'shrine' ? (
            <Shrine fill={fill} />
          ) : (
            <Combat fill={fill} />
          )
        ) : (
          <Random fill={fill} />
        )}
      </g>
    </Hexagon>
  )
}
