import NeedAuth from '@/components/NeedAuth'
import { store } from '@/store/store'
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  Textarea,
  VStack
} from '@chakra-ui/react'
import { useContext } from 'react'
import {
  FaComment,
  FaHeart,
  FaRegHeart,
  FaRetweet,
  FaShare
} from 'react-icons/fa'
import { MdShare } from 'react-icons/md'
import { BiShareAlt } from 'react-icons/bi'
import { RiChat1Line } from 'react-icons/ri'
import { AiOutlineRetweet } from 'react-icons/ai'
import TwitterBox from '@/components/TwitterBox'

const SHION =
  'https://pbs.twimg.com/profile_images/1290844291196235776/td_dSJGh_400x400.jpg'

export default function Home() {
  const { dispatch, state } = useContext(store)

  return (
    <>
      <NeedAuth>
        <Container maxWidth="80%">
          <Heading size="lg">Buat cerita baru</Heading>

          <Input placeholder="Title" />

          <Textarea></Textarea>

          <TwitterBox avatarSrc={SHION} />

          <Button>Tambah Segmen</Button>

          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            officiis sit quisquam itaque, dolor harum pariatur exercitationem
            repellendus ea officia maxime unde totam eveniet odit excepturi a,
            asperiores odio rerum.
          </Text>

          <Divider />
        </Container>
      </NeedAuth>
    </>
  )
}
