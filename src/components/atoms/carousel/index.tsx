/* eslint-disable */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./styles";
import React from "react";
import Slider from "react-slick";
import StyledCard from "../../molecules/card";
import { ICarousel } from "./types/interface";
import { useCarouselSettings } from "./config";

const StyledCarousel: React.FC<ICarousel> = ({ cardsList }) => {
  const carouselSettings = useCarouselSettings();

  return (
    <Slider {...carouselSettings}>
      {cardsList.map(({ src, content, title }, index) => (
        <StyledCard content={content} src={src} title={title} key={index} styles={styles.card} />
      ))}
    </Slider>
  );
};

export default StyledCarousel;
