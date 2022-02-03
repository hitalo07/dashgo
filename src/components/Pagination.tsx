import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination () {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>10</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="sx"
          width="4"
          colorScheme="pick"
          disabled
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default'
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="sx"
          width="4"
          bgColor="gray.700"
          _disabled={{
            bg: 'gray.500',
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="sx"
          width="4"
          bgColor="gray.700"
          _disabled={{
            bg: 'gray.500',
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="sx"
          width="4"
          bgColor="gray.700"
          _disabled={{
            bg: 'gray.500',
          }}
        >
          4
        </Button>
        <Button
          size="sm"
          fontSize="sx"
          width="4"
          bgColor="gray.700"
          _disabled={{
            bg: 'gray.500',
          }}
        >
          5
        </Button>
      </Stack>
    </Stack>
  )
}