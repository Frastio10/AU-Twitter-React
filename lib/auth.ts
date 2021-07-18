import { Action } from '@/store/store'
import firebase from 'firebase/app'
import { Dispatch } from 'react'

export const addUserToState = (
  user: firebase.User,
  dispatch: Dispatch<Action>
) => {
  dispatch({
    type: 'LOGIN_USER',
    user
  })
}

export const logout = async (dispatch: Dispatch<Action>) => {
  await firebase.auth().signOut()
  console.log('shit')
  dispatch({
    type: 'LOGOUT_USER'
  })
}
