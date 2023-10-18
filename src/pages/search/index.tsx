import * as styles from "./styles";
import SearchCover from "../../assets/landing/search.svg";
import TopNavigation from "../../_layouts/topNav";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Footer } from "../../_layouts/footer";
import { background, colors, gaps, themeNavBarPadding, themePagePadding } from "../../theme";
import {
  StyledCardGrid,
  StyledContainedButton,
  StyledInput,
  StyledLoadingCircle,
  StyledMultipleSelect,
} from "../../components";
import { inputVariants } from "../../components/atoms/input/types/enum";
import { validateUserAuthentication } from "../../_data/localStorage";
import { useNavigate } from "react-router-dom";
import { getAllCollaborators, getRecommends } from "../../services";
import { ICollaborator } from "../../services/types/interface";
import { IStyledCard } from "../../components/molecules/card/types/interface";
import { optionConfig } from "./config";
import { containedButtonVariants } from "../../components/atoms/containedButton/types/enum";

const Search: React.FC = () => {
  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);
  const [cardList, setCardList] = useState<IStyledCard[]>([]);
  const [caption, setCaption] = useState<string>("");
  const [selectedTalents, setSelectedTalents] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const getNlpRecommends = (size: number, bio?: string, country?: string[], talents?: string[]) => {
    setIsLoading(true);
    getRecommends(collaborators, size, { bio, country, talents }).then(({ response }) => {
      if (response && collaborators.length > 0) {
        setCardList(response);
      }
      setIsLoading(false);
    });
  };

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
      getNlpRecommends(4);
    }
    // eslint-disable-next-line
  }, [collaborators]);

  const handleOnClickSearch = () => {
    getNlpRecommends(8, caption, selectedCountry, selectedTalents);
  };

  return (
    <Box sx={{ background: background.primary, minHeight: "100vh", position: "relative" }}>
      <Box sx={{ padding: themeNavBarPadding }}>
        <TopNavigation />
      </Box>
      <Box
        sx={{
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledInput
          type={inputVariants.PRIMARY}
          label="Search"
          style={{
            position: "absolute",
            zIndex: "100",
            display: "flex",
            top: "20%",
            width: { xs: "calc(100% - 48px)", md: "calc(100% - 160px)" },
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "2px",
              borderColor: colors.primary,
            },
            "& label": {
              color: colors.primary,
            },
          }}
          onChange={({ target: { value } }) => {
            setCaption(value);
          }}
        />
        <img
          src={SearchCover}
          style={{ width: "100vw", height: "auto", maxHeight: "250px", objectFit: "cover" }}
          alt="broken"
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            background: "red",
            minHeight: "fit-content",
            width: "100vw",
            bottom: "0",
            padding: { xs: "24px", md: "24px 80px" },
            gap: gaps.large,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: gaps.large, flexDirection: { xs: "column", md: "row" } }}>
            <StyledMultipleSelect
              label="Talents"
              optionsList={optionConfig}
              selectedOptions={setSelectedTalents}
              styles={{
                mb: "12px",
              }}
            />
            <StyledMultipleSelect
              label="Country"
              optionsList={optionConfig}
              selectedOptions={setSelectedCountry}
              styles={{
                mb: "12px",
              }}
            />
          </Box>
          <StyledContainedButton type={containedButtonVariants.SEARCH} text="Search" onClick={handleOnClickSearch} />
        </Box>
      </Box>
      {isLoading ? (
        <Box sx={styles.loaderContainer}>
          <StyledLoadingCircle />
        </Box>
      ) : (
        <Box sx={{ padding: themePagePadding }}>
          <StyledCardGrid cards={cardList} />
        </Box>
      )}
      <Footer isDark />
    </Box>
  );
};

export default Search;
