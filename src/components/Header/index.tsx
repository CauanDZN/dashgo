import { Flex, useBreakpointValue } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { NotificationNav } from "./NotificationNav"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export function Header(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    
    return(
        <Flex 
            as="header" 
            w="100%" 
            maxWidth={1400} 
            h="20" 
            mx="auto" 
            mt="4" 
            align="center" 
            px="6"
        >
            <Logo />

            { isWideVersion && <SearchBox /> }

            <Flex 
                align="center"
                ml="auto"
            >

                <NotificationNav />

                <Profile showProfileData={isWideVersion} />
                
            </Flex>
        </Flex>
    )
}