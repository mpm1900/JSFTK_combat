import React from 'react'

import { FlexContainer, FullContainer } from '../../elements/flex'
import { Button, RedButton } from '../../elements/button'
import { useHistory } from 'react-router'
import { AppHeader } from '../AppHeader'
import { PartyResources } from '../PartyResources'
import { useCombatContext } from '../../contexts/CombatContext'
import { Icon } from '../Icon'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { tQueue } from '../../game/Queue/type'
import { tProcessedCharacter } from '../../game/Character/type'
import { getMax, getFirst, getSortedIds } from '../../game/Queue/util'
import { PLAYER_PARTY_ID } from '../../game/Party/constants'
import { CHARACTER_CLASS_ICONS } from '../../icons/maps'
import { CHARACTER_CLASS_COLORS } from '../../game/Character/constants'

const size = 40
export interface CombatQueuePropsT {
  queue: tQueue
  characters: tProcessedCharacter[]
}
export const CombatQueue = (props: CombatQueuePropsT) => {
  const { queue, characters } = props
  const { isRunning } = useCombatContext()
  const history = useHistory()
  const { level, nextLevel } = useGameStateContext()
  const first = characters.find(
    (c) => c.id === getFirst(queue),
  ) as tProcessedCharacter
  const sortedIds = getSortedIds(queue)
  const bigList = [
    ...sortedIds,
    ...sortedIds,
    ...sortedIds,
    ...sortedIds,
    ...sortedIds,
    ...sortedIds,
  ]
  const count = Math.floor((800 - 52) / size)
  const [f, ...list] = Array(count)
    .fill(null)
    .map((_, i) => bigList[i])
    .map((id) => characters.find((c) => c.id === id))
    .filter((c) => c !== undefined)
  const max = getMax(queue)
  const min = 50
  const widthCoef = max > min ? 100 / max : 100 / min
  return (
    <AppHeader
      left={
        <>
          {/*<RedButton onClick={gotoParty}>Edit Party</RedButton>*/}
          <Button onClick={() => history.push('/JSFTK_combat')}>
            Restart ({level})
          </Button>
        </>
      }
      right={
        <FlexContainer $full style={{ justifyContent: 'flex-end' }}>
          <PartyResources />
        </FlexContainer>
      }
    >
      <>
        {first && isRunning && (
          <FlexContainer
            style={{
              width: 800,
              flexDirection: 'row-reverse',
              boxShadow: '0px 0px 3px black',
              borderLeft: '1px solid rgba(255,255,255,0.3)',
              background: '#222',
            }}
          >
            <FlexContainer
              style={{ position: 'relative', marginLeft: 22, zIndex: 7 }}
            >
              {first?.partyId === PLAYER_PARTY_ID ? (
                <FlexContainer
                  style={{
                    background: CHARACTER_CLASS_COLORS[first.class],
                    border: '2px solid rgba(255,255,255,0.8)',
                    borderTop: 'none',
                    height: 64,
                    width: 64,
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  <Icon
                    src={CHARACTER_CLASS_ICONS[first.class]}
                    size={64}
                    fill='rgba(255,255,255,1)'
                  />
                </FlexContainer>
              ) : (
                <FlexContainer
                  style={{
                    background: '#c27a5d',
                    border: '2px solid rgba(255,255,255,0.8)',
                    borderTop: 'none',
                    height: 64,
                    width: 64,
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  <Icon
                    src={first?.icon || ''}
                    shadow
                    fill={'white'}
                    size={52}
                    style={{ zIndex: 2, position: 'relative' }}
                  />
                </FlexContainer>
              )}
              <FlexContainer
                $direction='column'
                style={{
                  position: 'absolute',
                  background: 'rgba(255,255,255,0.8)',
                  color: '#111',
                  zIndex: 2,
                  width: 120,
                  top: 16,
                  paddingLeft: 4,
                  right: '-124px',
                }}
              >
                {first && <span>{first.name}'s Turn</span>}
              </FlexContainer>
            </FlexContainer>
            <FlexContainer $full $direction='column'>
              <FullContainer />
              <FlexContainer $full style={{ position: 'relative' }}>
                {characters
                  .filter((c) => c.id !== first?.id && c.health > 0)
                  .map((c, i) => (
                    <div
                      key={`${c?.id}-${i}`}
                      style={{
                        height: size - 10,
                        width: size - 7,
                        position: 'absolute',
                        bottom: '4px',
                        right: `calc(${queue[c.id] * widthCoef}% - ${
                          size - 6
                        }px)`,
                        transition: 'all 0.3s',
                        zIndex: i,
                      }}
                    >
                      {c.partyId === PLAYER_PARTY_ID ? (
                        <FlexContainer
                          style={{
                            background: CHARACTER_CLASS_COLORS[c.class],
                            border: '2px solid rgba(255,255,255,0.8)',
                            height: size - 10,
                            width: size - 7,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon
                            src={CHARACTER_CLASS_ICONS[c.class]}
                            shadow
                            fill={'white'}
                            size={size - 13}
                            style={{ zIndex: 1, position: 'relative' }}
                          />
                        </FlexContainer>
                      ) : (
                        <FlexContainer
                          style={{
                            background: '#c27a5d',
                            border: '2px solid rgba(255,255,255,0.8)',
                            height: size - 10,
                            width: size - 7,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon
                            src={c.icon || ''}
                            shadow
                            fill={'white'}
                            size={size - 13}
                            style={{ zIndex: 1, position: 'relative' }}
                          />
                        </FlexContainer>
                      )}
                    </div>
                  ))}
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        )}
      </>
    </AppHeader>
  )
}
