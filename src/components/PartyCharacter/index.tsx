import React from 'react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { XPGauge, HealthGauge } from '../Gauge'
import { BoxContainer } from '../../elements/box'
import { styled } from 'styletron-react'
import { TagPreview } from '../TagPreview'
import { PartyCharacterConsumables } from '../PartyCharacterConsumables'
import { Stats } from './Stats'
import { Name } from './Name'
import { Actions } from './Actions'
import { Health } from './Health'
import { useUIContext } from '../../contexts/UIContext'
import { tProcessedCharacter } from '../../game/Character/type'
import { tConsumable } from '../../game/Consumable/type'
import { usePlayerCharacterNotifications } from '../../hooks/usePlayerCharacterNotifications'
import { Icon } from '../Icon'
import { CHARACTER_CLASS_ICONS } from '../../icons/maps'
import { CHARACTER_CLASS_COLORS } from '../../game/Character/constants'
import { Theme } from '../../theme'
import { useCombatContext } from '../../contexts/CombatContext'
import { ZERO_STATS } from '../../game/Stats/constants'
import { HoverHexBadge, HexBadge } from '../../elements/shapes'
import { animated } from 'react-spring'
import { useElementShake } from '../../hooks/useElementShake'
import { NumberChange } from '../NumberChange'

export interface PartyCharacterProps {
  character: tProcessedCharacter
  selected?: boolean
  showActions?: boolean
  onClick?: () => void
  onConsumableClick?: (consumable: tConsumable, index: number) => void
  push: (contents: JSX.Element, type?: string) => void
}
const Wrapper = styled(animated.div, (props: any) => {
  const { $active } = props
  return {
    margin: 10,
    display: 'flex',
    position: 'relative',
    transform: $active ? 'scale(1.05)' : 'scale(1)',
    transition: 'all 0.4s',
    userSelect: 'none',
  }
})

const Halo = styled('div', (props: any) => {
  const { $active, $targeted, $light } = props
  const left = $light ? -20 : 0
  const leftR = $light ? -10 : 0
  return {
    boxShadow: $active
      ? `${left}px 0px 20px ${$light ? 'rgba(255,255,255,0.4)' : 'white'}`
      : $targeted
      ? `${leftR}px 0px 20px #ff6224  `
      : 'none',
  }
})

