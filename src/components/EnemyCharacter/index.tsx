import React from 'react'
import { ProcessedCharacterT } from '../../types'
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

export interface EnemyCharacterPropsT {
  character: ProcessedCharacterT
  activeCharacter: ProcessedCharacterT
  hoverable?: boolean
  selected?: boolean
  isHovering?: boolean
  onClick?: () => void
}
const Wrapper = styled('div', (props: any) => {
  const { $selected, $active, $hoverable, $isHovering } = props
  const hoverable = $hoverable && !$selected
  return {
    margin: 10,
    boxShadow: $active ? '0px 0px 20px white' : 'none',
    transition: 'all 0.1s',
  }
})
export const EnemyCharacter = (props: EnemyCharacterPropsT) => {
  const { character, activeCharacter, onClick } = props
  const health = noneg(character.health - character.stats.healthOffset)
  const previousHealth = usePrevious<number>(health)
  return (
    <div
      onClick={() => (onClick && !character.dead ? onClick() : null)}
      style={{
        borderWidth: 2,
        width: 380,
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        color: 'rgba(255,255,255,0.8)',
        opacity: character.dead ? 0.5 : 1,
      }}
    >
      <FlexContainer style={{ alignItems: 'center' }}>
        <FlexContainer style={{ border: '1px solid black' }}>
          <Wrapper
            $active={character.id === activeCharacter.id}
            style={{
              height: 64,
              width: 64,
            }}
          >
            <CharacterImage character={character} size={64} />
          </Wrapper>
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
              $left: '-6px',
              $bottom: '-6px',
              $size: '20px',
              $color: 'lightcoral',
            }}
          >
            <span>{character.level}</span>
          </HoverBadge>
          <FlexContainer
            style={{
              position: 'absolute',
              bottom: '-10px',
              left: '70px',
            }}
          >
            {character.tags.map((tag, i) => (
              <TagPreview key={i} tag={tag} />
            ))}
          </FlexContainer>
          <FlexContainer
            style={{
              position: 'absolute',
              bottom: '-6px',
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
          <Spring from={{ hp: previousHealth || health }} to={{ hp: health }}>
            {(hpp) => <span>{Math.floor(hpp.hp)}</span>}
          </Spring>
        </span>
      </FlexContainer>
    </div>
  )
}