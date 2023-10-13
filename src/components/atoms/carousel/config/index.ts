import { useTheme, useMediaQuery } from "@mui/material";

export const useCarouselSettings = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  let slidesToShow = 3;

  if (isLargeScreen) {
    slidesToShow = 4;
  } else if (isMobile) {
    slidesToShow = 2;
  }

  return {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
  };
};
