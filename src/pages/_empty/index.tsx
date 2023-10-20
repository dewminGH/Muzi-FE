import * as styles from "./styles";
import TopNavigation from "../../_layouts/topNav";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Footer } from "../../_layouts/footer";

const EmptyPage: React.FC = () => {
  const { content } = useParams();

  return (
    <>
      <Box sx={styles.otterContainer}>
        <TopNavigation />
        <Box sx={styles.innerContainer}>
          <Box sx={styles.version}>Release Version 1.0</Box>
          <Box sx={styles.content}>{content}</Box>
        </Box>
      </Box>
      <Footer isDark />
    </>
  );
};

export default EmptyPage;
