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
import { format } from 'date-fns'

type TwitterInputProps = Partial<{
  avatarSrc: string
  onAvatarClick: VoidFunction
  time: Date
  onTimeClick: VoidFunction
}>

const convertToTwitterFormat = (time: Date) =>
  format(time, 'K:mm a · MMM dd, yyyy')

const TwitterInput: FC<TwitterInputProps> = ({
  avatarSrc,
  onAvatarClick,
  time,
  onTimeClick
}) => {
  return (
    <Box
      fontFamily="Roboto"
      maxWidth="100%"
      color="white"
      backgroundColor="black">
      <VStack alignItems="start" spacing={2} padding={2}>
        {/* Avatar and Name */}
        <Flex>
          <Avatar src={avatarSrc} onClick={onAvatarClick} />
          <Flex flexDir="column" justifyContent="center" paddingLeft={2}>
            <Editable fontWeight="500" placeholder="Mowten Doo" fontSize={14}>
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
        <Text fontSize={12} color="gray.500" onClick={onTimeClick}>
          {time ? convertToTwitterFormat(time) : '1:00 AM · Apr 19, 2003'} ·{' '}
          <Text color="blue.500" as="span">
            Twitter Web App
          </Text>
        </Text>

        <Divider borderColor="gray.600" />

        {/* Stats (Retweet, Likes, etc.) */}
        <HStack fontSize={12} color="gray.500" paddingLeft={1}>
          <Text as="span">
            <Text as="span" fontWeight="500" color="white">
              2
            </Text>{' '}
            Likes
          </Text>
        </HStack>

        <Divider borderColor="gray.600" />

        {/* Button for Likes, Retweet, etc. */}
        <HStack justifyContent="space-evenly" width="100%">
          <RiChat1Line color="#718096" />
          <AiOutlineRetweet color="#718096" />
          <FaRegHeart color="#718096" />
          <BiShareAlt color="#718096" />
        </HStack>

        <Divider borderColor="gray.600" />

        {/* Replies */}
        <VStack width="100%" alignItems="stretch">
          {/* Avatar and Name */}
          <Flex>
            <Avatar src={avatarSrc} onClick={onAvatarClick} flexGrow={0} />
            <Flex flexDir="column" paddingLeft={2} flexGrow={1}>
              <Editable fontWeight="500" placeholder="Mowten Doo" fontSize={14}>
                <EditablePreview padding={0} />
                <EditableInput />
              </Editable>
              {/* <Text fontWeight="500">Mowten Doo</Text> */}
              <Text as="span" fontSize={12} color="gray.500">
                membalas{' '}
                <Editable
                  fontSize={12}
                  color="blue.500"
                  placeholder="@mowtendoo"
                  display="inline">
                  <EditablePreview padding={0} />
                  <EditableInput />
                </Editable>
              </Text>
              {/* <Text fontSize={12} color="gray.500">
              @MowtenDoo
            </Text> */}

              {/* Tweet Content */}
              <Editable fontSize={14} placeholder="Isi dong hei">
                <EditablePreview padding={0} />
                <EditableInput as="textarea" />
              </Editable>

              {/* Button for Likes, Retweet, etc. */}
              <HStack justifyContent="space-between" width="100%" padding={2}>
                <RiChat1Line color="#718096" />
                <AiOutlineRetweet color="#718096" />
                <FaRegHeart color="#718096" />
                <BiShareAlt color="#718096" />
              </HStack>
            </Flex>
          </Flex>

          <Divider borderColor="gray.600" />

          {/* Avatar and Name */}
          <Flex>
            <Avatar src={avatarSrc} onClick={onAvatarClick} flexGrow={0} />
            <Flex flexDir="column" paddingLeft={2} flexGrow={1}>
              <Editable fontWeight="500" placeholder="Mowten Doo" fontSize={14}>
                <EditablePreview padding={0} />
                <EditableInput />
              </Editable>
              {/* <Text fontWeight="500">Mowten Doo</Text> */}
              <Text as="span" fontSize={12} color="gray.500">
                membalas{' '}
                <Editable
                  fontSize={12}
                  color="blue.500"
                  placeholder="@mowtendoo"
                  display="inline">
                  <EditablePreview padding={0} />
                  <EditableInput />
                </Editable>
              </Text>
              {/* <Text fontSize={12} color="gray.500">
              @MowtenDoo
            </Text> */}

              {/* Tweet Content */}
              <Editable fontSize={14} placeholder="Isi dong hei">
                <EditablePreview padding={0} />
                <EditableInput as="textarea" />
              </Editable>

              {/* Button for Likes, Retweet, etc. */}
              <HStack justifyContent="space-between" width="100%" padding={2}>
                <RiChat1Line color="#718096" />
                <AiOutlineRetweet color="#718096" />
                <FaRegHeart color="#718096" />
                <BiShareAlt color="#718096" />
              </HStack>
            </Flex>
          </Flex>
        </VStack>
      </VStack>
    </Box>
  )
}

export default TwitterInput
