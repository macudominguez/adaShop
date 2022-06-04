import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Button,
  Heading,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import ShowProduct from "../ShowProduct";
import { ImBin } from "react-icons/im";
import { BsCartFill } from "react-icons/bs";

const Modal = ({ cart, emptyCart, deleteProduct }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const total = () => {
    let sumaPrecio = 0;
    for (const carrito of cart) {
      sumaPrecio += carrito.price * carrito.cantidad;
    }
    return sumaPrecio;
  };

  return (
    <>
      <Button variant={"ghost"} size={"sm"} mr={4} onClick={onOpen}>
        <BsCartFill size={"20px"} /> ({cart.length})
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text>Carrito</Text>
          </DrawerHeader>
          <DrawerBody>
            {cart.length > 0 ? (
              cart.map((product) => (
                <ShowProduct
                  key={product.id}
                  product={product}
                  deleteProduct={deleteProduct}
                />
              ))
            ) : (
              <Text>No hay productos en el carrito ☹️</Text>
            )}
          </DrawerBody>
          <DrawerFooter>
            <Flex direction="column" align="flex-start" w="100%">
              <Button
                onClick={emptyCart}
                w="100%"
                colorScheme="red"
                variant="outline"
                mb="5"
              >
                <Text p="4"> Vaciar carrito </Text> <ImBin />
              </Button>
              <Heading> Total: ${total()} </Heading>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Modal;
