import * as styles from "./styles";
import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import CoverImage from "../../assets/cover_img2.png";
import { StyledContainedButton, StyledInput, StyledTextField } from "../../components";
import { confirmSignUp } from "../../services";
import { useNavigate, useParams } from "react-router-dom";
import { containedButtonVariants } from "../../components/atoms/containedButton/types/enum";
import { inputVariants } from "../../components/atoms/input/types/enum";
import { Box } from "@mui/material";
import { textFieldVariants } from "../../components/atoms/textField/types/enum";
import { routes } from "../../routes/routes";
import { OTPInputProps } from "./types/interface";

const Otp: React.FC<OTPInputProps> = ({ length, onOTPChange }) => {
  const [otp, setOTP] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const { username } = useParams();
  const navigate = useNavigate();

  const handleOnClickOtpVerify = async () => {
    /*@todo use helper */
    let code = "";
    otp.forEach(e => (code += e));
    if (username) {
      await confirmSignUp({
        username,
        code,
      });
      navigate({
        pathname: routes.AUTHENTICATION,
      });
    }
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const updatedOTP = [...otp];
      updatedOTP[index] = "";
      setOTP(updatedOTP);
      if (onOTPChange) {
        onOTPChange(updatedOTP.join(""));
      }

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (isNaN(Number(value)) || value === "") {
      return;
    }

    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    setOTP(updatedOTP);
    if (onOTPChange) {
      onOTPChange(updatedOTP.join(""));
    }

    if (index < length - 1 && value !== "") {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <Box sx={styles.otpOuterContainer}>
      <Box sx={styles.pageContentContainer}>
        <Box sx={styles.pageInnerContainer}>
          <StyledTextField text="Verification" type={textFieldVariants.HEADER_MD} />
          <Box sx={styles.otpTextContainer}>
            {otp.map((digit, index) => (
              <React.Fragment key={index}>
                <StyledInput
                  type={inputVariants.SHORT_INPUT}
                  inputRef={el => (inputRefs.current[index] = el as HTMLInputElement)}
                  value={digit}
                  onChange={e => handleChange(e as ChangeEvent<HTMLInputElement>, index)}
                  onKeyDown={e => handleBackspace(e as KeyboardEvent<HTMLInputElement>, index)}
                  inputProps={{
                    maxLength: 1,
                    pattern: "[0-9]*",
                  }}
                />
              </React.Fragment>
            ))}
          </Box>
          <StyledContainedButton
            type={containedButtonVariants.PRIMARY}
            text="VERIFY OTP"
            onClick={handleOnClickOtpVerify}
          />
        </Box>
      </Box>
      <Box sx={styles.coverImageContainer}>
        <img src={CoverImage} alt="broken" style={styles.image} />
      </Box>
    </Box>
  );
};

export default Otp;
