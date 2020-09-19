import React from 'react'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { HexBadge } from '../../elements/shapes'
import { HeadingSm } from '../../elements/typography'
import { tFloor } from '../../game/Encounter/type'
import { Theme } from '../../theme'
import { Icon } from '../Icon'
import { getChosenEncounters, getEncounterIcon } from './util'

export interface FloorPropsT {
  floor: tFloor
  floorIndex: number
  currentFloorIndex: number
  encounterIndex: number
}
export const Floor = (props: FloorPropsT) => {
  const { floor, floorIndex, currentFloorIndex, encounterIndex } = props
  const encounters = getChosenEncounters(floor)
  const isCurrent = (i: number) =>
    encounterIndex === i && floorIndex === currentFloorIndex
  const isBossEncounter = (i: number) => i === floor.encounters.length - 2
  const isRewardEncounter = (i: number) => i === floor.encounters.length - 1
  const isPrevious = (i: number) => i === encounterIndex - 1
  return (
    <FlexContainer
      $direction='column'
      style={{
        background: Theme.darkBgColor,
        padding: 16,
        margin: '16px 32px 16px 0',
      }}
    >
      <FlexContainer>
        <HeadingSm style={{ color: 'rgba(255,255,255,0.6)' }}>
          {floor.name}
        </HeadingSm>
      </FlexContainer>
      <FlexContainer
        key={floor.id}
        style={{
          justifyContent: 'space-between',
        }}
      >
        {encounters.map((e, i) => (
          <FlexContainer key={i} $full={!isRewardEncounter(i)}>
            <HexBadge
              size={52}
              color={Theme.otherGrey}
              childStyle={{ paddingTop: 0 }}
              stroke={2}
              borderColor={
                isCurrent(i)
                  ? 'white'
                  : e === undefined
                  ? Theme.lightBgColor
                  : Theme.evasionColor
              }
            >
              <Icon
                src={getEncounterIcon(
                  isBossEncounter(i)
                    ? 'boss'
                    : isRewardEncounter(i)
                    ? 'reward'
                    : e?.type,
                )}
                size={32}
                style={{
                  marginTop: '-2px',
                }}
                fill={
                  isCurrent(i)
                    ? 'white'
                    : e === undefined
                    ? 'rgba(255,255,255,0.3)'
                    : Theme.evasionColor
                }
              />
            </HexBadge>
            {!isRewardEncounter(i) && (
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
                      e === undefined
                        ? Theme.lightBgColor
                        : isPrevious(i)
                        ? `linear-gradient(103deg, ${Theme.evasionColor} 0%, rgba(255,255,255,1) 100%)`
                        : Theme.evasionColor,
                    borderTop: '1px solid black',
                    borderBottom: '1px solid black',
                  }}
                />
              </FlexContainer>
            )}
          </FlexContainer>
        ))}
      </FlexContainer>
    </FlexContainer>
  )
}
