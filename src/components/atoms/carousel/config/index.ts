import { useTheme, useMediaQuery } from "@mui/material";

export const useCarouselSettings = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 3,
    slidesToScroll: 1,
    arrows: true,
  };
};
