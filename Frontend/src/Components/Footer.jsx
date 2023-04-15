import React from "react";
import "./footer.css";
import delevery from "./FooterImage/deliveries.svg";
import city from "./FooterImage/cities.svg";
import returnItem from "./FooterImage/return.svg";
import apple from "./FooterImage/apple.png";
import playStore from "./FooterImage/googleplay.png";

import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import visa from "./FooterImage/footer-visacard-logo.png";
import maestrocard from "./FooterImage/footer-maestrocard-logo.png";
import mastercard from "./FooterImage/footer-mastercard-logo.png";
import americanExpres from "./FooterImage/footer-amexcard-logo.png";
import rupay from "./FooterImage/footer-rupaycard-logo.png";
import dinners from "./FooterImage/footer-dinnerscard-logo.png";
import wallet from "./FooterImage/footer-wallet-logo.png";
import netBanking from "./FooterImage/footer-internet-banking-logo.png";
import instagram from "./FooterImage/footer-instagram-logo.webp";
import facebook from "./FooterImage/footer-facebook-logo.png";
import pinterest from "./FooterImage/footer-pinterest-logo.png";
import linkedin from "./FooterImage/footer-linkedin-logo.png";
import youTube from "./FooterImage/footer-youtube-logo.png";
import twitter from "./FooterImage/footer-twitter-logo.png";

const Footer = () => {
  return (
    <Box mt={10} backgroundColor={"#F3F3F3"}>
      <Box width={"60%"} m={"auto"} mb={10}>
        <Flex justifyContent={"space-between"} gap={10}>
          <Box>
            <Image src={delevery} m={"auto"} />
            <Text className="footer_top_text">10 Million Happy Deliveries</Text>
          </Box>
          <Box>
            <Image src={city} m={"auto"} />
            <Text className="footer_top_text">
              200+ Studios Across 100+ Cities
            </Text>
          </Box>
          <Box>
            <Image src={returnItem} m={"auto"} />
            <Text className="footer_top_text">7 Day Easy Return Policy</Text>
          </Box>
        </Flex>
      </Box>

      {/* Links */}

      <Box width={"90%"} m={"auto"}>
        <SimpleGrid columns={[1, 2, 4]} gap={10}>
          <Box>
            <Text className="footer_link_heading">Corporate</Text>
            <ul>
              <li>About Us</li>
              <li>Corporate Governance</li>
              <li>Woodenfry in the News</li>
              <li>Career</li>
            </ul>
          </Box>
          <Box>
            <Text className="footer_link_heading">Useful Links</Text>
            <ul>
              <li>Explore Gift Cards</li>
              <li>Buy in Bulk</li>
              <li>Discover our Brands</li>
              <li>Check Out Bonhomie, Our Blog</li>
              <li>Find a Studio</li>
            </ul>
          </Box>
          <Box>
            <Text className="footer_link_heading">Partner With Us</Text>
            <ul>
              <li>Sell on Woodenfry</li>
              <li>Become a Franchisee</li>
              <li>Become Our Channel Partner</li>
              <li>Become Our Pep Homie</li>
              <li>Our Market Policies</li>
              <li>Marchent Dashboard Login</li>
            </ul>
          </Box>
          <Box>
            <Text className="footer_link_heading">Download our App</Text>
            <ul>
              <li>
                <Image src={apple} />
              </li>
              <li>
                <Image src={playStore} />
              </li>
              <br />
            </ul>
            <Text className="footer_link_heading">Need Help?</Text>
            <ul>
              <li>FAQs</li>
              <li>Policies</li>
              <li>Contect Us</li>
            </ul>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Popular */}

      <Box width={"90%"} m={"auto"} mb={10} mt={10}>
        <SimpleGrid columns={3} gap={10}>
          <Box>
            <Text className="populer_heading">Populer Categories</Text>
            <Text className="populer_text">
              Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets,
              Recliners, Sofa cum Beds, Rocking Chairs, Cabinets, Book Shelves,
              TV Unit, Wardrobes, Outdoor Furniture, Bar Cabinets, Wall Shelves,
              Photo Frames, Bed Sheets, Mattresses, Table Cloth, Living Room
              Furniture, Study Tables, Dining Room Furniture, Office Furniture,
              Bed Room Furniture, Dining Table, Beds, Sofas, Sofa Set, Trundle
              Bed
            </Text>
          </Box>
          <Box>
            <Text className="populer_heading">Populer Brand</Text>
            <Text className="populer_text">
              Mintwud, Woodsworth, CasaCraft, Amberville, Mudramark, Bohemiana,
              Mollycoddle, Mangiamo, Clouddio, Spacewood, Durian, Star India,
              Adiko Systems, Crystal Furnitech, Springtek, Story@Home, Parin,
              Furnitech, Trevi Furniture, Peachtree, Durfi, Muebles Casa,
              Duroflex
            </Text>
          </Box>
          <Box>
            <Text className="populer_heading">Populer Cities</Text>
            <Text className="populer_text">
              Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai,
              Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad, Coimbatore,
              Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam, Chandigarh,
              Vadodara, Nagpur, Thiruvananthapuram, Indore, Mysore, Bhopal,
              Surat, Jalandhar, Patna, Ludhiana, Nashik, Madurai, Kanpur,
              Aurangabad and many more
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <hr />

      <Box width={"90%"} m={"auto"} mt={10} mb={10}>
        <SimpleGrid columns={[1, 1, 2, 2]}>
          <Box textAlign={"center"}>
            <Text className="populer_heading">We accept</Text>
            <Flex gap={1}>
              <Image src={visa} width={"10%"} />
              <Image src={mastercard} width={"10%"} />
              <Image src={maestrocard} width={"10%"} />
              <Image src={americanExpres} width={"10%"} />
              <Image src={rupay} width={"10%"} />
              <Image src={dinners} width={"10%"} />
              <Image src={wallet} width={"10%"} />
              <Image src={netBanking} width={"10%"} />
            </Flex>
          </Box>
          <Box>
            <Text className="populer_heading">
              Like What You See? Follow us Here
            </Text>
            <Flex gap={5}>
              <Link
                to="https://www.instagram.com/pepperfry_official/"
                target="blank"
              >
                <Image src={instagram} width={"70%"} />
              </Link>

              <Link to="https://www.facebook.com/Pepperfry" target="blank">
                <Image src={facebook} width={"70%"} />
              </Link>
              <Link to="https://pinterest.com/pepperfry/" target="blank">
                <Image src={pinterest} width={"70%"} />
              </Link>

              <Link
                to="https://www.linkedin.com/company/pepperfry/mycompany/"
                target="blank"
              >
                <Image src={linkedin} width={"70%"} />
              </Link>

              <Link
                to="https://www.youtube.com/user/Pepperfrytv"
                target="blank"
              >
                <Image src={youTube} width={"70%"} />
              </Link>

              <Link to="https://twitter.com/pepperfry" target="blank">
                <Image src={twitter} width={"70%"} />
              </Link>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>

      <hr />

      <Box width={"65%"} m={"auto"} p={10}>
        <ul>
          <Flex justifyContent={"space-between"}>
            <li>Whitehat</li>
            <li>Sitemap</li>
            <li>Terms Of Use</li>
            <li>Privicy Policy</li>
            <li>Your Data And Security</li>
            <li>Grievance Redressal</li>
          </Flex>
        </ul>
        <Text color={"#848484"}>© Copyright Woodenfry Limited</Text>
      </Box>
    </Box>
  );
};

export default Footer;
