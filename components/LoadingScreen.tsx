import { Center, Spinner, Text } from '@chakra-ui/react'
import { FC } from 'react'

const LoadingScreen: FC = ({ children }) => {
  return (
    <Center flexDir="column">
      <Spinner />
      <Text>{children}</Text>
    </Center>
  )
}

export default LoadingScreen
