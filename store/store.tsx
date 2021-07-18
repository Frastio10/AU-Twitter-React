import firebase from 'firebase'
import { createContext, Dispatch, FC, useReducer } from 'react'

export interface AppState {
  user: firebase.User | null
}

export type Action =
  | {
      type: 'LOGIN_USER'
      user: firebase.User
    }
  | {
      type: 'LOGOUT_USER'
    }

export interface StoreType {
  state: AppState
  dispatch: Dispatch<Action>
}

const defaultState: AppState = {
  user: null
}

export const store = createContext<StoreType>({
  dispatch() {
    console.error('Context not found!')
  },
  state: defaultState
})
const { Provider } = store

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.user
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null
      }
  }
}

export const StateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
