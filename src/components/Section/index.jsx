import { Button, Flex,Heading, Input, Text } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'


const Section = ({handleOnKeyPress}) => {
  
  return (
      <Flex direction="column" justify="center" pt="20" ps="20">
        <Flex direction="row" align="center" gap="4">
          <Heading as='h2' size='xl' py="4" >Productos</Heading> 
          <Text> Solo favoritos</Text> <Button colorScheme='gray' m="20px"> <AiOutlineHeart size={'18px'} /> </Button>
        </Flex>
        <Input type="text" w="90%" variant='filled' onKeyDown={handleOnKeyPress} placeholder='Buscar producto por nombre'/>
      </Flex>
  )
}

export default Section