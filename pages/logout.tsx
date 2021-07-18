import { logout } from '@/lib/auth'
import { store } from '@/store/store'
import { useContext, useEffect } from 'react'

export default function Logout() {
  const { dispatch } = useContext(store)

  useEffect(() => {
    logout(dispatch)
  }, [])

  return (
    <>
      <p>jsx shit</p>
    </>
  )
}
