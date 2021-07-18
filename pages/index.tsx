import NeedAuth from '@/components/NeedAuth'
import { store } from '@/store/store'
import { HStack } from '@chakra-ui/layout'
import { Avatar, IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { MdAdd, MdHome } from 'react-icons/md'

export default function Home() {
  const { dispatch, state } = useContext(store)

  return (
    <>
      <NeedAuth>
        <HStack backgroundColor="red.200" justifyContent="space-evenly">
          <IconButton aria-label="Home" icon={<MdHome />} variant="ghost" />
          <IconButton aria-label="Add" icon={<MdAdd />} variant="ghost" />
          <Avatar src={state.user?.photoURL!} />
        </HStack>
      </NeedAuth>
    </>
  )
}
