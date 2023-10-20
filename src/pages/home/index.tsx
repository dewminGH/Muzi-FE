import * as styles from "./styles";
import TopNavigation from "../../_layouts/topNav";
import Singer from "../../assets/singer.png";
import SoundWave from "../../assets/soundWave.svg";
import { Box } from "@mui/material";
import { StyledCarousel, StyledLoadingCircle, StyledTextField } from "../../components";
import { textFieldVariants } from "../../components/atoms/textField/types/enum";
import { useEffect, useState } from "react";
import { validateUserAuthentication } from "../../_data/localStorage";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../_layouts/footer";
import { getAllCollaborators, getRecommends } from "../../services";
import { ICollaborator } from "../../services/types/interface";
import { ICarouselItem } from "../../components/atoms/carousel/types/interface";

const Home: React.FC = () => {
  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);
  const [cardData, setCardData] = useState<ICarouselItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  /* access control for un-authenticate users */
  useEffect(() => {
    if (!validateUserAuthentication()) {
      navigate({ pathname: "/authentication" });
    } else if (collaborators.length < 1) {
      setIsLoading(true);
      getAllCollaborators().then(({ response /* error */ }) => {
        if (response?.Items) {
          setCollaborators(response?.Items);
        } else {
          /* error handle here .. */
        }
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (collaborators.length > 0) {
      setIsLoading(true);
      getRecommends(collaborators, 7).then(({ response }) => {
        if (response && collaborators.length > 0) {
          setCardData(response);
        }
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [collaborators]);

  return (
    <Box sx={styles.outerContainer}>
      {/* promotion page top content */}
      <Box sx={styles.topContainer}>
        <Box sx={styles.navContainer}>
          <TopNavigation />
          <Box sx={styles.outerContainerImageBlock}>
            <Box sx={styles.imageContainer}>
              <img src={Singer} style={styles.image} alt="broken" />
              <img src={SoundWave} style={styles.imageSoundWave} alt="broken" />
              <Box sx={styles.imageContentContainer}>
                <StyledTextField
                  text="Make music together. Online Collaborate with anyone, from anywhere."
                  type={textFieldVariants.FLOAT_HEADER_MD}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* promotion page middle content */}
      <Box sx={styles.middleContainer}>
        <StyledTextField
          text="Unlock the Future of Music Industry"
          type={textFieldVariants.FLOAT_HEADER_MD}
          styles={styles.customTextStyle}
        />
        <StyledTextField
          text="Unleash the power of AI! Dive into a world of limitless creativity with just one click."
          type={textFieldVariants.HEADER_SM}
          styles={styles.customTextStyle}
        />
        <StyledTextField
          text=" Explore Now!"
          type={textFieldVariants.HEADER_SM}
          styles={styles.customTextStyle}
          onClick={() => {
            navigate({ pathname: "/client/find-now" });
          }}
        />

        <StyledTextField
          text="Our Popular Creatives"
          type={textFieldVariants.FLOAT_HEADER_MD}
          styles={styles.categoryHeading}
        />
        {/* trending lits */}
        {/*  hard code value for temp */}
        {/*  remove this @todo */}
        {isLoading ? (
          <Box sx={styles.loaderContainer}>
            <StyledLoadingCircle />
          </Box>
        ) : (
          <StyledCarousel cardsList={cardData} />
        )}
      </Box>
      <Footer isDark />
    </Box>
  );
};

export default Home;
