import {
  Box,
  VStack,
  Flex,
  Avatar,
  Divider,
  HStack,
  Text,
  Editable,
  EditablePreview,
  EditableInput
} from '@chakra-ui/react'
import { FC } from 'react'
import { AiOutlineRetweet } from 'react-icons/ai'
import { BiShareAlt } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'
import { RiChat1Line } from 'react-icons/ri'

interface TwitterBoxProps {
  avatarSrc: string
}

const TwitterBox: FC<TwitterBoxProps> = ({ avatarSrc }) => {
  return (
    <Box
      fontFamily="Roboto"
      maxWidth="100%"
      color="white"
      backgroundColor="black">
      <VStack alignItems="start" spacing={2} padding={2}>
        {/* Avatar and Name */}
        <Flex>
          <Avatar src={avatarSrc} />
          <Flex flexDir="column" justifyContent="center" paddingLeft={2}>
            <Editable fontWeight="500" placeholder="Mowten Doo">
              <EditablePreview padding={0} />
              <EditableInput />
            </Editable>
            {/* <Text fontWeight="500">Mowten Doo</Text> */}
            <Editable fontSize={12} color="gray.500" placeholder="@mowtendoo">
              <EditablePreview padding={0} />
              <EditableInput />
            </Editable>
            {/* <Text fontSize={12} color="gray.500">
              @MowtenDoo
            </Text> */}
          </Flex>
        </Flex>

        {/* Tweet Content */}
        <Editable fontSize={14} placeholder="Isi dong hei">
          <EditablePreview padding={0} />
          <EditableInput as="textarea" />
        </Editable>

        {/* Date and Device */}
        <Text fontSize={12} color="gray.500">
          8:00 AM · Jul 18, 2021 ·{' '}
          <Text color="blue.500" as="span">
            Twitter Web App
          </Text>
        </Text>

        <Divider borderColor="green.500" />

        {/* Stats (Retweet, Likes, etc.) */}
        <HStack fontSize={12} color="gray.500" paddingLeft={1}>
          <Text as="span">
            <Text as="span" fontWeight="500" color="white">
              2
            </Text>{' '}
            Likes
          </Text>
        </HStack>

        <Divider borderColor="green.500" />

        {/* Button for Likes, Retweet, etc. */}
        <HStack justifyContent="space-evenly" width="100%">
          <RiChat1Line color="#718096" />
          <AiOutlineRetweet color="#718096" />
          <FaRegHeart color="#718096" />
          <BiShareAlt color="#718096" />
        </HStack>
      </VStack>
    </Box>
  )
}

export default TwitterBox
