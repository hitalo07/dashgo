import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsBookLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsBookLine}>Contatos</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÂO">
          <Link display="flex" align="center">
            <Icon as={RiInputMethodLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Formulários</Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiGitMergeLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Automação</Text>
          </Link>
        </NavSection>
      </Stack>
    </Box>
  )
}