import Tree from 'react-tree-graph'
import * as TreeGen from 'tree-json-generator'
import 'react-tree-graph/dist/style.css'
import { EntityT } from './core'
import { HTMLProps } from 'react'

export interface NodeT<T = any> extends EntityT {
  children: NodeT[]
  type: 0 | 1
  completed: boolean
  level: number
  parentId?: string
  gProps?: HTMLProps<SVGGElement>
  payload?: T
}
export interface ProcessedNodeT<T = any> extends NodeT {
  children: ProcessedNodeT<T>[]
  gProps: HTMLProps<SVGGElement>
  parentId: string
  payload: T
  processed: true
}

export const generateTree = (): NodeT => {
  const config = {
    node: {
      id: '@id()', // Pipes
      type: 0,
      completed: false,
      name: '@randomInteger(0,1)',
      children: '@child()', // Child field pointer (not required, if children are not needed)
      level: '@level()',
    },
    rootNodesNumber: 1, // Number of root nodes
    childNodesNumber: [1, 2], // Number of children nodes (from 2 to 5)
    hasChildRate: 1, // Probability of children
    maxLevel: 10, // Max nesting
  }
  const tree = TreeGen.generate(config)
  return tree[0]
}

export const complete = (
  tree: NodeT,
  activeNodeId: string,
  parentId?: string,
): NodeT => {
  return {
    ...tree,
    parentId: tree.parentId || parentId,
    completed: tree.completed || tree.id === activeNodeId,
    children: (tree.children || []).map((c) =>
      complete(c, activeNodeId, tree.id),
    ),
  }
}

export const findNode = (
  tree: NodeT,
  nodeId: string | undefined,
): NodeT | undefined => {
  if (tree.id === nodeId) return tree
  return (tree.children || []).find((node) => findNode(node, nodeId))
}

export const processTree = (
  tree: NodeT,
  onNextClick: (node: ProcessedNodeT) => void,
  activeNodeId?: string,
  parentId?: string,
): ProcessedNodeT => {
  activeNodeId = activeNodeId || tree.id
  const isActive = tree.id === activeNodeId
  const canNav = activeNodeId === parentId
  return {
    ...tree,
    name: tree.completed ? 'CLEARED' : '???',
    parentId: parentId || 'root',
    children: (tree.children || []).map((c) =>
      processTree(c, onNextClick, activeNodeId, tree.id),
    ),
    gProps: {
      onClick: () => {
        if (canNav) {
          onNextClick(processTree(tree, onNextClick, activeNodeId, parentId))
        }
      },
      style: {
        fill: isActive ? 'blue' : canNav ? 'lightcoral' : undefined,
        cursor: canNav ? 'pointer' : undefined,
      },
    },
    payload: tree.payload || {},
    processed: true,
  }
}
