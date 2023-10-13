import { SxProps } from "@mui/material";
import { background, borderPrimary, borderRadius, gaps, height } from "../../theme";

export const outerContainer: SxProps = {
  width: "100vw",
  minHeight: "100vh",
  background: background.secondary,
  position: "relative",
};

export const topContainer: SxProps = {
  width: "100%",
  height: {
    xs: height.pageLayoutDivideSm,
    md: height.pageLayoutDivideLg,
  },
};

export const middleContainer: SxProps = {
  width: "100%",
  height: "fit-content",
  borderBottom: "solid 2px #FFFFFF",
  padding: {
    xs: "80px 24px 120px 24px",
    md: "80px 80px 120px 80px",
  },
};

export const bottomContainer: SxProps = {
  width: "100%",
  height: {
    xs: height.pageLayoutDivideSm,
    md: height.pageLayoutDivideLg,
  },
  borderBottom: "solid 2px #FFFFFF",
  padding: "24px 80px",
};

export const navContainer: SxProps = {
  padding: {
    xs: "30px 24px 0 24px",
    md: "30px 80px 0 80px",
  },
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
};

export const cardsContainer: SxProps = {
  display: "flex",
  gap: gaps.large,
  my: "24px",
};

export const categoryHeading: SxProps = {
  justifyContent: "center",
  textAlign: "center",
  mt: "80px",
};

export const imageContainer: SxProps = {
  position: "relative",
  height: "250px",
  width: {
    xs: "100%",
    md: "auto",
  },
  minWidth: {
    md: "600px",
  },
  maxWidth: "800px",
  padding: "24px",
  background: "pink",
  borderRadius: borderRadius.sm,
  border: borderPrimary.normal,
};

export const image: object = {
  height: "300px",
  position: "absolute",
  bottom: "0",
};

export const imageContentContainer: SxProps = {
  marginLeft: {
    md: "300px",
  },
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "100%",
};

export const customTextStyle: SxProps = {
  justifyContent: "center",
  textAlign: "center",
};

export const outerContainerImageBlock: SxProps = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
