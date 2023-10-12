import * as styles from "./styles";
import TopNavigation from "../../_layouts/topNav";
import Singer from "../../assets/singer.png";
import { Box } from "@mui/material";
import { StyledCarousel, StyledTextField } from "../../components";
import { textFieldVariants } from "../../components/atoms/textField/types/enum";

const Home: React.FC = () => {
  return (
    <Box sx={styles.outerContainer}>
      {/* promotion page top content */}
      <Box sx={styles.topContainer}>
        <Box sx={styles.navContainer}>
          <TopNavigation />
          <Box sx={styles.imageContainer}>
            <img src={Singer} style={styles.image} alt="broken" />
            <Box sx={styles.imageContentContainer}>
              <StyledTextField
                text="Make music together. Online Collaborate with anyone, from anywhere."
                type={textFieldVariants.FLOAT_HEADER_MD}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* promotion page middle content */}
      <Box sx={styles.middleContainer}>
        <StyledTextField
          text="YO ! Looking for your Dream Collaborator ?"
          type={textFieldVariants.FLOAT_HEADER_MD}
          styles={styles.customTextStyle}
        />
        <StyledTextField
          text="Click here to Find Now ..."
          type={textFieldVariants.HEADER_SM}
          styles={styles.customTextStyle}
          onClick={() => {
            /* @todo navigation required */
          }}
        />

        <StyledTextField
          text="Hey... here are some people you might interested in !"
          type={textFieldVariants.FLOAT_HEADER_MD}
          styles={styles.categoryHeading}
        />
        {/* trending lits */}
        {/*  hard code value for temp */}
        {/*  remove this @todo */}
        <Box sx={styles.cardsContainer}></Box>
        <StyledCarousel
          cardsList={[
            { title: "new", content: "shit" },
            { title: "new", content: "shit" },
            { title: "new", content: "shit" },
            { title: "new", content: "shit" },
            { title: "new", content: "shit" },
            { title: "new", content: "shit" },
            { title: "new", content: "shit" },
          ]}
        />
      </Box>
      {/* promotion page bottom content */}
      <Box sx={styles.bottomContainer}>
        <div>------------------BUILDING YOU WEB Neeeeeeeeeed foooter</div>
      </Box>
    </Box>
  );
};

export default Home;
