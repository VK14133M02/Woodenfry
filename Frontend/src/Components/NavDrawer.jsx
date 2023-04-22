import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  ListItem,
  UnorderedList,
  Box,
} from "@chakra-ui/react";

import { AddIcon, HamburgerIcon, MinusIcon } from "@chakra-ui/icons";

function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <HamburgerIcon ref={btnRef} colorScheme="teal" onClick={onOpen} />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Category</DrawerHeader>

          <DrawerBody>
            <Accordion>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          All Category
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <UnorderedList>
                        <ListItem>Furniture</ListItem>
                        <ListItem>Home Decore</ListItem>
                        <ListItem>Kitchen & Dining</ListItem>
                        <ListItem>Home Utility</ListItem>
                        <ListItem>Moduler</ListItem>
                        <ListItem>Mattresses</ListItem>
                        <ListItem>Furnishing</ListItem>
                        <ListItem>Lamp & Lighting</ListItem>
                        <ListItem>Appliances</ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavDrawer;
