import * as styles from "./styles";
import loginCoverImage from "../../assets/loginCoverImage.png";
import Logo from "../../assets/muziLogo.png";
import { Avatar, Box } from "@mui/material";
import { StyledInput, StyledContainedButton, StyledTextField, StyledCheckBoxField } from "../../components";
import { inputVariants } from "../../components/atoms/input/types/enum";
import { containedButtonVariants } from "../../components/atoms/containedButton/types/enum";
import { textFieldVariants } from "../../components/atoms/textField/types/enum";
import { checkBoxFieldVariants } from "../../components/molecules/checkBoxField/types/enum";
import { useState } from "react";
import { signInUser, signUpUser } from "../../services";
import { userRoles } from "../../services/types/enum";
import { useNavigate } from "react-router-dom";

const Authentication: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [username, setusername] = useState<string>("");
  const [name, setName] = useState<string>("");

  const navigate = useNavigate();

  /* switch authentication sign-in / sign-up */
  const handleOnClickSwitchAuthentication = () => {
    setIsSignUp(!isSignUp);
  };

  /* authentication handle @todo error handle*/
  const handleOnClickAuthentication = async () => {
    if (isSignUp && handlePasswordValidation()) {
      await signUpUser({ name, profile: userRoles.MEMBER, password, username });
      navigate({
        pathname: `/authentication/otp/${username}` /* rote as enums  */,
      });
    } else {
      await signInUser({ username, password });
      navigate({
        pathname: "/",
      });
    }
  };

  /* password validations for sign up process @todo*/
  const handlePasswordValidation = () => {
    return password === confirmPassword ? true : false;
  };

  return (
    <Box sx={styles.loginContainer}>
      <Box sx={styles.loginItemContainer}>
        <Box sx={styles.imageContainer}>
          <img src={loginCoverImage} alt="broken" style={styles.logicCoverImage as object} className="coverImage" />
        </Box>
        <Box sx={styles.contentContainer}>
          <Box sx={{ display: "flex" }}>
            <Avatar src={Logo} alt="broken" sx={{ width: 80, height: "fit-content", marginRight: "24px" }} />
            <StyledTextField text={`Sign ${isSignUp ? "up" : "in"} into MuZi`} type={textFieldVariants.HEADER_MD} />
          </Box>
          <Box sx={styles.buttonsContainer}>
            {isSignUp ? (
              <StyledInput
                type={inputVariants.PRIMARY}
                label="Account Name"
                onChange={({ target: { value } }) => setName(value)}
              />
            ) : null}
            <StyledInput
              type={inputVariants.PRIMARY}
              label="Email address"
              onChange={({ target: { value } }) => setusername(value)}
            />
            <StyledInput
              type={inputVariants.PASSWORD_PRIMARY}
              label="Password"
              onChange={({ target: { value } }) => setPassword(value)}
            />
            {isSignUp ? (
              <StyledInput
                type={inputVariants.PASSWORD_PRIMARY}
                label="Confirm Password"
                onChange={({ target: { value } }) => setConfirmPassword(value)}
              />
            ) : null}
            <StyledCheckBoxField
              type={checkBoxFieldVariants.FAVORITE_PRIMARY}
              text="I accept the Terms and Conditions"
            />
            <StyledContainedButton
              type={containedButtonVariants.PRIMARY}
              text={isSignUp ? "SIGN UP" : "SIGN IN"}
              onClick={handleOnClickAuthentication}
            />
            <StyledTextField
              onClick={handleOnClickSwitchAuthentication}
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
