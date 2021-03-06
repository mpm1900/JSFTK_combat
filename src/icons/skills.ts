import Shot from './svg/lorc/high-shot.svg'
import Headshot from './svg/delapouite/shield-impact.svg'
import PinDown from './svg/lorc/energy-arrow.svg'

import Arcane from './svg/lorc/fire-zone.svg'
import Blast from './svg/lorc/magic-swirl.svg'
import Nova from './svg/lorc/heavy-timer.svg'
import TimeJump from './svg/delapouite/extra-time.svg'
import Enflame from './svg/sbed/lucifer-cannon.svg'
import Engulf from './svg/delapouite/firewall.svg'

import Smash from './svg/lorc/flat-hammer.svg'
import Shockwave from './svg/lorc/hammer-drop.svg'
import Thrust from './svg/lorc/scythe.svg'
import Chop from './svg/lorc/battered-axe.svg'
import Strike from './svg/lorc/plain-dagger.svg'
import Stab from './svg/lorc/knife-thrust.svg'
import Cleave from './svg/lorc/pointy-sword.svg'
import AxeSpin from './svg/lorc/axe-swing.svg'
import Slice from './svg/lorc/saber-slash.svg'
import Lunge from './svg/lorc/wave-strike.svg'
import Slash from './svg/lorc/sparkling-sabre.svg'

import Taunt from './svg/lorc/bordered-shield.svg'

import Ring from './svg/lorc/ringing-bell.svg'
import Reverberate from './svg/lorc/resonance.svg'
import Protect from './svg/lorc/shieldcomb.svg'
import Rush from './svg/lorc/sprint.svg'

import Fire from './svg/lorc/gunshot.svg'
import Snipe from './svg/delapouite/crosshair.svg'
import FanFire from './svg/delapouite/bullet-impacts.svg'

import Reset from './svg/delapouite/backward-time.svg'
import Slow from './svg/lorc/snail.svg'
import SpreadShot from './svg/lorc/double-shot.svg'

import Heal from './svg/sbed/health-normal.svg'
import Bless from './svg/lorc/embrassed-energy.svg'
import PoisonKnife from './svg/lorc/bone-knife.svg'
import Firebomb from './svg/lorc/molotov.svg'

import Restore from './svg/lorc/life-support.svg'
import EvadeUp from './svg/lorc/dodging.svg'

import ArmorUp from './svg/delapouite/armor-upgrade.svg'
import ArmorDown from './svg/delapouite/armor-downgrade.svg'
import Punch from './svg/lorc/punch.svg'

import Stun from './svg/lorc/ubisoft-sun.svg'

import AttackUp from './svg/lorc/all-for-one.svg'
import CurePotion from './svg/lorc/drink-me.svg'

export const SKILL_ICONS: Record<string, string> = {
  Punch: Punch,

  Shot: Shot,
  Headshot: Headshot,
  'Pin Down': PinDown,
  Flurry: SpreadShot,

  Arcane: Arcane,
  Nova: Nova,
  Blast: Blast,
  'Time Jump': TimeJump,
  Enflame: Enflame,
  Engulf: Engulf,

  Ring: Ring,
  Reverberate: Reverberate,

  Smash: Smash,
  Strike: Strike,
  Swing: Chop,
  Chop: Chop,
  Thrust: Thrust,
  Earthquake: Shockwave,
  Ripple: Shockwave,
  Crush: Shockwave,
  'Axe Spin': AxeSpin,
  Cleave: Cleave,
  Slash: Slash,
  Lunge: Lunge,
  Stab: Stab,
  Slice: Stab,
  Swipe: Slice,

  Fire: Fire,
  Snipe: Snipe,
  'Fan Fire': FanFire,

  Stun: Stun,
  Reset: Reset,
  Taunt: Taunt,
  Slow: Slow,
  Protect: Protect,

  Heal: Heal,
  'Remove Curses': Bless,
  'Poison Knife': PoisonKnife,
  Firebomb: Firebomb,
  'Cure Potion': CurePotion,
  Restore: Restore,
  Rush: Rush,
  Vanish: EvadeUp,
  'Evade Up': EvadeUp,
  'Armor Up': ArmorUp,
  'Attack Up': AttackUp,
  'Armor Down': ArmorDown,
  'Beast Drug': AttackUp,
}
