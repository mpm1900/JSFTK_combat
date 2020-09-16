import React from 'react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { Button } from '../../elements/button'
import { useHistory } from 'react-router'
import { AppHeader } from '../AppHeader'
import { PartyResources } from '../PartyResources'
import { useCombatContext } from '../../contexts/CombatContext'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { tQueue } from '../../game/Queue/type'
import { tProcessedCharacter } from '../../game/Character/type'
import { getMax, getFirst, getSortedIds } from '../../game/Queue/util'
import { Theme } from '../../theme'
import { CharacterIcon } from '../CharacterIcon'
import { useUIContext } from '../../contexts/UIContext'

const size = 40
export interface CombatQueuePropsT {
  queue: tQueue
  characters: tProcessedCharacter[]
}
export const CombatQueue = (props: CombatQueuePropsT) => {
  const { queue, characters } = props
  const { isRunning } = useCombatContext()
  const history = useHistory()
  const { level } = useGameStateContext()
  const { setHoverQueueCharacterId } = useUIContext()
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
  const min = 25
  const widthCoef = max > min ? 100 / max : 100 / min
  return (
    <AppHeader
      left={
        <Button
          onClick={() => history.push('/JSFTK_combat')}
          style={{ borderBottom: 0 }}
        >
          Restart ({level})
        </Button>
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
              background: Theme.mediumBgColor,
            }}
          >
            <FlexContainer
              style={{ position: 'relative', marginLeft: size, zIndex: 7 }}
            >
              <CharacterIcon
                character={first}
                size={64}
                width={64}
                height={64}
                style={{ borderTop: 'none' }}
              />
              <FlexContainer
                $direction='column'
                style={{
                  position: 'absolute',
                  background: 'rgba(255,255,255,0.8)',
                  color: Theme.darkBgColor,
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
                        bottom: '2px',
                        right: `calc(${queue[c.id] * widthCoef}% - ${
                          size - 6
                        }px)`,
                        transition: 'all 0.3s',
                        zIndex: i,
                      }}
                      onMouseEnter={() => setHoverQueueCharacterId(c.id)}
                      onMouseLeave={() => setHoverQueueCharacterId(undefined)}
                    >
                      <CharacterIcon
                        character={c}
                        size={size}
                        width={size}
                        index={i}
                        style={{ borderBottom: 'none' }}
                      />
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
