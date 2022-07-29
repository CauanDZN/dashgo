import { Button, Stack, Box } from "@chakra-ui/react";
import { PaginationItem } from './PaginationItem';

export function Pagination() {
    return(
        <Stack
            direction="row"
            spacing="6"
            mt="8"
            justify="space-between"
            alignItems="center"

        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
            <PaginationItem number={1} isCurrent />
            <PaginationItem number={2} />
            <PaginationItem number={3} />
            <PaginationItem number={4} />
            <PaginationItem number={5} />

            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bg: 'pink.500',
                    cursor: 'default'
                }}
            >
                1
            </Button>

            <Button
                size="sm"
                fontSize="xs"
                width="4"
                bg="gray.700"
                _hover={{
                    bg: 'gray.500'
                }}
            >
                2
            </Button>

            <Button
                size="sm"
                fontSize="xs"
                width="4"
                bg="gray.700"
                _hover={{
                    bg: 'gray.500'
                }}
            >
                3
            </Button>

            <Button
                size="sm"
                fontSize="xs"
                width="4"
                bg="gray.700"
                _hover={{
                    bg: 'gray.500'
                }}
            >
                4
            </Button>
            </Stack>
        </Stack>
    )
}