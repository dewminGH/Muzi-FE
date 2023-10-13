/* eslint-disable */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./styles";
import React from "react";
import Slider from "react-slick";
import defaultURL from "../../../assets/cover_img2.png";
import { ICarousel } from "./types/interface";
import { useCarouselSettings } from "./config";
import StyledCard from "../../molecules/card";

const StyledCarousel: React.FC<ICarousel> = ({ cardsList }) => {
  const carouselSettings = useCarouselSettings();

  return (
    <Slider {...carouselSettings}>
      {cardsList.map(({ src, content, title }, index) => (
        <StyledCard content={content} src={src || defaultURL} title={title} key={index} styles={styles.card} />
      ))}
    </Slider>
  );
};

export default StyledCarousel;
