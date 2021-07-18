import MustBeSignedOut from '@/components/MustBeSignedOut'
import { Button, Center } from '@chakra-ui/react'
import firebase from 'firebase/app'
import { FaGoogle } from 'react-icons/fa'

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export default function Login() {
  const login = () => firebase.auth().signInWithRedirect(googleAuthProvider)

  return (
    <>
      <MustBeSignedOut>
        <Center backgroundColor="blue.500" height="100vh">
          <Button rightIcon={<FaGoogle />} onClick={login}>
            Login With Google
          </Button>
        </Center>
      </MustBeSignedOut>
    </>
  )
}
