import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../woodenfry_home_image/logo.png";
import signup from "./NavbarImages/signup.svg";
import notification from "./NavbarImages/notification.svg";
import wishlist from "./NavbarImages/wishlist.svg";
import cart from "./NavbarImages/cart.svg";
import NavDrawer from "./NavDrawer";

const SmallNav = () => {
  return (
    <Box>
      <Box>
        <Flex>
          <Box>
            <Flex>
              <Box>
                <NavDrawer />
              </Box>
              <Box>
                <Image src={logo} />
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex gap={5} justifyContent={"end"} alignItems={"center"}>
              <Image src={signup} />
              <Image src={notification} />
              <Image src={wishlist} />
              <Image src={cart} />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SmallNav;
