import { Flex, Link, Spacer } from "@chakra-ui/react"

const Footer = ({ editUrl }: { editUrl: string }) => {
    return (
        <Flex p="sm" textDecoration="underline" backgroundColor="#212432" padding="8px 16px" fontSize="sm" color='#5F6372'>
            <Link href="https://learnprompting.org" isExternal>
                learnprompting.org
            </Link>
            <Spacer />
            <Link href={editUrl} isExternal>
                edit this embed
            </Link>
        </Flex>
    )
}

export default Footer
