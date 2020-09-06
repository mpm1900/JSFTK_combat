import React from 'react'
import {
  CombatQueueT,
  getFirst,
  getSortedIds,
  getMax,
} from '../../types/CombatQueue'
import { ProcessedCharacterT } from '../../types'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { Button, RedButton } from '../../elements/button'
import { useHistory } from 'react-router'
import { AppHeader } from '../AppHeader'
import { PartyResources } from '../PartyResources'
import { useCombatContext } from '../../contexts/CombatContext'
import { PLAYER_PARTY_ID } from '../../objects/Party'
import { Icon } from '../Icon'

const size = 40
export interface CombatQueuePropsT {
  queue: CombatQueueT
  characters: ProcessedCharacterT[]
}
export const CombatQueue = (props: CombatQueuePropsT) => {
  const { queue, characters } = props
  const { isRunning } = useCombatContext()
  const history = useHistory()
  const first = characters.find(
    (c) => c.id === getFirst(queue),
  ) as ProcessedCharacterT
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
          <RedButton onClick={() => history.push('/JSFTK_combat/party')}>
            Edit Party
          </RedButton>
          <Button onClick={() => history.push('/JSFTK_combat')}>Restart</Button>
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
            <FlexContainer style={{ position: 'relative', marginLeft: 22 }}>
              {first?.partyId === PLAYER_PARTY_ID ? (
                <img
                  alt='profile'
                  height='64'
                  width='64'
                  src={`https://picsum.photos/seed/${first?.name}/115/115`}
                  style={{
                    height: 64,
                    width: 64,
                    border: '2px solid rgba(255,255,255,0.8)',
                    borderTop: 'none',
                    boxShadow: '1px 1px 1px black',
                    zIndex: 2,
                  }}
                />
              ) : (
                <FlexContainer
                  style={{
                    background: 'lightsalmon',
                    border: '2px solid rgba(255,255,255,0.8)',
                    height: 64,
                    width: 64,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon
                    src={first?.icon || ''}
                    shadow
                    fill={'white'}
                    size={52}
                    style={{ zIndex: 1, position: 'relative' }}
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
                  .filter((c) => c.id !== first?.id && !c.dead)
                  .map((c, i) => (
                    <div
                      key={`${c?.id}-${i}`}
                      style={{
                        height: size - 10,
                        width: size - 7,
                        position: 'absolute',
                        bottom: '0px',
                        right: `calc(${queue[c.id] * widthCoef}% - ${
                          size - 6
                        }px)`,
                        transition: 'all 0.3s',
                      }}
                    >
                      {c.partyId === PLAYER_PARTY_ID ? (
                        <img
                          alt={`${queue[c?.id || '']}`}
                          height={size}
                          width={size}
                          src={`https://picsum.photos/seed/${c?.name}/115/115`}
                          style={{
                            height: size - 10,
                            width: size - 7,
                            border: `1px solid ${
                              c.partyId === PLAYER_PARTY_ID
                                ? 'lightgreen'
                                : 'lightcoral'
                            }`,
                            borderBottom: 'none',
                          }}
                        />
                      ) : (
                        <FlexContainer
                          style={{
                            background: 'lightsalmon',
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
