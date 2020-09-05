import React from 'react'
import { ProcessedCharacterT, StatsT } from '../../types'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { XPGauge, HealthGauge } from '../Gauge'
import { BoxContainer } from '../../elements/box'
import { Monodiv } from '../../elements/monospace'
import { styled, withStyle } from 'styletron-react'
import { HoverBadge } from '../../elements/badge'
import { Icon } from '../Icon'
import { STATI_ICONS } from '../../icons/maps'
import Details from '../../icons/svg/delapouite/skills.svg'
import Inventory from '../../icons/svg/lorc/knapsack.svg'
import { TagPreview } from '../TagPreview'
import { CharacterImage } from '../CharacterImage'
import { ConsumableT } from '../../types/Consumable'
import { PartyCharacterConsumables } from '../PartyCharacterConsumables'
import { Spring } from 'react-spring/renderprops'
import { noneg } from '../../util'
import { usePrevious } from '../../hooks/usePrevious'
import { HoverToolTip, ClickToolTip, Tooltip } from '../Tooltip'
import { PartyActiveCharacter } from '../PartyActiveCharacter'
import { usePartyContext } from '../../contexts/PartyContext'
import { Hover } from '../Hover'
import { useUIContext } from '../../contexts/UIContext'

const ResourceE = withStyle(Monodiv, (props: any) => ({
  height: 15,
  color: props.$color,
  fontSize: '12px',
  fontWeight: 'bolder',
  padding: '0px 4px',
  lineHeight: '15px',
  flex: 1,
  textAlign: 'center',
  background: '#111',
  display: 'flex',
}))

export interface PartyCharacterProps {
  character: ProcessedCharacterT
  selected?: boolean
  canEquip?: boolean
  showActions?: boolean
  onClick?: () => void
  onConsumableClick?: (consumable: ConsumableT, index: number) => void
}
const Wrapper = styled('div', (props: any) => {
  const { $active } = props
  return {
    margin: 10,
    position: 'relative',
    boxShadow: $active ? '0px 0px 20px white' : 'none',
    transition: 'all 0.4s',
    userSelect: 'none',
  }
})

interface CharacterStatPropsT {
  statKey: keyof StatsT
  character: ProcessedCharacterT
}
const CharacterStat = (props: CharacterStatPropsT) => {
  const { statKey, character } = props
  return (
    <ResourceE $color={getStatColor(character, statKey)}>
      <Icon
        src={STATI_ICONS[statKey] || ''}
        fill={getStatColor(character, statKey)}
        size={14}
        style={{ marginRight: 4 }}
      />
      {character.stats[statKey]}
    </ResourceE>
  )
}

const getStatColor = (
  character: ProcessedCharacterT,
  key: keyof StatsT,
): string => {
  const a = character.stats[key]
  const b = character.rawStats[key]
  if (a > b) return 'lightgreen'
  if (b > a) return 'lightcoral'
  return 'rgba(255,255,255,0.6)'
}

