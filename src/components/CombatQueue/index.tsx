import React from 'react'
import { CombatQueueT, getFirst, getSortedIds } from '../../types/CombatQueue'
import { ProcessedCharacterT } from '../../types'
import { FlexContainer, FullContainer } from '../../elements/flex'

const size = 40
export interface CombatQueuePropsT {
  queue: CombatQueueT
  characters: ProcessedCharacterT[]
}
export const CombatQueue = (props: CombatQueuePropsT) => {
  const { queue, characters } = props
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
  return (
    <FlexContainer
      style={{
        justifyContent: 'center',
        background: '#111',
        height: 52,
        borderBottom: '2px solid rgba(255,255,255,0.3)',
        boxShadow: '1px 1px 1px black',
      }}
    >
      <FlexContainer style={{ width: 800 }}>
        <FlexContainer>
          <img
            alt='profile'
            height='64'
            width='64'
            src={`https://picsum.photos/seed/${first.name}/115/115`}
            style={{
              height: 64,
              width: 64,
              border: '1px solid rgba(255,255,255,0.5)',
              boxShadow: '1px 1px 1px black',
            }}
          />
        </FlexContainer>
        <FlexContainer $direction='column'>
          <FullContainer />
          <FlexContainer $full>
            {list.map((c) => (
              <img
                alt='profile'
                height={size}
                width={size}
                src={`https://picsum.photos/seed/${c?.name}/115/115`}
                style={{
                  height: size - 10,
                  width: size - 7,
                  border: '1px solid rgba(255,255,255,0.5)',
                  borderBottom: 'none',
                  margin: '0 4px',
                }}
              />
            ))}
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}
