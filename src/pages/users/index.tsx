import { Box, Button, Checkbox, Flex, Heading, Icon, Stack, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { SideBar } from '../../components/Sidebar'

export default function Home() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" py="6">
        <SideBar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                <Th>Data de cadastro</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td px="6">
                  <Text colorScheme="bold">Hitalo Cunha</Text>
                  <Text fontSize="sm" color="gray.300">hitalocunhadesousa@gmail.com</Text>
                </Td>
                <Td px="6">
                  <Text>03 de Janeiro, 2022</Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
