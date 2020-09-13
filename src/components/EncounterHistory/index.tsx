import React from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { FlexContainer } from '../../elements/flex'
import { tEncounterType, tFloor } from '../../game/Encounter/type'

import Unknown from '../../icons/svg/delapouite/perspective-dice-six.svg'
import Shop from '../../icons/svg/delapouite/coins.svg'
import Combat from '../../icons/svg/lorc/crossed-swords.svg'
import Shrine from '../../icons/svg/lorc/divided-spiral.svg'
import Boss from '../../icons/svg/lorc/crowned-skull.svg'
import Reward from '../../icons/svg/lorc/laurel-crown.svg'
import { Icon } from '../Icon'
import { BoxContainer } from '../../elements/box'
import { Theme } from '../../theme'

export interface EncounterHistoryPropsT {}

export const EncounterHistory = (props: EncounterHistoryPropsT) => {
  const { floors, floor, level } = useGameStateContext()
  const chosenEncounters = (floor: tFloor) =>
    floor.encounters.map((e) => (e.value ? e[e.value] : undefined))
  const getIcon = (type: tEncounterType | undefined): string => {
    switch (type) {
      case 'combat':
        return Combat
      case 'shop':
        return Shop
      case 'shrine':
        return Shrine
      case 'boss':
        return Boss
      case 'reward':
        return Reward
      default:
        return Unknown
    }
  }

  return (
    <FlexContainer $direction='column'>
      {floors.map((f, fi) => (
        <FlexContainer
          key={f.id}
          style={{ justifyContent: 'space-evenly', padding: 32 }}
        >
          {chosenEncounters(f).map((e, i) => (
            <FlexContainer $full>
              <BoxContainer
                substyle={{
                  padding: 4,
                  borderColor:
                    level === i && fi === floor
                      ? 'white'
                      : e === undefined
                      ? Theme.lightBgColor
                      : '#8b9e96',
                }}
              >
                <Icon
                  src={getIcon(
                    i === f.encounters.length - 2
                      ? 'boss'
                      : i === f.encounters.length - 1
                      ? 'reward'
                      : e?.type,
                  )}
                  size={32}
                  fill={e === undefined ? 'rgba(255,255,255,0.5)' : '#8b9e96'}
                />
              </BoxContainer>
              {i !== chosenEncounters(f).length - 1 && (
                <FlexContainer
                  $direction='column'
                  $full
                  style={{ justifyContent: 'center' }}
                >
                  <FlexContainer
                    $full
                    style={{
                      maxHeight: 1,
                      background:
                        e === undefined ? Theme.lightBgColor : 'white',
                      borderTop: '1px solid black',
                      borderBottom: '1px solid black',
                    }}
                  />
                </FlexContainer>
              )}
            </FlexContainer>
          ))}
        </FlexContainer>
      ))}
    </FlexContainer>
  )
}
