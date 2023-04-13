import React from "react";
import "../Pages/home.css";
import Carousel from "better-react-carousel";
import c1 from "../woodenfry_home_image/carousel_image/c1.webp";
import c2 from "../woodenfry_home_image/carousel_image/c2.webp";
import c3 from "../woodenfry_home_image/carousel_image/c3.webp";
import c4 from "../woodenfry_home_image/carousel_image/c4.webp";
import c5 from "../woodenfry_home_image/carousel_image/c5.jpg";
import c6 from "../woodenfry_home_image/carousel_image/c6.webp";
import c7 from "../woodenfry_home_image/carousel_image/c7.webp";
import c8 from "../woodenfry_home_image/carousel_image/c8.webp";
import c9 from "../woodenfry_home_image/carousel_image/c9.webp";
import c10 from "../woodenfry_home_image/carousel_image/c10.webp";
import c11 from "../woodenfry_home_image/carousel_image/c11.webp";
import c12 from "../woodenfry_home_image/carousel_image/c12.webp";
import c13 from "../woodenfry_home_image/carousel_image/c13.webp";
import c14 from "../woodenfry_home_image/carousel_image/c14.webp";
import c15 from "../woodenfry_home_image/carousel_image/c15.webp";
import c16 from "../woodenfry_home_image/carousel_image/c16.webp";
import c17 from "../woodenfry_home_image/carousel_image/c17.webp";
import c18 from "../woodenfry_home_image/carousel_image/c18.webp";
import c19 from "../woodenfry_home_image/carousel_image/c19.webp";
import c20 from "../woodenfry_home_image/carousel_image/c20.webp";
import { Image, Text } from "@chakra-ui/react";
import instaram_logo from "../woodenfry_home_image/carousel_image/instagram.webp";
import { Link } from "react-router-dom";
const images = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20,
];

const CarouselImage = () => {
  return (
    <div>
      <Carousel cols={4} rows={1} gap={5} loop>
        {images.map((item) => (
          <Carousel.Item>
            <Link
              to="https://www.pepperfry.com/pages/design_inspiration.html"
              target="blank"
            >
              <Image width="100%" src={item} borderTopRadius={"20px"} />
              <Text id="instagram_official">woodenfry_official</Text>
              <Text id="instagram_id">@woodenfry_official</Text>
              <Image src={instaram_logo} m={"auto"} width={"10%"} />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImage;
