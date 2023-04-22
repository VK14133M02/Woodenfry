import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./navbar.css";

const Dropdown = () => {
  return (
    <Box id="navbar_dropdown">
      <Flex justifyContent={"space-between"}>
        <Box>
          <Flex gap={"15px"}>
            <Box>
              <Text className="category_heading">Sofas</Text>
              <ul>
                <li>Sofa Sets</li>
                <li>2 Seater Sofas</li>
                <li>Corner Sofas</li>
                <li>Bin Bag</li>
              </ul>
              <Text className="category_heading">Chairs</Text>
              <ul>
                <li>Folding Chairs</li>
                <li>Cafe Chairs</li>
                <li>Slipper Chairs</li>
                <li>Rocking Chairs</li>
                <li>Wing Chairs</li>
              </ul>
              <Text className="category_heading">Table</Text>
              <ul>
                <li>Coffee Tables</li>
                <li>Nesting Tables</li>
                <li>C Shaped Tables</li>
                <li>Nesting Tables</li>
                <li>Center Tabels</li>
              </ul>
              <Text className="category_heading">Bed</Text>
              <ul>
                <li>Queen Size Beds</li>
                <li>King Size Beds</li>
                <li>Single Beds</li>
                <li>Poster Beds</li>
                <li>Folding Beds</li>
              </ul>
            </Box>
            <Box>
              <Text className="category_heading">King/Queen/Single Size</Text>
              <ul>
                <li>Foam</li>
                <li>Spring</li>
                <li>Latex</li>
                <li>Coir</li>
              </ul>

              <Text className="category_heading">Foldable</Text>
              <ul>
                <li>King Size</li>
                <li>Queen Size</li>
                <li>Single</li>
              </ul>

              <Text className="category_heading">Toppers/Protectors</Text>
              <ul>
                <li>King Size</li>
                <li>Queen Size</li>
                <li>Single</li>
              </ul>
            </Box>
            <Box>
              <Text className="category_heading">Photo Frame</Text>
              <ul>
                <li>Single</li>
                <li>College</li>
                <li>Clip Photo</li>
                <li>Table Photo</li>
              </ul>

              <Text className="category_heading">Candles</Text>
              <ul>
                <li>Decorative</li>
                <li>Scented</li>
                <li>Tea Lights</li>
              </ul>

              <Text className="category_heading">Natural Plants</Text>
              <ul>
                <li>Indoor</li>
                <li>Flowering</li>
                <li>Bonsai</li>
                <li>Air Purifier</li>
                <li>Plant Bundles</li>
              </ul>

              <Text className="category_heading">Mirrors</Text>
              <ul>
                <li>Wall Mirrors</li>
                <li>Floor Mirrors</li>
                <li>Decorative Mirrors</li>
                <li>Full Length Mirrors</li>
                <li>Led Mirrors</li>
              </ul>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex gap={"15px"}>
            <Box>
              <Text className="category_heading">Bed Sheets</Text>
              <ul>
                <li>Single Bed</li>
                <li>Queen Bed</li>
                <li>King Bed</li>
                <li>Fitted</li>
              </ul>

              <Text className="category_heading">Bath Linen</Text>
              <ul>
                <li>Bath Math</li>
                <li>Bath Towels</li>
                <li>Hand & Face</li>
                <li>Towel Sets</li>
                <li>Bath Robes</li>
              </ul>

              <Text className="category_heading">Carpets</Text>
              <ul>
                <li>5 ft x 7 ft</li>
                <li>4 ft x 6 ft</li>
                <li>6 ft x 9 ft</li>
                <li>8 ft x 10 ft</li>
              </ul>

              <Text className="category_heading">Runners</Text>
              <ul>
                <li>Hand Wovan</li>
                <li>Hand Tufted</li>
                <li>Shaggy</li>
                <li>Flat Waves</li>
                <li>Machine Made</li>
              </ul>
            </Box>
            <Box>
              <Text className="category_heading">Serveware</Text>
              <ul>
                <li>Serving Trays</li>
                <li>Serving Bowls</li>
                <li>Serving Baskets</li>
                <li>Cake Stands</li>
                <li>Tray Sets</li>
                <li>Cheese Boards</li>
                <li>Serving Dishes</li>
              </ul>

              <Text className="category_heading">Drinkware</Text>
              <ul>
                <li>Everyday Glasses</li>
                <li>Jugs</li>
                <li>Bottels</li>
                <li>Sippers</li>
                <li>Wine Glasses</li>
                <li>Whiskey Glasses</li>
                <li>Glasses</li>
                <li>Sort Glasses</li>
                <li>Beer Mugs</li>
              </ul>

              <Text className="category_heading">Cookware</Text>
              <ul>
                <li>Pots & Pens</li>
                <li>Spatuals</li>
                <li>Ladels</li>
                <li>Cooking Tools</li>
              </ul>
            </Box>
            <Box>
              <Text className="category_heading">Lamps</Text>
              <ul>
                <li>Floor Lamps</li>
                <li>Shelf Lamps</li>
                <li>Table Lamps</li>
                <li>Night Lamps</li>
                <li>Study Lamps</li>
              </ul>
              <Text className="category_heading">Wall Lights</Text>
              <ul>
                <li>Wall Lamps</li>
                <li>Picture Lights</li>
                <li>Street Lights</li>
                <li>Flush Mounts</li>
              </ul>
              <Text className="category_heading">LED Lights</Text>
              <ul>
                <li>Celling Lights</li>
                <li>LED Lamps</li>
                <li>Wall Lights</li>
                <li>LED Bulbs</li>
              </ul>
              <Text className="category_heading">Smart Lights</Text>
              <ul>
                <li>Smart Lamps</li>
                <li>Smart Lights</li>
              </ul>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex gap="15px">
            <Box>
              <Text className="category_heading">Storage & Organizers</Text>
              <ul>
                <li>Cloth Organizers</li>
                <li>Drawer Organizers</li>
                <li>Shoe Organizers</li>
                <li>Hooks & Hangers</li>
                <li>Accessory Holders</li>
              </ul>
              <Text className="category_heading">House Keeping Tools</Text>
              <ul>
                <li>Maps</li>
                <li>Brooms</li>
                <li>Dustbins</li>
                <li>Toilet Brush</li>
                <li>Step Ladders</li>
                <li>Cleening Wipers</li>
              </ul>
              <Text className="category_heading">Tools & Electricals</Text>
              <ul>
                <li>Sockets</li>
                <li>Drill Machines</li>
                <li>Testers</li>
                <li>Measuring Tapes</li>
                <li>Screwdrivers</li>
                <li>Pliers</li>
                <li>Tool Kits</li>
              </ul>
            </Box>
            <Box>
              <Text className="category_heading">Mixers & Processors</Text>
              <ul>
                <li>Choppers</li>
                <li>Food Processors</li>
                <li>Hand Blinders</li>
                <li>Juicer</li>
              </ul>
              <Text className="category_heading">OTGs</Text>
              <ul>
                <li>Fryrs</li>
                <li>Microwaves</li>
                <li>Ovens & OTGs</li>
              </ul>
              <Text className="category_heading">Fans</Text>
              <ul>
                <li>Ceiling Fans</li>
                <li>Table Fans</li>
                <li>Wall Fans</li>
                <li>Exhaust Fans</li>
                <li>Portable Fans</li>
                <li>Pedestal Fans</li>
              </ul>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/1600_Furnishings_Banner1_HoverBanner_25April22.jpg" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Dropdown;
