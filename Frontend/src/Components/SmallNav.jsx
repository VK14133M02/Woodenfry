import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../woodenfry_home_image/small_logo.png";
import signup from "./NavbarImages/signup.svg";
import notification from "./NavbarImages/notification.svg";
import wishlist from "./NavbarImages/wishlist.svg";
import cart from "./NavbarImages/cart.svg";
import NavDrawer from "./NavDrawer";

import "./navbar.css";

const SmallNav = () => {
  return (
    <Box id="small_navbar">
      <Box id="small_nav_logo">
        <Flex justifyContent={"space-between"}>
          <Box width={"20%"}>
            <Flex gap={3} alignItems={"center"}>
              <Box>
                <NavDrawer />
              </Box>
              <Box>
                <Image src={logo} width={"50%"} />
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex gap={3} justifyContent={"end"} alignItems={"center"}>
              <Image src={signup} w={"16%"} />
              <Image src={notification} w={"16%"} />
              <Image src={wishlist} w={"16%"} />
              <Image src={cart} w={"16%"} />
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box p={5}>
        <SimpleGrid columns={5} gap={4}>
          <Box _hover={{ borderBottom: "1px solid #ff7035" }}>
            <Image
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/furnitureappliances_13042023.jpg"
              borderRadius={"full"}
            />
            <Text className="small_nav_category">Furniture</Text>
          </Box>
          <Box _hover={{ borderBottom: "1px solid #ff7035" }}>
            <Image
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/home_decorappliances_13042023.jpg"
              borderRadius={"full"}
            />
            <Text className="small_nav_category">Home Decor</Text>
          </Box>
          <Box _hover={{ borderBottom: "1px solid #ff7035" }}>
            <Image
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/kitchen_and_diningappliances_13042023.jpg"
              borderRadius={"full"}
            />
            <Text className="small_nav_category">Kitchen & Dining</Text>
          </Box>
          <Box _hover={{ borderBottom: "1px solid #ff7035" }}>
            <Image
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/utility_13012023.jpg"
              borderRadius={"full"}
            />
            <Text className="small_nav_category">Home Utility</Text>
          </Box>
          <Box _hover={{ borderBottom: "1px solid #ff7035" }}>
            <Image
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/modularappliances_13042023.jpg"
              borderRadius={"full"}
            />
            <Text className="small_nav_category">Moduler</Text>
          </Box>
          <Box _hover={{ borderBottom: "1px solid #ff7035" }}>
            <Image
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/mattressesappliances_13042023.jpg"
              borderRadius={"full"}
            />
            <Text className="small_nav_category">Mattresses</Text>
          </Box>
          <Box _hover={{ borderBottom: "1px solid #ff7035" }}>
            <Image
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/furnishingsappliances_13042023.jpg"
              borderRadius={"full"}
            />
            <Text className="small_nav_category">Furnishing</Text>
          </Box>
          <Box _hover={{ borderBottom: "1px solid #ff7035" }}>
            <Image
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/lamps_and_lightingappliances_13042023.jpg"
              borderRadius={"full"}
            />
            <Text className="small_nav_category">Lamps & Lighting</Text>
          </Box>
          <Box _hover={{ borderBottom: "1px solid #ff7035" }}>
            <Image
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/appliances_13042023.jpg"
              borderRadius={"full"}
            />
            <Text className="small_nav_category">Appliances</Text>
          </Box>
          <Box _hover={{ borderBottom: "1px solid #ff7035" }}>
            <Image
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/home_decorappliances_13042023.jpg"
              borderRadius={"full"}
            />
            <Text className="small_nav_category">Gifts</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SmallNav;
