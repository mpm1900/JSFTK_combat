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

export interface EnemyCharacterPropsT {
  character: tProcessedCharacter
  activeCharacter: tProcessedCharacter
  hoverable?: boolean
  selected?: boolean
  isHovering?: boolean
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
  const { character, activeCharacter, onClick } = props
  const health = noneg(character.health)
  const previousHealth = usePrevious<number>(health)
  return (
    <div
      onClick={() => (onClick && character.health > 0 ? onClick() : null)}
      style={{
        borderWidth: 2,
        width: 320,
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
              }}
            >
              {character.name}
            </span>
          </FlexContainer>
          <div style={{ boxShadow: '0px 5px 15px rgba(0,0,0,0.4)' }}>
            <HealthGauge character={character} height={20} />
          </div>
          <HoverBadge
            direction='down'
            content={<BoxContainer>Enemy Level</BoxContainer>}
            badgeProps={{
              $left: '-14px',
              $bottom: '-12px',
              $size: '20px',
              $color: 'lightcoral',
            }}
          >
            <span>{character.level}</span>
          </HoverBadge>
          <FlexContainer
            style={{
              position: 'absolute',
              bottom: '-17px',
              left: '52px',
            }}
          >
            {character.status.map((status, i) => (
              <TagPreview key={i} status={status} />
            ))}
          </FlexContainer>
          <FlexContainer
            style={{
              position: 'absolute',
              bottom: '-16px',
              right: '16px',
              width: 52,
              alignItems: 'center',
            }}
          >
            <FullContainer />
            {character.stats.armor > 0 && (
              <Badge
                $absolute={false}
                $right='4px'
                $size='12px'
                $color='lightblue'
              >
                {character.stats.armor}
              </Badge>
            )}
            {character.stats.resistance > 0 && (
              <Badge $absolute={false} $size='12px' $color='plum'>
                {character.stats.resistance}
              </Badge>
            )}
            <FullContainer />
          </FlexContainer>
        </FlexContainer>
        <span
          style={{
            fontWeight: 'bolder',
            fontSize: 52,
            height: 52,
            width: 60,
            textShadow: '1px 1px 10px black',
            color: '#b55553',
          }}
        >
          <Spring
            from={{ hp: previousHealth || 0 }}
            to={{ hp: health }}
            config={{ friction: 70, mass: 5, tension: 300, clamp: true }}
          >
            {(hpp) => <span>{Math.floor(hpp.hp)}</span>}
          </Spring>
        </span>
      </FlexContainer>
    </div>
  )
}
