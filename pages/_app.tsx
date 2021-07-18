import { customTheme } from '@/chakra.theme'
import '@/lib/firebaseInit'
import { StateProvider } from '@/store/store'
import '@/styles/fonts.css'
import { ChakraProvider } from '@chakra-ui/react'
import 'firebase/auth'
import 'firebase/firestore'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </StateProvider>
  )
}
export default MyApp
