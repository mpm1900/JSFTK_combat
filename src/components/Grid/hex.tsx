import React, { useState } from 'react'
import Color from 'color'
import { Hexagon } from 'react-hexgrid'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { HexT } from '../../grid/types'
import { getDepth, isAdjacent, isValueEqual, MIN_HEX } from '../../grid/util'
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
import { FLOOR_SIZE } from '../../game/Encounter/floors'
import { Smith } from '../../icons/static/Smith'

export interface HexPropsT {
  hex: HexT
  size: number
  visionRange: number
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}
export const Hex = (props: HexPropsT) => {
  const { hex, size, visionRange, onMouseEnter, onMouseLeave } = props
  const { currentHex, chooseNext, encounters } = useGameStateContext()
  const [isHovering, setIsHovering] = useState(false)
  const encounter = encounters[hex.q][hex.r][hex.s]
  const active = currentHex ? isValueEqual(hex, currentHex) : false
  const adjacent = currentHex
    ? isAdjacent(currentHex, 1)(hex)
    : isValueEqual(MIN_HEX(FLOOR_SIZE), hex)
  const depth = getDepth(hex, size)
  const iconColor = getHexIconColor(encounter, active, adjacent, isHovering)
  const fill = getHexFill(encounter, active, adjacent)
  return (
    <Hexagon
      q={hex.q}
      r={hex.r}
      s={hex.s}
      cellStyle={{
        fontSize: '7px',
        stroke: 'black',
        fill,
        cursor: adjacent ? 'pointer' : 'default',
      }}
      onClick={(c: any, h: any) => {
        if (adjacent && encounter && !encounter.blocking) {
          console.log(encounter)
          chooseNext(hex, visionRange)
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
        {getHexIcon(encounter, depth, size, active, adjacent, iconColor)}
      </g>
    </Hexagon>
  )
}

export const getHexFill = (
  encounter: tEncounter | undefined,
  active: boolean,
  adjacent: boolean,
) => {
  if (encounter && encounter.blocking) {
    return 'black'
  }
  if (active) {
    return '#b0891c'
  }
  if (!encounter || encounter.completed) {
    return 'green'
  }

  if (adjacent) {
    return Color(Theme.physicalColor).darken(0.5).rgb().toString()
  }
  return Theme.otherGrey
}

export const getHexIconColor = (
  encounter: tEncounter | undefined,
  active: boolean,
  adjacent: boolean,
  isHovering: boolean,
): string => {
  if (!encounter || encounter.completed) {
    return 'white'
  }
  if (encounter.type === 'boss') {
    return Theme.healthRedColor
  }
  if (active || isHovering) {
    return 'white'
  }
  if (adjacent || encounter.seen) {
    return 'rgba(255,255,255,0.6)'
  }
  return 'rgba(255,255,255,0.2)'
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
  if (encounter.blocking) return null
  if (depth === size - 1) return <Boss fill={fill} />
  if (adjacent || active || encounter.completed || encounter.seen) {
    if (encounter.type === 'shop') {
      return <Shop fill={fill} />
    }
    if (encounter.type === 'reward') {
      return <Chest fill={fill} />
    }
    if (encounter.type === 'shrine') {
      return <Shrine fill={fill} />
    }
    if (encounter.type === 'smith') {
      return <Smith fill={fill} />
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
