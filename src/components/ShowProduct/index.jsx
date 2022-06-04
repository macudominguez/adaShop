import { Text,Image, Button, Flex, Heading, Box } from '@chakra-ui/react'
import { ImBin } from "react-icons/im";


const ShowProduct = ({product, deleteProduct}) =>{
    return (
        <Box>
            <Flex>
                <Heading size="md">{product.title}</Heading>
                <Button colorScheme="red" variant="ghost" onClick={() => deleteProduct(product.id)}>
                    <ImBin size="xs"/>
                </Button>
            </Flex>
            <Flex gap="30">
                <Image src={product.image} w="80px" />
                <Box>
                    <Heading size="xs"> ${product.price} </Heading>
                    <Text>Cantidad: {product.cantidad} </Text>
                </Box>
            </Flex>
        </Box>
    );
}

export default ShowProduct