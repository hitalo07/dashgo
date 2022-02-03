import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile () {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Hitalo Cunha</Text>
        <Text color="gray.300" fontSize="small">hitalocunhadesousa@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Hitalo Cunha" />
    </Flex>
  )
}