import React, { useRef, useEffect } from 'react'
import { FlexContainer } from '../../elements/flex'
import { useCombatLogContext } from '../../contexts/CombatLogContext'

export const CombatLog = () => {
  const { combatLog } = useCombatLogContext()
  const scrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [combatLog])
  return (
    <FlexContainer
      $direction='column'
      style={{
        padding: 8,
        minWidth: 300,
        height: 300,
        overflow: 'auto',
        background: 'rgba(0,0,0,0.7)',
        fontSize: 12,
        color: 'rgba(255,255,255,0.8)',
      }}
    >
      {combatLog.map((line, i) => (
        <span key={i}>{line}</span>
      ))}
      <div ref={scrollRef} />
    </FlexContainer>
  )
}
