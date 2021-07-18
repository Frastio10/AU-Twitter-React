import { addUserToState } from '@/lib/auth'
import { store } from '@/store/store'
import firebase from 'firebase/app'
import router from 'next/router'
import React, { FC, useContext, useEffect } from 'react'

const MustBeSignedOut: FC = ({ children }) => {
  const {
    dispatch,
    state: { user }
  } = useContext(store)

  const observer = (user: firebase.User | null) => {
    if (user) {
      addUserToState(user, dispatch)
      router.push('/')
    }
  }

  useEffect(() => {
    if (user) {
      router.push('/')
    } else {
      return firebase.auth().onAuthStateChanged(observer)
    }
  }, [user])

  return <>{children}</>
}

export default MustBeSignedOut
