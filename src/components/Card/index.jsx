import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  chakra,
  Tooltip,
  Button,
} from '@chakra-ui/react';

import { AiOutlineHeart } from "react-icons/ai";


const Card = ({data,addProduct}) => {
  return (
      <Box
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      w="100%"
      maxW="300px"
      h="sm"
      p={2}
      d="flex"
      flexDirection="column">


        <Box h="50%">
        <Image
          src={data.image}
          alt={`Picture of ${data.title}`}
          roundedTop="lg"
          objectFit="cover"
          height="full"
          margin="auto"
        />
        </Box>

        <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="lg"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {data.title}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
          <Flex align="center">
          <Button colorScheme='teal' onClick={ () => addProduct(data)}>Agregar al carrito</Button>
          <Button colorScheme='gray' m="20px"> <AiOutlineHeart size={'18px'} /> </Button>
          </Flex>
        </Box>
      </Box>
  );
}

export default Card