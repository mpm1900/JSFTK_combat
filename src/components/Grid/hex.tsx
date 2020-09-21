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
import { Chest } from '../../icons/static/Chest'
import { tCombatEncounter, tEncounter } from '../../game/Encounter/type'
import { Elite } from '../../icons/static/Elite'

export interface HexPropsT {
  hex: HexT
  size: number
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}
export const Hex = (props: HexPropsT) => {
  const { hex, size, onMouseEnter, onMouseLeave } = props
  const { currentHex, chooseNext, encounters } = useGameStateContext()
  const [isHovering, setIsHovering] = useState(false)
  const encounter = encounters[hex.q][hex.r][hex.s]
  const active = currentHex ? isValueEqual(hex, currentHex) : false
  const adjacent = isAdjacent(currentHex)(hex)
  const depth = getDepth(hex, size)
  const fill =
    !encounter || encounter?.completed || active || isHovering
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
      onMouseEnter={() => {
        if (adjacent) setIsHovering(true)
        onMouseEnter && onMouseEnter()
      }}
      onMouseLeave={() => {
        setIsHovering(false)
        onMouseLeave && onMouseLeave()
      }}
    >
      <g style={{ cursor: adjacent ? 'pointer' : 'default' }}>
        {getHexIcon(encounter, depth, size, active, adjacent, fill)}
      </g>
    </Hexagon>
  )
}

export const getHexIcon = (
  encounter: tEncounter | undefined,
  depth: number,
  size: number,
  active: boolean,
  adjacent: boolean,
  fill: string,
): JSX.Element | null => {
  if (!encounter) return <Start fill={fill} />
  if (depth === size - 1) return <Boss fill={fill} />
  if (adjacent || active || encounter.completed) {
    if (encounter.type === 'shop') {
      return <Shop fill={fill} />
    }
    if (encounter.type === 'reward') {
      return <Chest fill={fill} />
    }
    if (encounter.type === 'shrine') {
      return <Shrine fill={fill} />
    }
    if (encounter.type === 'combat') {
      if ((encounter as tCombatEncounter).isElite) {
        return <Elite fill={fill} />
      }
      return <Combat fill={fill} />
    }
  }
  return <Random fill={fill} />
}
