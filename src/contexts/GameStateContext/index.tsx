import React, { useContext, useMemo, useState } from 'react'
import {
  NodeT,
  ProcessedNodeT,
  generateTree,
  processTree,
} from '../../types/Tree'
import { useGameState, useGameStateActions } from '../../state/game'

export interface GameStateContextT {
  tree: NodeT
  processedTree: ProcessedNodeT
  activeNodeId: string
  activeNode: NodeT
  reset: () => void
  setActiveNode: (node: ProcessedNodeT) => void
  setNodeCompleted: (nodeId: string) => void
}

const _tree = generateTree()
export const defaultValue: GameStateContextT = {
  tree: _tree,
  processedTree: processTree(_tree, () => {}),
  activeNodeId: _tree.id,
  activeNode: processTree(_tree, () => {}),
  reset: () => {},
  setActiveNode: () => {},
  setNodeCompleted: () => {},
}
export const GameStateContext = React.createContext<GameStateContextT>(
  defaultValue,
)
export const useGameStateContext = () => useContext(GameStateContext)

export interface GameStateProviderPropsT {
  children: JSX.Element
}
export const GameStateContextProvider = (props: GameStateProviderPropsT) => {
  const { children } = props
  const { tree, activeNodeId } = useGameState()
  const gsc = useGameStateActions()
  const { setActiveNodeId, setNodeAsCompleted } = gsc
  const [activeNode, _setActiveNode] = useState(
    processTree(tree, () => {}, tree.id),
  )
  const setActiveNode = (node: ProcessedNodeT) => {
    setActiveNodeId(node.id)
    _setActiveNode(node)
  }

  const processedTree = useMemo(
    () => processTree(tree, setActiveNode, activeNodeId),
    [tree, activeNodeId],
  )

  const setNodeCompleted = (nodeId: string) => {
    setNodeAsCompleted(nodeId)
    if (activeNode.id === nodeId) {
      setActiveNode({
        ...activeNode,
        completed: true,
      })
    }
  }

  const reset = () => {
    const _tree = generateTree()
    gsc.reset(_tree)
    setActiveNode(processTree(_tree, setActiveNode, tree.id))
  }

  return (
    <GameStateContext.Provider
      value={{
        tree,
        processedTree,
        activeNodeId,
        activeNode,
        reset,
        setActiveNode,
        setNodeCompleted,
      }}
    >
      {children}
    </GameStateContext.Provider>
  )
}