export const PartyCharacter = (props: PartyCharacterProps) => {
  const {
    character,
    selected,
    canEquip = false,
    showActions = true,
    onConsumableClick,
  } = props
  const { party, equipItem } = usePartyContext()
  const {
    openCharacterInventoryId,
    setOpenCharacterInventoryId,
  } = useUIContext()
  const health = noneg(character.health - character.stats.healthOffset)
  const previousHealth = usePrevious<number>(health)
  return (
    <Wrapper
      $active={selected}
      style={{
        opacity: character.dead ? 0.5 : 1,
      }}
    >
      <BoxContainer
        style={{
          borderWidth: 2,
        }}
        substyle={{ padding: 0, minWidth: 420 }}
      >
        <FlexContainer style={{ border: '2px solid black' }}>
          <FlexContainer style={{ borderRight: '2px solid black' }}>
            <CharacterImage character={character} size={115} />
          </FlexContainer>
          <FlexContainer $full $direction='column'>
            <FlexContainer
              style={{
                marginTop: -3,
                marginRight: -3,
                padding: '0 4px',
                paddingLeft: 8,
                background: '#555',
                height: 20,
                lineHeight: '24px',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0px 4px 5px black',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontWeight: 'bolder',
                  textShadow: '0px 0px 2px black',
                }}
              >
                {character.name}
              </span>
            </FlexContainer>
            <FlexContainer>
              <span
                style={{
                  fontWeight: 'bolder',
                  padding: 4,
                  fontSize: 42,
                  height: 62,
                  lineHeight: '70px',
                  color: '#b55553',
                }}
              >
                <Spring
                  from={{ hp: previousHealth || health }}
                  to={{ hp: health }}
                >
                  {(hpp) => <span>{Math.floor(hpp.hp)}</span>}
                </Spring>
              </span>
              <FlexContainer $full style={{ maxWidth: 175, minWidth: 175 }}>
                <PartyCharacterConsumables
                  character={character}
                  consumables={character.consumables}
                  onClick={onConsumableClick}
                />
              </FlexContainer>
              <FlexContainer $full $direction='column'>
                <FullContainer />
                {showActions && (
                  <FlexContainer>
                    <FlexContainer
                      $full
                      style={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Tooltip
                        isOpen={character.id === openCharacterInventoryId}
                        direction='up'
                        distance={80}
                        content={
                          <PartyActiveCharacter
                            character={character}
                            party={party}
                            equipItem={equipItem}
                            canEquip={canEquip}
                            onRequestClose={() => {
                              setOpenCharacterInventoryId(undefined)
                            }}
                          />
                        }
                      >
                        <Hover delay={0}>
                          {({ isHovering }) => (
                            <Icon
                              src={Inventory}
                              fill={
                                isHovering
                                  ? 'rgba(255,255,255,1)'
                                  : 'rgba(255,255,255,0.7)'
                              }
                              size={18}
                              shadow
                              onClick={() => {
                                if (character.id === openCharacterInventoryId) {
                                  return setOpenCharacterInventoryId(undefined)
                                }
                                setOpenCharacterInventoryId(character.id)
                              }}
                              style={{ padding: 6, cursor: 'pointer' }}
                            />
                          )}
                        </Hover>
                      </Tooltip>
                    </FlexContainer>
                    <FlexContainer
                      $full
                      style={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Icon
                        src={Details}
                        fill={'rgba(255,255,255,0.7)'}
                        size={18}
                        shadow
                        style={{ padding: 6, cursor: 'pointer' }}
                      />
                    </FlexContainer>
                  </FlexContainer>
                )}
              </FlexContainer>
            </FlexContainer>
            <FullContainer />
            <HealthGauge character={character} />
            <XPGauge character={character} />
            <HoverBadge
              badgeProps={{ $bottom: '18px', $left: '105px' }}
              content={<BoxContainer>Character Level</BoxContainer>}
            >
              <span>{character.level}</span>
            </HoverBadge>
            <FlexContainer>
              <CharacterStat statKey='strength' character={character} />
              <CharacterStat statKey='vigor' character={character} />
              <CharacterStat statKey='intelligence' character={character} />
              <CharacterStat statKey='perception' character={character} />
              <CharacterStat statKey='talent' character={character} />
              <CharacterStat statKey='agility' character={character} />
              <CharacterStat statKey='luck' character={character} />
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </BoxContainer>
      <FlexContainer
        style={{
          position: 'absolute',
          top: '-24px',
          right: '4px',
        }}
      >
        {character.statusEffects.map((tag) => (
          <TagPreview direction='up' tag={tag} />
        ))}
      </FlexContainer>
      <HoverBadge
        badgeProps={{ $bottom: '64px', $left: '-12px', $color: 'lightblue' }}
        content={<BoxContainer>Armor</BoxContainer>}
      >
        <span>{character.stats.armor}</span>
      </HoverBadge>
      <HoverBadge
        badgeProps={{ $bottom: '26px', $left: '-12px', $color: 'plum' }}
        content={<BoxContainer>Magic Resistance</BoxContainer>}
      >
        <span>{character.stats.resistance}</span>
      </HoverBadge>
      <HoverBadge
        badgeProps={{ $bottom: '-10px', $left: '-12px', $color: 'lightgreen' }}
        content={<BoxContainer>Evasion</BoxContainer>}
      >
        <span>{character.stats.evasion}</span>
      </HoverBadge>
      <HoverBadge
        direction='up'
        content={<BoxContainer>Weapon Damage</BoxContainer>}
        badgeProps={{
          $bottom: '-12px',
          $left: '40px',
          $size: '35px',
          $color:
            character.weapon.damage.type === 'physical'
              ? 'rgba(255,255,255,0.8)'
              : 'plum',
          style: { fontSize: 24 },
        }}
      >
        <span>
          {character.weapon.damage.damage + character.stats.damageModifier}
        </span>
      </HoverBadge>
    </Wrapper>
  )
}
