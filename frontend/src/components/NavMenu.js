import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import { ShopContext } from "../context/shopContext";

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);
  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack p="2rem">
              <Link to="/">about us</Link>
              <Link to="/">Learn More about us</Link>
              <Link to="/">Sustainabiliity</Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter textAlign="center">
            <Text>@copyright {new Date().getFullYear()}</Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavMenu;
