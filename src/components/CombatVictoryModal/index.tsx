import React, { useMemo, useEffect, useState } from 'react'
import { CombatRewardT } from '../../types/CombatReward'
import { consolidateRewards, commitRewards } from '../../functions'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { Button } from '../../elements/button'
import { useHistory } from 'react-router'
import { usePartyContext } from '../../contexts/PartyContext'
import { useModalContext } from '../../contexts/ModalContext'
import Gold from '../../icons/svg/delapouite/coins.svg'
import XP from '../../icons/svg/lorc/laurel-crown.svg'
import { Icon } from '../Icon'
import { ItemPreivew } from '../ItemPreview'
import { useGameStateContext } from '../../contexts/GameStateContext'

export interface CombatVictoryModalPropsT {
  rewards: CombatRewardT[]
}

export const CombatVictoryModal = (props: CombatVictoryModalPropsT) => {
  const { rewards } = props
  const { rawParty, updateParty } = usePartyContext()
  const { nextLevel } = useGameStateContext()
  const { close } = useModalContext()
  const history = useHistory()
  const consolidatedRewards = useMemo(() => consolidateRewards(rewards), [
    rewards,
  ])

  const [items, setItems] = useState(consolidatedRewards.items)
  const first = items[0]
  const next = () => {
    if (items.length === 0) {
      close()
      nextLevel()
      history.push('/JSFTK_combat/party')
    } else {
      setItems((i) => {
        const [first, ...rest] = i
        return rest
      })
    }
  }

  useEffect(() => {
    updateParty(commitRewards(rawParty, consolidatedRewards))
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>You Win!</h1>
      <FlexContainer $direction='column' style={{ color: 'white' }}>
        <FlexContainer style={{ marginBottom: 16 }}>
          <FlexContainer>
            <Icon src={Gold} size={18} style={{ marginRight: 8 }} />
            <span>{consolidatedRewards.gold} Gold</span>
          </FlexContainer>
          <FullContainer />
          <FlexContainer>
            <Icon src={XP} size={18} style={{ marginRight: 8 }} />
            <span>{consolidatedRewards.xp} XP</span>
          </FlexContainer>
        </FlexContainer>
        {first && (
          <FlexContainer style={{ marginBottom: 16 }}>
            <FullContainer />
            <FlexContainer $direction='column'>
              <ItemPreivew item={first} />
              <span
                style={{
                  marginTop: 8,
                  color: 'rgba(255,255,255,0.3)',
                  fontWeight: 'bold',
                  fontSize: 12,
                }}
              >
                1 of {items.length}
              </span>
            </FlexContainer>
            <FullContainer />
          </FlexContainer>
        )}
      </FlexContainer>
      <Button
        onClick={() => {
          next()
        }}
      >
        {items.length === 0 ? 'Close' : 'Next'}
      </Button>
    </div>
  )
}