export const PartyCharacter = (props: PartyCharacterProps) => {
  const {
    character,
    selected,
    showActions = true,
    onConsumableClick,
    push,
  } = props
  const { playerCanEquipItem } = useUIContext()
  const { activeRound } = useCombatContext()
  const targetIds = activeRound?.targetResults.map((r) => r.target.id)
  const active = selected
  const targeted = targetIds?.includes(character.id)
  const { styles, exec } = useElementShake()
  usePlayerCharacterNotifications(character, push, exec)
  return (
    <animated.div style={styles}>
      <Wrapper
        $active={active}
        style={{
          opacity: character.health <= 0 ? 0.5 : 1,
        }}
      >
        <HexBadge
          size={110}
          stroke={3}
          color={CHARACTER_CLASS_COLORS[character.class] || Theme.darkBgColor}
          style={{
            padding: 8,
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s',
            marginRight: -58,
            marginTop: -11,
            zIndex: 3,
          }}
          childStyle={{
            marginTop: -20,
          }}
        >
          <Icon
            src={CHARACTER_CLASS_ICONS[character.class]}
            size={72}
            shadow
            style={{ marginRight: -4 }}
            fill={selected ? 'white' : 'rgba(255,255,255,0.5)'}
          />
        </HexBadge>
        <Halo $active={active} $targeted={targeted}>
          <BoxContainer
            style={{
              borderWidth: 2,
              transition: 'all 1s',
            }}
            substyle={{
              padding: 0,
              minWidth: 312,
              background: Theme.darkBgColorSolid,
            }}
          >
            <FlexContainer style={{ border: '2px solid black' }}>
              <FlexContainer $full $direction='column'>
                <Name character={character} />
                <FlexContainer style={{ background: Theme.mediumBgColor }}>
                  <Health character={character} />
                  <FlexContainer $full style={{ maxWidth: 160, minWidth: 160 }}>
                    <PartyCharacterConsumables
                      character={character}
                      consumables={character.consumables}
                      onClick={onConsumableClick}
                    />
                  </FlexContainer>
                  <FlexContainer $full $direction='column'>
                    {showActions && (
                      <Actions
                        character={character}
                        canEquip={playerCanEquipItem}
                      />
                    )}
                  </FlexContainer>
                </FlexContainer>
                <FullContainer />
                <FlexContainer $direction='column' style={{ paddingLeft: 38 }}>
                  <HealthGauge
                    character={character}
                    style={{ borderRight: 'none' }}
                  />
                  <XPGauge
                    character={character}
                    style={{ borderRight: 'none' }}
                  />
                </FlexContainer>
                <HoverHexBadge
                  position={{ bottom: 14, left: 90 }}
                  size={45}
                  rotate
                  stroke={2}
                  childStyle={{ paddingTop: 1 }}
                  content={<BoxContainer dark>Character Level</BoxContainer>}
                >
                  <span
                    style={{
                      color: 'rgba(98, 128, 116,1)',
                      fontSize: 24,
                      lineHeight: '28px',
                    }}
                  >
                    {character.level}
                  </span>
                </HoverHexBadge>
                <Stats character={character} />
              </FlexContainer>
            </FlexContainer>
          </BoxContainer>
        </Halo>
        <FlexContainer
          style={{
            position: 'absolute',
            top: '-24px',
            right: '4px',
          }}
        >
          <>
            {character.status.map((status) => (
              <TagPreview key={status.type} direction='up' status={status} />
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
          </>
        </FlexContainer>
        <HoverHexBadge
          position={{
            bottom: 61,
            left: -3,
          }}
          rotate
          stroke={2}
          size={32}
          childStyle={{
            color: Theme.physicalColor,
            fontSize: 18,
            paddingTop: 1,
          }}
          content={<BoxContainer dark>Armor</BoxContainer>}
        >
          <NumberChange value={character.stats.armor} />
        </HoverHexBadge>
        <HoverHexBadge
          position={{
            bottom: 31,
            left: -3,
          }}
          rotate
          stroke={2}
          size={32}
          childStyle={{
            color: Theme.magicColor,
            fontSize: 18,
            paddingTop: 1,
          }}
          content={<BoxContainer dark>Magic Resistance</BoxContainer>}
        >
          <NumberChange value={character.stats.resistance} />
        </HoverHexBadge>
        <HoverHexBadge
          position={{
            bottom: 16,
            left: 24,
          }}
          rotate
          stroke={2}
          size={32}
          childStyle={{
            color: Theme.evasionColor,
            fontSize: 18,
            paddingTop: 1,
          }}
          content={<BoxContainer dark>Evasion</BoxContainer>}
        >
          <NumberChange value={character.stats.evasion} />
        </HoverHexBadge>
        <HoverHexBadge
          direction='up'
          rotate={true}
          content={<BoxContainer dark>Weapon Damage</BoxContainer>}
          position={{
            bottom: -7,
            left: 52,
          }}
          stroke={2}
          size={45}
          childStyle={{
            color:
              character.weapon.damage.value <= 4
                ? 'red'
                : character.weapon.damage.type === 'physical'
                ? Theme.physicalColor
                : Theme.magicColor,
            fontSize: 24,
            paddingTop: 1,
          }}
        >
          <NumberChange
            value={
              (character.weapon.damage.value +
                character.stats.attackDamageOffset) *
              character.stats.attackDamageModifier
            }
          />
        </HoverHexBadge>
      </Wrapper>
    </animated.div>
  )
}
