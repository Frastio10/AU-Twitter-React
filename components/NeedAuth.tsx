import { addUserToState } from '@/lib/auth'
import { store } from '@/store/store'
import firebase from 'firebase/app'
import router from 'next/router'
import { FC, useContext, useEffect } from 'react'

const NeedAuth: FC = ({ children }) => {
  const {
    dispatch,
    state: { user }
  } = useContext(store)

  const observer = (user: firebase.User | null) => {
    if (user) {
      addUserToState(user, dispatch)
    } else {
      router.push('/login')
    }
  }

  useEffect(() => {
    if (!user) {
      return firebase.auth().onAuthStateChanged(observer)
    }
  }, [user])

  return <>{children}</>
}

export default NeedAuth
