import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import "./home.css";
import catchImg from "../woodenfry_home_image/catch.webp";
import poster from "../woodenfry_home_image/top_poster.jpg";
import { Link } from "react-router-dom";
import CarouselImage from "../Components/Carousel";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box width={"90%"} margin={"auto"}>
        <Box>
          <Image src={poster} alt="poster" width={"100%"} />
        </Box>
        <Box marginTop={"30px"}>
          <SimpleGrid columns={[1, 2, 3]} gap={"20px"}>
            <Link to="https://blog.pepperfry.com/10-traditional-decor-ideas-for-your-living-room/?type=homepage_blog_section_block1">
              <Image
                src="https://ii1.pepperfry.com/assets/47fb9ed7-697e-401b-9e05-24a08402e7f4.jpg"
                alt="traditional"
              />
            </Link>
            <Link to="https://blog.pepperfry.com/summer-decor-ideas-that-are-light-on-your-pocket/?type=homepage_blog_section_block2">
              <Image
                src="https://ii2.pepperfry.com/assets/8f3a9922-71a6-463a-92e6-fc6b7213ac96.jpg"
                alt="summer"
              />
            </Link>
            <Link to="https://blog.pepperfry.com/5-nifty-tips-for-buying-a-chandelier-for-home/?type=homepage_blog_section_block3">
              <Image
                src="https://ii2.pepperfry.com/assets/a3f65706-5bce-4ce7-b5a8-c188b7931d55.jpg"
                alt="chandelier"
              />
            </Link>
          </SimpleGrid>
        </Box>
        <Box marginTop={"30px"}>
          <Image src={catchImg} alt="catch" />
        </Box>

        {/* Shop What the Fry Deals */}

        <Box>
          <Text className="homePage_section_title">
            Shop What the Fry Deals
          </Text>
          <Box>
            <SimpleGrid columns={[2, 3, 6]} gap={2}>
              <Box>
                <Link to="#">
                  <Image
                    src="https://ii1.pepperfry.com/media/catalog/product/p/r/494x544/premium-macrame-light-brown--set-of-2--cotton-coaster-by-kaahira-premium-macrame-light-brown--set-of-g84caa.jpg"
                    alt=""
                  />
                  <Text className="mostWanted_category" fontSize={"10px"}>
                    Spiral Brown Macrame
                  </Text>
                  <Text className="mostWanted_description">
                    <span style={{ color: "black" }}>₹149</span>{" "}
                    <span style={{ textDecorationLine: "line-through" }}>
                      ₹667
                    </span>{" "}
                    <span style={{ color: "green" }}>78% off</span>
                  </Text>
                </Link>
              </Box>

              <Box>
                <Link to="#">
                  <Image
                    src="https://ii2.pepperfry.com/media/catalog/product/b/l/494x544/black-synthetic-wood-set-of-06-individual-photo-frames-by-random-black-synthetic-wood-set-of-06-indi-usw93u.jpg"
                    alt=""
                    width={"100%"}
                  />
                  <Text className="mostWanted_category" fontSize={"10px"}>
                    Black Synthetic Wood Photo Frames
                  </Text>
                  <Text className="mostWanted_description">
                    <span style={{ color: "black" }}>₹149</span>{" "}
                    <span style={{ textDecorationLine: "line-through" }}>
                      ₹599
                    </span>{" "}
                    <span style={{ color: "green" }}>75% off</span>
                  </Text>
                </Link>
              </Box>

              <Box>
                <Link to="#">
                  <Image
                    src="https://ii3.pepperfry.com/media/catalog/product/b/r/494x544/brown-abstract-machine-made-nylon-carpet-2-5x2-5-feet-by-status-brown-abstract-machine-made-nylon-ca-ewlzyd.jpg"
                    alt=""
                  />
                  <Text className="mostWanted_category" fontSize={"10px"}>
                    Black Synthetic Wood Photo Frames
                  </Text>
                  <Text className="mostWanted_description">
                    <span style={{ color: "black" }}>₹129</span>{" "}
                    <span style={{ textDecorationLine: "line-through" }}>
                      ₹499
                    </span>{" "}
                    <span style={{ color: "green" }}>74% off</span>
                  </Text>
                </Link>
              </Box>

              <Box>
                <Link to="#">
                  <Image
                    src="https://ii1.pepperfry.com/media/catalog/product/e/c/494x544/ecraftindia-green-meditating-buddha-decorative-showpiece---24-cm-ecraftindia-green-meditating-buddha-nrareb.jpg"
                    alt=""
                  />
                  <Text className="mostWanted_category" fontSize={"10px"}>
                    Buddha Decorative Showpiece - 24Cm
                  </Text>
                  <Text className="mostWanted_description">
                    <span style={{ color: "black" }}>₹89</span>{" "}
                    <span style={{ textDecorationLine: "line-through" }}>
                      ₹799
                    </span>{" "}
                    <span style={{ color: "green" }}>89% off</span>
                  </Text>
                </Link>
              </Box>

              <Box>
                <Link to="#">
                  <Image
                    src="https://ii1.pepperfry.com/media/catalog/product/g/r/494x544/grey-geometric-microfibre-24x16-inches-antiskid-bath-mat-by-luxe-home-international-grey-geometric-m-ziwzfo.jpg"
                    alt=""
                  />
                  <Text className="mostWanted_category" fontSize={"10px"}>
                    24x16 Inches AntiSkid Bath Mat
                  </Text>
                  <Text className="mostWanted_description">
                    <span style={{ color: "black" }}>₹139</span>{" "}
                    <span style={{ textDecorationLine: "line-through" }}>
                      ₹999
                    </span>{" "}
                    <span style={{ color: "green" }}>86% off</span>
                  </Text>
                </Link>
              </Box>

              <Box>
                <Link to="#">
                  <Image
                    src="https://ii3.pepperfry.com/media/catalog/product/n/a/494x544/navy-blue-polyester-non-foldable-shirt-travel-bag-organiser-by-my-gift-booth-navy-blue-polyester-non-rnumki.jpg"
                    alt=""
                  />
                  <Text className="mostWanted_category" fontSize={"10px"}>
                    Navy Blue Polyester Travel Bag
                  </Text>
                  <Text className="mostWanted_description">
                    <span style={{ color: "black" }}>₹59</span>{" "}
                    <span style={{ textDecorationLine: "line-through" }}>
                      ₹335
                    </span>{" "}
                    <span style={{ color: "green" }}>82% off</span>
                  </Text>
                </Link>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>

        {/* Explore Most Wanted */}

        <Box>
          <Text className="homePage_section_title">Explore Most Wanted</Text>
          <Box>
            <SimpleGrid columns={[1, 2, 3]} gap={"10px"}>
              <Box>
                <Image
                  src="https://ii1.pepperfry.com/assets/a334fcc1-3084-4a97-87b3-0d6b14dc42ad.jpg"
                  alt=" Queen Sized Beds with Strorage "
                />
                <Text className="mostWanted_category">
                  Queen Sized Beds with Strorage
                </Text>
                <Text className="mostWanted_description">
                  Box, Drawer & Hydraulic Storage
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://ii3.pepperfry.com/assets/2eaa9972-123b-489c-873c-a3143cf25a76.jpg"
                  alt="Floor Lamps"
                />
                <Text className="mostWanted_category">Floor Lamps</Text>
                <Text className="mostWanted_description">
                  Tripod, Club & Torchiere Floor Lamps
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://ii1.pepperfry.com/assets/733b4a10-c835-47e8-b595-140d0283a360.jpg"
                  alt="6 Seater Dining Sets"
                />
                <Text className="mostWanted_category">
                  6 Seater Dining Sets
                </Text>
                <Text className="mostWanted_description">
                  Modern, Contemporary & Traditional
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://ii1.pepperfry.com/assets/1cf47100-ef4e-423d-aef1-a9bc0b30484e.jpg"
                  alt="Sofa Sets"
                />
                <Text className="mostWanted_category">Sofa Sets</Text>
                <Text className="mostWanted_description">
                  Modern, Contemporary & Traditiona
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://ii2.pepperfry.com/assets/efc1111f-4d3c-4817-af24-f2a3a8c927d8.jpg"
                  alt="Carpets "
                />
                <Text className="mostWanted_category">Carpets</Text>
                <Text className="mostWanted_description">
                  Floral, Geometric & Striped Carpets
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://ii3.pepperfry.com/assets/a19a19a3-8d52-4a2b-ba6e-76cc148520e6.jpg"
                  alt="Coffee Tables"
                />
                <Text className="mostWanted_category">Coffee Tables</Text>
                <Text className="mostWanted_description">
                  Modern, Cotemporary & Eclectic
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>

        {/* Share The Love */}
        <Box>
          <Text className="homePage_section_title">Share The Love</Text>
          <CarouselImage />
        </Box>

        {/* Discover Our Newest Arrivals */}

        <Box>
          <Text className="homePage_section_title">
            Discover Our Newest Arrivals
          </Text>
          <SimpleGrid columns={[1, 2, 4]} gap={3}>
            <Box>
              <Link to="#">
                <Image
                  src="https://ii2.pepperfry.com/assets/1105bb76-f648-4749-907b-b2a174f222f5.jpg"
                  alt="Aakrit Collection by Mudramark"
                />
                <Text className="mostWanted_category">
                  Aakrit Collection by Mudramark
                </Text>
                <Text className="mostWanted_description">Starting ₹12999</Text>
              </Link>
            </Box>

            <Box>
              <Link to="#">
                <Image
                  src="https://ii2.pepperfry.com/assets/8b893988-9587-4064-a02f-f271bd0b80db.jpg"
                  alt="Home Utilities"
                />
                <Text className="mostWanted_category">Home Utilities</Text>
                <Text className="mostWanted_description">Starting ₹65</Text>
              </Link>
            </Box>

            <Box>
              <Link to="#">
                <Image
                  src="https://ii3.pepperfry.com/assets/c0660ab7-6015-4c33-9777-b1da495ffeae.jpg"
                  alt="SmartGrid Beds and Office Chairs"
                />
                <Text className="mostWanted_category">
                  SmartGrid Beds and Office Chairs
                </Text>
                <Text className="mostWanted_description">Starting ₹11999</Text>
              </Link>
            </Box>

            <Box>
              <Link to="#">
                <Image
                  src="https://ii3.pepperfry.com/assets/9d6d767b-e705-4693-9e17-46865736f03a.jpg"
                  alt="Storage and Organizers"
                />
                <Text className="mostWanted_category">
                  Storage and Organizers
                </Text>
                <Text className="mostWanted_description">Starting ₹165</Text>
              </Link>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Follow Home Interior Trends */}
        <Box>
          <Text className="homePage_section_title">
            Follow Home Interior Trends
          </Text>
          <Box>
            <SimpleGrid columns={[1, 2, 3]} gap={"10px"}>
              <Box>
                <Image
                  src="https://ii3.pepperfry.com/assets/ca2f31ad-f9f0-46f3-88b6-66d9ce1c1fb9.jpg"
                  alt="Midnight Blues Sofas"
                />
                <Text className="mostWanted_category">
                  Midnight Blues Sofas
                </Text>
                <Text className="mostWanted_description">
                  240+ Options, Explore Starting ₹12499
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://ii3.pepperfry.com/assets/3a601d4d-3c46-411c-91bc-2cc377b0b54e.jpg"
                  alt="Floor Lamps"
                />
                <Text className="mostWanted_category">
                  Tropical Queen Bedsheets
                </Text>
                <Text className="mostWanted_description">
                  600+ Options, Explore Starting ₹431
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://ii2.pepperfry.com/assets/ca4fe1ec-3af5-4d62-8d59-af28e1bd4913.jpg"
                  alt="6 Seater Dining Sets"
                />
                <Text className="mostWanted_category">
                  Reclaimed Wood Furniture
                </Text>
                <Text className="mostWanted_description">
                  160+ Options, Explore Starting ₹8455
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://ii3.pepperfry.com/assets/b7a44ef2-6d32-4541-8c94-67f36b753870.jpg"
                  alt="Sofa Sets"
                />
                <Text className="mostWanted_category">
                  Folksy Floral Cushion Covers
                </Text>
                <Text className="mostWanted_description">
                  920+ Options, Explore Starting ₹159
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://ii3.pepperfry.com/assets/d5bee3b9-16d5-4046-94b2-e1cb3429e464.jpg"
                  alt="Carpets "
                />
                <Text className="mostWanted_category">
                  Minimalist Scandinavian Furniture
                </Text>
                <Text className="mostWanted_description">
                  35+ Options, Explore Starting ₹3999
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://ii3.pepperfry.com/assets/e1b7bf1a-af3d-40d3-a394-71bb0c217615.jpg"
                  alt="Coffee Tables"
                />
                <Text className="mostWanted_category">
                  Industrial Chic Night Lamps
                </Text>
                <Text className="mostWanted_description">
                  490+ Options, Explore Starting ₹388
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>

        {/* Check Out These Collections */}
        <Box marginBottom={10}>
          <Text className="homePage_section_title">
            Check Out These Collections
          </Text>
          <SimpleGrid columns={[1, 2, 3]} gap={3}>
            <Box>
              <Link to="#">
                <Image
                  src="https://ii1.pepperfry.com/assets/00568696-53a6-417b-9c20-0afa961945b6.jpg"
                  alt=""
                />
                <Text className="mostWanted_category">Rezzan Collection</Text>
                <Text className="mostWanted_description">
                  65+ Options, Explore Starting ₹7999
                </Text>
              </Link>
            </Box>

            <Box>
              <Link to="#">
                <Image
                  src="https://ii1.pepperfry.com/assets/9624c0c4-ae34-4cdb-8165-c18274b606c7.jpg"
                  alt=""
                />
                <Text className="mostWanted_category">
                  Barcelona Collection
                </Text>
                <Text className="mostWanted_description">
                  10+ Options, Explore Starting ₹7499
                </Text>
              </Link>
            </Box>

            <Box>
              <Link to="#">
                <Image
                  src="https://ii3.pepperfry.com/assets/d3dd20a9-8670-4223-bdbc-9bf631b079b0.jpg"
                  alt=" Rezzan Collection "
                />
                <Text className="mostWanted_category">
                  Stanfield Collection
                </Text>
                <Text className="mostWanted_description">
                  40+ Options, Explore Starting ₹11499
                </Text>
              </Link>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <hr />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
