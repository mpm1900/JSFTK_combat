import React from 'react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { HealthGauge } from '../Gauge'
import { styled } from 'styletron-react'
import { Badge, HoverBadge } from '../../elements/badge'
import { BoxContainer } from '../../elements/box'
import { TagPreview } from '../TagPreview'
import { CharacterImage } from '../CharacterImage'
import { usePrevious } from '../../hooks/usePrevious'
import { Spring } from 'react-spring/renderprops'
import { noneg } from '../../util'
import { Icon } from '../Icon'
import { tProcessedCharacter } from '../../game/Character/type'
import { Health } from './Health'
import { LocalToastRp } from '../../contexts/LocalToastContext'
import { STATUS_CONFIG } from '../../game/Status/constants'
import { tStats } from '../../game/Stats/type'
import { tStatus } from '../../game/Status/type'
import { ZERO_STATS } from '../../game/Stats/constants'
import { Theme } from '../../theme'

export interface EnemyCharacterPropsT {
  character: tProcessedCharacter
  activeCharacter: tProcessedCharacter
  hoverable?: boolean
  selected?: boolean
  isHovering?: boolean
  isBoss?: boolean
  onClick?: () => void
}
const Wrapper = styled('div', (props: any) => {
  const { $selected, $active } = props
  return {
    margin: 10,
    boxShadow: $active ? '0px 0px 20px white' : 'none',
    transition: 'all 0.1s',
  }
})
export const EnemyCharacter = (props: EnemyCharacterPropsT) => {
  const { character, activeCharacter, isBoss = false, onClick } = props
  const health = noneg(character.health)
  const previousHealth = usePrevious<number>(health)
  return (
    <div
      onClick={() => (onClick && character.health > 0 ? onClick() : null)}
      style={{
        borderWidth: 2,
        width: isBoss ? 600 : 320,
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        color: 'rgba(255,255,255,0.8)',
        opacity: character.health <= 0 ? 0.5 : 1,
      }}
    >
      <FlexContainer style={{ alignItems: 'center' }}>
        <FlexContainer>
          <Icon
            src={character.icon || ''}
            shadow
            fill={
              activeCharacter && character.id === activeCharacter.id
                ? 'lightsalmon'
                : 'white'
            }
            size={64}
            style={{ zIndex: 1, position: 'relative', marginRight: -24 }}
          />
        </FlexContainer>
        <FlexContainer $full $direction='column'>
          <FlexContainer
            style={{
              justifyContent: 'flex-end',
            }}
          >
            <span
              style={{
                padding: '2px 4px',
                textAlign: 'right',
                fontSize: 18,
                lineHeight: '18px',
                background: 'rgba(0,0,0,0.4)',
                textShadow: '1px 1px 2px black',
                fontFamily: 'Bangers',
                color: isBoss ? 'red' : 'rgba(255,255,255,0.8)',
                letterSpacing: '1px',
              }}
            >
              {character.name}
            </span>
          </FlexContainer>
          <div style={{ boxShadow: '0px 4px 15px rgba(0,0,0,1)' }}>
            <HealthGauge character={character} height={20} />
          </div>
          <HoverBadge
            direction='down'
            content={<BoxContainer>Enemy Level</BoxContainer>}
            badgeProps={{
              $left: '-6px',
              $bottom: '-6px',
              $size: '16px',
              $color: 'lightcoral',
            }}
          >
            <span>{character.level}</span>
          </HoverBadge>
          <FlexContainer
            style={{
              position: 'absolute',
              bottom: '-12px',
              left: '40px',
            }}
          >
            {character.status.map((status, i) => (
              <TagPreview key={i} status={status} />
            ))}
            {character.immunities.map((status, i) => (
              <TagPreview
                key={i}
                immunity={true}
                status={{
                  type: status,
                  immunities: [],
                  stack: 0,
                  stats: ZERO_STATS,
                  duration: -1,
                }}
              />
            ))}
          </FlexContainer>
          <FlexContainer
            style={{
              position: 'absolute',
              bottom: '-8px',
              right: '16px',
              width: 52,
              alignItems: 'center',
            }}
          >
            <FullContainer />
            {character.stats.armor > 0 && (
              <HoverBadge
                direction='down'
                content={<BoxContainer>Armor</BoxContainer>}
                badgeProps={{
                  $top: '-17px',
                  $right: '-10px',
                  $size: '12px',
                  $color: Theme.physicalColor,
                }}
              >
                <span>{character.stats.armor}</span>
              </HoverBadge>
            )}
            {character.stats.resistance > 0 && (
              <HoverBadge
                direction='down'
                content={<BoxContainer>Magic Resistance</BoxContainer>}
                badgeProps={{
                  $top: '-17px',
                  $right: '17px',
                  $size: '12px',
                  $color: Theme.magicColor,
                }}
              >
                <span>{character.stats.resistance}</span>
              </HoverBadge>
            )}
            <FullContainer />
          </FlexContainer>
        </FlexContainer>
        <LocalToastRp style={{ top: -24, right: -30, flexDirection: 'column' }}>
          {({ push }) => <Health character={character} push={push} />}
        </LocalToastRp>
      </FlexContainer>
    </div>
  )
}
