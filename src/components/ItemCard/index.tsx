import React from 'react'
import { styled } from 'styletron-react'
import { BoxContainer } from '../../elements/box'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { tArmor } from '../../game/Armor/type'
import { tConsumable } from '../../game/Consumable/type'
import { ITEM_RARITY_COLORS } from '../../game/Item/constants'
import { tItemRarity } from '../../game/Item/type'
import { tWeapon } from '../../game/Weapon/type'
import { ARMOR_TYPE_ICONS, WEAPON_TYPE_ICONS } from '../../icons/maps'
import { Theme } from '../../theme'
import { Icon } from '../Icon'
import { SkillCheck } from '../SkillChecks'
import { StatsPreview } from '../StatsPreview'
import Ranged from '../../icons/svg/lorc/high-shot.svg'
import Melee from '../../icons/svg/lorc/battered-axe.svg'
import Breakable from '../../icons/svg/lorc/broken-bone.svg'
import { Button } from '../../elements/button'

export const getDamageColor = (weapon: tWeapon) => {
  if (weapon.damage.type === 'physical') return 'lightblue'
  if (weapon.damage.type === 'magic') return 'plum'
  return 'white'
}

export interface ItemCardPropsT {
  item: tArmor | tWeapon | tConsumable
  showBuyButton?: boolean
  cost?: number
  onBuyClick?: () => void
}

interface ItemTitlePropsT {
  $rarity: tItemRarity
}
const ItemTitle = styled('span', (props: ItemTitlePropsT) => {
  const { $rarity } = props
  return {
    color: ITEM_RARITY_COLORS[$rarity],
    fontFamily: Theme.titleFont,
    fontSize: '18px',
    textShadow: '1px 1px 3px black',
    textTransform: 'capitalize',
  }
})
const ItemSubtitle = styled('div', {
  color: 'rgba(255,255,255,0.3)',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  textTransform: 'capitalize',
  fontSize: '13px',
})

export const ItemCard = (props: ItemCardPropsT) => {
  const { item, cost, showBuyButton, onBuyClick } = props
  const isArmor = item.itemType === 'armor'
  const isWeapon = item.itemType === 'weapon'
  const isConsumable = item.itemType === 'consumable'
  const rarityColor = ITEM_RARITY_COLORS[item.rarity]
  const weapon = item as tWeapon
  const armor = item as tArmor
  const consumable = item as tConsumable
  const skill = weapon.skills
    ? weapon.skills[0]
    : armor.skills
    ? armor.skills[0]
    : undefined
  const skills = consumable.skill
    ? [consumable.skill]
    : weapon.skills
    ? weapon.skills
    : armor.skills
  return (
    <FlexContainer
      $direction='column'
      style={{ border: '1px solid black', width: 240, textAlign: 'left' }}
    >
      <BoxContainer
        style={{
          borderWidth: 2,
          borderColor: rarityColor,
        }}
        substyle={{
          border: `1px solid ${Theme.darkBgColorSolid}`,
          background: Theme.otherGrey,
          padding: 0,
          boxShadow: 'none',
        }}
      >
        <FlexContainer $full $direction='column'>
          <FlexContainer
            style={{
              height: 56,
              whiteSpace: 'nowrap',
              alignItems: 'center',
              background: Theme.mediumBgColor,
              padding: '0px 16px 0 8px',
              boxShadow: '0px 2px 3px black',
              marginBottom: 8,
              marginTop: -2,
              marginRight: -1,
              marginLeft: -1,
            }}
          >
            {isWeapon && (
              <Icon
                src={WEAPON_TYPE_ICONS[weapon.type]}
                fill={rarityColor}
                size={32}
                style={{ marginRight: 10 }}
                shadow
              />
            )}
            {isArmor && (
              <Icon
                src={ARMOR_TYPE_ICONS[armor.type]}
                fill={rarityColor}
                size={32}
                style={{ marginRight: 10 }}
                shadow
              />
            )}
            <FlexContainer $direction='column' $full>
              <ItemTitle $rarity={item.rarity}>{item.name}</ItemTitle>
              <ItemSubtitle>
                <span>
                  {item.rarity} {weapon.type}
                </span>
                <span>{weapon.twoHand && '2-hand'}</span>
              </ItemSubtitle>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer $direction='column' style={{ padding: 4 }}>
            {skill && (
              <FlexContainer style={{ marginBottom: 8, padding: 4 }}>
                <FullContainer />
                {Array(skill.rolls)
                  .fill(null)
                  .map((_, i) => (
                    <SkillCheck
                      key={i}
                      check={{ label: weapon.stat, result: true }}
                      size={18}
                      padding={4}
                      skill={skill}
                    />
                  ))}
                <FullContainer />
              </FlexContainer>
            )}
            <BoxContainer
              dark
              substyle={{
                minHeight: 120,
                textAlign: 'left',
              }}
            >
              <FlexContainer>
                <FlexContainer $full $direction='column'>
                  {weapon.damage && (
                    <FlexContainer
                      style={{
                        height: 28,
                        marginBottom: 4,
                        alignItems: 'flex-end',
                      }}
                    >
                      <span
                        style={{
                          color: getDamageColor(weapon),
                          fontWeight: 'bolder',
                          marginRight: 8,
                          fontSize: 32,
                          lineHeight: '28px',
                        }}
                      >
                        {weapon.damage.value}
                      </span>
                      <span
                        style={{
                          textTransform: 'capitalize',
                          color: 'rgba(255,255,255,0.4)',
                        }}
                      >
                        {weapon.damage.type} Damage
                      </span>
                    </FlexContainer>
                  )}
                  {skills && (
                    <span
                      style={{
                        color: 'plum',
                        fontSize: 16,
                        marginBottom: 4,
                      }}
                    >
                      {skills.map((skill, i) => (
                        <span key={i}>
                          {i > 0 ? ', ' : ''}
                          {skill.name}
                        </span>
                      ))}
                    </span>
                  )}
                  <div style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {weapon.stats && <StatsPreview stats={weapon.stats} />}
                    {weapon.immunities && (
                      <FlexContainer
                        $direction='column'
                        style={{ fontSize: 14 }}
                      >
                        {weapon.immunities.some((s) => s.includes('cursed')) &&
                          'Cursed Immunity'}
                        {weapon.immunities
                          .filter((s) => !s.includes('cursed'))
                          .map((status) => (
                            <span
                              style={{
                                textTransform: 'capitalize',
                                fontSize: 14,
                              }}
                            >
                              {status} immunity
                            </span>
                          ))}
                      </FlexContainer>
                    )}
                  </div>
                </FlexContainer>
                {isWeapon && (
                  <FlexContainer
                    $direction='column'
                    style={{ alignItems: 'center' }}
                  >
                    <Icon
                      src={weapon.damage.range === 'melee' ? Melee : Ranged}
                      size={16}
                      fill='rgba(255,255,255,0.3)'
                      style={{ marginBottom: 4 }}
                    />

                    {weapon.breakable && (
                      <Icon src={Breakable} size={16} fill='gold' />
                    )}
                  </FlexContainer>
                )}
              </FlexContainer>
            </BoxContainer>
            {showBuyButton && (
              <FlexContainer style={{ justifyContent: 'center', marginTop: 4 }}>
                <Button
                  onClick={onBuyClick}
                  style={{ padding: '8px 16px', width: '100%' }}
                >
                  Buy ({cost || 0})
                </Button>
              </FlexContainer>
            )}
          </FlexContainer>
        </FlexContainer>
      </BoxContainer>
    </FlexContainer>
  )
}
