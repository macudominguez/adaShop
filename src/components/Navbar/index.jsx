import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logoAda from "../../assets/adasvg.svg";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Modal from "../Drawer";

const Links = ["Inicio", "Productos", "Contacto"];

const NavLink = ({ children }) => (
  <Link
    m="2"
    px={2}
    py={1}
    fontSize="18px"
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Navbar = ({ cart, emptyCart, deleteProduct }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="fixed"
        zIndex="2"
        w="100%"
        boxShadow="md"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={2} alignItems={"center"}>
            <Image
              boxSize="22px"
              objectFit="contain"
              src={logoAda}
              alt="logo ada"
            />
            <Box fontSize="xl" fontWeight={"bold"}>
              AdaShop
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Flex justify="center" display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Flex>
          <Flex justify="center" align="center">
            <Button onClick={toggleColorMode} mr="10px">
              {colorMode === "light" ? (
                <BsFillMoonStarsFill />
              ) : (
                <BsFillSunFill />
              )}
            </Button>
            <Modal
              cart={cart}
              emptyCart={emptyCart}
              deleteProduct={deleteProduct}
            />
          </Flex>
        </Flex>
        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Navbar;
