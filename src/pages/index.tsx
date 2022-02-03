import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/form/Input'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justify="center"
    >
      <Flex
        flexDirection="column"
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
      >
        <Stack spacing="4">
          <Input name="email" label="Email" />
          <Input name="password" label="Senha" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink">Entrar</Button>
      </Flex>
    </Flex>
  )
}
