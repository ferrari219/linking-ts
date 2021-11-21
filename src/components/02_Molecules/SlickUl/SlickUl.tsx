/** @jsxImportSource @emotion/react @*/
import { css } from "@emotion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IslickulProps {
  children?: React.ReactNode;
}

const SlickUl = ({ children }: IslickulProps) => {
  return <Slider {...settings}>{children}</Slider>;
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default SlickUl;
