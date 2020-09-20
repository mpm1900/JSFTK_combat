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
import { Icon } from '../../components/Icon'
import Unknown from '../../icons/svg/delapouite/perspective-dice-six.svg'
import Shop from '../../icons/svg/delapouite/coins.svg'
import Combat from '../../icons/svg/lorc/crossed-swords.svg'
import Shrine from '../../icons/svg/lorc/divided-spiral.svg'
import Boss from '../../icons/svg/lorc/crowned-skull.svg'
import Start from '../../icons/svg/lorc/campfire.svg'

export const Grid = () => {
  const { floor, floors } = useGameStateContext()
  const currentFloor = floors[floor]
  const hexagons = useMemo(() => GridGenerator.triangle(currentFloor.size), [])
  // const [activeHex, setActiveHex] = useState<HexT | undefined>()
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
                    hex={hex}
                    size={currentFloor.size}
                    // onMouseEnter={() => setActiveHex(hex)}
                    // onMouseLeave={() => setActiveHex(undefined)}
                  />
                ))}
            </Layout>
          </HexGrid>
        </div>
      </FlexContainer>
      <div>
        <FlexContainer
          $direction='column'
          style={{
            fontSize: 12,
            maxWidth: 300,
            background: Theme.darkBgColor,
            padding: 8,
            margin: '16px 16px 16px 36px',
          }}
        >
          <h3
            style={{
              fontFamily: Theme.titleFont,
              fontWeight: 'normal',
              marginTop: 0,
            }}
          >
            Floor Map
          </h3>
          <Text style={{ marginBottom: 16 }}>
            This is the floor map. Here you can see the cleared encounters
            (green) and the encounters you can travel to (blue). Click a blue
            hex to advance.
          </Text>
          <FlexContainer style={{ alignItems: 'center', height: 48 }}>
            <HexBadge
              color='green'
              size={40}
              stroke={3}
              style={{ marginRight: 8 }}
            />
            Cleared Encounters
          </FlexContainer>
          <FlexContainer style={{ alignItems: 'center', height: 48 }}>
            <HexBadge
              color={Color(Theme.physicalColor).darken(0.5).rgb().toString()}
              size={40}
              stroke={3}
              style={{ marginRight: 8 }}
            />
            Adjacent Encounters
          </FlexContainer>
          <FlexContainer style={{ alignItems: 'center', height: 48 }}>
            <Icon src={Start} size={36} style={{ marginRight: 12 }} />
            Starting Location
          </FlexContainer>
          <FlexContainer style={{ alignItems: 'center', height: 48 }}>
            <Icon src={Shop} size={36} style={{ marginRight: 12 }} />
            Shop
          </FlexContainer>
          <FlexContainer style={{ alignItems: 'center', height: 48 }}>
            <Icon src={Unknown} size={36} style={{ marginRight: 12 }} />
            Random Encounter
          </FlexContainer>
          <FlexContainer style={{ alignItems: 'center', height: 48 }}>
            <Icon src={Boss} size={36} style={{ marginRight: 12 }} />
            Boss
          </FlexContainer>
          <FullContainer />
        </FlexContainer>
      </div>
    </FlexContainer>
  )
}
