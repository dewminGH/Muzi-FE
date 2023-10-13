import * as styles from "./styles";
import { background } from "../theme";
import { Box } from "@mui/material";

export const Footer: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const CopyrightNotice = () => {
    return <p>&copy; {new Date().getFullYear()} muzi. All rights reserved.</p>;
  };

  return (
    <Box
      sx={
        isDark
          ? { ...styles.footerOuterContainer, ...{ background: background.primary } }
          : { ...styles.footerOuterContainer, ...{ background: background.secondary } }
      }
    >
      <Box sx={styles.footerContainer}>
        <Box sx={styles.footerTitle}>MUZI</Box>
        <Box sx={styles.copyWrite}>{CopyrightNotice()}</Box>
      </Box>
    </Box>
  );
};
