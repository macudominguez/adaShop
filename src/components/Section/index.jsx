import { Flex, Heading, Input, Text, Button } from "@chakra-ui/react";
import { BsHeart } from "react-icons/bs";

const Section = ({ handleOnKeyPress }) => {
  return (
    <>
      <Flex direction="column" justify="center" pt="20" ps="20">
        <Flex direction="row">
          <Heading size="xl" py={4}>
            Productos
          </Heading>
          <Text pl="10px">
            Solo Favoritos{" "}
            <Button colorScheme="gray" m="20px">
              <BsHeart size={"16px"} />
            </Button>
          </Text>
        </Flex>
        <Input
          type="text"
          w="90%"
          variant="filled"
          onKeyDown={handleOnKeyPress}
          placeholder="Buscar producto por nombre"
        />
      </Flex>
    </>
  );
};

export default Section;
