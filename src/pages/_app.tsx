import { Header } from '@/components/layouts/Header'
import '@/styles/globals.css'
import { Container, ChakraProvider, extendTheme, Spacer } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const breakpoints = { sm: '30em', md: '48em', lg: '62em', xl: '80em', '2xl': '96em' }

const theme = extendTheme({
  breakpoints,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bgGradient:
          props.colorMode === 'light'
            ? 'linear(to-r, gray.300, yellow.400, pink.200)'
            : 'linear(to-l, #7928CA, #FF0080)',
      },
    }),
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
