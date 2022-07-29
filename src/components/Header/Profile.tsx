import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return(
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Cauan Victor</Text>
                    <Text color="gray.400" fontSize="small">
                        francisco.cauan.alu.lmb@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Cauan Victor" src="https://github.com/CauanDZN.png" />
        </Flex>
    );
}