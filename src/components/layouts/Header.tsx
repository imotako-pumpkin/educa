import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/next-js'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Spacer,
  Stack,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <>
      <Flex h={16} position='fixed' top={0} left={0} right={0} zIndex={999}>
        <Spacer />
        <Menu />
      </Flex>
      <Spacer h={16} />
    </>
  )
}

const Menu: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      {!isOpen && (
        <>
          <IconButton
            aria-label='color-mode'
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            size={['md', 'md', 'lg', 'lg', 'lg']}
            m={4}
            onClick={toggleColorMode}
            backgroundColor={'transparent'}
          />
          <IconButton
            aria-label='hamburger'
            icon={<HamburgerIcon />}
            onClick={() => onOpen()}
            size={['md', 'md', 'lg', 'lg', 'lg']}
            m={4}
            backgroundColor={'transparent'}
          />
        </>
      )}

      <Drawer onClose={onClose} isOpen={isOpen} size='md'>
        <DrawerOverlay />
        <DrawerContent bgColor={colorMode === 'light' ? 'whiteAlpha.900' : 'blackAlpha.900'}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack>
              <Link href='/' onClick={() => onClose()} fontSize='5xl'>
                HOME
              </Link>
              <Link href={'/line'} onClick={() => onClose()} fontSize='5xl'>
                LINE
              </Link>
              <Link href={'/area'} onClick={() => onClose()} fontSize='5xl'>
                AREA
              </Link>
              <Link href={'/bar'} onClick={() => onClose()} fontSize='5xl'>
                BAR
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
