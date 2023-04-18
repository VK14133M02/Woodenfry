import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../woodenfry_home_image/logo.png";
import signup from "./NavbarImages/signup.svg";
import notification from "./NavbarImages/notification.svg";
import wishlist from "./NavbarImages/wishlist.svg";
import cart from "./NavbarImages/cart.svg";
import "./navbar.css";
import Dropdown from "./Dropdown";

const LaptopNav = () => {
  const [nav, setNav] = useState(false);
  return (
    <Box id="LaptopScreen">
      {/* logo nav top */}
      <Box width={"90%"} m={"auto"} paddingTop={5} pb={5}>
        <Flex justifyContent={"space-between"}>
          <Box width={"50%"} display={"flex"} alignItems={"center"}>
            <Image src={logo} w={"40%"} />
          </Box>
          <Box width={"50%"}>
            <Flex gap={5} justifyContent={"end"} alignItems={"center"}>
              <Image src={signup} w={"6%"} />
              <Image src={notification} w={"6%"} />
              <Image src={wishlist} w={"6%"} />
              <Image src={cart} w={"6%"} />
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* navbar mid */}

      <Box width={"65%"} m={"auto"} id="nav_mid">
        <ul>
          <Flex justifyContent={"space-between"}>
            <li>Sell on pepperfry</li>
            <li>Become a franchisee</li>
            <li>Buy in Bulk</li>
            <li>Find a Studio</li>
            <li>GET INSPIRED</li>
            <li>GET INSPIRED</li>
            <li>Contact us</li>
          </Flex>
        </ul>
      </Box>

      {/* navbar links */}

      <Box backgroundColor={"#525252"} mt={3}>
        <ul>
          <Flex id="nav_route" justifyContent={"space-between"}>
            <li
              onMouseUp={() => setNav(false)}
              onMouseOver={() => setNav(true)}
            >
              Furniture
            </li>
            <li
              onMouseOut={() => setNav(false)}
              onMouseOver={() => setNav(true)}
            >
              Mattresses
            </li>
            <li
              onMouseOut={() => setNav(false)}
              onMouseOver={() => setNav(true)}
            >
              Home Decor
            </li>
            <li
              onMouseOut={() => setNav(false)}
              onMouseOver={() => setNav(true)}
            >
              Furnishing
            </li>
            <li
              onMouseOut={() => setNav(false)}
              onMouseOver={() => setNav(true)}
            >
              Kitchen & Dining
            </li>
            <li
              onMouseOut={() => setNav(false)}
              onMouseOver={() => setNav(true)}
            >
              Lamp & Lighting
            </li>
            <li
              onMouseOut={() => setNav(false)}
              onMouseOver={() => setNav(true)}
            >
              Home Utility
            </li>
            <li
              onMouseOut={() => setNav(false)}
              onMouseOver={() => setNav(true)}
            >
              Appliances
            </li>
            <li
              onMouseOut={() => setNav(false)}
              onMouseOver={() => setNav(true)}
            >
              Modular
            </li>
            <li
              onMouseUp={() => setNav(false)}
              onMouseOver={() => setNav(true)}
            >
              Gift Cards
            </li>
          </Flex>
        </ul>
      </Box>

      {/* Dropdown */}
      {nav && <Dropdown />}
    </Box>
  );
};

export default LaptopNav;
