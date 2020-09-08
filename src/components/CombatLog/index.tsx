import React, { useRef, useEffect, useState } from 'react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { useCombatLogContext } from '../../contexts/CombatLogContext'
import { useSpring, animated } from 'react-spring'
import { Button } from '../../elements/button'

export const CombatLog = () => {
  const { combatLog } = useCombatLogContext()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  useEffect(() => {
    if (scrollRef.current && isExpanded) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [combatLog])
  const style = useSpring({
    minHeight: isExpanded ? 263 : 0,
    maxHeight: isExpanded ? 263 : 0,
  })
  return (
    <FlexContainer
      $direction='column'
      style={{
        minWidth: 300,
        overflow: 'auto',
        background: 'rgba(0,0,0,0.7)',
        fontSize: 12,
        color: 'rgba(255,255,255,0.8)',
      }}
    >
      <FlexContainer
        style={{
          background: '#111',
          padding: 8,
          alignItems: 'center',
        }}
      >
        <FullContainer>Combat Log</FullContainer>
        <Button
          onClick={() => setIsExpanded((v) => !v)}
          style={{ padding: '2px 8px' }}
        >
          {isExpanded ? '_' : '+'}
        </Button>
      </FlexContainer>
      <animated.div
        style={{
          display: 'flex',
          overflow: 'auto',
          ...style,
        }}
      >
        <FlexContainer $direction='column' style={{ padding: 8 }}>
          {combatLog.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </FlexContainer>
        <div ref={scrollRef} />
      </animated.div>
    </FlexContainer>
  )
}
