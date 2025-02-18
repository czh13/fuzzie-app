'use client'
import type { EditorActions, EditorNodeType } from "@/lib/types"
import { createContext, useContext, useReducer } from "react"

export type EditorNode = EditorNodeType

export type Editor = {
  elements: EditorNodeType[]
  edges: {
    id: string
    source: string
    target: string
  }[]
  selectedNode: EditorNodeType
}

export type HistoryState = {
  history: Editor[]
  currentIndex: number
}

export type EditorState = {
  editor: Editor
  history: HistoryState
}

const initialEditorState: EditorState['editor'] = {
  elements: [],
  selectedNode: {
    data: {
      completed: false,
      current: false,
      description: '',
      metadata: {},
      title: '',
      type: 'Trigger',
    },
    id: '',
    position: { x: 0, y: 0 },
    type: 'Trigger',
  },
  edges: [],
}

const initialHistoryState: HistoryState = {
  history: [initialEditorState],
  currentIndex: 0,
}

const initialState: EditorState = {
  editor: initialEditorState,
  history: initialHistoryState,
}


const editorReducer = (state: EditorState = initialState, action: EditorActions) => {
  switch (action.type) {
    case 'REDO':
    case 'UNDO':
    case 'LOAD_DATA':
    case 'SELECTED_ELEMENT':
    default:
      return state
  }
}


export type EditorProps = {
  children: React.ReactNode
}

export const EditorContext = createContext({})

const EditorProvider = ({ children }: EditorProps) => {
  const [state, dispatch] = useReducer(editorReducer, initialState)

  return <EditorContext.Provider value={{ state, dispatch }}>
    {children}
  </EditorContext.Provider>

}

export const useEditor = () => {
  const context = useContext(EditorContext)
  if (!context) {
    throw new Error('useEditor Hook must be used within the editor Provider')
  }
  return context
}

export default EditorProvider
