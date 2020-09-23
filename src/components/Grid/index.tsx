import React, { useMemo, useState } from 'react'
import Color from 'color'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { Theme } from '../../theme'
import { HexGrid, Layout, GridGenerator } from 'react-hexgrid'
import { HexT } from '../../grid/types'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Hex } from './hex'
import { Text } from '../../elements/typography'
import { HexBadge } from '../../elements/shapes'
import { Icon } from '../Icon'
import Unknown from '../../icons/svg/delapouite/perspective-dice-six.svg'
import Shop from '../../icons/svg/delapouite/coins.svg'
import Boss from '../../icons/svg/lorc/crowned-skull.svg'
import Start from '../../icons/svg/lorc/anvil-impact.svg'
import Combat from '../../icons/svg/lorc/crossed-swords.svg'
import Elite from '../../icons/svg/lorc/death-zone.svg'
import Chest from '../../icons/svg/lorc/locked-chest.svg'
import Shrine from '../../icons/svg/lorc/divided-spiral.svg'
import { BoxContainer } from '../../elements/box'
import { Button } from '../../elements/button'
import { useSpring, animated } from 'react-spring'
import { getDepth } from '../../grid/util'
import { FLOOR_SIZE } from '../../game/Encounter/floors'
import { usePartyContext } from '../../contexts/PartyContext'
import { getHighestStat } from '../../game/Character/util'

export const Grid = () => {
  const { currentFloor } = useGameStateContext()
  const { party } = usePartyContext()
  const hexagons = useMemo(() => GridGenerator.triangle(currentFloor.size), [])
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeHex, setActiveHex] = useState<HexT | undefined>()
  const range = getHighestStat('visionRange', party.characters).stats
    .visionRange
  const style = useSpring({
    minHeight: isExpanded ? 440 : 0,
    maxHeight: isExpanded ? 440 : 0,
  })
  return (
    <FlexContainer
      $full
      style={{
        color: 'white',
        fontSize: '3px',
        justifyContent: 'center',
      }}
    >
      <FlexContainer
        $full
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <div className='shadow' style={{ width: 594, height: 510 }}>
          <HexGrid>
            <defs>
              <filter id='shadow' width='200%' height='200%'>
                <feDropShadow dx={30} dy={30} stdDeviation={50} />
              </filter>
            </defs>
            <Layout
              size={{ x: 4.5, y: 4.5 }}
              origin={{ x: -57, y: -40 }}
              spacing={1.02}
              flat={false}
            >
              {hexagons
                .filter(
                  (hex: HexT) =>
                    hex.r !== 0 ||
                    hex.s === 0 ||
                    hex.s === currentFloor.size * -1,
                )
                .map((hex: HexT, i: number) => (
                  <Hex
                    key={i}
                    hex={hex}
                    size={currentFloor.size}
                    visionRange={range}
                    onMouseEnter={() => setActiveHex(hex)}
                    onMouseLeave={() => setActiveHex(undefined)}
                  />
                ))}
            </Layout>
          </HexGrid>
        </div>
      </FlexContainer>
      <div>
        <BoxContainer
          style={{
            fontSize: 12,
            maxWidth: 270,
            background: Theme.darkBgColor,
            margin: '16px 16px 16px 36px',
            borderWidth: 2,
          }}
          substyle={{
            background: Theme.mediumBgColor,
            padding: 0,
            textShadow: '1px 1px 8px black',
            boxShadow: 'inset 0px 0px 5px black',
          }}
        >
          <FlexContainer
            style={{
              fontFamily: Theme.titleFont,
              fontWeight: 'normal',
              marginTop: 0,
              paddingLeft: 8,
              background: Theme.otherGrey2,
              height: 26,
              alignItems: 'center',
              boxShadow: '0px 4px 5px black',
              margin: '-1px -1px 0 -1px',
            }}
          >
            <FullContainer>Floor Map</FullContainer>
            <Button
              onClick={() => setIsExpanded((v) => !v)}
              style={{ padding: '2px 8px', marginRight: 4 }}
            >
              {isExpanded ? '_' : '+'}
            </Button>
          </FlexContainer>
          <animated.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              ...style,
            }}
          >
            <div style={{ padding: 8 }}>
              <Text style={{ paddingTop: 8 }}>
                {activeHex
                  ? `${activeHex.q}, ${activeHex.r}, ${activeHex.s} (${getDepth(
                      activeHex,
                      FLOOR_SIZE,
                    )})`
                  : 'hover to see location'}
              </Text>
              <Text style={{ marginBottom: 16, display: 'block' }}>
                This is the floor map. Here you can see the cleared encounters
                (green) and the encounters you can travel to (blue). Click a
                blue hex to advance.
              </Text>
              <BoxContainer substyle={{ background: Theme.darkBgColor }}>
                <FlexContainer style={{ alignItems: 'center', height: 32 }}>
                  <HexBadge
                    color='green'
                    size={28}
                    stroke={3}
                    style={{ marginRight: 8 }}
                  />
                  Cleared Encounters
                </FlexContainer>
                <FlexContainer style={{ alignItems: 'center', height: 32 }}>
                  <HexBadge
                    color={Color(Theme.physicalColor)
                      .darken(0.5)
                      .rgb()
                      .toString()}
                    size={28}
                    stroke={3}
                    style={{ marginRight: 8 }}
                  />
                  Adjacent Encounters
                </FlexContainer>
                <FlexContainer style={{ alignItems: 'center', height: 32 }}>
                  <Icon src={Start} size={24} style={{ marginRight: 12 }} />
                  Armor Workshop
                </FlexContainer>
                <FlexContainer style={{ alignItems: 'center', height: 32 }}>
                  <Icon
                    src={Shop}
                    size={24}
                    style={{ marginRight: 12 }}
                    shadow
                  />
                  Shop
                </FlexContainer>
                <FlexContainer style={{ alignItems: 'center', height: 32 }}>
                  <Icon
                    src={Shrine}
                    size={24}
                    style={{ marginRight: 12 }}
                    shadow
                  />
                  Shrine
                </FlexContainer>
                <FlexContainer style={{ alignItems: 'center', height: 32 }}>
                  <Icon
                    src={Chest}
                    size={24}
                    style={{ marginRight: 12 }}
                    shadow
                  />
                  Chest
                </FlexContainer>
                <FlexContainer style={{ alignItems: 'center', height: 32 }}>
                  <Icon
                    src={Unknown}
                    size={24}
                    style={{ marginRight: 12 }}
                    shadow
                  />
                  Random Encounter
                </FlexContainer>

                <FlexContainer style={{ alignItems: 'center', height: 32 }}>
                  <Icon
                    src={Combat}
                    size={24}
                    style={{ marginRight: 12 }}
                    shadow
                  />
                  Combat
                </FlexContainer>
                <FlexContainer style={{ alignItems: 'center', height: 32 }}>
                  <Icon
                    src={Elite}
                    size={24}
                    style={{ marginRight: 12 }}
                    shadow
                  />
                  Elite Combat
                </FlexContainer>
                <FlexContainer style={{ alignItems: 'center', height: 32 }}>
                  <Icon
                    src={Boss}
                    size={24}
                    style={{ marginRight: 12 }}
                    shadow
                  />
                  Boss
                </FlexContainer>
                <FullContainer />
              </BoxContainer>
            </div>
          </animated.div>
        </BoxContainer>
      </div>
    </FlexContainer>
  )
}
