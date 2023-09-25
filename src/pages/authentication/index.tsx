import * as styles from "./styles";
import loginCoverImage from "../../assets/loginCoverImage.png";
import { Box } from "@mui/material";
import { StyledInput, StyledContainedButton, StyledTextField, StyledCheckBoxField } from "../../components";
import { inputVariants } from "../../components/atoms/input/types/enum";
import { containedButtonVariants } from "../../components/atoms/containedButton/types/enum";
import { textFieldVariants } from "../../components/atoms/textField/types/enum";
import { checkBoxFieldVariants } from "../../components/molecules/checkBoxField/types/enum";
import { useState } from "react";

const Authentication: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const onClickSwitchAuthentication = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <Box sx={styles.loginContainer}>
      <Box sx={styles.loginItemContainer}>
        <Box sx={styles.imageContainer}>
          <img src={loginCoverImage} alt="broken" style={styles.logicCoverImage as object} className="coverImage" />
        </Box>
        <Box sx={styles.contentContainer}>
          <StyledTextField text={`Sign ${isSignUp ? "up" : "in"} into MuZi`} type={textFieldVariants.HEADER_MD} />
          <Box sx={styles.buttonsContainer}>
            <StyledInput type={inputVariants.PRIMARY} label="Email address" />
            <StyledInput type={inputVariants.PASSWORD_PRIMARY} label="Password" />
            {isSignUp ? <StyledInput type={inputVariants.PASSWORD_PRIMARY} label="Confirm Password" /> : null}
            <StyledCheckBoxField
              type={checkBoxFieldVariants.FAVORITE_PRIMARY}
              text="I accept the Terms and Conditions"
            />
            <StyledContainedButton type={containedButtonVariants.PRIMARY} text={isSignUp ? "SIGN UP" : "SIGN IN"} />
            <StyledTextField
              onClick={onClickSwitchAuthentication}
              text={`I ${isSignUp ? "ALREADY" : "DON’T"} HAVE AN ACCOUNT`}
              type={textFieldVariants.GRADIENT_TEXT_MD}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Authentication;
