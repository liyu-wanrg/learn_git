import { Flex, Button, Heading, Input, useColorMode, useColorModeValue, Link } from "@chakra-ui/react"


const IndexPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray")
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder="15517067680@163.com" variant="filled" mb={3} type="email" />
        <Input placeholder="*********" variant="filled" mb={6} type="password" />
        <Button mb="6" colorScheme="teal">Log in</Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
        <a>
          <Link href="/hello">
            下一页
          </Link>
        </a>


      </Flex>
    </Flex>
  )
}

export default IndexPage
